'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Clock, Award, Zap, ArrowRight } from 'lucide-react';

const RevolutionaryContent2025Showcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = [
    { id: 'all', label: 'All Content', count: 12 },
    { id: 'blog', label: 'Blog Posts', count: 4 },
    { id: 'case-study', label: 'Case Studies', count: 4 },
    { id: 'resource', label: 'Resources', count: 4 }
  ];

  const featuredContent = [
    {
      id: 'data-revolution',
      title: 'AI 2025: The Enterprise Data Revolution',
      description: 'Ultimate Guide to 400% ROI through AI-powered data transformation with real-world case studies and implementation frameworks.',
      url: '/blog/ai-2025-enterprise-data-revolution-ultimate-guide',
      type: 'blog',
      category: 'Blog Post',
      readingTime: '18 min read',
      metrics: {
        roi: '400%',
        savings: '$2.8B',
        accuracy: '99.7%',
        speed: '1,200%'
      },
      badge: 'NEW',
      badgeColor: 'bg-red-500',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation Success',
      description: '$2.8B Annual Savings in 8 Months - Complete case study of one of the most successful enterprise AI transformations ever documented.',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
      type: 'case-study',
      category: 'Case Study',
      readingTime: '22 min read',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        efficiency: '78%',
        timeline: '8 months'
      },
      badge: 'FEATURED',
      badgeColor: 'bg-blue-500',
      featured: true
    },
    {
      id: 'master-guide',
      title: 'AI Transformation Master Guide 2025',
      description: 'From Strategy to 500% ROI - Ultimate Edition. Complete guide based on 500+ enterprise implementations with proven frameworks.',
      url: '/resources/ai-transformation-master-guide-2025-ultimate',
      type: 'resource',
      category: 'Master Guide',
      readingTime: '35 min read',
      metrics: {
        roi: '500%',
        success: '94%',
        savings: '$2.8M',
        timeline: '18 months'
      },
      badge: 'ULTIMATE',
      badgeColor: 'bg-purple-500',
      featured: true
    },
    {
      id: 'generative-ai-revolution',
      title: 'AI 2025: The Generative AI Enterprise Revolution',
      description: '$2.3T Market Transformation - How Fortune 500 companies are achieving 340% ROI through generative AI implementation.',
      url: '/blog/ai-2025-generative-ai-enterprise-revolution',
      type: 'blog',
      category: 'Blog Post',
      readingTime: '15 min read',
      metrics: {
        roi: '340%',
        savings: '$180M',
        accuracy: '99.7%',
        satisfaction: '98%'
      },
      badge: 'HOT',
      badgeColor: 'bg-orange-500',
      featured: false
    },
    {
      id: 'mlops-breakthrough',
      title: 'AI 2025: MLOps Breakthrough',
      description: '99.9% Model Reliability with 67% Faster Deployment - Complete guide to MLOps implementation for enterprise success.',
      url: '/blog/ai-2025-machine-learning-operations-mlops-breakthrough',
      type: 'blog',
      category: 'Blog Post',
      readingTime: '12 min read',
      metrics: {
        reliability: '99.9%',
        deployment: '67%',
        savings: '$2.1B',
        efficiency: '89%'
      },
      badge: 'BREAKTHROUGH',
      badgeColor: 'bg-green-500',
      featured: false
    },
    {
      id: 'retail-transformation',
      title: 'Retail AI Transformation 2025',
      description: '$500M Company Achieves 280% ROI with AI-Powered Operations - Complete success story with implementation details.',
      url: '/case-studies/retail-ai-transformation-2025-ultimate-success',
      type: 'case-study',
      category: 'Case Study',
      readingTime: '20 min read',
      metrics: {
        roi: '280%',
        savings: '$45M',
        satisfaction: '99.2%',
        efficiency: '78%'
      },
      badge: 'SUCCESS',
      badgeColor: 'bg-indigo-500',
      featured: false
    },
    {
      id: 'ai-implementation-guide',
      title: 'AI 2025 Implementation Master Guide',
      description: 'From Strategy to 500% ROI in 12 Months - Comprehensive implementation guide with step-by-step frameworks.',
      url: '/resources/ai-2025-implementation-master-guide',
      type: 'resource',
      category: 'Implementation Guide',
      readingTime: '25 min read',
      metrics: {
        roi: '500%',
        timeline: '12 months',
        success: '94%',
        savings: '$2.8B'
      },
      badge: 'GUIDE',
      badgeColor: 'bg-pink-500',
      featured: false
    },
    {
      id: 'cybersecurity-revolution',
      title: 'AI 2025: The Cybersecurity Revolution',
      description: 'Protecting Enterprises with 95% Threat Reduction - Complete guide to AI-powered cybersecurity implementation.',
      url: '/blog/ai-2025-cybersecurity-revolution',
      type: 'blog',
      category: 'Blog Post',
      readingTime: '14 min read',
      metrics: {
        threat_reduction: '95%',
        savings: '$2.3M',
        response: '67%',
        false_positives: '89%'
      },
      badge: 'SECURITY',
      badgeColor: 'bg-red-600',
      featured: false
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation 2025',
      description: '$2.1B Health System Achieves 99.8% Patient Safety - Complete case study of healthcare AI implementation.',
      url: '/case-studies/healthcare-ai-transformation-2025',
      type: 'case-study',
      category: 'Case Study',
      readingTime: '18 min read',
      metrics: {
        savings: '$180M',
        accuracy: '99.8%',
        satisfaction: '94%',
        safety: '99.8%'
      },
      badge: 'HEALTHCARE',
      badgeColor: 'bg-teal-500',
      featured: false
    },
    {
      id: 'enterprise-automation',
      title: 'AI 2025: The Enterprise Automation Revolution',
      description: '500% ROI through intelligent automation - Complete guide to enterprise automation implementation.',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      type: 'blog',
      category: 'Blog Post',
      readingTime: '16 min read',
      metrics: {
        roi: '500%',
        savings: '$200M',
        satisfaction: '99.8%',
        time: '12 months'
      },
      badge: 'AUTOMATION',
      badgeColor: 'bg-yellow-500',
      featured: false
    },
    {
      id: 'ai-transformation-success',
      title: 'AI Transformation Success: 500% ROI',
      description: '$2B Company Achieves 500% ROI - Complete success story with implementation roadmap and lessons learned.',
      url: '/case-studies/ai-transformation-500-roi-success-story',
      type: 'case-study',
      category: 'Case Study',
      readingTime: '19 min read',
      metrics: {
        roi: '500%',
        savings: '$200M',
        satisfaction: '99.8%',
        time: '12 months'
      },
      badge: 'SUCCESS',
      badgeColor: 'bg-emerald-500',
      featured: false
    },
    {
      id: 'ai-automation-guide',
      title: 'AI Automation Implementation Guide 2025',
      description: 'From Strategy to 500% ROI - Complete implementation guide with best practices and frameworks.',
      url: '/resources/ai-automation-implementation-guide-2025',
      type: 'resource',
      category: 'Implementation Guide',
      readingTime: '22 min read',
      metrics: {
        roi: '500%',
        savings: '60%',
        satisfaction: '98%',
        time: '6-12 months'
      },
      badge: 'IMPLEMENTATION',
      badgeColor: 'bg-violet-500',
      featured: false
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(content => content.type === activeCategory);

  const featuredItems = filteredContent.filter(content => content.featured);
  const regularItems = filteredContent.filter(content => !content.featured);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-4">
            <Star className="w-5 h-5 mr-2" />
            <span className="font-semibold">Revolutionary Content 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI Transformation Content That Delivers Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover proven strategies, real-world case studies, and implementation guides that have helped Fortune 500 companies achieve 500% ROI through AI transformation.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Content */}
        {featuredItems.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredItems.map((content) => (
                <div key={content.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${content.badgeColor}`}>
                        {content.badge}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {content.readingTime}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{content.title}</h4>
                    <p className="text-gray-600 mb-6">{content.description}</p>
                    
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-green-600">{content.metrics.roi}</div>
                        <div className="text-xs text-gray-600">ROI</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-blue-600">{content.metrics.savings}</div>
                        <div className="text-xs text-gray-600">Savings</div>
                      </div>
                    </div>
                    
                    <Link
                      href={content.url}
                      className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center"
                    >
                      Read Full Content
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularItems.map((content) => (
            <div key={content.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${content.badgeColor}`}>
                    {content.badge}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {content.readingTime}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-3">{content.title}</h4>
                <p className="text-gray-600 mb-4 text-sm">{content.description}</p>
                
                {/* Key Metric */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{content.metrics.roi}</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                </div>
                
                <Link
                  href={content.url}
                  className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your AI Transformation?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join 500+ companies that have achieved 500% ROI through our proven AI transformation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">500%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">$2.8B</div>
            <div className="text-gray-600">Average Savings</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025Showcase;