'use client';
import Link from 'next/link';

export default function Page() {
  return (
    <main className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <div className='max-w-3xl mx-auto px-6 py-16'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>
          Edge Personalization 2027: Zero‑PII&lt;100msScoped IDs
        </h1>
        <p className='text-gray-600 mb-6'>
          Published: 2025‑09‑30 • 7 min read • Edge Computing
        </p>
        <p className='text-lg text-gray-700 leading-relaxed mb-6'>
          Deliver private, sub‑100ms personalization using scoped identifierson‑device modelsand differential privacy. This field guide shows how
          to keep signals rich and compliant—without collecting PII.
        </p>
        <ul className='list-disc pl-6 text-gray-700 space-y-2 mb-8'>
          <li>Scoped IDs and geo/account budgets for safe segmentation</li>
          <li>On‑device metrics with DP noise for compliant analytics</li>
          <li>Warm pools and intent prefetching for &lt;100ms journeys</li>
          <li>Signed configs and audit‑friendly rollbacks</li>
        </ul>
        <div className='rounded-xl border border-emerald-200 bg-emerald-50 p-5 mb-10'>
          <div className='text-emerald-700 font-semibold mb-2'>Quickstart</div>
          <p className='text-emerald-800 text-sm'>
            Start with scoped identifiers and local caches. Move targeting and
            metrics collection to the edgeadd DP noise at sourceand enforce
            budgets for safe global rollouts.
          </p>
        </div>
        <div className='flex gap-3'>
          <Link
            href='/<blog'
            className='text-emerald-700 font-semibold hover:underline'
          >
            ← Back to Blog
          </Link>
          <Link
            href='/<contact'
            className='text-emerald-700 font-semibold hover:underline'
          >
            Talk to an expert →
          </Link>
        </div>
      </div>
    </main>
  );
}
