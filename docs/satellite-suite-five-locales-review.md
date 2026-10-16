# Three-app multilingual suite — implementation and release evidence

Release marker: `satellite-suite-five-locales-v1`. Existing PR: #71584. This document does not certify deployment or whole-network coverage.

## Implemented

- 15 interactive editions: MCP Trust Boundary Studio, Agent Canary Release Lab and Field Spares Custody Kit, each in EN, PT-BR, ES, FR and DE.
- Five comparison guides at `/apps/satellite-labs.html` and `/pt/`, `/es/`, `/fr/`, `/de/` counterparts.
- Shared responsive styling, keyboard skip/focus controls, complete translated body/control/result/clipboard/export text, same-language related-tool links and reciprocal five-language navigation.
- Canonical URLs, six head alternates per page, deterministic page hashes and scoped publication manifest.
- One owned localized promotion on each of the five homepage artifacts. Existing public homepage source is not rewritten; original content outside the suite section, including forms/scripts/prices, is preserved.
- A new five-line publisher stage after the existing `prepare-pages-out.sh` guards and before upload. Manual-only trigger, main-only restriction, permissions, concurrency and all guard code remain unchanged. No deploy was dispatched.

## Preservation and limitations

The three existing app.js source blobs remain unchanged and hash-pinned. The compiler replaces exact human-readable strings and display-number formatting, not application logic. If an app runtime changes, compilation fails until its new source and translations are reviewed.

These are deterministic browser-only planning tools, not hosted AI or automated approvals. Currency input continues using a decimal point; display numbers follow locale. JSON machine keys remain stable while human descriptions are localized. Switching language starts a fresh worksheet, as disclosed on every page. No input persistence or external transmission is added.

Custody retains strict unknown/invalid-cost handling, positive total, reference requirements, integer-cent 1.40x rounding and `authorized: false`. The MCP and Canary apps retain their existing scenario/checklist semantics; the translation tests are not proof of live security, deployment readiness or measured performance.

## Executed verification

Python 3.13 / Node 22:

```
python3 tests/satellite-suite.test.py
python3 scripts/render-satellite-suite.py --source public --out preview --without-homepages
node --test tests/satellite-suite-runtime.test.cjs
```

- 13 Python test methods passed: complete locale sets, reciprocal route metadata, source hashes, idempotence, five synthetic homepage byte preservation, collision/redirect/symlink/malformed-input rejection and no partial writes after preflight failures.
- 30 Node tests passed: all 15 compiled scripts parse; translated custody valid/invalid results preserve original machine semantics; 10,000 cent values per language preserve monetary rounding (50,000 comparisons, not 50,000 separate tests).
- Chromium/Playwright local document-injection checks passed for 15 app editions and five comparison guides, 30 desktop/mobile width checks, 15 keyboard skip flows and five custody export/missing-PO/reset flows. No JavaScript errors or unexpected external requests observed. These are local rendered-document tests, not HTTP navigation, TLS, production, screen-reader or native-speaker certification.

Optional reproduction with Playwright and an installed Chromium:

```
SATELLITE_PREVIEW="$PWD/preview" python3 tests/satellite-suite-browser.py
```

Use `BROWSER_EXECUTABLE` to select an installed browser. The test loads local HTML/CSS/JS because hosted navigation is restricted in the original environment. It does not submit production forms or contact external services.

The deployment workflow was reconstructed from exact blob `74aff349c5ef102f0e5fa26b5bee773488ea5d94`; removing the one added stage recovers every original byte. The three original runtime Git hashes are verified before every build.

## Release blockers, not bypassed

1. Prior custody run 38824123614 failed during checkout credential cleanup: `No url found for submodule path '.deploy-temp' in .gitmodules`; application tests were skipped. Coordinate existing invalid-gitlink repairs in #71561/#71571 rather than inventing another competing cleanup PR or weakening checkout security.
2. Existing preparation requires the historic `Discovery $99` homepage marker while the inspected Portuguese homepage promotes free Discovery. This batch does not insert a false price marker or change commercial guards. Resolve the established free/paid-offering conflict with the responsible owner and current publisher.
3. Complete current merge-candidate artifact/CI/provider checks, review route ownership for separate project Pages and finish native-language/accessibility review. Existing project-repository and HTTPS settings requirements remain outside this source change.
4. Only after approved deployment, verify actual HTTP status, page hashes, language, alternate links and browser interactions. No live publication is claimed here.

Other owners' general catalog/homepage work (#71543/#71561/#71571/#71575/#71577/#71589/#71590/#71597/#71599/#71604) is not overwritten. Shared deployment changes require normal merge reconciliation; no historical publisher pipeline is restored.
