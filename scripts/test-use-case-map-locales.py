#!/usr/bin/env python3
"""Offline generated-content tests; not live HTTP, browser or app certification."""
import copy
import hashlib
from html.parser import HTMLParser
import importlib.util
from pathlib import Path
import re
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('maps',ROOT/'scripts/render-use-case-map-locales.py')
maps = importlib.util.module_from_spec(spec)
spec.loader.exec_module(maps)

class Document(HTMLParser):
    def __init__(self,text):
        super().__init__(convert_charrefs=True)
        self.ids=[];self.hrefs=[];self.tags=[];self.alternates={};self.canonical=None;self.lang=None;self.current=0;self.headings=0
        self.feed(text)
    def handle_starttag(self,tag,attrs):
        a=dict(attrs);self.tags.append(tag)
        if 'id' in a:self.ids.append(a['id'])
        if tag=='html':self.lang=a.get('lang')
        if tag=='h1':self.headings+=1
        if tag=='a':
            self.hrefs.append(a.get('href',''))
            if a.get('aria-current')=='page':self.current+=1
        if tag=='link' and a.get('rel')=='canonical':self.canonical=a['href']
        if tag=='link' and a.get('rel')=='alternate':self.alternates[a['hreflang']]=a['href']

def validate(pages,source):
    assert len(pages)==5,'five pages required'
    old=Document(source)
    old_urls={u for u in old.hrefs if not u.startswith('#')}
    for locale,lang in maps.LANGS.items():
        name=maps.route(locale).lstrip('/'); text=pages[name]; doc=Document(text)
        assert doc.lang==lang and doc.headings==1
        assert len(doc.ids)==len(set(doc.ids)),'duplicate ID'
        assert doc.current==1,'one current language required'
        assert doc.canonical=='https://ziontechgroup.com'+maps.route(locale)
        expected={v:'https://ziontechgroup.com'+maps.route(k) for k,v in maps.LANGS.items()}
        expected['x-default']='https://ziontechgroup.com'+maps.route('en')
        assert doc.alternates==expected
        assert old_urls.issubset(set(doc.hrefs)),'source route lost'
        assert set(maps.IDS).issubset(set(doc.ids))
        assert not {'script','form','iframe','input'} & set(doc.tags),'read-only document required'
        for href in doc.hrefs:
            if href.startswith('#'):assert href[1:] in doc.ids,'broken local anchor'
        for k in maps.LANGS:assert maps.route(k) in doc.hrefs,'missing reciprocal language link'
        for question in maps.COPY[locale]['questions']:
            assert maps.html.escape(question,quote=True) in text,'translated question missing'
        assert 'grid-template-columns:repeat(auto-fit,minmax(min(100%,18rem),1fr))' in text
        assert ':focus-visible' in text and 'class="skip" href="#main"' in text

class Tests(unittest.TestCase):
    def setUp(self):
        self.source=ROOT/'public/apps/app-network-use-case-map.html'
        self.raw=self.source.read_text(encoding='utf-8')
    def test_render_and_idempotence(self):
        with tempfile.TemporaryDirectory() as td:
            out=Path(td); before=self.source.read_bytes()
            pages=maps.build(self.source,out);validate(pages,self.raw)
            first={str(f.relative_to(out)):hashlib.sha256(f.read_bytes()).hexdigest() for f in out.rglob('*') if f.is_file()}
            maps.build(self.source,out)
            second={str(f.relative_to(out)):hashlib.sha256(f.read_bytes()).hexdigest() for f in out.rglob('*') if f.is_file()}
            self.assertEqual(first,second);self.assertEqual(before,self.source.read_bytes())
    def test_negative_controls(self):
        with tempfile.TemporaryDirectory() as td:
            pages=maps.build(self.source,Path(td))
            for old,new in [('href="#field"','href="#absent"'),('id="field"','id="network"'),('hreflang="x-default"','hreflang="invalid"'),('href="/ai-smart-hands-scheduler/"','href="/removed-source/"'),('aria-current="page"','aria-current="false"')]:
                mutated=dict(pages);key=maps.route('en').lstrip('/')
                self.assertIn(old,mutated[key]);mutated[key]=mutated[key].replace(old,new)
                with self.assertRaises(AssertionError,msg=old):validate(mutated,self.raw)
    def test_incomplete_locale_rejected(self):
        original=copy.deepcopy(maps.COPY['fr'])
        try:
            maps.COPY['fr']['questions'].pop()
            with tempfile.TemporaryDirectory() as td:
                with self.assertRaises(ValueError):maps.build(self.source,Path(td))
                self.assertFalse(list(Path(td).rglob('*.html')))
        finally:maps.COPY['fr']=original
    def test_missing_source_category_rejected(self):
        with tempfile.TemporaryDirectory() as td:
            source=Path(td)/'input.html';source.write_text(self.raw.replace('id="field"','id="wrong"'),encoding='utf-8')
            with self.assertRaises(ValueError):maps.build(source,Path(td)/'output')

if __name__=='__main__':unittest.main()
