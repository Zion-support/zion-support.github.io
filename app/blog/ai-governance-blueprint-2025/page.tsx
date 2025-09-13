import React from 'react';

export default function AIGovernanceBlueprint2025Page() {
  return (
    <div className='min-h-screen bg-white'>
      <article className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <header className='mb-10'>
          <h1 className='text-4xl font-bold text-gray-900 mb-3'>
            AI Governance Blueprint 2025: Controls that Actually Work
          </h1>
          <p className='text-gray-600'>Published: 2025-09-11 • 10 min read • Governance</p>
        </header>

        <p className='text-lg text-gray-700 mb-6'>
          A pragmatic blueprint for governing AI systems in production: policy, process, and
          technical controls that reduce real risk without blocking the business.
        </p>

        <h2 className='text-2xl font-semibold text-gray-900 mt-10 mb-4'>Core Controls</h2>
        <ul className='list-disc pl-6 text-gray-700 space-y-2'>
          <li>Data classification and retention by purpose</li>
          <li>Model change management with eval gates</li>
          <li>Human-in-the-loop approvals for high-risk tasks</li>
          <li>Observability for prompts, tools, and outcomes</li>
        </ul>

        <h2 className='text-2xl font-semibold text-gray-900 mt-10 mb-4'>Operating Model</h2>
        <p className='text-gray-700 mb-4'>
          Create an AI Risk Council, define RACI, and adopt product-style roadmaps for governance
          backlog. Tie controls to SLAs and business risks.
        </p>

        <footer className='mt-12 pt-6 border-t border-gray-200 text-gray-600'>
          Need a governance framework? Contact kleber@ziontechgroup.com.
        </footer>
      </article>
    </div>
  );
}

