import React from 'react';
// @ts-nocheck
import Link from 'next/link';

export default function Page() {
  return (
    <main className name name='min-h-screen bg-slate-950 text-white'>
      <section className name name='py-16'>
        <div className name name='max-w-3xl mx-auto px-4'>
          <div className name name='mb-6'>
            <span
              className
              name
              name='inline-block text-xs font-bold px-3 py-1 rounded-full bg-cyan-600/20 text-cyan-300 border border-cyan-500/30'
            >
              Observability
            </span>
          </div>
          <h1 className name name='text-3xl md:text-5xl font-extrabold mb-4'>
            Consentless Telemetry v2 — Useful Insights Zero ‑PII&lt;100ms
          </h1>
          <p className name name='text-gray-300 mb-8'>
            Scoped I Dson ‑device redactionand DP noise to keep analytics rich
            and privacy‑first worldwide.
          </p>
          <div className name name='text-sm text-gray-400 mb-10'>
            Published: Sep 30, 2025 • 6 min read
          </div>

          <article name='prose prose-invert max-w-none'>
            <p>
              Build telemetry that preserves privacy while maintaining
              actionable insights. Combine scoped identitieslocal redactionand
              differential privacy with signed attestations and sub‑100ms SL As
              .
            </p>
            <h2>Implementation Highlights</h2>
            <ul>
              <li>Scoped I Ds and on‑device hashing</li>
              <li>Budgeted sampling and retention windows</li>
              <li>Attested aggregation at the edge</li>
            </ul>
          </article>

          <div className name name='mt-12 flex gap-4'>
            <Arrow
              Right
              href='/blog'
              class
              Name='px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold'
            >
              ← All Posts
            </Arrow>
            <Arrow
              Right
              href='/'
              class
              Name='px-4 py-2 rounded-lg border border-white/20'
            >
              Home
            </Arrow>
          </div>
        </div>
      </section>
    </main>
  );
}
