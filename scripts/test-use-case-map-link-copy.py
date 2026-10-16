#!/usr/bin/env python3
"""Offline unit and renderer tests; not a live site or app certification."""
import html
import importlib.util
from pathlib import Path
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location('link_copy', Path(__file__).with_name('use-case-map-link-copy.py'))
mod = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(mod)

# Exact 40 category destinations observed in the immutable map source.
GROUPS = [
 ['/ai-smart-hands-scheduler/','/site-survey-planner/','/sla-breach-predictor/','/apps/october-2026-batch11.html'],
 ['/ai-network-performance-wan-optimization/','/site-uptime-watchdog/','/stack-audit/','/patch-window-planner/'],
 ['/ai-ticket-triage/','/support-ticket-triager/','/ai-incident-response/','/ops-runbook-ai/'],
 ['/ai-governance-checklist/','/ai-access-reviewer/','/secrets-leak-scanner/','/vendor-risk-assessor/'],
 ['/supplier-risk-radar/','/vendor-risk-assessor/','/roi-calc/','/finops-estimator/'],
 ['/finops-estimator/','/llm-cost-calculator/','/cloud-cost-optimization/','/ai-roi-tracker/'],
 ['/ai-opportunity-mapper/','/priorizador-casos-uso-ia/','/automation-brief-builder/','/automation-pilot-planner/'],
 ['/ai-tender-scout/','/lead-score-copilot/','/deal-coach-ai/','/renewal-upsell-radar/'],
 ['/ai-data-warehouse/','/ai-predictive-analytics/','/ai-readiness-assessment/','/model-observatory/'],
 ['/route-optimization-ai/','/warehouse-slotting-optimizer/','/demand-sensing-forecaster/','/delivery-exception-copilot/']]


def fixtures():
    pages = {}
    for loc, language in mod.LANGS.items():
        sections = ''.join('<section class="card" id="'+key+'"><h2 id="'+key+'-title">'+key+'</h2><ul>'+''.join('<li><a href="'+u+'"><span lang="en">Original project</span></a></li>' for u in urls)+'</ul></section>' for key, urls in zip(mod.IDS,GROUPS))
        support = ''.join('<li><a href="'+u+'">Related resources: '+u+'</a></li>' for u in sorted(mod.LABELS))
        body = '<!doctype html><html lang="'+language+'"><head><style>body{margin:auto}</style></head><body><a href="#main">Skip</a><main id="main"><div class="grid">'+sections+'</div><aside class="note"><p>Original disclosure.</p><p>Email receipt is not guaranteed.</p></aside><section><h2>Resources</h2><ul>'+support+'</ul></section></main></body></html>'
        pages[('' if loc == 'en' else loc+'/')+'apps/app-network-use-case-map.html'] = body
    return pages


