---
title: "AI 2026: Evaluation Runbook — Starter Kit"
description: "Practical SOP to add eval gates to agents: suites, thresholds, rollouts, and evidence."
date: 2025-09-16
tags: ["Evaluations", "Reliability", "SOP", "Runbook", "2026"]
---

# AI 2026: Evaluation Runbook — Starter Kit

This starter kit provides a minimal, production‑ready SOP to integrate evaluations into agent lifecycles.

## Core components

- Scenario suites covering safety, correctness, cost, and latency
- Thresholds and error budgets mapped to risk tiers
- CI/CD gates for pre‑merge and pre‑deploy checks
- Canary and progressive delivery policy
- Evidence vault: results, incidents, rollbacks, approvals

## Implement in one sprint

1. Define 10 high‑value scenarios with ground truth
2. Add a pre‑merge job that fails on regression > 2%
3. Gate production deploys on pass‑rate >= 95%
4. Capture runs to an evidence store; publish dashboards
5. Run weekly retros to expand coverage and tighten gates

Start small, measure impact, and iterate.

