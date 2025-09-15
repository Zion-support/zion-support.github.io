import React, { useState, useEffect } from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const contentTabs = [
    {
      id: 'ai-trends',
      title: 'AI Trends 2026',
      icon: '🤖',
      color: 'from-blue-500 to-cyan-500',
      content: {
        title: 'Revolutionary AI Breakthroughs',
        description: 'Discover the latest AI trends that are reshaping industries and transforming how we work and live.',
        features: [
          'Quantum-Enhanced Machine Learning',
          'Neural Interface Technology',
          'Autonomous AI Systems',
          'Emotional AI and Human-AI Collaboration'
        ],
        stats: [
          { label: 'AI Adoption Rate', value: '87%', color: 'text-blue-600' },
          { label: 'Productivity Increase', value: '340%', color: 'text-green-600' },
          { label: 'Cost Reduction', value: '52%', color: 'text-purple-600' }
        ]
      }
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: '⚛️',
      color: 'from-purple-500 to-pink-500',
      content: {
        title: 'Quantum Revolution 2026',
        description: 'Experience the power of quantum computing and its transformative impact on cryptography, drug discovery, and optimization.',
        features: [
          '1000+ Qubit Processors',
          'Quantum Error Correction',
          'Quantum Internet Infrastructure',
          'Quantum Machine Learning'
        ],
        stats: [
          { label: 'Processing Speed', value: '1000x', color: 'text-purple-600' },
          { label: 'Security Level', value: '99.9%', color: 'text-pink-600' },
          { label: 'Energy Efficiency', value: '85%', color: 'text-indigo-600' }
        ]
      }
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interfaces',
      icon: '🧠',
      color: 'from-green-500 to-teal-500',
      content: {
        title: 'Brain-Computer Integration',
        description: 'Explore the future of human-AI interaction through advanced neural interface technology.',
        features: [
          'Thought-to-Text Communication',
          'Enhanced Learning Systems',
          'Emotional AI Recognition',
          'Memory Augmentation'
        ],
        stats: [
          { label: 'Accuracy Rate', value: '95%', color: 'text-green-600' },
          { label: 'Response Time', value: '200ms', color: 'text-teal-600' },
          { label: 'User Satisfaction', value: '92%', color: 'text-emerald-600' }
        ]
      }
    },
    {
      id: 'space-tech',
      title: 'Space Technology',
      icon: '🚀',
      color: 'from-orange-500 to-red-500',
      content: {
        title: 'Next-Gen Space Exploration',
        description: 'Advancements in space technology are opening new frontiers in exploration and satellite communications.',
        features: [
          'Quantum Space Sensors',
          'Autonomous Space Missions',
          'Satellite Communication Networks',
          'Dark Matter Detection'
        ],
        stats: [
          { label: 'Mission Success', value: '98%', color: 'text-orange-600' },
          { label: 'Data Accuracy', value: '99.7%', color: 'text-red-600' },
          { label: 'Cost Reduction', value: '67%', color: 'text-yellow-600' }
        ]
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % contentTabs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTabClick = (index: number) => {
    setIsAnimating(true);
    setActiveTab(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-4">
            🌟 INTERACTIVE SHOWCASE
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Revolutionary Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deep into the cutting-edge technologies that are shaping our future. 
            Click on different tabs to explore various innovations.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {contentTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg transform scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                <span className="text-xl mr-2">{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>

          {/* Content Display */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
              {/* Hero Section */}
              <div className={`bg-gradient-to-r ${contentTabs[activeTab].color} p-8 text-white`}>
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-6">
                    {contentTabs[activeTab].icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">
                      {contentTabs[activeTab].content.title}
                    </h3>
                    <p className="text-xl opacity-90">
                      {contentTabs[activeTab].content.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Features and Stats */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Features */}
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h4>
                    <div className="space-y-4">
                      {contentTabs[activeTab].content.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className={`w-8 h-8 bg-gradient-to-r ${contentTabs[activeTab].color} rounded-full flex items-center justify-center text-white text-sm font-bold mr-4`}>
                            {index + 1}
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Performance Metrics</h4>
                    <div className="space-y-6">
                      {contentTabs[activeTab].content.stats.map((stat, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">{stat.label}</span>
                            <span className={`text-3xl font-bold ${stat.color}`}>
                              {stat.value}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div 
                              className={`h-2 bg-gradient-to-r ${contentTabs[activeTab].color} rounded-full transition-all duration-1000`}
                              style={{ width: `${Math.min(100, (index + 1) * 25)}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <button className={`bg-gradient-to-r ${contentTabs[activeTab].color} text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                    Learn More →
                  </button>
                  <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300">
                    View Demo
                  </button>
                  <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {contentTabs.map((tab, index) => (
              <div 
                key={tab.id}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  activeTab === index ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => handleTabClick(index)}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${tab.color} rounded-full flex items-center justify-center text-white text-2xl mb-4`}>
                  {tab.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{tab.title}</h4>
                <p className="text-gray-600 text-sm">
                  {tab.content.description.substring(0, 100)}...
                </p>
                <div className="mt-4 text-sm text-gray-500">
                  {tab.content.features.length} key features
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2026;