import React, { useState } from 'react';

const InteractiveNewContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('revolutionary');

  const contentTabs = {
    revolutionary: {
      title: 'Revolutionary Tech 2026',
      icon: '🌟',
      description: 'Experience the most advanced technology showcase featuring AI consciousness, quantum supremacy, and neural interfaces',
      features: [
        'AI Consciousness & Self-Awareness',
        'Quantum Supremacy Computing',
        'Direct Neural Interfaces',
        'Autonomous AI Systems'
      ],
      link: '/pages/RevolutionaryTechShowcase2026'
    },
    innovation: {
      title: 'AI Innovation Hub',
      icon: '🤖',
      description: 'The world\'s most advanced AI innovation center with cutting-edge research and development',
      features: [
        'Cognitive AI Systems',
        'Quantum-Enhanced AI',
        'Autonomous AI Agents',
        'Creative AI Solutions'
      ],
      link: '/pages/AIInnovationHub2026'
    },
    ultimate: {
      title: 'Ultimate Revolution',
      icon: '⚡',
      description: 'The convergence of all revolutionary technologies creating the ultimate technological ecosystem',
      features: [
        'Consciousness Computing',
        'Quantum Neural Fusion',
        'Synthetic Intelligence',
        'Space Technology AI'
      ],
      link: '/pages/UltimateTechRevolution2026'
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Interactive New Content Showcase</h2>
        <p className="text-xl text-gray-600">Explore our revolutionary 2026 technology content with interactive features</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg p-2 shadow-lg">
          {Object.entries(contentTabs).map(([key, tab]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="text-xl mr-2">{tab.icon}</span>
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active Content Display */}
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-4xl">{contentTabs[activeTab as keyof typeof contentTabs].icon}</span>
              <h3 className="text-3xl font-bold text-gray-900">
                {contentTabs[activeTab as keyof typeof contentTabs].title}
              </h3>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              {contentTabs[activeTab as keyof typeof contentTabs].description}
            </p>
            <ul className="space-y-3 mb-6">
              {contentTabs[activeTab as keyof typeof contentTabs].features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={contentTabs[activeTab as keyof typeof contentTabs].link}
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Explore {contentTabs[activeTab as keyof typeof contentTabs].title} →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">🌟 Why This Content Matters</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🚀</span>
                <div>
                  <h5 className="font-semibold text-gray-900">Cutting-Edge Innovation</h5>
                  <p className="text-sm text-gray-600">Latest breakthroughs in AI, quantum computing, and neural interfaces</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h5 className="font-semibold text-gray-900">Future-Ready Solutions</h5>
                  <p className="text-sm text-gray-600">Technologies that will shape the next decade of innovation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🧠</span>
                <div>
                  <h5 className="font-semibold text-gray-900">Expert Insights</h5>
                  <p className="text-sm text-gray-600">Deep dive into revolutionary technologies with expert analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Quick Access to All New Content</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(contentTabs).map(([key, tab]) => (
            <a
              key={key}
              href={tab.link}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tab.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{tab.title}</h4>
              <p className="text-sm text-gray-600">{tab.description.substring(0, 80)}...</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveNewContentShowcase;