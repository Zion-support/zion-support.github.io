'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = [
    { id: 'all', label: 'All Content', count: 12 },
    { id: 'blog', label: 'Blog Posts', count: 5 },
    { id: 'case-study', label: 'Case Studies', count: 4 },
    { id: 'resource', label: 'Resources', count: 3 }
  ];

  const featuredContent = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Guide to 500% ROI',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-guide',
      description: 'Discover how Fortune 500 companies are achieving 500% ROI with AI transformation. Complete guide to enterprise AI implementation, strategy, and success metrics.',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        satisfaction: '98%',
        readingTime: '18 min read'
      },
      tags: ['AI', 'Enterprise', 'ROI', 'Digital Transformation', '2025'],
      featured: true,
      isNew: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $280M Savings with 1,000% ROI',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-1000-percent-roi-ultimate-success',
      description: 'How a Fortune 500 manufacturing company achieved 1,000% ROI and $280M in annual savings through comprehensive AI transformation.',
      metrics: {
        roi: '1,000%',
        savings: '$280M',
        timeline: '18 months',
        readingTime: '15 min read'
      },
      tags: ['Fortune 500', 'AI Transformation', 'ROI', 'Manufacturing', 'Success Story'],
      featured: true,
      isNew: true
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: Ultimate Success Framework',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-2025-implementation-master-guide-ultimate-success-framework',
      description: 'Complete step-by-step guide to implementing AI in your enterprise. Proven framework that has delivered 500%+ ROI for 500+ companies.',
      metrics: {
        roi: '500%+',
        successRate: '94%',
        companies: '500+',
        readingTime: '25 min read'
      },
      tags: ['AI Implementation', 'Framework', 'ROI', 'Enterprise', 'Guide'],
      featured: true,
      isNew: true
    },
    {
      id: 'generative-ai-revolution',
      title: 'AI 2025: The Generative AI Enterprise Revolution - $2.3T Market Transformation',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-generative-ai-enterprise-revolution',
      description: 'Explore how generative AI is transforming enterprise operations with $2.3T market impact and 340% average ROI.',
      metrics: {
        roi: '340%',
        savings: '$180M',
        accuracy: '99.7%',
        readingTime: '12 min read'
      },
      tags: ['Generative AI', 'Enterprise', 'ROI', 'Digital Transformation'],
      featured: false,
      isNew: false
    },
    {
      id: 'mlops-breakthrough',
      title: 'AI 2025: MLOps Breakthrough - 99.9% Model Reliability with 67% Faster Deployment',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-machine-learning-operations-mlops-breakthrough',
      description: 'Learn how MLOps is revolutionizing AI deployment with 99.9% model reliability and 67% faster deployment times.',
      metrics: {
        reliability: '99.9%',
        deploymentSpeed: '67%',
        savings: '$2.1B',
        readingTime: '10 min read'
      },
      tags: ['MLOps', 'Machine Learning', 'DevOps', 'AI Operations'],
      featured: false,
      isNew: false
    },
    {
      id: 'retail-transformation',
      title: 'Retail AI Transformation 2025: $500M Company Achieves 280% ROI',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/retail-ai-transformation-2025-ultimate-success',
      description: 'How a $500M retail company achieved 280% ROI with AI-powered operations and customer experience improvements.',
      metrics: {
        roi: '280%',
        savings: '$45M',
        satisfaction: '99.2%',
        readingTime: '8 min read'
      },
      tags: ['Retail', 'AI Transformation', 'ROI', 'Case Study'],
      featured: false,
      isNew: false
    },
    {
      id: 'ai-implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: From Strategy to 500% ROI in 12 Months',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-2025-implementation-master-guide',
      description: 'Complete implementation guide with proven strategies to achieve 500% ROI in 12 months.',
      metrics: {
        roi: '500%',
        timeline: '12 months',
        successRate: '94%',
        readingTime: '20 min read'
      },
      tags: ['AI Implementation', 'Strategy', 'ROI', 'Guide'],
      featured: false,
      isNew: false
    },
    {
      id: 'cybersecurity-revolution',
      title: 'AI 2025: The Cybersecurity Revolution That\'s Protecting Enterprises',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-cybersecurity-revolution',
      description: 'Discover how AI is revolutionizing cybersecurity with 95% threat reduction and $2.3M average cost savings.',
      metrics: {
        threatReduction: '95%',
        costSavings: '$2.3M',
        responseTime: '67% faster',
        readingTime: '14 min read'
      },
      tags: ['AI', 'Cybersecurity', 'Enterprise Security', 'Threat Detection'],
      featured: false,
      isNew: false
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation: $2.1B Health System Achieves 99.8% Patient Safety',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/healthcare-ai-transformation-2025',
      description: 'How a $2.1B health system achieved 99.8% patient safety with AI-powered diagnostic and treatment systems.',
      metrics: {
        savings: '$180M',
        accuracy: '99.8%',
        satisfaction: '94%',
        readingTime: '11 min read'
      },
      tags: ['Healthcare', 'Case Study', 'Patient Safety', 'AI Transformation'],
      featured: false,
      isNew: false
    },
    {
      id: 'ai-implementation-roi-calculator',
      title: 'AI Implementation ROI Calculator Guide 2025: Calculate Your 500%+ ROI Potential',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-implementation-roi-calculator-guide-2025',
      description: 'Interactive ROI calculator and guide to help you calculate your AI implementation potential and expected returns.',
      metrics: {
        roi: '500%+',
        accuracy: '95%',
        users: '10,000+',
        readingTime: 'Interactive Tool'
      },
      tags: ['ROI Calculator', 'AI Implementation', 'Guide', 'ROI'],
      featured: false,
      isNew: false
    },
    {
      id: 'ai-enterprise-automation-revolution',
      title: 'AI 2025: The Enterprise Automation Revolution - 500% ROI',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      description: 'Learn how enterprise automation is delivering 500% ROI through intelligent process automation and optimization.',
      metrics: {
        roi: '500%',
        savings: '$200M',
        satisfaction: '99.8%',
        readingTime: '16 min read'
      },
      tags: ['AI', 'Enterprise Automation', 'ROI', 'Business Transformation'],
      featured: false,
      isNew: false
    },
    {
      id: 'ai-transformation-500-roi-success',
      title: 'AI Transformation Success: $2B Company Achieves 500% ROI',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/ai-transformation-500-roi-success-story',
      description: 'Real-world success story of a $2B company that achieved 500% ROI through comprehensive AI transformation.',
      metrics: {
        roi: '500%',
        savings: '$200M',
        satisfaction: '99.8%',
        readingTime: '9 min read'
      },
      tags: ['Case Study', 'AI Transformation', 'ROI', 'Enterprise', 'Success Story'],
      featured: false,
      isNew: false
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(content => content.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT COLLECTION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ultimate AI Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive collection of AI content that has delivered <span className="font-bold text-purple-600">500%+ ROI</span> for 500+ companies worldwide
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500%+</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Companies Served</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">94%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">$2.8M</div>
            <div className="text-gray-600">Average Savings</div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                content.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(content.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getTypeColor(content.type)}`}>
                      {content.type.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {content.isNew && (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">
                        NEW
                      </span>
                    )}
                    {content.featured && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">
                        FEATURED
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {content.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-purple-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-purple-600">{content.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-green-600">{content.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="text-sm text-gray-500 mb-4">
                  {content.metrics.readingTime}
                </div>
              </div>

              {/* Content Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t">
                <div className="flex items-center justify-between">
                  <Link
                    href={content.url}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm"
                  >
                    Read {content.type === 'blog' ? 'Article' : content.type === 'case-study' ? 'Case Study' : 'Guide'}
                  </Link>
                  <Link
                    href="/contact"
                    className="text-purple-600 hover:text-purple-800 font-semibold text-sm"
                  >
                    Get Consultation →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join 500+ companies that have achieved 500%+ ROI with our proven AI implementation framework
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free AI Assessment
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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

export default NewContent2025UltimateShowcase;