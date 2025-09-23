'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRightIcon, 
  StarIcon, 
  ChartBarIcon, 
  ClockIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  BriefcaseIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const AI2025UltimateContentShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      description: 'Transform your business with cutting-edge AI automation solutions. Achieve 1,200% ROI with our proven framework.',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      type: 'blog',
      category: 'automation',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      featured: true,
      icon: AcademicCapIcon
    },
    {
      id: 'fortune-100-success',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,200% ROI',
      description: 'Real-world case study of how a Fortune 100 manufacturing giant transformed operations with AI automation.',
      url: '/case-studies/ai-transformation-fortune-100-ultimate-success-story-2025',
      type: 'case-study',
      category: 'transformation',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '24 months',
        facilities: '47 plants'
      },
      readingTime: '12 min read',
      featured: true,
      icon: BriefcaseIcon
    },
    {
      id: 'ultimate-success-framework',
      title: 'AI Implementation Ultimate Success Framework 2025',
      description: 'Complete roadmap to 1,000%+ ROI with our proven implementation framework used by 1,000+ enterprises.',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      type: 'resource',
      category: 'implementation',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        timeline: '18 months',
        companies: '1,000+'
      },
      readingTime: '25 min read',
      featured: true,
      icon: DocumentTextIcon
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'automation', name: 'Automation', count: contentItems.filter(item => item.category === 'automation').length },
    { id: 'transformation', name: 'Transformation', count: contentItems.filter(item => item.category === 'transformation').length },
    { id: 'implementation', name: 'Implementation', count: contentItems.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-500';
      case 'case-study': return 'bg-green-500';
      case 'resource': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Blog Post';
      case 'case-study': return 'Case Study';
      case 'resource': return 'Resource';
      default: return 'Content';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <TrophyIcon className="h-8 w-8 text-yellow-500" />
            <h2 className="text-4xl font-bold text-gray-900">AI 2025 Ultimate Content Collection</h2>
            <TrophyIcon className="h-8 w-8 text-yellow-500" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI implementation guides, success stories, and frameworks 
            that have delivered <span className="font-bold text-purple-600">1,200% ROI</span> for Fortune 500 companies.
          </p>
        </div>

        {/* Success Metrics Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mb-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">1,200%</div>
              <div className="text-lg text-blue-100">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">$2.8B</div>
              <div className="text-lg text-blue-100">Average Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">94%</div>
              <div className="text-lg text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">1,000+</div>
              <div className="text-lg text-blue-100">Companies</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Content Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getTypeColor(item.type)} text-white`}>
                          {getTypeLabel(item.type)}
                        </span>
                        {item.featured && (
                          <span className="ml-2 text-xs font-semibold px-3 py-1 rounded-full bg-yellow-500 text-black">
                            FEATURED
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <ClockIcon className="h-4 w-4" />
                      <span>{item.readingTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="p-6 bg-gray-50">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(item.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={item.url}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <span>Read Now</span>
                    <ChevronRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Achieve 1,200% ROI with AI?
            </h3>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join 1,000+ companies that have transformed their operations with our proven AI implementation framework. 
              Get started with a free consultation and discover your ROI potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ChevronRightIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore All Resources</span>
                <ChartBarIcon className="h-6 w-6" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-blue-200">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-blue-200">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-blue-200">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025UltimateContentShowcase;