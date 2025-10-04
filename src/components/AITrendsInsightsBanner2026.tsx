import React from 'react';

const AITrendsInsightsBanner2026: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8">
            <span className="text-purple-400 font-bold text-lg tracking-wider uppercase">
              🚀 AI TRENDS 2026 • FUTURE INSIGHTS
            </span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            AI Trends & Insights 2026
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover the cutting-edge AI trends and insights that will shape the future of technology in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Quantum AI Integration',
              description: 'Revolutionary quantum-classical hybrid systems delivering unprecedented computational power.',
              icon: '⚛️',
              trend: 'Rising'
            },
            {
              title: 'Autonomous AI Systems',
              description: 'Self-managing AI infrastructure with 99.9% uptime and zero human intervention.',
              icon: '🤖',
              trend: 'Exploding'
            },
            {
              title: 'Cognitive AI Frameworks',
              description: 'AI that thinks about thinking, enabling meta-cognitive decision making.',
              icon: '🧠',
              trend: 'Emerging'
            }
          ].map((insight, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500">
              <div className="text-6xl mb-4">{insight.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{insight.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{insight.description}</p>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400 text-sm font-semibold border border-purple-500/30">
                  {insight.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AITrendsInsightsBanner2026;