import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource';
  category: string;
  readTime?: string;
  featured: boolean;
  tags: string[];
}

const InteractiveContentDiscovery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025: Quantum Computing Breakthrough',
      description: 'Discover how quantum computing is revolutionizing AI in 2025. Explore breakthrough applications and real-world implementations.',
      href: '/blog/ai-2025-quantum-computing-breakthrough',
      type: 'blog',
      category: 'AI Innovations',
      readTime: '22 min read',
      featured: true,
      tags: ['quantum computing', 'AI breakthrough', 'technology trends']
    },
    {
      id: '2',
      title: 'AI 2025: Neural Interface Revolution',
      description: 'Discover how neural interfaces are revolutionizing human-AI interaction in 2025. Explore brain-computer interfaces and neural prosthetics.',
      href: '/blog/ai-2025-neural-interface-revolution',
      type: 'blog',
      category: 'AI Innovations',
      readTime: '20 min read',
      featured: true,
      tags: ['neural interfaces', 'BCI', 'human-AI interaction']
    },
    {
      id: '3',
      title: 'AI 2025: Autonomous Systems Mastery',
      description: 'Master autonomous AI systems in 2025 with our comprehensive guide. Learn implementation strategies and real-world case studies.',
      href: '/blog/ai-2025-autonomous-systems-mastery',
      type: 'blog',
      category: 'Implementation',
      readTime: '25 min read',
      featured: true,
      tags: ['autonomous systems', 'AI implementation', 'automation']
    },
    {
      id: '4',
      title: 'AI 2025: Autonomous Manufacturing Revolution - $500M Success Story',
      description: 'Discover how a Fortune 500 manufacturing company achieved $500M in annual savings through comprehensive autonomous AI systems.',
      href: '/case-studies/ai-2025-autonomous-manufacturing-revolution',
      type: 'case-study',
      category: 'Case Studies',
      featured: true,
      tags: ['manufacturing', 'autonomous AI', 'ROI', 'case study']
    },
    {
      id: '5',
      title: 'AI Implementation Master Guide 2026',
      description: 'Download our comprehensive AI Implementation Master Guide for 2026. Step-by-step instructions, templates, and best practices.',
      href: '/resources/ai-implementation-master-guide-2026',
      type: 'resource',
      category: 'Resources',
      featured: true,
      tags: ['implementation guide', 'templates', 'best practices', 'free download']
    },
    {
      id: '6',
      title: 'AI Cybersecurity Checklist 2025',
      description: 'Comprehensive security checklist covering 12 key areas and 80+ essential security measures for AI systems.',
      href: '/resources/ai-cybersecurity-checklist-2025',
      type: 'resource',
      category: 'Security',
      featured: false,
      tags: ['cybersecurity', 'AI security', 'checklist', 'compliance']
    },
    {
      id: '7',
      title: 'AI Workforce Transformation Playbook 2025',
      description: 'Complete reskilling strategies and implementation guides for the AI era. Transform your workforce for the future.',
      href: '/resources/ai-workforce-transformation-playbook-2025',
      type: 'resource',
      category: 'Workforce',
      featured: false,
      tags: ['workforce transformation', 'reskilling', 'AI training', 'human resources']
    },
    {
      id: '8',
      title: 'AI Financial Services Transformation Success',
      description: 'Complete case study: How a major bank achieved $50M savings and 300% ROI through strategic AI implementation.',
      href: '/case-studies/ai-financial-services-transformation-2025',
      type: 'case-study',
      category: 'Case Studies',
      featured: false,
      tags: ['financial services', 'banking', 'ROI', 'transformation']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'AI Innovations', name: 'AI Innovations', count: contentItems.filter(item => item.category === 'AI Innovations').length },
    { id: 'Implementation', name: 'Implementation', count: contentItems.filter(item => item.category === 'Implementation').length },
    { id: 'Case Studies', name: 'Case Studies', count: contentItems.filter(item => item.category === 'Case Studies').length },
    { id: 'Resources', name: 'Resources', count: contentItems.filter(item => item.category === 'Resources').length },
    { id: 'Security', name: 'Security', count: contentItems.filter(item => item.category === 'Security').length },
    { id: 'Workforce', name: 'Workforce', count: contentItems.filter(item => item.category === 'Workforce').length }
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

    setFilteredContent(filtered);
  }, [selectedCategory, searchQuery]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '✨';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-blue-500 to-cyan-500';
      case 'case-study':
        return 'from-green-500 to-emerald-500';
      case 'resource':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          🔍 Discover Your Perfect AI Content
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Use our interactive discovery tool to find the most relevant AI content for your needs. 
          Filter by category, search by keywords, or explore our featured content.
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search Input */}
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search content by title, description, or tags..."
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
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <Link key={item.id} href={item.href} className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{getTypeIcon(item.type)}</span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full bg-gradient-to-r ${getTypeColor(item.type)} text-white`}>
                    {item.type === 'case-study' ? 'Case Study' : 
                     item.type === 'resource' ? 'Resource' : 'Article'}
                  </span>
                </div>
                {item.featured && (
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="bg-gray-100 px-2 py-1 rounded-full">
                  {item.category}
                </span>
                {item.readTime && (
                  <span>{item.readTime}</span>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-1">
                {item.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {item.tags.length > 3 && (
                  <span className="text-xs text-gray-500">
                    +{item.tags.length - 3} more
                  </span>
                )}
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
            Try adjusting your search terms or category filters to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* View All Content CTA */}
      <div className="text-center mt-8 pt-8 border-t border-gray-200">
        <Link
          href="/content-showcase"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
        >
          View All Content
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery;