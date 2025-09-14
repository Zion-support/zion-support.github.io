import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const InteractiveContentDiscovery2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  const contentItems = [
    {
      id: 1,
      title: "AI 2025-2026 Content Revolution: 50,000% ROI Success",
      category: "case-study",
      type: "Case Study",
      description: "Fortune 100 media conglomerate achieves unprecedented ROI with AI content platform",
      image: "🚀",
      featured: true,
      metrics: "50,000% ROI"
    },
    {
      id: 2,
      title: "Ultimate Content Revolution Breakthrough Guide",
      category: "blog",
      type: "Blog Post",
      description: "Discover the latest AI technologies revolutionizing content creation",
      image: "🧠",
      featured: true,
      metrics: "500% Engagement"
    },
    {
      id: 3,
      title: "Quantum-Neural Content Generation Platform",
      category: "technology",
      type: "Technology",
      description: "Revolutionary platform combining quantum computing with neural networks",
      image: "⚡",
      featured: false,
      metrics: "1000x Faster"
    },
    {
      id: 4,
      title: "Autonomous Content Ecosystem Implementation",
      category: "solution",
      type: "Solution",
      description: "Self-evolving content platforms that adapt and improve automatically",
      image: "🤖",
      featured: false,
      metrics: "95% Cost Reduction"
    },
    {
      id: 5,
      title: "Neural Interface Content Creation",
      category: "innovation",
      type: "Innovation",
      description: "Direct thought-to-content creation using advanced neural interfaces",
      image: "🔮",
      featured: true,
      metrics: "Real-time"
    },
    {
      id: 6,
      title: "Multi-Modal Content Optimization",
      category: "technology",
      type: "Technology",
      description: "Advanced algorithms for optimizing content across all formats and platforms",
      image: "🎯",
      featured: false,
      metrics: "300% Improvement"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'case-study', name: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'blog', name: 'Blog Posts', count: contentItems.filter(item => item.category === 'blog').length },
    { id: 'technology', name: 'Technology', count: contentItems.filter(item => item.category === 'technology').length },
    { id: 'solution', name: 'Solutions', count: contentItems.filter(item => item.category === 'solution').length },
    { id: 'innovation', name: 'Innovations', count: contentItems.filter(item => item.category === 'innovation').length }
  ];

  const filteredItems = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            🔍 INTERACTIVE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Latest
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              AI Content Revolution
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge content, case studies, and breakthrough technologies that are transforming businesses worldwide.
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
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
              <span className="ml-2 px-2 py-1 bg-white bg-opacity-20 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                item.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold z-10">
                  ⭐ FEATURED
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Icon */}
                <div className="text-4xl mb-4">{item.image}</div>
                
                {/* Type Badge */}
                <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {item.type}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-semibold text-purple-600">
                    {item.metrics}
                  </div>
                  <div className="text-xs text-gray-500">
                    {item.category.toUpperCase()}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/${item.category}/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-all duration-300 ${
                    hoveredItem === item.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {item.type === 'Case Study' ? 'View Case Study' : 
                   item.type === 'Blog Post' ? 'Read Article' : 
                   'Learn More'}
                </Link>
              </div>

              {/* Hover Effect Overlay */}
              {hoveredItem === item.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-5 pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Let us help you discover the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Custom Recommendations
            </Link>
            <Link
              href="/services"
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery2025;