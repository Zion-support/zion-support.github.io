'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  badge: string;
  badgeColor: string;
  link: string;
  image: string;
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI 2026 Breakthrough Content Showcase',
    description: 'Discover revolutionary AI breakthroughs, case studies, and implementation guides that are transforming businesses worldwide.',
    category: 'Showcase',
    type: 'Interactive',
    badge: 'BREAKTHROUGH',
    badgeColor: 'bg-gradient-to-r from-blue-500 to-purple-500',
    link: '/ai-2026-breakthrough-content-showcase',
    image: '🧠',
    readTime: '15 min',
    difficulty: 'Intermediate',
    tags: ['AI 2026', 'Breakthrough', 'Showcase', 'ROI']
  },
  {
    id: '2',
    title: 'Global Enterprise Transformation Success',
    description: 'Learn how Fortune 500 companies achieved 5000% ROI through our revolutionary AI implementation strategies.',
    category: 'Case Study',
    type: 'Success Story',
    badge: '5000% ROI',
    badgeColor: 'bg-gradient-to-r from-green-500 to-emerald-500',
    link: '/case-studies/ai-2026-global-enterprise-transformation-breakthrough',
    image: '🏢',
    readTime: '20 min',
    difficulty: 'Advanced',
    tags: ['Enterprise', 'Transformation', 'ROI', 'Fortune 500']
  },
  {
    id: '3',
    title: 'Ultimate Implementation Master Guide',
    description: 'Complete step-by-step guide to implementing AI solutions in 2026 with templates, checklists, and proven strategies.',
    category: 'Resource',
    type: 'Guide',
    badge: 'ESSENTIAL',
    badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
    link: '/resources/ai-2026-ultimate-implementation-master-guide',
    image: '📚',
    readTime: '45 min',
    difficulty: 'Beginner',
    tags: ['Implementation', 'Guide', 'Templates', 'Strategy']
  },
  {
    id: '4',
    title: 'Neural Interface Revolution',
    description: 'Explore cutting-edge brain-computer interfaces and neural augmentation technologies changing human-AI interaction.',
    category: 'Innovation',
    type: 'Technology',
    badge: 'REVOLUTIONARY',
    badgeColor: 'bg-gradient-to-r from-indigo-500 to-blue-500',
    link: '/blog/ai-2026-neural-interface-revolution',
    image: '⚡',
    readTime: '12 min',
    difficulty: 'Advanced',
    tags: ['Neural Interface', 'BCI', 'Revolutionary', 'Technology']
  },
  {
    id: '5',
    title: 'Quantum AI Fusion Breakthrough',
    description: 'Discover how quantum computing is revolutionizing AI capabilities and enabling breakthrough performance improvements.',
    category: 'Technology',
    type: 'Breakthrough',
    badge: 'QUANTUM',
    badgeColor: 'bg-gradient-to-r from-cyan-500 to-teal-500',
    link: '/blog/ai-2026-quantum-ai-fusion',
    image: '⚛️',
    readTime: '18 min',
    difficulty: 'Advanced',
    tags: ['Quantum Computing', 'AI Fusion', 'Performance', 'Breakthrough']
  },
  {
    id: '6',
    title: 'AI ROI Calculator 2026',
    description: 'Calculate your potential ROI from AI implementation with our advanced calculator based on real-world success data.',
    category: 'Tool',
    type: 'Calculator',
    badge: 'FREE TOOL',
    badgeColor: 'bg-gradient-to-r from-orange-500 to-red-500',
    link: '/tools/ai-2026-roi-calculator',
    image: '💰',
    readTime: '5 min',
    difficulty: 'Beginner',
    tags: ['ROI Calculator', 'Tool', 'Free', 'Assessment']
  }
];

const categories = ['All', 'Showcase', 'Case Study', 'Resource', 'Innovation', 'Technology', 'Tool'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const types = ['All', 'Interactive', 'Success Story', 'Guide', 'Technology', 'Breakthrough', 'Calculator'];

export default function AI2026ContentDiscoveryWidget() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || item.difficulty === selectedDifficulty;
    const matchesType = selectedType === 'All' || item.type === selectedType;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesDifficulty && matchesType && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Discover AI Content
        </h3>
        <p className="text-lg text-gray-600">
          Find the perfect AI content for your needs with our intelligent discovery system
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search content, tags, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Filter Buttons */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Difficulty</label>
            <div className="flex flex-wrap gap-2">
              {difficulties.map(difficulty => (
                <button
                  key={difficulty}
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedDifficulty === difficulty
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Type</label>
            <div className="flex flex-wrap gap-2">
              {types.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedType === type
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredItems.length} of {contentItems.length} content items
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <Link
            key={item.id}
            href={item.link}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-blue-300"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">{item.image}</span>
              <div className={`inline-flex items-center px-2 py-1 rounded-full text-white text-xs font-semibold ${item.badgeColor}`}>
                {item.badge}
              </div>
            </div>

            <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
              {item.title}
            </h4>

            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {item.description}
            </p>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(item.difficulty)}`}>
                  {item.difficulty}
                </span>
                <span className="text-xs text-gray-500">{item.readTime}</span>
              </div>
              <span className="text-xs text-gray-500">{item.type}</span>
            </div>

            <div className="flex flex-wrap gap-1">
              {item.tags.slice(0, 3).map(tag => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
              {item.tags.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  +{item.tags.length - 3}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No content found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your filters or search terms to find more content.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedDifficulty('All');
              setSelectedType('All');
              setSearchQuery('');
            }}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* CTA */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-gray-600 mb-6">
            Our AI experts can help you find the perfect content for your specific needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Get Personalized Recommendations
          </Link>
        </div>
      </div>
    </div>
  );
}