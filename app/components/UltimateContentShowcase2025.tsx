'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  Star, 
  TrendingUp, 
  Users, 
  Award, 
  Clock, 
  BookOpen,
  FileText,
  BarChart3,
  Target,
  Zap
} from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentItems = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      type: 'blog',
      category: 'AI Automation',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      description: 'Master advanced AI automation with our comprehensive guide. Learn how Fortune 500 companies achieve 1,200% ROI through intelligent automation strategies.',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['AI Automation', 'Enterprise Transformation', 'ROI', 'Business Intelligence']
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings - Ultimate Success Story',
      type: 'case-study',
      category: 'Case Study',
      url: '/case-studies/fortune-500-ai-transformation-ultimate-success-story',
      description: 'How a Fortune 500 manufacturing company achieved 1,200% ROI and $2.8B annual savings through comprehensive AI transformation in just 18 months.',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '18 months',
        revenue: '$1.2B'
      },
      readingTime: '20 min read',
      featured: true,
      tags: ['Fortune 500', 'AI Transformation', 'ROI', 'Manufacturing']
    },
    {
      id: 'implementation-framework',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'resource',
      category: 'Implementation Guide',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      description: 'The definitive guide to AI implementation success. Our proven framework has helped 500+ organizations achieve 1,000%+ ROI through strategic AI deployment.',
      metrics: {
        roi: '1,000%+',
        success: '98%',
        timeline: '18 months',
        projects: '500+'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['AI Implementation', 'Framework', 'ROI', 'Success Strategy']
    },
    {
      id: 'generative-ai-revolution',
      title: 'AI 2025: The Generative AI Enterprise Revolution - $2.3T Market Transformation',
      type: 'blog',
      category: 'Generative AI',
      url: '/blog/ai-2025-generative-ai-enterprise-revolution',
      description: 'Discover how generative AI is transforming enterprise operations with $2.3T market potential and 340% average ROI across implementations.',
      metrics: {
        roi: '340%',
        savings: '$180M',
        accuracy: '99.7%',
        satisfaction: '98%'
      },
      readingTime: '15 min read',
      featured: false,
      tags: ['Generative AI', 'Enterprise', 'ROI', 'Digital Transformation']
    },
    {
      id: 'mlops-breakthrough',
      title: 'AI 2025: MLOps Breakthrough - 99.9% Model Reliability with 67% Faster Deployment',
      type: 'blog',
      category: 'MLOps',
      url: '/blog/ai-2025-machine-learning-operations-mlops-breakthrough',
      description: 'Learn how advanced MLOps practices deliver 99.9% model reliability and 67% faster deployment across enterprise AI implementations.',
      metrics: {
        reliability: '99.9%',
        deployment: '67%',
        savings: '$2.1B',
        efficiency: '89%'
      },
      readingTime: '18 min read',
      featured: false,
      tags: ['MLOps', 'Machine Learning', 'DevOps', 'AI Operations']
    },
    {
      id: 'retail-transformation',
      title: 'Retail AI Transformation 2025: $500M Company Achieves 280% ROI with AI-Powered Operations',
      type: 'case-study',
      category: 'Retail',
      url: '/case-studies/retail-ai-transformation-2025-ultimate-success',
      description: 'How a $500M retail company achieved 280% ROI through AI-powered operations, reducing costs by $45M and improving customer satisfaction to 99.2%.',
      metrics: {
        roi: '280%',
        savings: '$45M',
        satisfaction: '99.2%',
        efficiency: '78%'
      },
      readingTime: '12 min read',
      featured: false,
      tags: ['Retail', 'AI Transformation', 'ROI', 'Success Story']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-5 h-5" />;
      case 'case-study':
        return <FileText className="w-5 h-5" />;
      case 'resource':
        return <BarChart3 className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
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
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <Star className="w-5 h-5" />
            <span className="font-semibold">ULTIMATE CONTENT COLLECTION 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of AI guides, case studies, and resources. 
            Learn from 500+ successful implementations achieving 1,000%+ ROI.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1,200%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$5.6B+</div>
            <div className="text-gray-600">Total Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label}
              <span className="ml-2 text-sm opacity-75">({filter.count})</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-semibold text-center">
                  ⭐ FEATURED CONTENT
                </div>
              )}
              
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-600">{item.category}</div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{item.readingTime}</span>
                      </div>
                    </div>
                  </div>
                  {item.featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-green-600">
                      {item.metrics.roi}
                    </div>
                    <div className="text-xs text-green-600">ROI</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-blue-600">
                      {item.metrics.savings}
                    </div>
                    <div className="text-xs text-blue-600">Savings</div>
                  </div>
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
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Resource' : 'Article'}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Organization?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get personalized implementation support and join 500+ organizations 
              that have achieved 1,000%+ ROI with our AI transformation framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AI Readiness Assessment</h4>
              <p className="text-sm text-gray-600 mb-4">
                Evaluate your organization's AI readiness and identify opportunities
              </p>
              <Link
                href="/tools/ai-readiness-assessment"
                className="text-purple-600 font-semibold hover:text-purple-700"
              >
                Take Assessment →
              </Link>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Consultation</h4>
              <p className="text-sm text-gray-600 mb-4">
                Get personalized guidance from our AI transformation experts
              </p>
              <Link
                href="/contact"
                className="text-green-600 font-semibold hover:text-green-700"
              >
                Schedule Call →
              </Link>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Implementation Support</h4>
              <p className="text-sm text-gray-600 mb-4">
                Get hands-on support for your AI implementation journey
              </p>
              <Link
                href="/services/ai-implementation"
                className="text-orange-600 font-semibold hover:text-orange-700"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;