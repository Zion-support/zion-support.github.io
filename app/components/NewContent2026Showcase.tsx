'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Star, TrendingUp, Users, Award, BookOpen, FileText, Lightbulb } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  excerpt: string;
  url: string;
  featured: boolean;
  metrics: {
    roi?: string;
    satisfaction?: string;
    savings?: string;
    impact?: string;
  };
  tags: string[];
  readTime: string;
}

const NewContent2026Showcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-2026-enterprise-automation',
      title: 'AI 2026: The Enterprise Automation Breakthrough',
      type: 'blog',
      excerpt: 'Discover how AI-powered enterprise automation is delivering 340% ROI and transforming business operations in 2026.',
      url: '/blog/ai-2026-enterprise-automation-breakthrough',
      featured: true,
      metrics: {
        roi: '340%',
        satisfaction: '98%',
        savings: '$2.8B',
        impact: '500+ Projects'
      },
      tags: ['AI', 'Enterprise Automation', 'ROI', '2026'],
      readTime: '8 min read'
    },
    {
      id: 'retail-ai-transformation',
      title: 'Retail AI Transformation: 400% ROI Success Story',
      type: 'case-study',
      excerpt: 'How a $50M retail company achieved 400% ROI and $20M additional revenue through comprehensive AI transformation.',
      url: '/case-studies/retail-ai-transformation-2026-success',
      featured: true,
      metrics: {
        roi: '400%',
        satisfaction: '89%',
        savings: '$20M',
        impact: '67% Cost Reduction'
      },
      tags: ['Case Study', 'Retail', 'AI Transformation', 'Success'],
      readTime: '12 min read'
    },
    {
      id: 'ai-implementation-guide',
      title: 'AI Implementation Master Guide 2026',
      type: 'resource',
      excerpt: 'The complete guide to implementing AI in your organization. Step-by-step strategies and ROI frameworks for guaranteed success.',
      url: '/resources/ai-implementation-master-guide-2026',
      featured: true,
      metrics: {
        roi: '340%',
        satisfaction: '98%',
        savings: '67% Faster',
        impact: '500+ Success Stories'
      },
      tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Best Practices'],
      readTime: '25 min read'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-5 h-5" />;
      case 'case-study':
        return <FileText className="w-5 h-5" />;
      case 'resource':
        return <Lightbulb className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  if (!isVisible) return null;

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform rotate-12 scale-150"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4"
          >
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">NEW 2026 CONTENT</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Proven AI Success Stories
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Real results from real companies. Learn how organizations are achieving 340%+ ROI with our AI solutions.
          </motion.p>
        </div>

        {/* Main Content Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Card */}
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden"
          >
            {/* Content Type Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(currentItem.type)}`}>
                {getTypeIcon(currentItem.type)}
                <span className="ml-2 capitalize">{currentItem.type.replace('-', ' ')}</span>
              </div>
              <div className="text-sm text-gray-500">{currentItem.readTime}</div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
              {currentItem.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {currentItem.excerpt}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {Object.entries(currentItem.metrics).map(([key, value]) => (
                <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-gray-900">{value}</div>
                  <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {currentItem.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href={currentItem.url}
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Read Full Article
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>

          {/* Stats and Features */}
          <div className="space-y-8">
            {/* Key Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4">Proven Results</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">340%</div>
                  <div className="text-sm text-gray-600">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">67%</div>
                  <div className="text-sm text-gray-600">Faster Implementation</div>
                </div>
              </div>
            </motion.div>

            {/* Content Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4">Featured Content</h4>
              <div className="space-y-3">
                {contentItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                      index === currentIndex
                        ? 'bg-purple-100 border-2 border-purple-300'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {getTypeIcon(item.type)}
                        <span className="ml-2 text-sm font-medium text-gray-900 truncate">
                          {item.title}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">{item.readTime}</div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white"
            >
              <h4 className="text-xl font-bold mb-2">Ready to Achieve Similar Results?</h4>
              <p className="text-purple-100 mb-4">
                Get a personalized AI strategy consultation and discover how we can help your organization achieve 340%+ ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-purple-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Dismiss showcase"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewContent2026Showcase;