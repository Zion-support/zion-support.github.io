import React, { useState } from 'react';
import Link from 'next/link';

const AdvancedAutomationContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'advanced-automation-guide',
      title: 'AI 2025: Advanced Automation Revolution - Ultimate Enterprise Guide',
      description: 'Transform your business with next-generation AI automation solutions achieving 600% ROI within 12 months.',
      type: 'blog',
      category: 'guides',
      readingTime: '18 min read',
      metrics: {
        roi: '600%',
        savings: '$2.8M',
        productivity: '340%',
        success: '98%'
      },
      url: '/blog/ai-2025-advanced-automation-revolution-ultimate-guide',
      featured: true,
      tags: ['AI Automation', 'Enterprise', 'ROI', 'Strategy', '2025']
    },
    {
      id: 'fortune-500-case-study',
      title: 'Fortune 500 AI Automation Success: $3.2B Annual Savings with 600% ROI',
      description: 'How a global manufacturing giant transformed operations with comprehensive AI automation implementation.',
      type: 'case-study',
      category: 'case-studies',
      readingTime: '12 min read',
      metrics: {
        roi: '600%',
        savings: '$3.2B',
        efficiency: '89%',
        satisfaction: '98%'
      },
      url: '/case-studies/ai-automation-fortune-500-success-600-roi',
      featured: true,
      tags: ['Case Study', 'Fortune 500', 'Manufacturing', 'Success Story', 'ROI']
    },
    {
      id: 'implementation-master-guide',
      title: 'AI Automation Implementation Master Guide 2025: From Strategy to 600% ROI',
      description: 'The complete blueprint for enterprise AI automation success with proven methodologies and best practices.',
      type: 'resource',
      category: 'resources',
      readingTime: '25 min read',
      metrics: {
        success: '98%',
        payback: '3.2 months',
        implementations: '500+',
        roi: '600%'
      },
      url: '/resources/ai-automation-implementation-master-guide-2025',
      featured: true,
      tags: ['Implementation Guide', 'Strategy', 'Best Practices', 'Framework', 'ROI']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'guides', name: 'Guides', count: content.filter(item => item.category === 'guides').length },
    { id: 'case-studies', name: 'Case Studies', count: content.filter(item => item.category === 'case-studies').length },
    { id: 'resources', name: 'Resources', count: content.filter(item => item.category === 'resources').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced AI Automation Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest insights, case studies, and implementation guides for achieving 600% ROI with AI automation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-medium">
                  ⭐ FEATURED
                </div>
              )}

              <div className="p-6">
                {/* Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)} {item.type.replace('-', ' ').toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-green-700">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-blue-700">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors"
                >
                  Read Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics Summary */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Proven Results Across 500+ Implementations</h3>
            <p className="text-xl text-purple-100">
              Our content is based on real-world implementations achieving remarkable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">600%</div>
              <div className="text-purple-200">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$2.8M</div>
              <div className="text-purple-200">Average Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-purple-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3.2</div>
              <div className="text-purple-200">Months Payback</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a personalized AI automation assessment and implementation roadmap tailored to your organization's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Get Free Assessment
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAutomationContentShowcase2025;