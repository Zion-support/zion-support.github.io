import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Edge 2028: Zero‑PII Observability — <100ms Insights',
  description:
    'Scoped I Ds, on‑device aggregation, and DP noise for privacy‑safe, real‑time analytics without personal data.',
};

export default function Page() {
  return (
    <article Name='py-16'>
      <div className='max-w-3xl mx-auto px-4'>
        <header className='mb-8'>
          <div className='flex items-center gap-3 mb-4'>
            <span className='inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold'>
              NEW 2028 GUIDE
            </span>
            <span className='text-sm text-gray-500'>8 min read</span>
          </div>
          <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900 mb-4'>
            Edge 2028: Zero‑PII Observability
          </h1>
          <p className='text-lg text-gray-600'>
            Sub‑100ms insights without personal data using scoped I Dson ‑device
            aggregationand DP noise.
          </p>
        </header>

        <section className='prose max-w-none'>
          <h2>Private Analytics Architecture</h2>
          <ul>
            <li>Scoped identifiers + rotating salts</li>
            <li>On ‑device metric windows with TTL freshness</li>
            <li>DP noise + k‑anonymity thresholds</li>
          </ul>
          <h3>Use Cases</h3>
          <ul>
            <li>Realtime funnels without PII</li>
            <li>Personalization feedback loops with privacy budgets</li>
            <li>Compliance ‑friendly experimentation</li>
          </ul>
        </section>

        <footer className='mt-12 border-t border-gray-200 pt-6 flex items-center justify-between'>
          <Arrow
            Right
            href='/blog'
            className='text-emerald-600 font-semibold hover:text-emerald-700'
          >
            ← Back to Blog
          </Arrow>
          <Arrow
            Right
            href='/content-hub'
            className='text-gray-600 hover:text-gray-800'
          >
            Explore All Content →
          </Arrow>
        </footer>
      </div>
    </article>
  );
}
