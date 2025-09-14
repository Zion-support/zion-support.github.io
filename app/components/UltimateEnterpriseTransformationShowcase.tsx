'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, Target, Clock, Users, Award, BookOpen, FileText, BarChart3 } from 'lucide-react';

const UltimateEnterpriseTransformationShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ultimate-enterprise-transformation',
      title: 'AI 2025: The Ultimate Enterprise Transformation Revolution',
      subtitle: '20,000% ROI - The Highest Documented ROI in Enterprise AI History',
      description: 'Transform your Fortune 500 company with revolutionary AI systems that have generated $200B+ in annual savings across 1,000+ implementations.',
      type: 'blog',
      category: 'transformation',
      metrics: {
        roi: '20,000%',
        savings: '$200B+',
        accuracy: '99.99%',
        efficiency: '5,000%'
      },
      url: '/blog/ai-2025-ultimate-enterprise-transformation-revolution-ultimate-breakthrough',
      readingTime: '35 min read',
      featured: true,
      tags: ['AI Revolution', 'Enterprise Transformation', '20,000% ROI', 'Fortune 500', 'Revolutionary AI']
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 Ultimate Success: $200B Annual Savings',
      subtitle: '20,000% ROI Success Story - Complete Case Study',
      description: 'How a Fortune 50 manufacturing leader achieved the highest ROI in enterprise AI history through revolutionary transformation.',
      type: 'case-study',
      category: 'success-stories',
      metrics: {
        roi: '20,000%',
        savings: '$200B',
        timeline: '18 months',
        satisfaction: '99.8%'
      },
      url: '/case-studies/fortune-500-ultimate-enterprise-transformation-20000-roi-success-story',
      readingTime: '25 min read',
      featured: true,
      tags: ['Fortune 500', 'Success Story', '20,000% ROI', 'Manufacturing', 'Case Study']
    },
    {
      id: 'implementation-guide',
      title: 'Complete Implementation Guide: 20,000% ROI Roadmap',
      subtitle: 'The Definitive Guide to Revolutionary AI Transformation',
      description: 'Step-by-step roadmap to implementing AI systems that deliver unprecedented business results and market domination.',
      type: 'resource',
      category: 'guides',
      metrics: {
        success: '99.7%',
        timeline: '18 months',
        projects: '1,000+',
        guide: '60 min read'
      },
      url: '/resources/ai-2025-ultimate-enterprise-transformation-implementation-guide',
      readingTime: '60 min read',
      featured: true,
      tags: ['Implementation Guide', 'AI Strategy', '20,000% ROI', 'Roadmap', 'Best Practices']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'transformation', name: 'Transformation', count: content.filter(item => item.category === 'transformation').length },
    { id: 'success-stories', name: 'Success Stories', count: content.filter(item => item.category === 'success-stories').length },
    { id: 'guides', name: 'Implementation Guides', count: content.filter(item => item.category === 'guides').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <BookOpen className="w-5 h-5" />;
      case 'case-study': return <FileText className="w-5 h-5" />;
      case 'resource': return <BarChart3 className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-3 mb-6">
            <Award className="w-5 h-5" />
            <span className="font-semibold">ULTIMATE ENTERPRISE TRANSFORMATION</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content Collection
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the complete roadmap to achieving 20,000% ROI through revolutionary AI transformation. 
            Proven strategies, real success stories, and step-by-step implementation guides.
          </p>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">20,000%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">$200B+</div>
              <div className="text-gray-600">Annual Savings</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">99.7%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">1,000+</div>
              <div className="text-gray-600">Implementations</div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  {item.featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-purple-600 font-semibold mb-3">
                  {item.subtitle}
                </p>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-gray-900">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  {item.readingTime}
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6">
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span>
                    {item.type === 'blog' ? 'Read Article' : 
                     item.type === 'case-study' ? 'View Case Study' : 
                     'Download Guide'}
                  </span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve 20,000% ROI?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join 1,000+ Fortune 500 companies that have transformed their business with revolutionary AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Users className="mr-2 w-5 h-5" />
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                <Target className="mr-2 w-5 h-5" />
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateEnterpriseTransformationShowcase;