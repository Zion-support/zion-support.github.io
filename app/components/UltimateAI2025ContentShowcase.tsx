'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateAI2025ContentShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = [
    { id: 'all', label: 'All Content', count: 12 },
    { id: 'blog', label: 'Blog Posts', count: 4 },
    { id: 'case-study', label: 'Case Studies', count: 4 },
    { id: 'resource', label: 'Resources', count: 4 }
  ];

  const featuredContent = [
    {
      id: 'ultimate-enterprise-transformation',
      title: 'AI 2025: The Ultimate Enterprise Transformation Revolution - Ultimate Breakthrough Guide to 3,000% ROI',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 3,000% ROI through revolutionary AI transformation strategies. Complete implementation guide with real-world success stories.',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-ultimate-enterprise-transformation-revolution-ultimate-breakthrough',
      metrics: {
        roi: '3,000%',
        savings: '$15.8B+',
        efficiency: '2,400%',
        satisfaction: '99.7%'
      },
      badge: 'Ultimate Breakthrough',
      readingTime: '35 min read',
      featured: true,
      tags: ['AI Transformation', 'Enterprise Revolution', 'ROI', 'Fortune 500']
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 Ultimate AI Transformation: $15.8B Annual Savings - 3,000% ROI Ultimate Success Story',
      description: 'How a Fortune 500 manufacturing giant achieved unprecedented 3,000% ROI while saving $15.8B annually through revolutionary AI implementation.',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/fortune-500-ultimate-ai-transformation-3000-roi-ultimate-success-story',
      metrics: {
        roi: '3,000%',
        savings: '$15.8B',
        timeline: '18 months',
        success: '99.7%'
      },
      badge: 'Ultimate Success',
      readingTime: '25 min read',
      featured: true,
      tags: ['Fortune 500', 'AI Transformation', 'ROI', 'Success Story']
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Ultimate Transformation Implementation Master Guide: Complete Roadmap to 3,000% ROI',
      description: 'The definitive implementation guide for achieving 3,000% ROI through AI transformation. Complete roadmap with proven methodologies, tools, and strategies.',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-2025-ultimate-transformation-implementation-master-guide-3000-roi',
      metrics: {
        roi: '3,000%',
        success: '94%',
        timeline: '18 months',
        guide: 'Complete'
      },
      badge: 'Master Guide',
      readingTime: '45 min read',
      featured: true,
      tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Master Guide']
    },
    {
      id: 'ai-2025-enterprise-automation-revolution',
      title: 'AI 2025: The Enterprise Automation Revolution - 500% ROI',
      description: 'Revolutionary AI automation strategies that are transforming Fortune 500 companies with 500% ROI and unprecedented efficiency gains.',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      metrics: {
        roi: '500%',
        savings: '$200M',
        efficiency: '340%',
        satisfaction: '98%'
      },
      badge: 'Revolution',
      readingTime: '25 min read',
      featured: false,
      tags: ['AI Automation', 'Enterprise', 'ROI', 'Revolution']
    },
    {
      id: 'fortune-500-ai-transformation-500-roi',
      title: 'Fortune 500 AI Transformation: 500% ROI Ultimate Success Story',
      description: 'How a Fortune 500 company achieved 500% ROI through comprehensive AI transformation, saving $200M annually while revolutionizing operations.',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-500-roi-ultimate-success-story',
      metrics: {
        roi: '500%',
        savings: '$200M',
        timeline: '12 months',
        success: '99.8%'
      },
      badge: 'Success Story',
      readingTime: '18 min read',
      featured: false,
      tags: ['Fortune 500', 'AI Transformation', 'ROI', 'Success']
    },
    {
      id: 'ai-implementation-guide-2025',
      title: 'AI 2025 Implementation Guide: From Strategy to 500% ROI',
      description: 'Complete implementation guide for AI transformation success. Proven methodologies and strategies for achieving 500% ROI in 12 months.',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-2025-implementation-guide',
      metrics: {
        roi: '500%',
        success: '98%',
        timeline: '12 months',
        guide: 'Complete'
      },
      badge: 'Implementation',
      readingTime: '30 min read',
      featured: false,
      tags: ['Implementation', 'AI Strategy', 'ROI', 'Guide']
    },
    {
      id: 'quantum-ai-business-revolution',
      title: 'AI 2025: The Quantum AI Business Revolution - $100B Market Transformation',
      description: 'Revolutionary quantum AI technologies that are reshaping entire industries with $100B market transformation and unprecedented business opportunities.',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-quantum-ai-business-revolution',
      metrics: {
        roi: '1,200%',
        market: '$100B',
        accuracy: '99.97%',
        speed: '1,200%'
      },
      badge: 'Quantum Revolution',
      readingTime: '20 min read',
      featured: false,
      tags: ['Quantum AI', 'Business Revolution', 'ROI', 'Market']
    },
    {
      id: 'healthcare-ai-transformation-2025',
      title: 'Healthcare AI Transformation 2025: $2.1B Health System Achieves 99.8% Patient Safety',
      description: 'Revolutionary healthcare AI transformation achieving 99.8% patient safety while saving $2.1B annually through intelligent automation.',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/healthcare-ai-transformation-2025',
      metrics: {
        savings: '$2.1B',
        accuracy: '99.8%',
        satisfaction: '94%',
        safety: '99.8%'
      },
      badge: 'Healthcare Success',
      readingTime: '15 min read',
      featured: false,
      tags: ['Healthcare', 'AI Transformation', 'Patient Safety', 'Success']
    },
    {
      id: 'ai-roi-calculator-guide-2025',
      title: 'AI Implementation ROI Calculator Guide 2025: Calculate Your 500%+ ROI Potential',
      description: 'Interactive ROI calculator and guide for AI implementation. Calculate your potential 500%+ ROI with our comprehensive assessment tools.',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-implementation-roi-calculator-guide-2025',
      metrics: {
        roi: '500%+',
        accuracy: '95%',
        users: '10,000+',
        satisfaction: '97%'
      },
      badge: 'ROI Calculator',
      readingTime: '15 min read',
      featured: false,
      tags: ['ROI Calculator', 'AI Implementation', 'Guide', 'Assessment']
    },
    {
      id: 'ai-2025-cybersecurity-revolution',
      title: 'AI 2025: The Cybersecurity Revolution - Ultimate Guide',
      description: 'Revolutionary AI-powered cybersecurity solutions protecting enterprises with 95% threat reduction and $2.3M average cost savings.',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-cybersecurity-revolution-ultimate-guide',
      metrics: {
        roi: '340%',
        savings: '$2.3M',
        threat_reduction: '95%',
        response_time: '67%'
      },
      badge: 'Cybersecurity',
      readingTime: '28 min read',
      featured: false,
      tags: ['Cybersecurity', 'AI', 'Enterprise Security', 'ROI']
    },
    {
      id: 'manufacturing-ai-transformation-ultimate-success',
      title: 'Manufacturing AI Transformation: Ultimate Success Story',
      description: 'Revolutionary manufacturing AI transformation achieving 85% efficiency gains and 340% ROI through intelligent automation and optimization.',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/manufacturing-ai-transformation-ultimate-success',
      metrics: {
        roi: '340%',
        efficiency: '85%',
        cost_reduction: '60%',
        quality: '93%'
      },
      badge: 'Manufacturing',
      readingTime: '12 min read',
      featured: false,
      tags: ['Manufacturing', 'AI Transformation', 'Efficiency', 'Success']
    },
    {
      id: 'ai-automation-implementation-guide-2025',
      title: 'AI Automation Implementation Guide 2025: From Strategy to ROI',
      description: 'Complete guide to AI automation implementation. Proven strategies for achieving 300-500% ROI with comprehensive implementation roadmap.',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-automation-implementation-guide-2025',
      metrics: {
        roi: '300-500%',
        projects: '500+',
        satisfaction: '98%',
        timeline: '18-24 months'
      },
      badge: 'Automation Guide',
      readingTime: '25 min read',
      featured: false,
      tags: ['Automation', 'Implementation', 'ROI', 'Strategy']
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(content => content.category === activeCategory);

  const featuredItems = featuredContent.filter(content => content.featured);
  const regularItems = filteredContent.filter(content => !content.featured);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-4 font-bold text-sm">
            <span className="mr-2">🚀</span>
            ULTIMATE AI 2025 CONTENT COLLECTION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That Delivers
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"> 3,000% ROI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the breakthrough content that's helping Fortune 500 companies achieve unprecedented success through AI transformation. 
            From implementation guides to real-world success stories, everything you need to revolutionize your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Content */}
        {activeCategory === 'all' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredItems.map((content) => (
                <div key={content.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">
                        {content.badge}
                      </span>
                      <span className="text-sm text-gray-500">{content.readingTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {content.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {content.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{content.metrics.roi}</div>
                        <div className="text-sm text-gray-500">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{content.metrics.savings || content.metrics.success}</div>
                        <div className="text-sm text-gray-500">{content.metrics.savings ? 'Savings' : 'Success Rate'}</div>
                      </div>
                    </div>

                    <Link
                      href={content.url}
                      className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    >
                      Read {content.badge} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularItems.map((content) => (
            <div key={content.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {content.badge}
                  </span>
                  <span className="text-sm text-gray-500">{content.readingTime}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{content.metrics.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{content.metrics.savings || content.metrics.success}</div>
                    <div className="text-xs text-gray-500">{content.metrics.savings ? 'Savings' : 'Success'}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={content.url}
                  className="block w-full bg-gray-900 text-white text-center py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Achieve 3,000% ROI?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join the Fortune 500 companies already achieving breakthrough results with AI transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAI2025ContentShowcase;