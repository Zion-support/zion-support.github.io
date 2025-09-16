import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Operational Evals — Blueprint',
  description: 'Evaluation gates, rollback playbooks, and audit-ready evidence for safer, faster AI releases.',
};

export default function OperationalEvalsBlueprintPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <p className="text-indigo-100 font-semibold">Blueprint</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">Operational Evals — Ship Faster, Safer</h1>
          <p className="mt-3 text-indigo-100/90 max-w-3xl">Use eval gates, progressive delivery, and rollback scorecards to accelerate change while keeping risk in check.</p>
          <div className="mt-6">
            <Link href="/resources/ai-2026-operational-evals-checklist" className="inline-block bg-white text-indigo-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-indigo-50">Get the Checklist</Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="prose prose-lg max-w-none">
          <h2>Why Operational Evals</h2>
          <p>
            As autonomous systems and agents reach production, evaluation must move from one-off testing to an
            always-on operational capability. This blueprint defines a practical, evaluation-first operating model
            with clear gates, rollbacks, and audit-ready evidence.
          </p>

          <h3>Core Practices</h3>
          <ul>
            <li>Define lifecycle gates: pre-merge, pre-release, canary, and post-release.</li>
            <li>Standardize scenario suites, metrics, and quality thresholds per risk tier.</li>
            <li>Automate pass/fail policies and approvals via policy-as-code.</li>
            <li>Use canary scorecards and auto-rollback on threshold breaches.</li>
            <li>Centralize evidence: eval runs, incidents, approvals, and KPIs.</li>
          </ul>

          <h3>Reference Gate Set</h3>
          <ol>
            <li>Pre-merge: unit evals, red-team spot checks, model/tool diffs.</li>
            <li>Pre-release: end-to-end scenarios, privacy/safety guardrails, performance.</li>
            <li>Canary: production telemetry, drift checks, on-call readiness.</li>
            <li>Post-release: regression monitors, error budgets, SLO adherence.</li>
          </ol>

          <h3>Getting Started</h3>
          <p>
            Start with one product area. Ship a minimal gate set and expand scenario coverage weekly. Tie approvals to
            policy results, not intuition. Socialize the checklist below to drive consistent execution.
          </p>

          <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-indigo-700">Resource</div>
                <div className="text-lg font-bold text-gray-900">Operational Evals — Checklist</div>
                <div className="text-gray-600">A concise, adoptable list to operationalize evaluation gates.</div>
              </div>
              <div>
                <Link href="/resources/ai-2026-operational-evals-checklist" className="inline-block bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-indigo-700">Open Checklist</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

