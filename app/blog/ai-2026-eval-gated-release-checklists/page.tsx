import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Eval‑Gated Release Checklists — Practical Guide',
  description: 'Practical, copy‑pasteable checklists for evaluation‑gated releases: scorecards, rollback contracts, approvals, and incident links.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Eval‑Gated Release Checklists</h1>
          <p className="mt-4 text-lg text-indigo-100">
            A practical guide to shipping reliably with evaluation gates, scorecards, and rollback contracts.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/blog/ai-2026-release-scorecards" className="bg-white text-indigo-700 px-5 py-2 rounded-lg font-semibold hover:bg-indigo-50">Release Scorecards</Link>
            <Link href="/blog/ai-2026-safe-change-management-blueprint" className="border border-white text-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-indigo-700">Safe Change Blueprint</Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Why evaluation‑gated releases?</h2>
          <p className="mt-3 text-gray-700">
            Autonomous agents and model‑heavy systems demand higher safety and reliability bars. Evaluation gates provide a
            deterministic mechanism to ship with confidence by tying deploy decisions to objective evidence and thresholds.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Pre‑release checklist</h3>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                <li>Define evaluation objectives and key risks for this change.</li>
                <li>Map scenarios to risks; ensure coverage for safety, quality, reliability, and cost.</li>
                <li>Set pass thresholds and scorecard KPIs with rollback criteria.</li>
                <li>Update policy‑as‑code to require the scorecard for this rollout stage.</li>
                <li>Obtain approvals for risk tier, blast radius, and guardrails.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Deployment checklist</h3>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                <li>Start with canary or shadow; enable live evals and tracing.</li>
                <li>Collect scorecard metrics; verify guardrail and sandbox events.</li>
                <li>Hold at gate until thresholds pass; auto‑rollback on breach.</li>
                <li>Record evidence in the release note: scorecard, incidents, approvals.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Post‑release checklist</h3>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                <li>Run post‑incident analysis if any guardrail was triggered.</li>
                <li>Update scenarios for regressions and add new risk probes.</li>
                <li>Attach scorecard links to the evidence hub for audit readiness.</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 p-4 rounded-lg bg-indigo-50 border border-indigo-100">
            <div className="font-semibold text-indigo-900">Starter resources</div>
            <div className="mt-2 flex flex-wrap gap-3">
              <Link href="/blog/ai-2026-evaluation-cookbook" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-700">Evaluation Cookbook</Link>
              <Link href="/blog/ai-2026-release-scorecards" className="inline-block border border-indigo-600 text-indigo-700 px-4 py-2 rounded-md font-semibold hover:bg-indigo-50">Release Scorecards</Link>
              <Link href="/blog/ai-2026-operational-blueprint" className="inline-block border border-indigo-600 text-indigo-700 px-4 py-2 rounded-md font-semibold hover:bg-indigo-50">Operational Blueprint</Link>
            </div>
          </div>

          <div className="mt-12 text-sm text-gray-500">Updated: Sept 16, 2025</div>
        </div>
      </section>
    </main>
  );
}

