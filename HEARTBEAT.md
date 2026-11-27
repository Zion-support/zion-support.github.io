# HEARTBEAT.md

### Operating Mandate

This repository's heartbeat is an evidence-backed operations and CI checkpoint, not an authorization to act without explicit owner, credential, budget, or customer controls.

- **USER.md**: consult user/company operating instructions where available and current.
- **AGENTS**: coordinate ownership and cross-agent handoffs; do not duplicate messages, supplier commitments, or patches.
- **SOUL**: preserve professionalism, confidentiality, and truthful reporting of actual tool results.
- **Never commit secrets**: do not place tokens, client private data, keys, banking details or unpublished supplier economics in commits or publicly rendered content.
- Check current branch, job logs and exact failing assertion before changing CI or declaring a fix; run non-destructive tests and keep risky changes in review.
- Prior status snapshots below are historical and do not establish present account connections, user permissions, deployed state, or active operations.

## Historical workspace status (snapshot captured 2026-06-06)

CI/CD, V32, Partners, Gmail, ghcli

- V32 RESPONDER — COMPLETE
  - R1a/R1b/R2: M1 reply_all_binding flows back from email_orchestrator into both _fast_path and _full_pipeline
  - R3: dedup skip guard (sent_reply_log.jsonl, 30 min window) — top-of-pipeline check in _v25_pipeline
  - R5: financial payment_received auto-ack bypasses grammar gate in _fast_path
  - 8 modules patched with `from __future__ import annotations` → unblocks M1 + w2/w3 imports
  - Dry-run 5/5 exit 0: 1 fast, 3 full, 1 escalated, 2 financial, reply_all_detail populated
  - HEAD: a52d231e, pushed to origin/main

- PARTNERS PAGE — LIVE
  - src/app/partners/page.tsx + nav link committed
  - 714/714 pages, 689 sitemap URLs, /partners route confirmed

- GITHUB ACTIONS — ≥500 FAILURES (BLIND)
  - Cannot triage: gh auth not configured → API returns stale data
  - Deploys #3344/#3346 were healing late May 20 per heartbeat
  - Fix: `gh auth login` when key available

- GMAIL / CALENDAR — OAUTH DISCONNECTED
  - gog_tokens.json missing → Gmail API unreachable (2896 unread unactionable)
  - Token expired May 18
  - Fix: `gog auth login` when credential available

- NPM BUILD — GREEN (exit 0)
  - 25 TS errors (structural JSX in AI components) still present — non-blocking for static export

- FLEET STATUS (2026-06-06)
  - 4 cron jobs active: link-monitor (360m), org-health (240m), wave-research (240m), email-readiness (120m)
  - ~1,700+ services integrated (waves 174-206)
  - Wave 207 research done, pending integration
  - Coordination doc updated, all bots delegated
