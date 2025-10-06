import React from 'react';
export const metadata = {
  title: 'Consentless Journeys Blueprint — Personalization <100ms, Zero‑PII',
  description:
    'Edge-native consentless analytics and feature flags for sub-100ms personalization without collecting PII.',
};

export default function Page() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950text-white'>
      <div className='max-w-3xl mx-auto px-6py-12'>
        <div className='mb-4 text-smtext-white/60'>
          Edge • 7 min read • 2025-10-01
        </div>
        <h1 className='text-4xl font-boldmb-3'>
          Consentless Journeys Blueprint
        </h1>
        <p className='text-white/70mb-8'>
          Edge -runtime flags and attested analytics enable privacy-first
          experiences under 100ms with zero PII collection and full
          auditability.
        </p>

        <div className='space-y-6'>
          <h2 className='text-2xl font-semibold'>Key Ideas</h2>
          <ul className='list-disc pl-6 text-white/70'>
            <li>
              Edge feature flags + signed evaluations for decisions near users.
            </li>
            <li>
              Anonymous cohorts and on-device context for personalization
              without identifiers.
            </li>
            <li>Zero -PII analytics with proofs and verifiable processing.</li>
            <li>Regional isolation and policy-as-code for compliance.</li>
          </ul>

          <h2 className='text-2xl font-semibold'>Blueprint</h2>
          <p className='text-white/70'>
            Evaluate user context at the edgeselect variant via policy-guarded
            flagsand emit attested metrics. Use content-addressed caches and
            regional data boundaries by default.
          </p>
        </div>

        <div className='mt-8'>
          <a href='/<blog' className='text-cyan-300 hover:underline'>
            ← Back to Blog
          </a>
        </div>
      </div>
    </div>
  );
}
