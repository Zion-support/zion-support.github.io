import React from 'react';

export default function CustomerStoriesAutomationROI() {
  return (
    <div className='min-h-screen bg-white'>
      <article className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <header className='mb-8'>
          <p className='text-sm text-gray-500'>2025-09-11 • 7 min read • Case Studies</p>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-900'>Customer Stories: Real ROI from AI Automation</h1>
          <p className='mt-3 text-gray-600'>Three concise case studies with measurable business outcomes.</p>
        </header>
        
        <section className='prose prose-blue max-w-none'>
          <h2>Support Automation — SaaS</h2>
          <p>Deflection to resolution: 62% of tickets resolved automatically within policy and budget limits.</p>
          <ul>
            <li>MTTR: 4 hours → 3 minutes</li>
            <li>CSAT: +28 points</li>
            <li>Annual savings: $480K</li>
          </ul>

          <h2>Finance Reconciliation — Retail</h2>
          <p>Automated statement matching with human-in-the-loop for exceptions.</p>
          <ul>
            <li>Accuracy: 99.4%</li>
            <li>Throughput: 12×</li>
            <li>Payback: 5 months</li>
          </ul>

          <h2>Operations Scheduling — Manufacturing</h2>
          <p>Agentic workflow with approvals and budget caps.</p>
          <ul>
            <li>Overtime: −31%</li>
            <li>Utilization: +18%</li>
            <li>Quality incidents: −22%</li>
          </ul>
        </section>
      </article>
    </div>
  );
}

