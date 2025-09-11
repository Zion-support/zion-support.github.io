// @ts-nocheck
import React from 'react';
import Link from 'next/link';

export const metadata = {
	title: 'GenAI in Production: SLAs, Costs, and Control in 2025 | Zion Tech Group',
	description:
		'What changes when GenAI moves from pilots to P&L-backed products: SLOs, guardrails, and cost controls that stick.',
};

export default function GenAIInProductionPage() {
	return (
		<div className='min-h-screen'>
			<article className='prose prose-lg max-w-3xl mx-auto'>
				<header>
					<h1>GenAI in Production: SLAs, Costs, and Control in 2025</h1>
					<p className='text-gray-500'>September 11, 2025 • GenAI • SLOs • Cost</p>
				</header>

				<p>
					Pilots tolerate variance—products cannot. When GenAI features are tied to revenue and
					SLOs, you need predictable latency, quality, and cost. This guide covers request shaping,
					caching tiers, eval-driven release gates, fallback orchestration, and budget enforcement.
				</p>

				<h2>Operational Guardrails</h2>
				<ul>
					<li>Latency SLOs per user tier with timeouts and fallbacks</li>
					<li>Cost ceilings with model-tier routing and caching</li>
					<li>Continuous evals with golden tasks and drift detection</li>
					<li>Safe rollout: canaries, traffic mirrors, auto-rollback</li>
				</ul>

				<h2>Architecture Basics</h2>
				<p>
					Introduce a policy gateway for safety checks, a retrieval layer with citations, and
					observability that ties prompts to outcomes and costs. Track per-feature budgets and
					alert on anomalies.
				</p>

				<div className='mt-10 p-6 border rounded-xl bg-blue-50'>
					<h3>Need help hardening GenAI for production?</h3>
					<p>We build eval-first GenAI platforms with cost and quality guardrails baked in.</p>
					<div className='mt-4 flex gap-4'>
						<Link href='/contact' className='bg-blue-600 text-white px-5 py-2 rounded-lg'>
							Talk to us
						</Link>
						<Link href='mailto:kleber@ziontechgroup.com' className='px-5 py-2 rounded-lg border border-blue-600 text-blue-700'>
							Email
						</Link>
					</div>
				</div>
			</article>
		</div>
	);
}

