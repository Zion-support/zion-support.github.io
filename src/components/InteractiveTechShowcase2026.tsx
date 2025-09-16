import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      id: 'ai-systems',
      name: 'Advanced AI Systems',
      icon: '🤖',
      description: 'Revolutionary AI with autonomous learning and quantum processing',
      features: ['Autonomous Learning', 'Quantum AI Processing', 'Distributed Intelligence'],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/30 to-pink-600/30',
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      icon: '⚡',
      description: 'Next-generation quantum processors solving impossible problems',
      features: ['Quantum Supremacy', 'Error Correction', 'Quantum Algorithms'],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
    },
    {
      id: 'neural-interfaces',
      name: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct brain-computer interfaces for enhanced human capabilities',
      features: ['Non-Invasive BCI', 'Thought Control', 'Neural Feedback'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
    },
    {
      id: 'synthetic-intelligence',
      name: 'Synthetic Intelligence',
      icon: '🧠',
      description: 'Artificial consciousness and synthetic minds',
      features: ['Artificial Consciousness', 'Synthetic Emotions', 'Creative AI'],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-600/30 to-red-600/30',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE 2026
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            The Future is Interactive
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience cutting-edge technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Interactive Technology Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.name}
              </button>
            ))}
          </div>

          {/* Active Technology Display */}
          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className={`bg-gradient-to-br ${technologies[activeTab].bgColor} backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30`}>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl mb-4">{technologies[activeTab].icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{technologies[activeTab].name}</h3>
                  <p className="text-lg opacity-90 mb-6">{technologies[activeTab].description}</p>
                  
                  <div className="space-y-3">
                    {technologies[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-black/20 rounded-xl p-6">
                  <h4 className="text-xl font-semibold mb-4 text-center">Interactive Demo</h4>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg p-4">
                      <div className="text-sm text-cyan-300 mb-2">Real-time Processing</div>
                      <div className="text-2xl font-bold">99.9% Accuracy</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4">
                      <div className="text-sm text-purple-300 mb-2">Processing Speed</div>
                      <div className="text-2xl font-bold">10^18x Faster</div>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg p-4">
                      <div className="text-sm text-emerald-300 mb-2">Uptime</div>
                      <div className="text-2xl font-bold">24/7 Operation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-gray-300 text-sm">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">10^18x</div>
            <div className="text-gray-300 text-sm">Speed Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Continuous Operation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">∞</div>
            <div className="text-gray-300 text-sm">Possibilities</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;