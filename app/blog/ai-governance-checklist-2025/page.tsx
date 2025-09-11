// @ts-nocheck
import React from 'react';
import Link from 'next/link';

export const metadata = {
	title: 'AI Governance Checklist 2025: Operationalize Policy With Evals',
	description:
		'A concise, actionable checklist to stand up pragmatic AI governance that accelerates delivery.',
};

export default function AIGovernanceChecklist2025Page() {
	return (
		<div className='min-h-screen bg-white'>
			<section className='py-12 border-b border-gray-200 bg-gray-50'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<h1 className='text-3xl md:text-4xl font-bold text-gray-900'>AI Governance Checklist 2025</h1>
					<p className='mt-3 text-gray-600'>Turn policy into day-to-day decisions with risk tiering and evals.</p>
				</div>
			</section>
			<section className='py-10'>
				<div className='prose prose-blue max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<h2>Core Controls</h2>
					<ul>
						<li>Risk tiering by use case; approvals aligned to impact</li>
						<li>Data policy: PII handling, retention, and provenance</li>
						<li>Model policy: allowed providers, red teaming, jailbreak defense</li>
						<li>Evals: quality, safety, bias, and regression thresholds</li>
					</ul>
					<h2>Operating Model</h2>
					<ul>
						<li>RACI for product, security, and data owners</li>
						<li>Release gates tied to evals and spend budgets</li>
						<li>Incident response runbooks and postmortems</li>
					</ul>
					<p>
						Need a governance starter kit?{' '}
						<Link href='/contact' className='text-blue-600 font-semibold'>We can help</Link>.
					</p>
				</div>
			</section>
		</div>
	);
}

