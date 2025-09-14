'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, TrendingUp, Zap, Brain, Target, Clock, Users, Award, ArrowRight } from 'lucide-react';

const UltimateAutonomousAIContentShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ultimate-autonomous-ai-revolution',
      title: 'AI 2025-2026: The Ultimate Autonomous AI Revolution',
      subtitle: 'Ultimate Breakthrough Guide to 20,000% ROI',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 20,000% ROI through revolutionary autonomous AI systems that operate independently with 99.99% accuracy.',
      metrics: {
        roi: '20,000%',
        savings: '$150B+',
        accuracy: '99.99%',
        efficiency: '4,500%'
      },
      type: 'blog',
      category: 'ai-revolution',
      readingTime: '45 min read',
      url: '/blog/ai-2025-2026-ultimate-autonomous-ai-revolution-ultimate-breakthrough',
      featured: true,
      tags: ['AI Revolution', 'Autonomous AI', 'ROI', 'Fortune 500', 'Breakthrough']
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 Ultimate Autonomous AI Success',
      subtitle: '$150B Annual Savings - 20,000% ROI Success Story',
      description: 'Real-world case study of a Fortune 500 manufacturing conglomerate that achieved 20,000% ROI through autonomous AI implementation, saving $150B annually.',
      metrics: {
        roi: '20,000%',
        savings: '$150B',
        timeline: '18 months',
        accuracy: '99.99%'
      },
      type: 'case-study',
      category: 'success-stories',
      readingTime: '25 min read',
      url: '/case-studies/fortune-500-ultimate-autonomous-ai-20000-roi-success-story',
      featured: true,
      tags: ['Case Study', 'Fortune 500', 'Success Story', 'ROI', 'Manufacturing']
    },
    {
      id: 'implementation-guide',
      title: 'Ultimate Autonomous AI Implementation Guide',
      subtitle: 'Complete Roadmap to 20,000% ROI',
      description: 'Comprehensive 60-minute guide covering everything from strategy to deployment, helping you achieve 20,000% ROI with autonomous AI systems.',
      metrics: {
        roi: '20,000%',
        timeline: '12-18 months',
        success: '99.7%',
        guide: '60 min read'
      },
      type: 'resource',
      category: 'implementation',
      readingTime: '60 min read',
      url: '/resources/ultimate-autonomous-ai-implementation-guide-2025-2026',
      featured: true,
      tags: ['Implementation Guide', 'ROI', 'Strategy', 'Framework', 'Best Practices']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'ai-revolution', label: 'AI Revolution', count: content.filter(c => c.category === 'ai-revolution').length },
    { id: 'success-stories', label: 'Success Stories', count: content.filter(c => c.category === 'success-stories').length },
    { id: 'implementation', label: 'Implementation', count: content.filter(c => c.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <Brain className="h-5 w-5" />;
      case 'case-study':
        return <Award className="h-5 w-5" />;
      case 'resource':
        return <Target className="h-5 w-5" />;
      default:
        return <Star className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'text-blue-400 bg-blue-100';
      case 'case-study':
        return 'text-green-400 bg-green-100';
      case 'resource':
        return 'text-purple-400 bg-purple-100';
      default:
        return 'text-gray-400 bg-gray-100';
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">Ultimate Autonomous AI Content</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover breakthrough content that's helping Fortune 500 companies achieve unprecedented 20,000% ROI through autonomous AI systems
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 border border-gray-200'
              }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="ml-2 capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  {item.featured && (
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-lg text-purple-600 font-medium mb-3">
                  {item.subtitle}
                </p>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-green-600">ROI</div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Zap className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
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
                  {item.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Reading Time */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{item.readingTime}</span>
                </div>

                {/* Action Button */}
                <Link
                  href={item.url}
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Proven Results Across Industries</h3>
            <p className="text-purple-200 text-lg">
              Our autonomous AI solutions have consistently delivered breakthrough results for Fortune 500 companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">20,000%</div>
              <div className="text-purple-200">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$150B+</div>
              <div className="text-purple-200">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.99%</div>
              <div className="text-purple-200">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-purple-200">Success Stories</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Achieve 20,000% ROI with Autonomous AI?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the Fortune 500 companies that are transforming their operations and achieving unprecedented returns with autonomous AI systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-200"
            >
              View Our Services
            </Link>
          </div>

          <div className="mt-8 flex justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              <span>500+ Companies Served</span>
            </div>
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-2" />
              <span>99.7% Success Rate</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              <span>20,000% Average ROI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAutonomousAIContentShowcase;