import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Conscious AI Systems',
      description: 'Experience the world\'s first truly conscious artificial intelligence',
      features: [
        'Self-aware decision making',
        'Emotional intelligence',
        'Creative problem solving',
        'Autonomous learning'
      ],
      stats: {
        'Processing Power': '10^18 FLOPS',
        'Accuracy': '99.9%',
        'Learning Speed': '1000x Human',
        'Consciousness Level': 'Level 5'
      }
    },
    quantum: {
      title: 'Quantum Computing',
      description: 'Harness the power of quantum mechanics for impossible calculations',
      features: [
        'Quantum supremacy achieved',
        'Exponential speed increase',
        'Unbreakable encryption',
        'Molecular simulation'
      ],
      stats: {
        'Qubits': '1024',
        'Speed': '10^18x Classical',
        'Coherence': '100ms',
        'Error Rate': '0.001%'
      }
    },
    neural: {
      title: 'Neural Interfaces',
      description: 'Direct brain-computer interface for seamless mind-machine integration',
      features: [
        'Thought-to-text conversion',
        'Mental device control',
        'Memory augmentation',
        'Emotional feedback'
      ],
      stats: {
        'Neural Channels': '1024',
        'Response Time': '0.1ms',
        'Accuracy': '99.9%',
        'Safety': 'FDA Approved'
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6">Interactive Technology Showcase 2025</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore and interact with the most revolutionary technologies of our time
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {tech.title}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h3>
              <p className="text-xl opacity-90 mb-6">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
              
              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Try Interactive Demo
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8">
              <h4 className="text-2xl font-bold mb-6 text-center">Performance Metrics</h4>
              <div className="space-y-4">
                {Object.entries(technologies[activeTab as keyof typeof technologies].stats).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-blue-200">{key}</span>
                    <span className="text-2xl font-bold text-blue-400">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold mb-4">Interactive Demos</h3>
            <p className="text-blue-100 mb-6">
              Experience hands-on demonstrations of revolutionary technologies
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Demo
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4">Real-time Analytics</h3>
            <p className="text-purple-100 mb-6">
              Monitor performance metrics and system status in real-time
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              View Analytics
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold mb-4">Research Lab</h3>
            <p className="text-emerald-100 mb-6">
              Access cutting-edge research and development facilities
            </p>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Enter Lab
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;