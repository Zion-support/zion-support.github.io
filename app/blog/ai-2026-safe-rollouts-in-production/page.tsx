import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Safe Rollouts in Production',
  description: 'Progressive delivery with eval gates, guardrails, and observability to prevent regressions.'
};

export default function SafeRolloutsInProductionPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-sm text-purple-700 font-semibold mb-2">New on the blog</p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">AI 2026: Safe Rollouts in Production</h1>
      <p className="text-gray-600 mb-8">
        Minimize risk with evaluation-gated canaries, automated rollbacks, and live safety checks. This overview
        highlights a proven approach to ship AI changes with confidence.
      </p>

      <div className="prose prose-lg max-w-none">
        <h2>Key Practices</h2>
        <ul>
          <li>Gate rollouts with scenario evaluations and SLO-aligned thresholds.</li>
          <li>Use progressive exposure (canary, region, cohort) with automatic rollback triggers.</li>
          <li>Instrument safety, quality, and cost signals with real-time dashboards.</li>
          <li>Adopt policy-as-code for permissions, approvals, and risk-tiered tooling.</li>
        </ul>
      </div>

      <div className="mt-10 flex gap-3">
        <Link href="/content/ai-2026-evaluation-runbook-starter-kit" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Eval Runbook</Link>
        <Link href="/content/ai-2026-operational-excellence-handbook" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Ops Handbook</Link>
      </div>
    </main>
  );
}

