import React, { useState } from 'react';

const NewContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const contentCategories = {
    ai: {
      title: 'AI Innovation Hub 2026',
      description: 'Revolutionary AI technologies transforming industries',
      color: 'from-purple-600 to-pink-600',
      icon: '🧠',
      features: [
        'Autonomous AI Systems',
        'Neural Interface Technology',
        'Quantum AI Computing',
        'Generative AI 2.0'
      ]
    },
    space: {
      title: 'Space Technology AI',
      description: 'Pioneering space exploration with advanced AI',
      color: 'from-cyan-600 to-blue-600',
      icon: '🚀',
      features: [
        'Autonomous Spacecraft',
        'Space Colony AI',
        'Asteroid Mining AI',
        'Interplanetary Communication'
      ]
    },
    biotech: {
      title: 'Biotech AI Revolution',
      description: 'Transforming healthcare with intelligent biotechnology',
      color: 'from-green-600 to-emerald-600',
      icon: '🧬',
      features: [
        'Drug Discovery AI',
        'Genomic Analysis',
        'Protein Folding AI',
        'Personalized Medicine'
      ]
    },
    automation: {
      title: 'Business Automation',
      description: 'Comprehensive automation for modern businesses',
      color: 'from-indigo-600 to-purple-600',
      icon: '🤖',
      features: [
        'Sales Automation',
        'Marketing AI',
        'Operations Optimization',
        'Customer Service AI'
      ]
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BRAND NEW CONTENT • 2026
          </div>
          <h2 className="text-4xl font-bold mb-4">Revolutionary Technology Showcase 2026</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our groundbreaking new content covering AI innovation, 
            space technology, biotechnology, and business automation
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
            {Object.entries(contentCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Content */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-6xl mb-4 text-center">
              {contentCategories[activeTab as keyof typeof contentCategories].icon}
            </div>
            <h3 className="text-3xl font-bold mb-4 text-center">
              {contentCategories[activeTab as keyof typeof contentCategories].title}
            </h3>
            <p className="text-lg opacity-90 mb-6 text-center">
              {contentCategories[activeTab as keyof typeof contentCategories].description}
            </p>
            <ul className="space-y-3 mb-8">
              {contentCategories[activeTab as keyof typeof contentCategories].features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
                  <span className="text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full bg-gradient-to-r ${contentCategories[activeTab as keyof typeof contentCategories].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
              Explore {contentCategories[activeTab as keyof typeof contentCategories].title} →
            </button>
          </div>

          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-xl font-bold mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">50+</div>
                  <div className="text-sm text-gray-300">New Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">2026</div>
                  <div className="text-sm text-gray-300">Latest Innovations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">95%</div>
                  <div className="text-sm text-gray-300">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">24/7</div>
                  <div className="text-sm text-gray-300">AI Support</div>
                </div>
              </div>
            </div>

            {/* Featured Content */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-xl font-bold mb-4">Featured Content</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <div className="font-semibold">Space AI Missions</div>
                    <div className="text-sm text-gray-400">Autonomous space exploration</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-2xl">🧬</span>
                  <div>
                    <div className="font-semibold">Biotech Breakthroughs</div>
                    <div className="text-sm text-gray-400">Revolutionary healthcare AI</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <div className="font-semibold">Business Automation</div>
                    <div className="text-sm text-gray-400">Complete process optimization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore All Content →
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
              Download Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;