// @ts-nocheck
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Practical AI Agents for Small Businesses',
  description:
    'Lightweight, safe automations for support, sales outreach, and back-office tasks.',
};

export default function AIAgentsForSMBsPage() {
  return (
    <div className='min-h-screen bg-white'>
      <section className='py-12 border-b border-gray-200 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-900'>Practical AI Agents for Small Businesses</h1>
          <p className='mt-3 text-gray-600'>Deploy lightweight AI automations that save time and grow revenue—safely.</p>
        </div>
      </section>
      <section className='py-10'>
        <div className='prose prose-blue max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2>High-ROI Use Cases</h2>
          <ul>
            <li>Customer support triage and self-serve answers with human handoff</li>
            <li>Sales outreach agents that personalize emails and schedule meetings</li>
            <li>Back-office automations: invoice matching, FAQs, SOP drafting</li>
          </ul>
          <h2>Safety and Controls</h2>
          <ul>
            <li>Guardrails for data access, rate limits, and action whitelists</li>
            <li>Event logs, evaluation tasks, and rollback paths</li>
            <li>Scoped credentials and environment separation</li>
          </ul>
          <h2>Getting Started</h2>
          <ol>
            <li>Pick one workflow with measurable value and clear success criteria</li>
            <li>Integrate with your CRM/helpdesk and define monitored actions</li>
            <li>Run a two-week pilot and track time saved, quality and risk</li>
          </ol>
          <p>
            Want a tailored plan?{' '}
            <Link href='/contact' className='text-blue-600 font-semibold'>Talk to our experts</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}

