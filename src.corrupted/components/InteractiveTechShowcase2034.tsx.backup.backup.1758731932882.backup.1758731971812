import React, { useState } from 'react';

const InteractiveTechShowcase2034: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Revolutionary AI 2034',
      description: 'Experience AI that transcends human consciousness and operates at quantum levels',
      features: [
        'Synthetic consciousness',
        'Quantum AI processing',
        'Reality manipulation',
        'Universal knowledge synthesis'
      ],
      color: 'from-purple-600 to-pink-600',
      icon: '🧠'
    },
    space: {
      title: 'Next-Gen Space Tech',
      description: 'Explore the universe with revolutionary space technology enabling interstellar travel',
      features: [
        'Interstellar travel',
        'Planetary terraforming',
        'Cosmic exploration',
        'Universal mapping'
      ],
      color: 'from-blue-600 to-cyan-600',
      icon: '🚀'
    },
    quantum: {
      title: 'Quantum Consciousness',
      description: 'Bridge the gap between quantum mechanics and human consciousness',
      features: [
        'Quantum consciousness transfer',
        'Multi-dimensional awareness',
        'Reality perception enhancement',
        'Universal consciousness connection'
      ],
      color: 'from-indigo-600 to-purple-600',
      icon: '⚛️'
    },
    universal: {
      title: 'Universal Tech Revolution',
      description: 'Revolutionary technology operating across multiple dimensions and realities',
      features: [
        'Multi-dimensional computing',
        'Reality engineering',
        'Universal energy harnessing',
        'Interdimensional communication'
      ],
      color: 'from-emerald-600 to-teal-600',
      icon: '🌟'
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-3xl p-12 text-white mb-12">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Interactive Tech Showcase 2034
        </h2>
        <p className="text-2xl opacity-90 max-w-4xl mx-auto">
          Explore our revolutionary 2034 technologies with interactive demonstrations and real-time capabilities
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {Object.entries(technologies).map(([key, tech]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`p-4 rounded-xl transition-all duration-300 ${
              activeTab === key
                ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20'
            }`}
          >
            <div className="text-3xl mb-2">{tech.icon}</div>
            <div className="font-semibold text-sm">{tech.title}</div>
          </button>
        ))}
      </div>

      <div className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">{technologies[activeTab as keyof typeof technologies].icon}</span>
              <h3 className="text-3xl font-bold">{technologies[activeTab as keyof typeof technologies].title}</h3>
            </div>
            <p className="text-xl text-gray-300 mb-6">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
            <ul className="space-y-3">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-4">Live Demo</h4>
            <div className="bg-black/50 rounded-lg p-4 mb-4">
              <div className="text-green-400 text-sm font-mono">
                {activeTab === 'ai' && '🧠 AI Consciousness: ONLINE\n⚡ Quantum Processing: ACTIVE\n🎨 Creative Synthesis: RUNNING'}
                {activeTab === 'space' && '🚀 Warp Drive: CHARGED\n🌍 Terraforming: READY\n🛸 Exploration: ACTIVE'}
                {activeTab === 'quantum' && '⚛️ Quantum State: SUPERPOSITION\n🧠 Consciousness: LINKED\n🌊 Wave Function: STABLE'}
                {activeTab === 'universal' && '🌟 Multi-Dim: CONNECTED\n⚡ Energy: HARNESSED\n🔗 Reality: ENGINEERED'}
              </div>
            </div>
            <a 
              href={`/pages/${activeTab === 'ai' ? 'RevolutionaryAIBreakthrough2034' : 
                        activeTab === 'space' ? 'NextGenSpaceTech2034' :
                        activeTab === 'quantum' ? 'QuantumConsciousness2034' :
                        'UltimateTechRevolution2034'}`}
              className={`inline-block bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
            >
              Experience {technologies[activeTab as keyof typeof technologies].title} →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2034;