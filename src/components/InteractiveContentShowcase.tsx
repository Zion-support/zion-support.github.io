import React, { useState, useEffect } from 'react';

const InteractiveContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const contentTabs = [
    {
      id: 'revolutionary-2028',
      title: 'Revolutionary 2028',
      icon: '🌟',
      description: 'Breakthrough technologies including AI consciousness transfer, quantum-neural fusion, and interdimensional computing.',
      features: [
        'AI Consciousness Transfer',
        'Quantum-Neural Fusion',
        'Interdimensional Computing',
        'Holographic Reality Interface',
        'Neural Link Technology',
        'Temporal Computing'
      ],
      link: '/pages/RevolutionaryTechShowcase2028',
      gradient: 'from-fuchsia-500 to-violet-500'
    },
    {
      id: 'ultimate-2029',
      title: 'Ultimate 2029',
      icon: '🚀',
      description: 'The ultimate convergence of all technologies into a single, unified system that transcends all limitations.',
      features: [
        'Omniversal AI Consciousness',
        'Quantum Consciousness Transfer',
        'Dimensional Computing Matrix',
        'Temporal Manipulation Engine',
        'Holographic Universe Creator',
        'Neural Reality Interface'
      ],
      link: '/pages/UltimateTechRevolution2029',
      gradient: 'from-indigo-500 to-pink-500'
    },
    {
      id: 'ai-solutions-2029',
      title: 'AI Solutions 2029',
      icon: '🤖',
      description: 'Comprehensive AI ecosystem with advanced machine learning, neural networks, and consciousness AI capabilities.',
      features: [
        'Advanced ML Platform',
        'Deep Neural Networks',
        'Advanced NLP',
        'Computer Vision',
        'Predictive Analytics',
        'Autonomous AI Systems'
      ],
      link: '/pages/ComprehensiveAISolutions2029',
      gradient: 'from-purple-500 to-blue-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab((prev) => (prev + 1) % contentTabs.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentTabs.length]);

  const handleTabClick = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(index);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">🎯 Interactive Content Explorer</h2>
        <p className="text-xl text-gray-300">Explore our revolutionary content with interactive features</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {contentTabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(index)}
            className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
              activeTab === index
                ? `bg-gradient-to-r ${tab.gradient} text-white scale-105`
                : 'bg-white/20 text-gray-300 hover:bg-white/30'
            }`}
          >
            <span className="text-2xl mr-2">{tab.icon}</span>
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content Display */}
      <div className="relative">
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-6xl">{contentTabs[activeTab].icon}</span>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{contentTabs[activeTab].title}</h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  </div>
                </div>
                <p className="text-xl text-gray-300 mb-6">{contentTabs[activeTab].description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {contentTabs[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={contentTabs[activeTab].link}
                  className={`inline-block bg-gradient-to-r ${contentTabs[activeTab].gradient} px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform`}
                >
                  Explore {contentTabs[activeTab].title} →
                </a>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-2xl p-8 border border-purple-500/30">
                  <div className="text-center">
                    <div className="text-8xl mb-4 animate-pulse">{contentTabs[activeTab].icon}</div>
                    <h4 className="text-2xl font-bold mb-4">Interactive Preview</h4>
                    <p className="text-gray-300 mb-6">
                      Experience the revolutionary technology through our interactive showcase
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-400">99.9%</div>
                        <div className="text-xs text-gray-300">Success Rate</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400">10,000x</div>
                        <div className="text-xs text-gray-300">Performance</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-purple-400">∞</div>
                        <div className="text-xs text-gray-300">Scalability</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {contentTabs.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeTab === index ? 'bg-purple-400 scale-125' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveContentShowcase;