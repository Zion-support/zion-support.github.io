#!/usr/bin/env python3
"""Guard current main's dispatch-only Pages workflow; no deployment or network."""
import hashlib
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
BASE_BLOB = '74aff349c5ef102f0e5fa26b5bee773488ea5d94'

def validate(text):
    payload = text.encode('utf-8')
    sha = hashlib.sha1(b'blob ' + str(len(payload)).encode() + b'\0' + payload).hexdigest()
    if sha != BASE_BLOB:
        raise ValueError('Pages publisher differs from inspected main; review changes explicitly')
    if '  workflow_dispatch:' not in text or '  push:' in text or '  schedule:' in text:
        raise ValueError('Publisher must remain manual only')
    if "if: github.ref == 'refs/heads/main'" not in text:
        raise ValueError('Publisher must remain restricted to main')
    if '  contents: read' not in text or '  pages: write' not in text:
        raise ValueError('Publisher permissions changed')
    if 'actions/upload-pages-artifact@v3' not in text or 'actions/deploy-pages@v4' not in text:
        raise ValueError('Publisher expected steps missing')
    return True

class Tests(unittest.TestCase):
    def setUp(self):
        self.text = (ROOT / '.github/workflows/static-deploy.yml').read_text(encoding='utf-8')

    def test_current_main_publisher_unchanged(self):
        self.assertTrue(validate(self.text))

    def test_automatic_release_is_rejected(self):
        for mutated in [
            self.text.replace('  workflow_dispatch:', '  push:\n  workflow_dispatch:'),
            self.text.replace('  workflow_dispatch:', '  schedule:\n  workflow_dispatch:'),
            self.text.replace("if: github.ref == 'refs/heads/main'", 'if: true'),
            self.text.replace('contents: read', 'contents: write'),
            self.text.replace('deploy-pages@v4', 'deploy-pages@v3'),
        ]:
            with self.subTest(mutated=mutated[:45]):
                with self.assertRaises(ValueError):
                    validate(mutated)

if __name__ == '__main__':
    unittest.main()
