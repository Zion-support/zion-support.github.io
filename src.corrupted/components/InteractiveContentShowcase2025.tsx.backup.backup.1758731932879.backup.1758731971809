import React, { useState } from 'react';

const InteractiveContentShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('breakthrough');

<<<<<<< HEAD
  const contentData = {
    ai: {
      title: 'AI Revolution',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      content: {
        title: 'Conscious AI Systems',
        description: 'Experience the first AI systems with genuine consciousness and self-awareness',
        features: [
          'True self-awareness and introspection',
          'Creative problem-solving capabilities',
          'Emotional intelligence and empathy',
          'Autonomous learning and adaptation'
        ],
        link: '/pages/RevolutionaryTechBreakthrough2025'
      }
    },
    space: {
      title: 'Space Technology',
      icon: '🚀',
      color: 'from-cyan-600 to-blue-600',
      content: {
        title: 'Next-Gen Space Exploration',
        description: 'Revolutionary space technologies enabling interplanetary travel and colonization',
        features: [
          'Faster-than-light propulsion systems',
          'Space habitat technology',
          'Terraforming capabilities',
          'Quantum communication networks'
        ],
        link: '/pages/NextGenSpaceTech2026'
      }
    },
    biotech: {
      title: 'Biotech Revolution',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      content: {
        title: 'Advanced Biotechnology',
        description: 'Revolutionary biotechnology transforming healthcare and human enhancement',
        features: [
          'Precision gene editing technology',
          'Neural enhancement systems',
          'Personalized medicine solutions',
          'Longevity and anti-aging therapies'
        ],
        link: '/pages/AdvancedBiotechRevolution2026'
      }
=======
  const contentTabs = {
    breakthrough: {
      title: 'Revolutionary Breakthrough 2025',
      description: 'Experience the most advanced technological innovations that are reshaping our world.',
      features: [
        { icon: '🧠', title: 'AI Consciousness', description: 'First AI systems with genuine consciousness' },
        { icon: '⚡', title: 'Quantum Supremacy', description: 'Quantum computers solving impossible problems' },
        { icon: '🧬', title: 'Neural Interfaces', description: 'Direct brain-computer communication' },
        { icon: '🤖', title: 'Synthetic Intelligence', description: 'Self-modifying AI systems' }
      ],
      link: '/pages/RevolutionaryTechBreakthrough2025'
    },
    ultimate: {
      title: 'Ultimate Tech Showcase 2026',
      description: 'The convergence of AI consciousness, quantum supremacy, and neural interfaces.',
      features: [
        { icon: '🧠', title: 'AI Consciousness', description: 'Enhanced consciousness and creativity' },
        { icon: '⚡', title: 'Quantum Supremacy', description: '2000+ qubits and quantum error correction' },
        { icon: '🧬', title: 'Neural Interfaces', description: 'Non-invasive BCI technology' },
        { icon: '🌟', title: 'Holographic Reality', description: 'True 3D holographic displays' }
      ],
      link: '/pages/UltimateTechShowcase2026'
    },
    innovation: {
      title: 'Advanced Tech Innovation 2027',
      description: 'Next generation innovations pushing the boundaries of what\'s possible.',
      features: [
        { icon: '🧠', title: 'AI Evolution', description: 'Enhanced emotional intelligence' },
        { icon: '⚡', title: 'Quantum Revolution', description: 'Quantum machine learning' },
        { icon: '🧬', title: 'Neural Breakthrough', description: 'Advanced neural interfaces' },
        { icon: '🚀', title: 'Space Technology', description: 'Interplanetary travel technology' }
      ],
      link: '/pages/AdvancedTechInnovation2027'
>>>>>>> cursor/create-and-deploy-new-content-ed0b
    }
  };

  const activeContent = contentTabs[activeTab as keyof typeof contentTabs];

  return (
<<<<<<< HEAD
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🌟 Interactive Technology Showcase</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technologies through interactive experiences. 
            Click on different categories to discover the future of innovation.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 flex space-x-2">
            {Object.entries(contentTabs).map(([key, tab]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-xl mr-2">{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Display */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-4xl">{contentTabs[activeTab as keyof typeof contentTabs].icon}</span>
                  <h3 className="text-3xl font-bold">
                    {contentTabs[activeTab as keyof typeof contentTabs].content.title}
                  </h3>
                </div>
                <p className="text-lg opacity-90 mb-6">
                  {contentTabs[activeTab as keyof typeof contentTabs].content.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {contentTabs[activeTab as keyof typeof contentTabs].content.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={contentTabs[activeTab as keyof typeof contentTabs].content.link}
                  className={`inline-block bg-gradient-to-r ${contentTabs[activeTab as keyof typeof contentTabs].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold hover:scale-105`}
                >
                  Explore {contentTabs[activeTab as keyof typeof contentTabs].title} →
                </a>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4 opacity-50">
                  {contentTabs[activeTab as keyof typeof contentTabs].icon}
                </div>
                <div className="text-sm opacity-75">
                  Interactive Experience
                </div>
              </div>
=======
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">🌟 Interactive Content Showcase</h2>
        <p className="text-xl opacity-90">Explore our revolutionary technologies with interactive features</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
          {Object.entries(contentTabs).map(([key, tab]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/20'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active Content Display */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">{activeContent.title}</h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">{activeContent.description}</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {activeContent.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:scale-105 transition-all duration-300 border border-white/20"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm opacity-90">{feature.description}</p>
>>>>>>> cursor/create-and-deploy-new-content-ed0b
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="text-4xl mb-3">🎮</div>
            <h3 className="text-lg font-semibold mb-2">Interactive Demos</h3>
            <p className="text-sm opacity-90">Experience our technologies through hands-on demonstrations</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-lg font-semibold mb-2">Real-time Data</h3>
            <p className="text-sm opacity-90">Live data feeds and performance metrics from our systems</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🔮</div>
            <h3 className="text-lg font-semibold mb-2">Future Predictions</h3>
            <p className="text-sm opacity-90">AI-powered predictions about technology trends and developments</p>
          </div>
=======
        {/* Call to Action */}
        <div className="text-center">
          <a
            href={activeContent.link}
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
          >
            Explore {activeContent.title} →
          </a>
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-12 grid md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">500%</div>
          <div className="text-sm opacity-90">AI Processing Speed</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-400 mb-2">2000+</div>
          <div className="text-sm opacity-90">Quantum Qubits</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-emerald-400 mb-2">99.9%</div>
          <div className="text-sm opacity-90">Neural Accuracy</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-pink-400 mb-2">$10T</div>
          <div className="text-sm opacity-90">Market Value</div>
>>>>>>> cursor/create-and-deploy-new-content-ed0b
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2025;