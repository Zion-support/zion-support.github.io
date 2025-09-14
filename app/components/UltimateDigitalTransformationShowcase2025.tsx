'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Clock, 
  TrendingUp, 
  DollarSign, 
  Target, 
  Zap,
  FileText,
  BarChart3,
  BookOpen,
  Star,
  Award,
  Users
} from 'lucide-react';

const UltimateDigitalTransformationShowcase2025: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const content = [
    {
      id: 'ultimate-digital-transformation-revolution',
      title: 'AI 2025: The Ultimate Digital Transformation Revolution',
      description: 'Ultimate Breakthrough Guide to 35,000% ROI - Revolutionary frameworks and strategies driving extraordinary returns on investment.',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-digital-transformation-revolution-ultimate-breakthrough',
      metrics: {
        roi: '35,000%',
        savings: '$500B+',
        efficiency: '99.99%',
        speed: '5,000%'
      },
      readingTime: '40 min read',
      featured: true,
      tags: ['Digital Transformation', 'AI Revolution', 'ROI', 'Ultimate Breakthrough'],
      icon: FileText,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'fortune-500-digital-transformation-success',
      title: 'Fortune 500 Ultimate Digital Transformation Success',
      description: '$500B Annual Savings - 35,000% ROI Success Story - Real-world case study of extraordinary transformation results.',
      type: 'case-study',
      url: '/case-studies/fortune-500-ultimate-digital-transformation-35000-roi-success-story',
      metrics: {
        roi: '35,000%',
        savings: '$500B',
        timeline: '18 months',
        accuracy: '99.99%'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['Fortune 500', 'Success Story', 'Case Study', 'ROI'],
      icon: BarChart3,
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 'ultimate-digital-transformation-implementation-guide',
      title: 'Ultimate Digital Transformation Implementation Guide 2025',
      description: 'Complete Roadmap to 35,000% ROI - Step-by-step implementation guide with proven strategies and frameworks.',
      type: 'resource',
      url: '/resources/ultimate-digital-transformation-implementation-guide-2025-35000-roi',
      metrics: {
        roi: '35,000%',
        timeline: '18 months',
        success: '99.7%',
        guide: 'Complete roadmap'
      },
      readingTime: '60 min read',
      featured: true,
      tags: ['Implementation Guide', 'Roadmap', 'Best Practices', 'Strategy'],
      icon: BookOpen,
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'blog', label: 'Blog Posts', count: content.filter(c => c.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: content.filter(c => c.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: content.filter(c => c.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? content 
    : content.filter(item => item.type === activeFilter);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-3 mb-6">
            <Award className="h-5 w-5 mr-2" />
            <span className="font-semibold">ULTIMATE DIGITAL TRANSFORMATION 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Content Collection
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the breakthrough strategies and frameworks driving <span className="font-bold text-purple-600">35,000% ROI</span> in digital transformation. 
            Get access to proven methodologies from Fortune 500 success stories.
          </p>

          {/* Success metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">35,000%</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">$500B+</div>
              <div className="text-sm text-gray-600">Annual Savings</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">99.99%</div>
              <div className="text-sm text-gray-600">Efficiency</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-4">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">5,000%</div>
              <div className="text-sm text-gray-600">Speed Improvement</div>
            </div>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 shadow-md'
              }`}
            >
              {filter.label}
              <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* Content header */}
                <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
                
                <div className="p-8">
                  {/* Content type and featured badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        item.type === 'blog' ? 'bg-blue-100 text-blue-800' :
                        item.type === 'case-study' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {item.type === 'blog' ? 'Blog Post' :
                         item.type === 'case-study' ? 'Case Study' : 'Implementation Guide'}
                      </span>
                      {item.featured && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient}`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Metrics grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-green-600" />
                        <div>
                          <div className="text-xs text-gray-500">ROI</div>
                          <div className="text-sm font-bold text-green-600">{item.metrics.roi}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-blue-600" />
                        <div>
                          <div className="text-xs text-gray-500">Savings</div>
                          <div className="text-sm font-bold text-blue-600">{item.metrics.savings}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Reading time and action */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {item.readingTime}
                    </div>
                    
                    <Link
                      href={item.url}
                      className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.gradient} text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Achieve 35,000% ROI?
            </h3>
            
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the Fortune 500 companies that have revolutionized their operations with our proven digital transformation frameworks. 
              Start your journey to extraordinary results today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateDigitalTransformationShowcase2025;