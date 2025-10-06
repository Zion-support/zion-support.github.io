import React from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  const trends2026 = [
    {
      title: 'AI-First Architecture',
      description: 'Building systems with AI at the core for maximum efficiency and intelligence.',
      impact: 'High',
      timeline: 'Q1 2026'
    },
    {
      title: 'Quantum-Ready Infrastructure',
      description: 'Preparing your systems for the quantum computing revolution.',
      impact: 'Medium',
      timeline: 'Q2 2026'
    },
    {
      title: 'Autonomous Operations',
      description: 'Fully self-managing systems that adapt and optimize without human intervention.',
      impact: 'High',
      timeline: 'Q3 2026'
    }
  ];

  return (
    <div className="bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            2026 Technology Trends
          </h2>
          <p className="text-xl text-gray-600">
            Stay ahead with the latest innovations and trends for 2026
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trends2026.map((trend, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  trend.impact === 'High' 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {trend.impact} Impact
                </span>
                <span className="text-sm text-gray-500">{trend.timeline}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {trend.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {trend.description}
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
            Explore All 2026 Trends
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2026;