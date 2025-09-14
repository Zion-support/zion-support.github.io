'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Clock, CheckCircle, ExternalLink } from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('all');

  const contentItems = [
    {
      id: 'ai-enterprise-revolution',
      type: 'blog',
      title: 'AI 2025: The Enterprise Automation Revolution',
      subtitle: 'How Companies Are Achieving 500% ROI',
      description: 'Discover how leading enterprises are leveraging AI automation to achieve unprecedented ROI, reduce costs by 60%, and transform their operations in 2025.',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      image: '/images/ai-enterprise-revolution.jpg',
      metrics: {
        roi: '500%',
        costReduction: '60%',
        productivity: '340%',
        companies: '500+'
      },
      tags: ['AI', 'Enterprise Automation', 'ROI', 'Business Transformation'],
      readTime: '12 min read',
      featured: true,
      isNew: true
    },
    {
      id: 'ai-transformation-success',
      type: 'case-study',
      title: 'AI Transformation Success: $2B Company Achieves 500% ROI',
      subtitle: 'Real-World Success Story in 12 Months',
      description: 'Discover how TechCorp Global transformed their operations with AI automation, achieving 500% ROI, $200M in annual savings, and 400% productivity gains.',
      url: '/case-studies/ai-transformation-500-roi-success-story',
      image: '/images/ai-transformation-success.jpg',
      metrics: {
        roi: '500%',
        savings: '$200M',
        productivity: '400%',
        satisfaction: '99.8%'
      },
      tags: ['Case Study', 'AI Transformation', 'ROI', 'Success Story'],
      readTime: '15 min read',
      featured: true,
      isNew: true
    },
    {
      id: 'ai-implementation-guide',
      type: 'resource',
      title: 'The Ultimate AI Implementation Guide 2025',
      subtitle: 'From Strategy to 500% ROI',
      description: 'The complete guide to implementing AI in your organization. Learn proven strategies, best practices, and step-by-step processes to transform your business operations.',
      url: '/resources/ai-implementation-ultimate-guide-2025',
      image: '/images/ai-implementation-guide.jpg',
      metrics: {
        companies: '500+',
        averageRoi: '340%',
        successRate: '98%',
        framework: 'Proven'
      },
      tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Best Practices'],
      readTime: '25 min read',
      featured: true,
      isNew: true
    },
    {
      id: 'autonomous-systems-revolution',
      type: 'blog',
      title: 'AI 2025: The Next Generation Autonomous Systems Revolution',
      subtitle: 'Transforming Business Operations with Autonomous AI',
      description: 'Explore how autonomous AI systems are revolutionizing business operations, delivering unprecedented efficiency and ROI across industries.',
      url: '/blog/ai-2025-next-generation-autonomous-systems-revolution',
      image: '/images/autonomous-systems.jpg',
      metrics: {
        roi: '340%',
        efficiency: '400%',
        automation: '95%',
        satisfaction: '98%'
      },
      tags: ['AI', 'Autonomous Systems', 'Business Transformation', 'ROI'],
      readTime: '10 min read',
      featured: true,
      isNew: false
    },
    {
      id: 'fortune-500-transformation',
      type: 'case-study',
      title: 'Fortune 500 AI Transformation: $50M Annual Savings',
      subtitle: 'How a Global Enterprise Achieved 400% ROI in 6 Months',
      description: 'Learn how a Fortune 500 company implemented AI automation across their operations, achieving $50M in annual savings and 400% ROI in just 6 months.',
      url: '/case-studies/fortune-500-ai-transformation-2026',
      image: '/images/fortune-500-transformation.jpg',
      metrics: {
        roi: '400%',
        savings: '$50M',
        timeframe: '6 months',
        efficiency: '300%'
      },
      tags: ['Case Study', 'Fortune 500', 'AI Transformation', 'Cost Savings'],
      readTime: '12 min read',
      featured: true,
      isNew: false
    },
    {
      id: 'ai-implementation-master-guide',
      type: 'resource',
      title: 'AI Implementation Master Guide 2026',
      subtitle: 'From Strategy to 400% ROI',
      description: 'Comprehensive guide to AI implementation with proven strategies, real-world case studies, and step-by-step processes to achieve 400% ROI.',
      url: '/resources/ai-implementation-master-guide-2026',
      image: '/images/ai-master-guide.jpg',
      metrics: {
        roi: '400%',
        successRate: '98%',
        implementation: '67% Faster',
        projects: '500+ Success Stories'
      },
      tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Best Practices'],
      readTime: '20 min read',
      featured: true,
      isNew: false
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeTab);

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
      case 'blog': return 'from-blue-500 to-blue-600';
      case 'case-study': return 'from-green-500 to-green-600';
      case 'resource': return 'from-purple-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 ULTIMATE CONTENT SHOWCASE 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That Drives Results
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover our latest AI content featuring real-world success stories, proven strategies, and implementation guides that have helped 500+ companies achieve 340% average ROI.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Companies Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">340%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">$2.8B</div>
              <div className="text-gray-600">Total Savings</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${getTypeColor(item.type)} opacity-80`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">{getTypeIcon(item.type)}</div>
                </div>
                {item.isNew && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NEW
                  </div>
                )}
                {item.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    FEATURED
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    {item.type.replace('-', ' ')}
                  </span>
                  <span className="text-sm text-gray-400">•</span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {item.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {Object.entries(item.metrics).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={item.url}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join 500+ companies that have achieved 340% average ROI with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Explore Our Services
                <ExternalLink className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;