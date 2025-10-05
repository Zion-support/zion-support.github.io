export const metadata = {
	title: 'GenAI Quality Tiers v3 — Stable UX with 50% Savings',
  description:
		'Route by intent to economy vs quality tiers, backed by semantic caches and KPI-linked scorecards for safe savings.'
};

export default function Page() {
	return (
		<div>
			<div>
				<div>GenAI • 8 min read • 2025-10-01</div>
				<h1>GenAI Quality Tiers v3</h1>
				<p>
					Intent-aware tier routing with semantic caches and guardrails delivers 30–50% cost reduction without
					harming perceived quality.
				</p>

				<div>
					<h2>Key Ideas</h2>
					<ul>
						<li>Route low-risk intents to economy tier, high-risk to quality tier.</li>
						<li>Back responses with semantic cache + KV store; TTL by intent.</li>
						<li>Wire eval scorecards to KPIs; fail closed with attested rollback.</li>
						<li>Warm pools and prefetch for bursty traffic while meeting SLOs.</li>
					</ul>

					<h2>Blueprint</h2>
					<p>
						Attach a decision function per request type: cache → economy → quality. Record cost and quality metrics
						in traces. Block rollouts if scorecards dip below thresholds.
					</p>
				</div>

				<div>
					<a href="/blog" className="text-cyan-300 hover:underline">← Back to Blog</a>
				</div>
			</div>
		</div>
	);
}

