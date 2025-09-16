import React, { useState } from 'react';

const InteractiveTechShowcase2033: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Conscious AI Systems',
      description: 'Revolutionary artificial intelligence that thinks, feels, and creates independently.',
      features: [
        'Self-aware decision making',
        'Emotional intelligence processing',
        'Creative problem solving',
        'Autonomous learning',
        'Intuitive understanding'
      ],
      icon: '🧠',
      color: 'from-purple-600 to-pink-600'
    },
    quantum: {
      title: 'Quantum Consciousness',
      description: 'Breakthrough quantum computing that processes consciousness itself.',
      features: [
        'Quantum consciousness processing',
        'Infinite computational capacity',
        'Reality manipulation algorithms',
        'Time-space optimization',
        'Parallel universe computing'
      ],
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600'
    },
    reality: {
      title: 'Reality Manipulation',
      description: 'Technology that allows direct manipulation of physical reality.',
      features: [
        'Matter transformation',
        'Energy manipulation',
        'Space-time control',
        'Reality simulation',
        'Interdimensional access'
      ],
      icon: '🌌',
      color: 'from-emerald-600 to-teal-600'
    },
    neural: {
      title: 'Neural Interfaces',
      description: 'Direct brain-computer interfaces enabling enhanced cognitive abilities.',
      features: [
        'Thought-based computing',
        'Memory enhancement',
        'Cognitive amplification',
        'Neural feedback loops',
        'Consciousness transfer'
      ],
      icon: '🧬',
      color: 'from-orange-600 to-red-600'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Interactive Technology Showcase 2033
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most revolutionary technologies that will define 2033. 
            Interact with our cutting-edge innovations and discover the future today.
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
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {technologies[activeTab as keyof typeof technologies].title}
              </h3>
              <p className="text-xl opacity-90 mb-8">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
              <ul className="space-y-3 mb-8">
                {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <button className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Learn More →
                </button>
                <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold">
                  Try Demo
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className={`bg-gradient-to-br ${technologies[activeTab as keyof typeof technologies].color} rounded-2xl p-8 text-center`}>
                <div className="text-8xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
                <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                <p className="opacity-90 mb-6">
                  Experience this revolutionary technology through our interactive demonstration.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm opacity-80">Accuracy</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold">∞</div>
                    <div className="text-sm opacity-80">Potential</div>
                  </div>
                </div>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                  Start Interactive Demo →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <div
              key={key}
              className={`bg-gradient-to-br ${tech.color} rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveTab(key)}
            >
              <div className="text-4xl mb-3">{tech.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{tech.title}</h4>
              <p className="text-sm opacity-90">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2033;