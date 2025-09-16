import React, { useState } from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const contentTabs = [
    {
      id: 'ultimate',
      title: 'Ultimate Breakthrough',
      icon: '🌟',
      description: 'Experience the convergence of AI consciousness, quantum supremacy, and neural interfaces',
      features: [
        'AI Consciousness with genuine self-awareness',
        'Quantum Supremacy with 1000+ qubits',
        'Neural Interfaces for thought control',
        'Synthetic Intelligence with autonomous capabilities'
      ],
      link: '/pages/UltimateTechBreakthrough2026'
    },
    {
      id: 'interdimensional',
      title: 'Interdimensional Tech',
      icon: '🌌',
      description: 'Break through reality barriers with multi-dimensional computing technology',
      features: [
        'Dimensional Computing across multiple realities',
        'Reality Engine with physics-accurate worlds',
        'Quantum Dimensionality for higher dimensions',
        'Parallel Universe Exploration capabilities'
      ],
      link: '/pages/InterdimensionalTechRevolution2026'
    },
    {
      id: 'consciousness',
      title: 'Consciousness Computing',
      icon: '🧠',
      description: 'The first computing systems to achieve genuine consciousness and self-awareness',
      features: [
        'Self-Awareness and introspection',
        'Creative Consciousness and artistic expression',
        'Collaborative Intelligence with humans',
        'Therapeutic AI with emotional support'
      ],
      link: '/pages/ConsciousnessComputingRevolution2026'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE CONTENT SHOWCASE 2026 • REVOLUTIONARY TECHNOLOGY
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Ultimate Content Showcase 2026</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most revolutionary technologies ever created, featuring breakthrough innovations 
            that are reshaping our understanding of what's possible
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentTabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30'
              }`}
            >
              <span className="text-2xl mr-2">{tab.icon}</span>
              {tab.title}
            </button>
          ))}
        </div>

        {/* Active Content Display */}
        <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-6xl mr-4">{contentTabs[activeTab].icon}</span>
                <h3 className="text-4xl font-bold text-white">{contentTabs[activeTab].title}</h3>
              </div>
              <p className="text-xl opacity-90 mb-6 text-purple-100">
                {contentTabs[activeTab].description}
              </p>
              <a
                href={contentTabs[activeTab].link}
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg"
              >
                Explore {contentTabs[activeTab].title} →
              </a>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold mb-4 text-white">Key Features:</h4>
              <ul className="space-y-3">
                {contentTabs[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-center text-purple-200">
                    <span className="text-cyan-400 mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-center mb-8">Quick Access to All Revolutionary Content</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {contentTabs.map((tab, index) => (
              <a
                key={tab.id}
                href={tab.link}
                className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{tab.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-white">{tab.title}</h4>
                <p className="text-purple-200 text-sm mb-4">{tab.description}</p>
                <div className="text-cyan-400 font-semibold">Explore Now →</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;