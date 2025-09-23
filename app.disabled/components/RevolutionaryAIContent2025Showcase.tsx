'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const RevolutionaryAIContent2025Showcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = [
    { id: 'all', label: 'All Content', count: 12 },
    { id: 'blog', label: 'Blog Posts', count: 4 },
    { id: 'case-study', label: 'Case Studies', count: 4 },
    { id: 'resource', label: 'Resources', count: 4 }
  ];

  const revolutionaryContent = [
    {
      id: 'ai-innovation-showcase-revolution',
      title: 'AI 2025-2026: The Ultimate Innovation Showcase Revolution',
      description: '4,200% ROI Through Next-Generation Intelligence - Discover how Fortune 500 companies are achieving unprecedented returns through advanced AI technologies.',
      type: 'blog',
      category: 'blog',
      metrics: {
        roi: '4,200%',
        savings: '$15.8B+',
        efficiency: '1,800%',
        accuracy: '99.97%'
      },
      url: '/blog/ai-2025-2026-ultimate-innovation-showcase-revolution',
      readingTime: '35 min read',
      featured: true,
      tags: ['AI Innovation', 'Next-Generation Intelligence', 'Fortune 500', 'ROI']
    },
    {
      id: 'fortune-500-innovation-success',
      title: 'Fortune 500 AI Innovation Showcase: $15.8B Annual Savings',
      description: '4,200% ROI Success Story - Learn how a Fortune 500 manufacturing conglomerate achieved extraordinary results through comprehensive AI implementation.',
      type: 'case-study',
      category: 'case-study',
      metrics: {
        roi: '4,200%',
        savings: '$15.8B',
        efficiency: '1,800%',
        satisfaction: '99.7%'
      },
      url: '/case-studies/fortune-500-ai-innovation-showcase-4200-roi-success-story',
      readingTime: '22 min read',
      featured: true,
      tags: ['Fortune 500', 'Success Story', 'Manufacturing', 'ROI']
    },
    {
      id: 'innovation-implementation-guide',
      title: 'AI Innovation Implementation Ultimate Guide 2025-2026',
      description: 'Complete Roadmap to 4,200% ROI - Comprehensive implementation guide with proven strategies, frameworks, and best practices for AI transformation.',
      type: 'resource',
      category: 'resource',
      metrics: {
        roi: '4,200%',
        timeline: '18 months',
        success: '99.7%',
        guide: '45 min read'
      },
      url: '/resources/ai-innovation-implementation-ultimate-guide-2025-2026',
      readingTime: '45 min read',
      featured: true,
      tags: ['Implementation Guide', 'ROI', 'Strategy', 'Framework']
    },
    {
      id: 'advanced-neural-architectures',
      title: 'AI 2025: Advanced Neural Architectures Revolution',
      description: '2,800% ROI Through Next-Generation Intelligence - Explore how advanced neural architectures are transforming business operations.',
      type: 'blog',
      category: 'blog',
      metrics: {
        roi: '2,800%',
        savings: '$4.2B',
        accuracy: '99.7%',
        timeline: '8 months'
      },
      url: '/blog/ai-2025-advanced-neural-architectures-revolution',
      readingTime: '25 min read',
      featured: false,
      tags: ['Neural Architectures', 'AI Revolution', 'ROI', 'Intelligence']
    },
    {
      id: 'synthetic-intelligence-breakthrough',
      title: 'AI 2025: The Synthetic Intelligence Revolution',
      description: '2,500% ROI Through Artificial General Intelligence - Discover how synthetic intelligence systems are revolutionizing business operations.',
      type: 'blog',
      category: 'blog',
      metrics: {
        roi: '2,500%',
        savings: '$8.2B+',
        accuracy: '99.7%',
        efficiency: '1,800%'
      },
      url: '/blog/ai-2025-synthetic-intelligence-revolution-ultimate-breakthrough',
      readingTime: '30 min read',
      featured: false,
      tags: ['Synthetic Intelligence', 'AGI', 'AI Revolution', 'ROI']
    },
    {
      id: 'quantum-neural-fusion',
      title: 'AI 2025: Quantum-Neural Fusion Computing Revolution',
      description: '1,200% ROI Through Hybrid Quantum-Classical Computing - Learn how quantum-neural fusion is enabling breakthrough problem-solving.',
      type: 'blog',
      category: 'blog',
      metrics: {
        roi: '1,200%',
        speed: '1,000x',
        accuracy: '99.9%',
        optimization: '89%'
      },
      url: '/blog/ai-2025-quantum-neural-fusion-revolution',
      readingTime: '28 min read',
      featured: false,
      tags: ['Quantum Computing', 'Neural Networks', 'Hybrid AI', 'ROI']
    },
    {
      id: 'fortune-500-neural-architectures',
      title: 'Fortune 500 Advanced Neural Architectures Success',
      description: '$4.2B Annual Savings with 2,800% ROI - Case study of successful neural architecture implementation in Fortune 500 manufacturing.',
      type: 'case-study',
      category: 'case-study',
      metrics: {
        roi: '2,800%',
        savings: '$4.2B',
        timeline: '8 months',
        efficiency: '156%'
      },
      url: '/case-studies/fortune-500-advanced-neural-architectures-2800-roi-success',
      readingTime: '18 min read',
      featured: false,
      tags: ['Fortune 500', 'Neural Architectures', 'Success Story', 'Manufacturing']
    },
    {
      id: 'synthetic-intelligence-success',
      title: 'Fortune 500 Synthetic Intelligence Success',
      description: '$8.2B Annual Savings - 2,500% ROI Success Story - Learn how synthetic intelligence transformed Fortune 500 operations.',
      type: 'case-study',
      category: 'case-study',
      metrics: {
        roi: '2,500%',
        savings: '$8.2B',
        timeline: '18 months',
        accuracy: '99.7%'
      },
      url: '/case-studies/synthetic-intelligence-fortune-500-2500-roi-success-story',
      readingTime: '18 min read',
      featured: false,
      tags: ['Fortune 500', 'Synthetic Intelligence', 'Success Story', 'ROI']
    },
    {
      id: 'quantum-computing-success',
      title: 'Fortune 500 Quantum Computing Success',
      description: '$2.8B Annual Savings in 6 Months - 567% ROI Success Story - Quantum computing transformation in Fortune 500 manufacturing.',
      type: 'case-study',
      category: 'case-study',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        efficiency: '156%',
        uptime: '99.2%'
      },
      url: '/case-studies/quantum-ai-fortune-500-transformation-2026',
      readingTime: '20 min read',
      featured: false,
      tags: ['Fortune 500', 'Quantum Computing', 'Success Story', 'Manufacturing']
    },
    {
      id: 'neural-architectures-guide',
      title: 'Advanced Neural Architectures Implementation Guide 2025',
      description: 'Complete Roadmap to 2,800% ROI - Comprehensive guide for implementing advanced neural architectures in enterprise environments.',
      type: 'resource',
      category: 'resource',
      metrics: {
        roi: '2,800%',
        deployments: '1,200+',
        success: '99.7%',
        timeline: '35 min'
      },
      url: '/resources/advanced-neural-architectures-implementation-guide-2025',
      readingTime: '35 min read',
      featured: false,
      tags: ['Implementation Guide', 'Neural Architectures', 'ROI', 'Strategy']
    },
    {
      id: 'synthetic-intelligence-guide',
      title: 'Synthetic Intelligence Implementation Ultimate Guide 2025',
      description: 'Complete Roadmap to 2,500% ROI - Ultimate guide for implementing synthetic intelligence systems in enterprise environments.',
      type: 'resource',
      category: 'resource',
      metrics: {
        roi: '2,500%',
        success_rate: '94%',
        deployments: '1,000+',
        timeline: '18 months'
      },
      url: '/resources/synthetic-intelligence-implementation-ultimate-guide-2025',
      readingTime: '35 min read',
      featured: false,
      tags: ['Implementation Guide', 'Synthetic Intelligence', 'ROI', 'Strategy']
    },
    {
      id: 'quantum-ai-guide',
      title: 'Quantum AI Implementation Guide 2026',
      description: 'From Strategy to 567% ROI - Complete guide for implementing quantum AI solutions in enterprise environments.',
      type: 'resource',
      category: 'resource',
      metrics: {
        roi: '567%',
        timeframe: '6 months',
        phases: '3 phases',
        payback: '3.8 months'
      },
      url: '/resources/quantum-ai-implementation-guide-2026',
      readingTime: '30 min read',
      featured: false,
      tags: ['Implementation Guide', 'Quantum AI', 'ROI', 'Strategy']
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? revolutionaryContent 
    : revolutionaryContent.filter(content => content.category === activeCategory);

  const featuredContent = revolutionaryContent.filter(content => content.featured);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            🚀 REVOLUTIONARY AI CONTENT 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Next-Generation AI Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the latest AI innovations, success stories, and implementation guides. 
            Learn how Fortune 500 companies are achieving 4,200% ROI through revolutionary AI technologies.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredContent.map((content) => (
              <div key={content.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      content.type === 'blog' ? 'bg-blue-100 text-blue-800' :
                      content.type === 'case-study' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {content.type === 'blog' ? '📝 Blog Post' :
                       content.type === 'case-study' ? '📊 Case Study' :
                       '📚 Resource Guide'}
                    </div>
                    <div className="text-sm text-gray-500">{content.readingTime}</div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {content.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{content.metrics.roi}</div>
                      <div className="text-sm text-gray-500">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{content.metrics.savings}</div>
                      <div className="text-sm text-gray-500">Savings</div>
                    </div>
                  </div>

                  <Link
                    href={content.url}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 text-center block"
                  >
                    Read Full {content.type === 'blog' ? 'Article' : content.type === 'case-study' ? 'Case Study' : 'Guide'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((content) => (
            <div key={content.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    content.type === 'blog' ? 'bg-blue-100 text-blue-800' :
                    content.type === 'case-study' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {content.type === 'blog' ? '📝 Blog Post' :
                     content.type === 'case-study' ? '📊 Case Study' :
                     '📚 Resource Guide'}
                  </div>
                  <div className="text-sm text-gray-500">{content.readingTime}</div>
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h4>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600">{content.metrics.roi}</div>
                    <div className="text-sm text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-600">{content.metrics.savings}</div>
                    <div className="text-sm text-gray-500">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={content.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 text-center block"
                >
                  Read Full {content.type === 'blog' ? 'Article' : content.type === 'case-study' ? 'Case Study' : 'Guide'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join Fortune 500 companies achieving 4,200% ROI through revolutionary AI technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get AI Consultation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAIContent2025Showcase;