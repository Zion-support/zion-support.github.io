#!/usr/bin/env python3
"""Offline regression contract for Zion five-language public homepage app promotion.

No network, credentials, server-side data or third-party requests.
"""
from html.parser import HTMLParser
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
BASE = "/zion-app-network/"
DATA = [
 ("public/index.html", "pt-BR", "-pt-br", "Escolha apps de IA"),
 ("public/en/index.html", "en", "", "Choose AI apps"),
 ("public/es/index.html", "es", "-es", "Elija apps de IA"),
 ("public/fr/index.html", "fr", "-fr", "Choisir des applications IA"),
 ("public/de/index.html", "de", "-de", "KI-Apps"),
 ("public/apps/index.html", "en", "", "New: AI App Selection")
]
SCORE = "app-selection-evidence-scorecard-2026"
FIELD = "field-quote-readiness-2026"

class Parsed(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.ids=[]
        self.links=[]
        self.lang=""
        self.main=0
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag == "html": self.lang=a.get("lang","")
        if tag == "main": self.main+=1
        if a.get("id"): self.ids.append(a["id"])
        if tag == "a": self.links.append((a.get("href",""),a.get("hreflang")))
class SitePromotionTests(unittest.TestCase):
    def test_all_six_existing_pages_promote_same_network_pattern(self):
        for path, lang, suffix, title in DATA:
            with self.subTest(path=path):
                raw=(ROOT/path).read_text(encoding="utf-8")
                parsed=Parsed(raw)
                self.assertEqual(parsed.lang,lang)
                self.assertEqual(parsed.main,1)
                self.assertEqual(parsed.ids.count("zion-evidence-scorecard-2026"),1)
                self.assertEqual(parsed.ids.count("zion-scorecard-heading-2026"),1)
                self.assertIn(title,raw)
                self.assertIn(BASE + SCORE + suffix + ".html",[link for link,_ in parsed.links])
                self.assertIn(BASE + FIELD + suffix + ".html",[link for link,_ in parsed.links])
                self.assertEqual(raw.count('data-app-network-promotion="evidence-scorecard-i18n-20261028"'),1)
                for _, alt_lang, alt_suffix, _ in DATA[:5]:
                    found = [(href,hreflang) for href,hreflang in parsed.links if href==BASE+SCORE+alt_suffix+".html" and hreflang==alt_lang]
                    self.assertTrue(found,alt_lang)
                self.assertNotIn("data:text/html",raw)
    def test_all_translated_ctas_distinct(self):
        labels=[]
        for path,_,_,_ in DATA[:5]:
            raw=(ROOT/path).read_text(encoding="utf-8")
            start=raw.index('id="zion-evidence-scorecard-2026"')
            segment=raw[start:raw.index('</section>',start)]
            labels.append(segment.split('class="btn" href=')[1].split('</a>')[0])
        self.assertEqual(len(set(labels)),5)
if __name__=="__main__": unittest.main()
