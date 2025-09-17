import Link from 'next/link'

export const metadata = {
	title: 'Policy‑as‑Code Starter Kit — Approvals, Risk Tiers, Eval Gates',
	description:
		'Copy‑paste policies, risk tiers, and approvals wired to evaluation gates to ship safe autonomy in production.',
}

export default function Page() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-indigo-50 via-emerald-50 to-slate-100">
			<section className="py-16">
				<div className="mx-auto max-w-3xl px-6 lg:px-8">
					<nav className="mb-8">
						<Link href="/blog" className="text-indigo-600 hover:text-indigo-700">
							← Back to Blog
						</Link>
					</nav>
					<header className="mb-10">
						<div className="flex items-center gap-3 mb-3">
							<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">Governance</span>
							<span className="text-xs text-gray-600">September 16, 2025</span>
							<span className="text-xs text-gray-400">•</span>
							<span className="text-xs text-gray-600">6 min read</span>
						</div>
						<h1 className="text-4xl font-bold text-gray-900">Policy‑as‑Code Starter Kit</h1>
						<p className="mt-4 text-lg text-gray-700">
							A pragmatic starter kit to operationalize policy‑as‑code with approvals, risk tiers, and evaluation
							gates—so agent systems ship safely, predictably, and audit‑ready.
						</p>
					</header>

					<article className="prose prose-slate max-w-none">
						<h2>What this starter kit includes</h2>
						<ul>
							<li>Approval workflows mapped to risk tiers and deployment stages</li>
							<li>Evaluation gates for safety, reliability, quality, and cost</li>
							<li>Runtime guardrails for tool use with audit logging</li>
							<li>Release scorecards with rollback contracts</li>
						</ul>

						<h3>Quick start</h3>
						<ol>
							<li>Define policies in code with clear owners and exceptions.</li>
							<li>Wire policies to evaluation gates in CI/CD and runtime.</li>
							<li>Track decisions and evidence in an "evaluation hub" for audits.</li>
						</ol>

						<h3>Risk‑tiered controls</h3>
						<p>
							Use tiered controls for model changes, prompt updates, data sources, and tool permissions. Higher tiers
							require multi‑party approvals, stricter gates, and slower rollouts.
						</p>

						<h3>Outcomes</h3>
						<p>
							Fewer incidents, predictable spend, and faster iteration with clear evidence for every change.
						</p>
					</article>

					<footer className="mt-12 flex items-center gap-3">
						<Link href="/blog" className="text-indigo-600 hover:text-indigo-700">
							← Back to Blog
						</Link>
						<Link href="/blog/ai-2026-policy-as-code-blueprint" className="text-purple-700 hover:text-purple-800">
							Blueprint →
						</Link>
					</footer>
				</div>
			</section>
		</div>
	)
}

