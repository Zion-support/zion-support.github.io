// @ts-nocheck
import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="py-16 border-b border-white/10 bg-white/5">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-sm text-emerald-300 mb-2">AI Strategy • 2025-09-30 • 7 min read</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">AI Product Launch Checklist: From Pilot to Production</h1>
          <p className="text-white/80 text-lg">A battle‑tested checklist to graduate pilots into production with reliability, safety, and ROI.</p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4 prose prose-invert">
          <h2>What this includes</h2>
          <ul>
            <li>Readiness gates: data, evals, and policy tests</li>
            <li>Operational guardrails: budgets, rollbacks, and live scorecards</li>
            <li>Security and compliance: attestations and runtime verifiers</li>
          </ul>
          <p>Use this checklist to reduce time‑to‑value while preserving product quality and trust.</p>

          <div className="mt-10">
            <Link href="/" className="text-emerald-300 hover:text-emerald-200 font-semibold">← Back to Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

