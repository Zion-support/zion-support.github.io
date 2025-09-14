'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const RevolutionaryAIContent2025Showcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentCategories = [
    { id: 'all', name: 'All Content', count: 12 },
    { id: 'blog', name: 'Blog Posts', count: 4 },
    { id: 'case-study', name: 'Case Studies', count: 4 },
    { id: 'resource', name: 'Resources', count: 4 }
  ];

  const featuredContent = [
    {
      id: 'ai-innovation-showcase-revolution',
      title: 'AI 2025-2026: The Ultimate Innovation Showcase Revolution',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 4,200% ROI through revolutionary AI innovations',
      url: '/blog/ai-2025-2026-ultimate-innovation-showcase-revolution',
      type: 'blog',
      category: 'AI Innovation',
      metrics: {
        roi: '4,200%',
        savings: '$15.8B+',
        efficiency: '1,800%',
        accuracy: '99.97%'
      },
      readingTime: '35 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'fortune-500-ai-innovation-success',
      title: 'Fortune 500 AI Innovation: $15.8B Annual Savings Success Story',
      description: 'How a Fortune 500 manufacturing company achieved 4,200% ROI through comprehensive AI innovation implementation',
      url: '/case-studies/fortune-500-ai-innovation-showcase-4200-roi-success-story',
      type: 'case-study',
      category: 'Success Story',
      metrics: {
        roi: '4,200%',
        savings: '$15.8B',
        timeline: '18 months',
        satisfaction: '99.7%'
      },
      readingTime: '22 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'ai-innovation-implementation-guide',
      title: 'AI Innovation Implementation Ultimate Guide 2025-2026',
      description: 'Complete roadmap to 4,200% ROI through revolutionary AI innovations - step-by-step implementation guide',
      url: '/resources/ai-innovation-implementation-ultimate-guide-2025-2026',
      type: 'resource',
      category: 'Implementation',
      metrics: {
        roi: '4,200%',
        success: '99.7%',
        timeline: '18 months',
        projects: '1,000+'
      },
      readingTime: '45 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'synthetic-intelligence-revolution',
      title: 'AI 2026: The Synthetic Intelligence Revolution - Ultimate Breakthrough Guide',
      description: 'Revolutionary synthetic intelligence systems delivering 3,500% ROI through self-optimizing AI capabilities',
      url: '/blog/ai-2026-synthetic-intelligence-revolution-ultimate-breakthrough',
      type: 'blog',
      category: 'Synthetic AI',
      metrics: {
        roi: '3,500%',
        savings: '$12.8B+',
        accuracy: '99.97%',
        efficiency: '1,800%'
      },
      readingTime: '32 min read',
      isNew: true,
      featured: false
    },
    {
      id: 'quantum-ai-business-revolution',
      title: 'AI 2026: The Quantum AI Business Revolution - $100B Market Transformation',
      description: 'Quantum-enhanced AI systems delivering 400-600% ROI through exponential processing power and advanced analytics',
      url: '/blog/ai-2026-quantum-ai-business-revolution',
      type: 'blog',
      category: 'Quantum AI',
      metrics: {
        roi: '400-600%',
        market: '$100B',
        speed: '1,200%',
        accuracy: '99.97%'
      },
      readingTime: '28 min read',
      isNew: true,
      featured: false
    },
    {
      id: 'fortune-500-synthetic-intelligence-transformation',
      title: 'Fortune 500 Synthetic Intelligence Transformation: $12.8B Annual Savings',
      description: 'How a Fortune 500 company achieved 3,500% ROI through synthetic intelligence implementation',
      url: '/case-studies/fortune-500-synthetic-intelligence-transformation-3500-roi-success',
      type: 'case-study',
      category: 'Synthetic AI',
      metrics: {
        roi: '3,500%',
        savings: '$12.8B',
        timeline: '18 months',
        accuracy: '99.98%'
      },
      readingTime: '20 min read',
      isNew: true,
      featured: false
    },
    {
      id: 'quantum-ai-fortune-500-transformation',
      title: 'Fortune 500 Quantum AI Transformation: $2.8B Annual Savings in 6 Months',
      description: 'Revolutionary quantum AI implementation delivering 567% ROI and $2.8B in annual savings',
      url: '/case-studies/quantum-ai-fortune-500-transformation-2026',
      type: 'case-study',
      category: 'Quantum AI',
      metrics: {
        savings: '$2.8B',
        roi: '567%',
        efficiency: '156%',
        uptime: '99.2%'
      },
      readingTime: '18 min read',
      isNew: true,
      featured: false
    },
    {
      id: 'synthetic-intelligence-implementation-guide',
      title: 'Synthetic Intelligence Implementation Guide 2026: Complete Roadmap to 3,500% ROI',
      description: 'Step-by-step guide to implementing synthetic intelligence systems that deliver extraordinary business value',
      url: '/resources/synthetic-intelligence-implementation-guide-2026',
      type: 'resource',
      category: 'Synthetic AI',
      metrics: {
        roi: '3,500%',
        timeline: '18 months',
        success: '99.7%',
        projects: '1,200+'
      },
      readingTime: '45 min read',
      isNew: true,
      featured: false
    },
    {
      id: 'quantum-ai-implementation-guide',
      title: 'Quantum AI Implementation Guide 2026: From Strategy to 567% ROI',
      description: 'Complete implementation framework for quantum-enhanced AI systems delivering exceptional business results',
      url: '/resources/quantum-ai-implementation-guide-2026',
      type: 'resource',
      category: 'Quantum AI',
      metrics: {
        roi: '567%',
        timeframe: '6 months',
        phases: '3 phases',
        payback: '3.8 months'
      },
      readingTime: '35 min read',
      isNew: true,
      featured: false
    },
    {
      id: 'ai-2025-2026-ultimate-breakthrough',
      title: 'AI 2025-2026: The Ultimate Breakthrough Revolution - 2,500% ROI',
      description: 'Comprehensive guide to next-generation AI technologies delivering 2,500% ROI through revolutionary innovations',
      url: '/blog/ai-2025-2026-ultimate-breakthrough-revolution',
      type: 'blog',
      category: 'AI Revolution',
      metrics: {
        roi: '2,500%',
        savings: '$8.2B+',
        efficiency: '1,200%',
        success: '99.7%'
      },
      readingTime: '35 min read',
      isNew: true,
      featured: false
    },
    {
      id: 'ai-2025-2026-revolutionary-transformation',
      title: 'AI 2025-2026 Revolutionary Transformation: $8.2B Company Achieves 2,500% ROI',
      description: 'How a Fortune 100 company achieved 2,500% ROI through comprehensive AI transformation in 18 months',
      url: '/case-studies/ai-2025-2026-revolutionary-transformation-2500-roi-success',
      type: 'case-study',
      category: 'AI Revolution',
      metrics: {
        roi: '2,500%',
        savings: '$8.2B',
        timeline: '18 months',
        satisfaction: '99.7%'
      },
      readingTime: '22 min read',
      isNew: true,
      featured: false
    },
    {
      id: 'ai-2025-2026-implementation-framework',
      title: 'AI 2025-2026 Implementation Ultimate Framework: Complete Roadmap to 2,500% ROI',
      description: 'Comprehensive implementation framework for achieving 2,500% ROI through next-generation AI technologies',
      url: '/resources/ai-2025-2026-implementation-ultimate-framework',
      type: 'resource',
      category: 'AI Revolution',
      metrics: {
        roi: '2,500%',
        timeline: '18-24 months',
        success: '99.7%',
        projects: '1,000+'
      },
      readingTime: '45 min read',
      isNew: true,
      featured: false
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(content => content.type === selectedCategory);

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
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            🚀 REVOLUTIONARY AI CONTENT SHOWCASE 2025-2026
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover the Future of AI Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge AI technologies and success stories that are delivering unprecedented ROI and transforming business operations across industries.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                content.featured ? 'ring-2 ring-yellow-400' : ''
              }`}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(content.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(content.type)}`}>
                      {content.type.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {content.isNew && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        NEW
                      </span>
                    )}
                    {content.featured && (
                      <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
                        FEATURED
                      </span>
                    )}
                  </div>
                </div>

                {/* Title and description */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Category and reading time */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-purple-600">
                    {content.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {content.readingTime}
                  </span>
                </div>

                {/* Success metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">
                      {content.metrics.roi}
                    </div>
                    <div className="text-xs text-green-700">ROI</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">
                      {content.metrics.savings}
                    </div>
                    <div className="text-xs text-blue-700">Savings</div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={content.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Read Full Story
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve 4,200% ROI with AI Innovation?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join Fortune 500 companies that are transforming their businesses with revolutionary AI technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/ai-innovation-implementation-ultimate-guide-2025-2026"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Implementation Guide
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryAIContent2025Showcase;