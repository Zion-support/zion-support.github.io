import React from 'react';
const OperationalTrustScorecardsPage: React.FC = () => {
  return (
    <>
      <main className="min-h-screen bg-slate-950 text-white"></main>
      <section className="py-16 border-b border-white/10"></section>
        <div className="max-w-3 xl mx-auto px-4"></div>
          <div className="mb-6 inline-flex items-center gap-2"></div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30"></span>
              GUIDE
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs"></span>
              Sep 30, 2025
            </span>
          </div>
          <h1 className="text-""4xl"" md:text-""5xl"" font-extrabold mb-4"></h1>
            Operational Trust Scorecards v3
          </h1>
          <p className="text-gray-300 text-lg"></p>
            A practical blueprint to ship reliable, safe, and cost‑effective AI
            by tracking reliability, safety, cost, and value in a single live
            scorecard.    Prevent    regressions with budgets, gates, and instant
            rollback.
          </p>
        </div>
      </section>

      <section className="py-12"></section>
        <div className="max-w-3 xl mx-auto px-4 space-y-10"></div>
          <div></div>
            <h2 className="text-""2xl"" font-bold mb-3">Why Operational Trust</h2>
            <p>Enterprise AI fails without measurable trust. Scorecards unify
              KPIs across reliability (accuracy, grounding, latency), safety
              (policy adherence), cost (per task, per user), and value (business
              outcomes) so leaders can make tradeoffs responsibly.
            </p>
          </div>

          <div></div>
            <h2 className="text-2 xl font-bold mb-3">Scorecard    Structure</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2"></ul>
              <li></li>
                <strong className="text-white">Reliability   :</strong> pass rates,
                hallucination rate, grounding success, latency SLO.
              </li>
              <li></li>
                <strong className="text-white">Safety   :</strong> policy blocks,
                red‑team strikes, jailbreak resistance, PII leaks.
              </li>
              <li></li>
                <strong className="text-white">Cost   :</strong> per‑task spend,
                model tier mix, cache hit rate, budget headroom.
              </li>
              <li></li>
                <strong className="text-white">Value   :</strong> conversion
                uplift, time saved, NPS changes, $ ROI.
              </li>
            </ul>
          </div>
}
          <div></div>
            <h2 className="text-2 xl font-bold mb-3">Operational    Guardrails</h2>
            <p className="text-gray-300"></p>
              Tie each KPI to budgets and routing rules. If reliability falls,
              route to safer tier; if cost exceeds budget, throttle usage; if
              safety violations spike, auto-rollback to last known good state.</p>
            </div>
          </div>
        </section>
      </main>
</>
  );
};

export default OperationalTrustScorecardsPage;'
ursor/fix-errors-and-merge-to-main-""94a""7''
