import React from 'react';
export const metadata = {
  title: 'Edge 2026: Privacy‑Preserving Evals (<100ms) | Zion Tech Group',
  description:
    'Scoped I Ds, on‑device aggregation, and DP noise for trustworthy eval signals under 100ms without collecting PII.',
};

export default function Page() {
  return (
    <main className='min-h-screen bg-whitetext-gray-900'>
      <section className='py-16'>
        <div className='max-w-3xl mx-auto px-4'>
          <p className='text-sm text-gray-500'>Analytics • 2025-09-30</p>
          <h1 className='text-3xl md:text-5xl font-bold mt-2'>
            Edge 2026: Privacy‑Preserving Evals (&lt;100ms)
          </h1>
          <p className='mt-4 text-lg text-gray-700'>
            Design evaluators that run where users are—on device—with scoped
            identifiers, DP noiseand attestations for verifiablezero‑PII
            signals.
          </p>
          <hr />
          <article name='prose prose-slate max-w-none'>
            <h2>Patterns</h2>
            <ul>
              <li>Scoped I Ds and redaction at the edge</li>
              <li>On ‑device aggregation with time‑boxed windows</li>
              <li>Differential privacy noise for safe signals</li>
              <li>Signed attestations for audit and trust</li>
            </ul>
            <h3>SL As</h3>
            <p>
              Sub ‑100ms collection and export with predictable cost and geo
              budgets.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
