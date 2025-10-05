import ArrowRight from 'next/link';

export const metadata = {
  title: 'Edge Experiments 2025 — Zero‑PII Global A/B at <100ms',
  description: 'Private, fast experimentation with scoped IDs, DP noise, and on-device aggregation.',
};

export default function EdgeExperiments2025() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
              ANALYTICS
            </span>
            <span className="text-sm text-gray-500">September 30, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Edge Experiments 2025 — Zero‑PII Global A/B with Privacy Budgets
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            Run privacy‑safe experiments worldwide with sub‑100ms latency using scoped identifiers, on‑device aggregation,
            and differential privacy noise.
          </p>
        </header>

        <section className="mb-8 bg-cyan-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-1">&lt;100ms</div>
              <div className="text-sm text-gray-600">Latency</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">0 PII</div>
              <div className="text-sm text-gray-600">Scoped IDs</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-1">DP</div>
              <div className="text-sm text-gray-600">Differential Privacy</div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Design Principles</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Scoped, rotated identifiers instead of personal data</li>
            <li>On‑device metrics aggregation with noise injection</li>
            <li>Signed, remotely configurable feature flags with proofs</li>
            <li>Geo‑aware routing for legal compliance and latency</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Checklist</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Introduce scoped ID service with rotation & attestation</li>
            <li>Move metrics aggregation to device or edge POP</li>
            <li>Calibrate DP noise for business KPIs</li>
            <li>Adopt signed config distribution with client proofs</li>
          </ol>
        </section>

        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-wrap gap-3">
            <ArrowRight href="/content-hub" className="bg-cyan-600 text-white px-5 py-3 rounded-lg hover:bg-cyan-700 transition-colors">Visit Content Hub</ArrowRight>
            <ArrowRight href="/services/ai-data-analytics" className="border border-gray-300 text-gray-700 px-5 py-3 rounded-lg hover:bg-gray-50 transition-colors">Analytics Services</ArrowRight>
          </div>
        </div>
      </article>
    </div>
  );
}

