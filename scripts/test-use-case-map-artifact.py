#!/usr/bin/env python3
"""Synthetic integration fixtures; never live-site or full-repository proof."""
import hashlib
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest
from urllib.parse import urljoin,urlsplit

ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('finalize_maps',ROOT/'scripts/finalize-use-case-map-artifact.py')
mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod)

class Tests(unittest.TestCase):
    def fixture(self,folder,slot='current'):
        source=ROOT/'public/apps/app-network-use-case-map.html'
        out=folder/'out';out.mkdir()
        pages=mod.maps.build(source,folder/'preview')
        # All destination files below are explicitly SYNTHETIC fixtures.
        for name,text in pages.items():
            for href in mod.Document(text).links:
                target=urlsplit(urljoin('https://ziontechgroup.com/'+name,href))
                if target.hostname!='ziontechgroup.com':continue
                relative=mod.relative_file(target.path)
                if relative in pages:continue
                path=out/relative;path.parent.mkdir(parents=True,exist_ok=True)
                path.write_text('<!doctype html><html lang="en"><body><p>SYNTHETIC TARGET, NOT LIVE</p></body></html>',encoding='utf-8')
        self.protected='<form action="/original"><input name="unchanged"></form><script>window.keep="original";</script>'
        for locale,lang in mod.maps.LANGS.items():
            path=out/mod.relative_file(mod.home(locale));path.parent.mkdir(parents=True,exist_ok=True)
            block='<section id="app-paths-home"><p><a href="/apps/">Catalog</a></p></section><!--home-app-paths:end-->' if slot=='current' else '<!--zion-network-home:start--><section><div><p><a href="/apps/">Catalog</a></p></div></section><!--zion-network-home:end-->'
            path.write_text('<!doctype html><html lang="'+lang+'"><body>'+self.protected+block+'</body></html>',encoding='utf-8')
        return source,out
    def snapshot(self,out):
        return {str(f.relative_to(out)):hashlib.sha256(f.read_bytes()).hexdigest() for f in out.rglob('*') if f.is_file()}
    def test_current_and_legacy_slots_preserve_and_repeat(self):
        for slot in ['current','legacy']:
            with self.subTest(slot=slot),tempfile.TemporaryDirectory() as td:
                source,out=self.fixture(Path(td),slot)
                manifest=mod.finalize(source,out)
                self.assertEqual(manifest['status'],'OFFLINE_ARTIFACT_VALIDATED_NOT_LIVE')
                self.assertEqual(len(manifest['map_sha256']),5)
                for locale in mod.maps.LANGS:
                    text=(out/mod.relative_file(mod.home(locale))).read_text(encoding='utf-8')
                    self.assertIn(self.protected,text)
                    self.assertEqual(text.count('data-use-case-map-promotion='),1)
                    self.assertIn('href="'+mod.maps.route(locale)+'"',text)
                before=self.snapshot(out);mod.finalize(source,out);self.assertEqual(before,self.snapshot(out))
    def test_missing_target_rejected_before_writes(self):
        with tempfile.TemporaryDirectory() as td:
            source,out=self.fixture(Path(td))
            (out/'ai-smart-hands-scheduler/index.html').unlink()
            before=self.snapshot(out)
            with self.assertRaisesRegex(ValueError,'missing artifact target'):mod.finalize(source,out)
            self.assertEqual(before,self.snapshot(out))
    def test_wrong_home_locale_and_missing_slot_rejected(self):
        for mutation in ['lang','slot']:
            with self.subTest(mutation=mutation),tempfile.TemporaryDirectory() as td:
                source,out=self.fixture(Path(td));p=out/'fr/index.html';text=p.read_text(encoding='utf-8')
                p.write_text(text.replace('lang="fr"','lang="en"') if mutation=='lang' else text.replace('<!--home-app-paths:end-->','<!--absent-->'),encoding='utf-8')
                before=self.snapshot(out)
                with self.assertRaises(ValueError):mod.finalize(source,out)
                self.assertEqual(before,self.snapshot(out))
    def test_broken_cross_page_fragment_rejected(self):
        with tempfile.TemporaryDirectory() as td:
            source,out=self.fixture(Path(td));bad=Path(td)/'source.html'
            bad.write_text(source.read_text(encoding='utf-8').replace('href="/ai-smart-hands-scheduler/"','href="/ai-smart-hands-scheduler/#absent"'),encoding='utf-8')
            before=self.snapshot(out)
            with self.assertRaisesRegex(ValueError,'missing target fragment'):mod.finalize(bad,out)
            self.assertEqual(before,self.snapshot(out))
    def test_unsafe_path_and_symlink_rejected(self):
        with tempfile.TemporaryDirectory() as td:
            source,out=self.fixture(Path(td));before=self.snapshot(out)
            with self.assertRaisesRegex(ValueError,'unsafe path'):
                mod.validate_links(out,{'apps/x.html':'<a href="/../outside">bad</a>'},['apps/x.html'])
            outside=Path(td)/'outside';outside.mkdir()
            link=out/'escape';link.symlink_to(outside,target_is_directory=True)
            with self.assertRaisesRegex(ValueError,'escapes root'):mod.safe_path(out,'escape/private.html')
            link.unlink();self.assertEqual(before,self.snapshot(out))
    def test_duplicate_owned_promotion_rejected(self):
        with tempfile.TemporaryDirectory() as td:
            source,out=self.fixture(Path(td));p=out/'index.html'
            text=p.read_text(encoding='utf-8').replace('</body>','<p data-use-case-map-promotion="old">a</p><p data-use-case-map-promotion="old">b</p></body>')
            p.write_text(text,encoding='utf-8');before=self.snapshot(out)
            with self.assertRaisesRegex(ValueError,'Duplicate owned'):mod.finalize(source,out)
            self.assertEqual(before,self.snapshot(out))

if __name__=='__main__':unittest.main()
