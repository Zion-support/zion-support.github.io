import React from 'react';

const NewContentPromotionBanner: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-purple-700 mb-2">Just published</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">AI 2026: Evals Maturity Model</h2>
            <p className="text-lg text-gray-600 max-w-2xl">A roadmap from ad-hoc checks to evaluation-first operations with risk-tiered gates.</p>
          </div>
          <div className="flex gap-3">
            <a href="/content/ai-2026-evals-maturity-model" className="shrink-0 inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">Read →</a>
            <a href="/content/ai-2026-agentic-evaluation-checklists" className="shrink-0 inline-block border border-purple-600 text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50">Checklists</a>
          </div>
        </div>
        <div className="mt-6 bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-purple-700 mb-2">Also new</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">AI 2026: Policy-as-Code for Agent Governance</h3>
            <p className="text-lg text-gray-600 max-w-2xl">Codify guardrails and approvals to scale autonomous operations with confidence.</p>
          </div>
          <a href="/content/ai-2026-agent-governance-policy-as-code" className="shrink-0 inline-block border border-purple-600 text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50">Read →</a>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;
