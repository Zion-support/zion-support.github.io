import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource' | 'tool';
  category: string;
  tags: string[];
  readTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  popularity: number;
  link: string;
  featured: boolean;
}

const InteractiveContentDiscovery2026 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2026: Advanced Automation Revolution',
      description: 'Discover how AI automation will transform industries with neural networks, quantum computing, and autonomous systems.',
      type: 'blog',
      category: 'AI Trends',
      tags: ['AI', 'Automation', 'Neural Networks', 'Quantum Computing'],
      readTime: '15 min',
      difficulty: 'advanced',
      popularity: 95,
      link: '/blog/ai-2026-advanced-automation-revolution',
      featured: true
    },
    {
      id: '2',
      title: 'Global Manufacturing Transformation: 600% ROI Success',
      description: 'Real-world case study of how a Fortune 500 company achieved unprecedented success through AI automation.',
      type: 'case-study',
      category: 'Case Studies',
      tags: ['Manufacturing', 'ROI', 'Transformation', 'Success Story'],
      readTime: '12 min',
      difficulty: 'intermediate',
      popularity: 92,
      link: '/case-studies/ai-2026-global-manufacturing-transformation-success',
      featured: true
    },
    {
      id: '3',
      title: 'AI 2026 Implementation Toolkit',
      description: 'Complete guide with 50+ templates, checklists, and frameworks for successful AI transformation.',
      type: 'resource',
      category: 'Resources',
      tags: ['Implementation', 'Toolkit', 'Templates', 'Guide'],
      readTime: '25 min',
      difficulty: 'beginner',
      popularity: 88,
      link: '/resources/ai-2026-implementation-toolkit',
      featured: true
    },
    {
      id: '4',
      title: 'Neural Interface Breakthrough 2026',
      description: 'How brain-computer interfaces are revolutionizing human-AI interaction and productivity.',
      type: 'blog',
      category: 'AI Trends',
      tags: ['Neural Interfaces', 'BCI', 'Productivity', 'Breakthrough'],
      readTime: '18 min',
      difficulty: 'advanced',
      popularity: 85,
      link: '/blog/ai-2026-neural-interface-breakthrough',
      featured: false
    },
    {
      id: '5',
      title: 'Quantum AI Financial Optimization',
      description: 'Revolutionary quantum computing applications in financial services achieving 800% ROI.',
      type: 'case-study',
      category: 'Case Studies',
      tags: ['Quantum Computing', 'Finance', 'Optimization', 'ROI'],
      readTime: '14 min',
      difficulty: 'advanced',
      popularity: 90,
      link: '/case-studies/quantum-ai-financial-optimization-breakthrough-2026',
      featured: false
    },
    {
      id: '6',
      title: 'AI ROI Calculator 2026',
      description: 'Interactive tool to calculate potential ROI from AI investments and transformations.',
      type: 'tool',
      category: 'Tools',
      tags: ['ROI', 'Calculator', 'Investment', 'Planning'],
      readTime: '5 min',
      difficulty: 'beginner',
      popularity: 82,
      link: '/tools/ai-roi-calculator-2026',
      featured: false
    }
  ];

  const categories = ['all', 'AI Trends', 'Case Studies', 'Resources', 'Tools'];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];
  const sortOptions = [
    { value: 'popularity', label: 'Most Popular' },
    { value: 'title', label: 'Title A-Z' },
    { value: 'readTime', label: 'Reading Time' },
    { value: 'difficulty', label: 'Difficulty Level' }
  ];

  useEffect(() => {
    let filtered = contentItems;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(item => item.difficulty === selectedDifficulty);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort content
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'readTime':
          return parseInt(a.readTime) - parseInt(b.readTime);
        case 'difficulty':
          const difficultyOrder = { beginner: 1, intermediate: 2, advanced: 3 };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        case 'popularity':
        default:
          return b.popularity - a.popularity;
      }
    });

    setFilteredContent(filtered);
  }, [selectedCategory, selectedDifficulty, searchQuery, sortBy]);

  const getTypeIcon = (type: string) => {
    const icons = {
      blog: '📝',
      'case-study': '📊',
      resource: '📚',
      tool: '🛠️'
    };
    return icons[type as keyof typeof icons] || '📄';
  };

  const getTypeColor = (type: string) => {
    const colors = {
      blog: 'bg-blue-100 text-blue-800',
      'case-study': 'bg-green-100 text-green-800',
      resource: 'bg-purple-100 text-purple-800',
      tool: 'bg-orange-100 text-orange-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      beginner: 'bg-green-100 text-green-800',
      intermediate: 'bg-yellow-100 text-yellow-800',
      advanced: 'bg-red-100 text-red-800'
    };
    return colors[difficulty as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Discover AI Content 2026
        </h2>
        <p className="text-gray-600">
          Explore our comprehensive library of AI resources, case studies, and tools
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search content, tags, or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>
                  {difficulty === 'all' ? 'All Levels' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Options */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Showing {filteredContent.length} of {contentItems.length} content items
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid gap-6">
        {filteredContent.map((item) => (
          <div
            key={item.id}
            className={`border rounded-lg p-6 hover:shadow-md transition-all duration-200 ${
              item.featured ? 'border-blue-200 bg-blue-50/30' : 'border-gray-200'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{getTypeIcon(item.type)}</span>
                <div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                    {item.type.replace('-', ' ').toUpperCase()}
                  </span>
                  {item.featured && (
                    <span className="ml-2 px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      FEATURED
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                  {item.difficulty.toUpperCase()}
                </span>
                <span className="text-sm text-gray-500">{item.readTime}</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {item.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Category:</span>
                <span className="text-sm font-medium text-gray-700">{item.category}</span>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-500">Popularity:</span>
                <div className="flex items-center">
                  <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${item.popularity}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-700">{item.popularity}%</span>
                </div>
              </div>

              <Link
                href={item.link}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Read More →
              </Link>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                  onClick={() => setSearchQuery(tag)}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your filters or search terms to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedDifficulty('all');
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/mega-content-showcase-2026"
            className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            View All Content
          </Link>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Personalized Recommendations
          </Link>
          <Link
            href="/resources/ai-2026-implementation-toolkit"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Download Toolkit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery2026;