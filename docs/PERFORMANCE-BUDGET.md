# Performance Budget Enforcement (CI Gate)

> **Guardrail #36** — Prevents performance regressions at PR time by failing checks when Core Web Vitals exceed hard limits or degrade >10% vs baseline.

## Overview

Performance Budget Enforcer runs Lighthouse on each PR's built site (served locally), compares metrics against a baseline derived from production, and fails the CI check if:

- Any metric exceeds a critical **hard limit** (LCP >4s, FID >300ms, CLS >0.25, FCP >3s, TTFB >2s)
- OR any metric regresses by more than **10%** relative to the 7-day production baseline

This closes the loop between *monitoring* (alerts after deploy) and *prevention* (gatekeeping before merge).

---

## Why It Matters

**Current gap:** Existing Lighthouse and Field Performance monitors send alerts *after* code ships. By then, users already experience slow pages and poor Core Web Vitals, hurting SEO and conversions.

**Solution:** Fail the PR *before* merge if it introduces a meaningful performance regression. This gives developers immediate feedback and upholds performance standards as code evolves.

---

## Architecture

```
GitHub PR → CI (performance-budget.yml)
   ↓
npm run build (Next.js static build)
   ↓
npx serve out -p 3000 (local static server)
   ↓
node automation/performance-budget-enforcer.cjs --url http://localhost:3000
   ↓
Runs Lighthouse (via lighthouse CLI + --puppeteer)
   ↓
Compares metrics to baseline (.hermes/memory/performance-budget/baseline.json)
   ↓
Exit 0 = PASS → check green
   Exit 1 = FAIL → check red; blocks merge if branch policies require passing checks
```

---

## Components

| File | Purpose |
|------|---------|
| `automation/performance-budget-enforcer.cjs` | Lighthouse runner + comparator + baseline manager |
| `.github/workflows/performance-budget.yml` | GitHub Actions workflow (PR gate) |
| `.hermes/memory/performance-budget/baseline.json` | Current baseline metrics (committed on main) |
| `.hermes/memory/performance-budget/history.json` | 90-day trend of daily Lighthouse runs |
| `docs/PERFORMANCE-BUDGET.md` | This file |

---

## Thresholds

### Hard limits (absolute, never exceed)
| Metric | Limit | Rationale |
|--------|-------|-----------|
| LCP | 4.0 s | Google's "poor" threshold; above this search ranking impact is severe |
| FID | 0.3 s | Poor threshold for interaction delay |
| CLS | 0.25 | Poor threshold for visual stability |
| FCP | 3.0 s | Slow FCP degrades perceived load speed |
| TTFB | 2.0 s | Server/edge latency ceiling |

### Regression threshold (relative)
- **>10% degradation** vs 7-day baseline for any metric triggers failure.

Why 10%? Allows for natural variance while catching meaningful regressions. Smaller drops will be caught by daily lighthouse monitor; this gate catches bigger ones pre-merge.

---

## Baseline Management

- **Storage:** `.hermes/memory/performance-budget/baseline.json` (tracked in repo)
- **Update policy:**
  - PR runs **never** update baseline (read-only)
  - Main-branch runs (e.g., manual or scheduled) can update baseline by setting `IS_MAIN_BRANCH=true`. That's used to refresh the baseline after a release includes intentional improvements.
- **History:** `history.json` automatically keeps the last 90 daily runs.
- **New routes:** If a page has no prior baseline (e.g., brand-new route), only hard limits apply — avoids false failures on new content.

---

## Configuration

### Environment variables
- `IS_MAIN_BRANCH` — when `true`, baseline is updated after a successful run. Set in workflow conditionally.

### Command-line flags
```bash
--url <url>                # required: URL to test (preview or localhost)
--baseline-file <path>     # path to baseline.json (default: .hermes/memory/performance-budget/baseline.json)
--output-dir <dir>         # where to store run reports
--strict                   # optional future: stricter mode (not yet used)
```

---

## Workflow behavior

**Trigger:** On every PR opening or update targeting `main`.

**Steps:**
1. Checkout code
2. Setup Node 20 + cache
3. `npm ci`
4. `npm run build` (static site)
5. Start local server: `npx serve out -p 3000`
6. Run `performance-budget-enforcer.cjs` against `http://localhost:3000`
7. If exit code ≠ 0 → job fails → GitHub check red → PR cannot be merged (if branch protection requires check)
8. Upload report artifacts for debugging

**Manual run:** Available via `workflow_dispatch` to test any branch or URL.

---

## Interpreting Results

### Passing
```
✅ Hard limits passed
✅ No significant regression vs baseline
✅ Performance budget check PASSED
```
→ Green check on PR.

### Failing
```
❌ Hard limit violations:
  - LCP 4.32s > 4.0s
❌ Performance budget check FAILED
```
→ Red X on PR; developer must fix.

Output includes which metric failed and the delta. Suggested actions:
- Optimize images above the fold (LCP)
- Reduce JavaScript blocking (FID)
- Avoid layout shifts (CLS)
- Improve TTFB via caching/CDN

---

## Adding/Updating Baselines

After a release where performance is known to be good (or after intentional improvements refresh the baseline), you can update the stored baseline:

Option A: Merge a PR with the updated baseline committed (by running the enforcer locally with `IS_MAIN_BRANCH=true` and committing the changed `baseline.json`).

Option B: Run a manual GitHub Actions workflow with `IS_MAIN_BRANCH=true` env; commit the artifact back via a separate automation step (future work).

**Caution:** Do not update baseline if performance degraded; that would erode standards.

---

## Safety & Cost

- **Safe:** Only reads the built site; no network calls beyond localhost; no external SaaS.
- **Zero cost:** Uses GitHub Actions minutes + lighthouse (open source). No external monitoring services.
- **Deterministic:** Repeatable runs; artifacts kept for 30 days.

---

## Future Enhancements

- [ ] **Route-specific budgets** — different pages can have different LCP targets (e.g., article vs product page)
- [ ] **Mobile viewport budgets** — separate budgets for mobile emulation
- [ ] **Automatic baseline update on main** — scheduled nightly run that updates baseline if all metrics stable/improving
- [ ] **PR comment with detailed diff per metric** — more actionable than just failing
- [ ] **Screenshot on failure** — capture page screenshot to help debug LCP/CLS issues
- [ ] **Integration with Daily Digest** — summarize PR budget failures in daily summary

---

## Related Guardrails

| Guardrail | Interaction |
|-----------|-------------|
| #9 Lighthouse Performance Monitor | Provides historical trends; baseline used by this guardrail |
| #34 Field Performance (RUM) | Real user data complements lab Lighthouse runs |
| #25 Error Tracking | JS errors can impact interactivity (FID) |
| #12 API Health Monitor | Slow APIs contribute to TTFB/FCP |

**Performance Budget Enforcement** ensures code that would degrade user experience doesn't ship.
