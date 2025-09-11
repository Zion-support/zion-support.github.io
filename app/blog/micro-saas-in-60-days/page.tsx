import Link from 'next/link';

export default function BlogPost() {
	return (
		<div className='min-h-screen bg-white'>
			<section className='py-10 border-b border-gray-200 bg-gradient-to-br from-amber-50 to-rose-50'>
				<div className='max-w-3xl mx-auto px-4'>
					<nav className='mb-3'>
						<Link href='/blog' className='text-blue-600 hover:underline'>← Back to Blog</Link>
					</nav>
					<h1 className='text-3xl md:text-4xl font-bold text-gray-900'>Micro SaaS in 60 Days: A Lean Delivery Blueprint</h1>
					<p className='mt-2 text-gray-600'>Published on Sep 11, 2025</p>
				</div>
			</section>
			<main className='py-10'>
				<article className='prose prose-blue max-w-3xl mx-auto px-4'>
					<h2>Scope Ruthlessly</h2>
					<p>Pick a single painful job-to-be-done. Define a 2-week MVP that solves it end-to-end.</p>
					<h2>Build the Essentials</h2>
					<ul>
						<li>Auth, billing, metering</li>
						<li>Onboarding, empty states, and actionable docs</li>
						<li>Usage analytics and feedback loop</li>
					</ul>
					<h2>Launch, Learn, Iterate</h2>
					<p>Ship to a narrow audience, measure activation/retention, and iterate weekly.</p>
					<p>We’ve productized this playbook—ask us about fixed-fee builds.</p>
				</article>
			</main>
		</div>
	);
}

