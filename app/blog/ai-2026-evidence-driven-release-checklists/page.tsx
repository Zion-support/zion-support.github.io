import Link from 'next/link';

export const metadata = {
	title: 'AI 2026: Evidence‑Driven Release Checklists',
	description:
		'Make evals operational with runtime gates, progressive delivery, and audit‑ready rollbacks.',
};

export default function Page() {
	return (
		<main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<p className="text-sm text-gray-500 mb-3">AI 2026 · Checklist</p>
			<h1 className="text-3xl md:text-4xl font-bold text-gray-900">
				Evidence‑Driven Release Checklists
			</h1>
			<p className="mt-4 text-gray-700">
				A practical, auditable checklist to ship safer autonomy: pre‑deployment evaluations,
				progressive delivery with kill‑switches, runtime guardrails, incident hooks, and
				post‑release verification.
			</p>
			<div className="mt-8 flex gap-3">
				<Link href="/blog/ai-2026-safe-rollouts-in-production" className="inline-block bg-purple-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-purple-700">Safe Rollouts</Link>
				<Link href="/content/ai-2026-evaluation-runbook-starter-kit" className="inline-block border border-purple-600 text-purple-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-purple-50">Eval Runbook</Link>
			</div>
			<section className="prose prose-purple mt-10">
				<h2>Checklist highlights</h2>
				<ul>
					<li>Define guardrail and success metrics</li>
					<li>Gate changes with scenario suites</li>
					<li>Roll out progressively with backstops</li>
					<li>Verify and record evidence post‑release</li>
				</ul>
			</section>
		</main>
	);
}

