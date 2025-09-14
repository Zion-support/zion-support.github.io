import React, { useState } from 'react';

const InteractiveTechTrends2026: React.FC = () => {
  const [activeTrend, setActiveTrend] = useState(0);

  const trends = [
    {
      title: "Quantum AI Fusion",
      description: "The convergence of quantum computing and artificial intelligence will create unprecedented computational capabilities.",
      impact: "1000x faster processing",
      timeline: "Q2 2026",
      icon: "⚛️"
    },
    {
      title: "Neural Interface Integration",
      description: "Direct brain-computer interfaces will revolutionize human-AI collaboration and productivity.",
      impact: "300% efficiency boost",
      timeline: "Q3 2026",
      icon: "🧠"
    },
    {
      title: "Autonomous Business Ecosystems",
      description: "Self-managing business systems that operate independently with minimal human oversight.",
      impact: "500% ROI improvement",
      timeline: "Q4 2026",
      icon: "🏢"
    },
    {
      title: "Synthetic Intelligence Evolution",
      description: "AI systems that can create and evolve other AI systems, leading to exponential technological advancement.",
      impact: "Exponential innovation",
      timeline: "Q1 2027",
      icon: "🔬"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full px-6 py-2 mb-6 font-bold">
            <span className="text-sm">🔮 FUTURE PREDICTIONS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Interactive Tech Trends 2026
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the revolutionary technologies that will shape the future of business and society.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Trend Selector */}
          <div className="space-y-4">
            {trends.map((trend, index) => (
              <button
                key={index}
                onClick={() => setActiveTrend(index)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  activeTrend === index
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white transform scale-105'
                    : 'bg-white bg-opacity-10 backdrop-blur-lg text-gray-300 hover:bg-opacity-20'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{trend.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{trend.title}</h3>
                    <p className="text-sm opacity-80">{trend.timeline}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Trend Display */}
          <div className="bg-gradient-to-br from-white bg-opacity-10 to-white bg-opacity-5 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-center mb-6">
              <span className="text-6xl mb-4 block">{trends[activeTrend].icon}</span>
              <h3 className="text-3xl font-bold text-white mb-2">{trends[activeTrend].title}</h3>
              <div className="inline-flex items-center bg-gradient-to-r from-green-400 to-blue-500 text-black rounded-full px-4 py-2 font-bold">
                {trends[activeTrend].impact}
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {trends[activeTrend].description}
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">
                Expected Launch: <span className="text-yellow-400 font-bold">{trends[activeTrend].timeline}</span>
              </div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            {trends.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTrend(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTrend === index
                    ? 'bg-gradient-to-r from-purple-400 to-blue-500 scale-125'
                    : 'bg-white bg-opacity-30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTechTrends2026;