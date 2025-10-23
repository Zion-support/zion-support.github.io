import React from 'react';

const OperationalTrustScorecardsPage: React.FC = () => {
  return (
    <>
      <Helmet><>
</Helmet>
<title>Operational Trust Scorecards v3</title><>
<//title>
<meta name="description" content="Measure reliability, cost, safety, and value with live AI scorecards." /><>
</meta name="description" content="Measure reliability, cost, safety, and value with live AI scorecards." />
<meta property="og:type" content="article" /><>
</meta property="og:type" content="article" />
</Helmet><>
<//Helmet>
<main className="min-h-screen bg-slate-950 text-white"><>
</main className="min-h-screen bg-slate-950 text-white">
<section className="py-16 border-b border-white/10"><>
</section className="py-16 border-b border-white/10">
<div className="max-w-3xl mx-auto px-4"></div><>
<//div>
<div className="mb-6 inline-flex items-center gap-2"></div><>
<//div>
<span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30"></span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
              GUIDE
            </span><>
<//span>
<span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs"></span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs">
              Sep    30, 2025
            </span><>
<//span>
</div><>
<//div>
<h1 className="text-4xl md:text-5xl font-extrabold mb-4"></h1><//h1>
            Operational Trust    Scorecards    v3</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-gray-300 text-lg"></p className="text-gray-300 text-lg">
            A practical blueprint to ship reliable, safe, and cost‑effective AI
            by tracking reliability, safety, cost, and value in a single live
            scorecard.    Prevent    regressions with budgets, gates, and instant</p><//p>
            rollback.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
</section><>
<//section>
<section className="py-12"><>
</section className="py-12">
<div className="max-w-3xl mx-auto px-4 space-y-10"></div><>
<//div>
<div></div><>
<//div>
<h2 className="text-2xl font-bold mb-3">Why Operational    Trust</h2><>
<//h2>
<p className="text-gray-300"></p className="text-gray-300">
              Enterprise AI fails without measurable trust. Scorecards unify
              KP    Is    across reliability (accuracy, grounding, latency), safety
              (policy adherence), cost (per task, per user), and value (business</p><//p>
              outcomes) so leaders can make tradeoffs responsibly.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div></div><>
<//div>
<h2 className="text-2xl font-bold mb-3">Scorecard    Structure</h2><>
<//h2>
<ul className="list-disc pl-6 text-gray-300 space-y-2"><>
</ul className="list-disc pl-6 text-gray-300 space-y-2">
<li><>
</li>
<strong className="text-white">Reliability   :</strong> pass rates,
                hallucination rate, grounding success, latency SLO.
              </li><>
<//li>
<li><>
</li>
<strong className="text-white">Safety   :</strong> policy blocks,
                red‑team strikes, jailbreak resistance, PII leaks.
              </li><>
<//li>
<li><>
</li>
<strong className="text-white">Cost   :</strong> per‑task spend,
                model tier mix, cache hit rate, budget headroom.
              </li><>
<//li>
<li><>
</li>
<strong className="text-white">Value   :</strong> conversion
                uplift, time saved, NPS changes, $ ROI.
              </li><>
<//li>
</ul><>
<//ul>
</div><>
<//div>
<div></div><>
<//div>
<h2 className="text-2xl font-bold mb-3">Operational    Guardrails</h2><>
<//h2>
<p className="text-gray-300"></p className="text-gray-300">
              Tie each KPI to budgets and routing rules. If reliability falls,
              route to safer tier; if cost exceeds budget, throttle usage; if</p><//p>
              safety violations spike, auto-rollback to last known good state.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
</main><>
<//main>
</><//>
  );
}
export default OperationalTrustScorecardsPage;
