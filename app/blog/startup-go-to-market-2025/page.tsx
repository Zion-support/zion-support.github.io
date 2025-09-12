import React from 'react';
import Link from 'next/link';

export default function StartupGTM2025Page() {
	return (
		<div className='min-h-screen bg-white'>
			<article className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<header className='mb-8'>
					<h1 className='text-4xl font-bold text-gray-900 mb-2'>Startup Go-To-Market in 2025: From 0 to 500 Customers</h1>
					<p className='text-gray-600'>Published on 2025-09-11 · 8 min read · Category: Startup Strategy</p>
				</header>
				<section className='prose prose-lg max-w-none'>
					<p>
						A simple, repeatable approach to early traction: define a narrow ICP, craft an offer,
						and prioritize 3 scalable channels with daily execution.
					</p>
					<h2>Core Playbook</h2>
					<ul>
						<li>ICP × painful problem × differentiated proof</li>
						<li>Offer: promise, proof, price, process</li>
						<li>Channels: partner-led, content, outbound</li>
					</ul>
					<h2>Metrics</h2>
					<p>Weekly pipeline, win rate, payback, and activation. Review, refine, repeat.</p>
				</section>
				<footer className='mt-10'>
					<Link href='/blog' className='text-blue-600 font-semibold hover:underline'>← Back to Blog</Link>
				</footer>
			</article>
		</div>
	);
}

