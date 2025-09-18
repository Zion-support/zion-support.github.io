# Reliable Agent Rollouts — Executive Checklist (2026)

Shipping agentic systems safely requires progressive delivery, evaluation gates, and fast rollback paths. Use this checklist to prepare your next rollout.

## 1) Preflight
- Define SLIs/SLOs aligned to outcomes
- Add offline and synthetic evals for critical scenarios
- Configure budget and latency guardrails

## 2) Canary
- Route a small, representative slice of traffic
- Monitor eval scorecards and incident signals in real time
- Enforce kill-switches and approvals for risky actions

## 3) Rollout & Rollback
- Gradually increase traffic as quality holds
- Keep rollback path warm and reversible
- Capture traces, policy events, and artifacts as evidence

## 4) Post-Release
- Compare before/after business metrics
- Triage regressions with evidence-first postmortems
- Feed learnings into runbooks and tests

— Zion AI Lab