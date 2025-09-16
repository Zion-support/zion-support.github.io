import React, { useState } from 'react';

const EnhancedContentShowcase2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState('latest');

  const contentCategories = {
    latest: [
      {
        title: "Advanced Tech Showcase 2027",
        description: "Experience holographic computing, time dilation processing, and dimensional AI",
        image: "🌐",
        link: "/pages/AdvancedTechShowcase2027",
        gradient: "from-emerald-600 to-cyan-600",
        badge: "NEW"
      },
      {
        title: "Quantum Reality 2026",
        description: "Witness quantum supremacy, entanglement, and superposition in action",
        image: "⚛️",
        link: "/pages/QuantumReality2026",
        gradient: "from-cyan-600 to-blue-600",
        badge: "BREAKTHROUGH"
      },
      {
        title: "Neural Interface Evolution 2026",
        description: "Direct brain-computer interfaces and thought-controlled technology",
        image: "🧬",
        link: "/pages/NeuralInterfaceEvolution2026",
        gradient: "from-emerald-600 to-teal-600",
        badge: "EVOLUTION"
      }
    ],
    ai: [
      {
        title: "AI Revolutionary Breakthrough 2026",
        description: "True AI consciousness and autonomous creativity",
        image: "🧠",
        link: "/pages/AIRevolutionaryBreakthrough2026",
        gradient: "from-purple-600 to-pink-600",
        badge: "REVOLUTIONARY"
      },
      {
        title: "Ultimate Tech Revolution 2026",
        description: "The convergence of AI consciousness, quantum supremacy, and neural interfaces",
        image: "🌟",
        link: "/pages/UltimateTechRevolution2026",
        gradient: "from-indigo-600 to-purple-600",
        badge: "ULTIMATE"
      },
      {
        title: "Synthetic Intelligence 2026",
        description: "Create and deploy AI agents with synthetic consciousness",
        image: "🤖",
        link: "/pages/SyntheticIntelligence2026",
        gradient: "from-violet-600 to-fuchsia-600",
        badge: "SYNTHETIC"
      }
    ],
    quantum: [
      {
        title: "Quantum Reality 2026",
        description: "Experience quantum supremacy and entanglement technology",
        image: "⚛️",
        link: "/pages/QuantumReality2026",
        gradient: "from-cyan-600 to-blue-600",
        badge: "QUANTUM"
      },
      {
        title: "Advanced Quantum Computing 2026",
        description: "1000+ qubit quantum processors with quantum supremacy",
        image: "⚡",
        link: "/pages/AdvancedQuantumComputing2026",
        gradient: "from-indigo-600 to-purple-600",
        badge: "ADVANCED"
      },
      {
        title: "Quantum Neural Fusion 2026",
        description: "The fusion of quantum computing and neural interfaces",
        image: "🌀",
        link: "/pages/QuantumNeuralFusion2026",
        gradient: "from-blue-600 to-cyan-600",
        badge: "FUSION"
      }
    ],
    neural: [
      {
        title: "Neural Interface Evolution 2026",
        description: "Direct brain-computer communication and thought control",
        image: "🧬",
        link: "/pages/NeuralInterfaceEvolution2026",
        gradient: "from-emerald-600 to-teal-600",
        badge: "EVOLUTION"
      },
      {
        title: "Neural Interface Revolution 2026",
        description: "Bridge mind and machine with advanced BCI technology",
        image: "🧠",
        link: "/pages/NeuralInterfaceRevolution2026",
        gradient: "from-teal-600 to-cyan-600",
        badge: "REVOLUTION"
      },
      {
        title: "Consciousness Computing 2026",
        description: "AI systems achieving genuine consciousness and self-awareness",
        image: "💭",
        link: "/pages/ConsciousnessComputing2026",
        gradient: "from-violet-600 to-fuchsia-600",
        badge: "CONSCIOUSNESS"
      }
    ]
  };

  const tabs = [
    { id: 'latest', label: 'Latest Innovations', icon: '🚀' },
    { id: 'ai', label: 'AI Breakthroughs', icon: '🧠' },
    { id: 'quantum', label: 'Quantum Technology', icon: '⚛️' },
    { id: 'neural', label: 'Neural Interfaces', icon: '🧬' }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-white mb-4">🌟 Revolutionary Content Showcase 2027</h2>
        <p className="text-2xl text-purple-200">Explore our most advanced technological innovations</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                : 'bg-white/10 text-purple-200 hover:bg-white/20 hover:text-white'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {contentCategories[activeTab as keyof typeof contentCategories].map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 group cursor-pointer"
            onClick={() => window.location.href = item.link}
          >
            {/* Badge */}
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full">
                {item.badge}
              </span>
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {item.image}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
              {item.title}
            </h3>
            
            <p className="text-purple-200 mb-4 text-sm leading-relaxed">
              {item.description}
            </p>

            {/* Action Button */}
            <div className={`bg-gradient-to-r ${item.gradient} text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center group-hover:scale-105`}>
              Explore Innovation →
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-3xl font-bold text-white mb-4">Ready to Experience the Future?</h3>
        <p className="text-xl text-purple-200 mb-6">
          Discover all our revolutionary technologies and be part of the next evolution
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/pages/UltimateTechRevolution2026"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg"
          >
            🌟 View All Innovations
          </a>
          <a 
            href="/contact"
            className="border-2 border-purple-400 text-purple-200 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-colors font-bold text-lg"
          >
            🚀 Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2027;