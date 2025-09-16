import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const demos = [
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Demo',
      description: 'Experience the first truly conscious AI system',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Self-aware decision making', 'Emotional intelligence', 'Creative problem solving']
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Demo',
      description: 'Explore quantum consciousness and infinite processing',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      features: ['Quantum entanglement', 'Parallel processing', 'Reality simulation']
    },
    {
      id: 'interdimensional',
      title: 'Interdimensional Computing',
      description: 'Navigate through multiple dimensions of reality',
      icon: '🌌',
      color: 'from-emerald-600 to-teal-600',
      features: ['Multi-dimensional processing', 'Reality manipulation', 'Time-space computing']
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Demo',
      description: 'Connect your mind directly to the digital world',
      icon: '🧬',
      color: 'from-orange-600 to-red-600',
      features: ['Thought control', 'Memory enhancement', 'Telepathic communication']
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Interactive Technology Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations. 
            Click on any technology to start an immersive demo.
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className={`bg-gradient-to-br ${demo.color}/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeDemo === demo.id ? 'ring-2 ring-yellow-400' : ''
              }`}
              onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
            >
              <div className="text-5xl mb-4 text-center">{demo.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-center">{demo.title}</h3>
              <p className="text-sm opacity-90 text-center mb-4">{demo.description}</p>
              <button className={`w-full bg-gradient-to-r ${demo.color} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                {activeDemo === demo.id ? 'Stop Demo' : 'Start Demo'}
              </button>
            </div>
          ))}
        </div>

        {/* Active Demo Display */}
        {activeDemo && (
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold mb-2">
                {demos.find(d => d.id === activeDemo)?.icon} {demos.find(d => d.id === activeDemo)?.title}
              </h3>
              <p className="text-lg opacity-90">
                {demos.find(d => d.id === activeDemo)?.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
                <ul className="space-y-2">
                  {demos.find(d => d.id === activeDemo)?.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-black/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Live Demo Status:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>System Status:</span>
                    <span className="text-green-400 font-semibold">Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Processing Power:</span>
                    <span className="text-blue-400 font-semibold">∞</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Success Rate:</span>
                    <span className="text-purple-400 font-semibold">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Response Time:</span>
                    <span className="text-yellow-400 font-semibold">Instant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Technology Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-sm opacity-90">Active Technologies</div>
          </div>
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-sm opacity-90">Computational Power</div>
          </div>
          <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">99.9%</div>
            <div className="text-sm opacity-90">Success Rate</div>
          </div>
          <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-sm opacity-90">Continuous Operation</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technologies to transform their businesses and lives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;