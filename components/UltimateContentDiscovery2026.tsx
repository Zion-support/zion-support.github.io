'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'blog' | 'case-study' | 'resource' | 'tool';
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  featured: boolean;
  new: boolean;
  hot: boolean;
  url: string;
  image?: string;
}

const UltimateContentDiscovery2026: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2026: Neural Architecture Revolution',
      description: 'Comprehensive guide to next-generation AI systems with quantum-enhanced processing and autonomous agent orchestration.',
      category: 'AI Architecture',
      type: 'blog',
      readTime: '15 min',
      difficulty: 'Advanced',
      tags: ['AI', 'Neural Networks', 'Quantum Computing', 'Architecture'],
      featured: true,
      new: true,
      hot: true,
      url: '/blog/ai-2026-neural-architecture-revolution'
    },
    {
      id: '2',
      title: 'Quantum Machine Learning Breakthrough 2026',
      description: 'Revolutionary quantum algorithms achieving 1000x speedup in machine learning tasks with real-world applications.',
      category: 'Quantum AI',
      type: 'blog',
      readTime: '12 min',
      difficulty: 'Advanced',
      tags: ['Quantum Computing', 'Machine Learning', 'Algorithms', 'Performance'],
      featured: true,
      new: true,
      hot: true,
      url: '/blog/ai-2026-quantum-machine-learning'
    },
    {
      id: '3',
      title: 'Fortune 500 AI Transformation Success',
      description: 'How a global manufacturer achieved $2.3B revenue impact through comprehensive AI implementation.',
      category: 'Case Studies',
      type: 'case-study',
      readTime: '8 min',
      difficulty: 'Intermediate',
      tags: ['Case Study', 'Enterprise AI', 'ROI', 'Transformation'],
      featured: true,
      new: true,
      hot: false,
      url: '/case-studies/ai-2026-global-manufacturing-transformation-success'
    },
    {
      id: '4',
      title: 'AI Implementation Master Guide 2026',
      description: 'Complete blueprint for implementing AI systems in enterprise environments with step-by-step frameworks.',
      category: 'Implementation',
      type: 'resource',
      readTime: '25 min',
      difficulty: 'Intermediate',
      tags: ['Implementation', 'Enterprise', 'Strategy', 'Framework'],
      featured: true,
      new: true,
      hot: true,
      url: '/resources/ai-2026-implementation-master-guide'
    },
    {
      id: '5',
      title: 'Neural Interface Breakthrough 2026',
      description: 'Direct brain-computer interfaces enabling thought-controlled AI systems with 99.7% accuracy.',
      category: 'Neural Interfaces',
      type: 'blog',
      readTime: '10 min',
      difficulty: 'Advanced',
      tags: ['Neural Interfaces', 'BCI', 'AI Control', 'Breakthrough'],
      featured: false,
      new: true,
      hot: true,
      url: '/blog/ai-2026-neural-interface-breakthrough'
    },
    {
      id: '6',
      title: 'AI ROI Calculator 2026',
      description: 'Interactive tool to calculate AI implementation ROI with real-time projections and scenario analysis.',
      category: 'Tools',
      type: 'tool',
      readTime: '5 min',
      difficulty: 'Beginner',
      tags: ['ROI Calculator', 'Tools', 'Analysis', 'Projections'],
      featured: false,
      new: true,
      hot: false,
      url: '/tools/ai-roi-calculator-2026'
    }
  ];

  const categories = ['all', 'AI Architecture', 'Quantum AI', 'Case Studies', 'Implementation', 'Neural Interfaces', 'Tools'];
  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced'];
  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'difficulty', label: 'Difficulty Level' },
    { value: 'readTime', label: 'Read Time' }
  ];

  useEffect(() => {
    setIsLoading(true);
    
    let filtered = contentItems.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'all' || item.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });

    // Sort filtered results
    switch (sortBy) {
      case 'popular':
        filtered = filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'difficulty':
        const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
        filtered = filtered.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
        break;
      case 'readTime':
        filtered = filtered.sort((a, b) => parseInt(a.readTime) - parseInt(b.readTime));
        break;
      default: // recent
        filtered = filtered.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
    }

    setFilteredContent(filtered);
    setIsLoading(false);
  }, [searchQuery, selectedCategory, selectedDifficulty, sortBy]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      case 'tool': return '🛠️';
      default: return '📄';
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            🚀 ULTIMATE CONTENT DISCOVERY 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of cutting-edge AI content, case studies, and tools. 
            Find exactly what you need with our advanced discovery system.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Content
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title, description, or tags..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty === 'all' ? 'All Levels' : difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort Options */}
          <div className="mt-6 flex flex-wrap gap-4">
            <span className="text-sm font-medium text-gray-700">Sort by:</span>
            {sortOptions.map(option => (
              <button
                key={option.value}
                onClick={() => setSortBy(option.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  sortBy === option.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {isLoading ? 'Searching...' : `${filteredContent.length} Content Items Found`}
            </h3>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear Search
              </button>
            )}
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-lg animate-pulse">
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-3 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredContent.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{getTypeIcon(item.type)}</span>
                      <div>
                        <span className="text-sm font-medium text-gray-500">{item.category}</span>
                        <div className="flex items-center space-x-2 mt-1">
                          {item.new && (
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                              NEW
                            </span>
                          )}
                          {item.hot && (
                            <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                              HOT
                            </span>
                          )}
                          {item.featured && (
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                              FEATURED
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(item.difficulty)}`}>
                      {item.difficulty}
                    </span>
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="text-gray-500 text-xs">
                        +{item.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{item.readTime} read</span>
                    <span className="group-hover:text-blue-600 transition-colors">
                      Read More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!isLoading && filteredContent.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or browse all content.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedDifficulty('all');
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-xl mb-8 opacity-90">
            Our AI content library is constantly growing. Request specific content or get personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Request Content
            </Link>
            <Link
              href="/ai-innovation-hub-2026"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Browse All Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentDiscovery2026;