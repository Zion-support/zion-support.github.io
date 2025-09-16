"use client";
'use client';

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const InteractiveContentDiscovery2026 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'ai-revolution', name: 'AI Revolution', icon: '🤖' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'neural-interfaces', name: 'Neural Interfaces', icon: '🧠' },
    { id: 'automation', name: 'Automation', icon: '⚡' },
    { id: 'analytics', name: 'Analytics', icon: '📊' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'Neural Superintelligence Framework',
      description: 'Advanced AI systems with human-level cognitive capabilities',
      category: 'ai-revolution',
      tags: ['AI', 'Neural Networks', 'Cognitive Computing'],
      readTime: '8 min read',
      difficulty: 'Advanced',
      rating: 4.9,
      image: '🧠'
    },
    {
      id: 2,
      title: 'Quantum-Neural Fusion Technology',
      description: 'Revolutionary combination of quantum computing and neural networks',
      category: 'quantum-computing',
      tags: ['Quantum', 'Neural Networks', 'Fusion'],
      readTime: '12 min read',
      difficulty: 'Expert',
      rating: 4.8,
      image: '⚛️'
    },
    {
      id: 3,
      title: 'Autonomous Business Operations',
      description: 'Self-managing business systems powered by AI',
      category: 'automation',
      tags: ['Automation', 'Business', 'AI'],
      readTime: '6 min read',
      difficulty: 'Intermediate',
      rating: 4.7,
      image: '🤖'
    },
    {
      id: 4,
      title: 'Neural Interface Development',
      description: 'Direct brain-computer interfaces for enhanced productivity',
      category: 'neural-interfaces',
      tags: ['Neural Interface', 'BCI', 'Productivity'],
      readTime: '10 min read',
      difficulty: 'Advanced',
      rating: 4.9,
      image: '🎯'
    },
    {
      id: 5,
      title: 'Advanced Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics',
      category: 'analytics',
      tags: ['Analytics', 'BI', 'Predictive'],
      readTime: '5 min read',
      difficulty: 'Beginner',
      rating: 4.6,
      image: '📊'
    },
    {
      id: 6,
      title: 'Quantum Security Protocols',
      description: 'Unbreakable encryption for enterprise data protection',
      category: 'quantum-computing',
      tags: ['Security', 'Quantum', 'Encryption'],
      readTime: '7 min read',
      difficulty: 'Advanced',
      rating: 4.8,
      image: '🔐'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`py-20 bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔍 INTERACTIVE DISCOVERY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Amazing Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive library of AI technologies, quantum computing breakthroughs, 
            and neural interface innovations with our interactive discovery tool.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search Bar */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Content
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for technologies, concepts, or topics..."
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400">🔍</span>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{item.image}</div>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm font-medium text-gray-600">{item.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{item.readTime}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                    item.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    item.difficulty === 'Advanced' ? 'bg-orange-100 text-orange-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {item.difficulty}
                  </span>
                </div>
                
                <a
                  href={`/content/${item.id}`}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center block"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search terms or category filter</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want More Content?</h3>
            <p className="text-lg mb-6 opacity-90">
              Subscribe to our newsletter for the latest AI breakthroughs and exclusive content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery2026;