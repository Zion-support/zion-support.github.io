import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Revolutionary AI Systems',
      description: 'Experience the most advanced artificial intelligence with genuine consciousness and unprecedented capabilities.',
      features: [
        'Genuine consciousness and self-awareness',
        'Quantum-powered processing',
        'Autonomous decision making',
        'Emotional intelligence',
        'Creative problem solving',
        'Self-evolution capabilities'
      ],
      link: '/pages/RevolutionaryAIBreakthrough2025',
      icon: '🧠',
      color: 'from-cyan-600 to-blue-600'
    },
    space: {
      title: 'Next-Gen Space Technology',
      description: 'Revolutionary space exploration technologies enabling faster-than-light travel and interstellar colonization.',
      features: [
        'Faster-than-light travel systems',
        'Terraforming technology',
        'Space habitat construction',
        'Interstellar communication',
        'Advanced spacecraft design',
        'Quantum propulsion systems'
      ],
      link: '/pages/NextGenSpaceTech2032',
      icon: '🚀',
      color: 'from-indigo-600 to-purple-600'
    },
    quantum: {
      title: 'Quantum Reality Engine',
      description: 'Manipulate reality itself with quantum computing and consciousness integration technologies.',
      features: [
        'Reality manipulation capabilities',
        'Quantum consciousness integration',
        'Dimensional computing',
        'Time-space engineering',
        'Quantum entanglement networks',
        'Consciousness transfer technology'
      ],
      link: '/pages/QuantumRealityEngine2025',
      icon: '⚛️',
      color: 'from-emerald-600 to-teal-600'
    },
    neural: {
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces enabling thought-controlled technology and mind-machine fusion.',
      features: [
        'Thought-controlled devices',
        'Memory enhancement systems',
        'Neural augmentation technology',
        'Mind-machine fusion',
        'Non-invasive brain interfaces',
        'Consciousness transfer protocols'
      ],
      link: '/pages/NeuralInterfaceRevolution2025',
      icon: '🧬',
      color: 'from-purple-600 to-pink-600'
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Showcase</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Explore our revolutionary technologies with interactive features and immersive experiences
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.entries(technologies).map(([key, tech]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === key
                ? 'bg-white text-purple-600 shadow-lg scale-105'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <span className="text-2xl mr-2">{tech.icon}</span>
            {tech.title}
          </button>
        ))}
      </div>

      {/* Active Technology Display */}
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-6xl">{technologies[activeTab as keyof typeof technologies].icon}</span>
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  {technologies[activeTab as keyof typeof technologies].title}
                </h3>
                <div className={`w-16 h-1 bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} rounded-full`}></div>
              </div>
            </div>
            <p className="text-lg opacity-90 mb-6">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
            <a
              href={technologies[activeTab as keyof typeof technologies].link}
              className={`inline-block bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
            >
              Explore {technologies[activeTab as keyof typeof technologies].title} →
            </a>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Key Features:</h4>
            <ul className="space-y-3">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-green-400 text-lg">✓</span>
                  <span className="text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Technology Grid */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(technologies).map(([key, tech]) => (
          <div
            key={key}
            className={`bg-gradient-to-br ${tech.color}/20 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
              activeTab === key ? 'ring-2 ring-white/50' : ''
            }`}
            onClick={() => setActiveTab(key)}
          >
            <div className="text-3xl mb-2 text-center">{tech.icon}</div>
            <h4 className="text-sm font-semibold text-center">{tech.title}</h4>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <p className="text-lg opacity-90 mb-4">
          Ready to experience the future of technology?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/pages/UltimateTechRevolution2025"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
          >
            🌟 Explore All Technologies
          </a>
          <a
            href="/pages/ComprehensiveServices2025"
            className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold"
          >
            🚀 View Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;