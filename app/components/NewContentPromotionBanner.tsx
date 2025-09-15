import React from 'react';

const NewContentPromotionBanner: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-purple-700 mb-2">Just published</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">AI 2026: Autonomous Incident Response</h2>
            <p className="text-lg text-gray-600 max-w-2xl">Design agentic playbooks and event-driven pipelines to reduce MTTR and scale operational excellence.</p>
          </div>
          <a href="/blog/ai-2026-ai-ops-autonomous-incident-response" className="shrink-0 inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">Read Article →</a>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;
