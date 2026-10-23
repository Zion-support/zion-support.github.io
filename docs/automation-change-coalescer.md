# Automation change coalescer

The direct-main helper remains a no-op. This coalescer is the safer path for compatible automation output.

- Producers write compatible changes to `automation/staging/<slug>`.
- Manual dispatch or `workflow_call` invokes the coalescer.
- The validator blocks protected paths and enforces conservative policy groups and size budgets.
- The workflow opens or updates one **draft PR** from that staging branch to `main`.
- Existing CI remains the approval gate. The coalescer never merges and never pushes to `main`.

Initial policies:
- `content`: public blog/case-studies/industries/services/apps plus `content/`.
- `reports`: `automation/reports/` only.
- `docs`: `docs/` and root README.

Always blocked include workflows, secrets/credentials, payment/billing/checkout/Stripe, Discovery, Managed IT, APIs/functions/middleware, package manifests, scripts and executable automation code.

There is **no schedule, push or pull_request trigger**. Producers can migrate one at a time after queue-pressure changes validate.
