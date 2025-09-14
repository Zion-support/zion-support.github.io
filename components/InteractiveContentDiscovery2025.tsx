'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const InteractiveContentDiscovery2025 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
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
      title: 'AI Revolution 2025: The Future is Now',
      description: 'Discover how artificial intelligence is transforming industries and creating unprecedented opportunities.',
      category: 'ai',
      readTime: '8 min read',
      difficulty: 'Intermediate',
      tags: ['AI', 'Automation', 'Future Tech'],
      link: '/ai-2025',
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs',
      description: 'Explore the latest developments in quantum computing and their real-world applications.',
      category: 'quantum',
      readTime: '12 min read',
      difficulty: 'Advanced',
      tags: ['Quantum', 'Computing', 'Innovation'],
      link: '/quantum-computing-2026',
    },
    {
      id: 3,
      title: 'Neural Interface Revolution',
      description: 'Learn about brain-computer interfaces and the future of human-machine interaction.',
      category: 'neural',
      readTime: '10 min read',
      difficulty: 'Advanced',
      tags: ['Neural', 'Interface', 'BCI'],
      link: '/neural-interface-revolution-2026',
    },
    {
      id: 4,
      title: 'Autonomous Business Operations',
      description: 'How self-governing systems are revolutionizing business processes and operations.',
      category: 'autonomous',
      readTime: '15 min read',
      difficulty: 'Intermediate',
      tags: ['Autonomous', 'Business', 'Automation'],
      link: '/autonomous-business-systems-2026',
    },
    {
      id: 5,
      title: 'Digital Transformation Strategies',
      description: 'Comprehensive guide to transforming your business with cutting-edge technologies.',
      category: 'business',
      readTime: '20 min read',
      difficulty: 'Beginner',
      tags: ['Digital', 'Transformation', 'Strategy'],
      link: '/business-transformation-2026-ultimate',
    },
    {
      id: 6,
      title: 'Synthetic Intelligence Evolution',
      description: 'Understanding artificial general intelligence and its implications for society.',
      category: 'ai',
      readTime: '18 min read',
      difficulty: 'Advanced',
      tags: ['AGI', 'Synthetic', 'Intelligence'],
      link: '/synthetic-intelligence-2026',
    },
  ];

  const filteredContent = selectedCategory === 'all' 
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

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔍 DISCOVER CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Interactive Content Discovery
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive library of cutting-edge content, filtered by your interests 
            and expertise level. Find the perfect resources to accelerate your journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {filteredContent.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(item.difficulty)}`}>
                    {item.difficulty}
                  </span>
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={item.link}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600">Try selecting a different category to explore more content.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Our team of experts is constantly creating new content. Let us know what topics 
              you'd like to see covered, and we'll make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg shadow-lg"
              >
                Request Content
              </Link>
              <Link
                href="/newsletter"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
              >
                Subscribe for Updates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery2025;