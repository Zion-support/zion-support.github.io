import Link from 'next/link'

export const metadata = {
	title: 'AI 2026: Agent Safety Evidence Hub',
	description: 'Centralize evaluations, scenarios, metrics, and evidence for production agent safety.',
}

export default function Page() {
	return (
		<main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<header className="mb-10">
				<div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">New • September 2025</div>
				<h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">AI 2026: Agent Safety Evidence Hub</h1>
				<p className="mt-3 text-lg text-gray-600">A single source of truth for evaluations, scenarios, metrics, and audit-ready evidence across the agent lifecycle.</p>
				<div className="mt-6 flex flex-wrap gap-3">
					<Link href="/blog/ai-2026-agent-safety-certification" className="inline-block bg-purple-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-purple-700">Safety Certification</Link>
					<Link href="/content/ai-2026-evaluation-hub" className="inline-block border border-purple-600 text-purple-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-purple-50">Evaluation Hub</Link>
				</div>
			</header>

			<section className="prose prose-lg max-w-none">
				<h2>Why an Evidence Hub?</h2>
				<p>Enterprises deploying autonomous agents need a durable, queryable record of safety posture: which scenarios exist, what metrics apply, latest scores, trend lines, and links to raw artifacts. The Evidence Hub centralizes this, making audits and change approvals faster and safer.</p>

				<h3>Core Capabilities</h3>
				<ul>
					<li>Scenario catalog with versions, owners, and pass criteria</li>
					<li>Metrics registry with definitions, thresholds, and tags</li>
					<li>Run results with artifacts: traces, logs, datasets, model cards</li>
					<li>Policy-as-code gates mapped to risk tiers and environments</li>
					<li>Change packages with diffs, approvals, and rollback metadata</li>
				</ul>

				<h3>Lifecycle Integration</h3>
				<ol>
					<li>Design: propose scenarios and metrics, review via RFCs</li>
					<li>Build: wire harnesses, seed datasets, and baseline runs</li>
					<li>Ship: enforce gates in CI/CD with evidence links</li>
					<li>Operate: continuous evals, drift detection, and SLO tracking</li>
					<li>Audit: produce signed reports with reproducible artifacts</li>
				</ol>

				<h3>Getting Started</h3>
				<p>Adopt the hub incrementally. Start by registering top risk scenarios and wiring runs from staging. Expand to production change approvals once baselines stabilize.</p>
			</section>
		</main>
	)
}

