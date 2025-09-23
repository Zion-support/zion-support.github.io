'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Users, TrendingUp, Award, BookOpen, FileText, BarChart3, Star, Zap, ArrowRight } from 'lucide-react';

const NewContentShowcase2025Advanced = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'advanced-automation-mastery',
      type: 'blog',
      title: 'AI 2025: Advanced Automation Enterprise Mastery - 750% ROI Breakthrough',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 750% ROI through advanced AI automation. Complete implementation guide with real-world case studies.',
      url: '/blog/ai-2025-advanced-automation-enterprise-mastery',
      readingTime: '22 min read',
      category: 'ai-automation',
      featured: true,
      metrics: {
        roi: '750%',
        savings: '$3.2B',
        efficiency: '340%',
        satisfaction: '94%'
      },
      tags: ['AI Automation', 'Enterprise', 'ROI', 'Fortune 500'],
      icon: Zap,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'fortune-500-transformation',
      type: 'case-study',
      title: 'Fortune 500 AI Automation Transformation: $3.2B Annual Savings with 850% ROI',
      description: 'Complete case study of how a Fortune 100 manufacturing giant achieved $3.2 billion in annual savings through comprehensive AI automation transformation.',
      url: '/case-studies/fortune-500-ai-automation-transformation-2025',
      readingTime: '25 min read',
      category: 'case-studies',
      featured: true,
      metrics: {
        roi: '850%',
        savings: '$3.2B',
        efficiency: '340%',
        satisfaction: '94%'
      },
      tags: ['Case Study', 'Fortune 500', 'Manufacturing', 'ROI'],
      icon: Award,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'implementation-master-guide',
      type: 'resource',
      title: 'AI Automation Implementation Master Guide 2025: From Strategy to 850% ROI',
      description: 'Complete step-by-step guide for implementing AI automation in your enterprise. Includes proven frameworks, best practices, and real-world strategies.',
      url: '/resources/ai-automation-implementation-master-guide-2025',
      readingTime: '35 min read',
      category: 'resources',
      featured: true,
      metrics: {
        roi: '850%',
        success: '98%',
        timeframe: '18 months',
        payback: '2.1 months'
      },
      tags: ['Implementation Guide', 'Strategy', 'Best Practices', 'ROI'],
      icon: BookOpen,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'edge-computing-revolution',
      type: 'blog',
      title: 'AI 2025: The Edge Computing Revolution - Ultimate Enterprise Guide',
      description: 'Comprehensive guide to edge computing implementation for enterprise AI. Achieve 500% ROI with real-time processing and reduced latency.',
      url: '/blog/ai-2025-edge-computing-revolution-ultimate-guide',
      readingTime: '18 min read',
      category: 'ai-automation',
      featured: false,
      metrics: {
        roi: '500%',
        savings: '$4.5M',
        latency: '90%',
        efficiency: '95%'
      },
      tags: ['Edge Computing', 'AI', 'Enterprise', 'ROI'],
      icon: TrendingUp,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 'blockchain-integration',
      type: 'blog',
      title: 'AI 2025: Blockchain Integration Revolution - Enterprise Implementation Guide',
      description: 'Learn how to integrate blockchain technology with AI automation for enhanced security, transparency, and 600% ROI.',
      url: '/blog/ai-2025-blockchain-integration-enterprise-guide',
      readingTime: '20 min read',
      category: 'ai-automation',
      featured: false,
      metrics: {
        roi: '600%',
        savings: '$6.8M',
        security: '99.9%',
        efficiency: '89%'
      },
      tags: ['Blockchain', 'AI', 'Security', 'ROI'],
      icon: BarChart3,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'iot-revolution',
      type: 'blog',
      title: 'AI 2025: IoT Revolution - Smart Enterprise Implementation Guide',
      description: 'Transform your enterprise with AI-powered IoT solutions. Achieve 700% ROI through smart automation and real-time intelligence.',
      url: '/blog/ai-2025-iot-revolution-smart-enterprise-guide',
      readingTime: '19 min read',
      category: 'ai-automation',
      featured: false,
      metrics: {
        roi: '700%',
        savings: '$8.2M',
        efficiency: '95%',
        automation: '85%'
      },
      tags: ['IoT', 'AI', 'Smart Enterprise', 'ROI'],
      icon: Users,
      gradient: 'from-teal-500 to-blue-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'ai-automation', name: 'AI Automation', count: content.filter(c => c.category === 'ai-automation').length },
    { id: 'case-studies', name: 'Case Studies', count: content.filter(c => c.category === 'case-studies').length },
    { id: 'resources', name: 'Resources', count: content.filter(c => c.category === 'resources').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  const featuredContent = content.filter(item => item.featured);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            NEW 2025 ADVANCED CONTENT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Automation Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI automation strategies, proven case studies, and comprehensive implementation guides that have delivered extraordinary results for Fortune 500 companies.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredContent.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
                  
                  <div className="p-6">
                    {/* Icon and Type */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} text-white`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {item.readingTime}
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {Object.entries(item.metrics).map(([key, value]) => (
                        <div key={key} className="text-center bg-gray-50 rounded-lg p-2">
                          <div className="text-lg font-bold text-purple-600">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={item.url}
                      className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors group-hover:translate-x-1 transform duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient} text-white`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readingTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {Object.entries(item.metrics).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="text-center bg-gray-50 rounded-lg p-2">
                        <div className="text-sm font-bold text-purple-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={item.url}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors group-hover:translate-x-1 transform duration-300"
                  >
                    {item.type === 'resource' ? 'Download' : 'Read More'}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Enterprise?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join 500+ enterprises already achieving extraordinary results with AI automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2025Advanced;