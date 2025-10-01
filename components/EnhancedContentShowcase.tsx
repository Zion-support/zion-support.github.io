import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'case-study' | 'guide' | 'video';
  category: string;
  readTime: string;
  publishDate: string;
  featured: boolean;
  tags: string[];
  metrics: {
    views: number;
    rating: number;
    saves: number;
  };
  href: string;
}

const contentItems: ContentItem[] = [
  {
    id: 'operational-excellence-2026',
    title: 'AI Operational Excellence 2026: Complete Enterprise Implementation Guide',
    description: 'Transform your enterprise operations with 95% automation rates, $5M+ savings, and zero-touch operations.',
    type: 'guide',
    category: 'Enterprise AI',
    readTime: '18 min read',
    publishDate: '2026-01-20',
    featured: true,
    tags: ['Operational Excellence', 'Automation', 'Enterprise', 'ROI'],
    metrics: { views: 2847, rating: 4.9, saves: 156 },
    href: '/blog/ai-operational-excellence-2026'
  },
  {
    id: 'enterprise-agents-blueprint-2026',
    title: 'AI Enterprise Agents Blueprint 2026: Production-Grade Patterns',
    description: 'Blueprint for designing, deploying, and operating enterprise AI agents with governance, observability, and ROI.',
    type: 'guide',
    category: 'Enterprise AI',
    readTime: '18 min read',
    publishDate: '2026-01-25',
    featured: true,
    tags: ['Agents', 'Orchestration', 'Governance', 'ROI'],
    metrics: { views: 0, rating: 5.0, saves: 0 },
    href: '/blog/ai-enterprise-agents-blueprint-2026'
  },
  {
    id: 'agent-observability-2026',
    title: 'AI Agent Observability 2026: Complete Monitoring & Debugging Guide',
    description: 'Achieve 99.9% AI agent reliability with comprehensive observability and real-time monitoring.',
    type: 'guide',
    category: 'AI Operations',
    readTime: '11 min read',
    publishDate: '2026-01-20',
    featured: true,
    tags: ['Observability', 'Monitoring', 'Debugging', 'Reliability'],
    metrics: { views: 1923, rating: 4.8, saves: 89 },
    href: '/blog/ai-agent-observability-2026'
  },
  {
    id: 'manufacturing-transformation-2026',
    title: 'AI Manufacturing Transformation 2026: $12M ROI Case Study',
    description: 'See how a global manufacturing leader achieved 98% automation, 400% productivity gains, and $12M annual ROI.',
    type: 'case-study',
    category: 'Manufacturing',
    readTime: '15 min read',
    publishDate: '2026-01-20',
    featured: true,
    tags: ['Manufacturing', 'ROI', 'Automation', 'Case Study'],
    metrics: { views: 3456, rating: 4.9, saves: 234 },
    href: '/case-studies/ai-manufacturing-transformation-2026'
  },
  {
    id: 'multimodal-enterprise-2026',
    title: 'AI Multimodal Enterprise 2026: Complete Implementation Guide',
    description: 'Master multimodal AI for enterprise with vision, language, and audio processing. 85% efficiency gains and $2M+ ROI.',
    type: 'guide',
    category: 'Multimodal AI',
    readTime: '22 min read',
    publishDate: '2026-01-15',
    featured: true,
    tags: ['Multimodal', 'Vision', 'Language', 'Audio'],
    metrics: { views: 2156, rating: 4.7, saves: 123 },
    href: '/blog/ai-multimodal-enterprise-2026'
  },
  {
    id: 'enterprise-automation-2026',
    title: 'AI Enterprise Automation 2026: Complete Business Process Transformation',
    description: 'Transform your enterprise with AI automation. 95% process efficiency, $5M+ savings, and zero-touch operations.',
    type: 'guide',
    category: 'Process Automation',
    readTime: '18 min read',
    publishDate: '2026-01-18',
    featured: true,
    tags: ['Automation', 'Process', 'Transformation', 'Efficiency'],
    metrics: { views: 1876, rating: 4.8, saves: 98 },
    href: '/blog/ai-enterprise-automation-2026'
  },
  {
    id: 'trustworthy-agents-2026',
    title: 'Trustworthy AI Agents 2026: Safety, Compliance, and Observability',
    description: 'Deploy trustworthy AI agents with guardrails, approvals, and end-to-end observability.',
    type: 'guide',
    category: 'AI Safety',
    readTime: '11 min read',
    publishDate: '2026-01-12',
    featured: true,
    tags: ['Trustworthy', 'Safety', 'Compliance', 'Agents'],
    metrics: { views: 1678, rating: 4.6, saves: 87 },
    href: '/blog/ai-trustworthy-agents-2026'
  }
];

const categories = ['All', 'Enterprise AI', 'AI Operations', 'Manufacturing', 'Multimodal AI', 'Process Automation', 'AI Safety'];

export default function EnhancedContentShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredContent, setFilteredContent] = useState(contentItems);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let filtered = contentItems;

    // Filter by category
    if (selectedCategory !== 'All') {
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
      case 'featured':
        filtered = filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'views':
        filtered = filtered.sort((a, b) => b.metrics.views - a.metrics.views);
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.metrics.rating - a.metrics.rating);
        break;
      case 'newest':
        filtered = filtered.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
        break;
    }

    setFilteredContent(filtered);
  }, [selectedCategory, sortBy, searchQuery]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return '📚';
      case 'case-study': return '📊';
      case 'article': return '📝';
      case 'video': return '🎥';
      default: return '📄';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Enterprise AI': 'bg-blue-100 text-blue-800',
      'AI Operations': 'bg-green-100 text-green-800',
      'Manufacturing': 'bg-orange-100 text-orange-800',
      'Multimodal AI': 'bg-purple-100 text-purple-800',
      'Process Automation': 'bg-teal-100 text-teal-800',
      'AI Safety': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Interactive Content Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI guides, case studies, and insights. Filter, search, and discover content tailored to your needs.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12 border border-gray-200">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search content, tags, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
            </div>

            {/* Sort */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="featured">Featured First</option>
                <option value="newest">Newest First</option>
                <option value="views">Most Views</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
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

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{getTypeIcon(item.type)}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                    </div>
                    {item.featured && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                        ⭐ Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <span>👁️</span>
                      <span>{item.metrics.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>⭐</span>
                      <span>{item.metrics.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>💾</span>
                      <span>{item.metrics.saves}</span>
                    </div>
                    <span>{item.readTime}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {new Date(item.publishDate).toLocaleDateString()}
                    </span>
                    <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Read {item.type === 'case-study' ? 'Case Study' : 'Article'} →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Results Summary */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Showing {filteredContent.length} of {contentItems.length} content items
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our expert team creates custom content and solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Custom Content
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Browse All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}