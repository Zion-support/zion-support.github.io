import Link from 'next/link';

export const metadata = {
	title: 'AI 2026: Governed Eval Gates — Quickstart',
	description: 'Add evaluation gates to your agent lifecycle with policy-as-code, scorecards, and rollback contracts.'
};

export default function GovernedEvalGatesQuickstartPage() {
	return (
		<main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			<h1 className="text-4xl font-bold text-gray-900 mb-4">AI 2026: Governed Eval Gates — Quickstart</h1>
			<p className="text-gray-600 mb-8">
				This quickstart helps you wire evaluation gates into the agent lifecycle using
				policy-as-code, scenario suites, and release scorecards. Ship safer autonomy with
				evidence-led decision points and deterministic rollback.
			</p>
			<div className="prose prose-purple max-w-none">
				<h2>What you will implement</h2>
				<ul>
					<li>Policy-as-code risk tiers and approvals</li>
					<li>Scenario suites and scorecards for pass/fail criteria</li>
					<li>Eval-gated CI/CD with rollback contracts</li>
				</ul>
				<h2>Get started</h2>
				<ol>
					<li>Define risk tiers and map them to approvals and budgets.</li>
					<li>Create scenario suites that reflect safety, quality, reliability, and cost.</li>
					<li>Publish scorecards; fail builds that breach thresholds.</li>
					<li>Instrument runtime checks and evidence capture.</li>
				</ol>
				<p>
					Next, explore the detailed blueprint and related guides below.
				</p>
			</div>

			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
				<Link href="/blog/ai-2026-eval-gated-ci-cd-blueprint" className="block p-4 rounded-lg border border-purple-200 hover:bg-purple-50">
					<span className="block text-sm text-purple-700 font-semibold">Blueprint</span>
					<span className="block text-gray-900 font-bold">Eval‑Gated CI/CD</span>
				</Link>
				<Link href="/content/ai-2026-evaluation-runbook-starter-kit" className="block p-4 rounded-lg border border-purple-200 hover:bg-purple-50">
					<span className="block text-sm text-purple-700 font-semibold">Runbook</span>
					<span className="block text-gray-900 font-bold">Evaluation Runbook Starter Kit</span>
				</Link>
			</div>
		</main>
	);
}

