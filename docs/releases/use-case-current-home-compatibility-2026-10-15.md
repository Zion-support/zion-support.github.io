# REVIEW-ONLY — current-homepage compatibility repair

Approved for a three-file commit to existing draft PR71571. Not merged, dispatched or deployed. No production URL is certified.

Pinned sources: website main 49639303c0d7cf1c276aa5fa1cc8dd916d22d8c6; existing PR71571 head 5bb8dbbf4c4b94e0a39859a1b5d0c14b78be8996.

Reproduced: all five REAL current homepage bodies fail the old finalizer because neither historical insertion token exists. Original 4 locale tests and 6 synthetic artifact tests pass despite this incompatibility. Unchanged prepare-pages-out.sh passes its six real required source page gates in an isolated subset; this is NOT a complete site build. Current dispatch-only workflow calls no explicit map renderer.

Candidate source change: scripts/finalize-use-case-map-artifact.py retains historical insertion paths and adds a SHA256-pinned fallback for the five reviewed current homepage bodies. Adds a small localized, owned map-link section at an inspected boundary (before Portuguese footer; before other main closes). Rejects changed/unknown source bodies and duplicate promotions. No forms, script blocks, original decoded text or original hrefs removed. CRLF normalization is existing Python read_text/write_text behavior, not byte preservation of original line endings.

New regression: scripts/test-use-case-map-current-homes.py has 5 tests with all five real homepages as subcases: accepted links; idempotence; original text/form/script/href preservation; unknown body/wrong language rejection; duplicate wrapper rejection. Together with old suites: 15 tests PASS locally.

Preview: preview/ has five generated map pages, manifest, and five current-source homepage previews with contextual links. Root-relative linked app routes and CSS are NOT bundled; this is not a complete offline site. No full artifact link validation, native-language/browser/mobile/accessibility/CI or live certification is claimed. The old homepage content is preserved, including pre-existing commercial statements, not independently approved or verified by this batch.

Approved scope: commit only the finalizer modification, new current-homepage regression, and this release record to existing PR71571. Do not wire the renderer into production workflow, change pricing/Discovery, merge, dispatch or deploy in this batch. Pipeline integration requires a separate proposal after full generated-route validation.

Commands from bundle root:
python3 scripts/test-use-case-map-locales.py
python3 scripts/test-use-case-map-artifact.py
python3 scripts/test-use-case-map-current-homes.py
python3 -m http.server 8000 --directory preview
