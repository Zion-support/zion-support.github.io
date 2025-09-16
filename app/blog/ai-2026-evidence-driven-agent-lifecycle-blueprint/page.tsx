import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Evidence‑Driven Agent Lifecycle — Blueprint',
  description:
    'Gate every lifecycle phase with evaluations: design, test, deploy, operate. Ship safer, reliable autonomous agents with audit‑ready evidence.',
};

export default function EvidenceDrivenAgentLifecycleBlueprintPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-sm text-purple-700 font-semibold">Blueprint · Sept 16, 2025</p>
      <h1 className="mt-2 text-4xl font-bold text-gray-900">AI 2026: Evidence‑Driven Agent Lifecycle — Blueprint</h1>
      <p className="mt-4 text-gray-700">
        This blueprint describes an evaluation‑first lifecycle for autonomous agents: requirements, design, implementation, testing,
        deployment, and operations. Each phase is safeguarded by policy‑as‑code gates, observable metrics, and rollback contracts,
        producing auditable evidence across safety, quality, reliability, latency, and cost.
      </p>

      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900">1) Requirements and Design</h2>
          <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
            <li>Define user‑facing outcomes and guardrails as policy rules with versioning.</li>
            <li>Model risks and create scenario suites mapping to mitigations and KPIs.</li>
            <li>Plan observability: traces, events, scorecards, and incident tags.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">2) Implementation and Pre‑Prod Testing</h2>
          <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
            <li>Run scenario suites in CI; fail builds on scorecard regressions.</li>
            <li>Validate tool use with sandboxes, least‑privilege scopes, and runtime checks.</li>
            <li>Track cost budgets and quality thresholds before promotion.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">3) Deployment and Progressive Delivery</h2>
          <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
            <li>Use eval‑gated canaries with rollback contracts tied to scorecards.</li>
            <li>Automate approvals via policy‑as‑code with evidence links.</li>
            <li>Capture post‑deployment evals and annotate changes for auditability.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">4) Operations and Incident Learning</h2>
          <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
            <li>Standardize on agents‑on‑call runbooks with eval‑gated mitigations.</li>
            <li>Feed incidents back into policy, scenarios, and SLOs for continuous hardening.</li>
            <li>Publish evidence dashboards for stakeholders and compliance.</li>
          </ul>
        </section>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/content/ai-2026-evaluation-harness-blueprint" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Eval Harness</Link>
        <Link href="/blog/ai-2026-safe-rollouts-in-production" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Safe Rollouts</Link>
        <Link href="/blog/ai-2026-agent-platform-slos-best-practices" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Agent SLOs</Link>
      </div>
    </main>
  );
}

