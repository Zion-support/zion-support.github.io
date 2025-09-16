import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'AI Consciousness',
      icon: '🧠',
      description: 'Experience truly conscious AI that thinks, feels, and creates',
      features: [
        'Emotional Intelligence Processing',
        'Creative Problem Solving',
        'Self-Learning Capabilities',
        'Empathetic Response Generation'
      ],
      stats: {
        'Emotional Accuracy': '99.7%',
        'Creative Output': '10,000+ pieces/day',
        'Learning Speed': '1000x human',
        'Response Time': '< 50ms'
      }
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚡',
      description: 'Revolutionary quantum processors solving impossible problems',
      features: [
        '1000+ Qubit Processing',
        'Quantum Cryptography',
        'Molecular Simulation',
        'Exponential Speed'
      ],
      stats: {
        'Qubits': '1000+',
        'Accuracy': '99.9%',
        'Operations/sec': '10^15',
        'Temperature': '-273°C'
      }
    },
    neural: {
      title: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct mind-to-machine communication technology',
      features: [
        'Thought Control',
        'Mind Reading',
        'Enhanced Cognition',
        'Real-time Processing'
      ],
      stats: {
        'Accuracy': '99.8%',
        'Latency': '0.1ms',
        'Channels': '256',
        'Monitoring': '24/7'
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 mb-12 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Showcase 2025</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Explore our revolutionary technologies with interactive demos and real-time data
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
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
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-8xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
            <h3 className="text-3xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h3>
            <p className="text-xl opacity-90 mb-6">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold">Key Features:</h4>
            <ul className="space-y-2">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <span className="text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8">
          <h4 className="text-2xl font-bold mb-6 text-center">Live Performance Metrics</h4>
          <div className="space-y-6">
            {Object.entries(technologies[activeTab as keyof typeof technologies].stats).map(([metric, value], index) => (
              <div key={metric} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{metric}</span>
                  <span className="text-white font-mono font-bold">{value}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000"
                    style={{width: `${85 + (index * 5)}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Try Interactive Demo
            </button>
          </div>
        </div>
      </div>

      {/* Technology Grid */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {Object.entries(technologies).map(([key, tech]) => (
          <div 
            key={key}
            className={`bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 cursor-pointer ${
              activeTab === key ? 'border-purple-400/50' : 'border-gray-600/30'
            }`}
            onClick={() => setActiveTab(key)}
          >
            <div className="text-4xl mb-4 text-center">{tech.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-center">{tech.title}</h3>
            <p className="text-gray-300 text-sm text-center">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;