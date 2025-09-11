// @ts-nocheck
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Micro SaaS Distribution 2025: Repeatable Channels That Work',
  description:
    'A pragmatic playbook to get first 100–500 customers with efficient, compoundable channels.',
};

export default function MicroSaaSDistribution2025() {
  return (
    <div className='min-h-screen bg-white'>
      <section className='py-12 border-b border-gray-200 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-900'>Micro SaaS Distribution 2025</h1>
          <p className='mt-3 text-gray-600'>Low-drama, high-signal tactics to acquire and retain early users.</p>
        </div>
      </section>
      <section className='py-10'>
        <div className='prose prose-blue max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2>Channel Priorities</h2>
          <ul>
            <li>Bottom-up SEO with problem-led pages and strong intent keywords.</li>
            <li>Community-driven launches: niche forums, Discords, and newsletters.</li>
            <li>Integrations marketplace listings with tight onboarding.</li>
          </ul>
          <h2>Activation & Retention</h2>
          <ul>
            <li>Guided setup checklists; success in first session.</li>
            <li>Templates and playbooks embedded in-product.</li>
            <li>Lifecycle emails tied to job-to-be-done milestones.</li>
          </ul>
          <h2>Metrics That Matter</h2>
          <ul>
            <li>Time-to-first-value, weekly active teams, expansion by feature.</li>
            <li>Channel CAC payback, 8-week retention, conversion by segment.</li>
            <li>Support load per 100 users and self-serve resolution rate.</li>
          </ul>
          <p>
            Want help designing your channel mix?{' '}
            <Link href='/contact' className='text-blue-600 font-semibold'>We can help</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}

