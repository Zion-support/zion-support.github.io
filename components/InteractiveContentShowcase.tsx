import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'guide' | 'tool';
  category: string;
  readTime: string;
  publishedDate: string;
  featured: boolean;
  tags: string[];
  href: string;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI Cost Calculator 2026: Optimize Your AI Spending',
    description: 'Calculate and optimize your AI costs with our comprehensive guide. Save up to 70% on LLM expenses.',
    type: 'tool',
    category: 'Cost Optimization',
    readTime: '12 min read',
    publishedDate: '2026-01-20',
    featured: true,
    tags: ['AI costs', 'LLM optimization', 'ROI calculator'],
    href: '/blog/ai-cost-calculator-2026'
  },
  {
    id: '2',
    title: 'AI Implementation Playbook 2026: Complete Enterprise Guide',
    description: 'Master AI implementation with our comprehensive enterprise guide. Achieve 300% ROI with proven methodologies.',
    type: 'guide',
    category: 'Implementation',
    readTime: '20 min read',
    publishedDate: '2026-01-20',
    featured: true,
    tags: ['AI strategy', 'enterprise AI', 'implementation'],
    href: '/blog/ai-implementation-playbook-2026'
  },
  {
    id: '3',
    title: 'AI Supply Chain Optimization: 85% Efficiency Gain & $5M Savings',
    description: 'See how we helped a global manufacturer achieve 85% efficiency improvement and $5M annual savings.',
    type: 'case-study',
    category: 'Manufacturing',
    readTime: '15 min read',
    publishedDate: '2026-01-20',
    featured: true,
    tags: ['supply chain', 'manufacturing', 'efficiency'],
    href: '/case-studies/ai-supply-chain-optimization-2026'
  },
  {
    id: '4',
    title: 'Trustworthy AI Agents 2026: Safety, Compliance, and Observability',
    description: 'Deploy trustworthy AI agents with guardrails, approvals, and end-to-end observability.',
    type: 'blog',
    category: 'AI Agents',
    readTime: '11 min read',
    publishedDate: '2026-01-18',
    featured: false,
    tags: ['AI agents', 'safety', 'compliance'],
    href: '/blog/ai-trustworthy-agents-2026'
  },
  {
    id: '5',
    title: 'AI Value Stream Analytics 2026: Trace ROI from Token to Revenue',
    description: 'Tie AI cost, latency, and quality to business value with end-to-end tracing.',
    type: 'blog',
    category: 'Analytics',
    readTime: '9 min read',
    publishedDate: '2026-01-17',
    featured: false,
    tags: ['analytics', 'ROI', 'value stream'],
    href: '/blog/ai-value-stream-analytics-2026'
  },
  {
    id: '6',
    title: 'FinTech AI Risk Compliance: 70% Risk Reduction & $2.5M Savings',
    description: 'See how a leading fintech achieved 70% risk reduction with automated governance frameworks.',
    type: 'case-study',
    category: 'FinTech',
    readTime: '12 min read',
    publishedDate: '2026-01-15',
    featured: false,
    tags: ['fintech', 'risk management', 'compliance'],
    href: '/case-studies/fintech-ai-risk-compliance-2025'
  }
];

export default function InteractiveContentShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['All', ...Array.from(new Set(contentItems.map(item => item.category)))];
  const types = ['All', ...Array.from(new Set(contentItems.map(item => item.type)))];

  const filteredItems = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesType = selectedType === 'All' || item.type === selectedType;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesType && matchesSearch;
  });

  const featuredItems = filteredItems.filter(item => item.featured);
  const regularItems = filteredItems.filter(item => !item.featured);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'guide': return '📖';
      case 'tool': return '🛠️';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'guide': return 'bg-purple-100 text-purple-800';
      case 'tool': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Interactive Content Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest AI insights, case studies, and tools. Filter by category, 
            type, or search for specific topics.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Content
              </label>
              <input
                type="text"
                placeholder="Search articles, guides, tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedType('All');
                  setSearchTerm('');
                }}
                className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        {featuredItems.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Content</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredItems.map(item => (
                <Link key={item.id} href={item.href} className="group">
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}>
                        {getTypeIcon(item.type)} {item.type}
                      </span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{item.readTime}</span>
                      <span>{new Date(item.publishedDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Regular Content */}
        {regularItems.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">All Content</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularItems.map(item => (
                <Link key={item.id} href={item.href} className="group">
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}>
                        {getTypeIcon(item.type)} {item.type}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{item.readTime}</span>
                      <span>{new Date(item.publishedDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Content Found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search terms to find relevant content.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedType('All');
                setSearchTerm('');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need Custom AI Solutions?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our experts can help you implement AI solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}