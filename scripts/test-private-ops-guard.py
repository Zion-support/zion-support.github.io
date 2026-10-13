#!/usr/bin/env python3
import importlib.util
from pathlib import Path
import tempfile
import unittest
spec = importlib.util.spec_from_file_location("privacy_guard", Path(__file__).with_name("assert-no-private-ops.py"))
g = importlib.util.module_from_spec(spec)
spec.loader.exec_module(g)
class GuardTests(unittest.TestCase):
    def fixture(self, rel, blocked):
        with tempfile.TemporaryDirectory() as td:
            p = Path(td) / rel
            p.parent.mkdir(parents=True)
            p.write_text("synthetic fixture")
            self.assertEqual(bool(g.violations(td)), blocked)
    def test_known_filenames(self):
        for name in sorted(g.BLOCKED):
            with self.subTest(name=name):
                self.fixture("ops/comms/" + name, True)
    def test_public_index(self):
        self.fixture("ops/comms/index.html", False)
    def test_missing_tree(self):
        self.assertTrue(g.violations("/missing-zion-privacy-test-root"))
    def test_case_and_nested_alias(self):
        self.fixture("pt/OPS/COMMS/Ceo-Ops.Md", True)
if __name__ == "__main__":
    unittest.main()
