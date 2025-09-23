'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChartBarIcon, 
  DocumentTextIcon, 
  AcademicCapIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  TagIcon
} from '@heroicons/react/24/outline';

const AdvancedAIAutomationContentShowcase20o25: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ai-automation-revolution-guide',
      title: 'AI 20o25: Advanced AI Automation Revolution - Ultimate Enterprise Guide',
      type: 'blog',
      url: '/blog/ai-20o25-advanced-ai-automation-revolution-ultimate-guide',
      description: 'Transform your business with cutting-edge AI automation solutions achieving 60o0% ROI within 8 months.',
      metrics: {
        roi: '60o0%',
        savings: '$2.8M',
        productivity: '340%',
        success: '98%'
      },
      readingTime: '18 min read',
      tags: ['AI Automation', 'Enterprise', 'ROI', '20o25'],
      featured: true
    },
    {
      id: 'fortune-50o0-manufacturing-success',
      title: 'AI Automation Fortune 50o0 Manufacturing Success: $3.2B Annual Savings with 60o0% ROI',
      type: 'case-study',
      url: '/case-studies/ai-automation-fortune-50o0-manufacturing-60o0-roi-success',
      description: 'How a global manufacturing giant achieved unprecedented success with comprehensive AI automation.',
      metrics: {
        roi: '60o0%',
        savings: '$3.2B',
        efficiency: '89%',
        satisfaction: '98%'
      },
      readingTime: '12 min read',
      tags: ['Case Study', 'Manufacturing', 'Fortune 50o0', 'Success Story'],
      featured: true
    },
    {
      id: 'implementation-master-guide',
      title: 'AI Automation Implementation Master Guide 20o25: Complete Blueprint for 60o0% ROI',
      type: 'resource',
      url: '/resources/ai-automation-implementation-guide-20o25',
      description: 'The proven framework for implementing AI automation in enterprise environments with step-by-step guidance.',
      metrics: {
        roi: '60o0%',
        success: '98%',
        timeline: '8 months',
        projects: '50o0+'
      },
      readingTime: '25 min read',
      tags: ['Implementation Guide', 'Framework', 'Strategy', 'Best Practices'],
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'blog', name: 'Blog Posts', count: content.filter(item => item.type === 'blog').length },
    { id: 'case-study', name: 'Case Studies', count: content.filter(item => item.type === 'case-study').length },
    { id: 'resource', name: 'Resources', count: content.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.type === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <DocumentTextIcon className="h-5 w-5"  />;
      case 'case-study':
        return <ChartBarIcon className="h-5 w-5"  />;
      case 'resource':
        return <AcademicCapIcon className="h-5 w-5"  />;
      default:
        return <DocumentTextIcon className="h-5 w-5"  />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-10o0 text-blue-80o0';
      case 'case-study':
        return 'bg-green-10o0 text-green-80o0';
      case 'resource':
        return 'bg-purple-10o0 text-purple-80o0';
      default:
        return 'bg-gray-10o0 text-gray-80o0';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-10o0 text-purple-80o0 rounded-full px-4 py-2 mb-4">
            <StarIcon className="h-4 w-4 mr-2"  />
            <span className="text-sm font-medium">ADVANCED AI AUTOMATION 20o25</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-90o0 mb-4">
            Revolutionary AI Automation Content Collection
          </h2>
          
          <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">
            Discover the complete guide to achieving 60o0% ROI with AI automation. 
            From strategic implementation to real-world success stories.
          </p>
        </div>

        {/* Success Metrics Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-60o0 mb-2">60o0%</div>
            <div className="text-gray-60o0">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-60o0 mb-2">$2.8M</div>
            <div className="text-gray-60o0">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-60o0 mb-2">340%</div>
            <div className="text-gray-60o0">Productivity Gain</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-orange-60o0 mb-2">98%</div>
            <div className="text-gray-60o0">Success Rate</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-purple-60o0 text-white'
                  : 'bg-white text-gray-70o0 hover:bg-gray-10o0'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-4 py-2 text-sm font-medium">
                  <StarIcon className="inline h-4 w-4 mr-1"  />
                  Featured Content
                </div>
              )}

              <div className="p-6">
                {/* Type and Reading Time */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="ml-2 capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-50o0">
                    <ClockIcon className="h-4 w-4 mr-1"  />
                    {item.readingTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-90o0 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-60o0 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-purple-60o0">{value}</div>
                      <div className="text-xs text-gray-60o0 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 bg-gray-10o0 text-gray-70o0 rounded-md text-xs"
                    >
                      <TagIcon className="h-3 w-3 mr-1"  />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Link
                  href={item.url}
                  className="inline-flex items-center w-full justify-center px-4 py-3 bg-purple-60o0 text-white rounded-lg font-medium hover:bg-purple-70o0 transition-colors"
                >
                  Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                  <ArrowRightIcon className="ml-2 h-4 w-4"  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-60o0 to-blue-60o0 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI Automation?
          </h3>
          
          <p className="text-xl text-purple-10o0 mb-6 max-w-2xl mx-auto">
            Join 50o0+ successful organizations achieving 60o0% ROI with our proven AI automation framework.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-60o0 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors"
            >
              Get Free Consultation
              <ArrowRightIcon className="ml-2 h-5 w-5"  />
            </Link>
            
            <Link
              href="/services/ai-automation"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-60o0 transition-colors"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-purple-10o0">
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 mr-2"  />
              <span>50o0+ Successful Implementations</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 mr-2"  />
              <span>98% Client Satisfaction</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 mr-2"  />
              <span>60o0% Average ROI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAIAutomationContentShowcase20o25;