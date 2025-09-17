import React, { useState, useEffect } from 'react';

const TechTrendsShowcase2025: React.FC = () => {
  const [activeTrend, setActiveTrend] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const trends = [
    {
      id: 'ai-evolution',
      title: 'AI Evolution 2025',
      description: 'Artificial Intelligence is evolving beyond traditional machine learning into conscious, self-improving systems.',
      impact: 'High',
      timeline: '2025-2027',
      marketSize: '$1.2T',
      keyPoints: [
        'Conscious AI systems with self-awareness',
        'Autonomous decision-making capabilities',
        'Real-time learning and adaptation',
        'Human-AI collaboration frameworks'
      ],
      gradient: 'from-purple-600 to-pink-600',
      icon: '🧠',
      color: 'purple'
    },
    {
      id: 'quantum-revolution',
      title: 'Quantum Revolution',
      description: 'Quantum computing is breaking through practical barriers, enabling solutions to previously impossible problems.',
      impact: 'Revolutionary',
      timeline: '2025-2030',
      marketSize: '$850B',
      keyPoints: [
        'Practical quantum advantage achieved',
        'Quantum cryptography for ultra-secure communications',
        'Molecular simulation for drug discovery',
        'Optimization problems solved in seconds'
      ],
      gradient: 'from-cyan-600 to-blue-600',
      icon: '⚛️',
      color: 'cyan'
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interface Breakthrough',
      description: 'Brain-computer interfaces are becoming non-invasive and practical for everyday applications.',
      impact: 'Transformative',
      timeline: '2025-2028',
      marketSize: '$320B',
      keyPoints: [
        'Non-invasive neural interfaces',
        'Thought-controlled devices',
        'Memory enhancement and augmentation',
        'Direct brain-to-cloud connectivity'
      ],
      gradient: 'from-emerald-600 to-teal-600',
      icon: '🧬',
      color: 'emerald'
    },
    {
      id: 'metaverse-evolution',
      title: 'Metaverse Evolution',
      description: 'The metaverse is evolving into a fully immersive, persistent digital universe with real-world applications.',
      impact: 'High',
      timeline: '2025-2029',
      marketSize: '$680B',
      keyPoints: [
        'Photorealistic virtual environments',
        'Haptic feedback and full sensory immersion',
        'Digital twin technology integration',
        'Virtual economy and commerce'
      ],
      gradient: 'from-orange-600 to-red-600',
      icon: '🌐',
      color: 'orange'
    },
    {
      id: 'sustainable-tech',
      title: 'Sustainable Technology',
      description: 'Green technology solutions are becoming mainstream, driving environmental sustainability.',
      impact: 'Critical',
      timeline: '2025-2030',
      marketSize: '$1.5T',
      keyPoints: [
        'Zero-emission computing',
        'Renewable energy integration',
        'Carbon-negative manufacturing',
        'Circular economy technologies'
      ],
      gradient: 'from-green-600 to-emerald-600',
      icon: '🌱',
      color: 'green'
    }
  ];

  const handleTrendChange = (index: number) => {
    if (index !== activeTrend) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTrend(index);
        setIsAnimating(false);
      }, 200);
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 text-white">
            📈 TECHNOLOGY TRENDS • 2025
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Shaping the Future of Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the most significant technology trends that will define the next decade. 
            Stay ahead of the curve with our comprehensive analysis and insights.
          </p>
        </div>

        {/* Trend Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {trends.map((trend, index) => (
            <button
              key={trend.id}
              onClick={() => handleTrendChange(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTrend === index
                  ? `bg-gradient-to-r ${trend.gradient} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <span className="text-2xl mr-2">{trend.icon}</span>
              {trend.title}
            </button>
          ))}
        </div>

        {/* Active Trend Display */}
        <div className="relative">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className={`h-96 bg-gradient-to-br ${trends[activeTrend].gradient} p-12 text-white`}>
                <div className="flex items-center justify-between h-full">
                  <div className="flex-1">
                    <div className="text-8xl mb-6">{trends[activeTrend].icon}</div>
                    <h3 className="text-4xl font-bold mb-4">{trends[activeTrend].title}</h3>
                    <p className="text-xl mb-6 opacity-90">{trends[activeTrend].description}</p>
                    
                    <div className="flex space-x-8">
                      <div>
                        <div className="text-2xl font-bold">{trends[activeTrend].marketSize}</div>
                        <div className="text-sm opacity-75">Market Size</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{trends[activeTrend].timeline}</div>
                        <div className="text-sm opacity-75">Timeline</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{trends[activeTrend].impact}</div>
                        <div className="text-sm opacity-75">Impact Level</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 pl-12">
                    <h4 className="text-2xl font-bold mb-6">Key Developments</h4>
                    <ul className="space-y-4">
                      {trends[activeTrend].keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-white rounded-full mr-4 mt-2 flex-shrink-0"></div>
                          <span className="text-lg">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trend Analysis Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Analysis</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive market research and trend analysis to help you make informed decisions.
            </p>
            <a href="/pages/TechnologyInsights2025" className="text-purple-600 hover:text-purple-700 font-semibold">
              View Analysis →
            </a>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Future Predictions</h3>
            <p className="text-gray-600 mb-4">
              Expert predictions and forecasts for technology evolution over the next 5-10 years.
            </p>
            <a href="/pages/FutureTechTrends2025" className="text-purple-600 hover:text-purple-700 font-semibold">
              Read Predictions →
            </a>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Guide</h3>
            <p className="text-gray-600 mb-4">
              Step-by-step guides to implement these technologies in your organization.
            </p>
            <a href="/pages/AIInnovationPlaybook2025" className="text-purple-600 hover:text-purple-700 font-semibold">
              Get Guide →
            </a>
          </div>
        </div>

        {/* Industry Impact Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Industry Impact</h3>
            <p className="text-xl opacity-90">See how these trends are transforming different industries</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {['Healthcare', 'Finance', 'Manufacturing', 'Education', 'Retail'].map((industry, index) => (
              <div key={industry} className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/30 transition-all duration-300">
                <div className="text-3xl mb-3">{['🏥', '🏦', '🏭', '🎓', '🛍️'][index]}</div>
                <h4 className="text-lg font-bold">{industry}</h4>
                <div className="text-sm opacity-75 mt-2">+{Math.floor(Math.random() * 50 + 30)}% Growth</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechTrendsShowcase2025;