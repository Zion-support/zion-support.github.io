import React, { useState } from 'react';

const InteractiveTechShowcase2028: React.FC = () => {
  const [activeTab, setActiveTab] = useState('breakthrough');

  const techCategories = {
    breakthrough: {
      title: 'Revolutionary Breakthrough',
      icon: '🌟',
      description: 'Experience the most revolutionary technological breakthroughs of 2028',
      color: 'from-purple-600/30 to-pink-600/30',
      borderColor: 'border-purple-400/30',
      features: [
        'Conscious AI Systems',
        'Quantum Reality Engine',
        'Neural Interface Revolution',
        'Interdimensional Computing'
      ]
    },
    innovation: {
      title: 'Ultimate Innovation',
      icon: '⚡',
      description: 'Discover the ultimate innovations that are reshaping our world',
      color: 'from-cyan-600/30 to-blue-600/30',
      borderColor: 'border-cyan-400/30',
      features: [
        'Advanced AI Consciousness',
        'Quantum Neural Networks',
        'Holographic Interfaces',
        'Reality Manipulation'
      ]
    },
    revolution: {
      title: 'Next-Gen Revolution',
      icon: '🚀',
      description: 'Join the next generation revolution in technology',
      color: 'from-emerald-600/30 to-teal-600/30',
      borderColor: 'border-emerald-400/30',
      features: [
        'Immersive Virtual Worlds',
        'Haptic Feedback Systems',
        'Digital Twin Technology',
        'Interdimensional Reality'
      ]
    }
  };

  const tabs = [
    { id: 'breakthrough', label: 'Revolutionary Breakthrough', icon: '🌟' },
    { id: 'innovation', label: 'Ultimate Innovation', icon: '⚡' },
    { id: 'revolution', label: 'Next-Gen Revolution', icon: '🚀' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE 2028
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2028
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future of technology through immersive interactive demonstrations
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className={`bg-gradient-to-br ${techCategories[activeTab as keyof typeof techCategories].color} backdrop-blur-sm rounded-2xl p-12 mb-12 border ${techCategories[activeTab as keyof typeof techCategories].borderColor}`}>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-bounce">
              {techCategories[activeTab as keyof typeof techCategories].icon}
            </div>
            <h3 className="text-4xl font-bold mb-4">
              {techCategories[activeTab as keyof typeof techCategories].title}
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {techCategories[activeTab as keyof typeof techCategories].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCategories[activeTab as keyof typeof techCategories].features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">✨</div>
                <h4 className="text-lg font-semibold mb-2">{feature}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Try Interactive Demo</h3>
          <p className="text-xl opacity-90 mb-8">
            Experience the power of our revolutionary technologies through hands-on demonstrations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Launch Interactive Demo
            </button>
            <button className="border border-white text-white px-12 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;