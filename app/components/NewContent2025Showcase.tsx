'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Clock, Star, CheckCircle } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  excerpt: string;
  url: string;
  featured: boolean;
  metrics?: {
    roi?: string;
    savings?: string;
    improvement?: string;
    satisfaction?: string;
    timeframe?: string;
  };
  isNew?: boolean;
  tags: string[];
}

const NewContent2025Showcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const newContent: ContentItem[] = [
    {
      id: 'cybersecurity-revolution',
      title: 'AI 2025: The Cybersecurity Revolution',
      description: 'Discover how AI-powered cybersecurity solutions are reducing threats by 95% and saving companies $2.3M on average.',
      url: '/blog/ai-2025-cybersecurity-revolution',
      type: 'blog',
      metrics: {
        improvement: '95% threat reduction',
        savings: '$2.3M average savings',
        satisfaction: '89% false positive reduction'
      },
      isNew: true,
      featured: true
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation: 450% ROI Success',
      description: 'How a regional hospital system achieved 450% ROI, $12.8M savings, and 60% reduction in patient wait times.',
      url: '/case-studies/healthcare-ai-transformation-2025',
      type: 'case-study',
      metrics: {
        roi: '450% ROI',
        savings: '$12.8M annually',
        improvement: '60% wait time reduction'
      },
      isNew: true,
      featured: true
    },
    {
      id: 'implementation-checklist',
      title: 'AI Implementation Checklist 2025',
      description: 'Complete step-by-step guide for successful AI deployment with 95% success rate and 340% average ROI.',
      url: '/resources/ai-implementation-checklist-2025',
      type: 'resource',
      metrics: {
        improvement: '95% success rate',
        roi: '340% average ROI',
        satisfaction: '89% user adoption'
      },
      isNew: true,
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [newContent.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025Showcase_dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025Showcase_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = newContent[currentIndex];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📋';
      default: return '📄';
    }
  };
=======
  const contentItems: ContentItem[] = [
    {
      id: 'ai-2025-enterprise-automation',
      title: 'AI 2025: Enterprise Automation Breakthrough - 340% ROI in 90 Days',
      type: 'blog',
      excerpt: 'Discover how Fortune 500 companies are achieving unprecedented ROI through AI automation. Real case studies showing 340% average ROI increase in just 90 days.',
      url: '/blog/ai-2025-enterprise-automation-breakthrough',
      featured: true,
      metrics: {
        roi: '340%',
        savings: '$180M',
        timeframe: '90 Days'
      },
      tags: ['AI', 'Enterprise Automation', 'ROI', 'Business Transformation']
    },
    {
      id: 'fortune-500-case-study',
      title: 'Fortune 500 AI Transformation: 340% ROI in 90 Days - Complete Case Study',
      type: 'case-study',
      excerpt: 'How a Fortune 500 manufacturing company achieved 340% ROI in 90 days through comprehensive AI automation. Real numbers, real results, real transformation.',
      url: '/case-studies/fortune-500-ai-transformation-340-percent-roi',
      featured: true,
      metrics: {
        roi: '340%',
        savings: '$180M',
        timeframe: '90 Days'
      },
      tags: ['Case Study', 'AI Transformation', 'ROI', 'Manufacturing']
    },
    {
      id: 'ai-roi-calculator-guide',
      title: 'AI Implementation ROI Calculator Guide 2025: Maximize Your Investment Returns',
      type: 'resource',
      excerpt: 'Complete guide to calculating ROI for AI implementations. Includes interactive calculator, real case studies, and proven methodologies for maximizing your AI investment returns.',
      url: '/resources/ai-implementation-roi-calculator-guide-2025',
      featured: true,
      metrics: {
        roi: '200-500%',
        savings: '15-30%',
        timeframe: '3-9 Months'
      },
      tags: ['ROI Calculator', 'AI Implementation', 'Business Planning', 'Guide']
    }
  ];

  const stats = [
    { label: 'New Content Pieces', value: '3', icon: TrendingUp },
    { label: 'Average ROI', value: '340%', icon: Star },
    { label: 'Client Success Stories', value: '500+', icon: Users },
    { label: 'Implementation Time', value: '90 Days', icon: Clock }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length]);
>>>>>>> main

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-b border-indigo-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-semibold">✨ NEW CONTENT 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest AI Insights & Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our newest content featuring real-world AI transformations, 
            implementation guides, and success stories with proven ROI.
          </p>
        </div>

        {/* Main Content Showcase */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            {/* Content Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{getTypeIcon(currentContent.type)}</span>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(currentContent.type)}`}>
                      {currentContent.type === 'case-study' ? 'Case Study' : 
                       currentContent.type === 'resource' ? 'Resource Guide' : 'Blog Post'}
                    </span>
                    {currentContent.isNew && (
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {currentContent.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={handleDismiss}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Dismiss showcase"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content Description */}
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {Object.entries(currentContent.metrics).map(([key, value], index) => (
                <div key={key} className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">{value}</div>
                  <div className="text-sm text-gray-600 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Read Full Article
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/content"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200"
              >
                View All Content
              </Link>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="bg-gray-50 px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {newContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex 
                        ? 'bg-indigo-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to content ${index + 1}`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500">
                {currentIndex + 1} of {newContent.length}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content Preview */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {newContent.map((content, index) => (
            <div
              key={content.id}
              className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-200 hover:shadow-xl ${
                index === currentIndex ? 'ring-2 ring-indigo-500' : 'hover:ring-1 hover:ring-indigo-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">{getTypeIcon(content.type)}</span>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(content.type)}`}>
                    {content.type === 'case-study' ? 'Case Study' : 
                     content.type === 'resource' ? 'Resource' : 'Blog'}
                  </span>
                  {content.isNew && (
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                      NEW
                    </span>
                  )}
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                {content.title}
              </h4>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {content.description}
              </p>
              <div className="text-xs text-indigo-600 font-medium">
                Read More →
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Stay updated with the latest AI insights and success stories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/newsletter"
              className="inline-flex items-center px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200"
            >
              Subscribe to Newsletter
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
            >
              Get AI Consultation
            </Link>
          </div>
        </div>
=======
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proven AI Success Stories & ROI Guides
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real case studies, implementation guides, and ROI calculators based on 500+ successful AI transformations
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <stat.icon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Content Showcase */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {contentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                  index === currentIndex ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {/* Content Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{getTypeIcon(item.type)}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                        {item.type.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    {item.featured && (
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-xs font-medium">Featured</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>

                  {/* Metrics */}
                  {item.metrics && (
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="text-center p-2 bg-green-50 rounded-lg">
                        <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                        <div className="text-xs text-green-700">ROI</div>
                      </div>
                      <div className="text-center p-2 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                        <div className="text-xs text-blue-700">Savings</div>
                      </div>
                      <div className="text-center p-2 bg-purple-50 rounded-lg">
                        <div className="text-lg font-bold text-purple-600">{item.metrics.timeframe}</div>
                        <div className="text-xs text-purple-700">Timeline</div>
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Footer */}
                <div className="p-6 bg-gray-50">
                  <Link
                    href={item.url}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-gray-600 mb-6">
              Get your free AI ROI assessment and discover how your organization can achieve 340% ROI in 90 days
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                Get Free Assessment
                <CheckCircle className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
>>>>>>> main
      </div>
    </div>
  );
};

export default NewContent2025Showcase;