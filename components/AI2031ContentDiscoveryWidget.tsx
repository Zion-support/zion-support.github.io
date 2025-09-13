import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2031ContentDiscoveryWidget = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  const contentItems = [
    {
      id: 1,
      title: "AI 2031 Breakthrough Showcase",
      description: "Revolutionary technologies with 10,000%+ ROI potential",
      category: "showcase",
      link: "/ai-2031-breakthrough-showcase",
      badge: "BREAKTHROUGH",
      color: "from-red-500 to-pink-500",
      icon: "🚀",
      roi: "10,000%+",
      type: "Technology Showcase"
    },
    {
      id: 2,
      title: "15,000% ROI Quantum Case Study",
      description: "How Fortune 500 achieved unprecedented returns",
      category: "case-study",
      link: "/case-studies/ai-2031-quantum-breakthrough-15000-roi",
      badge: "CASE STUDY",
      color: "from-green-500 to-emerald-500",
      icon: "🏆",
      roi: "15,000%",
      type: "Success Story"
    },
    {
      id: 3,
      title: "AI 2031 Future Predictions",
      description: "Revolutionary predictions shaping the next decade",
      category: "blog",
      link: "/blog/ai-2031-future-predictions-breakthrough",
      badge: "PREDICTIONS",
      color: "from-purple-500 to-indigo-500",
      icon: "🔮",
      roi: "25,000%+",
      type: "Trend Analysis"
    },
    {
      id: 4,
      title: "Ultimate Implementation Guide",
      description: "Complete blueprint for AI 2031 deployment",
      category: "resource",
      link: "/resources/ai-2031-ultimate-implementation-master-guide",
      badge: "GUIDE",
      color: "from-blue-500 to-cyan-500",
      icon: "📚",
      roi: "Guaranteed",
      type: "Implementation"
    },
    {
      id: 5,
      title: "Quantum AI Processing",
      description: "1,000,000x faster processing with quantum computing",
      category: "technology",
      link: "/ai-2031-breakthrough-showcase#quantum",
      badge: "TECHNOLOGY",
      color: "from-indigo-500 to-purple-500",
      icon: "⚛️",
      roi: "20,000%",
      type: "Core Technology"
    },
    {
      id: 6,
      title: "Neural Interface Integration",
      description: "Direct brain-computer interfaces for instant control",
      category: "technology",
      link: "/ai-2031-breakthrough-showcase#neural",
      badge: "TECHNOLOGY",
      color: "from-teal-500 to-green-500",
      icon: "🧠",
      roi: "15,000%",
      type: "Core Technology"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'showcase', name: 'Showcases', count: contentItems.filter(item => item.category === 'showcase').length },
    { id: 'case-study', name: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'blog', name: 'Blog Posts', count: contentItems.filter(item => item.category === 'blog').length },
    { id: 'resource', name: 'Resources', count: contentItems.filter(item => item.category === 'resource').length },
    { id: 'technology', name: 'Technologies', count: contentItems.filter(item => item.category === 'technology').length }
  ];

  const filteredItems = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-6">
            🔍 AI 2031 CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Discover Breakthrough Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI 2031 breakthrough technologies, 
            case studies, and implementation guides designed to transform your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category.name}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`relative bg-gradient-to-br from-slate-800/50 to-purple-800/50 border border-purple-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group ${
                hoveredItem === item.id ? 'shadow-2xl shadow-purple-500/25' : ''
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Badge */}
              <div className="absolute -top-3 -right-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white`}>
                  {item.badge}
                </span>
              </div>

              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* ROI Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-gray-400 uppercase tracking-wide">
                  {item.type}
                </span>
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg px-3 py-1">
                  <span className="text-green-300 font-bold text-sm">
                    {item.roi} ROI
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <Link
                href={item.link}
                className={`block w-full text-center py-3 rounded-lg font-semibold bg-gradient-to-r ${item.color} hover:opacity-90 transition-all duration-300 transform group-hover:scale-105`}
              >
                Explore Content →
              </Link>

              {/* Hover Effect Overlay */}
              {hoveredItem === item.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 border border-purple-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of companies already achieving 10,000%+ ROI with AI 2031 technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/ai-2031-breakthrough-showcase"
                className="bg-transparent border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              >
                View All Technologies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2031ContentDiscoveryWidget;