import React from 'react';

export default function AgentOpsObservability2026() {
	return (
		<div className="text-left">
			<main className="text-left">
				<h1 className="text-left">Agent Ops Observability 2026</h1>
				<p className="text-left">
					Metrics, traces, evals, and guardrails for reliable autonomous workflows. Instrument end-to-end
					value streams to tie model spend to business outcomes.
				</p>
				<section className="text-left">
					<h2 className="text-left">Signals to Capture</h2>
					<ul className="text-left">
						<li>Latency percentiles, token usage, cache hit rates</li>
						<li>Tool success/failure rates and retries</li>
						<li>Policy violations, overrides, and human-in-the-loop approvals</li>
					</ul>
				</section>
				<section className="text-left">
					<h2 className="text-left">Dashboards</h2>
					<p className="text-left">
						Create layered dashboards: SLOs at the top, then agent/task views, and tool-level drilldowns
						with correlation to incidents and business KPIs.
					</p>
				</section>
				<section className="text-left">
					<h2 className="text-left">Governance</h2>
					<p className="text-left">
						Use eval scorecards and policy tests in CI/CD and production canaries to prevent regressions.
						Automate rollbacks when SLOs or policy thresholds are breached.
					</p>
				</section>
			</main>
		</div>
	);
}