class TranslationTests(unittest.TestCase):
    def assert_translated(self, before, after):
        self.assertEqual(len(after), 5)
        for loc in mod.LOCALES:
            name = ('' if loc == 'en' else loc+'/')+'apps/app-network-use-case-map.html'
            text = after[name]
            self.assertEqual(mod.Links(before[name]).hrefs, mod.Links(text).hrefs)
            self.assertEqual(text.count('class="category-context"'),10)
            self.assertNotIn('<span lang="en">',text)
            self.assertNotIn('Related resources: /',text)
            self.assertEqual(text.count('data-use-case-link-copy='),1)
            for translations in mod.LABELS.values():
                self.assertIn(html.escape(translations[loc],quote=True),text)
            for translations in mod.CONTEXT.values():
                self.assertIn(html.escape(translations[loc],quote=True),text)
            self.assertIn(html.escape(mod.NOTES[loc],quote=True),text)

    def test_five_languages_all_labels_and_contexts(self):
        before = fixtures(); snapshot = dict(before)
        self.assert_translated(before, mod.localize_pages(before, mod.LANGS))
        self.assertEqual(before, snapshot)

    def test_real_renderer_compatibility(self):
        spec = importlib.util.spec_from_file_location('real_maps', ROOT/'scripts/render-use-case-map-locales.py')
        renderer = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(renderer)
        source = ROOT/'public/apps/app-network-use-case-map.html'
        original = source.read_bytes()
        with tempfile.TemporaryDirectory() as td:
            pages = renderer.build(source,Path(td))
            translated = mod.localize_pages(pages,renderer.LANGS)
            self.assert_translated(pages,translated)
            self.assertEqual(source.read_bytes(),original)
            # The pure localizer changes returned strings, not staged files.
            for name,body in pages.items():
                self.assertEqual((Path(td)/name).read_text(encoding='utf-8'),body)

    def test_repeat_fresh_render_is_deterministic(self):
        self.assertEqual(mod.localize_pages(fixtures(),mod.LANGS),mod.localize_pages(fixtures(),mod.LANGS))

    def test_missing_locale_is_rejected(self):
        pages=fixtures();pages.pop('fr/apps/app-network-use-case-map.html')
        with self.assertRaises(ValueError):mod.localize_pages(pages,mod.LANGS)

    def test_wrong_html_language_is_rejected(self):
        pages=fixtures();name='de/apps/app-network-use-case-map.html';pages[name]=pages[name].replace('lang="de"','lang="en"')
        with self.assertRaises(ValueError):mod.localize_pages(pages,mod.LANGS)

    def test_unknown_destination_is_rejected(self):
        pages=fixtures();name='apps/app-network-use-case-map.html';pages[name]=pages[name].replace('/roi-calc/','/unreviewed-project/')
        with self.assertRaises(ValueError):mod.localize_pages(pages,mod.LANGS)

    def test_incomplete_label_for_each_locale_is_rejected(self):
        for locale in mod.LOCALES:
            original=mod.LABELS['/roi-calc/'][locale]
            try:
                mod.LABELS['/roi-calc/'][locale]=' '
                with self.assertRaises(ValueError):mod.localize_pages(fixtures(),mod.LANGS)
            finally:mod.LABELS['/roi-calc/'][locale]=original

    def test_unsupported_locale_is_rejected(self):
        langs=dict(mod.LANGS);langs['it']='it'
        with self.assertRaises(ValueError):mod.localize_pages(fixtures(),langs)

    def test_missing_or_duplicate_category_is_rejected(self):
        for replacement in ('id="missing-title"','id="network-title"'):
            pages=fixtures();name='apps/app-network-use-case-map.html';pages[name]=pages[name].replace('id="field-title"',replacement)
            with self.assertRaises(ValueError):mod.localize_pages(pages,mod.LANGS)

    def test_unexpected_project_markup_is_rejected(self):
        pages=fixtures();name='apps/app-network-use-case-map.html';pages[name]=pages[name].replace('<span lang="en">','<span>',1)
        with self.assertRaises(ValueError):mod.localize_pages(pages,mod.LANGS)

    def test_previously_localized_output_is_rejected(self):
        once=mod.localize_pages(fixtures(),mod.LANGS)
        with self.assertRaises(ValueError):mod.localize_pages(once,mod.LANGS)

    def test_html_in_translation_is_escaped(self):
        original=mod.LABELS['/roi-calc/']['en']
        try:
            mod.LABELS['/roi-calc/']['en']='<script>alert(1)</script> & "x"'
            text=mod.localize_pages(fixtures(),mod.LANGS)['apps/app-network-use-case-map.html']
            self.assertNotIn('<script>',text)
            self.assertIn('&lt;script&gt;alert(1)&lt;/script&gt; &amp; &quot;x&quot;',text)
        finally:mod.LABELS['/roi-calc/']['en']=original

    def test_protected_blocks_are_unchanged(self):
        pages=fixtures();name='apps/app-network-use-case-map.html';block='<script type="application/json">{"test":true}</script><form id="retained"></form>'
        pages[name]=pages[name].replace('</body>',block+'</body>')
        self.assertIn(block,mod.localize_pages(pages,mod.LANGS)[name])

    def test_missing_disclosure_is_rejected(self):
        pages=fixtures();name='apps/app-network-use-case-map.html';pages[name]=pages[name].replace('<aside class="note">','<aside>')
        with self.assertRaises(ValueError):mod.localize_pages(pages,mod.LANGS)


if __name__=='__main__':unittest.main()
