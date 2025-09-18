---
{"title":"Observable, SLO-Driven Routing (2026)","excerpt":"Route by latency, quality, cost, and safety with live scorecards and guardrails.","author":{"name":"AI Platform Team","title":"Applied ML Engineering"},"publishedDate":"2025-09-16","featuredImage":"/images/blog/slo-driven-routing-2026.jpg","tags":["routing","observability","slo","cost"]}
---

Reliability for AI systems hinges on making routing decisions that reflect business SLOs. This article shows how to operationalize budget‑, latency‑, quality‑, and safety‑aware routing in production.

## SLOs to encode

- p95 latency ≤ 250ms for interactive flows
- Hallucination rate ≤ 1% vs. seeded assertions
- Policy violation probability ≤ 0.1%
- Cost per interaction ≤ target envelope per tier

## Telemetry to collect

- Trace spans with tool calls, caches, and fallbacks
- Eval outcomes mapped to scenarios
- Policy engine events and approvals
- Budget meters and token accounting

## Control strategies

- Multi‑armed bandits with safety filters
- Deterministic fallback trees for critical paths
- Per‑tenant budgets and model caps
- Canary routes with automatic backoff on scorecard regressions

By wiring routing to live scorecards, teams continuously optimize for user experience and business constraints—without sacrificing safety.

