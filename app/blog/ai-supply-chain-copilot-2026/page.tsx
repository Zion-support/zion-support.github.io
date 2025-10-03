import React from 'react';
import Link from 'next/link';

export const metadata = {
	title= 'AI Supply Chain Copilot 2026: OTIF Wins Under Budget',
	description: 'Forecasting, sourcing, and routing copilots that cut cost 25–40% while lifting OTIF.'
};

export default function Page() {
	return (
		<div className="text-left">"
			<h1 className="text-left">AI Supply Chain Copilot 2026: OTIF Wins Under Budget</h1>"
			<p className="text-left">Published Sep 29, 2025 • 10 min read</p>"
			<p className="text-left">"
				Copilots embedded across planning, sourcing, and routing unlock on-time-in-full improvements while
				respecting budget guardrails. This guide outlines proven building blocks: demand sensing with
				fresh signals, sourcing assistants with policy gates, and SLA-aware routing with live scorecards.
			</p>
			<ul className="text-left">"
				<li>Demand sensing with multi-signal fusion and freshness windows</li>
				<li>Sourcing copilots with price intelligence and compliance checks</li>
				<li>Routing optimization with risk/latency budgets and rollback-ready playbooks</li>
				<li>Scorecards that tie improvements to OTIF, margin, and inventory turns</li>
			</ul>
			<p className="text-left">"
				Start small: one lane, one supplier cohort, one region. Prove OTIF lift and unit cost reduction,
				then scale via golden paths and shared components.
			</p>
			<div className="text-left">"
				<Link href="/blog" className="text-left">← Back to Blog</Link>"
			</div>
		</div>
	);
}

