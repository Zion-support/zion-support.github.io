'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChartBarIcon, 
  ClockIcon, 
  StarIcon, 
  ArrowRightIcon,
  BookOpenIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const UltimateContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = [
    { id: 'all', label: 'All Content', count: 7 },
    { id: 'blog', label: 'Blog Posts', count: 3 },
    { id: 'case-study', label: 'Case Studies', count: 2 },
    { id: 'resource', label: 'Resources', count: 2 }
  ];

  const featuredContent = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      description: 'Transform your business with cutting-edge AI automation technologies. Learn proven strategies that deliver 340-1,200% ROI.',
      metrics: {
        roi: '340-1,200%',
        savings: '$2.8B',
        efficiency: '78-95%',
        satisfaction: '98%'
      },
      readingTime: '18 min read',
      isNew: true,
      featured: true,
      tags: ['AI Automation', 'Enterprise AI', 'ROI', 'Success Guide']
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $5.2B Company Achieves 1,200% ROI',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/ai-transformation-fortune-500-ultimate-success-story-2025',
      description: 'Real-world case study of a Fortune 500 manufacturing company that achieved unprecedented results through strategic AI implementation.',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '24 months',
        satisfaction: '98%'
      },
      readingTime: '12 min read',
      isNew: true,
      featured: true,
      tags: ['Fortune 500', 'AI Transformation', 'Case Study', 'ROI']
    },
    {
      id: 'implementation-framework',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      description: 'The definitive guide to successful AI implementation. Battle-tested methodology that has delivered 1,000%+ ROI for over 1,000 organizations.',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        timeline: '18 months',
        projects: '1,000+'
      },
      readingTime: '25 min read',
      isNew: true,
      featured: true,
      tags: ['Implementation', 'Framework', 'ROI', 'Success Strategy']
    },
    {
      id: 'quantum-ai-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - $100B Market Transformation',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      description: 'Discover how quantum computing is revolutionizing business operations and creating unprecedented opportunities for growth.',
      metrics: {
        roi: '400-600%',
        market: '$100B',
        speed: '1,200%',
        accuracy: '99.97%'
      },
      readingTime: '15 min read',
      isNew: false,
      featured: true,
      tags: ['Quantum Computing', 'AI', 'Business Revolution', 'ROI']
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation 2025: How a $200M Health System Achieved 300% ROI',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/healthcare-ai-transformation-2025-success',
      description: 'Learn how a major healthcare system implemented AI solutions to improve patient care and achieve remarkable financial results.',
      metrics: {
        roi: '300%',
        savings: '$18.7M',
        satisfaction: '95%',
        projects: '1 Major Implementation'
      },
      readingTime: '15 min read',
      isNew: false,
      featured: false,
      tags: ['Healthcare', 'AI Transformation', 'ROI', 'Success Story']
    },
    {
      id: 'enterprise-automation-guide',
      title: 'AI 2025 Enterprise Automation Revolution: The Ultimate Guide to Transforming Your Business',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-enterprise-automation-revolution-ultimate-guide',
      description: 'Comprehensive guide to enterprise automation transformation with proven strategies and real-world success stories.',
      metrics: {
        roi: '340%',
        efficiency: '78%',
        costReduction: '65%',
        accuracy: '92%'
      },
      readingTime: '12 min read',
      isNew: false,
      featured: false,
      tags: ['AI', 'Automation', 'Enterprise', 'Digital Transformation']
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Roadmap: Complete Guide to Success',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-2025-implementation-roadmap-complete-guide',
      description: 'Step-by-step roadmap for successful AI implementation with proven methodologies and best practices.',
      metrics: {
        roi: '67%',
        efficiency: '45%',
        costReduction: '89%',
        decisionSpeed: '340%'
      },
      readingTime: '20 min read',
      isNew: false,
      featured: false,
      tags: ['Implementation', 'Roadmap', 'Strategy', '2025']
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <DocumentTextIcon className="h-5 w-5" />;
      case 'case-study':
        return <TrophyIcon className="h-5 w-5" />;
      case 'resource':
        return <AcademicCapIcon className="h-5 w-5" />;
      default:
        return <BookOpenIcon className="h-5 w-5" />;
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
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            <StarIcon className="h-4 w-4" />
            <span>ULTIMATE CONTENT COLLECTION 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business with Proven AI Strategies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest AI insights, success stories, and implementation guides that have delivered 
            <span className="font-bold text-purple-600"> 340-1,200% ROI</span> for organizations worldwide.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                        {item.type.replace('-', ' ').toUpperCase()}
                      </span>
                      {item.isNew && (
                        <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                          NEW
                        </span>
                      )}
                      {item.featured && (
                        <span className="px-2 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full">
                          FEATURED
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-3">
                    <div className="text-purple-600 font-bold text-lg">{item.metrics.roi}</div>
                    <div className="text-gray-600 text-xs">ROI</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3">
                    <div className="text-green-600 font-bold text-lg">{item.metrics.savings || item.metrics.success}</div>
                    <div className="text-gray-600 text-xs">Savings/Success</div>
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

                {/* Reading Time */}
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>{item.readingTime}</span>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <Link
                  href={item.url}
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Read {item.type.replace('-', ' ')}
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Proven Results Across All Content</h3>
            <p className="text-xl text-purple-100">
              Our content has helped organizations achieve remarkable success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">1,000+</div>
              <div className="text-purple-100">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">340-1,200%</div>
              <div className="text-purple-100">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$2.8B+</div>
              <div className="text-purple-100">Total Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">98%</div>
              <div className="text-purple-100">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <BookOpenIcon className="mr-2 h-5 w-5" />
              Explore All Content
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-bold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              <ChartBarIcon className="mr-2 h-5 w-5" />
              Get AI Consultation
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-all duration-300 border border-purple-200"
            >
              <AcademicCapIcon className="mr-2 h-5 w-5" />
              Download Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;