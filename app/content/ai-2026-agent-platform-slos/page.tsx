import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Agent Platform SLOs That Matter',
  description: 'A concise SLO set for safety, quality, reliability, and economics in autonomous agent platforms.',
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold">New • 2025-09-15</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">AI 2026: Agent Platform SLOs That Matter</h1>
        <p className="text-gray-600 mt-3">A practitioner’s guide to an actionable SLO set that balances safety, quality, reliability, and cost for enterprise agent platforms.</p>
      </div>

      <div className="prose prose-purple max-w-none">
        <h2>Why SLOs for Agent Platforms</h2>
        <p>Traditional web SLOs under-specify safety and model quality. Agent platforms require additional guardrails and measurements to ensure evaluation-gated safety and business outcomes.</p>

        <h3>Core SLO Categories</h3>
        <ul>
          <li><strong>Safety</strong>: policy violations per 1k actions, blocked risky actions rate, sandbox escape rate.</li>
          <li><strong>Quality</strong>: task success rate on eval suites, regression delta against golden tests.</li>
          <li><strong>Reliability</strong>: action success rate, safe-mode fallback activation MTBF/MTTR.</li>
          <li><strong>Economics</strong>: cost per successful task, cache hit rate, model routing efficiency.</li>
        </ul>

        <h3>Release Gates</h3>
        <p>Ship changes only when eval suites pass and safety deltas stay within budgeted error bars. Automate gates in CI with policy-as-code.</p>

        <h3>Telemetry</h3>
        <p>Emit traces with evaluation IDs, policy decisions, and tool invocations. Aggregate to a central evaluation hub for auditability.</p>

        <h3>Starter Checklist</h3>
        <ol>
          <li>Define 1-2 metrics per category mapped to business outcomes.</li>
          <li>Backfill baselines from production traces and offline evals.</li>
          <li>Enforce CI gates; add red-team scenarios to pre-prod.</li>
          <li>Automate weekly reviews and cost anomaly alerts.</li>
        </ol>

        <p className="mt-8">Related resources:</p>
        <ul>
          <li><Link href="/content/ai-2026-safe-evaluation-hub" className="text-purple-600">Evaluation Hub</Link></li>
          <li><Link href="/content/ai-2026-policy-as-code-starter-kit" className="text-purple-600">Policy-as-Code Kit</Link></li>
        </ul>
      </div>
    </main>
  );
}

