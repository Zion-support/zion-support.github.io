import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('breakthrough');

  const tabs = [
    { id: 'breakthrough', label: 'Revolutionary Breakthrough', icon: '🚀' },
    { id: 'solutions', label: 'Advanced Solutions', icon: '🔧' },
    { id: 'ultimate', label: 'Ultimate Revolution', icon: '🌟' }
  ];

  const content = {
    breakthrough: {
      title: 'Revolutionary Tech Breakthrough 2025',
      description: 'Experience the most advanced technological revolution in human history.',
      features: [
        { icon: '🧠', title: 'Conscious AI Systems', description: 'Revolutionary AI that achieves true consciousness' },
        { icon: '⚛️', title: 'Quantum Consciousness', description: 'Breakthrough quantum computing merged with human consciousness' },
        { icon: '🌌', title: 'Interdimensional Tech', description: 'Technology for travel across multiple dimensions' },
        { icon: '🚀', title: 'Space-Time Engineering', description: 'Advanced technology for manipulating space-time' }
      ],
      link: '/pages/RevolutionaryTechBreakthrough2025'
    },
    solutions: {
      title: 'Advanced Tech Solutions 2025',
      description: 'Comprehensive technology solutions that transform businesses and revolutionize industries.',
      features: [
        { icon: '🤖', title: 'AI Business Automation', description: 'Complete business process automation using advanced AI' },
        { icon: '⚡', title: 'Quantum Computing Services', description: 'Revolutionary quantum computing for complex problems' },
        { icon: '🧠', title: 'Neural Interface Systems', description: 'Direct brain-computer interfaces for seamless interaction' },
        { icon: '🛡️', title: 'Advanced Cybersecurity', description: 'Next-generation cybersecurity with AI and quantum encryption' }
      ],
      link: '/pages/AdvancedTechSolutions2025'
    },
    ultimate: {
      title: 'Ultimate Tech Revolution 2032',
      description: 'The pinnacle of human technological achievement with omniversal intelligence.',
      features: [
        { icon: '🧠', title: 'Omniversal Consciousness', description: 'Ultimate fusion of human consciousness with omniversal intelligence' },
        { icon: '🌌', title: 'Reality Engineering', description: 'Complete control over the fundamental laws of physics' },
        { icon: '⚡', title: 'Quantum Reality Engine', description: 'Ultimate quantum computing that can manifest any reality' },
        { icon: '🚀', title: 'Omniversal Travel', description: 'Instantaneous travel across all dimensions and realities' }
      ],
      link: '/pages/UltimateTechRevolution2032'
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-3xl p-8 mb-12 border border-purple-400/30">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">🌟 Revolutionary Technology Showcase 2025</h2>
        <p className="text-xl text-gray-300">Discover the most advanced technological innovations that are reshaping our world</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Display */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-4">{content[activeTab as keyof typeof content].title}</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">{content[activeTab as keyof typeof content].description}</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {content[activeTab as keyof typeof content].features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to={content[activeTab as keyof typeof content].link}
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
          >
            Explore {content[activeTab as keyof typeof content].title} →
          </Link>
        </div>
      </div>

      {/* Additional Links */}
      <div className="mt-8 text-center">
        <p className="text-gray-300 mb-4">Explore more revolutionary content:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/pages/QuantumRealityInterface2029"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105"
          >
            🌌 Quantum Reality 2029
          </Link>
          <Link
            to="/pages/OmniversalConsciousness2030"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105"
          >
            🧠 Omniversal 2030
          </Link>
          <Link
            to="/pages/NeuralRealityEngine2031"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105"
          >
            ⚡ Neural Engine 2031
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;