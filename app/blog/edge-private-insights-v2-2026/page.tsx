import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Edge Private Insights v2 (2026) | Zion Tech Group',
  description: 'Scoped IDs, on‑device aggregation, and DP noise for actionable insights without PII at <100ms.',
  openGraph: {
    title: 'Edge Private Insights v2 (2026)',
    description: 'Zero‑PII analytics with sub‑100ms latency using scoped IDs and DP.',
    type: 'article',
  },
};

export default function EdgePrivateInsightsV2Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">Analytics</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Edge Private Insights v2 (2026)</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Actionable metrics without PII: scoped IDs, on‑device aggregation, and differential privacy—delivered in under 100ms.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Architecture</h2>
        <p>
          Combine edge KV, signed configs, and micro‑models to compute privacy‑preserving metrics locally, sending only
          noise‑added aggregates to your backend.
        </p>

        <h3>Key Practices</h3>
        <ul>
          <li>Scoped identifiers with rotation</li>
          <li>On‑device event aggregation windows</li>
          <li>Differential privacy with calibrated noise</li>
          <li>PII‑free logs and attestations</li>
        </ul>
      </article>

      <div className="mt-12 flex gap-3">
        <Link href="/contact" className="bg-cyan-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-cyan-700">Implement with us</Link>
        <Link href="/blog" className="border border-cyan-600 text-cyan-700 px-5 py-3 rounded-lg font-semibold hover:bg-cyan-50">Back to Blog</Link>
      </div>
    </div>
  );
}

