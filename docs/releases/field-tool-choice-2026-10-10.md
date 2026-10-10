# Field tool-choice release — 10 October 2026

## Scope
Add a fully translated four-resource comparison matrix to the existing Field Service Evidence Guide in English, Brazilian Portuguese, Spanish, French and German. Each row names the question, required evidence and validation gate, with a direct existing-tool link. Add matching homepage CTAs inside the owned field promotion, and section navigation for tools, checklist and FAQ.

## Production integration
Simple Static Deploy already runs scripts/finalize-field-evidence-aliases.cjs after all renderers and before upload. The existing path trigger covers this change. Do not edit legacy root index.html or the stale public/apps guide independently: production translations are artifact-rendered. Preserve earlier FAQs, evidence pack, telecom backlinks and canonical/hreflang metadata. Finalization copies complete canonical HTML into four locale aliases after the additive content pass.

## Validation performed before commit
- Current live baseline: nine guide routes returned 200 and four alias/canonical pairs matched completely.
- Node syntax check passed.
- Fresh live fixtures for five canonical guides and six homepage entrypoints captured via read-only GETs; no submissions.
- Five translated tables: four columns, four linked rows, complete translated caution text.
- Existing homepage forms and scripts preserved byte-for-byte; owned CTA insertion only, redirect entrypoints skipped.
- Metadata, FAQs, six-record checklist, language switcher and telecom links retained.
- Repeated finalization yielded identical content across 16 fixture files, including the integrity manifest.

## Verification routes
- https://ziontechgroup.com/apps/field-service-evidence-guide.html#tool-choice
- https://ziontechgroup.com/pt/apps/field-service-evidence-guide.html#tool-choice
- https://ziontechgroup.com/es/apps/field-service-evidence-guide.html#tool-choice
- https://ziontechgroup.com/fr/apps/field-service-evidence-guide.html#tool-choice
- https://ziontechgroup.com/de/apps/field-service-evidence-guide.html#tool-choice

## Limits
Deployment/live verification must be recorded separately after the commit. Read-only publication and navigation QA does not certify all app functionality, supplier availability, email receipt or whole-network translation. No booking, order, dispatch or email is initiated. No numbered batch or new repository is created.
