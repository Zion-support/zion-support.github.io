'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle,
  Star,
  BookOpen,
  FileText,
  Lightbulb,
  Target,
  Zap
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  excerpt: string;
  url: string;
  tags: string[];
  metrics?: {
    roi?: string;
    savings?: string;
    satisfaction?: string;
    projects?: string;
  };
  featured: boolean;
  isNew: boolean;
  readingTime: string;
}

const UltimateContentShowcase2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-enterprise-automation-revolution',
      title: 'AI 2025: The Enterprise Automation Revolution',
      type: 'blog',
      excerpt: 'Discover how AI-powered automation is transforming enterprise operations, delivering unprecedented ROI and operational efficiency in 2025.',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      tags: ['AI', 'Enterprise Automation', 'ROI', '2025'],
      metrics: {
        roi: '340%',
        satisfaction: '98%',
        projects: '500+'
      },
      featured: true,
      isNew: true,
      readingTime: '12 min read'
    },
    {
      id: 'healthcare-ai-transformation',
      title: 'Healthcare AI Transformation: $200M Health System Achieves 300% ROI',
      type: 'case-study',
      excerpt: 'How a major healthcare system leveraged AI automation to improve patient outcomes, reduce costs, and achieve unprecedented operational efficiency.',
      url: '/case-studies/healthcare-ai-transformation-2025-success',
      tags: ['Healthcare', 'AI Transformation', 'ROI', 'Success Story'],
      metrics: {
        roi: '300%',
        savings: '$18.7M',
        satisfaction: '95%'
      },
      featured: true,
      isNew: true,
      readingTime: '15 min read'
    },
    {
      id: 'ai-automation-implementation-guide',
      title: 'AI Automation Implementation Guide 2025: From Strategy to ROI',
      type: 'resource',
      excerpt: 'A comprehensive guide to implementing AI automation in your organization, with proven strategies, best practices, and real-world case studies.',
      url: '/resources/ai-automation-implementation-guide-2025',
      tags: ['Implementation Guide', 'AI Strategy', 'Best Practices', '2025'],
      metrics: {
        roi: '300-500%',
        projects: '500+ Success Stories'
      },
      featured: true,
      isNew: true,
      readingTime: '25 min read'
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '340%', label: 'Average ROI' },
    { icon: Users, value: '500+', label: 'Projects Delivered' },
    { icon: DollarSign, value: '$2.8B', label: 'Client Savings' },
    { icon: CheckCircle, value: '98%', label: 'Success Rate' }
  ];

  const typeIcons = {
    blog: BookOpen,
    'case-study': FileText,
    resource: Lightbulb
  };

  const typeColors = {
    blog: 'bg-blue-100 text-blue-800',
    'case-study': 'bg-green-100 text-green-800',
    resource: 'bg-purple-100 text-purple-800'
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentItems.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-content-showcase-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-showcase-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative overflow-hidden">
      {/* Main Showcase Banner */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <Zap className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Revolutionary AI Content That Drives Results
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
              Discover the latest insights, success stories, and implementation guides 
              that are helping businesses achieve unprecedented ROI with AI automation.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Featured Content Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8"
              >
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${typeColors[currentItem.type]}`}>
                        {React.createElement(typeIcons[currentItem.type], { className: "w-4 h-4 mr-2" })}
                        {currentItem.type.replace('-', ' ').toUpperCase()}
                      </div>
                      {currentItem.isNew && (
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          NEW
                        </span>
                      )}
                      <span className="text-sm opacity-75">{currentItem.readingTime}</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {currentItem.title}
                    </h3>
                    
                    <p className="text-lg opacity-90 mb-6">
                      {currentItem.excerpt}
                    </p>

                    {/* Metrics */}
                    {currentItem.metrics && (
                      <div className="flex flex-wrap gap-4 mb-6">
                        {Object.entries(currentItem.metrics).map(([key, value]) => (
                          <div key={key} className="flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            <span className="text-sm font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {currentItem.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={currentItem.url}
                      className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="w-64 h-64 bg-white bg-opacity-10 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">📊</div>
                        <div className="text-lg font-semibold">Success Metrics</div>
                        <div className="text-sm opacity-75">Real Results</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <div className="flex justify-center mt-6 space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Explore All New Content
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dive deep into the latest AI automation insights, success stories, 
              and implementation strategies that are driving real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${typeColors[item.type]}`}>
                      {React.createElement(typeIcons[item.type], { className: "w-4 h-4 mr-2" })}
                      {item.type.replace('-', ' ').toUpperCase()}
                    </div>
                    {item.isNew && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        NEW
                      </span>
                    )}
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>

                  {/* Metrics */}
                  {item.metrics && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {Object.entries(item.metrics).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-1 text-sm text-gray-600">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.readingTime}</span>
                    <Link
                      href={item.url}
                      className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Link
              href="/resources"
              className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Explore All Resources
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
        aria-label="Dismiss banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default UltimateContentShowcase2025;