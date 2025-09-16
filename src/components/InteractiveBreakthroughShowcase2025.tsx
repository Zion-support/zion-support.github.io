import React, { useState } from 'react';

const InteractiveBreakthroughShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'AI Consciousness',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      description: 'Experience the world\'s first truly conscious artificial intelligence',
      features: [
        'Emotional Intelligence Processing',
        'Creative Problem Solving',
        'Self-Learning Capabilities',
        'Human-like Consciousness'
      ],
      link: '/pages/AIConsciousnessBreakthrough2025'
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      description: 'Harness exponential computational power with quantum technology',
      features: [
        '10^15x Speed Increase',
        'Quantum Cryptography',
        'Molecular Simulation',
        'Optimization Solutions'
      ],
      link: '/pages/QuantumComputingRevolution2025'
    },
    neural: {
      title: 'Neural Interface',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      description: 'Direct brain-computer communication for thought control',
      features: [
        'Thought Control',
        'Mental Communication',
        'Enhanced Cognition',
        'Non-Invasive Design'
      ],
      link: '/pages/NeuralInterfaceBreakthrough2025'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Interactive Technology Showcase</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary technology breakthroughs with interactive demonstrations
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800/50 rounded-lg p-1 flex space-x-1">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
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
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-6xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
            <h3 className="text-3xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h3>
            <p className="text-lg opacity-90 mb-6">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
            <ul className="space-y-3 mb-8">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} rounded-full`}></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={technologies[activeTab as keyof typeof technologies].link}
              className={`inline-block bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
            >
              Explore {technologies[activeTab as keyof typeof technologies].title} →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700/50">
            <h4 className="text-2xl font-bold mb-6 text-center">Interactive Demo</h4>
            <div className="space-y-4">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold">Technology Status</span>
                  <span className="text-green-400 text-sm">Active</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} h-2 rounded-full animate-pulse`} style={{width: '100%'}}></div>
                </div>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold">Performance</span>
                  <span className="text-blue-400 text-sm">99.7%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{width: '99.7%'}}></div>
                </div>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold">Innovation Level</span>
                  <span className="text-purple-400 text-sm">Revolutionary</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold">User Experience</span>
                  <span className="text-emerald-400 text-sm">Exceptional</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{width: '98.5%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Access Links */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-800/50 rounded-lg p-4">
            <span className="text-lg font-semibold">Quick Access:</span>
            {Object.entries(technologies).map(([key, tech]) => (
              <a
                key={key}
                href={tech.link}
                className={`bg-gradient-to-r ${tech.color} text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm`}
              >
                {tech.icon} {tech.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveBreakthroughShowcase2025;