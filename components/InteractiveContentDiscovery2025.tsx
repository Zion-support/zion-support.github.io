import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const InteractiveContentDiscovery2025 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  const contentItems = [
    {
      id: 1,
      title: "Enterprise AI Transformation: 500% ROI in 6 Months",
      category: "case-study",
      type: "Case Study",
      description: "How a Fortune 500 company achieved unprecedented ROI through AI automation",
      readTime: "8 min read",
      featured: true,
      tags: ["AI Automation", "Enterprise", "ROI"],
      image: "🏢",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      id: 2,
      title: "From Idea to $100K ARR: Micro SaaS Success Story",
      category: "case-study",
      type: "Case Study",
      description: "Complete journey of building a profitable micro SaaS from scratch",
      readTime: "12 min read",
      featured: true,
      tags: ["Micro SaaS", "Startup", "Revenue"],
      image: "🚀",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      title: "AI Trends 2025: Revolutionary Breakthroughs",
      category: "blog",
      type: "Blog Post",
      description: "Comprehensive analysis of AI trends that will transform business in 2025",
      readTime: "15 min read",
      featured: true,
      tags: ["AI Trends", "2025", "Predictions"],
      image: "🔮",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      title: "Quantum-Neural Fusion: The Next Frontier",
      category: "blog",
      type: "Technical Deep Dive",
      description: "Exploring the convergence of quantum computing and neural networks",
      readTime: "20 min read",
      featured: false,
      tags: ["Quantum Computing", "Neural Networks", "Future Tech"],
      image: "⚛️",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      id: 5,
      title: "Autonomous Business Ecosystems Guide",
      category: "guide",
      type: "Implementation Guide",
      description: "Step-by-step guide to building self-managing business systems",
      readTime: "25 min read",
      featured: false,
      tags: ["Autonomous Systems", "Business Process", "Automation"],
      image: "🤖",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 6,
      title: "Synthetic Intelligence Revolution",
      category: "blog",
      type: "Future Vision",
      description: "Understanding the next evolution of artificial intelligence",
      readTime: "18 min read",
      featured: false,
      tags: ["Synthetic Intelligence", "AI Evolution", "Future"],
      image: "🧠",
      gradient: "from-teal-500 to-cyan-600"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', icon: '📚' },
    { id: 'case-study', name: 'Case Studies', icon: '📊' },
    { id: 'blog', name: 'Blog Posts', icon: '📝' },
    { id: 'guide', name: 'Guides', icon: '📖' }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            🔍 INTERACTIVE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our Revolutionary
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Content Library
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge case studies, AI insights, and implementation guides 
            that are transforming businesses worldwide.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold z-10">
                  ⭐ FEATURED
                </div>
              )}

              {/* Image/Icon */}
              <div className={`h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center text-6xl`}>
                {item.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-purple-600">{item.type}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={`/${item.category}/${item.id}`}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    hoveredItem === item.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Read More
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6">
              Get personalized recommendations and implementation strategies based on your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Personalized Consultation
              </Link>
              <Link
                href="/newsletter"
                className="border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Subscribe to Updates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery2025;