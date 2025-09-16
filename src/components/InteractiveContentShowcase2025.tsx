import React, { useState } from 'react';

const InteractiveContentShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const contentTabs = {
    ai: {
      title: 'Revolutionary AI Content',
      icon: '🧠',
      description: 'Autonomous AI systems with consciousness and self-awareness',
      features: [
        'Self-learning capabilities',
        'Autonomous decision making',
        'Creative consciousness',
        'Emotional intelligence'
      ],
      link: '/pages/RevolutionaryAIContent2025'
    },
    quantum: {
      title: 'Quantum Breakthroughs',
      icon: '⚡',
      description: 'Quantum supremacy and revolutionary error correction',
      features: [
        '1000+ logical qubits',
        'Quantum error correction',
        'Exponential speed gains',
        'Real-world applications'
      ],
      link: '/pages/QuantumBreakthroughShowcase2025'
    },
    future: {
      title: 'Future Technology',
      icon: '🌟',
      description: 'The convergence of AI, quantum computing, and neural interfaces',
      features: [
        'Neural interface technology',
        'Consciousness computing',
        'Synthetic intelligence',
        'Reality manipulation'
      ],
      link: '/pages/UltimateTechRevolution2026'
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE CONTENT SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Interactive Technology Showcase</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary content through interactive experiences and discover the future of technology
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentTabs).map(([key, tab]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <span className="text-2xl mr-2">{tab.icon}</span>
              {tab.title}
            </button>
          ))}
        </div>
        
        {/* Active Tab Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{contentTabs[activeTab as keyof typeof contentTabs].icon}</div>
            <h3 className="text-3xl font-bold mb-4">{contentTabs[activeTab as keyof typeof contentTabs].title}</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {contentTabs[activeTab as keyof typeof contentTabs].description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
              <ul className="space-y-3">
                {contentTabs[activeTab as keyof typeof contentTabs].features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4">Experience the Future</h4>
              <p className="text-sm opacity-90 mb-6">
                Dive deep into our revolutionary content and discover how these technologies are reshaping our world
              </p>
              <a
                href={contentTabs[activeTab as keyof typeof contentTabs].link}
                className="block w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
              >
                Explore {contentTabs[activeTab as keyof typeof contentTabs].title} →
              </a>
            </div>
          </div>
        </div>
        
        {/* Additional Content Links */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🚀</div>
            <h3 className="text-lg font-semibold mb-2 text-center">Space Technology</h3>
            <p className="text-sm text-center opacity-90 mb-4">
              Next-generation space exploration with AI and quantum computing
            </p>
            <a href="/pages/NextGenSpaceTech2026" className="block w-full bg-white/20 text-white py-2 rounded-lg hover:bg-white/30 transition-colors font-semibold text-center text-sm">
              Explore Space Tech →
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧬</div>
            <h3 className="text-lg font-semibold mb-2 text-center">Biotech Revolution</h3>
            <p className="text-sm text-center opacity-90 mb-4">
              Revolutionary biotechnology powered by AI and quantum computing
            </p>
            <a href="/pages/BiotechAIRevolution2025" className="block w-full bg-white/20 text-white py-2 rounded-lg hover:bg-white/30 transition-colors font-semibold text-center text-sm">
              Explore Biotech →
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🔮</div>
            <h3 className="text-lg font-semibold mb-2 text-center">Future Predictions</h3>
            <p className="text-sm text-center opacity-90 mb-4">
              Insights into the future of technology and human-AI collaboration
            </p>
            <a href="/pages/FutureTechTrends2025" className="block w-full bg-white/20 text-white py-2 rounded-lg hover:bg-white/30 transition-colors font-semibold text-center text-sm">
              See Predictions →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2025;