import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  category: string;
  readTime?: string;
  type?: string;
  tags: string[];
  isNew?: boolean;
  isTrending?: boolean;
  views?: number;
  rating?: number;
}

const InteractiveContentDiscovery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-advanced-automation',
      title: 'AI Advanced Automation 2025: Complete Implementation Guide',
      description: 'Master advanced AI automation with our comprehensive guide. Learn strategies that deliver 300%+ ROI and 60% cost reduction.',
      href: '/blog/ai-2025-advanced-automation',
      icon: '🤖',
      category: 'AI Automation',
      readTime: '22 min read',
      tags: ['automation', 'AI', 'implementation', 'ROI', 'productivity'],
      isNew: true,
      views: 3200,
      rating: 4.9
    },
    {
      id: 'generative-agents-production',
      title: 'Generative AI Agents in Production 2025',
      description: 'Deploy and manage AI agents in production environments. Achieve 99.9% uptime and 400%+ ROI with proven strategies.',
      href: '/blog/ai-2025-generative-agents-in-production',
      icon: '🧠',
      category: 'AI Agents',
      readTime: '28 min read',
      tags: ['AI agents', 'production', 'deployment', 'automation', 'scalability'],
      isTrending: true,
      views: 4100,
      rating: 4.8
    },
    {
      id: 'cybersecurity-breakthrough',
      title: '$50M Cybersecurity Transformation Success',
      description: 'How a Fortune 500 company achieved 99.8% threat detection accuracy and $50M in security cost savings.',
      href: '/case-studies/ai-cybersecurity-transformation-breakthrough-2025',
      icon: '🛡️',
      category: 'Case Study',
      type: 'Success Story',
      tags: ['cybersecurity', 'AI security', 'threat detection', 'cost savings', 'Fortune 500'],
      isNew: true,
      views: 2800,
      rating: 4.9
    },
    {
      id: 'ai-implementation-guide',
      title: 'AI Implementation Master Guide 2026',
      description: 'Download our 200+ page comprehensive guide with templates, checklists, and proven strategies for AI success.',
      href: '/resources/ai-implementation-master-guide-2026',
      icon: '📚',
      category: 'Free Resource',
      type: '200+ Pages',
      tags: ['implementation', 'guide', 'templates', 'checklists', 'best practices'],
      isNew: true,
      views: 15000,
      rating: 4.9
    },
    {
      id: 'ai-breakthrough-innovations',
      title: 'AI 2025 Breakthrough Innovations: Revolutionary Technologies',
      description: 'Discover the groundbreaking AI innovations transforming 2025: autonomous systems, quantum AI, edge intelligence.',
      href: '/blog/ai-2025-breakthrough-innovations',
      icon: '🚀',
      category: 'AI Innovations',
      readTime: '25 min read',
      tags: ['innovations', 'AI trends', 'technology', 'future', 'breakthrough'],
      isTrending: true,
      views: 5200,
      rating: 4.7
    },
    {
      id: 'ai-sustainability-green-tech',
      title: 'AI Sustainability & Green Tech 2025',
      description: 'Building eco-friendly AI systems for the future. Learn about smart energy management and climate solutions.',
      href: '/blog/ai-sustainability-green-tech-2025',
      icon: '🌱',
      category: 'Sustainability',
      readTime: '20 min read',
      tags: ['sustainability', 'green tech', 'environment', 'energy', 'climate'],
      isNew: true,
      views: 1900,
      rating: 4.6
    },
    {
      id: 'ai-workforce-transformation',
      title: 'AI Workforce Transformation 2025',
      description: 'Complete guide to reskilling strategies and workforce adaptation for the AI era.',
      href: '/blog/ai-workforce-transformation-2025',
      icon: '👥',
      category: 'Workforce',
      readTime: '18 min read',
      tags: ['workforce', 'transformation', 'reskilling', 'human resources', 'future of work'],
      views: 2400,
      rating: 4.5
    },
    {
      id: 'ai-robotics-automation',
      title: 'AI Robotics & Automation 2025',
      description: 'The future of intelligent machines. Explore advances in AI-powered robotics and automation.',
      href: '/blog/ai-robotics-automation-2025',
      icon: '🤖',
      category: 'Robotics',
      readTime: '22 min read',
      tags: ['robotics', 'automation', 'manufacturing', 'intelligent machines', 'AI'],
      isTrending: true,
      views: 3100,
      rating: 4.8
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'AI Automation', label: 'AI Automation', count: contentItems.filter(item => item.category === 'AI Automation').length },
    { id: 'AI Agents', label: 'AI Agents', count: contentItems.filter(item => item.category === 'AI Agents').length },
    { id: 'Case Study', label: 'Case Studies', count: contentItems.filter(item => item.category === 'Case Study').length },
    { id: 'Free Resource', label: 'Resources', count: contentItems.filter(item => item.category === 'Free Resource').length },
    { id: 'AI Innovations', label: 'Innovations', count: contentItems.filter(item => item.category === 'AI Innovations').length },
    { id: 'Sustainability', label: 'Sustainability', count: contentItems.filter(item => item.category === 'Sustainability').length },
    { id: 'Workforce', label: 'Workforce', count: contentItems.filter(item => item.category === 'Workforce').length },
    { id: 'Robotics', label: 'Robotics', count: contentItems.filter(item => item.category === 'Robotics').length }
  ];

  useEffect(() => {
    let filtered = contentItems;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
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
    switch (sortBy) {
      case 'newest':
        filtered = filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'trending':
        filtered = filtered.sort((a, b) => (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0));
        break;
      case 'popular':
        filtered = filtered.sort((a, b) => (b.views || 0) - (a.views || 0));
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
    }

    setFilteredContent(filtered);
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover AI & Tech Content
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive library of AI articles, case studies, and resources. 
            Find exactly what you need with our intelligent discovery tools.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles, case studies, and resources..."
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
            </div>

            {/* Sort Dropdown */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="trending">Trending</option>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
                  <div className="text-6xl">{item.icon}</div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    {item.isNew && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        NEW
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        TRENDING
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                    {item.readTime && (
                      <span className="text-gray-500 text-xs">{item.readTime}</span>
                    )}
                    {item.type && (
                      <span className="text-gray-500 text-xs">{item.type}</span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      {item.views && (
                        <span>👁️ {item.views.toLocaleString()}</span>
                      )}
                      {item.rating && (
                        <span>⭐ {item.rating}</span>
                      )}
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      {item.type ? 'Download' : 'Read'} →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More */}
        {filteredContent.length > 0 && (
          <div className="text-center mt-8">
            <Link
              href="/content-showcase"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              View All Content
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery;