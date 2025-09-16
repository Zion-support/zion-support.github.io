import { Link, useParams } from 'react-router-dom';

const content = {
  'ai-2026-runtime-eval-gates-starter': {
    title: 'AI 2026: Runtime Eval Gates — Minimal Set to Ship Fast',
    body: `Adopt a pragmatic set of runtime eval gates that catch regressions early while keeping velocity high:

- Quality gates: groundedness, hallucination rate, regression tests on top tasks
- Safety gates: sensitive-topic detectors with human-in-the-loop escalation
- Cost gates: per-request budget caps with spend SLOs and alerts
- Reliability gates: latency bands with canary abort and auto-rollback

This starter includes copy-paste configs, CI wiring tips, and rollout recipes you can complete in a sprint.`,
    date: '2025-09-16',
  },
  'ai-2026-cost-aware-routing-blueprint': {
    title: 'Cost-Aware Routing 2026: Practical Blueprint You Can Adopt Today',
    body: `Preserve quality while cutting spend by routing tasks to the right model at the right time:

- Task profiles: classify by required accuracy, latency, and safety sensitivity
- Routing bands: deterministic routes for known-safe tasks, explore/exploit for uncertain tasks
- Budgets and SLOs: enforce per-profile budgets and latency targets with auto fallback
- Observability: scorecards tracking quality, safety, reliability, and cost in one view

Blueprint ships with policy examples, test harness ideas, and a 30/60/90 rollout plan.`,
    date: '2025-09-16',
  },
  'agentic-ops-2026-blueprint': {
    title: 'Agentic Ops 2026: Practical Enterprise Blueprint',
    body: `Learn how to productionize agentic workflows with:

 - Evaluation gates at integration and release time
 - Observability across autonomy levels
 - Risk-tiered tool permissions
 - Incident response patterns for LLM systems

This blueprint includes architecture diagrams, rollout checklists, and KPI templates.`,
    date: '2025-09-16',
  },
  'ai-2026-reliable-agent-deployments': {
    title: 'AI 2026: Reliable Agent Deployments — Canary, Rollback, Scorecards',
    body: `Ship agent features confidently with a minimal reliability playbook:

- Preflight checks: offline evals on top tasks and sensitive flows
- Canary strategy: 1% traffic with auto-abort on SLO violation
- Rollback: deterministic, reversible releases with kill-switch
- Journey scorecards: Quality, Safety, Reliability, Cost in one view

Includes copy‑paste canary configs, alert policies, and a 30/60/90 rollout plan.`,
    date: '2025-09-16',
  },
  'exec-guide-eval-gates-ship-tomorrow': {
    title: 'Exec Guide: Evals + Guardrails You Can Ship Tomorrow',
    body: `Leaders’ playbook to gate changes with:

- Policy‑as‑code approvals and risk tiers
- Online evals at preflight, canary, post‑release
- Journey scorecards with pass/fail thresholds
- Deterministic rollback and kill‑switches

Includes copy‑paste YAML snippets and a rollout checklist.`,
    date: '2025-09-16',
  },
  'finserv-case-study-policy-routing-35-savings': {
    title: 'FinServ Case Study: Policy Routing Cuts Spend by 35%',
    body: `How a major bank preserved quality while reducing spend:

- Routing bands tied to task profiles
- Budget caps and latency SLOs
- Online groundedness evals gating releases
- Regression kill‑switch with instant rollback

Annualized savings: $350M with quality held constant.`,
    date: '2025-09-16',
  },
  'journey-scorecards-starter-kpis': {
    title: 'Journey Scorecards Starter: KPIs You Can Adopt Today',
    body: `Drop‑in KPI JSON schemas for:

- Quality, Safety, Reliability, Cost
- Thresholds and alert policies
- CI gate wiring examples
- Reference dashboards

Adopt in under a day with minimal integration.`,
    date: '2025-09-16',
  },
  'trustworthy-model-routing': {
    title: 'Trustworthy Model Routing: Production Patterns',
    body: `We cover routing strategies across heterogeneous models:

 - Deterministic routing by task profile
 - Probabilistic A/B routing with guardrails
 - Cost/latency-aware fallbacks
 - Safety triage and attribution

Includes example configs and test harness ideas.`,
    date: '2025-09-16',
  },
  'ai-2026-governed-tool-use-starter': {
    title: 'AI 2026: Governed Tool Use — Starter You Can Ship Today',
    body: `Adopt safe tool use patterns without slowing teams down:

- Risk tiers: map tools and actions to permission levels
- Policy gates: enforce approvals for sensitive operations
- Audit trails: structured logs with user, intent, and evidence
- Sandboxes: constrained execution with budget and time caps

Starter includes example policies, audit schemas, and enforcement hooks.`,
    date: '2025-09-16',
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = content[slug];
  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-2xl font-semibold mb-4">Post not found</h1>
          <Link to="/blog" className="text-indigo-600 hover:underline">Back to Insights</Link>
    );
  }
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link to="/blog" className="text-sm text-indigo-600 hover:underline">← All Insights</Link>
        <h1 className="text-4xl font-bold tracking-tight mt-3 mb-3">{post.title}</h1>
        <div className="text-sm text-gray-500 mb-8">{new Date(post.date).toLocaleDateString()}</div>
        <div className="prose prose-indigo max-w-none whitespace-pre-wrap">{post.body}</div>
  );
}