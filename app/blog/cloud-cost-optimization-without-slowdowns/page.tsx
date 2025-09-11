import Link from 'next/link';

export default function BlogPost() {
	return (
		<div className='min-h-screen bg-white'>
			<section className='py-10 border-b border-gray-200 bg-gradient-to-br from-emerald-50 to-teal-50'>
				<div className='max-w-3xl mx-auto px-4'>
					<nav className='mb-3'>
						<Link href='/blog' className='text-blue-600 hover:underline'>← Back to Blog</Link>
					</nav>
					<h1 className='text-3xl md:text-4xl font-bold text-gray-900'>Cloud Cost Optimization That Doesn’t Hurt Velocity</h1>
					<p className='mt-2 text-gray-600'>Published on Sep 11, 2025</p>
				</div>
			</section>
			<main className='py-10'>
				<article className='prose prose-blue max-w-3xl mx-auto px-4'>
					<h2>Start with Visibility</h2>
					<p>Tagging, budgets, and per-service dashboards create the foundation for control.</p>
					<h2>Cut Waste First</h2>
					<ul>
						<li>Right-size instances and autoscaling policies</li>
						<li>Shut off idle workloads and lower dev/test costs</li>
						<li>Tier storage and cache hot paths</li>
					</ul>
					<h2>Optimize with Guardrails</h2>
					<p>FinOps guardrails and golden paths keep teams shipping while costs stay predictable.</p>
					<p>We help orgs cut 25–45% within 90 days without slowing roadmaps.</p>
				</article>
			</main>
		</div>
	);
}

