'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, TrendingUp, Award, Clock, Users, BookOpen, FileText, BarChart3 } from 'lucide-react';

const RevolutionaryContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Content', count: 12 },
    { id: 'blog', name: 'Blog Posts', count: 4 },
    { id: 'case-study', name: 'Case Studies', count: 4 },
    { id: 'resource', name: 'Resources', count: 4 }
  ];

  const content = [
    {
      id: 'ultimate-business-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Complete Guide - 1000% ROI Revolution',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 1000% ROI with AI transformation strategies. Complete implementation roadmap with real-world success stories.',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-business-transformation-complete-guide',
      readingTime: '35 min read',
      metrics: {
        roi: '1000%',
        savings: '$2.8B',
        accuracy: '99.7%',
        satisfaction: '98%'
      },
      tags: ['AI Transformation', 'Business Strategy', 'ROI', 'Fortune 500'],
      featured: true,
      isNew: true
    },
    {
      id: 'fortune-100-case-study',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1000% ROI in 12 Months',
      description: 'Complete case study with implementation details and lessons learned from a Fortune 100 manufacturing giant. Real-world success story with actionable insights.',
      type: 'case-study',
      url: '/case-studies/fortune-100-ai-transformation-1000-percent-roi-success-story',
      readingTime: '25 min read',
      metrics: {
        roi: '1000%',
        savings: '$1.8B',
        timeline: '12 months',
        efficiency: '89%'
      },
      tags: ['Case Study', 'Fortune 100', 'AI Transformation', 'ROI'],
      featured: true,
      isNew: true
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap: From Strategy to 1000% ROI in 12 Months',
      description: 'Complete step-by-step roadmap with frameworks, templates, and real-world examples from Fortune 500 companies. Everything you need for successful AI implementation.',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-roadmap-1000-percent-roi',
      readingTime: '45 min read',
      metrics: {
        roi: '1000%',
        timeline: '12 months',
        successRate: '99.7%',
        projects: '500+'
      },
      tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Roadmap'],
      featured: true,
      isNew: true
    },
    {
      id: 'generative-ai-revolution',
      title: 'AI 2025: The Generative AI Enterprise Revolution - $2.3T Market Transformation',
      description: 'Explore how generative AI is transforming enterprise operations with 340% ROI and $180M in average savings. Complete guide to implementation and success.',
      type: 'blog',
      url: '/blog/ai-2025-generative-ai-enterprise-revolution',
      readingTime: '18 min read',
      metrics: {
        roi: '340%',
        savings: '$180M',
        accuracy: '99.7%',
        satisfaction: '98%'
      },
      tags: ['Generative AI', 'Enterprise', 'ROI', 'Digital Transformation'],
      featured: false,
      isNew: false
    },
    {
      id: 'mlops-breakthrough',
      title: 'AI 2025: MLOps Breakthrough - 99.9% Model Reliability with 67% Faster Deployment',
      description: 'Learn how advanced MLOps practices are delivering 99.9% model reliability and 67% faster deployment times. Complete implementation guide with best practices.',
      type: 'blog',
      url: '/blog/ai-2025-machine-learning-operations-mlops-breakthrough',
      readingTime: '22 min read',
      metrics: {
        reliability: '99.9%',
        deploymentSpeed: '67%',
        savings: '$2.1B',
        efficiency: '89%'
      },
      tags: ['MLOps', 'Machine Learning', 'DevOps', 'AI Operations'],
      featured: false,
      isNew: false
    },
    {
      id: 'retail-transformation',
      title: 'Retail AI Transformation 2025: $500M Company Achieves 280% ROI with AI-Powered Operations',
      description: 'Discover how a $500M retail company achieved 280% ROI through AI-powered operations. Complete case study with implementation details and results.',
      type: 'case-study',
      url: '/case-studies/retail-ai-transformation-2025-ultimate-success',
      readingTime: '15 min read',
      metrics: {
        roi: '280%',
        savings: '$45M',
        satisfaction: '99.2%',
        efficiency: '78%'
      },
      tags: ['Retail', 'AI Transformation', 'ROI', 'Case Study'],
      featured: false,
      isNew: false
    },
    {
      id: 'ai-implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: From Strategy to 500% ROI in 12 Months',
      description: 'Complete implementation guide with step-by-step instructions, templates, and real-world examples. Achieve 500% ROI with proven strategies and frameworks.',
      type: 'resource',
      url: '/resources/ai-2025-implementation-master-guide',
      readingTime: '30 min read',
      metrics: {
        roi: '500%',
        timeline: '12 months',
        successRate: '94%',
        savings: '$2.8B'
      },
      tags: ['AI Implementation', 'Strategy', 'ROI', 'Guide'],
      featured: false,
      isNew: false
    },
    {
      id: 'cybersecurity-revolution',
      title: 'AI 2025: The Cybersecurity Revolution - Ultimate Guide to Enterprise Protection',
      description: 'Learn how AI is revolutionizing cybersecurity with 95% threat reduction and 67% faster response times. Complete guide to AI-powered security implementation.',
      type: 'blog',
      url: '/blog/ai-2025-cybersecurity-revolution-ultimate-guide',
      readingTime: '20 min read',
      metrics: {
        threatReduction: '95%',
        costSavings: '$2.3M',
        responseTime: '67%',
        falsePositives: '89%'
      },
      tags: ['AI', 'Cybersecurity', 'Business Protection', 'Threat Detection'],
      featured: false,
      isNew: false
    },
    {
      id: 'healthcare-transformation',
      title: 'AI Healthcare Transformation 2025: 450% ROI Success Story',
      description: 'Complete case study of how a $200M health system achieved 450% ROI through AI transformation. Real-world implementation with measurable results.',
      type: 'case-study',
      url: '/case-studies/ai-healthcare-transformation-2025-success-story',
      readingTime: '18 min read',
      metrics: {
        roi: '450%',
        savings: '$12M',
        satisfaction: '94%',
        efficiency: '67%'
      },
      tags: ['Case Study', 'Healthcare', 'AI Transformation', 'ROI'],
      featured: false,
      isNew: false
    },
    {
      id: 'implementation-guide-comprehensive',
      title: 'AI Implementation Master Guide 2025: From Strategy to ROI - Comprehensive Edition',
      description: 'Comprehensive implementation guide with detailed frameworks, templates, and best practices. Achieve 98% success rate with proven methodologies.',
      type: 'resource',
      url: '/resources/ai-implementation-master-guide-2025-comprehensive',
      readingTime: '40 min read',
      metrics: {
        successRate: '98%',
        averageRoi: '340%',
        implementationTime: '67%',
        projects: '500+'
      },
      tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Best Practices'],
      featured: false,
      isNew: false
    },
    {
      id: 'quantum-ai-business-revolution',
      title: 'AI 2026: The Quantum AI Business Revolution - $100B Market Transformation',
      description: 'Explore the future of AI with quantum computing integration. Discover how quantum AI is creating $100B market opportunities with 400-600% ROI potential.',
      type: 'blog',
      url: '/blog/ai-2026-quantum-ai-business-revolution',
      readingTime: '25 min read',
      metrics: {
        roi: '400-600%',
        market: '$100B',
        speed: '1,200%',
        accuracy: '99.97%'
      },
      tags: ['Quantum AI', 'Business Revolution', 'ROI', 'Fortune 500'],
      featured: false,
      isNew: false
    },
    {
      id: 'quantum-ai-fortune-500',
      title: 'Fortune 500 Quantum AI Transformation: $2.8B Annual Savings in 6 Months',
      description: 'Complete case study of Fortune 500 quantum AI transformation achieving $2.8B annual savings in just 6 months. Revolutionary implementation with unprecedented results.',
      type: 'case-study',
      url: '/case-studies/quantum-ai-fortune-500-transformation-2026',
      readingTime: '20 min read',
      metrics: {
        savings: '$2.8B',
        roi: '567%',
        efficiency: '156%',
        uptime: '99.2%'
      },
      tags: ['Quantum AI', 'Fortune 500', 'Case Study', 'ROI'],
      featured: false,
      isNew: false
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.type === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-5 h-5" />;
      case 'case-study':
        return <BarChart3 className="w-5 h-5" />;
      case 'resource':
        return <FileText className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-500';
      case 'case-study':
        return 'bg-green-500';
      case 'resource':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">REVOLUTIONARY AI 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ultimate AI Transformation Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI transformation content, featuring 
            <span className="font-bold text-purple-600"> 1000% ROI success stories</span>, 
            complete implementation guides, and real-world case studies from Fortune 500 companies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
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
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`p-2 rounded-lg ${getTypeColor(item.type)} text-white`}>
                      {getTypeIcon(item.type)}
                    </div>
                    <span className="text-sm font-medium text-gray-600 capitalize">
                      {item.type.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    {item.isNew && (
                      <span className="px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
                        NEW
                      </span>
                    )}
                    {item.featured && (
                      <span className="px-2 py-1 text-xs font-bold text-white bg-purple-500 rounded-full">
                        FEATURED
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {item.metrics.savings || item.metrics.timeline || item.metrics.successRate}
                    </div>
                    <div className="text-xs text-gray-600">
                      {item.metrics.savings ? 'Savings' : 
                       item.metrics.timeline ? 'Timeline' : 
                       item.metrics.successRate ? 'Success Rate' : 'Metric'}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-gray-200 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{item.readingTime}</span>
                  </div>
                  <Link
                    href={item.url}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your AI Transformation Journey?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get a free AI readiness assessment and custom implementation roadmap tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Assessment
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore All Resources
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">1000%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">$2.8B</div>
            <div className="text-gray-600">Average Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.7%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentShowcase2025;