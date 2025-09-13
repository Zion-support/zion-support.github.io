import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'breakthrough' | 'case-study' | 'blog' | 'resource' | 'tool';
  href: string;
  icon: string;
  tags: string[];
  featured?: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI 2025 Ultimate Breakthrough Revolution',
    description: 'Revolutionary quantum-neural fusion delivering 5,000% ROI and transforming entire industries.',
    category: 'Breakthrough Technologies',
    type: 'breakthrough',
    href: '/ai-2025-ultimate-breakthrough-revolution',
    icon: '⚛️',
    tags: ['Quantum Computing', 'Neural Networks', 'ROI 5000%', 'Revolutionary'],
    featured: true
  },
  {
    id: '2',
    title: 'Global Transformation Breakthrough - 10,000% ROI',
    description: 'Fortune 500 company achieves unprecedented transformation using AI 2025 technologies.',
    category: 'Success Stories',
    type: 'case-study',
    href: '/case-studies/ai-2025-global-transformation-breakthrough',
    icon: '🏆',
    tags: ['Fortune 500', 'ROI 10000%', 'Transformation', 'Success Story'],
    featured: true
  },
  {
    id: '3',
    title: 'Revolutionary Trends & Predictions 2025',
    description: 'Comprehensive analysis of breakthrough AI trends and predictions shaping the future.',
    category: 'Trends & Analysis',
    type: 'blog',
    href: '/blog/ai-2025-revolutionary-trends-predictions',
    icon: '🔮',
    tags: ['Predictions', 'Trends', 'Future Tech', 'Analysis'],
    featured: true
  },
  {
    id: '4',
    title: 'Ultimate Implementation Toolkit',
    description: 'Complete step-by-step guides and templates for successful AI 2025 implementation.',
    category: 'Resources',
    type: 'resource',
    href: '/resources/ai-2025-ultimate-implementation-toolkit',
    icon: '🛠️',
    tags: ['Implementation', 'Toolkit', 'Guides', 'Templates'],
    featured: true
  },
  {
    id: '5',
    title: 'Quantum-Neural Fusion Success Story',
    description: 'Manufacturing company achieves 15,000% ROI through quantum-neural fusion implementation.',
    category: 'Success Stories',
    type: 'case-study',
    href: '/case-studies/quantum-neural-fusion-success',
    icon: '⚛️',
    tags: ['Quantum', 'Manufacturing', 'ROI 15000%', 'Fusion'],
    featured: false
  },
  {
    id: '6',
    title: 'Neural Interface Technology Guide',
    description: 'Complete guide to implementing neural interface technology for 300% productivity boost.',
    category: 'Resources',
    type: 'resource',
    href: '/resources/neural-interface-implementation-guide',
    icon: '🧠',
    tags: ['Neural Interface', 'Productivity', 'Implementation', 'Guide'],
    featured: false
  },
  {
    id: '7',
    title: 'AI 2025 ROI Calculator',
    description: 'Advanced calculator to determine potential ROI from AI 2025 implementation.',
    category: 'Tools',
    type: 'tool',
    href: '/tools/ai-2025-roi-calculator',
    icon: '🧮',
    tags: ['ROI Calculator', 'Tools', 'Analysis', 'Planning'],
    featured: false
  },
  {
    id: '8',
    title: 'Autonomous Systems Breakthrough',
    description: 'Revolutionary autonomous AI systems achieving 99.7% decision accuracy.',
    category: 'Breakthrough Technologies',
    type: 'breakthrough',
    href: '/ai-2025-autonomous-systems-breakthrough',
    icon: '🤖',
    tags: ['Autonomous', 'AI Systems', 'Decision Making', 'Accuracy'],
    featured: false
  }
];

const categories = [
  'All',
  'Breakthrough Technologies',
  'Success Stories',
  'Trends & Analysis',
  'Resources',
  'Tools'
];

const types = [
  { value: 'all', label: 'All Types', icon: '📚' },
  { value: 'breakthrough', label: 'Breakthroughs', icon: '⚛️' },
  { value: 'case-study', label: 'Case Studies', icon: '🏆' },
  { value: 'blog', label: 'Blog Posts', icon: '📝' },
  { value: 'resource', label: 'Resources', icon: '📖' },
  { value: 'tool', label: 'Tools', icon: '🛠️' }
];

export default function AI2025ContentDiscoveryWidget() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesType = selectedType === 'all' || item.type === selectedType;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesType && matchesSearch;
  });

  const featuredContent = contentItems.filter(item => item.featured);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary AI 2025 Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of breakthrough content, success stories, 
            and implementation guides designed to accelerate your AI transformation.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Search Content
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by title, description, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Content Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {types.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.icon} {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredContent.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-blue-600 text-sm font-semibold">
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Content */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            All Content ({filteredContent.length} items)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  {item.featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">
                      FEATURED
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
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
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 capitalize">
                    {item.type.replace('-', ' ')}
                  </span>
                  <div className="flex items-center text-blue-600 text-sm font-semibold">
                    View
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/content-showcase"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Explore All Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}