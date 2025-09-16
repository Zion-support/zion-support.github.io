import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Autonomous Evidence‑Led Operations',
  description: 'Operate AI systems with audit‑ready evidence, evaluation gates, and SLOs.'
};

export default function EvidenceLedOps2026Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI 2026: Autonomous Evidence‑Led Operations</h1>
      <p className="text-gray-600 mb-8">Operate AI systems with audit‑ready evidence, evaluation gates, and SLOs.</p>

      <section className="prose prose-indigo max-w-none">
        <h2>Operating Model</h2>
        <ul>
          <li>End‑to‑end telemetry with traces and eval artifacts</li>
          <li>Lifecycle gates enforced by policy‑as‑code</li>
          <li>SLOs aligned to safety, quality, reliability, and cost</li>
        </ul>

        <h2>Outcomes</h2>
        <ul>
          <li>Faster, safer releases with measurable quality</li>
          <li>Regulatory compliance via continuous evidence</li>
          <li>Reduced incidents and faster MTTR</li>
        </ul>
      </section>

      <div className="mt-10 flex gap-3">
        <Link href="/content/ai-2026-safe-rollouts-in-production" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Safe Rollouts</Link>
        <Link href="/content/ai-2026-evaluation-hub" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Evaluation Hub</Link>
      </div>
    </main>
  );
}

