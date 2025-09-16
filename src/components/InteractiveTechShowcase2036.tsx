import React, { useState } from 'react';

const InteractiveTechShowcase2036: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const demos = [
    {
      id: 'consciousness',
      title: 'Consciousness Transfer',
      icon: '🧠',
      description: 'Transfer your consciousness between different bodies and AI systems',
      features: ['100% fidelity transfer', 'Zero data loss', 'Real-time backup'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'quantum',
      title: 'Quantum Reality',
      icon: '⚡',
      description: 'Direct neural interface with quantum computing systems',
      features: ['Quantum neural networks', 'Consciousness amplification', 'Multi-dimensional thinking'],
      color: 'from-cyan-600 to-blue-600'
    },
    {
      id: 'interdimensional',
      title: 'Interdimensional Portal',
      icon: '🌌',
      description: 'Access parallel dimensions and alternate realities',
      features: ['Dimensional portals', 'Reality shifting', 'Parallel universe access'],
      color: 'from-emerald-600 to-teal-600'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE SHOWCASE • JANUARY 2036
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Interactive Technology Showcase 2036</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies through interactive demonstrations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className={`bg-gradient-to-br ${demo.color}/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeDemo === demo.id ? 'ring-4 ring-purple-400/50' : ''
              }`}
              onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
            >
              <div className="text-6xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{demo.title}</h3>
              <p className="text-purple-100 mb-6 text-center">{demo.description}</p>
              
              {activeDemo === demo.id && (
                <div className="space-y-3 mb-6">
                  {demo.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-purple-200 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
              
              <button className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
                {activeDemo === demo.id ? 'Hide Details' : 'Explore Demo'} →
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🎮 Interactive Controls</h3>
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                🧠 Activate Consciousness Transfer
              </button>
              <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                ⚡ Enter Quantum Reality
              </button>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                🌌 Open Interdimensional Portal
              </button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">📊 Real-time Metrics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-purple-200">Consciousness Fidelity</span>
                <span className="text-2xl font-bold text-purple-300">100%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-cyan-200">Quantum Processing Speed</span>
                <span className="text-2xl font-bold text-cyan-300">10,000x</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-emerald-200">Dimensional Stability</span>
                <span className="text-2xl font-bold text-emerald-300">99.9%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-pink-200">Success Rate</span>
                <span className="text-2xl font-bold text-pink-300">∞</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the most advanced technological revolution and experience consciousness transfer, 
            quantum reality, and interdimensional technology
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Interactive Demo →
            </button>
            <button className="border-2 border-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/20 transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2036;