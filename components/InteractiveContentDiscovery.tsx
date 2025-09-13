// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscovery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { id: 'all', name: 'All Solutions', icon: '🔍' },
    { id: 'ai', name: 'AI Solutions', icon: '🤖' },
    { id: 'automation', name: 'Automation', icon: '⚡' },
    { id: 'security', name: 'Cybersecurity', icon: '🛡️' },
    { id: 'cloud', name: 'Cloud Services', icon: '☁️' },
    { id: 'analytics', name: 'Analytics', icon: '📊' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI-Powered Content Hub 2026',
      description: 'Revolutionary content creation and management platform with AI-powered tools.',
      category: 'ai',
      url: '/ai-powered-content-hub-2026',
      image: '📝',
      tags: ['AI', 'Content', 'Management', 'Automation'],
      featured: true
    },
    {
      id: 2,
      title: 'AI Automation Solutions 2026',
      description: 'Transform your business with intelligent automation solutions that work 24/7.',
      category: 'automation',
      url: '/ai-automation-solutions-2026',
      image: '⚡',
      tags: ['Automation', 'AI', 'Productivity', 'ROI'],
      featured: true
    },
    {
      id: 3,
      title: 'Cybersecurity Solutions 2026',
      description: 'Advanced threat protection and security services powered by AI.',
      category: 'security',
      url: '/cybersecurity-solutions-2026',
      image: '🛡️',
      tags: ['Security', 'Threat Protection', 'Compliance', 'AI'],
      featured: true
    },
    {
      id: 4,
      title: 'Cloud Infrastructure Solutions',
      description: 'Scalable and secure cloud infrastructure for modern businesses.',
      category: 'cloud',
      url: '/cloud-infrastructure-solutions-2025',
      image: '☁️',
      tags: ['Cloud', 'Infrastructure', 'Scalability', 'Security']
    },
    {
      id: 5,
      title: 'Advanced Analytics Dashboard',
      description: 'Real-time analytics and insights for data-driven decision making.',
      category: 'analytics',
      url: '/advanced-analytics-dashboard',
      image: '📊',
      tags: ['Analytics', 'Dashboard', 'Insights', 'Data']
    },
    {
      id: 6,
      title: 'AI Tools & Utilities 2025',
      description: 'Comprehensive suite of AI-powered tools and utilities for businesses.',
      category: 'ai',
      url: '/ai-tools-utilities-2025',
      image: '🛠️',
      tags: ['AI Tools', 'Utilities', 'Productivity', 'Business']
    }
  ];

  const filteredItems = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Discover Our Solutions</h3>
      
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search solutions..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredItems.map(item => (
          <Link key={item.id} href={item.url} className="group">
            <div className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
              item.featured 
                ? 'border-blue-200 bg-blue-50 hover:border-blue-300' 
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{item.image}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                      {item.title}
                    </h4>
                    {item.featured && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🔍</div>
          <h4 className="text-lg font-semibold text-gray-600 mb-2">No solutions found</h4>
          <p className="text-gray-500">Try adjusting your search terms or category filter</p>
        </div>
      )}

      {/* View All Button */}
      <div className="mt-8 text-center">
        <Link 
          href="/solutions" 
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          View All Solutions
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}