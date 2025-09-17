import Link from 'next/link'

export const metadata = {
	title: 'Trusted RAG — Guardrailed Retrieval That Ships',
	description:
		'Groundedness evals, freshness windows, and rollback contracts wired to scorecards for safe, reliable RAG in production.',
}

export default function Page() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
			<section className="py-16">
				<div className="mx-auto max-w-3xl px-6 lg:px-8">
					<nav className="mb-8">
						<Link href="/blog" className="text-blue-600 hover:text-blue-700">
							← Back to Blog
						</Link>
					</nav>
					<header className="mb-10">
						<div className="flex items-center gap-3 mb-3">
							<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Evaluations</span>
							<span className="text-xs text-gray-600">September 16, 2025</span>
							<span className="text-xs text-gray-400">•</span>
							<span className="text-xs text-gray-600">7 min read</span>
						</div>
						<h1 className="text-4xl font-bold text-gray-900">
							Trusted RAG — Guardrailed Retrieval That Ships
						</h1>
						<p className="mt-4 text-lg text-gray-700">
							Groundedness evals, freshness windows, and rollback contracts wired to scorecards so your
							retrieval‑augmented generation actually ships in production.
						</p>
					</header>

					<article className="prose prose-slate max-w-none">
						<h2>Why RAG fails in production</h2>
						<p>
							Most RAG failures aren’t model problems—they’re missing guardrails. Stale sources, poor chunking,
							irrelevant passages, and no evidence make outcomes unpredictable.
						</p>
						<h3>Ship with evaluation gates</h3>
						<ul>
							<li>Groundedness: citation match, faithfulness, contradiction checks</li>
							<li>Freshness windows: reject stale or unverifiable documents</li>
							<li>Safety: PII, policy, and allowed‑use filters</li>
							<li>Rollback contracts: auto‑fallback on scorecard regression</li>
						</ul>
						<h3>Operational scorecards</h3>
						<p>
							Track quality, latency, cost, and stability. Gate rollouts and upgrades with thresholds and trend
							alerts.
						</p>
					</article>

					<footer className="mt-12 flex items-center gap-3">
						<Link href="/blog" className="text-blue-600 hover:text-blue-700">
							← Back to Blog
						</Link>
						<Link href="/content/ai-2026-evaluation-runbook-starter-kit" className="text-purple-700 hover:text-purple-800">
							Evaluation Runbook →
						</Link>
					</footer>
				</div>
			</section>
		</div>
	)
}

