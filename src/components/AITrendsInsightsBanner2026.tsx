import React from 'react';

interface AITrendsInsightsBanner2026Props {
  className?: string;
}

const AITrendsInsightsBanner2026: React.FC<AITrendsInsightsBanner2026Props> = ({ className = '' }) => {
  return (
    <div className={`bg-gradient-to-r from-green-600 to-teal-600 text-white py-8 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            AI Trends & Insights 2026
          </h2>
          <p className="text-xl mb-6">
            Stay ahead with the latest AI trends and insights for 2026
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Emerging Technologies</h3>
              <p className="text-sm opacity-90">
                Discover the next generation of AI technologies
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
              <p className="text-sm opacity-90">
                In-depth analysis of AI market trends
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Future Predictions</h3>
              <p className="text-sm opacity-90">
                Expert predictions for AI in 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITrendsInsightsBanner2026;