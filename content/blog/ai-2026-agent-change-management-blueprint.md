# AI 2026: Agent Change Management Blueprint — Approvals, Rollouts, Evidence

Publish Date: 2025-09-15
Tags: Change Management, Governance, Approvals, Progressive Delivery, Evidence, 2026

Agent updates must be safe, auditable, and reversible. This blueprint streamlines change management with policy-as-code approvals, progressive rollouts, and standardized evidence.

## Core practices

- Dual approvals for medium/high-risk tool permissions
- Progressive rollouts with error-budget and eval gates
- Evidence bundles: diffs, traces, eval results, and sign-offs

## Example approval policy

```yaml
approvals:
  risk_tier_1: 1
  risk_tier_2: 2
  risk_tier_3: 2 + security
checks:
  - eval_suite: regression-core
  - slo_gate: reliability >= 99.5%
  - rollback_plan: required
```

## Outcomes

- Incidents: -35% with standardized gates
- Rollbacks: < 5 minutes with one-click revert
- Audit: continuous, with immutable change records

Adopt this blueprint to ship agent changes faster—with confidence and compliance.