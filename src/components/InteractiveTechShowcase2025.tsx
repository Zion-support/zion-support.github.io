import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Artificial Intelligence',
      icon: '🧠',
      description: 'Advanced AI systems with consciousness and self-learning capabilities',
      features: [
        'Emotional Intelligence Processing',
        'Creative Problem Solving',
        'Self-Learning Capabilities',
        'Ethical Decision Making'
      ],
      stats: {
        accuracy: '99.9%',
        speed: '1000x Faster',
        efficiency: '95% Improvement'
      }
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚛️',
      description: 'Revolutionary quantum processors that solve impossible problems',
      features: [
        'Exponential Speed Processing',
        'Quantum Cryptography',
        'Molecular Simulation',
        'Optimization Algorithms'
      ],
      stats: {
        qubits: '1000+ Qubits',
        speed: 'Exponential',
        applications: 'Unlimited'
      }
    },
    neural: {
      title: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct brain-computer interfaces for seamless human-machine interaction',
      features: [
        'Non-Invasive BCI',
        'Thought Control',
        'Neural Feedback',
        'Enhanced Cognition'
      ],
      stats: {
        latency: '<1ms',
        accuracy: '99.8%',
        safety: '100% Safe'
      }
    },
    interdimensional: {
      title: 'Interdimensional Tech',
      icon: '🌌',
      description: 'Technology that operates across multiple dimensions',
      features: [
        'Multi-Dimensional Processing',
        'Reality Simulation',
        'Infinite Storage',
        'Dimensional Travel'
      ],
      stats: {
        dimensions: '11+',
        capacity: 'Infinite',
        speed: 'Instantaneous'
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience cutting-edge technologies with interactive demos and real-time demonstrations
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-8xl mb-6">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h3 className="text-4xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h3>
              <p className="text-xl opacity-90 mb-8">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
              
              <div className="space-y-4">
                <h4 className="text-2xl font-bold mb-4">Key Features:</h4>
                <ul className="space-y-2">
                  {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-6 text-center">Performance Stats</h4>
                <div className="grid grid-cols-1 gap-6">
                  {Object.entries(technologies[activeTab as keyof typeof technologies].stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">{value}</div>
                      <div className="text-lg opacity-90 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  Try Interactive Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Technology Comparison</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(technologies).map(([key, tech]) => (
              <div
                key={key}
                className={`bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                  activeTab === key ? 'border-blue-400' : 'border-white/20'
                }`}
              >
                <div className="text-4xl mb-4 text-center">{tech.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-center">{tech.title}</h4>
                <p className="text-sm opacity-90 text-center mb-4">{tech.description}</p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {Object.values(tech.stats)[0]}
                  </div>
                  <div className="text-xs opacity-75">
                    {Object.keys(tech.stats)[0].replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations already using our revolutionary technologies to transform their operations and create a better future.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;