import Link from 'next/link';

export default function BlogPost() {
	return (
		<div className='min-h-screen bg-white'>
			<section className='py-10 border-b border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50'>
				<div className='max-w-3xl mx-auto px-4'>
					<nav className='mb-3'>
						<Link href='/blog' className='text-blue-600 hover:underline'>← Back to Blog</Link>
					</nav>
					<h1 className='text-3xl md:text-4xl font-bold text-gray-900'>AI-Powered Customer Support: From FAQ Bots to Full Resolution</h1>
					<p className='mt-2 text-gray-600'>Published on Sep 11, 2025</p>
				</div>
			</section>
			<main className='py-10'>
				<article className='prose prose-blue max-w-3xl mx-auto px-4'>
					<p>
						Most teams start with a simple FAQ bot and stall. The path to real ROI is
						systematically moving from deflection to first-contact resolution with
						guardrailed agents, integrated workflows, and clear KPIs.
					</p>
					<h2>Roadmap to Resolution</h2>
					<ol>
						<li>Start with a unified knowledge base and retrieval-augmented responses.</li>
						<li>Add workflow actions (tickets, refunds, order status) with approval steps.</li>
						<li>Introduce evals, red-teaming, and escalation rules for safety.</li>
						<li>Track KPIs: CSAT, FCR, AHT, deflection, containment, and cost per ticket.</li>
						<li>Automate the long tail with templated tools and human-in-the-loop review.</li>
					</ol>
					<h2>What Good Looks Like</h2>
					<ul>
						<li>Sub-30s time-to-first-response across channels</li>
						<li>>20% reduction in handle time within 60 days</li>
						<li>Auditable decisions with structured logs</li>
					</ul>
					<p>
						We help teams implement safe, effective agent workflows that boost CSAT while
						cutting costs.
					</p>
				</article>
			</main>
		</div>
	);
}

