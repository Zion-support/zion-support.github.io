export const metadata = {
	title: 'Platform Engineering Scorecards 2026',
	description: 'Track SLIs → KPIs with budgets, canaries, and rollback for platform engineering.'
};

export default function ArticlePage() {
	return (
		<div className="prose prose-invert max-w-3xl mx-auto px-6 py-16">
			<h1>Platform Engineering Scorecards 2026</h1>
			<p>
				Wire service-level indicators to product KPIs with cost/error budgets, live canaries, and
				instant rollback. This blueprint makes platform reliability measurable and affordable.
			</p>
			<h2>Key Practices</h2>
			<ul>
				<li>Define SLIs and map them to business KPIs</li>
				<li>Introduce budgeted actions and automated rollback</li>
				<li>Use evals and traces to detect regressions pre-release</li>
			</ul>
		</div>
	);
}

