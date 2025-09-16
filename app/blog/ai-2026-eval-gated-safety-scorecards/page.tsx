import Link from 'next/link';

export const metadata = {
	title: 'AI 2026: Eval‑Gated Safety Scorecards | Zion Tech Group',
	description:
		'How to design, implement, and operate eval‑gated safety scorecards for autonomous agents.',
};

export default function EvalGatedSafetyScorecardsPage() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
			<article className="mx-auto max-w-3xl px-6 py-16">
				<header className="mb-10">
					<p className="text-sm text-gray-600">Safety Engineering • September 2025 • 8 min read</p>
					<h1 className="text-4xl font-extrabold tracking-tight text-gray-900">AI 2026: Eval‑Gated Safety Scorecards</h1>
					<p className="mt-3 text-gray-700">Define objective safety gates with scorecards wired into CI/CD and runtime policy enforcement.</p>
				</header>

				<section className="prose prose-slate max-w-none">
					<h2>Why scorecards</h2>
					<p>Scorecards convert qualitative safety expectations into quantitative, thresholded checks that can block promotions and trigger rollbacks. They also improve auditability by producing durable evidence bundles.</p>

					<h2>Design principles</h2>
					<ul>
						<li>Clear dimensions: safety, security, compliance, latency, cost</li>
						<li>Objective metrics with reproducible evals and stable datasets</li>
						<li>Policy‑as‑code for gates, waivers, and exception windows</li>
						<li>Continuous scoring in canaries and production shadow traffic</li>
					</ul>

					<h2>Operational workflow</h2>
					<ol>
						<li>Pre‑merge evals produce baseline scores and diffs</li>
						<li>Canary rollout with runtime scorecard ingestion</li>
						<li>Automated decisions: promote, hold, rollback with incident hooks</li>
					</ol>

					<h2>Evidence and audits</h2>
					<p>Persist scorecard results, datasets, model versions, and policy revisions in an evidence hub. Link incidents and approvals to maintain an end‑to‑end chain of custody.</p>
				</section>

				<footer className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-600 flex items-center gap-4">
					<Link href="/blog" className="text-emerald-700 hover:text-emerald-800">← Back to Blog</Link>
					<Link href="/blog/ai-2026-zero-downtime-agent-rollouts" className="text-gray-600 hover:text-gray-800">Zero‑Downtime Rollouts →</Link>
				</footer>
			</article>
		</main>
	);
}

