import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '📚', count: 150 },
    { id: 'ai-2025', name: 'AI 2025', icon: '🤖', count: 45 },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', count: 30 },
    { id: 'automation', name: 'Automation', icon: '⚡', count: 35 },
    { id: 'case-studies', name: 'Case Studies', icon: '📊', count: 25 },
    { id: 'resources', name: 'Resources', icon: '📖', count: 15 }
  ];

  const featuredContent = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Discover revolutionary AI breakthroughs delivering 10,000% ROI',
      category: 'ai-2025',
      icon: '🚀',
      featured: true,
      url: '/ai-2025-ultimate-breakthrough-revolution'
    },
    {
      id: 2,
      title: 'Quantum Computing Solutions 2025',
      description: 'Revolutionary quantum solutions with 50,000x performance improvements',
      category: 'quantum',
      icon: '⚛️',
      featured: true,
      url: '/quantum-computing-solutions-2025'
    },
    {
      id: 3,
      title: 'Advanced Automation Solutions 2025',
      description: 'Intelligent automation delivering 2,500-5,000% ROI',
      category: 'automation',
      icon: '🤖',
      featured: true,
      url: '/advanced-automation-solutions-2025'
    },
    {
      id: 4,
      title: 'Global Enterprise Transformation Success',
      description: 'Fortune 500 company achieves 10,000% ROI with AI implementation',
      category: 'case-studies',
      icon: '🏢',
      featured: false,
      url: '/case-studies/ai-2025-global-transformation-breakthrough'
    },
    {
      id: 5,
      title: 'Quantum Manufacturing Revolution',
      description: 'Manufacturing company reduces costs by 85% with quantum solutions',
      category: 'case-studies',
      icon: '🏭',
      featured: false,
      url: '/case-studies/quantum-manufacturing-transformation'
    },
    {
      id: 6,
      title: 'AI Implementation Master Guide 2025',
      description: 'Complete guide to implementing AI solutions in your business',
      category: 'resources',
      icon: '📚',
      featured: false,
      url: '/resources/ai-2025-implementation-master-guide'
    }
  ];

  const filteredContent = featuredContent.filter(content => {
    const matchesCategory = selectedCategory === 'all' || content.category === selectedCategory;
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, quantum solutions, and automation technologies.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {contentCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((content) => (
            <Link
              key={content.id}
              href={content.url}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{content.icon}</div>
                  {content.featured && (
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      FEATURED
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 capitalize">
                    {content.category.replace('-', ' ')}
                  </span>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                    Explore
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Content Button */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span className="mr-2">📚</span>
            View All Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}