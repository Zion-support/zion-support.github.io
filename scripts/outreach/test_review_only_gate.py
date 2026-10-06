"""Synthetic tests only: no imports of the live worker, credentials or networks."""
import json
import shutil
import subprocess
import sys
from pathlib import Path
import tempfile
from types import ModuleType
import unittest

from review_only_gate import ReadOnlyGmail, WriteBlocked, run_review_only, write_report


class FakeRequest:
    def execute(self):
        return {"messages": []}


class FakeClient:
    def __init__(self):
        self.sent = 0

    def users(self):
        return self

    def messages(self):
        return self

    def threads(self):
        return self

    def labels(self):
        return self

    def list(self, **kwargs):
        return FakeRequest()

    def get(self, **kwargs):
        return FakeRequest()

    def getProfile(self, **kwargs):
        return FakeRequest()

    def send(self, **kwargs):
        self.sent += 1
        raise AssertionError("A real send must never be reached")


def worker(client, result=None, run=None):
    module = ModuleType("fake_worker")
    module.service = client
    module.DRY_RUN = False
    module.REQUIRES_APPROVAL = False
    module.run_high_frequency_outreach = run or (lambda: result)
    return module


class ReviewGateTests(unittest.TestCase):
    def test_boolean_service_rejected(self):
        for value in (True, False):
            with self.subTest(value=value):
                result = run_review_only(worker(value))
                self.assertEqual(result["status"], "blocked_backend_interface")
                self.assertEqual(result["sent"], 0)

    def test_missing_auth_rejected(self):
        self.assertEqual(run_review_only(worker(None))["status"], "blocked_auth_unavailable")

    def test_invalid_client_rejected(self):
        self.assertEqual(run_review_only(worker(object()))["status"], "blocked_backend_interface")

    def test_flags_cannot_enable_live(self):
        module = worker(FakeClient(), {"sent": 3, "skipped": 2})
        report = run_review_only(module)
        self.assertTrue(module.DRY_RUN)
        self.assertTrue(module.REQUIRES_APPROVAL)
        self.assertEqual(report["sent"], 0)
        self.assertEqual(report["draft_candidates"], 3)
        self.assertEqual(report["skipped_candidates"], 2)
        self.assertFalse(report["delivery_confirmed"])
        self.assertEqual(report["auth_evidence"], "not_verified")

    def test_read_calls_allowed(self):
        proxy = ReadOnlyGmail(FakeClient())
        for resource in (proxy.users().messages(), proxy.users().threads(), proxy.users().labels()):
            self.assertEqual(resource.list(userId="me").execute(), {"messages": []})
            self.assertEqual(resource.get(userId="me", id="synthetic").execute(), {"messages": []})
        self.assertEqual(proxy.users().getProfile(userId="me").execute(), {"messages": []})

    def test_all_mutation_methods_blocked(self):
        proxy = ReadOnlyGmail(FakeClient()).users().messages()
        for name in ("send", "insert", "import_", "delete", "trash", "untrash", "modify", "batchModify", "drafts", "create", "update"):
            with self.subTest(method=name), self.assertRaises(WriteBlocked):
                getattr(proxy, name)

    def test_direct_send_path_blocked(self):
        client = FakeClient()
        module = worker(client)
        module.run_high_frequency_outreach = lambda: module.service.users().messages().send(userId="me", body={})
        report = run_review_only(module)
        self.assertEqual(report["status"], "blocked_mutation_attempt")
        self.assertEqual(client.sent, 0)

    def test_legacy_helpers_blocked(self):
        for helper in ("send_ceo_reply", "record_send", "mark_seen_message_id"):
            with self.subTest(helper=helper):
                module = worker(FakeClient())
                module.run_high_frequency_outreach = lambda: getattr(module, helper)("synthetic")
                self.assertEqual(run_review_only(module)["status"], "blocked_mutation_attempt")

    def test_exception_contents_never_reported(self):
        def fail():
            raise RuntimeError("private-recipient@example.test private-secret")
        report = run_review_only(worker(FakeClient(), run=fail))
        self.assertEqual(report["status"], "blocked_worker_error")
        self.assertNotIn("private", json.dumps(report))

    def test_invalid_result_rejected(self):
        for invalid in (None, [], "private-result"):
            with self.subTest(value=invalid):
                self.assertEqual(run_review_only(worker(FakeClient(), invalid))["status"], "blocked_invalid_result")

    def test_auth_error_not_copied(self):
        report = run_review_only(worker(FakeClient(), {"auth_error": "private-token"}))
        self.assertEqual(report["status"], "blocked_auth_unavailable")
        self.assertNotIn("private-token", json.dumps(report))

    def test_invalid_counts_are_unknown(self):
        for count in (True, "4", -1, 1_000_001):
            with self.subTest(count=count):
                report = run_review_only(worker(FakeClient(), {"sent": count, "skipped": count}))
                self.assertIsNone(report["draft_candidates"])
                self.assertIsNone(report["skipped_candidates"])

    def test_public_report_values_are_allowlisted(self):
        with tempfile.TemporaryDirectory() as d:
            path = Path(d) / "summary.json"
            write_report(path, {"status": "private@example.test", "draft_candidates": "private", "gmail_service_interface_valid": "private"})
            saved = json.loads(path.read_text())
            self.assertNotIn("private", path.read_text())
            self.assertEqual(saved["status"], "blocked_invalid_result")
            self.assertIsNone(saved["draft_candidates"])
            self.assertFalse(saved["gmail_service_interface_valid"])

    def test_cli_enforces_flags_before_worker_import(self):
        with tempfile.TemporaryDirectory() as d:
            root = Path(d)
            folder = root / "scripts" / "outreach"
            folder.mkdir(parents=True)
            shutil.copy(Path(__file__).with_name("review_only_gate.py"), folder)
            (folder / "outreach_worker_automation.py").write_text(
                'import os\nassert os.environ["OUTREACH_DRY_RUN"] == "1"\n'
                'assert os.environ["OUTREACH_REQUIRES_APPROVAL"] == "true"\nservice = True\n')
            result = subprocess.run([sys.executable, str(folder / "review_only_gate.py")],
                env={"OUTREACH_DRY_RUN": "0", "OUTREACH_REQUIRES_APPROVAL": "false"},
                capture_output=True, text=True, timeout=5)
            self.assertEqual(result.returncode, 2)
            saved = json.loads((root / "outreach_monitor" / "review-only-summary.json").read_text())
            self.assertEqual(saved["status"], "blocked_backend_interface")
            self.assertEqual(saved["sent"], 0)

    def test_public_report_extra_fields_removed_and_invariants_enforced(self):
        report = run_review_only(worker(FakeClient(), {"sent": 2, "skipped": 0}))
        report.update(secret="private", recipients=["private@example.test"], sent=999,
                      live_sending_enabled=True, delivery_confirmed=True, auth_evidence="authenticated")
        with tempfile.TemporaryDirectory() as d:
            path = Path(d) / "summary.json"
            write_report(path, report)
            saved = json.loads(path.read_text())
            self.assertNotIn("private", path.read_text())
            self.assertEqual(saved["sent"], 0)
            self.assertFalse(saved["live_sending_enabled"])
            self.assertFalse(saved["delivery_confirmed"])
            self.assertEqual(saved["auth_evidence"], "not_verified")
            self.assertEqual(len(list(Path(d).iterdir())), 1)


if __name__ == "__main__":
    unittest.main(verbosity=2)
