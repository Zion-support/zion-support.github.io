import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  category: string;
  readTime?: string;
  isNew?: boolean;
  isTrending?: boolean;
  icon: string;
  href: string;
  featured?: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-2025-predictions',
    title: 'AI 2025: The Year of Breakthrough Predictions',
    description: 'Discover our comprehensive predictions for AI in 2025. From quantum AI breakthroughs to enterprise transformation.',
    type: 'blog',
    category: 'AI Predictions',
    readTime: '25 min read',
    isNew: true,
    icon: '🔮',
    href: '/blog/ai-2025-year-predictions',
    featured: true
  },
  {
    id: 'ai-automation-trends',
    title: 'AI Automation Trends 2025: The Complete Guide',
    description: 'Discover the latest AI automation trends for 2025. From intelligent process automation to autonomous business operations.',
    type: 'blog',
    category: 'AI Automation',
    readTime: '22 min read',
    isNew: true,
    icon: '🤖',
    href: '/blog/ai-automation-trends-2025',
    featured: true
  },
  {
    id: 'ai-implementation-checklist',
    title: 'AI Implementation Checklist 2025',
    description: '150+ actionable items to ensure successful AI deployment in your organization. Complete implementation guide.',
    type: 'resource',
    category: 'Implementation',
    readTime: '150+ items',
    isNew: true,
    icon: '📋',
    href: '/resources/ai-implementation-checklist-2025',
    featured: true
  },
  {
    id: 'financial-services-transformation',
    title: 'AI Financial Services Transformation: 90% Faster Processing',
    description: 'How a Fortune 500 financial services company achieved 90% faster loan processing and 75% cost reduction.',
    type: 'case-study',
    category: 'Financial Services',
    readTime: '15 min read',
    isNew: true,
    icon: '💰',
    href: '/case-studies/ai-financial-services-transformation-2025',
    featured: true
  },
  {
    id: 'ai-innovation-trends',
    title: 'AI Innovation Trends 2025',
    description: 'Explore the latest innovations shaping the AI landscape this year. Quantum AI, neuromorphic computing, and more.',
    type: 'blog',
    category: 'AI Innovation',
    readTime: '25 min read',
    isTrending: true,
    icon: '🚀',
    href: '/blog/ai-innovation-trends-2025'
  },
  {
    id: 'ai-workforce-transformation',
    title: 'AI Workforce Transformation 2025',
    description: 'How AI is reshaping the future of work and human-AI collaboration. Complete guide to workforce transformation.',
    type: 'blog',
    category: 'Workforce',
    readTime: '18 min read',
    isNew: true,
    icon: '👥',
    href: '/blog/ai-workforce-transformation-2025'
  },
  {
    id: 'ai-cybersecurity-checklist',
    title: 'AI Cybersecurity Checklist 2025',
    description: '50+ essential security measures to protect your AI systems from emerging threats. Free download.',
    type: 'resource',
    category: 'Security',
    readTime: '50+ items',
    isNew: true,
    icon: '🛡️',
    href: '/resources/ai-cybersecurity-checklist-2025'
  },
  {
    id: 'ai-automation-manufacturing',
    title: 'AI Manufacturing Automation Success',
    description: '40% cost reduction and 60% faster processing in manufacturing operations through AI-powered automation.',
    type: 'case-study',
    category: 'Manufacturing',
    readTime: '12 min read',
    isTrending: true,
    icon: '🏭',
    href: '/case-studies/ai-automation-manufacturing-2025'
  },
  {
    id: 'ai-sustainability-guide',
    title: 'AI Sustainability Guide 2025',
    description: '50-page comprehensive guide to building environmentally responsible AI systems. Green AI implementation.',
    type: 'resource',
    category: 'Sustainability',
    readTime: '50 pages',
    isNew: true,
    icon: '🌱',
    href: '/resources/ai-sustainability-guide-2025'
  },
  {
    id: 'ai-retail-transformation',
    title: 'AI Retail Transformation',
    description: '300% revenue growth in 18 months through AI-powered personalization and inventory management.',
    type: 'case-study',
    category: 'Retail',
    readTime: '15 min read',
    isTrending: true,
    icon: '🛒',
    href: '/case-studies/ai-retail-transformation-2025'
  }
];

const categories = ['All', 'AI Predictions', 'AI Automation', 'Implementation', 'Financial Services', 'AI Innovation', 'Workforce', 'Security', 'Manufacturing', 'Sustainability', 'Retail'];

export default function ContentShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredItems = selectedCategory === 'All' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  const featuredItems = contentItems.filter(item => item.featured);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium mb-6">
            📚 CONTENT SHOWCASE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Our Latest Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our comprehensive collection of AI insights, implementation guides, 
            case studies, and resources. Fresh content added weekly to keep you ahead of the curve.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured This Week</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex gap-2">
                      {item.isNew && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                      {item.isTrending && (
                        <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                          TRENDING
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-blue-600 mb-2">{item.category}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{item.readTime}</span>
                    <span className="capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${
                viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${
                viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content Grid/List */}
        <div className={
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-4'
        }>
          {filteredItems.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 ${
                viewMode === 'list' ? 'p-6 flex items-center gap-6' : 'p-6 h-full'
              }`}>
                {viewMode === 'grid' ? (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{item.icon}</div>
                      <div className="flex gap-2">
                        {item.isNew && (
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                            NEW
                          </span>
                        )}
                        {item.isTrending && (
                          <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                            TRENDING
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-blue-600 mb-2">{item.category}</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{item.readTime}</span>
                      <span className="capitalize">{item.type.replace('-', ' ')}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-sm font-medium text-blue-600">{item.category}</div>
                        <div className="flex gap-2">
                          {item.isNew && (
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                              NEW
                            </span>
                          )}
                          {item.isTrending && (
                            <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                              TRENDING
                            </span>
                          )}
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{item.readTime}</span>
                        <span className="capitalize">{item.type.replace('-', ' ')}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Load More Content
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/blog" className="text-center group">
              <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">📝</div>
                <div className="font-semibold text-gray-900 group-hover:text-blue-600">All Articles</div>
                <div className="text-sm text-gray-600">100+ articles</div>
              </div>
            </Link>
            <Link href="/case-studies" className="text-center group">
              <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">📊</div>
                <div className="font-semibold text-gray-900 group-hover:text-blue-600">Case Studies</div>
                <div className="text-sm text-gray-600">25+ studies</div>
              </div>
            </Link>
            <Link href="/resources" className="text-center group">
              <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">📋</div>
                <div className="font-semibold text-gray-900 group-hover:text-blue-600">Resources</div>
                <div className="text-sm text-gray-600">50+ downloads</div>
              </div>
            </Link>
            <Link href="/contact" className="text-center group">
              <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">💬</div>
                <div className="font-semibold text-gray-900 group-hover:text-blue-600">Get Help</div>
                <div className="text-sm text-gray-600">Expert consultation</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}