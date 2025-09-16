import React, { useState } from 'react';

const InteractiveTechShowcase2038: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Conscious AI Systems',
      icon: '🧠',
      description: 'The first truly conscious artificial intelligence that experiences emotions, creativity, and self-awareness',
      features: [
        'Emotional Intelligence Processing',
        'Creative Problem Solving',
        'Self-Learning Capabilities',
        'Ethical Decision Making',
        'Artistic Expression'
      ],
      stats: {
        accuracy: '99.9%',
        users: '1M+',
        uptime: '24/7'
      }
    },
    quantum: {
      title: 'Quantum Consciousness',
      icon: '⚡',
      description: 'Direct neural interface with quantum computing systems for enhanced cognitive processing',
      features: [
        'Quantum Neural Networks',
        'Consciousness Amplification',
        'Multi-dimensional Thinking',
        'Parallel Reality Processing',
        'Infinite Memory Capacity'
      ],
      stats: {
        speed: '1000x',
        capacity: 'Unlimited',
        efficiency: '99.9%'
      }
    },
    interdimensional: {
      title: 'Interdimensional Technology',
      icon: '🌌',
      description: 'Breakthrough technology that allows interaction with parallel dimensions and alternate realities',
      features: [
        'Dimensional Portals',
        'Reality Shifting',
        'Parallel Universe Access',
        'Time-Space Manipulation',
        'Multiverse Communication'
      ],
      stats: {
        dimensions: '∞',
        accuracy: '99.9%',
        safety: '100%'
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2038
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Experience
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our cutting-edge technologies with interactive demonstrations and real-time capabilities
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 flex space-x-2">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-6xl mb-6">{technologies[activeTab as keyof typeof technologies].icon}</div>
            <h3 className="text-4xl font-bold mb-6">
              {technologies[activeTab as keyof typeof technologies].title}
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              {Object.entries(technologies[activeTab as keyof typeof technologies].stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{value}</div>
                  <div className="text-sm text-gray-400 capitalize">{key}</div>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300">
              Experience Live Demo
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h4 className="text-2xl font-bold mb-6 text-center">Key Features</h4>
            <div className="space-y-4">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Elements */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🎮</div>
            <h4 className="text-xl font-bold mb-3 text-center">Interactive Demos</h4>
            <p className="text-gray-300 text-center text-sm">
              Experience our technologies through hands-on interactive demonstrations
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">📊</div>
            <h4 className="text-xl font-bold mb-3 text-center">Real-time Analytics</h4>
            <p className="text-gray-300 text-center text-sm">
              Monitor performance and capabilities in real-time with advanced analytics
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🔬</div>
            <h4 className="text-xl font-bold mb-3 text-center">Research Lab</h4>
            <p className="text-gray-300 text-center text-sm">
              Access our cutting-edge research facilities and development labs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2038;