'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2026ContentShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'automation', name: 'Automation', icon: '🤖' },
    { id: 'neural', name: 'Neural Tech', icon: '🧠' },
    { id: 'quantum', name: 'Quantum AI', icon: '⚡' },
    { id: 'predictions', name: 'Predictions', icon: '🔮' }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI 2026 Neural Interface Revolution",
      description: "Revolutionary brain-computer interfaces that enable direct neural control of digital systems",
      category: 'neural',
      image: "🧠",
      link: "/ai-2026-neural-interface-revolution",
      featured: true,
      roi: "12,000%",
      tags: ["Neural Interface", "BCI", "Revolutionary"]
    },
    {
      id: 2,
      title: "Quantum Neural Fusion Breakthrough",
      description: "Quantum-enhanced AI systems that process information at unprecedented speeds",
      category: 'quantum',
      image: "⚡",
      link: "/ai-2026-quantum-neural-fusion-revolution",
      featured: true,
      roi: "15,000%",
      tags: ["Quantum AI", "Fusion", "Breakthrough"]
    },
    {
      id: 3,
      title: "Next-Generation Business Automation",
      description: "Autonomous AI systems that adapt and optimize business processes in real-time",
      category: 'automation',
      image: "🚀",
      link: "/ai-2026-next-generation-business-automation",
      featured: false,
      roi: "10,000%",
      tags: ["Automation", "Business", "AI"]
    },
    {
      id: 4,
      title: "AI 2026 Future Predictions",
      description: "Advanced forecasting systems with 99.9% accuracy for strategic planning",
      category: 'predictions',
      image: "🔮",
      link: "/ai-2026-future-predictions-breakthrough",
      featured: true,
      roi: "18,000%",
      tags: ["Predictions", "Forecasting", "Future"]
    },
    {
      id: 5,
      title: "Advanced Neural Synthesis 2030",
      description: "Next-generation AI that synthesizes human-like cognitive abilities",
      category: 'neural',
      image: "🧬",
      link: "/ai-2030-advanced-neural-synthesis",
      featured: false,
      roi: "20,000%",
      tags: ["Neural", "Synthesis", "Cognitive"]
    },
    {
      id: 6,
      title: "Quantum Computing Solutions 2030",
      description: "Revolutionary quantum computing applications for enterprise solutions",
      category: 'quantum',
      image: "🌌",
      link: "/quantum-computing-solutions-breakthrough-2030",
      featured: false,
      roi: "25,000%",
      tags: ["Quantum", "Computing", "Enterprise"]
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <div className={`py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI 2026 Content
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI breakthrough content, 
            revolutionary technologies, and future-ready solutions
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
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                item.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
            >
              {item.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ⭐ Featured
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">{item.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold text-green-600">{item.roi} ROI</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </div>
                </div>
                
                <Link
                  href={item.link}
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-400 hover:to-purple-400 transition-all duration-300 transform group-hover:scale-105"
                >
                  Explore Content →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{contentItems.length}+</div>
              <div className="text-gray-600">Content Pieces</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">25,000%</div>
              <div className="text-gray-600">Max ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-2">99.9%</div>
              <div className="text-gray-600">Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-2">24/7</div>
              <div className="text-gray-600">Availability</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/ai-2026-future-predictions-breakthrough"
            className="inline-block px-12 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-xl rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Explore All AI 2026 Content →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AI2026ContentShowcase;