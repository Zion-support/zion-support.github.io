import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='min-h-screen bg-white'>
      <article className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <header className='mb-8'>
          <p className='text-sm text-gray-500'>2025-09-11 • 7 min read • Growth</p>
          <h1 className='text-3xl md:text-5xl font-bold text-gray-900 mb-4'>Startup Pricing Strategy 2025: From Free to $1M ARR</h1>
          <p className='text-lg text-gray-700'>Practical steps to validate willingness to pay, package value, and scale pricing with confidence.</p>
        </header>

        <section className='prose prose-blue max-w-none'>
          <h2>Foundations</h2>
          <ul>
            <li>Price the outcome, not the feature list.</li>
            <li>Anchor on alternatives and ROI, not cost-plus.</li>
            <li>Keep plans simple; upgrade path obvious.</li>
          </ul>

          <h2>Process</h2>
          <ol>
            <li>Interview 10 customers on pains and alternatives.</li>
            <li>Run Van Westendorp for willingness to pay bands.</li>
            <li>Ship 3-plan pricing with usage guardrails and clear limits.</li>
            <li>Review win/loss quarterly; adjust tiers and value metrics.</li>
          </ol>

          <h2>Tactics That Work</h2>
          <ul>
            <li>Annual discounts with onboarding packages.</li>
            <li>Usage-based add-ons for power users.</li>
            <li>Founder calls for enterprise upgrades.</li>
          </ul>

          <div className='mt-10 p-6 bg-green-50 border border-green-200 rounded-lg'>
            <h3 className='text-xl font-semibold text-green-900 mb-2'>Want a Pricing Review?</h3>
            <p className='text-green-800'>We help teams run pricing research, package value, and set up analytics to measure impact.</p>
            <div className='mt-4 flex gap-3'>
              <Link href='/contact' className='bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition-colors'>Talk to Us</Link>
              <Link href='/services/micro-saas' className='border border-green-600 text-green-600 px-4 py-2 rounded-md font-semibold hover:bg-green-50 transition-colors'>Micro SaaS</Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

