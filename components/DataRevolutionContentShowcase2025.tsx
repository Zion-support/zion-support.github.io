"use client";
import React{ useState } from 'react';
import Link from 'next/link';

const DataRevolutionContentShowcase2025 = () => {
  const [activeCategorysetActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'data-revolution-guide',
      title: 'AI 2025: The Enterprise Data Revolution - Ultimate Guide to 500% ROI',
      description: 'Discover how Fortune 500 companies are achieving 500% ROI with AI-powered data transformation. Complete implementation guide with real-world case studies.',
      type: 'blog',
      category: 'guides',
      readingTime: '18 min read',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        accuracy: '99.7%',
        speed: '1,200%'
      },
      url: '/blog/ai-2025-enterprise-data-revolution-ultimate-guide',
      featured: true,
      tags: [', 'AI', 'Enterprise 'Data', 'ROI'Data 'Transformation', 'Business Intelligence']
    },
    {
      id: 'fortune-500-case-study',
      title: 'Fortune 500 Data Transformation Success: 500% ROI in 8 Months',
      description: 'How a global manufacturing giant achieved 500% ROI with AI-powered data transformationsaving $45M annually and improving data accuracy to 99.7%.',
      type: 'case-study',
      category: 'case-studies',
      readingTime: '12 min read',
      metrics: {
        roi: '500%',
        savings: '$45M',
        accuracy: '99.7%',
        timeline: '8 months'
      },
      url: '/case-studies/fortune-500-data-transformation-500-roi-success',
      featured: true,
      tags: ['Case 'Study', 'Fortune 500'Data 'Transformation', 'ROI'Manufacturing']
    },
    {
      id: 'implementation-guide',
      title: 'AI Data Transformation Implementation Guide 2025: From Strategy to 500% ROI',
      description: 'Complete step-by-step guide to implementing AI-powered data transformation. Achieve 500% ROI with proven methodologiesframeworksand best practices.',
      type: 'resource',
      category: 'resources',
      readingTime: '25 min read',
      metrics: {
        success: '98%',
        roi: '500%',
        projects: '500+',
        timeline: '12 months'
      },
      url: '/resources/ai-data-transformation-implementation-guide-2025',
      featured: true,
      tags: ['Implementation 'Guide', 'AI Data 'Transformation', 'Strategy', 'ROI', 'Best Practices']
    }
  ];

  const categories = [
    { id: ''all', 'name: 'All 'Content', 'count: contentItems.length },
    { id: ''guides', 'name: 'Implementation 'Guides', 'count: contentItems.filter(item => item.category === 'guides').length },
    { id: 'case-'studies', 'name: 'Success 'Stories', 'count: contentItems.filter(item => item.category === 'case-studies').length },
    { id: ''resources', 'name: 'Resources & 'Tools', 'count: contentItems.filter(item => item.category === 'resources').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Data Revolution Content Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive resources to help you achieve 500% ROI with AI-powered data transformation. 
            From implementation guides to real-world success stories.
          </p>
        </div>

        {/* Success Metrics Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">500%</div>
            <div className="text-gray-600">Average ROI</div>
            <div className="text-sm text-gray-500 mt-1">Across all implementations</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$2.8B</div>
            <div className="text-gray-600">Total Savings</div>
            <div className="text-sm text-gray-500 mt-1">Annual cost reduction</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">99.7%</div>
            <div className="text-gray-600">Data Accuracy</div>
            <div className="text-sm text-gray-500 mt-1">Industry-leading quality</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">Success Stories</div>
            <div className="text-sm text-gray-500 mt-1">Proven implementations</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
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
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-medium">
                  ⭐ Featured Content
                </div>
              )}

              <div className="p-6">
                {/* Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)} {item.type.replace('-' ').toUpperCase()}
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
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-green-700">ROI</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-blue-700">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(03).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="text-gray-500 text-xs">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <Link
                  href={item.url}
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Achieve 500% ROI with AI Data Transformation?
            </h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Join 500+ companies already achieving unprecedented ROI with our proven AI data transformation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Assessment
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataRevolutionContentShowcase2025;