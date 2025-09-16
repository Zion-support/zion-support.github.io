import React, { useState } from 'react';

const InteractiveTechShowcase2028: React.FC = () => {
  const [activeTab, setActiveTab] = useState('breakthrough');

  const tabs = [
    { id: 'breakthrough', label: 'Revolutionary Breakthrough', icon: '🌟' },
    { id: 'innovation', label: 'Ultimate Innovation', icon: '⚡' },
    { id: 'revolution', label: 'Next-Gen Revolution', icon: '🚀' }
  ];

  const content = {
    breakthrough: {
      title: 'Revolutionary Tech Breakthrough 2028',
      description: 'Experience the most advanced technological innovations that will reshape our world in 2028',
      features: [
        'Conscious AI Systems',
        'Quantum Neural Networks',
        'Interdimensional Computing',
        'Reality Manipulation'
      ],
      color: 'from-purple-500 to-pink-500',
      link: '/pages/RevolutionaryTechBreakthrough2028'
    },
    innovation: {
      title: 'Ultimate Innovation Hub 2028',
      description: 'Discover cutting-edge innovations that push the boundaries of what\'s possible',
      features: [
        'Synthetic Intelligence',
        'Neural Quantum Fusion',
        'Time Computing',
        'Consciousness Transfer'
      ],
      color: 'from-cyan-500 to-blue-500',
      link: '/pages/UltimateTechInnovation2028'
    },
    revolution: {
      title: 'Next-Gen Tech Revolution 2028',
      description: 'Join the revolution that will transform humanity and our understanding of reality',
      features: [
        'Reality Engine',
        'Dimensional Computing',
        'Consciousness Simulation',
        'Universal Intelligence'
      ],
      color: 'from-emerald-500 to-teal-500',
      link: '/pages/NextGenTechRevolution2028'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE • JANUARY 2028
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2028
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most revolutionary technologies of 2028. Interact with conscious AI, 
            quantum computing, and interdimensional technology that will reshape our future.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 border border-purple-400/30">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Display */}
        <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">
              {content[activeTab as keyof typeof content].title}
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              {content[activeTab as keyof typeof content].description}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {content[activeTab as keyof typeof content].features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl mb-2">✨</div>
                  <div className="text-sm font-semibold">{feature}</div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a
                href={content[activeTab as keyof typeof content].link}
                className={`inline-block bg-gradient-to-r ${content[activeTab as keyof typeof content].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
              >
                Explore {content[activeTab as keyof typeof content].title} →
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="text-5xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold mb-4">Interactive Demos</h3>
            <p className="text-blue-100 mb-6">
              Experience our technologies through hands-on interactive demonstrations
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Launch Demo
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="text-5xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold mb-4">Live Research</h3>
            <p className="text-purple-100 mb-6">
              Watch our AI systems conduct real-time research and make discoveries
            </p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              View Research
            </button>
          </div>

          <div className="bg-gradient-to-br from-pink-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Future Roadmap</h3>
            <p className="text-pink-100 mb-6">
              Explore our roadmap for upcoming innovations and breakthroughs
            </p>
            <button className="bg-white text-pink-600 px-6 py-3 rounded-lg hover:bg-pink-50 transition-colors font-semibold">
              View Roadmap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;