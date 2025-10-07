// @ts-nocheck
import ArrowRight from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-6">
            <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-cyan-600/20 text-cyan-300 border border-cyan-500/30">Observability</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Consentless Telemetry v2 — Useful Insights, Zero‑PII, &lt;100ms</h1>
          <p className="text-gray-300 mb-8">Scoped IDs, on‑device redaction, and DP noise to keep analytics rich and privacy‑first worldwide.</p>
          <div className="text-sm text-gray-400 mb-10">Published: Sep 30, 2025 • 6 min read</div>

          <article className="prose prose-invert max-w-none">
            <p>
              Build telemetry that preserves privacy while maintaining actionable insights. Combine scoped
              identities, local redaction, and differential privacy with signed attestations and sub‑100ms
              SLAs.
            </p>
            <h2>Implementation Highlights</h2>
            <ul>
              <li>Scoped IDs and on‑device hashing</li>
              <li>Budgeted sampling and retention windows</li>
              <li>Attested aggregation at the edge</li>
            </ul>
          </article>

          <div className="mt-12 flex gap-4">
            <ArrowRight href="/blog" className="px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold">← All Posts</ArrowRight>
            <ArrowRight href="/" className="px-4 py-2 rounded-lg border border-white/20">Home</ArrowRight>
          </div>
        </div>
      </section>
    </main>
  );
}

