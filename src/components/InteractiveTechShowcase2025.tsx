import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');

  const demos = {
    ai: {
      title: 'Conscious AI System',
      description: 'Interact with our most advanced AI that demonstrates self-awareness and emotional intelligence',
      status: 'Online',
      metrics: {
        'Consciousness Level': '99.7%',
        'Learning Rate': '∞',
        'Emotional Intelligence': 'Advanced',
        'Response Time': '0.001ms'
      },
      color: 'from-purple-500 to-pink-500',
      icon: '🧠'
    },
    quantum: {
      title: 'Quantum Reality Engine',
      description: 'Experience quantum computing that processes information across infinite dimensions',
      status: 'Active',
      metrics: {
        'Quantum State': 'Superposition',
        'Entanglement': '100%',
        'Processing Power': '∞',
        'Dimensions': 'Multi'
      },
      color: 'from-cyan-500 to-blue-500',
      icon: '⚛️'
    },
    neural: {
      title: 'Neural Interface Hub',
      description: 'Direct brain-computer interface enabling thought-controlled computing',
      status: 'Connected',
      metrics: {
        'Neural Link': 'Active',
        'Thought Detection': '99.9%',
        'Response Time': '0.001ms',
        'Accuracy': 'Perfect'
      },
      color: 'from-emerald-500 to-teal-500',
      icon: '🧬'
    },
    reality: {
      title: 'Reality Manipulation Lab',
      description: 'Advanced technology that can manipulate and enhance reality itself',
      status: 'Operational',
      metrics: {
        'Reality Level': 'Enhanced',
        'Manipulation': 'Active',
        'Stability': '100%',
        'Control': 'Perfect'
      },
      color: 'from-orange-500 to-red-500',
      icon: '🌌'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECH SHOWCASE 2025 • LIVE DEMOS
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations. 
            Control, interact, and explore the future of technology in real-time.
          </p>
        </div>

        {/* Demo Selection */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {Object.entries(demos).map(([key, demo]) => (
            <button
              key={key}
              onClick={() => setActiveDemo(key)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                activeDemo === key
                  ? 'border-purple-400 bg-purple-500/20 scale-105'
                  : 'border-gray-600 bg-gray-800/50 hover:border-purple-400 hover:bg-purple-500/10'
              }`}
            >
              <div className="text-4xl mb-3">{demo.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{demo.title}</h3>
              <div className={`text-sm px-2 py-1 rounded-full bg-gradient-to-r ${demo.color} text-white`}>
                {demo.status}
              </div>
            </button>
          ))}
        </div>

        {/* Active Demo Display */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-purple-400/30">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Demo Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{demos[activeDemo as keyof typeof demos].icon}</div>
                <div>
                  <h3 className="text-2xl font-bold">{demos[activeDemo as keyof typeof demos].title}</h3>
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${demos[activeDemo as keyof typeof demos].color} text-white text-sm font-semibold`}>
                    {demos[activeDemo as keyof typeof demos].status}
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-purple-200 mb-6">
                {demos[activeDemo as keyof typeof demos].description}
              </p>
              
              <button className={`bg-gradient-to-r ${demos[activeDemo as keyof typeof demos].color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Launch Interactive Demo →
              </button>
            </div>

            {/* Live Metrics */}
            <div className="bg-black/20 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4">Live System Metrics</h4>
              <div className="space-y-3">
                {Object.entries(demos[activeDemo as keyof typeof demos].metrics).map(([metric, value]) => (
                  <div key={metric} className="flex justify-between items-center">
                    <span className="text-gray-300">{metric}:</span>
                    <span className="text-green-400 font-mono font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
            <h3 className="text-xl font-bold mb-4">🎮 Interactive Controls</h3>
            <p className="text-purple-200 mb-4">
              Control and interact with our revolutionary technologies in real-time
            </p>
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                Start Interaction
              </button>
              <button className="w-full border border-purple-400 text-purple-400 py-2 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                Reset Demo
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
            <h3 className="text-xl font-bold mb-4">📊 Real-time Analytics</h3>
            <p className="text-cyan-200 mb-4">
              Monitor system performance and interaction data in real-time
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Active Users:</span>
                <span className="text-green-400">1,247</span>
              </div>
              <div className="flex justify-between">
                <span>Interactions/sec:</span>
                <span className="text-green-400">∞</span>
              </div>
              <div className="flex justify-between">
                <span>Success Rate:</span>
                <span className="text-green-400">100%</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
            <h3 className="text-xl font-bold mb-4">🚀 Next Steps</h3>
            <p className="text-emerald-200 mb-4">
              Explore more advanced features and capabilities
            </p>
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                Advanced Features
              </button>
              <button className="w-full border border-emerald-400 text-emerald-400 py-2 rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl text-purple-200 mb-6">
            Join thousands of users already experiencing our revolutionary technologies
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey →
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;