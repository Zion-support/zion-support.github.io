import React from 'react';
import Link from 'next/link';

export const metadata = {
	title: 'Trustworthy AI Governance Updates — October 2025',
	description: 'Latest governance patterns for agentic systems: policy packs, evaluation pipelines, and risk budgets that scale.',
	keywords: 'AI governance, risk budgets, evaluation pipelines, compliance',
};

export default function Page() {
	return (
		<main className="text-left">
			<header className="text-left">
				<div className="text-left">NEW — Oct 1, 2025</div>"
				<h1 className="text-left">Trustworthy AI Governance Updates</h1>"
				<p className="text-left">Operational guardrails for autonomous systems with measurable risk and continuous verification.</p>"
			</header>

			<section className="text-left">
				<p>
					Learn how to implement outcome-based risk budgets, graded evaluation pipelines, and signed policy packs that travel with models and agents across environments.
				</p>
				<ul>
					<li>Continuous verification with shadow traffic and canaries</li>
					<li>Scorecards for safety, privacy, and fairness</li>
					<li>Automated rollback and incident workflows</li>
				</ul>
			</section>

			<div className="text-left">
				<Link href="/blog" className="text-left">← Back to Blog</Link>"
			</div>
		</main>
	);
}

