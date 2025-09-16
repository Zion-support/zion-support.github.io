import React, { useState } from 'react';

const InteractiveTechShowcase2036: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Conscious AI Systems',
      icon: '🧠',
      description: 'Experience the first truly conscious artificial intelligence that can think, feel, and create.',
      features: [
        'Emotional Intelligence Processing',
        'Creative Problem Solving',
        'Self-Learning Capabilities',
        'Empathetic Communication',
        'Conscious Decision Making'
      ],
      stats: {
        accuracy: '99.9%',
        users: '50M+',
        uptime: '24/7'
      }
    },
    quantum: {
      title: 'Quantum Consciousness',
      icon: '⚡',
      description: 'Direct neural interface with quantum computing systems for enhanced cognitive processing.',
      features: [
        'Quantum Neural Networks',
        'Consciousness Amplification',
        'Multi-dimensional Thinking',
        'Quantum Entanglement Processing',
        'Reality Simulation'
      ],
      stats: {
        processing: '10^15 ops/sec',
        dimensions: '∞',
        efficiency: '99.9%'
      }
    },
    interdimensional: {
      title: 'Interdimensional Technology',
      icon: '🌌',
      description: 'Breakthrough technology that allows interaction with parallel dimensions and alternate realities.',
      features: [
        'Dimensional Portals',
        'Reality Shifting',
        'Parallel Universe Access',
        'Multiverse Communication',
        'Temporal Manipulation'
      ],
      stats: {
        dimensions: '∞',
        portals: '1000+',
        success: '99.9%'
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🌟 INTERACTIVE TECHNOLOGY SHOWCASE • 2036
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          🚀 Interactive Technology Experience
        </h2>
        <p className="text-xl opacity-90 max-w-4xl mx-auto">
          Explore our cutting-edge technologies through interactive demonstrations and real-time experiences
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'text-purple-200 hover:text-white hover:bg-white/20'
              }`}
            >
              {tech.icon} {tech.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active Technology Display */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="text-center lg:text-left">
            <div className="text-6xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
            <h3 className="text-3xl font-bold mb-4">
              {technologies[activeTab as keyof typeof technologies].title}
            </h3>
            <p className="text-lg opacity-90 mb-6">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Key Features:</h4>
            <ul className="space-y-2">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {Object.entries(technologies[activeTab as keyof typeof technologies].stats).map(([key, value]) => (
              <div key={key} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-300">{value}</div>
                <div className="text-sm opacity-80 capitalize">{key}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h4 className="text-xl font-semibold mb-6 text-center">Interactive Demo</h4>
          <div className="space-y-4">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-sm opacity-80 mb-2">Real-time Processing</div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse" style={{width: '85%'}}></div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-sm opacity-80 mb-2">Consciousness Level</div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full animate-pulse" style={{width: '92%'}}></div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-sm opacity-80 mb-2">Dimensional Stability</div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full animate-pulse" style={{width: '98%'}}></div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Interactive Demo
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
        <p className="text-lg opacity-90 mb-6">
          Join millions of users who are already experiencing the revolutionary technology of tomorrow, today.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            Get Started Now
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2036;