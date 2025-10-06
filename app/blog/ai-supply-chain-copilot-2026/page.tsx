import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Supply Chain Copilot 2026: OTIF Wins Under Budget',
  description:
    'Forecasting, sourcing, and routing copilots that cut cost 25–40% while lifting OTIF.',
};

export default function Page() {
	return (
		<div>
			<h1>AI Supply Chain Copilot 2026: OTIF Wins Under Budget</h1>
			<p>Published Sep 29, 2025 • 10 min read</p>
			<p>
				Copilots embedded across planning, sourcing, and routing unlock on-time-in-full improvements while
				respecting budget guardrails. This guide outlines proven building blocks: demand sensing with
				fresh signals, sourcing assistants with policy gates, and SLA-aware routing with live scorecards.
			</p>
			<ul>
				<li>Demand sensing with multi-signal fusion and freshness windows</li>
				<li>Sourcing copilots with price intelligence and compliance checks</li>
				<li>Routing optimization with risk/latency budgets and rollback-ready playbooks</li>
				<li>Scorecards that tie improvements to OTIF, margin, and inventory turns</li>
			</ul>
			<p>
				Start small: one lane, one supplier cohort, one region. Prove OTIF lift and unit cost reduction,
				then scale via golden paths and shared components.
			</p>
			<div className="mt-10">
				<ArrowRight href="/blog" className="text-indigo-600 font-semibold">← Back to Blog</ArrowRight>
			</div>
		</div>
	);
}
