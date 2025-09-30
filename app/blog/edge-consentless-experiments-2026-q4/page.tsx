// @ts-nocheck
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Edge Consentless Experiments Q4 2026: <100ms A/B Without PII',
  description: 'Scoped IDs, on-device metrics, and differential privacy for compliant global experiments running under 100ms.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Edge Consentless Experiments Q4 2026: <span className="text-cyan-700">&lt;100ms A/B Without PII</span>
          </h1>
          <p className="text-gray-600 mt-4">
            Design compliant, high‑velocity experimentation with scoped identifiers, on‑device metrics, signed configs, and
            differential privacy—delivering fast insights without collecting PII.
          </p>
          <div className="mt-6 text-sm text-gray-500">6 min read • Analytics • Published Sep 30, 2025</div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <h2>Why Consentless?</h2>
          <p>
            Many experiments do not require personal data. By using <strong>scoped, ephemeral IDs</strong> and
            <strong> on‑device aggregation</strong>, you can measure outcomes quickly while maintaining privacy guarantees.
          </p>

          <h3>Reference Architecture</h3>
          <ul>
            <li>Signed rollout configs with short TTLs</li>
            <li>Scoped device/session identifiers; no cross‑property joins</li>
            <li>On‑device metrics aggregation with DP noise</li>
            <li>Edge retrieval and bucketing for &lt;100ms p95</li>
          </ul>

          <h3>Outcomes</h3>
          <p>
            Teams ship experiments globally with predictable latency and strong privacy assurances. Legal review times drop,
            and product iteration accelerates.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link href="/blog" className="text-blue-600 font-semibold hover:text-blue-700">← Back to Blog</Link>
          <Link href="/blog/edge-inference-warm-pools-2026" className="text-cyan-700 font-semibold hover:text-cyan-800">Next: Edge Inference Warm Pools →</Link>
        </div>
      </section>
    </main>
  );
}
