'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, StarIcon, ChartBarIcon, CurrencyDollarIcon, ClockIcon, BookOpenIcon, DocumentTextIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const UltimateContentShowcase2025Banner = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentCategories = [
    { id: 'all', label: 'All Content', count: 18 },
    { id: 'blog', label: 'Blog Posts', count: 8 },
    { id: 'case-study', label: 'Case Studies', count: 6 },
    { id: 'resource', label: 'Resources', count: 4 }
  ];

  const ultimateContent = [
    {
      id: 'ultimate-breakthrough-guide',
      title: 'AI 2025: The Enterprise Automation Ultimate Breakthrough - Complete Guide',
      description: 'Discover how Fortune 500 companies are achieving 1,200% ROI with revolutionary AI automation.',
      url: '/blog/ai-2025-enterprise-automation-ultimate-breakthrough-complete-guide',
      type: 'blog',
      category: 'Ultimate Guide',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['AI Automation', 'Enterprise', 'ROI', 'Complete Guide']
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings with 1,200% ROI',
      description: 'Complete case study showing how a $50B company achieved unprecedented results.',
      url: '/case-studies/fortune-500-ai-transformation-1200-percent-roi-ultimate-success',
      type: 'case-study',
      category: 'Success Story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '156%',
        satisfaction: '89%'
      },
      readingTime: '18 min read',
      featured: true,
      tags: ['Fortune 500', 'AI Transformation', 'ROI', 'Success Story']
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework: Complete Guide to 1,200% ROI',
      description: 'The definitive framework for achieving 1,200% ROI with AI implementation.',
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      type: 'resource',
      category: 'Framework',
      metrics: {
        roi: '1,200%',
        success: '94%',
        efficiency: '67%',
        satisfaction: '89%'
      },
      readingTime: '30 min read',
      featured: true,
      tags: ['Implementation', 'Framework', 'ROI', 'Best Practices']
    },
    {
      id: 'quantum-ai-revolution',
      title: 'AI 2025: The Quantum AI Business Revolution - $100B Market Transformation',
      description: 'How quantum AI is revolutionizing business operations with unprecedented speed and accuracy.',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      type: 'blog',
      category: 'Quantum AI',
      metrics: {
        roi: '1,200%',
        market: '$100B',
        accuracy: '99.97%',
        speed: '1,200%'
      },
      readingTime: '20 min read',
      featured: false,
      tags: ['Quantum AI', 'Business Revolution', 'ROI', 'Fortune 500']
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation 2025: How a $200M Health System Achieved 300% ROI',
      description: 'Complete case study of healthcare AI implementation with measurable results.',
      url: '/case-studies/healthcare-ai-transformation-2025-success',
      type: 'case-study',
      category: 'Healthcare',
      metrics: {
        roi: '300%',
        savings: '$18.7M',
        satisfaction: '95%',
        projects: '1 Major Implementation'
      },
      readingTime: '15 min read',
      featured: false,
      tags: ['Healthcare', 'AI Transformation', 'ROI', 'Success Story']
    },
    {
      id: 'ai-readiness-assessment',
      title: 'AI 2025 Readiness Assessment: Ultimate Evaluation Tool',
      description: 'Interactive tool to assess your organization\'s AI readiness and calculate potential ROI.',
      url: '/tools/ai-2025-readiness-assessment-ultimate',
      type: 'tool',
      category: 'Assessment',
      metrics: {
        completion_time: '15 minutes',
        accuracy: '95%',
        users: '1,000+',
        satisfaction: '98%'
      },
      readingTime: 'Interactive Tool',
      featured: false,
      tags: ['AI Readiness', 'Assessment Tool', 'Interactive', 'ROI Calculator']
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? ultimateContent 
    : ultimateContent.filter(item => item.type === selectedCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpenIcon className="h-5 w-5" />;
      case 'case-study':
        return <DocumentTextIcon className="h-5 w-5" />;
      case 'resource':
        return <AcademicCapIcon className="h-5 w-5" />;
      case 'tool':
        return <ChartBarIcon className="h-5 w-5" />;
      default:
        return <BookOpenIcon className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-500/20 text-blue-300';
      case 'case-study':
        return 'bg-green-500/20 text-green-300';
      case 'resource':
        return 'bg-purple-500/20 text-purple-300';
      case 'tool':
        return 'bg-orange-500/20 text-orange-300';
      default:
        return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <StarIcon className="h-8 w-8 text-yellow-400" />
            <span className="text-lg font-medium bg-yellow-400/20 px-4 py-2 rounded-full">
              ULTIMATE CONTENT SHOWCASE 2025
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            The most comprehensive collection of AI transformation content, featuring 
            <span className="text-yellow-400 font-bold"> 1,200% ROI success stories</span> and 
            proven implementation frameworks from Fortune 500 companies.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-white text-gray-900'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="ml-1">{item.type.toUpperCase()}</span>
                  </span>
                  {item.featured && (
                    <span className="text-xs font-medium bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full">
                      FEATURED
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-1">
                  <ClockIcon className="h-4 w-4 text-gray-300" />
                  <span className="text-xs text-gray-300">{item.readingTime}</span>
                </div>
              </div>

              {/* Title and description */}
              <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-200 mb-4 line-clamp-3">
                {item.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center space-x-2">
                  <ChartBarIcon className="h-4 w-4 text-green-400" />
                  <div>
                    <div className="text-green-400 font-bold text-sm">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <CurrencyDollarIcon className="h-4 w-4 text-blue-400" />
                  <div>
                    <div className="text-blue-400 font-bold text-sm">{item.metrics.savings || item.metrics.market}</div>
                    <div className="text-xs text-gray-400">Savings</div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {item.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={item.url}
                className="inline-flex items-center space-x-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 w-full justify-center"
              >
                <span>Read Now</span>
                <ChevronRightIcon className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Statistics section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">1,200%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">$2.8B</div>
              <div className="text-gray-300">Total Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Companies Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4">Ready to Achieve 1,200% ROI?</h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get your personalized AI implementation roadmap and start your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-200"
            >
              <span>Get Free Consultation</span>
              <ChevronRightIcon className="h-5 w-5" />
            </Link>
            <Link
              href="/resources/ai-2025-implementation-ultimate-success-framework"
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              <span>View Complete Framework</span>
              <ChevronRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025Banner;