import Link from 'next/link';

export const metadata = {
	title: 'Reliable Agent Evals 2025: Measure and Guardrail Autonomy | Zion Tech Group',
	description:
		'Blueprint for production agent evaluations: golden tasks, scorecards, policy tests, budgets, and continuous improvement.',
	openGraph: {
		title: 'Reliable Agent Evals 2025 — Measure and Guardrail Autonomy',
		description:
			'Blueprint for production agent evaluations: golden tasks, scorecards, policy tests, budgets, and continuous improvement.',
		type: 'article'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Reliable Agent Evals 2025 — Measure and Guardrail Autonomy',
		description:
			'Blueprint for production agent evaluations: golden tasks, scorecards, policy tests, budgets, and continuous improvement.'
	}
};

export default function ReliableAgentEvals2025Page() {
	return (
		<div className="min-h-screen bg-slate-950 text-white">
			<main className="max-w-4xl mx-auto px-6 py-12">
				<nav className="mb-8">
					<Link href="/blog" className="text-blue-400 hover:text-blue-300 transition-colors">
						← Back to Blog
					</Link>
				</nav>

				<article className="prose prose-invert prose-lg max-w-none">
					<header className="mb-10">
						<div className="flex items-center gap-3 mb-4 text-sm text-white/70">
							<span className="px-3 py-1 bg-purple-400/20 text-purple-300 rounded-full border border-purple-400/30">
								AI Reliability
							</span>
							<span>September 30, 2025</span>
							<span>•</span>
							<span>12 min read</span>
						</div>
						<h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
							Reliable Agent Evals 2025: Measure and Guardrail Autonomy
						</h1>
						<p className="text-white/80 mt-4 text-xl">
							A practical blueprint to evaluate and govern autonomous agents in production — golden
							tasks, scorecards, policy tests, and budgeted tools that keep outcomes on target.
						</p>
					</header>

					<section className="mb-12">
						<h2 className="text-3xl font-bold text-fuchsia-300 mb-4">Evaluation Pillars</h2>
						<ul className="space-y-3 text-white/80">
							<li>Golden tasks per capability with acceptance thresholds</li>
							<li>Scorecards across quality, latency, cost, compliance</li>
							<li>Policy tests: red‑team prompts, tool misuse, data leakage</li>
							<li>Budgets: tokens, tools, time; approvals for risky actions</li>
							<li>Regression suite and canary evals on each change</li>
						</ul>
					</section>

					<section className="mb-12">
						<h2 className="text-3xl font-bold text-purple-300 mb-4">Scorecard Example</h2>
						<div className="grid sm:grid-cols-2 gap-4">
							<div className="bg-white/5 border border-white/10 rounded-lg p-4">
								<div className="text-2xl font-bold text-fuchsia-300 mb-1">+12%</div>
								<div className="text-white/70 text-sm">On‑target outcomes</div>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-4">
								<div className="text-2xl font-bold text-purple-300 mb-1">−35%</div>
								<div className="text-white/70 text-sm">Policy violations</div>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-4">
								<div className="text-2xl font-bold text-blue-300 mb-1">−28%</div>
								<div className="text-white/70 text-sm">P95 latency</div>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-4">
								<div className="text-2xl font-bold text-emerald-300 mb-1">−41%</div>
								<div className="text-white/70 text-sm">Cost per outcome</div>
							</div>
						</div>
					</section>

					<section className="mb-12">
						<h2 className="text-3xl font-bold text-blue-300 mb-4">Implementation Steps</h2>
						<ol className="list-decimal list-inside space-y-3 text-white/80">
							<li>Define capabilities and create golden tasks with reviewers</li>
							<li>Add scorecards tied to business KPIs and risk thresholds</li>
							<li>Instrument agents for traces, budgets, and approvals</li>
							<li>Automate regression and canary evals in CI/CD</li>
							<li>Review outcomes weekly; tune prompts, policies, and tools</li>
						</ol>
					</section>

					<footer className="mt-16 pt-8 border-t border-white/10">
						<div className="flex items-center justify-between text-sm text-white/70">
							<div>Written by Zion Tech Group</div>
							<Link href="/contact" className="text-blue-400 hover:text-blue-300">Get in touch</Link>
						</div>
					</footer>
				</article>
			</main>
		</div>
	);
}
