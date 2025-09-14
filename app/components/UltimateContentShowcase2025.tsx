'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRightIcon, 
  ChartBarIcon, 
  CpuChipIcon, 
  SparklesIcon,
  BookOpenIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

const UltimateContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Content', icon: SparklesIcon },
    { id: 'blog', name: 'Blog Posts', icon: BookOpenIcon },
    { id: 'case-studies', name: 'Case Studies', icon: DocumentTextIcon },
    { id: 'resources', name: 'Resources', icon: AcademicCapIcon }
  ];

  const content = [
    {
      id: 'neural-architectures',
      type: 'blog',
      title: 'AI 2025: Advanced Neural Architectures - Enterprise Breakthrough Guide',
      description: 'Revolutionary AI systems delivering 450% ROI with 99.2% accuracy across critical business functions.',
      metrics: '450% ROI • 99.2% Accuracy • 67% Cost Reduction',
      readingTime: '18 min read',
      featured: true,
      url: '/blog/ai-2025-advanced-neural-architectures-enterprise-breakthrough',
      color: 'from-purple-600 to-indigo-600',
      icon: CpuChipIcon
    },
    {
      id: 'enterprise-automation',
      type: 'case-studies',
      title: 'AI 2025 Enterprise Automation: $2.8B Company Achieves 500% ROI Success Story',
      description: 'Fortune 500 manufacturing company achieves remarkable success through comprehensive AI automation implementation.',
      metrics: '500% ROI • $140M Savings • 85% Efficiency Gain',
      readingTime: '15 min read',
      featured: true,
      url: '/case-studies/ai-2025-enterprise-automation-500-percent-roi-success-story',
      color: 'from-blue-600 to-cyan-600',
      icon: ChartBarIcon
    },
    {
      id: 'implementation-framework',
      type: 'resources',
      title: 'AI 2025 Implementation: Ultimate Success Framework',
      description: 'Comprehensive guide to achieve 500%+ ROI through strategic AI implementation with 94% success rate.',
      metrics: '94% Success Rate • 500%+ ROI • 67% Faster Implementation',
      readingTime: '25 min read',
      featured: true,
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      color: 'from-emerald-600 to-teal-600',
      icon: AcademicCapIcon
    },
    {
      id: 'generative-ai-revolution',
      type: 'blog',
      title: 'AI 2025: The Generative AI Enterprise Revolution - $2.3T Market Transformation',
      description: 'Comprehensive analysis of how generative AI is transforming enterprise operations and creating new opportunities.',
      metrics: '340% ROI • $180M Savings • 99.7% Accuracy',
      readingTime: '20 min read',
      featured: false,
      url: '/blog/ai-2025-generative-ai-enterprise-revolution',
      color: 'from-orange-600 to-red-600',
      icon: SparklesIcon
    },
    {
      id: 'mlops-breakthrough',
      type: 'blog',
      title: 'AI 2025: MLOps Breakthrough - 99.9% Model Reliability with 67% Faster Deployment',
      description: 'Advanced MLOps practices delivering unprecedented model reliability and deployment speed for enterprise AI.',
      metrics: '99.9% Reliability • 67% Faster Deployment • $2.1B Savings',
      readingTime: '16 min read',
      featured: false,
      url: '/blog/ai-2025-machine-learning-operations-mlops-breakthrough',
      color: 'from-green-600 to-emerald-600',
      icon: CpuChipIcon
    },
    {
      id: 'retail-transformation',
      type: 'case-studies',
      title: 'Retail AI Transformation 2025: $500M Company Achieves 280% ROI with AI-Powered Operations',
      description: 'How a major retail company transformed operations using AI-powered solutions and achieved remarkable results.',
      metrics: '280% ROI • $45M Savings • 99.2% Satisfaction',
      readingTime: '12 min read',
      featured: false,
      url: '/case-studies/retail-ai-transformation-2025-ultimate-success',
      color: 'from-pink-600 to-rose-600',
      icon: ChartBarIcon
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.type === activeCategory);

  const featuredContent = content.filter(item => item.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <SparklesIcon className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">🚀 ULTIMATE AI CONTENT COLLECTION 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That Delivers Results
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI insights, real-world success stories, and proven implementation frameworks 
            that have helped organizations achieve <span className="font-semibold text-purple-600">500%+ ROI</span> and 
            <span className="font-semibold text-purple-600"> 99%+ accuracy</span> in their AI transformations.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            ⭐ Featured Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredContent.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => window.open(item.url, '_blank')}
                >
                  <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className={`w-8 h-8 text-transparent bg-gradient-to-r ${item.color} bg-clip-text`} />
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          {item.type.replace('-', ' ')}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">{item.readingTime}</span>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    
                    <div className={`text-sm font-mono text-transparent bg-gradient-to-r ${item.color} bg-clip-text mb-4`}>
                      {item.metrics}
                    </div>
                    
                    <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-800 transition-colors">
                      Read Full Article
                      <ChevronRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => window.open(item.url, '_blank')}
              >
                <div className={`h-1 bg-gradient-to-r ${item.color}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Icon className={`w-6 h-6 text-transparent bg-gradient-to-r ${item.color} bg-clip-text`} />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {item.type.replace('-', ' ')}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className={`text-xs font-mono text-transparent bg-gradient-to-r ${item.color} bg-clip-text mb-3`}>
                    {item.metrics}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{item.readingTime}</span>
                    <div className="flex items-center text-purple-600 font-medium text-sm group-hover:text-purple-800 transition-colors">
                      Read More
                      <ChevronRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Proven Results Across All Content</h3>
            <p className="text-purple-100 text-lg">
              Our content is based on real-world implementations and proven methodologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500%+</div>
              <div className="text-purple-100">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99%+</div>
              <div className="text-purple-100">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">94%</div>
              <div className="text-purple-100">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$2.8B+</div>
              <div className="text-purple-100">Total Savings</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center text-lg"
            >
              <BookOpenIcon className="w-6 h-6 mr-2" />
              Explore All Blog Posts
            </Link>
            <Link
              href="/case-studies"
              className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center text-lg"
            >
              <DocumentTextIcon className="w-6 h-6 mr-2" />
              View Case Studies
            </Link>
            <Link
              href="/resources"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center text-lg"
            >
              <AcademicCapIcon className="w-6 h-6 mr-2" />
              Access Resources
            </Link>
          </div>
          
          <div className="mt-8">
            <Link
              href="/services/ai-implementation"
              className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
            >
              <ArrowTrendingUpIcon className="w-5 h-5 mr-2" />
              Get Personalized AI Implementation Strategy
              <ChevronRightIcon className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;