import React, { useState } from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = {
    all: {
      name: 'All Content',
      icon: '🌟',
      color: 'from-purple-600 to-pink-600'
    },
    ai: {
      name: 'AI & Machine Learning',
      icon: '🧠',
      color: 'from-indigo-600 to-purple-600'
    },
    quantum: {
      name: 'Quantum Computing',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600'
    },
    holographic: {
      name: 'Holographic Reality',
      icon: '👁️',
      color: 'from-purple-600 to-pink-600'
    },
    metaverse: {
      name: 'Metaverse & VR',
      icon: '🌐',
      color: 'from-blue-600 to-purple-600'
    },
    green: {
      name: 'Green Technology',
      icon: '🌱',
      color: 'from-green-600 to-emerald-600'
    },
    security: {
      name: 'Cybersecurity',
      icon: '🛡️',
      color: 'from-red-600 to-orange-600'
    }
  };

  const contentItems = [
    {
      id: 'ai-breakthrough',
      title: 'AI Revolutionary Breakthrough 2026',
      description: 'Experience the most significant AI breakthroughs reshaping industries with synthetic consciousness and quantum AI fusion.',
      category: 'ai',
      icon: '🧠',
      link: '/pages/AIRevolutionaryBreakthrough2026',
      featured: true,
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      id: 'quantum-revolution',
      title: 'Quantum Computing Revolution 2026',
      description: 'Revolutionary quantum computing solutions with exponential processing power and unprecedented capabilities.',
      category: 'quantum',
      icon: '⚡',
      link: '/pages/QuantumComputingRevolution2026',
      featured: true,
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Revolution 2026',
      description: 'Direct brain-computer interfaces for enhanced human capabilities and seamless human-AI integration.',
      category: 'ai',
      icon: '🧬',
      link: '/pages/NeuralInterfaceRevolution2026',
      featured: true,
      gradient: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'holographic-reality',
      title: 'Advanced Holographic Reality 2026',
      description: 'Revolutionary holographic technology that blurs the line between digital and physical reality.',
      category: 'holographic',
      icon: '👁️',
      link: '/pages/AdvancedHolographicReality2026',
      featured: true,
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 'metaverse-solutions',
      title: 'Advanced Metaverse Solutions 2026',
      description: 'Next-generation virtual worlds with persistent environments, digital avatars, and immersive experiences.',
      category: 'metaverse',
      icon: '🌐',
      link: '/pages/AdvancedMetaverseSolutions2026',
      featured: true,
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      id: 'green-tech',
      title: 'Advanced Green Tech Revolution 2026',
      description: 'Leading the sustainable future with revolutionary green technologies combating climate change.',
      category: 'green',
      icon: '🌱',
      link: '/pages/AdvancedGreenTechRevolution2026',
      featured: true,
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      id: 'cybersecurity',
      title: 'Advanced Cybersecurity Fortress 2026',
      description: 'Next-generation cybersecurity solutions powered by AI, quantum encryption, and zero-trust architecture.',
      category: 'security',
      icon: '🛡️',
      link: '/pages/AdvancedCybersecurityFortress2026',
      featured: true,
      gradient: 'from-red-600 to-orange-600'
    },
    {
      id: 'biotech-revolution',
      title: 'Advanced Biotech Revolution 2026',
      description: 'Revolutionary biotechnology solutions transforming healthcare and human enhancement.',
      category: 'ai',
      icon: '🧬',
      link: '/pages/AdvancedBiotechRevolution2026',
      featured: false,
      gradient: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'space-tech',
      title: 'Space Tech Innovation 2026',
      description: 'Revolutionary space technologies enabling interstellar travel and colonization.',
      category: 'quantum',
      icon: '🚀',
      link: '/pages/SpaceTechInnovation2026',
      featured: false,
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      id: 'advanced-robotics',
      title: 'Advanced Robotics 2026',
      description: 'Revolutionary robotics systems transforming industries and human-robot collaboration.',
      category: 'ai',
      icon: '🤖',
      link: '/pages/AdvancedRobotics2026',
      featured: false,
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const featuredContent = contentItems.filter(item => item.featured);

  return (
    <div className="py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
          🚀 ULTIMATE 2026 CONTENT SHOWCASE
        </div>
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Revolutionary Technology Content
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Explore the most advanced technology content featuring AI breakthroughs, quantum computing, holographic reality, metaverse solutions, green technology, and cybersecurity innovations.
        </p>
      </div>

      {/* Featured Content Banner */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 mb-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-4xl animate-bounce">⭐</span>
            <h3 className="text-4xl font-bold">FEATURED REVOLUTIONARY CONTENT</h3>
            <span className="text-4xl animate-bounce">⭐</span>
          </div>
          <p className="text-2xl opacity-95 mb-8 max-w-6xl mx-auto">
            Discover the most cutting-edge technology content that's shaping the future of humanity
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
            {featuredContent.slice(0, 6).map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg"
              >
                {item.icon} {item.title.split(' ')[0]} {item.title.split(' ')[1]} →
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(contentCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === key
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredContent.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden ${
              item.featured ? 'ring-4 ring-purple-500 ring-opacity-50' : ''
            }`}
          >
            <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{item.icon}</span>
                {item.featured && (
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                {item.description}
              </p>
              <a
                href={item.link}
                className={`inline-block bg-gradient-to-r ${item.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 w-full text-center`}
              >
                Explore Technology →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
        <h3 className="text-4xl font-bold mb-6">
          Ready to Explore the Future?
        </h3>
        <p className="text-xl mb-8 opacity-90">
          Dive deep into revolutionary technology content and discover how these innovations are transforming our world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            Start Exploring
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors">
            View All Content
          </button>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;