import React from 'react';
import Link from 'next/link';

export const metadata = {
	title: 'AI 2026: Agent Readiness Scorecards — Practical Guide',
	description:
		'A step-by-step guide to design, implement, and operate agent readiness scorecards for safe, reliable, and cost-aware releases.',
	keywords: [
		'agent readiness',
		'evaluation gates',
		'release scorecards',
		'AI 2026',
		'autonomous agents',
		'policy-as-code',
	],
};

export default function AgentReadinessScorecardsPage() {
	return (
		<main className="min-h-screen bg-white">
			<section className="bg-gradient-to-r from-violet-50 to-indigo-50 border-b border-indigo-100">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
					<p className="text-sm font-semibold text-indigo-700">Guide • AI 2026</p>
					<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
						Agent Readiness Scorecards — Practical Guide
					</h1>
					<p className="text-gray-700 mt-4">
						Use readiness scorecards to gate releases, reduce risk, and keep costs
						predictable. This guide shows metrics to track, how to wire eval gates,
						and how to operationalize evidence for audit‑ready releases.
					</p>
					<div className="mt-6 flex gap-3">
						<Link
							href="/content/ai-2026-release-scorecards-starter-kit"
							className="inline-block bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-indigo-700"
						>
							Starter Kit
						</Link>
						<Link
							href="/blog/ai-2026-release-scorecards"
							className="inline-block border border-indigo-600 text-indigo-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-indigo-50"
						>
							Related: Release Scorecards
						</Link>
					</div>
				</div>
			</section>

			<section className="py-12">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-indigo">
					<h2>Why readiness scorecards</h2>
					<p>
						Readiness scorecards give a clear, auditable signal of whether an agent
						change is safe to ship. They pull from offline evaluations, staged
						scenario suites, canary metrics, and runtime guardrail signals to form a
						single go/no‑go decision.
					</p>
					<h3>Core dimensions</h3>
					<ul>
						<li>Safety and policy conformance</li>
						<li>Quality and task success under realistic scenarios</li>
						<li>Reliability and SLO adherence</li>
						<li>Cost efficiency and latency targets</li>
					</ul>
					<h3>Implementation checklist</h3>
					<ol>
						<li>Define metrics and thresholds with owners.</li>
						<li>Instrument evaluation gates across the lifecycle.</li>
						<li>Automate evidence capture in a central hub.</li>
						<li>Enforce policy‑as‑code for approvals and rollbacks.</li>
					</ol>
				</div>
			</section>
		</main>
	);
}