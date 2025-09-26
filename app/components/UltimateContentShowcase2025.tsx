'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Star, Zap, BookOpen, FileText, BarChart3 } from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentPieces = [
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025 Enterprise Automation Mastery: Ultimate Success Guide to 500% ROI',
      type: 'blog',
      category: 'AI Automation',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        satisfaction: '98%',
        projects: '500+'
      },
      description: 'Discover how Fortune 500 companies achieve 500% ROI with AI automation. Complete implementation guide with real success stories and actionable strategies.',
      readingTime: '22 min read',
      featured: true,
      tags: ['AI Automation', 'Enterprise', 'ROI', 'Success Guide'],
      author: 'Zion Tech Group',
      publishedDate: '2025-01-17'
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings in 18 Months',
      type: 'case-study',
      category: 'Case Study',
      url: '/case-studies/fortune-500-ai-transformation-ultimate-success-story-2025',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        satisfaction: '99.2%',
        timeline: '18 months'
      },
      description: 'Complete case study of how a Fortune 500 manufacturing company achieved 567% ROI and $2.8B in annual savings through comprehensive AI transformation.',
      readingTime: '18 min read',
      featured: true,
      tags: ['Fortune 500', 'AI Transformation', 'ROI', 'Manufacturing'],
      author: 'Zion Tech Group',
      publishedDate: '2025-01-17'
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025: Complete Guide to 500% ROI Success',
      type: 'resource',
      category: 'Implementation',
      url: '/resources/ai-implementation-ultimate-roadmap-2025-complete-guide',
      metrics: {
        roi: '500%',
        success: '94%',
        timeline: '12-18 months',
        projects: '500+'
      },
      description: 'The definitive guide to AI implementation success. Step-by-step roadmap, proven frameworks, and real-world strategies to achieve 500% ROI in 12-18 months.',
      readingTime: '35 min read',
      featured: true,
      tags: ['Implementation', 'Roadmap', 'Strategy', 'ROI'],
      author: 'Zion Tech Group',
      publishedDate: '2025-01-17'
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - $100B Market Transformation',
      type: 'blog',
      category: 'Quantum AI',
      url: '/blog/ai-2025-quantum-computing-business-revolution-ultimate-guide',
      metrics: {
        market: '$100B',
        speed: '1,200%',
        accuracy: '99.97%',
        roi: '488%'
      },
      description: 'Discover how quantum computing is revolutionizing business operations with 1,200% processing speed improvements and 99.97% accuracy.',
      readingTime: '25 min read',
      featured: true,
      tags: ['Quantum Computing', 'AI Revolution', 'Business Transformation'],
      author: 'Zion Tech Group',
      publishedDate: '2025-01-17'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentPieces.length },
    { id: 'blog', label: 'Blog Posts', count: contentPieces.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentPieces.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentPieces.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentPieces 
    : contentPieces.filter(item => item.type === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="h-5 w-5" />;
      case 'case-study':
        return <BarChart3 className="h-5 w-5" />;
      case 'resource':
        return <FileText className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'resource':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <Zap className="h-5 w-5 mr-2" />
            <span className="font-semibold">ULTIMATE CONTENT COLLECTION 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              {" "}Delivers Results
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access the most comprehensive collection of AI implementation guides, case studies, 
            and resources that have helped Fortune 500 companies achieve 
            <span className="font-bold text-purple-600"> 500% ROI</span> and 
            <span className="font-bold text-green-600"> $2.8B in annual savings</span>.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">500%</div>
            <div className="text-gray-600 font-medium">Average ROI</div>
            <div className="text-sm text-gray-500 mt-1">Guaranteed Results</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-green-600 mb-2">$2.8B</div>
            <div className="text-gray-600 font-medium">Annual Savings</div>
            <div className="text-sm text-gray-500 mt-1">Fortune 500 Companies</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Success Rate</div>
            <div className="text-sm text-gray-500 mt-1">Implementation Success</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Success Stories</div>
            <div className="text-sm text-gray-500 mt-1">Verified Results</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label}
              <span className="ml-2 bg-white/20 text-xs px-2 py-1 rounded-full">
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredContent.map((content, _index) => (
            <div
              key={content.id}
              className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                content.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {/* Content Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`p-2 rounded-lg ${getTypeColor(content.type)}`}>
                      {getTypeIcon(content.type)}
                    </div>
                    <div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(content.type)}`}>
                        {content.type.replace('-', ' ').toUpperCase()}
                      </div>
                      {content.featured && (
                        <div className="inline-flex items-center ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                          <Star className="h-3 w-3 mr-1" />
                          FEATURED
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {content.readingTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {content.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{content.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Metrics */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {content.metrics.roi}
                    </div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {content.metrics.savings}
                    </div>
                    <div className="text-sm text-gray-600">Savings</div>
                  </div>
                </div>

                <Link
                  href={content.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-6 rounded-lg text-center hover:from-purple-500 hover:to-blue-500 transition-all duration-200 transform hover:scale-105"
                >
                  Read Full Article
                  <ArrowRight className="inline h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join 500+ companies that have achieved 500% ROI with our proven AI strategies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources"
              className="bg-white text-purple-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              Explore All Resources
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-200"
            >
              Get Custom Consultation
            </Link>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">100+</div>
            <div className="text-gray-600">Minutes of Content</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">4</div>
            <div className="text-gray-600">Comprehensive Guides</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">2</div>
            <div className="text-gray-600">Case Studies</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">2</div>
            <div className="text-gray-600">Implementation Resources</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;