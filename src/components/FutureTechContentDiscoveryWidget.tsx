"use client";
import React{ useState } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function FutureTechContentDiscoveryWidget() {
  const [activeCategorysetActiveCategory] = useState('all');

  const contentCategories = {
    all: {
      name: 'All Future Tech',
      icon: '🚀',
      color: 'from-purple-600 to-blue-600'
    },
    singularity: {
      name: 'Singularity 2035',
      icon: '🧠',
      color: 'from-purple-600 to-indigo-600'
    },
    quantum: {
      name: 'Quantum AI',
      icon: '⚛️',
      color: 'from-cyan-600 to-emerald-600'
    },
    neural: {
      name: 'Neural Interfaces',
      icon: '🔗',
      color: 'from-violet-600 to-fuchsia-600'
    }
  };

  const futureTechContent = [
    {
      id: 1,
      title: 'AI 2035: The Singularity Breakthrough',
      description: 'Witness the most profound technological breakthrough in human history as artificial intelligence achieves consciousness parity.',
      category: 'singularity',
      url: '/ai-2035-singularity-breakthrough',
      image: '🧠',
      features: ['Consciousness 'Evolution', 'Neural 'Integration', 'Quantum Consciousness'],
      gradient: 'from-purple-800 to-indigo-800'
    },
    {
      id: 2,
      title: 'Quantum AI Fusion 2030',
      description: 'Experience the convergence of quantum computing and artificial intelligence that will unlock unprecedented computational power.',
      category: 'quantum',
      url: '/quantum-ai-fusion-2030',
      image: '⚛️',
      features: ['Quantum 'Supremacy', 'AI 'Evolution', 'Future Computing'],
      gradient: 'from-cyan-800 to-emerald-800'
    },
    {
      id: 3,
      title: 'Neural Interface Revolution 2035',
      description: 'Breakthrough neural interface technology enabling seamless communication between human consciousness and AI systems.',
      category: 'neural',
      url: '/neural-interface-revolution-2035',
      image: '🔗',
      features: ['Neural 'Enhancement', 'Consciousness 'Bridge', 'Direct Thought Control'],
      gradient: 'from-violet-800 to-fuchsia-800'
    },
    {
      id: 4,
      title: 'AI 2026: Advanced Automation Revolution',
      description: 'Next-generation AI automation systems that will transform every industry and create unprecedented efficiency.',
      category: 'singularity',
      url: '/ai-2026-advanced-automation-revolution',
      image: '🤖',
      features: ['Autonomous 'Systems', 'Smart 'Automation', 'Industry Transformation'],
      gradient: 'from-blue-800 to-purple-800'
    },
    {
      id: 5,
      title: 'Quantum Computing Solutions 2026',
      description: 'Revolutionary quantum computing solutions that will solve complex problems in seconds that would take years.',
      category: 'quantum',
      url: '/quantum-computing-solutions-2026',
      image: '⚡',
      features: ['Quantum 'Processing', 'Complex Problem 'Solving', 'Exponential Speed'],
      gradient: 'from-teal-800 to-cyan-800'
    },
    {
      id: 6,
      title: 'Brain-Computer Interface 2030',
      description: 'Direct neural interfaces that will enable telepathic communication and enhanced cognitive abilities.',
      category: 'neural',
      url: '/brain-computer-interface-2030',
      image: '🧬',
      features: ['Telepathic 'Communication', 'Enhanced 'Cognition', 'Neural Enhancement'],
      gradient: 'from-purple-800 to-pink-800'
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? futureTechContent 
    : futureTechContent.filter(content => content.category === activeCategory);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold text-lg mb-6">
            🔮 FUTURE TECH CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Revolutionary Technologies
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Discover cutting-edge AIquantum computingand neural interface technologies that will reshape the future of humanity.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([keycategory]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className={`bg-gradient-to-br ${content.gradient} rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{content.image}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {content.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4">
                  {content.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {content.features.map((featureindex) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 text-white text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <a
                  href={content.url}
                  className="inline-block px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  🚀 Explore Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-800 to-blue-800 rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore the Future?
            </h3>
            <p className="text-purple-200 mb-6">
              Join thousands of innovators exploring the cutting-edge technologies that will define tomorrow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/ai-innovation-hub"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                🔬 Innovation Hub
              </a>
              <a
                href="/blog"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                📚 Latest Articles
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}