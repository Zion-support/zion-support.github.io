'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readTime: string;
  url: string;
  featured: boolean;
  publishDate: string;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI 2026 Technology Showcase',
    description: 'Explore revolutionary AI technologies including neural interfaces, quantum computing, and autonomous systems.',
    category: 'Technology',
    tags: ['AI 2026', 'Neural Interfaces', 'Quantum Computing', 'Autonomous Systems'],
    difficulty: 'Advanced',
    readTime: '15 min',
    url: '/ai-2026-technology-showcase',
    featured: true,
    publishDate: '2026-01-15'
  },
  {
    id: '2',
    title: 'Global Manufacturing AI Transformation',
    description: 'How a Fortune 500 company achieved 300% efficiency gains and $2.3B in cost savings through AI.',
    category: 'Case Study',
    tags: ['Manufacturing', 'AI Transformation', 'ROI', 'Fortune 500'],
    difficulty: 'Intermediate',
    readTime: '12 min',
    url: '/case-studies/ai-2026-global-manufacturing-transformation-success',
    featured: true,
    publishDate: '2026-01-12'
  },
  {
    id: '3',
    title: 'AI 2026 Implementation Toolkit',
    description: 'Complete implementation guide with checklists, templates, and best practices for AI success.',
    category: 'Resource',
    tags: ['Implementation', 'Toolkit', 'Best Practices', 'Templates'],
    difficulty: 'Beginner',
    readTime: '25 min',
    url: '/resources/ai-2026-implementation-toolkit',
    featured: true,
    publishDate: '2026-01-10'
  },
  {
    id: '4',
    title: 'Neural Interface Breakthrough',
    description: 'Direct brain-computer interfaces enabling seamless human-AI collaboration with unprecedented speed.',
    category: 'Blog',
    tags: ['Neural Interfaces', 'Brain-Computer', 'Human-AI', 'Breakthrough'],
    difficulty: 'Advanced',
    readTime: '8 min',
    url: '/blog/ai-2026-neural-interface-breakthrough',
    featured: false,
    publishDate: '2026-01-08'
  },
  {
    id: '5',
    title: 'Quantum Machine Learning Revolution',
    description: 'Quantum computing meets AI to solve previously impossible problems with exponential speed improvements.',
    category: 'Blog',
    tags: ['Quantum Computing', 'Machine Learning', 'Quantum AI', 'Revolution'],
    difficulty: 'Advanced',
    readTime: '10 min',
    url: '/blog/ai-2026-quantum-machine-learning-revolution',
    featured: false,
    publishDate: '2026-01-05'
  },
  {
    id: '6',
    title: 'AI Ethics & Governance Framework',
    description: 'Comprehensive frameworks ensuring responsible AI development and deployment across all industries.',
    category: 'Resource',
    tags: ['AI Ethics', 'Governance', 'Responsible AI', 'Compliance'],
    difficulty: 'Intermediate',
    readTime: '18 min',
    url: '/resources/ai-2025-ethical-governance-framework',
    featured: false,
    publishDate: '2026-01-03'
  },
  {
    id: '7',
    title: 'Edge AI Computing Revolution',
    description: 'AI processing at the edge for real-time decision making with minimal latency and enhanced privacy.',
    category: 'Technology',
    tags: ['Edge Computing', 'Real-time AI', 'Privacy', 'Latency'],
    difficulty: 'Intermediate',
    readTime: '12 min',
    url: '/blog/ai-2025-edge-computing-revolution',
    featured: false,
    publishDate: '2026-01-01'
  },
  {
    id: '8',
    title: 'Multimodal AI Applications',
    description: 'AI systems that understand and process multiple data types simultaneously for richer insights.',
    category: 'Blog',
    tags: ['Multimodal AI', 'Computer Vision', 'NLP', 'Audio Processing'],
    difficulty: 'Intermediate',
    readTime: '14 min',
    url: '/blog/ai-2025-multimodal-revolution',
    featured: false,
    publishDate: '2025-12-28'
  }
];

const categories = ['All', 'Technology', 'Case Study', 'Resource', 'Blog'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function InteractiveContentDiscovery2026() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContent, setFilteredContent] = useState(contentItems);

  // Get all unique tags
  const allTags = Array.from(new Set(contentItems.flatMap(item => item.tags)));

  // Filter content based on selected filters
  useEffect(() => {
    let filtered = contentItems;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'All') {
      filtered = filtered.filter(item => item.difficulty === selectedDifficulty);
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(item => 
        selectedTags.some(tag => item.tags.includes(tag))
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredContent(filtered);
  }, [selectedCategory, selectedDifficulty, selectedTags, searchQuery]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technology': return 'bg-blue-100 text-blue-800';
      case 'Case Study': return 'bg-green-100 text-green-800';
      case 'Resource': return 'bg-purple-100 text-purple-800';
      case 'Blog': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover AI Content That Matters to You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our intelligent content discovery system to find exactly what you need. 
            Filter by category, difficulty level, tags, or search for specific topics.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for AI topics, technologies, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 pr-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Filter */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Difficulty Level</h3>
            <div className="flex flex-wrap gap-2">
              {difficulties.map(difficulty => (
                <button
                  key={difficulty}
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedDifficulty === difficulty
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>

          {/* Tags Filter */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedTags.includes(tag)
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filters Summary */}
          {(selectedCategory !== 'All' || selectedDifficulty !== 'All' || selectedTags.length > 0 || searchQuery) && (
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="text-gray-600">Active filters:</span>
              {selectedCategory !== 'All' && (
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                  Category: {selectedCategory}
                </span>
              )}
              {selectedDifficulty !== 'All' && (
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                  Difficulty: {selectedDifficulty}
                </span>
              )}
              {selectedTags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                  {tag}
                </span>
              ))}
              {searchQuery && (
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                  Search: "{searchQuery}"
                </span>
              )}
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedDifficulty('All');
                  setSelectedTags([]);
                  setSearchQuery('');
                }}
                className="px-3 py-1 bg-red-100 text-red-800 rounded-full hover:bg-red-200 transition-colors"
              >
                Clear All
              </button>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {filteredContent.length} Content {filteredContent.length === 1 ? 'Item' : 'Items'} Found
            </h3>
            <div className="text-gray-600">
              Showing {filteredContent.length} of {contentItems.length} total
            </div>
          </div>

          {filteredContent.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No content found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedDifficulty('All');
                  setSelectedTags([]);
                  setSearchQuery('');
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContent.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group border border-gray-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(item.difficulty)}`}>
                        {item.difficulty}
                      </span>
                    </div>
                    {item.featured && (
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-xs font-semibold">
                        ⭐ Featured
                      </span>
                    )}
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{item.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>📅 {new Date(item.publishDate).toLocaleDateString()}</span>
                    <span>⏱️ {item.readTime} read</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-gray-600 mb-6">
            Our AI experts can help you find the right content or create custom resources for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Our Experts
            </Link>
            <Link
              href="/resources"
              className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Browse All Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}