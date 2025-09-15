import React, { useState } from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const contentCategories = {
    all: {
      title: 'All Revolutionary Content',
      icon: '🌟',
      color: 'from-purple-600 to-pink-600'
    },
    ai: {
      title: 'AI & Machine Learning',
      icon: '🧠',
      color: 'from-blue-600 to-indigo-600'
    },
    biotech: {
      title: 'Biotechnology',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600'
    },
    space: {
      title: 'Space Technology',
      icon: '🚀',
      color: 'from-cyan-600 to-blue-600'
    },
    robotics: {
      title: 'Robotics',
      icon: '🤖',
      color: 'from-gray-600 to-slate-600'
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚡',
      color: 'from-violet-600 to-purple-600'
    }
  };

  const contentItems = [
    {
      id: 'biotech-revolution',
      title: 'Advanced Biotech Revolution 2026',
      description: 'Revolutionary biotechnology solutions reshaping healthcare, agriculture, and life sciences',
      category: 'biotech',
      icon: '🧬',
      link: '/pages/AdvancedBiotechRevolution2026',
      gradient: 'from-emerald-600/30 to-teal-600/30',
      border: 'border-emerald-400/30',
      textColor: 'text-emerald-100',
      features: ['AI-Powered Drug Discovery', 'Precision Gene Editing', 'Synthetic Biology', 'Precision Medicine']
    },
    {
      id: 'space-revolution',
      title: 'Space Technology Revolution 2026',
      description: 'Cutting-edge space technology solutions for exploration, communications, and space-based services',
      category: 'space',
      icon: '🚀',
      link: '/pages/SpaceTechRevolution2026',
      gradient: 'from-blue-600/30 to-indigo-600/30',
      border: 'border-blue-400/30',
      textColor: 'text-blue-100',
      features: ['AI-Powered Satellites', 'Quantum Communications', 'Space Manufacturing', 'Earth Observation']
    },
    {
      id: 'robotics-revolution',
      title: 'Advanced Robotics Revolution 2026',
      description: 'Intelligent robotics solutions transforming manufacturing, healthcare, and autonomous systems',
      category: 'robotics',
      icon: '🤖',
      link: '/pages/AdvancedRoboticsRevolution2026',
      gradient: 'from-gray-600/30 to-slate-600/30',
      border: 'border-gray-400/30',
      textColor: 'text-gray-100',
      features: ['AI-Powered Humanoid Robots', 'Smart Manufacturing', 'Medical Robotics', 'Autonomous Vehicles']
    },
    {
      id: 'ai-revolution',
      title: 'Next-Gen AI Revolution 2026',
      description: 'Revolutionary AI technologies reshaping industries with autonomous agents and synthetic intelligence',
      category: 'ai',
      icon: '🧠',
      link: '/pages/NextGenAIRevolution2026',
      gradient: 'from-purple-600/30 to-pink-600/30',
      border: 'border-purple-400/30',
      textColor: 'text-purple-100',
      features: ['Autonomous AI Agents', 'Quantum-Enhanced AI', 'Synthetic Intelligence', 'Edge AI Networks']
    },
    {
      id: 'quantum-revolution',
      title: 'Quantum Computing Revolution 2026',
      description: 'Breakthrough quantum computing solutions with exponential processing power and advanced applications',
      category: 'quantum',
      icon: '⚡',
      link: '/pages/QuantumComputingRevolution2026',
      gradient: 'from-violet-600/30 to-purple-600/30',
      border: 'border-violet-400/30',
      textColor: 'text-violet-100',
      features: ['Exponential Speed', 'Quantum Cryptography', 'Molecular Simulation', 'Advanced Optimization']
    },
    {
      id: 'neural-revolution',
      title: 'Neural Interface Revolution 2026',
      description: 'Direct brain-computer interfaces enabling thought-controlled devices and neural communication',
      category: 'ai',
      icon: '🧬',
      link: '/pages/NeuralInterfaceRevolution2026',
      gradient: 'from-emerald-600/30 to-teal-600/30',
      border: 'border-emerald-400/30',
      textColor: 'text-emerald-100',
      features: ['Non-Invasive BCI', 'Thought Control', 'Neural Feedback', 'Mind-Machine Interface']
    }
  ];

  const filteredContent = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeTab);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT SHOWCASE • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary Technology Experience</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our comprehensive collection of cutting-edge technology solutions that are reshaping the future
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/20 text-white/80 hover:bg-white/30'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-xl p-8 border ${item.border} hover:scale-105 transition-all duration-300`}
            >
              <div className="text-5xl mb-4 text-center">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
              <p className={`${item.textColor} mb-6 text-center`}>
                {item.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-bold mb-3 text-center">Key Features:</h4>
                <ul className={`${item.textColor} space-y-2 text-sm`}>
                  {item.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
              
              <a
                href={item.link}
                className="block w-full bg-white text-gray-800 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
              >
                Explore {item.title.split(' ')[0]} →
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
            Join thousands of innovators who are already transforming their industries with our revolutionary technology solutions
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey →
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;