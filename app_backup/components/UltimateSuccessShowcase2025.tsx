'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, StarIcon, ChartBarIcon, ClockIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const UltimateSuccessShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Content', count: 12 },
    { id: 'blog', name: 'Blog Posts', count: 5 },
    { id: 'case-study', name: 'Case Studies', count: 4 },
    { id: 'resource', name: 'Resources', count: 3 }
  ];

  const contentItems = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      description: 'Transform your business with cutting-edge AI automation that delivers 500%+ ROI',
      metrics: {
        roi: '500%+',
        savings: '$2.8B+',
        efficiency: '89%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      isNew: true,
      featured: true,
      tags: ['AI Automation', 'ROI', 'Enterprise', 'Success Guide']
    },
    {
      id: 'ai-transformation-1000-roi',
      title: 'AI Transformation Success: $2.8B Company Achieves 1,000% ROI in 18 Months',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/ai-transformation-1000-percent-roi-ultimate-success-story',
      description: 'Real-world success story revealing the exact strategies that delivered unprecedented results',
      metrics: {
        roi: '1,000%',
        savings: '$280M',
        timeline: '18 months',
        efficiency: '89%'
      },
      readingTime: '20 min read',
      isNew: true,
      featured: true,
      tags: ['Success Story', 'Fortune 500', 'ROI', 'Transformation']
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: Ultimate Success Framework',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-2025-implementation-master-guide-ultimate-success-framework',
      description: 'The complete roadmap to achieving 500%+ ROI with AI transformation',
      metrics: {
        roi: '500%+',
        success: '94%',
        timeline: '18 months',
        projects: '500+'
      },
      readingTime: '35 min read',
      isNew: true,
      featured: true,
      tags: ['Implementation', 'Framework', 'ROI', 'Strategy']
    },
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      description: 'Master the enterprise AI revolution with proven strategies and frameworks',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        efficiency: '99.8%',
        success: '98%'
      },
      readingTime: '35 min read',
      isNew: true,
      featured: false,
      tags: ['Enterprise AI', 'Revolution', 'Breakthrough', 'Strategy']
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Success 2025: $2.8B Annual Savings',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/fortune-500-ai-success-2025',
      description: 'How Fortune 500 companies are achieving unprecedented AI transformation results',
      metrics: {
        savings: '$2.8B',
        roi: '1,500%',
        timeline: '8 months',
        efficiency: '89%'
      },
      readingTime: '20 min read',
      isNew: true,
      featured: false,
      tags: ['Fortune 500', 'Success Story', 'ROI', 'Transformation']
    },
    {
      id: 'ai-roi-guide',
      title: 'AI ROI Guide 2025: Achieve 1,200% ROI',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-roi-guide-2025',
      description: 'Comprehensive guide to calculating and achieving maximum ROI from AI investments',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        efficiency: '99.8%',
        accuracy: '95%'
      },
      readingTime: '15 min read',
      isNew: true,
      featured: false,
      tags: ['ROI', 'Guide', 'Investment', 'Strategy']
    },
    {
      id: 'quantum-ai-revolution',
      title: 'AI 2025: The Quantum AI Business Revolution - $100B Market Transformation',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      description: 'Explore the quantum AI revolution that\'s transforming the $100B market',
      metrics: {
        roi: '1,200%',
        market: '$100B',
        accuracy: '99.97%',
        speed: '1,200%'
      },
      readingTime: '20 min read',
      isNew: true,
      featured: false,
      tags: ['Quantum AI', 'Revolution', 'Market', 'Transformation']
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation 2025: How a $200M Health System Achieved 300% ROI',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/healthcare-ai-transformation-2025-success',
      description: 'Real-world healthcare AI transformation success story with proven results',
      metrics: {
        roi: '300%',
        savings: '$18.7M',
        satisfaction: '95%',
        efficiency: '67%'
      },
      readingTime: '15 min read',
      isNew: true,
      featured: false,
      tags: ['Healthcare', 'Success Story', 'ROI', 'Transformation']
    },
    {
      id: 'implementation-ultimate-guide',
      title: 'AI Implementation Ultimate Guide 2025: From Strategy to 500% ROI - Complete Edition',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-implementation-ultimate-guide-2025-complete',
      description: 'Complete implementation guide covering every aspect of AI transformation',
      metrics: {
        roi: '500%+',
        success: '94%',
        timeline: '18 months',
        projects: '500+'
      },
      readingTime: '35 min read',
      isNew: true,
      featured: false,
      tags: ['Implementation', 'Complete Guide', 'ROI', 'Strategy']
    },
    {
      id: 'neural-architecture-revolution',
      title: 'AI 2025 Neural Architecture Search Revolution: Enterprise Breakthrough Guide',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-neural-architecture-search-revolution-enterprise-breakthrough',
      description: 'Master neural architecture search for enterprise AI breakthrough',
      metrics: {
        performance: '40%',
        speed: '300%',
        roi: '340%',
        accuracy: '95%'
      },
      readingTime: '12 min read',
      isNew: true,
      featured: false,
      tags: ['Neural Architecture', 'Enterprise', 'Breakthrough', 'AI']
    },
    {
      id: 'federated-learning-breakthrough',
      title: 'AI 2025 Federated Learning: Enterprise Privacy Breakthrough Guide',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-federated-learning-enterprise-privacy-breakthrough',
      description: 'Achieve enterprise privacy breakthrough with federated learning',
      metrics: {
        privacy: '99%',
        speed: '200%',
        roi: '280%',
        security: '95%'
      },
      readingTime: '10 min read',
      isNew: true,
      featured: false,
      tags: ['Federated Learning', 'Privacy', 'Enterprise', 'Security']
    },
    {
      id: 'multimodal-retail-transformation',
      title: 'AI 2025 Multimodal Retail Transformation: Ultimate Success Story',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/ai-2025-multimodal-retail-transformation-ultimate-success',
      description: 'Multimodal AI retail transformation success story with 400% revenue growth',
      metrics: {
        revenue: '400%',
        growth: '$2.5B',
        satisfaction: '85%',
        roi: '1,200%'
      },
      readingTime: '8 min read',
      isNew: true,
      featured: false,
      tags: ['Multimodal AI', 'Retail', 'Success Story', 'Revenue Growth']
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const featuredContent = contentItems.filter(item => item.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <StarIcon className="w-5 h-5 mr-2" />
            <span className="font-semibold">ULTIMATE SUCCESS CONTENT COLLECTION 2025</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That Delivers Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the proven frameworks, strategies, and success stories that Fortune 500 companies use to achieve unprecedented AI transformation results with 500%+ ROI.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Ultimate Success Content</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredContent.map((content) => (
              <div key={content.id} className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {content.type.toUpperCase()}
                      </span>
                      {content.isNew && (
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        FEATURED
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {content.readingTime}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {content.description}
                  </p>

                  {/* Success Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(content.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-purple-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={content.url}
                    className="inline-flex items-center w-full justify-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Read Full Content
                    <ChevronRightIcon className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div key={content.id} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {content.type.toUpperCase()}
                    </span>
                    {content.isNew && (
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {content.readingTime}
                  </div>
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                  {content.title}
                </h4>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {content.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Metric */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-3 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {Object.values(content.metrics)[0]}
                    </div>
                    <div className="text-sm text-gray-600">
                      {Object.keys(content.metrics)[0].replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                </div>

                <Link
                  href={content.url}
                  className="inline-flex items-center w-full justify-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Read More
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your AI Transformation Journey?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Get personalized consultation and ROI analysis for your AI transformation journey. Our experts will help you achieve 500%+ ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consultation"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-3 rounded-lg transition-all duration-200"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateSuccessShowcase2025;