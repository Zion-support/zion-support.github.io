import React from 'react';

export const metadata = {
	title: 'AI 2026: Safe Rollouts in Production',
	description:
		'Progressive delivery with evaluation gates, scorecards, and automated rollback.',
};

export default function Page() {
	return (
		<main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<h1 className="text-3xl font-bold text-gray-900">Safe Rollouts in Production</h1>
			<p className="mt-4 text-gray-700">
				Apply eval‑gated rollouts with canaries and rollback contracts to reduce risk while
				speeding up delivery.
			</p>
		</main>
	);
}

import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Safe Rollouts in Production — Eval‑Gated Releases',
  description: 'Design progressive delivery for autonomous agents with evaluation gates, canaries, and rollback automation.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Safe Rollouts in Production</h1>
          <p className="text-lg opacity-90">Eval‑gated progressive delivery for reliable autonomous agent updates.</p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-purple">
        <p>
          Ship safer changes with evaluation gates at every stage: development, staging, canary, and ramp.
          Use policy‑as‑code to block promotions when metrics regress. Automate rollback and capture
          auditable evidence for releases.
        </p>

        <h2>Core Practices</h2>
        <ul>
          <li>Define scenario suites and SLO‑backed metrics for key workflows</li>
          <li>Run pre‑merge and pre‑deploy evals; require green thresholds</li>
          <li>Use canary cohorts with guardrails and automatic rollback</li>
          <li>Record evidence artifacts for audits and postmortems</li>
        </ul>

        <h2>Resources</h2>
        <ul>
          <li><Link href="/content/ai-2026-evaluation-harness-blueprint">Evaluation Harness Blueprint</Link></li>
          <li><Link href="/blog/ai-2026-agent-platform-slos-best-practices">Agent Platform SLOs</Link></li>
        </ul>

        <div className="mt-10 p-6 rounded-xl bg-gray-50 border border-gray-200">
          <h3 className="m-0">Next up</h3>
          <p className="m-0">Operate with evidence: adopt the Autonomous Evidence‑Led Operations model.</p>
          <p className="m-0"><Link href="/blog/ai-2026-autonomous-evidence-led-operations">Read the guide →</Link></p>
        </div>
      </main>
    </div>
  );
}

