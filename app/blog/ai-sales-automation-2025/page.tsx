import React from 'react';
import Link from 'next/link';

export default function AISalesAutomation2025Page() {
	return (
		<div className='min-h-screen bg-white'>
			{/* Hero Section */}
			<section className='py-20 bg-gradient-to-br from-blue-50 to-indigo-100'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<div className='inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4'>
							<span>📈</span>
							Sales & Growth
						</div>
						<h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
							AI Sales Automation 2025: From First Touch to Closed Won
						</h1>
						<p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
							A practical blueprint to automate prospecting, qualification, follow-ups, and pipeline hygiene—without hurting deliverability or brand.
						</p>
						<div className='flex items-center justify-center gap-6 text-sm text-gray-500'>
							<span>📅 September 12, 2025</span>
							<span>⏱️ 10 min read</span>
							<span>🧭 Playbooks & Templates</span>
						</div>
					</div>
				</div>
			</section>

			{/* Article Content */}
			<article className='py-16'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='prose prose-lg max-w-none'>
						<h2 className='text-3xl font-bold text-gray-900 mb-6'>Why Sales Automation Now</h2>
						<p className='text-lg text-gray-700 mb-6'>
							Teams that deploy smart automation are seeing 2–4x pipeline coverage with the same headcount, while keeping reply rates healthy through better targeting and relevance.
						</p>

						<div className='bg-blue-50 border-l-4 border-blue-500 p-6 mb-8'>
							<h3 className='text-xl font-semibold text-blue-900 mb-3'>Key Outcomes</h3>
							<ul className='space-y-2 text-blue-800'>
								<li>• +35% meetings booked from intent-driven sequencing</li>
								<li>• 20–40% SDR productivity lift via research copilots</li>
								<li>• 15% shorter sales cycles with AI-assisted follow-ups</li>
							</ul>
						</div>

						<h2 className='text-3xl font-bold text-gray-900 mb-6'>System Architecture</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
							<div className='bg-white border border-gray-200 rounded-lg p-6'>
								<h4 className='text-lg font-semibold text-gray-800 mb-3'>Core Components</h4>
								<ul className='space-y-2 text-gray-700'>
									<li>• Enrichment & ICP filters</li>
									<li>• Sequencer with throttling & warm-up</li>
									<li>• Reply classifier & routing</li>
									<li>• CRM sync & dedupe</li>
								</ul>
							</div>
							<div className='bg-white border border-gray-200 rounded-lg p-6'>
								<h4 className='text-lg font-semibold text-gray-800 mb-3'>Safeguards</h4>
								<ul className='space-y-2 text-gray-700'>
									<li>• Domain and inbox health checks</li>
									<li>• Do-not-contact lists and frequency caps</li>
									<li>• Human-in-the-loop for sensitive segments</li>
								</ul>
							</div>
						</div>

						<h2 className='text-3xl font-bold text-gray-900 mb-6'>Tactical Playbooks</h2>
						<div className='space-y-6 mb-8'>
							<div className='flex gap-4'>
								<div className='flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold'>1</div>
								<div>
									<h3 className='text-xl font-semibold text-gray-800 mb-2'>Intent-Led Prospecting</h3>
									<p className='text-gray-700'>Combine firmographics with recent triggers (hiring, tech installs, funding) for hyper-relevant outreach.</p>
								</div>
							</div>
							<div className='flex gap-4'>
								<div className='flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold'>2</div>
								<div>
									<h3 className='text-xl font-semibold text-gray-800 mb-2'>AI Research Copilots</h3>
									<p className='text-gray-700'>Summarize 10-Ks, blogs, podcasts, and social to craft targeted talking points in seconds.</p>
								</div>
							</div>
							<div className='flex gap-4'>
								<div className='flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold'>3</div>
								<div>
									<h3 className='text-xl font-semibold text-gray-800 mb-2'>Follow-up Automation</h3>
									<p className='text-gray-700'>Route replies by intent (meeting request, objection, referral) and draft next-best-message.</p>
								</div>
							</div>
						</div>

						<h2 className='text-3xl font-bold text-gray-900 mb-6'>Get the Templates</h2>
						<p className='text-lg text-gray-700 mb-6'>Download ready-to-use sequencing templates, SDR research prompts, and objection handlers.</p>
						<div className='bg-blue-600 text-white p-8 rounded-lg text-center'>
							<h3 className='text-2xl font-bold mb-4'>Accelerate Your Pipeline</h3>
							<p className='text-lg mb-6 opacity-90'>We can implement this end-to-end or augment your team.</p>
							<div className='flex flex-col sm:flex-row gap-4 justify-center'>
								<Link href='/contact' className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
									Book a Strategy Call
								</Link>
								<Link href='/services/ai-automation' className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'>
									Learn More
								</Link>
							</div>
						</div>
					</div>
				</div>
			</article>

			{/* Related */}
			<section className='py-16 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>Related Articles</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<Link href='/blog/startup-sales-playbook-2025' className='group'>
							<article className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
								<h3 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
									Startup Sales Playbook 2025
								</h3>
								<p className='text-gray-600 mb-4'>Prospecting, qualification, and deal mechanics that scale.</p>
								<span className='text-blue-600 font-medium group-hover:underline'>Read More →</span>
							</article>
						</Link>
						<Link href='/blog/ai-go-to-market-2025' className='group'>
							<article className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
								<h3 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
									AI Go-To-Market 2025
								</h3>
								<p className='text-gray-600 mb-4'>Positioning, pricing, and distribution strategies that work.</p>
								<span className='text-blue-600 font-medium group-hover:underline'>Read More →</span>
							</article>
						</Link>
						<Link href='/blog/ai-productivity-automation-2025' className='group'>
							<article className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
								<h3 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
									AI Productivity Automation 2025
								</h3>
								<p className='text-gray-600 mb-4'>Automate non-selling work to reclaim selling time.</p>
								<span className='text-blue-600 font-medium group-hover:underline'>Read More →</span>
							</article>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

// @ts-nocheck
import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Sales Automation 2025: Pipeline Growth With Guardrails
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Practical systems to automate top-of-funnel research, outreach personalization, and routing—without
            sacrificing brand quality or compliance.
          </p>
          <div className="text-sm text-gray-500 mb-10">Published: 2025-09-11 · 8 min read · Category: Revenue Ops</div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>What To Automate First</h2>
          <ul>
            <li>Account research summaries with retrieval-augmented generation</li>
            <li>First-touch personalization based on firmographics and recent signals</li>
            <li>Lead qualification workflows with human approval gates</li>
          </ul>
          <h2>Guardrails That Matter</h2>
          <ul>
            <li>Do-not-contact and compliance checks before send</li>
            <li>Per-campaign budget ceilings and success metrics</li>
            <li>Continuous evals for tone, accuracy, and deliverability</li>
          </ul>
          <h2>Measuring Impact</h2>
          <p>
            Track meetings booked per 100 contacts, response quality, and cost per qualified opportunity. Iterate weekly
            with small experiments that compound.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
              Explore an AI-assisted sales pilot →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

