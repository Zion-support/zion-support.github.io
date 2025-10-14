import React from 'react';
import React from 'react';
import React from 'react';

const OperationalTrustScorecardsPage: React.FC = () => {
  return (
    <>
      <main className="min-h-screen bg-slate-950 text-white">
      <section className="py-16 border-b border-white/10">
        <div className="max-w-3 xl mx-auto px-4">
          <div className="mb-6 inline-flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
              GUIDE
            </>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs">
              Sep 30, 2025
            </>
          </>
          <h1 >
            Operational Trust Scorecards v3
          </>
          <p >
            A practical blueprint to ship reliable, safe, and cost‑effective AI
            by tracking reliability, safety, cost, and value in a single live
            scorecard.    Prevent    regressions with budgets, gates, and instant
            rollback.
          </>
        </>
      </>
      <section className="py-12">
        <div className="max-w-3 xl mx-auto px-4 space-y-10">
          <div >
            <h2 className="text-2 xl font-bold mb-3">Why Operational Trust</>
            <p>Enterprise AI fails without measurable trust. Scorecards unify
              KPIs across reliability (accuracy, grounding, latency), safety
              (policy adherence), cost (per task, per user), and value (business
              outcomes) so leaders can make tradeoffs responsibly.
            </>
          </>
          <div >
            <h2 className="text-2 xl font-bold mb-3">Scorecard    Structure</>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li >
                <strong className="text-white">Reliability   :</strong> pass rates,
                hallucination rate, grounding success, latency SLO.
              </>
              <li >
                <strong className="text-white">Safety   :</strong> policy blocks,
                red‑team strikes, jailbreak resistance, PII leaks.
              </>
              <li >
                <strong className="text-white">Cost   :</strong> per‑task spend,
                model tier mix, cache hit rate, budget headroom.
              </>
              <li >
                <strong className="text-white">Value   :</strong> conversion
                uplift, time saved, NPS changes, $ ROI.
              </>
            </>
          </>
          <div >
            <h2 className="text-2 xl font-bold mb-3">Operational    Guardrails</>
            <p >
              Tie each KPI to budgets and routing rules. If reliability falls,
              route to safer tier; if cost exceeds budget, throttle usage; if
              safety violations spike, auto-rollback to last known good state.</>
            </>
          </>
        </>
      </>
    </>
  );
};

export default OperationalTrustScorecardsPage;
ursor/fix-errors-and-merge-to-main-94 a7
