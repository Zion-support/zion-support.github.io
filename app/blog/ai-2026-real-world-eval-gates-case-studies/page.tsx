import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Real‑World Eval Gates — Case Studies (2026)',
  description: 'Practical case studies of evaluation-gated agent systems in production with scorecards and automated rollbacks.',
};

export default function RealWorldEvalGatesCaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold">Real‑World Eval Gates — Case Studies</h1>
          <p className="mt-3 text-indigo-100/90">Production patterns: scorecards, rollback contracts, and evidence hubs.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-10 prose prose-lg">
        <p>
          These case studies showcase teams shipping autonomous agents behind evaluation gates. You will find examples
          of release scorecards, rollback contracts, and policy-as-code that make change safer and faster.
        </p>
        <h2>Highlights</h2>
        <ul>
          <li>Canary releases with automated rollback based on score thresholds.</li>
          <li>Route-aware eval suites tied to business KPIs.</li>
          <li>Evidence hubs aggregating traces, evals, and approvals.</li>
        </ul>
        <div className="not-prose mt-8 flex gap-3">
          <Link href="/blog/ai-2026-release-scorecards" className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-indigo-700">Release Scorecards</Link>
          <Link href="/resources/ai-2026-release-scorecards-starter-kit" className="inline-block border border-indigo-600 text-indigo-700 px-5 py-3 rounded-lg font-semibold hover:bg-indigo-50">Starter Kit</Link>
        </div>
      </main>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';

export const metadata = {
	title: 'AI 2026: Real‑World Eval Gates — Case Studies',
	description: 'Practitioner case studies of evaluation‑gated releases, scorecards, and rollback contracts in production agent systems.',
};

export default function RealWorldEvalGatesCaseStudiesPage() {
	return (
		<div className="min-h-screen bg-white">
			<header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
				<div className="max-w-4xl mx-auto px-6 py-14">
					<p className="text-indigo-100/90 text-sm font-semibold">Case Studies</p>
					<h1 className="text-4xl md:text-5xl font-bold mt-2">AI 2026: Real‑World Eval Gates — Case Studies</h1>
					<p className="mt-4 text-indigo-100/90 max-w-2xl">How teams ship safer, more reliable autonomy using evaluation gates, canary scorecards, and evidence hubs.</p>
				</div>
			</header>
			<main className="max-w-4xl mx-auto px-6 py-10 prose prose-lg">
				<p>
					Evaluation‑gated delivery has moved from research to production. These case studies illustrate
					practical guardrails that reduce regressions, control cost, and accelerate iteration.
				</p>
				<h2>Highlights</h2>
				<ul>
					<li>Policy‑as‑code eval suites at PR, canary, and post‑deploy checkpoints</li>
					<li>Release scorecards with hard/soft gates and rollback contracts</li>
					<li>Evidence hubs aggregating traces, metrics, and eval outcomes</li>
					<li>Risk‑tiered tool use with sandboxed permissions</li>
				</ul>
				<h2>Case Study A — Agent Release Scorecards</h2>
				<p>
					A platform team defined a minimal, stable scorecard: task success, safety violations,
					latency SLO adherence, and cost per task. Soft gates alert and slow rollout;
					hard gates auto‑rollback via contracts.
				</p>
				<h2>Case Study B — Eval‑Gated Tool Permissions</h2>
				<p>
					Tool access is granted by risk tier and verified by pre‑flight checks. Canary evals
					validate safety and performance before widening traffic.
				</p>
				<h2>Starter Resources</h2>
				<div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
					<Link href="/blog/ai-2026-release-scorecards" className="block p-4 rounded-lg border hover:shadow">
						<span className="text-sm font-semibold text-purple-700">Guide</span>
						<div className="font-bold text-gray-900 mt-1">Release Scorecards</div>
					</Link>
					<Link href="/blog/ai-2026-safe-rollouts-in-production" className="block p-4 rounded-lg border hover:shadow">
						<span className="text-sm font-semibold text-purple-700">Playbook</span>
						<div className="font-bold text-gray-900 mt-1">Safe Rollouts</div>
					</Link>
					<Link href="/content/ai-2026-evaluation-harness-blueprint" className="block p-4 rounded-lg border hover:shadow">
						<span className="text-sm font-semibold text-purple-700">Blueprint</span>
						<div className="font-bold text-gray-900 mt-1">Evaluation Harness</div>
					</Link>
				</div>
			</main>
		</div>
	);
}

