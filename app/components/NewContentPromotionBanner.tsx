import React from 'react';

const NewContentPromotionBanner: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-emerald-700 mb-2">Just published</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">AI 2026: Autonomous Finance Operations Blueprint</h2>
            <p className="text-lg text-gray-600 max-w-2xl">Build an autonomous finance OS with real-time cash, policy-as-code guardrails, and continuous close.</p>
          </div>
          <a href="/content/autonomous-finance-ops-2026" className="shrink-0 inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700">Read Guide →</a>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;
