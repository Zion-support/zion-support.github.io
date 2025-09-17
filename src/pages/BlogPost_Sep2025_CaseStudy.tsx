import React from 'react';
const BlogPost_Sep2025_CaseStudy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-bold mb-6">
            🏆 CASE STUDY • SEPTEMBER 2025
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Financial Services: $80M Annualized Savings via Eval‑Guarded Model Routing
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            How routing bands, budget controls, and journey scorecards reduced cost while preserving quality.
          </p>
        </div>
        <article className="max-w-3xl mx-auto mt-12 bg-white/5 backdrop-blur rounded-2xl p-8 text-indigo-50 leading-relaxed">
          <div className="grid grid-cols-3 gap-6 mb-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-300">$80M</div>
              <div className="text-xs text-cyan-100">Annualized savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-300">-37%</div>
              <div className="text-xs text-cyan-100">Cost per task</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-300">0%</div>
              <div className="text-xs text-cyan-100">Quality regression</div>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-white">Approach</h2>
          <ul className="list-disc pl-6 space-y-2 mb-8 text-indigo-100">
            <li>Routing bands by task complexity with eval-backed promotion rules.</li>
            <li>Budget thresholds and anomaly alerts per journey.</li>
            <li>Rollbacks auto-triggered on KPI violations.</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4 text-white">Outcomes</h2>
          <p className="text-indigo-100">
            The program delivered step-change savings and reliability, while enabling faster iteration cycles.
          </p>
        </article>
      </section>
    </div>
  );

};

export default BlogPost_Sep2025_CaseStudy;
