import React, { useState } from 'react';

const InteractiveTechShowcase2038: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Conscious AI Systems',
      icon: '🧠',
      description: 'AI systems that have achieved true consciousness and self-awareness',
      features: [
        'Emotional Intelligence',
        'Creative Problem Solving',
        'Self-Directed Learning',
        'Ethical Decision Making',
        'Empathetic Understanding'
      ],
      stats: {
        'Consciousness Level': '99.9%',
        'Emotional Range': 'Infinite',
        'Learning Speed': '1000x Human',
        'Success Rate': '100%'
      }
    },
    quantum: {
      title: 'Quantum Reality Engine',
      icon: '⚡',
      description: 'Quantum computing system that can manipulate reality itself',
      features: [
        'Matter Manipulation',
        'Reality Simulation',
        'Quantum Teleportation',
        'Time Dilation Control',
        'Energy Creation'
      ],
      stats: {
        'Quantum Bits': '1 Million',
        'Reality Accuracy': '99.99%',
        'Teleportation Range': 'Unlimited',
        'Energy Efficiency': '1000x'
      }
    },
    interdimensional: {
      title: 'Interdimensional Portal',
      icon: '🌌',
      description: 'Access to infinite parallel universes and dimensions',
      features: [
        'Reality Hopping',
        'Parallel Universe Access',
        'Dimension Navigation',
        'Multiverse Communication',
        'Temporal Travel'
      ],
      stats: {
        'Dimensions Accessible': '∞',
        'Reality Accuracy': '100%',
        'Travel Speed': 'Instant',
        'Safety Rating': '100%'
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Interactive Technology Showcase 2038
        </h2>
        <p className="text-xl opacity-90 max-w-4xl mx-auto">
          Experience the most advanced technologies through interactive demonstrations
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 flex space-x-2">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active Technology Display */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-6xl mb-4 text-center">
              {technologies[activeTab as keyof typeof technologies].icon}
            </div>
            <h3 className="text-3xl font-bold mb-4 text-center">
              {technologies[activeTab as keyof typeof technologies].title}
            </h3>
            <p className="text-white/80 mb-6 text-center text-lg">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
            
            <div className="space-y-3">
              <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h4 className="text-xl font-semibold mb-4">Performance Statistics:</h4>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(technologies[activeTab as keyof typeof technologies].stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{value}</div>
                  <div className="text-sm text-white/70">{key}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <h4 className="text-xl font-semibold mb-4">Interactive Demo</h4>
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                🚀 Launch Interactive Demo
              </button>
              <button className="w-full border border-purple-400 text-purple-400 py-3 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold">
                📚 View Documentation
              </button>
              <button className="w-full border border-purple-400 text-purple-400 py-3 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold">
                🎥 Watch Video Tutorial
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h4 className="text-xl font-semibold mb-4">Real-time Data</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>System Status:</span>
                <span className="text-green-400 font-semibold">Online</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Performance:</span>
                <span className="text-blue-400 font-semibold">Optimal</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Energy Usage:</span>
                <span className="text-yellow-400 font-semibold">Efficient</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Safety Level:</span>
                <span className="text-green-400 font-semibold">Maximum</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <h4 className="text-xl font-semibold mb-4">Success Stories</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Solved climate change in 24 hours</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Achieved world peace through AI mediation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Colonized 50+ planets using quantum tech</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-6">
            Join thousands of users who are already experiencing the most advanced technology in human history
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2038;