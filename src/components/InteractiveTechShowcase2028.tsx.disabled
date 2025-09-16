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
        'Quantum Computing 2.0',
        'Neural Interface Technology',
        'Metaverse Integration'
      ],
      link: '/pages/RevolutionaryTechBreakthrough2028',
      color: 'from-purple-600 to-pink-600'
    },
    innovation: {
      title: 'Ultimate Innovation Hub 2028',
      description: 'Discover cutting-edge innovations that are transforming industries and creating new possibilities',
      features: [
        'Advanced AI Consciousness',
        'Quantum Neural Networks',
        'Interdimensional Computing',
        'Synthetic Intelligence'
      ],
      link: '/pages/UltimateTechInnovation2028',
      color: 'from-cyan-600 to-blue-600'
    },
    revolution: {
      title: 'Next-Gen Tech Revolution 2028',
      description: 'Join the revolution with technologies that will define the future of human civilization',
      features: [
        'Revolutionary AI Agents',
        'Quantum Internet',
        'Brain-Computer Interfaces',
        'Digital Consciousness'
      ],
      link: '/pages/NextGenTechRevolution2028',
      color: 'from-emerald-600 to-teal-600'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY • 2028
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Interactive Technology Showcase 2028
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies that will reshape our world in 2028
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span className="font-semibold">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              {content[activeTab as keyof typeof content].title}
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {content[activeTab as keyof typeof content].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {content[activeTab as keyof typeof content].features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse"></div>
                <h4 className="text-lg font-semibold">{feature}</h4>
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

        {/* Interactive Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="text-5xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold mb-4">Interactive Demos</h3>
            <p className="text-blue-100 mb-6">
              Experience our technologies through hands-on interactive demonstrations
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Try Demo
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4">Real-time Analytics</h3>
            <p className="text-purple-100 mb-6">
              Monitor and analyze technology performance with advanced analytics
            </p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              View Analytics
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