'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Target, Zap, Clock, Users, Award, BookOpen, FileText, BarChart3 } from 'lucide-react';

interface BreakthroughContent {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  readingTime: string;
  metrics: {
    roi: string;
    savings: string;
    accuracy: string;
    efficiency?: string;
  };
  tags: string[];
  featured: boolean;
}

const BreakthroughTechnologies2025Showcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'blog' | 'case-study' | 'resource'>('all');

  const breakthroughContent: BreakthroughContent[] = [
    {
      id: 'breakthrough-technologies-revolution',
      title: 'AI 2025: The Breakthrough Technologies Revolution - Ultimate Guide to 5,000% ROI',
      description: 'Discover the revolutionary breakthrough technologies transforming enterprise operations in 2025. From quantum-enhanced AI to synthetic intelligence, achieve 5,000% ROI with cutting-edge solutions.',
      type: 'blog',
      url: '/blog/ai-2025-breakthrough-technologies-revolution-ultimate-guide',
      readingTime: '35 min read',
      metrics: {
        roi: '5,000%',
        savings: '$15.8B+',
        accuracy: '99.97%',
        efficiency: '2,400%'
      },
      tags: ['AI Breakthrough', 'Quantum AI', 'Synthetic Intelligence', 'ROI', 'Enterprise Transformation'],
      featured: true
    },
    {
      id: 'fortune-500-breakthrough-technologies-5000-roi-success',
      title: 'Fortune 500 Breakthrough Technologies Success: $15.8B Annual Savings - 5,000% ROI Success Story',
      description: 'Discover how a Fortune 500 manufacturing company achieved 5,000% ROI and $15.8B in annual savings through breakthrough AI technologies implementation.',
      type: 'case-study',
      url: '/case-studies/fortune-500-breakthrough-technologies-5000-roi-success-story',
      readingTime: '25 min read',
      metrics: {
        roi: '5,000%',
        savings: '$15.8B',
        accuracy: '99.97%',
        efficiency: '2,400%'
      },
      tags: ['Fortune 500', 'Breakthrough Technologies', '5,000% ROI', 'Success Story', 'Manufacturing'],
      featured: true
    },
    {
      id: 'breakthrough-technologies-implementation-ultimate-guide',
      title: 'Breakthrough Technologies Implementation Ultimate Guide 2025: Complete Roadmap to 5,000% ROI',
      description: 'The comprehensive implementation guide for breakthrough AI technologies. From strategy to execution, achieve 5,000% ROI with our proven framework and methodologies.',
      type: 'resource',
      url: '/resources/breakthrough-technologies-implementation-ultimate-guide-2025',
      readingTime: '45 min read',
      metrics: {
        roi: '5,000%',
        savings: '$15.8B',
        accuracy: '97%',
        efficiency: '2,400%'
      },
      tags: ['Implementation Guide', 'Breakthrough Technologies', 'ROI', 'Strategy', 'Framework'],
      featured: true
    }
  ];

  const filteredContent = breakthroughContent.filter(content => 
    activeFilter === 'all' || content.type === activeFilter
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <BookOpen className="h-4 w-4" />;
      case 'case-study': return <BarChart3 className="h-4 w-4" />;
      case 'resource': return <FileText className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study': return 'bg-green-100 text-green-800 border-green-200';
      case 'resource': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center space-x-2 bg-purple-100 text-purple-800 rounded-full px-4 py-2">
              <Zap className="h-5 w-5" />
              <span className="text-sm font-semibold">BREAKTHROUGH TECHNOLOGIES 2025</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-100 text-green-800 rounded-full px-3 py-1">
              <Star className="h-4 w-4" />
              <span className="text-xs font-medium">5,000% ROI</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Breakthrough Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the cutting-edge technologies transforming enterprise operations with unprecedented ROI, efficiency, and innovation.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Average ROI</h3>
            </div>
            <div className="text-3xl font-bold text-green-600 mb-1">5,000%</div>
            <p className="text-sm text-gray-600">Within 24 months</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Annual Savings</h3>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-1">$15.8B+</div>
            <p className="text-sm text-gray-600">Operational cost reduction</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Accuracy Rate</h3>
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-1">99.97%</div>
            <p className="text-sm text-gray-600">Critical operations</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Award className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Efficiency Gain</h3>
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-1">2,400%</div>
            <p className="text-sm text-gray-600">Operational improvement</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { key: 'all', label: 'All Content', count: breakthroughContent.length },
            { key: 'blog', label: 'Blog Posts', count: breakthroughContent.filter(c => c.type === 'blog').length },
            { key: 'case-study', label: 'Case Studies', count: breakthroughContent.filter(c => c.type === 'case-study').length },
            { key: 'resource', label: 'Resources', count: breakthroughContent.filter(c => c.type === 'resource').length }
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key as any)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                activeFilter === filter.key
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span>{filter.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                activeFilter === filter.key ? 'bg-purple-500' : 'bg-gray-100'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 ${
                content.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {/* Featured Badge */}
              {content.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-semibold flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span>Featured</span>
                </div>
              )}

              <div className="p-6">
                {/* Content Type and Reading Time */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getTypeColor(content.type)}`}>
                    {getTypeIcon(content.type)}
                    <span className="text-sm font-medium capitalize">{content.type.replace('-', ' ')}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{content.readingTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-3">
                  {content.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="text-sm font-semibold text-green-700">ROI</div>
                    <div className="text-lg font-bold text-green-600">{content.metrics.roi}</div>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="text-sm font-semibold text-blue-700">Savings</div>
                    <div className="text-sm font-bold text-blue-600">{content.metrics.savings}</div>
                  </div>
                  <div className="text-center p-2 bg-purple-50 rounded-lg">
                    <div className="text-sm font-semibold text-purple-700">Accuracy</div>
                    <div className="text-sm font-bold text-purple-600">{content.metrics.accuracy}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {content.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      +{content.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Call to Action */}
                <Link
                  href={content.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>Read {content.type === 'blog' ? 'Article' : content.type === 'case-study' ? 'Case Study' : 'Guide'}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve 5,000% ROI with Breakthrough Technologies?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join hundreds of Fortune 500 companies already transforming their operations with revolutionary AI technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/breakthrough-technologies-implementation-ultimate-guide-2025"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 group"
              >
                <span>Get Implementation Guide</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center space-x-2 group"
              >
                <span>Schedule Consultation</span>
                <Users className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakthroughTechnologies2025Showcase;