import React from 'react';

export default function AgentOpsObservability2026() {
	return (
		<div className="min-h-screen bg-slate-950 text-white">
			<main className="max-w-3xl mx-auto px-6 py-16">
				<h1 className="text-4xl font-extrabold mb-4">Agent Ops Observability 2026</h1>
				<p className="text-white/70 mb-8">
					Metrics, traces, evals, and guardrails for reliable autonomous workflows. Instrument end-to-end
					value streams to tie model spend to business outcomes.
				</p>
				<section className="space-y-6">
					<h2 className="text-2xl font-bold">Signals to Capture</h2>
					<ul className="list-disc pl-6 space-y-2 text-white/90">
						<li>Latency percentiles, token usage, cache hit rates</li>
						<li>Tool success/failure rates and retries</li>
						<li>Policy violations, overrides, and human-in-the-loop approvals</li>
					</ul>
				</section>
				<section className="space-y-6 mt-8">
					<h2 className="text-2xl font-bold">Dashboards</h2>
					<p className="text-white/80">
						Create layered dashboards: SLOs at the top, then agent/task views, and tool-level drilldowns
						with correlation to incidents and business KPIs.
					</p>
				</section>
				<section className="space-y-6 mt-8">
					<h2 className="text-2xl font-bold">Governance</h2>
					<p className="text-white/80">
						Use eval scorecards and policy tests in CI/CD and production canaries to prevent regressions.
						Automate rollbacks when SLOs or policy thresholds are breached.
					</p>
				</section>
			</main>
		</div>
	);
}

