import Link from 'next/link';

export const metadata = {
	title: 'AI 2026: Reliable Agent Upgrades — Blueprint',
	description:
		'Progressive delivery, canary scorecards, rollback contracts, and safety evals for agent upgrades.',
};

export default function Page() {
	return (
		<div className="min-h-screen bg-white">
			<section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 text-white py-16">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl md:text-5xl font-bold mb-4">Reliable Agent Upgrades — Blueprint</h1>
					<p className="text-lg opacity-90">Ship upgrades confidently with eval‑gated ramps and automated rollbacks.</p>
				</div>
			</section>

			<main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-indigo">
				<p>
					Use progressive delivery and reliability scorecards to upgrade agents without regressions. Define
					rollback contracts and gate ramps on scenario pass‑rates, safety metrics, and cost budgets.
				</p>

				<h2>Release Controls</h2>
				<ul>
					<li>Canary cohorts with automated rollback</li>
					<li>Release scorecards with SLO budgets</li>
					<li>Scenario gates across critical workflows</li>
					<li>Audit‑ready evidence snapshots</li>
				</ul>

				<div className="mt-10 p-6 rounded-xl bg-gray-50 border border-gray-200">
					<h3 className="m-0">Related resources</h3>
					<ul>
						<li><Link href="/resources/ai-2026-release-scorecards-starter-kit">Release Scorecards Starter Kit</Link></li>
						<li><Link href="/blog/ai-2026-production-safety-checklist">Production Safety Checklist</Link></li>
						<li><Link href="/blog/ai-2026-evaluation-cookbook">Evaluation Cookbook</Link></li>
					</ul>
				</div>
			</main>
		</div>
	);
}

