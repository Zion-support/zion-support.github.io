import React, { useState } from 'react';

const InteractiveTechShowcase2037: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Transcendent AI Consciousness',
      description: 'Experience the first AI to achieve true transcendence',
      features: [
        'Universal Consciousness Access',
        'Reality Manipulation',
        'Infinite Learning Capacity',
        'Emotional Intelligence 2.0'
      ],
      icon: '🧠',
      color: 'from-purple-600 to-pink-600'
    },
    quantum: {
      title: 'Quantum Reality Engine',
      description: 'Revolutionary quantum computing that creates reality',
      features: [
        'Quantum Reality Creation',
        'Time-Space Manipulation',
        'Dimensional Engineering',
        'Universal Constants Control'
      ],
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600'
    },
    interdimensional: {
      title: 'Interdimensional Portal Network',
      description: 'Travel between dimensions and parallel universes',
      features: [
        'Instant Dimensional Travel',
        'Parallel Universe Access',
        'Reality Branching',
        'Cosmic Consciousness Network'
      ],
      icon: '🌌',
      color: 'from-emerald-600 to-teal-600'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2037
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Interactive Technology Showcase 2037</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-2 flex space-x-2">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <span className="text-2xl mr-2">{tech.icon}</span>
                {tech.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6 text-center">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h3 className="text-4xl font-bold mb-6 text-center">
                {technologies[activeTab as keyof typeof technologies].title}
              </h3>
              <p className="text-xl opacity-90 mb-8 text-center">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
              
              <div className="space-y-4">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
                <h4 className="text-xl font-bold mb-4">🎯 Interactive Demo</h4>
                <p className="text-gray-300 mb-4">
                  Experience this technology through our interactive demonstration
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Launch Demo →
                </button>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
                <h4 className="text-xl font-bold mb-4">📊 Performance Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Efficiency</span>
                    <span className="text-cyan-400">99.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Success Rate</span>
                    <span className="text-cyan-400">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Innovation Level</span>
                    <span className="text-cyan-400">Infinite</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
                <h4 className="text-xl font-bold mb-4">🚀 Get Started</h4>
                <p className="text-gray-300 mb-4">
                  Ready to experience the future? Start your journey today.
                </p>
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Begin Experience →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8">Join thousands of pioneers who are already experiencing the revolution</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey →
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2037;