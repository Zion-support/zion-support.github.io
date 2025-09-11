import React from 'react';
import Link from 'next/link';

export default function AIProductRoadmap2025Page() {
	return (
		<div className='min-h-screen bg-white'>
			<article className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<header className='mb-8'>
					<h1 className='text-4xl font-bold text-gray-900 mb-2'>AI Product Roadmap 2025: From MVP to Scale</h1>
					<p className='text-gray-600'>Published on 2025-09-11 · 9 min read · Category: Product Strategy</p>
				</header>
				<section className='prose prose-lg max-w-none'>
					<p>
						A practical roadmap to ship AI features reliably: align on outcomes, define guardrails,
						instrument for quality, and iterate with tight feedback loops.
					</p>
					<h2>Milestones</h2>
					<ul>
						<li>Discovery: user jobs, success metrics, risk map</li>
						<li>MVP: narrow scope, evals, trace capture</li>
						<li>Hardening: guardrails, budgets, observability</li>
						<li>Scale: performance, cost controls, change management</li>
					</ul>
					<h2>Operating Model</h2>
					<p>
						Establish an AI council, incident review, and a living playbook. Treat prompts, tools, and data
						contracts as versioned artifacts with CI.
					</p>
				</section>
				<footer className='mt-10'>
					<Link href='/blog' className='text-blue-600 font-semibold hover:underline'>← Back to Blog</Link>
				</footer>
			</article>
		</div>
	);
}

