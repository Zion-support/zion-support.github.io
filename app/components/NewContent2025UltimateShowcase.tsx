'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Clock, Users, Award, CheckCircle } from 'lucide-react';

const NewContent2025UltimateShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      category: 'ai-strategy',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough',
      roi: '600%',
      savings: '$4.2B',
      accuracy: '99.3%',
      satisfaction: '98%',
      readingTime: '22 min read',
      description: 'Discover how Fortune 500 companies are achieving 600% ROI with next-generation AI solutions.',
      featured: true,
      tags: ['AI Strategy', 'Enterprise', 'ROI', 'Breakthrough']
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings - Ultimate Success Story',
      type: 'case-study',
      category: 'success-stories',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      roi: '567%',
      savings: '$2.8B',
      efficiency: '78%',
      satisfaction: '99.2%',
      readingTime: '18 min read',
      description: 'How a $50B manufacturing giant achieved 567% ROI with AI transformation.',
      featured: true,
      tags: ['Case Study', 'Fortune 500', 'Manufacturing', 'Success']
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - $100B Market Transformation',
      type: 'blog',
      category: 'emerging-tech',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      roi: '400-600%',
      savings: '$100B',
      speed: '1,200%',
      accuracy: '99.97%',
      readingTime: '20 min read',
      description: 'Discover how quantum computing is revolutionizing business operations with 1,200% processing speed improvements.',
      featured: true,
      tags: ['Quantum Computing', 'AI', 'Revolution', 'Market']
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap: From Strategy to 800% ROI in 18 Months',
      type: 'resource',
      category: 'implementation',
      url: '/resources/ai-2025-implementation-roadmap-ultimate',
      roi: '800%',
      savings: '$173.7M',
      success: '99%',
      timeline: '18 months',
      readingTime: '25 min read',
      description: 'Complete step-by-step guide to AI implementation with proven strategies and frameworks.',
      featured: true,
      tags: ['Implementation', 'Roadmap', 'Strategy', 'ROI']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'ai-strategy', label: 'AI Strategy', count: contentItems.filter(item => item.category === 'ai-strategy').length },
    { id: 'success-stories', label: 'Success Stories', count: contentItems.filter(item => item.category === 'success-stories').length },
    { id: 'emerging-tech', label: 'Emerging Tech', count: contentItems.filter(item => item.category === 'emerging-tech').length },
    { id: 'implementation', label: 'Implementation', count: contentItems.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
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
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <Award className="h-5 w-5 mr-2" />
            <span className="text-sm font-semibold">NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ultimate Content Showcase 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest breakthrough content with proven ROI results. 
            Transform your business with cutting-edge AI strategies and success stories.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                        {item.type.replace('-', ' ').toUpperCase()}
                      </div>
                      {item.featured && (
                        <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 ml-2">
                          <Star className="h-3 w-3 mr-1" />
                          FEATURED
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {item.readingTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">ROI</span>
                    </div>
                    <div className="text-lg font-bold text-green-600">
                      {item.roi}
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Star className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">Savings</span>
                    </div>
                    <div className="text-lg font-bold text-blue-600">
                      {item.savings}
                    </div>
                  </div>
                </div>

                <Link
                  href={item.url}
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors group"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Proven Results Across Industries
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">800%</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$4.2B</div>
              <div className="text-sm text-gray-600">Total Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">99%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of Fortune 500 companies that have achieved remarkable ROI with our proven AI strategies and implementation frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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

export default NewContent2025UltimateShowcase;