from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor
from pathlib import Path
import sqlite3
import multiprocessing
import tempfile
import threading
import unittest
from unittest.mock import patch
from reservations import Reservations, Held, initialize

NOW = 2_000_000_000
WINDOW = 604800  # Policy oracle: independent of the implementation's constant.

def contender(args):
    path, number = args
    authority = Reservations(Path(path), lambda: NOW)
    try:
        return authority.reserve(f'intent-{number}', 'synthetic-contact')['status']
    except Held:
        return 'held'


def crash_fixture(path, token, phase, ready, wait):
    """Disposable child only; the parent kills this exact process after readiness."""
    api = Reservations(Path(path), lambda: NOW)
    if phase == 'committed_dispatch':
        api.begin_dispatch('intent', token)
        ready.send('dispatch_committed')
        wait.wait(30)
    else:
        connect = sqlite3.connect
        class PauseBeforeCommit:
            def __init__(self, *args, **kwargs):
                object.__setattr__(self, 'db', connect(*args, **kwargs))
            def __getattr__(self, key): return getattr(self.db, key)
            def __setattr__(self, key, value): setattr(self.db, key, value)
            def commit(self):
                ready.send('completion_uncommitted')
                wait.wait(30)
                raise RuntimeError('parent did not kill fixture in time')
        with patch('reservations.sqlite3.connect', PauseBeforeCommit):
            api.complete('intent', token, 'synthetic-receipt')


class ReservationTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(prefix='reservation-offline-')
        self.addCleanup(self.temp.cleanup)
        self.path = Path(self.temp.name) / 'fixture.sqlite'
        initialize(self.path)
        self.time = NOW
        self.api = Reservations(self.path, lambda: self.time)
        self.api.add_fixture_contact('synthetic-contact', reconciled=True)

    def reserve(self):
        return self.api.reserve('intent', 'synthetic-contact')['token']

    def test_100_concurrent_connections_one_winner(self):
        barrier = threading.Barrier(20)
        def aligned(args):
            barrier.wait(timeout=10)
            return contender(args)
        with ThreadPoolExecutor(max_workers=20) as pool:
            results = list(pool.map(aligned, [(str(self.path), n) for n in range(100)]))
        self.assertEqual(results.count('reserved'), 1)
        self.assertEqual(results.count('held'), 99)

    def test_independent_processes_one_winner(self):
        with ProcessPoolExecutor(max_workers=4) as pool:
            results = list(pool.map(contender, [(str(self.path), n) for n in range(20)]))
        self.assertEqual(results.count('reserved'), 1)

    def test_exact_168_hour_boundary(self):
        self.api.add_fixture_contact('prior', reconciled=True, last_sent=NOW-WINDOW+1)
        with self.assertRaisesRegex(Held, 'window'):
            self.api.reserve('early', 'prior')
        self.time += 1
        self.assertEqual(self.api.reserve('at-boundary', 'prior')['status'], 'reserved')

    def test_unknown_contact_and_unreconciled_history_fail_closed(self):
        self.api.add_fixture_contact('unknown-history', reconciled=False)
        for contact in ('absent', 'unknown-history'):
            with self.assertRaisesRegex(Held, 'unreconciled'):
                self.api.reserve('blocked', contact)

    def test_missing_corrupt_and_bad_schema_fail_closed(self):
        for name, data in [('missing', None), ('corrupt', b'not sqlite')]:
            path = Path(self.temp.name)/name
            if data: path.write_bytes(data)
            with self.assertRaisesRegex(Held, 'storage'):
                Reservations(path, lambda: NOW).reserve('a', 'b')
        self.assertFalse((Path(self.temp.name)/'missing').exists())
        with sqlite3.connect(self.path) as db:
            db.execute('DELETE FROM meta')
        with self.assertRaisesRegex(Held, 'schema'):
            self.reserve()

    def test_suppression_before_dispatch(self):
        token = self.reserve()
        self.api.suppress('synthetic-contact')
        with self.assertRaises(Held): self.api.begin_dispatch('intent', token)
        with self.assertRaisesRegex(Held, 'suppressed'):
            self.api.reserve('other', 'synthetic-contact')

    def test_replay_never_returns_token(self):
        token = self.reserve()
        replay = self.api.reserve('intent', 'synthetic-contact')
        self.assertNotIn('token', replay)
        self.assertTrue(replay['replay'])
        self.api.begin_dispatch('intent', token)
        with self.assertRaises(Held): self.api.begin_dispatch('intent', token)

    def test_unknown_outcome_survives_restart_and_seven_days(self):
        token = self.reserve()
        self.api.begin_dispatch('intent', token)
        self.api.complete('intent', token)
        self.time += 2*WINDOW
        restarted = Reservations(self.path, lambda: self.time)
        with self.assertRaisesRegex(Held, 'uncertain'):
            restarted.reserve('another-channel', 'synthetic-contact')

    def test_crash_recovery_never_replays(self):
        token = self.reserve()
        self.api.begin_dispatch('intent', token)
        self.time += 300
        self.api.recover_uncertain()
        with self.assertRaises(Held): self.api.complete('intent', token, 'fake-receipt')
        with self.assertRaises(Held): self.api.reserve('retry', 'synthetic-contact')

    def test_expired_reservation_holds_and_fences(self):
        token = self.reserve()
        self.time += 300
        with self.assertRaises(Held): self.api.begin_dispatch('intent', token)
        self.api.recover_uncertain()
        with self.assertRaises(Held): self.api.reserve('retry', 'synthetic-contact')

    def test_receipt_starts_cooldown_and_cannot_repeat(self):
        token = self.reserve()
        self.api.begin_dispatch('intent', token)
        self.api.complete('intent', token, 'synthetic-receipt')
        with self.assertRaises(Held): self.api.complete('intent', token, 'synthetic-receipt')
        with self.assertRaises(Held): self.api.reserve('new', 'synthetic-contact')
        self.time += WINDOW
        self.assertEqual(self.api.reserve('new', 'synthetic-contact')['status'], 'reserved')

    def test_stale_tokens_and_clock_rollback(self):
        token = self.reserve()
        with self.assertRaises(Held): self.api.begin_dispatch('intent', 'wrong')
        self.time -= 1
        with self.assertRaises(Held): self.api.begin_dispatch('intent', token)

    def test_suppression_after_dispatch_does_not_erase_receipt(self):
        token = self.reserve()
        self.api.begin_dispatch('intent', token)
        self.api.suppress('synthetic-contact')
        self.api.complete('intent', token, 'synthetic-receipt')
        self.time += WINDOW
        with self.assertRaisesRegex(Held, 'suppressed'):
            self.api.reserve('other', 'synthetic-contact')

    def test_concurrent_dispatch_consumes_token_once(self):
        token = self.reserve()
        barrier = threading.Barrier(10)
        def dispatch(_):
            barrier.wait(timeout=10)
            try:
                Reservations(self.path, lambda: NOW).begin_dispatch('intent', token)
                return True
            except Held: return False
        with ThreadPoolExecutor(max_workers=10) as pool:
            self.assertEqual(sum(pool.map(dispatch, range(30))), 1)

    def test_storage_lock_timeout_fails_closed(self):
        db = sqlite3.connect(self.path)
        try:
            db.execute('BEGIN IMMEDIATE')
            with self.assertRaisesRegex(Held, 'storage_unavailable'):
                self.reserve()
        finally:
            db.rollback()
            db.close()
        self.assertEqual(self.api.reserve('after-unlock', 'synthetic-contact')['status'], 'reserved')

    def test_same_intent_different_contact_is_rejected(self):
        self.reserve()
        self.api.add_fixture_contact('other-fixture', reconciled=True)
        with self.assertRaisesRegex(Held, 'intent_conflict'):
            self.api.reserve('intent', 'other-fixture')

    def test_optout_before_contact_exists_is_durable(self):
        self.api.suppress('not-yet-discovered')
        restarted = Reservations(self.path, lambda: NOW)
        with self.assertRaisesRegex(Held, 'suppressed'):
            restarted.reserve('future-intent', 'not-yet-discovered')
        with self.assertRaises(Held):
            restarted.add_fixture_contact('not-yet-discovered', reconciled=True)

    def test_clock_rollback_after_dispatch_cannot_shorten_window(self):
        token = self.reserve()
        self.time += 100
        self.api.begin_dispatch('intent', token)
        self.time -= 50
        with self.assertRaisesRegex(Held, 'clock_skew'):
            self.api.complete('intent', token, 'receipt')
        self.time += WINDOW
        with self.assertRaises(Held): self.api.reserve('retry', 'synthetic-contact')

    def test_recovery_does_not_revoke_unexpired_dispatch(self):
        token = self.reserve()
        self.api.begin_dispatch('intent', token)
        self.api.recover_uncertain()
        self.api.complete('intent', token, 'receipt')

    def test_corrupt_history_time_is_not_interpreted_as_no_history(self):
        with sqlite3.connect(self.path) as db:
            db.execute("UPDATE contacts SET last_sent='malformed'")
        with self.assertRaisesRegex(Held, 'invalid_history'):
            self.reserve()

    def test_timeout_after_dispatch_never_releases_contact(self):
        token = self.reserve()
        self.api.begin_dispatch('intent', token)
        db = sqlite3.connect(self.path)
        try:
            db.execute('BEGIN IMMEDIATE')
            with self.assertRaisesRegex(Held, 'storage_unavailable'):
                self.api.complete('intent', token, 'receipt')
        finally:
            db.rollback(); db.close()
        self.time += WINDOW
        with self.assertRaises(Held): self.api.reserve('retry', 'synthetic-contact')
        self.api.recover_uncertain()
        with self.assertRaises(Held): self.api.complete('intent', token, 'receipt')

    def test_failure_mid_completion_rolls_back_both_writes(self):
        token = self.reserve()
        self.api.begin_dispatch('intent', token)
        with sqlite3.connect(self.path) as db:
            db.execute("CREATE TRIGGER fail_update BEFORE UPDATE OF last_sent ON contacts BEGIN SELECT RAISE(ABORT,'fixture'); END")
        with self.assertRaisesRegex(Held, 'storage'):
            self.api.complete('intent', token, 'receipt')
        with sqlite3.connect(self.path) as db:
            self.assertEqual(db.execute('SELECT status,receipt FROM intents').fetchone(), ('dispatching',None))
            self.assertIsNone(db.execute('SELECT last_sent FROM contacts').fetchone()[0])
        with self.assertRaises(Held): self.api.reserve('retry', 'synthetic-contact')

    def test_suppression_dispatch_race_is_serializable(self):
        token = self.reserve()
        barrier = threading.Barrier(2)
        def suppress():
            barrier.wait(); Reservations(self.path,lambda: NOW).suppress('synthetic-contact')
        def dispatch():
            barrier.wait()
            try:
                Reservations(self.path,lambda: NOW).begin_dispatch('intent',token)
                return True
            except Held: return False
        with ThreadPoolExecutor(max_workers=2) as pool:
            a=pool.submit(suppress); b=pool.submit(dispatch)
            a.result(); won=b.result()
        with sqlite3.connect(self.path) as db:
            self.assertEqual(db.execute('SELECT suppressed FROM contacts').fetchone()[0],1)
            self.assertEqual(db.execute('SELECT status FROM intents').fetchone()[0], 'dispatching' if won else 'suppressed')
        with self.assertRaises(Held): self.api.reserve('retry', 'synthetic-contact')

    def test_commit_succeeded_but_ack_lost_does_not_release_reservation(self):
        connect = sqlite3.connect
        class LostAck:
            def __init__(self,*args,**kwargs):
                object.__setattr__(self,'db',connect(*args,**kwargs))
            def __getattr__(self,key): return getattr(self.db,key)
            def __setattr__(self,key,value): setattr(self.db,key,value)
            def commit(self):
                self.db.commit()
                raise sqlite3.OperationalError('fixture lost acknowledgement after commit')
        with patch('reservations.sqlite3.connect', LostAck):
            with self.assertRaisesRegex(Held,'storage_unavailable'):
                self.reserve()
        replay=self.api.reserve('intent','synthetic-contact')
        self.assertNotIn('token',replay)
        with self.assertRaises(Held): self.api.reserve('different','synthetic-contact')

    def state(self):
        with sqlite3.connect(self.path) as db:
            return db.execute('SELECT status,receipt,dispatched_at,last_sent FROM intents JOIN contacts ON intents.contact=contacts.id').fetchone()

    def test_expired_dispatch_accepts_receipt_before_recovery(self):
        token = self.reserve()
        self.api.begin_dispatch('intent', token)
        self.time += 301
        self.api.complete('intent', token, 'late-receipt')
        self.assertEqual(self.state(), ('sent', 'late-receipt', NOW, NOW+301))
        self.api.recover_uncertain()
        self.assertEqual(self.state()[0], 'sent')
        with self.assertRaises(Held): self.api.reserve('retry', 'synthetic-contact')

    def test_expired_dispatch_rejects_receipt_after_recovery(self):
        token = self.reserve()
        self.api.begin_dispatch('intent', token)
        self.time += 301
        self.api.recover_uncertain()
        with self.assertRaisesRegex(Held, 'stale_or_consumed_token'):
            self.api.complete('intent', token, 'late-receipt')
        self.assertEqual(self.state(), ('unknown', None, NOW, None))
        self.time += 2*WINDOW
        with self.assertRaises(Held): self.api.reserve('retry', 'synthetic-contact')

    def lost_ack(self):
        connect = sqlite3.connect
        class LostAck:
            def __init__(self,*args,**kwargs):
                object.__setattr__(self,'db',connect(*args,**kwargs))
            def __getattr__(self,key): return getattr(self.db,key)
            def __setattr__(self,key,value): setattr(self.db,key,value)
            def commit(self):
                self.db.commit()
                raise sqlite3.OperationalError('fixture lost commit acknowledgement')
        return patch('reservations.sqlite3.connect', LostAck)

    def test_begin_dispatch_commit_ack_loss_remains_consumed(self):
        token = self.reserve()
        with self.lost_ack(), self.assertRaisesRegex(Held, 'storage_unavailable'):
            self.api.begin_dispatch('intent', token)
        self.assertEqual(self.state(), ('dispatching', None, NOW, None))
        restarted = Reservations(self.path, lambda: NOW)
        with self.assertRaises(Held): restarted.begin_dispatch('intent', token)
        with self.assertRaises(Held): restarted.reserve('retry', 'synthetic-contact')
        self.assertNotIn('token', restarted.reserve('intent', 'synthetic-contact'))

    def test_complete_commit_ack_loss_keeps_receipt_and_cooldown(self):
        token = self.reserve()
        self.api.begin_dispatch('intent', token)
        with self.lost_ack(), self.assertRaisesRegex(Held, 'storage_unavailable'):
            self.api.complete('intent', token, 'synthetic-receipt')
        self.assertEqual(self.state(), ('sent', 'synthetic-receipt', NOW, NOW))
        restarted = Reservations(self.path, lambda: NOW+WINDOW-1)
        with self.assertRaises(Held): restarted.complete('intent', token, 'duplicate-receipt')
        with self.assertRaises(Held): restarted.reserve('retry', 'synthetic-contact')
        self.assertNotIn('token', restarted.reserve('intent', 'synthetic-contact'))

    def test_recovery_completion_race_has_only_serial_outcomes(self):
        token = self.reserve()
        self.api.begin_dispatch('intent', token)
        self.time += 301
        barrier = threading.Barrier(2)
        def recover():
            barrier.wait(timeout=10)
            Reservations(self.path, lambda: self.time).recover_uncertain()
        def complete():
            barrier.wait(timeout=10)
            try:
                Reservations(self.path, lambda: self.time).complete('intent', token, 'race-receipt')
                return True
            except Held as error:
                self.assertEqual(str(error), 'stale_or_consumed_token')
                return False
        with ThreadPoolExecutor(max_workers=2) as pool:
            a = pool.submit(recover); b = pool.submit(complete)
            a.result(timeout=15); completed = b.result(timeout=15)
        expected = ('sent', 'race-receipt', NOW, NOW+301) if completed else ('unknown', None, NOW, None)
        self.assertEqual(self.state(), expected)
        with self.assertRaises(Held): self.api.reserve('retry', 'synthetic-contact')

    def kill_fixture(self, token, phase, expected_signal):
        ctx = multiprocessing.get_context('spawn')
        parent, child = ctx.Pipe(duplex=False)
        wait = ctx.Event()
        process = ctx.Process(target=crash_fixture, args=(str(self.path), token, phase, child, wait))
        process.start()
        child.close()
        try:
            self.assertTrue(parent.poll(15), 'child never reached intended crash boundary')
            self.assertEqual(parent.recv(), expected_signal)
            self.assertTrue(process.is_alive())
            process.kill()
            process.join(10)
            self.assertFalse(process.is_alive())
            self.assertEqual(process.exitcode, -9)
        finally:
            if process.is_alive():
                process.kill(); process.join(10)
            parent.close()
            process.close()

    def test_process_killed_after_committed_dispatch_stays_held(self):
        token = self.reserve()
        self.kill_fixture(token, 'committed_dispatch', 'dispatch_committed')
        self.assertEqual(self.state(), ('dispatching', None, NOW, None))
        restarted = Reservations(self.path, lambda: NOW+301)
        with self.assertRaises(Held): restarted.reserve('retry', 'synthetic-contact')
        restarted.recover_uncertain()
        self.assertEqual(self.state(), ('unknown', None, NOW, None))

    def test_process_killed_before_completion_commit_rolls_back(self):
        token = self.reserve()
        self.api.begin_dispatch('intent', token)
        self.kill_fixture(token, 'uncommitted_completion', 'completion_uncommitted')
        self.assertEqual(self.state(), ('dispatching', None, NOW, None))
        restarted = Reservations(self.path, lambda: NOW+301)
        with self.assertRaises(Held): restarted.reserve('retry', 'synthetic-contact')
        restarted.recover_uncertain()
        self.assertEqual(self.state(), ('unknown', None, NOW, None))

if __name__ == '__main__':
    unittest.main()
