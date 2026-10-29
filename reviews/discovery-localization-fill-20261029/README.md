# Discovery localization — review package only

Pinned source: `b413831939fcfe231e39308d9f6f81e1e1335fdb` in Zion-support/zion-support.github.io.

This is an UNAPPLIED candidate: 67 exact text substitutions across `public/index.html` and `public/{pt,es,fr,de}/discovery/index.html`. It localizes process labels, skip/honeypot/noscript text and navigation accessibility labels. Homepage copy is aligned to approximately five minutes and service acceptance rather than guaranteed inbox delivery.

## Explicit boundary
This commit adds review assets ONLY. It does not change the five public HTML files, delivery JS, form values, recipients, endpoints, paid prices, workflows or deployment configuration. No merge, dispatch, deployment, form submission, email delivery or production fix is claimed. Existing privacy/Pages holds and draft lanes #71595, #71562, #71701 and #71582 remain independent; reconcile them before any application or release.

## Reproduce offline
Against a disposable checkout with the pinned source blobs:

    python3 reviews/discovery-localization-fill-20261029/review.py --root /path/to/checkout

Default is read-only. After reviewing the substitutions, `--apply` writes only the five local files after ALL preconditions pass. The checker performs no Git operations, network requests or deployment. Unknown source blobs and nonunique anchors fail closed; an already-applied candidate produces zero rewrites.

Local fixture validation passed: original blob hashes, all five expected output hashes, HTML structure/control-value preservation except intended navigation labels/meta description, idempotence, and source-drift rejection. This is not browser, linguistic-editorial, full-site translation, provider activation, inbox, CI or publication verification.

Review bundle with validation report and checksums: https://backend.composio.dev/api/v3/sl/mvL420iJvP
