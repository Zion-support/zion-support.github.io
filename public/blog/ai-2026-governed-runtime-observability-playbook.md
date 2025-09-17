---
title: Governed Runtime Observability — Playbook (2026)
description: Streaming SLIs, eval hooks, and policy events wired to incidents and SLOs.
date: 2025-09-16
---

Modern agentic systems require live, governed observability. This playbook outlines a pragmatic stack:

1. Evidence-first telemetry: traces, policy events, evals, and incidents.
2. Runtime guardrails: policy-as-code with budget, safety, and quality envelopes.
3. SLO-driven orchestration: scorecards power deploy, rollback, and routing.

Key patterns

- Minimal SLO set: reliability, safety, quality, cost
- Evidence bundles per release
- Change windows tied to SLO burn and eval gates

Starter checklist

- Define SLIs and SLO thresholds per agent capability
- Enable policy event streaming and eval hooks in prod
- Automate rollback on sustained SLO burn or policy violations

Further reading

- Agent SLO Scorecards (2026)
- Evaluation Scorecards in Practice (2026)
