// @ts-nocheck
import React from 'react';
import Link from 'next/link';

export const metadata = {
	title: 'AI Copilots for Engineering Teams',
	description:
		'How to deploy secure, repo-aware copilots that speed reviews and cut toil.',
};

export default function AICopilotsForEngineeringPage() {
	return (
		<div className='min-h-screen bg-white'>
			<section className='py-12 border-b border-gray-200 bg-gray-50'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<h1 className='text-3xl md:text-4xl font-bold text-gray-900'>AI Copilots for Engineering Teams</h1>
					<p className='mt-3 text-gray-600'>Ship faster with secure, repo-aware copilots that improve code quality.</p>
				</div>
			</section>
			<section className='py-10'>
				<div className='prose prose-blue max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<h2>Key Capabilities</h2>
					<ul>
						<li>Context-aware suggestions from code, tests, and docs</li>
						<li>Policy controls for secrets, licenses, and PII</li>
						<li>Inline evals and review bots to enforce standards</li>
					</ul>
					<h2>Rollout Plan</h2>
					<ul>
						<li>Pilot with a high-ROI team; measure PR lead time and defects</li>
						<li>Harden SSO, logging, and audit trails</li>
						<li>Scale to more repos with budget guardrails</li>
					</ul>
					<p>
						Interested in a secure rollout?{' '}
						<Link href='/contact' className='text-blue-600 font-semibold'>Talk to our experts</Link>.
					</p>
				</div>
			</section>
		</div>
	);
}

