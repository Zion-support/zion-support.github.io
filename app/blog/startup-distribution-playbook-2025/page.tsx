import React from 'react';
import { Link } from 'react-router-dom';

export const metadata = {
  title: 'Startup Distribution Playbook 2025 | Zion Tech Group',
  description: 'Repeatable distribution for AI startups: channels, motions, and metrics that compound.',
  keywords: 'startup distribution, GTM, growth, channels, PLG, sales-assisted'
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-fuchsia-900 to-purple-900 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <div className="inline-flex items-center bg-pink-500/20 text-pink-100 rounded-full px-4 py-1 text-sm">NEW • September 2025</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">Startup Distribution Playbook 2025</h1>
          <p className="mt-4 text-lg text-pink-100/90">A practical framework for channels, content, and conversions that scale.</p>
        </div>

        <div className="prose prose-invert prose-lg">
          <p>
            Great AI products fail without distribution. This playbook distills repeatable motions that
            compound: content engines, partner ecosystems, and product-led loops.
          </p>
          <h2>Channel Portfolio</h2>
          <ul>
            <li>Owned media: weekly expert content and demos</li>
            <li>Search and communities: programmatic SEO and credible participation</li>
            <li>Partners: co-selling and integrations that unlock segments</li>
          </ul>
          <h2>Conversion System</h2>
          <ul>
            <li>Clear value narrative and outcome-led pages</li>
            <li>Interactive tools and templates as lead magnets</li>
            <li>Sales-assisted PLG with in-product prompts</li>
          </ul>
          <p>
            Track weekly leading indicators—activated accounts, qualified signups, and partner-sourced pipeline—
            and iterate relentlessly.
          </p>
        </div>

        <div className="mt-10 flex gap-3">
          <Link href="/blog" className="bg-white text-rose-700 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Back to Blog</Link>
          <Link href="/resources" className="border-2 border-white text-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-rose-700 transition-colors">Download Resources</Link>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function StartupDistributionPlaybook2025Page() {
  return (
    <div className='min-h-screen bg-white'>
      <article className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <header className='mb-10'>
          <h1 className='text-4xl font-bold text-gray-900 mb-3'>
            Startup Distribution in 2025: A Practical Playbook
          </h1>
          <p className='text-gray-600'>Published: 2025-09-11 • 9 min read • Growth</p>
        </header>

        <p className='text-lg text-gray-700 mb-6'>
          Repeatable distribution wins companies. This playbook lists the highest-leverage
          channels, sequencing, and measurement to get from 0 → 500 customers efficiently.
        </p>

        <h2 className='text-2xl font-semibold text-gray-900 mt-10 mb-4'>Top Channels</h2>
        <ul className='list-disc pl-6 text-gray-700 space-y-2'>
          <li>SEO landing pages for jobs-to-be-done</li>
          <li>Partnerships with tool ecosystems</li>
          <li>Community-led growth and creator collabs</li>
          <li>Outbound with value-led offers, not demos</li>
        </ul>

        <h2 className='text-2xl font-semibold text-gray-900 mt-10 mb-4'>Measurement</h2>
        <p className='text-gray-700 mb-4'>
          Track channel-specific CAC, time-to-first-value, and activation rate per persona. Use
          cohort views, not vanity totals.
        </p>

        <footer className='mt-12 pt-6 border-t border-gray-200 text-gray-600'>
          Want a GTM assessment and plan? Email kleber@ziontechgroup.com.
        </footer>
      </article>
    </div>
  );
}

