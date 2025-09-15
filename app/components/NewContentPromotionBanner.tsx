import React from 'react';

const NewContentPromotionBanner: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-purple-700 mb-2">Just published</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">AI 2026: Operational Excellence Blueprint</h2>
            <p className="text-lg text-gray-600 max-w-2xl">Practical patterns to run reliable, efficient, and governed AI operations at scale.</p>
          </div>
          <div className="flex gap-3">
            <a href="/content/ai-2026-operational-excellence-blueprint" className="shrink-0 inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">Read →</a>
            <a href="/content/ai-2026-risk-aware-agents-blueprint" className="shrink-0 inline-block border border-purple-600 text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50">Risk-Aware Agents</a>
          </div>
        </div>
        <div className="mt-6 bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-purple-700 mb-2">Also new</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">AI 2026: Agent Posture Hardening Guide</h3>
            <p className="text-lg text-gray-600 max-w-2xl">Baseline controls, continuous posture checks, and remediation flows for agent systems.</p>
          </div>
          <a href="/blog/ai-2026-agent-posture-management" className="shrink-0 inline-block border border-purple-600 text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50">Read →</a>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;
