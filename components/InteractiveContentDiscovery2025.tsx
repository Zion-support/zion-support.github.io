'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const InteractiveContentDiscovery2025 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', label: 'All Content', icon: '🌟' },
    { id: 'ai', label: 'AI & Machine Learning', icon: '🤖' },
    { id: 'quantum', label: 'Quantum Computing', icon: '⚛️' },
    { id: 'neural', label: 'Neural Interfaces', icon: '🧠' },
    { id: 'autonomous', label: 'Autonomous Systems', icon: '🚀' },
    { id: 'business', label: 'Business Solutions', icon: '💼' },
  ];

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
      gradient: "from-blue-500 to-cyan-600",
      link: '/case-studies/enterprise-ai-transformation'
    },
    {
      id: 2,
      title: 'AI Revolution 2025: The Future is Now',
      description: 'Discover how artificial intelligence is transforming industries and creating unprecedented opportunities.',
      category: 'ai',
      readTime: '8 min read',
      difficulty: 'Intermediate',
      tags: ['AI', 'Automation', 'Future Tech'],
      link: '/ai-2025',
      featured: true,
      type: "Blog Post",
      image: "🤖",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "Quantum Computing Breakthrough: 1000x Faster Processing",
      category: "quantum",
      type: "Research Paper",
      description: "Revolutionary quantum algorithms that are reshaping computational possibilities",
      readTime: "12 min read",
      featured: true,
      tags: ["Quantum Computing", "Algorithms", "Performance"],
      image: "⚛️",
      gradient: "from-indigo-500 to-purple-600",
      link: '/research/quantum-computing-breakthrough'
    },
    {
      id: 4,
      title: 'Neural Interface Revolution: Mind-Computer Integration',
      description: 'Explore the latest developments in brain-computer interfaces and their potential applications.',
      category: 'neural',
      readTime: '10 min read',
      difficulty: 'Advanced',
      tags: ['Neural Interfaces', 'BCI', 'Innovation'],
      link: '/neural-interfaces',
      featured: false,
      type: "Technical Guide",
      image: "🧠",
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 5,
      title: "Autonomous Business Systems: The Future of Operations",
      category: "autonomous",
      type: "Implementation Guide",
      description: "Complete guide to implementing autonomous business systems for maximum efficiency",
      readTime: "15 min read",
      featured: true,
      tags: ["Autonomous Systems", "Business Automation", "Efficiency"],
      image: "🚀",
      gradient: "from-orange-500 to-red-600",
      link: '/guides/autonomous-business-systems'
    },
    {
      id: 6,
      title: 'Business Intelligence Revolution: Data-Driven Decisions',
      description: 'Learn how advanced analytics and AI are transforming business decision-making processes.',
      category: 'business',
      readTime: '6 min read',
      difficulty: 'Beginner',
      tags: ['Business Intelligence', 'Analytics', 'Decision Making'],
      link: '/business-intelligence',
      featured: false,
      type: "Business Guide",
      image: "💼",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Case Study': return 'bg-blue-100 text-blue-800';
      case 'Blog Post': return 'bg-green-100 text-green-800';
      case 'Research Paper': return 'bg-purple-100 text-purple-800';
      case 'Technical Guide': return 'bg-orange-100 text-orange-800';
      case 'Implementation Guide': return 'bg-indigo-100 text-indigo-800';
      case 'Business Guide': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className={`py-16 bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🔍 INTERACTIVE CONTENT DISCOVERY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge insights, breakthrough technologies, and transformative solutions 
            that are reshaping the future of business and technology.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-300'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredItem === item.id ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{item.image}</span>
                    <div className="flex flex-col">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(item.type)}`}>
                        {item.type}
                      </span>
                      {item.featured && (
                        <span className="mt-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                          ⭐ FEATURED
                        </span>
                      )}
                    </div>
                  </div>
                  {item.difficulty && (
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                      {item.difficulty}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{item.readTime}</span>
                  <span className="capitalize">{item.category}</span>
                </div>
              </div>

              {/* Gradient Bottom Border */}
              <div className={`h-1 bg-gradient-to-r ${item.gradient}`}></div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <Link
                  href={item.link}
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${item.gradient} text-white hover:shadow-lg transform hover:scale-105`}
                >
                  Explore Content
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of companies already using our revolutionary technologies 
              to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery2025;