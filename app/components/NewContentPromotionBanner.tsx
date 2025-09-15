import React from 'react';

const NewContentPromotionBanner: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-purple-700 mb-2">Just published</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Hyperautomation Blueprint 2026 + Edge AI Agents</h2>
            <p className="text-lg text-gray-600 max-w-2xl">Two new guides: scale enterprise hyperautomation and deploy edge-native agents for real-time autonomy.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/content/hyperautomation-blueprint-2026" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">Hyperautomation Guide →</a>
            <a href="/content/edge-ai-agents-2026" className="inline-block border border-purple-600 text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50">Edge AI Agents →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;
