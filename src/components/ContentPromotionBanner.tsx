import React from 'react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 mb-8 text-white text-center">
      <div className="flex items-center justify-center space-x-2 mb-2">
        <span className="text-2xl">🎉</span>
        <h3 className="text-xl font-bold">NEW: Revolutionary Content 2025</h3>
        <span className="text-2xl">🎉</span>
      </div>
      <p className="text-lg opacity-90 mb-4">
        Explore our latest insights on AI Transformation, Quantum Computing, and Technology Trends
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/content/blog/ai-2025-revolutionary-business-automation-breakthrough" className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
          🤖 AI Automation →
        </a>
        <a href="/content/blog/quantum-computing-business-applications-2025" className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
          ⚡ Quantum Computing →
        </a>
        <a href="/content/case-studies/ai-automation-revolutionary-breakthrough-2025-success" className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
          💰 Success Stories →
        </a>
        <a href="/pages/TechnologyInsights2025" className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
          🔮 Tech Insights →
        </a>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;