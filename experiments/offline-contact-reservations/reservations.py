"""Offline prototype only. No transport, service listener, credentials or real data."""
import sqlite3
import uuid
from contextlib import contextmanager

WINDOW = 168 * 3600


class Held(RuntimeError):
    pass


SCHEMA = '''
CREATE TABLE meta(version INTEGER NOT NULL CHECK(version=2));
INSERT INTO meta VALUES(2);
CREATE TABLE contacts(
 id TEXT PRIMARY KEY, reconciled INTEGER NOT NULL CHECK(reconciled IN (0,1)),
 suppressed INTEGER NOT NULL DEFAULT 0 CHECK(suppressed IN (0,1)),
 last_sent INTEGER CHECK(last_sent>=0));
CREATE TABLE intents(
 id TEXT PRIMARY KEY, contact TEXT NOT NULL REFERENCES contacts(id),
 token TEXT UNIQUE NOT NULL, status TEXT NOT NULL
 CHECK(status IN ('reserved','dispatching','sent','unknown','suppressed')),
 reserved_at INTEGER NOT NULL, expires INTEGER NOT NULL, receipt TEXT,
 dispatched_at INTEGER);
CREATE UNIQUE INDEX one_active_contact ON intents(contact)
 WHERE status IN ('reserved','dispatching','unknown');
'''


def initialize(path):
    """Explicit fixture setup; operational paths never create missing databases."""
    path.touch(exist_ok=False)
    with sqlite3.connect(path) as db:
        db.executescript(SCHEMA)


class Reservations:
    def __init__(self, path, clock):
        self.path = path.resolve()
        self.clock = clock  # Authority clock; injected only for deterministic tests.

    @contextmanager
    def transaction(self):
        db = None
        try:
            db = sqlite3.connect(self.path.as_uri() + '?mode=rw', uri=True, timeout=5)
            db.row_factory = sqlite3.Row
            db.execute('PRAGMA foreign_keys=ON')
            db.execute('PRAGMA synchronous=FULL')
            db.execute('BEGIN IMMEDIATE')
            rows = db.execute('SELECT version FROM meta').fetchall()
            if len(rows) != 1 or rows[0][0] != 2:
                raise Held('schema_unavailable')
            yield db
            db.commit()
        except sqlite3.Error as error:
            raise Held('storage_unavailable') from error
        finally:
            if db is not None:
                db.close()  # Roll back uncommitted failures.

    def now(self):
        value = self.clock()
        if type(value) is not int or not 0 <= value <= 2**63 - 601:
            raise Held('invalid_authority_time')
        return value

    def add_fixture_contact(self, contact, *, reconciled, last_sent=None):
        """Test bootstrap only, not a reconciliation or identity-discovery API."""
        if not contact or type(reconciled) is not bool:
            raise Held('invalid_fixture')
        if last_sent is not None and (type(last_sent) is not int or last_sent < 0):
            raise Held('invalid_fixture')
        with self.transaction() as db:
            db.execute('INSERT INTO contacts(id,reconciled,last_sent) VALUES(?,?,?)',
                       (contact, int(reconciled), last_sent))

    def eligible(self, db, contact, now):
        row = db.execute('SELECT * FROM contacts WHERE id=?', (contact,)).fetchone()
        if row is None:
            raise Held('history_unreconciled')
        if row['suppressed']:
            raise Held('suppressed')
        if type(row['reconciled']) is not int or row['reconciled'] != 1:
            raise Held('history_unreconciled')
        if row['last_sent'] is not None and (type(row['last_sent']) is not int or row['last_sent'] < 0):
            raise Held('invalid_history_time')
        if row['last_sent'] is not None and now - row['last_sent'] < WINDOW:
            raise Held('window_or_clock_skew')

    def reserve(self, intent, contact, lease=300):
        if not intent or not contact or type(lease) is not int or not 1 <= lease <= 600:
            raise Held('invalid_request')
        with self.transaction() as db:
            now = self.now()
            # Replays return status only, never a reusable dispatch token.
            old = db.execute('SELECT contact,status FROM intents WHERE id=?', (intent,)).fetchone()
            if old:
                if old['contact'] != contact:
                    raise Held('intent_conflict')
                return {'status': old['status'], 'replay': True}
            self.eligible(db, contact, now)
            if db.execute("SELECT 1 FROM intents WHERE contact=? AND status IN ('reserved','dispatching','unknown')", (contact,)).fetchone():
                raise Held('active_or_uncertain')
            token = uuid.uuid4().hex
            db.execute('INSERT INTO intents(id,contact,token,status,reserved_at,expires,receipt) VALUES(?,?,?,?,?,?,NULL)',
                       (intent, contact, token, 'reserved', now, now + lease))
            return {'status': 'reserved', 'token': token, 'replay': False}

    def begin_dispatch(self, intent, token):
        """Single-use transition; no sending exists in this prototype."""
        with self.transaction() as db:
            now = self.now()
            row = db.execute('SELECT * FROM intents WHERE id=? AND token=?', (intent, token)).fetchone()
            if row is None or row['status'] != 'reserved':
                raise Held('stale_or_consumed_token')
            if not row['reserved_at'] <= now < row['expires']:
                raise Held('expired_or_clock_skew')
            self.eligible(db, row['contact'], now)
            db.execute("UPDATE intents SET status='dispatching',dispatched_at=? WHERE id=?", (now, intent))

    def complete(self, intent, token, receipt=None):
        with self.transaction() as db:
            row = db.execute('SELECT * FROM intents WHERE id=? AND token=?', (intent, token)).fetchone()
            if row is None or row['status'] != 'dispatching':
                raise Held('stale_or_consumed_token')
            now = self.now()
            if row['dispatched_at'] is None or now < row['dispatched_at']:
                raise Held('clock_skew')
            if receipt is not None and (not isinstance(receipt, str) or not receipt.strip()):
                raise Held('invalid_receipt')
            status = 'sent' if receipt else 'unknown'
            db.execute('UPDATE intents SET status=?,receipt=? WHERE id=?', (status, receipt, intent))
            if receipt:
                # Receipt observation time is conservative if delivery time is unknown.
                db.execute('UPDATE contacts SET last_sent=? WHERE id=?', (now, row['contact']))

    def suppress(self, contact):
        if not isinstance(contact, str) or not contact.strip():
            raise Held('invalid_contact')
        with self.transaction() as db:
            # Opt-out can arrive before discovery/history reconciliation.
            db.execute('INSERT INTO contacts(id,reconciled,suppressed) VALUES(?,0,1) '
                       'ON CONFLICT(id) DO UPDATE SET suppressed=1', (contact,))
            db.execute("UPDATE intents SET status='suppressed' WHERE contact=? AND status='reserved'", (contact,))
            # In-flight work cannot be recalled. Keep its state for reconciliation.

    def recover_uncertain(self):
        with self.transaction() as db:
            now = self.now()
            db.execute("UPDATE intents SET status='unknown' WHERE status IN ('reserved','dispatching') AND expires<=?", (now,))
