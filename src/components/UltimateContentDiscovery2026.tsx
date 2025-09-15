"use client";
import React{ useState } from 'react';
import Link from 'next/link';

const UltimateContentDiscovery2026 = () => {
  const [activeCategorysetActiveCategory] = useState('all');

  const categories = [
    { id: ''all', 'name: 'All 'Content', 'icon: '🌟' },
    { id: ''quantum', 'name: 'Quantum 'AI', 'icon: '⚡' },
    { id: ''neural', 'name: 'Neural 'Interfaces', 'icon: '🧠' },
    { id: ''autonomous', 'name: 'Autonomous 'Systems', 'icon: '🤖' },
    { id: ''analytics', 'name: ''Analytics', 'icon: '📊' },
    { id: ''edge', 'name: 'Edge 'Computing', 'icon: '💻' }
  ];

  const contentItems = [
    {
      title: "Quantum AI Breakthrough 2026",
      description: "Revolutionary quantum computing integration with artificial intelligence for unprecedented problem-solving capabilities.",
      category: "quantum",
      href: "/quantum-ai-2026-breakthrough",
      featured: true,
      image: "🧠⚡",
      readTime: "8 min read"
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that enable seamless human-AI collaboration and enhanced cognitive abilities.",
      category: "neural",
      href: "/neural-interface-revolution-2026",
      featured: true,
      image: "🔗🧠",
      readTime: "12 min read"
    },
    {
      title: "Autonomous Business Systems",
      description: "Self-managing AI systems that handle complex business operations with minimal human intervention.",
      category: "autonomous",
      href: "/autonomous-business-systems-2026",
      featured: false,
      image: "🏢🤖",
      readTime: "10 min read"
    },
    {
      title: "Advanced Predictive Analytics",
      description: "Next-generation analytics powered by quantum algorithms for accurate future predictions.",
      category: "analytics",
      href: "/advanced-predictive-analytics-2026",
      featured: true,
      image: "📊🔮",
      readTime: "6 min read"
    },
    {
      title: "Edge Computing Revolution",
      description: "Ultra-fast edge computing solutions that bring AI processing closer to data sources.",
      category: "edge",
      href: "/edge-computing-revolution-2026",
      featured: false,
      image: "⚡💻",
      readTime: "7 min read"
    },
    {
      title: "Synthetic Intelligence Networks",
      description: "Distributed AI networks that create emergent intelligence beyond individual system capabilities.",
      category: "quantum",
      href: "/synthetic-intelligence-2026",
      featured: true,
      image: "🌐🧠",
      readTime: "15 min read"
    },
    {
      title: "Quantum Neural Processing",
      description: "Combining quantum computing with neural networks for exponential processing power and learning capabilities.",
      category: "quantum",
      href: "/quantum-neural-processing-2026",
      featured: false,
      image: "🧠⚡",
      readTime: "9 min read"
    },
    {
      title: "Autonomous AI Agents",
      description: "Self-directed AI agents that can independently complete complex tasks and make strategic decisions.",
      category: "autonomous",
      href: "/autonomous-ai-agents-2026",
      featured: false,
      image: "🤖🎯",
      readTime: "11 min read"
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ultimate Content Discovery
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              2026 Edition
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the most comprehensive collection of AI technologiesbreakthrough innovations
            and future-ready solutions curated for 2026 and beyond.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600 border border-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((itemindex) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {item.featured && (
                <div className="absolute -top-3 left-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold z-10">
                  ⭐ FEATURED
                </div>
              )}
              
              <div className="p-8">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-purple-600 font-semibold">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <Link
                  href={item.href}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors group-hover:translate-x-1 transform duration-200"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-1 rounded-2xl inline-block">
            <Link
              href="/ai-2026-revolutionary-content"
              className="block bg-white text-gray-900 px-12 py-6 rounded-xl font-bold text-xl hover:bg-gray-50 transition-colors"
            >
              🚀 Explore All 2026 Content
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentDiscovery2026;