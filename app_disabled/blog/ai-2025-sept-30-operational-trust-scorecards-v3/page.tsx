import React from 'react';
// @ts-nocheck
import Link from 'next/link';

export const metadata = {
  title: 'Operational Trust Scorecards v3',
  description:
    'Measure reliability, cost, safety, and value with live AI scorecards.',
  type: 'article',
};

export default function Page() {
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <section className='py-16 border-b border-white/10'>
        <div className='max-w-3xl mx-auto px-4'>
          <div className='mb-6 inline-flex items-center gap-2'>
            <span className='px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30'>
              GUIDE
            </span>
            <span className='px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs'>
              Sep 30, 2025
            </span>
          </div>
          <h1 className='text-4xl md:text-5xl font-extrabold mb-4'>
            Operational Trust Scorecards v3
          </h1>
          <p className='text-gray-300 text-lg'>
            A practical blueprint to ship reliable, safe, and cost‑effective AI
            by tracking reliability, safety, cost, and value in a single live
            scorecard. Prevent regressions with budgets, gates, and instant
            rollback.
          </p>
        </div>
      </section>

      <section className='py-12'>
        <div className='max-w-3xl mx-auto px-4 space-y-10'>
          <div>
            <h2 className='text-2xl font-bold mb-3'>Why Operational Trust</h2>
            <p className='text-gray-300'>
              Enterprise AI fails without measurable trust. Scorecards unify KP
              Is across reliability (accuracy, grounding, latency), safety
              (policy adherence), cost (per task, per user), and value (business
              outcomes) so leaders can make tradeoffs responsibly.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-bold mb-3'>Scorecard Structure</h2>
            <ul className='list-disc pl-6 text-gray-300 space-y-2'>
              <li>
                <strong className='text-white'>Reliability :</strong> pass
                rates, hallucination rate, grounding success, latency SLO.
              </li>
              <li>
                <strong className='text-white'>Safety :</strong> policy blocks,
                red‑team strikes, jailbreak resistance, PII leaks.
              </li>
              <li>
                <strong className='text-white'>Cost :</strong> per‑task spend,
                model tier mix, cache hit rate, budget headroom.
              </li>
              <li>
                <strong className='text-white'>Value :</strong> conversion
                uplift, time saved, NPS changes, $ ROI.
              </li>
            </ul>
          </div>

          <div>
            <h2 className='text-2xl font-bold mb-3'>Operational Guardrails</h2>
            <p className='text-gray-300'>
              Tie each KPI to budgets and routing rules. If reliability falls,
              route to safer tier; if cost spikes, enable cache or quantized
              model; if safety flags rise, block risky tools and trigger review.
            </p>
          </div>

          <div className='rounded-xl border border-white/10 p-6 bg-white/5'>
            <h3 className='text-xl font-semibold mb-3'>
              Example KPI Thresholds
            </h3>
            <div className='grid grid-cols-2 gap-4 text-sm text-gray-300'>
              <div>
                <div className='text-white font-semibold'>
                  Grounded Answer Rate
                </div>
                <div>≥ 98% (weekly)</div>
              </div>
              <div>
                <div className='text-white font-semibold'>Latency p95</div>
                <div>≤ 750ms</div>
              </div>
              <div>
                <div className='text-white font-semibold'>Cost per Task</div>
                <div>≤ $0.012</div>
              </div>
              <div>
                <div className='text-white font-semibold'>
                  Policy Violations
                </div>
                <div>0 critical, ≤ 3 minor</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className='text-2xl font-bold mb-3'>Rollout Playbook</h2>
            <ol className='list-decimal pl-6 text-gray-300 space-y-2'>
              <li>
                Instrument end‑to‑end traces for prompts, tools, and outcomes.
              </li>
              <li>Define budgets per journey; route by risk and cost tiers.</li>
              <li>Add online evals and safety tests to CI/CD.</li>
              <li>
                Gate launches on scorecard deltas; enable instant rollback.
              </li>
            </ol>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            <ArrowRight href="/content-hub" className="text-emerald-300 hover:text-emerald-200 font-semibold">← Back to Content Hub</ArrowRight>
            <ArrowRight href="/blog/ai-2027-cost-optimization-playbook" className="text-cyan-300 hover:text-cyan-200 font-semibold">Next: Cost Optimization Playbook →</ArrowRight>
          </div>
        </div>
      </section>
    </main>
  );
}
