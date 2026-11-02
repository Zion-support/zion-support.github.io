import importlib.util
from pathlib import Path
import tempfile
import unittest
import xml.etree.ElementTree as ET

spec = importlib.util.spec_from_file_location('reconcile', Path(__file__).with_name('reconcile-reviewed-app-sitemaps.py'))
m = importlib.util.module_from_spec(spec)
spec.loader.exec_module(m)

class ReconcileTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        (self.root/'apps').mkdir()
        self.url = m.ORIGIN+'/apps/'
        (self.root/'sitemap.xml').write_text('<sitemapindex xmlns="'+m.NS[1:-1]+'">'+''.join('<sitemap><loc>'+m.ORIGIN+'/'+p+'</loc></sitemap>' for p in ['sitemap-0.xml','apps/apps-sitemap.xml'])+'</sitemapindex>')
        self.original = '<urlset xmlns="'+m.NS[1:-1]+'"><url><loc>'+self.url+'</loc><lastmod>2026-10-04</lastmod></url></urlset>'
        (self.root/'sitemap-0.xml').write_text(self.original)
        (self.root/'apps/apps-sitemap.xml').write_text(self.original)
    def page(self, extra='', canonical=None):
        route=m.ROUTES[0]
        p=self.root/(route.lstrip('/')+'index.html');p.parent.mkdir(parents=True,exist_ok=True)
        p.write_text('<link rel="canonical" href="'+(canonical or m.ORIGIN+route)+'">'+extra)
    def test_dedupe_preserves_first_metadata_and_omits_unknown_lastmod(self):
        self.page()
        result=m.reconcile(self.root)
        self.assertEqual(result['duplicates_removed'],1)
        self.assertEqual(result['added'],[m.ORIGIN+m.ROUTES[0]])
        self.assertIn('<lastmod>2026-10-04</lastmod>',(self.root/'apps/apps-sitemap.xml').read_text())
        root=ET.fromstring((self.root/'apps/apps-sitemap.xml').read_text())
        self.assertIsNone(root[-1].find(m.NS+'lastmod'))
        before=(self.root/'apps/apps-sitemap.xml').read_bytes()
        self.assertEqual(m.reconcile(self.root),{'added':[],'duplicates_removed':0})
        self.assertEqual(before,(self.root/'apps/apps-sitemap.xml').read_bytes())
    def test_missing_pages_are_not_added(self):
        self.assertEqual(m.reconcile(self.root)['added'],[])
    def test_noindex_redirect_and_wrong_canonical_fail_before_writing(self):
        for extra,canonical in [('<meta name="robots" content="noindex,follow">',None),('<meta name="googlebot" content="none">',None),('<meta http-equiv="refresh" content="0;url=/">',None),('',m.ORIGIN+'/other/')]:
            with self.subTest(extra=extra,canonical=canonical):
                self.page(extra,canonical)
                with self.assertRaises(ValueError):m.reconcile(self.root)
                self.assertEqual((self.root/'apps/apps-sitemap.xml').read_text(),self.original)
    def test_external_sitemap_is_rejected(self):
        p=self.root/'sitemap.xml';p.write_text(p.read_text().replace(m.ORIGIN,'https://example.com'))
        with self.assertRaises(ValueError):m.reconcile(self.root)
    def test_malformed_child_is_rejected_before_writing(self):
        (self.root/'apps/apps-sitemap.xml').write_text('<broken>')
        with self.assertRaises(ET.ParseError):m.reconcile(self.root)
        self.assertEqual((self.root/'sitemap-0.xml').read_text(),self.original)

if __name__=='__main__':unittest.main()
