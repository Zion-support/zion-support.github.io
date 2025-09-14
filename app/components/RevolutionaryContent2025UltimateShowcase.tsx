'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Award, Users, Clock, BookOpen, BarChart3, ArrowRight } from 'lucide-react';

const RevolutionaryContent2025UltimateShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentPieces = [
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - The Ultimate Guide to 500% ROI',
      type: 'blog',
      category: 'automation',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-guide',
      description: 'Transform your business with cutting-edge AI automation that delivers unprecedented results and 500% ROI.',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['AI Automation', 'Enterprise', 'ROI', 'Digital Transformation']
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $3.2B Company Achieves 650% ROI with Intelligent Automation',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/ai-transformation-fortune-500-ultimate-success-2025',
      description: 'How a global manufacturing leader transformed operations and achieved unprecedented results through strategic AI implementation.',
      metrics: {
        roi: '650%',
        savings: '$2.8B',
        accuracy: '99.7%',
        efficiency: '78%'
      },
      readingTime: '22 min read',
      featured: true,
      tags: ['Fortune 500', 'AI Transformation', 'ROI', 'Success Story']
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025: From Strategy to 800% ROI in 18 Months',
      type: 'resource',
      category: 'implementation',
      url: '/resources/ai-implementation-ultimate-roadmap-2025',
      description: 'The complete step-by-step guide to transforming your business with AI and achieving unprecedented results.',
      metrics: {
        roi: '800%',
        savings: '$173.7M',
        success: '99%',
        timeline: '18 months'
      },
      readingTime: '35 min read',
      featured: true,
      tags: ['Implementation', 'ROI', 'Strategy', 'Roadmap']
    },
    {
      id: 'generative-ai-revolution',
      title: 'AI 2025: The Generative AI Enterprise Revolution - $2.3T Market Transformation',
      type: 'blog',
      category: 'ai',
      url: '/blog/ai-2025-generative-ai-enterprise-revolution',
      description: 'Discover how generative AI is revolutionizing enterprise operations and creating a $2.3 trillion market opportunity.',
      metrics: {
        roi: '340%',
        savings: '$180M',
        accuracy: '99.7%',
        satisfaction: '98%'
      },
      readingTime: '18 min read',
      featured: false,
      tags: ['Generative AI', 'Enterprise', 'ROI', 'Digital Transformation']
    },
    {
      id: 'mlops-breakthrough',
      title: 'AI 2025: MLOps Breakthrough - 99.9% Model Reliability with 67% Faster Deployment',
      type: 'blog',
      category: 'ai',
      url: '/blog/ai-2025-machine-learning-operations-mlops-breakthrough',
      description: 'Master MLOps with breakthrough strategies that deliver 99.9% model reliability and 67% faster deployment.',
      metrics: {
        reliability: '99.9%',
        deployment_speed: '67%',
        savings: '$2.1B',
        efficiency: '89%'
      },
      readingTime: '15 min read',
      featured: false,
      tags: ['MLOps', 'Machine Learning', 'DevOps', 'AI Operations']
    },
    {
      id: 'retail-transformation',
      title: 'Retail AI Transformation 2025: $500M Company Achieves 280% ROI with AI-Powered Operations',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/retail-ai-transformation-2025-ultimate-success',
      description: 'Learn how a $500M retail company achieved 280% ROI through comprehensive AI transformation.',
      metrics: {
        roi: '280%',
        savings: '$45M',
        satisfaction: '99.2%',
        efficiency: '78%'
      },
      readingTime: '20 min read',
      featured: false,
      tags: ['Retail', 'AI Transformation', 'ROI', 'Case Study']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentPieces.length },
    { id: 'automation', label: 'Automation', count: contentPieces.filter(c => c.category === 'automation').length },
    { id: 'ai', label: 'AI & ML', count: contentPieces.filter(c => c.category === 'ai').length },
    { id: 'case-study', label: 'Case Studies', count: contentPieces.filter(c => c.category === 'case-study').length },
    { id: 'implementation', label: 'Implementation', count: contentPieces.filter(c => c.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentPieces 
    : contentPieces.filter(content => content.category === activeCategory);

  const featuredContent = contentPieces.filter(content => content.featured);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 mr-2 fill-current" />
            <span className="font-semibold">REVOLUTIONARY CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Master AI Implementation with Our Ultimate Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the proven strategies, real-world case studies, and step-by-step roadmaps 
            that Fortune 500 companies use to achieve <span className="text-purple-600 font-bold">800% ROI</span> with AI.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">800%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$2.8B</div>
            <div className="text-gray-600">Total Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Content</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredContent.map((content) => (
              <div key={content.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {content.type.toUpperCase()}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-600">FEATURED</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {content.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-purple-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-purple-600">
                        {content.metrics.roi}
                      </div>
                      <div className="text-xs text-gray-600">ROI</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-green-600">
                        {content.metrics.savings}
                      </div>
                      <div className="text-xs text-gray-600">Savings</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{content.readingTime}</span>
                    </div>
                    <Link
                      href={content.url}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all"
                    >
                      <span>Read Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredContent.map((content) => (
            <div key={content.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {content.type.toUpperCase()}
                  </span>
                  {content.featured && (
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-xs font-medium text-gray-600">FEATURED</span>
                    </div>
                  )}
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h4>
                
                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                  {content.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{content.readingTime}</span>
                  </div>
                  <Link
                    href={content.url}
                    className="inline-flex items-center space-x-1 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ companies achieving extraordinary results with our proven AI strategies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources"
              className="inline-flex items-center space-x-2 bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5" />
              <span>Explore All Resources</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-all"
            >
              <Users className="w-5 h-5" />
              <span>Get Expert Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025UltimateShowcase;