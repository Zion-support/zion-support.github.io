#!/usr/bin/env python3
"""Review guard for the approved two-step workflow insertion; no network calls."""
import hashlib
from pathlib import Path
import unittest

ROOT=Path(__file__).resolve().parents[1]
BASE_BLOB='1d74c2bc2712b72a6244a3a1341288f353fd905e'
ADDED='''      - name: Offline guided-navigation and use-case map regression checks
        run: |
          python3 scripts/test-use-case-map-workflow.py
          node scripts/test-guided-app-navigation.cjs
          python3 scripts/test-use-case-map-locales.py
          python3 scripts/test-use-case-map-artifact.py
          python3 scripts/test-use-case-map-artifact-paths.py
      - name: Finalize five-language use-case maps and existing homepage links
        run: python3 scripts/finalize-use-case-map-artifact.py --out out
'''

def require(ok,message):
    if not ok:raise ValueError(message)

def validate(text):
    require(text.count(ADDED)==1,'Exactly the approved offline steps are required')
    restored=text.replace(ADDED,'',1).encode('utf-8')
    blob=hashlib.sha1(b'blob '+str(len(restored)).encode()+b'\0'+restored).hexdigest()
    require(blob==BASE_BLOB,'Existing workflow bytes changed outside approved insertion')
    start=text.index(ADDED)
    renderer=text.index('        run: node scripts/ticket-support-release.cjs out\n')
    publication=text.index('      - name: Reconcile and test final folder and suffix localization coverage\n')
    upload=text.index('      - uses: actions/upload-pages-artifact@v3\n')
    require(renderer<start<publication<upload,'Offline checks/finalizer must precede final checks and upload')
    return True

class Tests(unittest.TestCase):
    def setUp(self):self.text=(ROOT/'.github/workflows/static-deploy.yml').read_text(encoding='utf-8')
    def test_approved_integration(self):self.assertTrue(validate(self.text))
    def test_missing_or_duplicate_steps_rejected(self):
        for text in [self.text.replace(ADDED,''),self.text.replace(ADDED,ADDED+ADDED)]:
            with self.assertRaises(ValueError):validate(text)
    def test_release_controls_preserved(self):
        mutations=[('  workflow_dispatch:\n','  push:\n  workflow_dispatch:\n'),('          ref: main\n','          ref: feature\n'),('  contents: read\n','  contents: write\n'),("    if: github.ref == 'refs/heads/main'\n",'    if: true\n')]
        for old,new in mutations:
            with self.subTest(control=old):
                self.assertIn(old,self.text)
                with self.assertRaises(ValueError):validate(self.text.replace(old,new))
    def test_failed_checks_cannot_be_swallowed(self):
        with self.assertRaises(ValueError):validate(self.text.replace('python3 scripts/test-use-case-map-locales.py\n','python3 scripts/test-use-case-map-locales.py || true\n'))
    def test_post_upload_finalization_rejected(self):
        text=self.text.replace(ADDED,'')
        anchor='      - name: Wait for uploaded Pages artifact metadata\n'
        self.assertIn(anchor,text)
        with self.assertRaises(ValueError):validate(text.replace(anchor,ADDED+anchor))

if __name__=='__main__':unittest.main()
