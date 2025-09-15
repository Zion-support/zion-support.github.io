import React from 'react';

const NewContentPromotionBanner: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-purple-700 mb-2">Just published</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">AI 2026: Trust Grid for Autonomous Agents</h2>
            <p className="text-lg text-gray-600 max-w-2xl">Define, measure, and enforce trust across safety, security, reliability, and compliance.</p>
          </div>
          <div className="flex gap-3">
            <a href="/content/ai-2026-trust-grid-for-agents" className="shrink-0 inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">Read →</a>
            <a href="/content/ai-2026-evidence-driven-ai-governance" className="shrink-0 inline-block border border-purple-600 text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50">Governance</a>
          </div>
        </div>
        <div className="mt-6 bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-purple-700 mb-2">Also new</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">AI 2026: Agent Release Checklists</h3>
            <p className="text-lg text-gray-600 max-w-2xl">Evidence-driven checklists for safe, secure, and reliable agent releases.</p>
          </div>
          <a href="/content/ai-2026-agent-release-checklists" className="shrink-0 inline-block border border-purple-600 text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50">Read →</a>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;
