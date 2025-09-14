'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  TrendingUp, 
  Shield, 
  Users, 
  Zap, 
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Target
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  excerpt: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  readingTime: string;
  featured: boolean;
  metrics?: {
    roi?: string;
    savings?: string;
    satisfaction?: string;
    efficiency?: string;
  };
  tags: string[];
}

const contentItems: ContentItem[] = [
  {
    id: 'cybersecurity-revolution',
    title: 'AI 2025: The Cybersecurity Revolution - Ultimate Guide',
    excerpt: 'Discover how AI is revolutionizing cybersecurity in 2025. Learn about advanced threat detection, automated response systems, and how to protect your business from evolving cyber threats.',
    type: 'blog',
    url: '/blog/ai-2025-cybersecurity-revolution-ultimate-guide',
    readingTime: '12 min read',
    featured: true,
    metrics: {
      roi: '340%',
      savings: '$2.8M',
      satisfaction: '98%',
      efficiency: '67%'
    },
    tags: ['AI', 'Cybersecurity', 'Business Protection', 'Threat Detection']
  },
  {
    id: 'healthcare-transformation',
    title: 'AI Healthcare Transformation 2025: 450% ROI Success Story',
    excerpt: 'Discover how a regional hospital system transformed patient care and operational efficiency using AI, achieving 450% ROI and saving $12M annually.',
    type: 'case-study',
    url: '/case-studies/ai-healthcare-transformation-2025-success-story',
    readingTime: '15 min read',
    featured: true,
    metrics: {
      roi: '450%',
      savings: '$12M annually',
      satisfaction: '94%',
      efficiency: '67%'
    },
    tags: ['Case Study', 'Healthcare', 'AI Transformation', 'ROI']
  },
  {
    id: 'implementation-guide',
    title: 'AI Implementation Master Guide 2025: From Strategy to ROI',
    excerpt: 'The ultimate guide to implementing AI in your business. Learn proven strategies, avoid common pitfalls, and achieve measurable ROI with our comprehensive implementation framework.',
    type: 'resource',
    url: '/resources/ai-implementation-master-guide-2025-comprehensive',
    readingTime: '25 min read',
    featured: true,
    metrics: {
      roi: '340%',
      savings: '67% Faster',
      satisfaction: '98%',
      efficiency: '500+ Projects'
    },
    tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Best Practices']
  }
];

const typeIcons = {
  blog: BookOpen,
  'case-study': TrendingUp,
  resource: Target
};

const typeColors = {
  blog: 'bg-blue-100 text-blue-800',
  'case-study': 'bg-green-100 text-green-800',
  resource: 'bg-purple-100 text-purple-800'
};

export default function UltimateContentShowcase2025() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = contentItems[currentIndex];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6"
          >
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">NEW 2025 CONTENT</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Ultimate AI Content Collection
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover our latest insights, success stories, and implementation guides. 
            Join 500+ companies achieving 340% average ROI with AI.
          </motion.p>
        </div>

        {/* Main Content Showcase */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Content Preview */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-4">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${typeColors[currentContent.type]}`}>
                      {React.createElement(typeIcons[currentContent.type], { className: "w-4 h-4 mr-2" })}
                      {currentContent.type.replace('-', ' ').toUpperCase()}
                    </div>
                    <div className="ml-4 flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {currentContent.readingTime}
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {currentContent.title}
                  </h3>

                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {currentContent.excerpt}
                  </p>

                  {/* Metrics */}
                  {currentContent.metrics && (
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          {currentContent.metrics.roi}
                        </div>
                        <div className="text-sm text-green-700">Average ROI</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          {currentContent.metrics.savings}
                        </div>
                        <div className="text-sm text-blue-700">Cost Savings</div>
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentContent.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={currentContent.url}
                    className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                  >
                    Read Full Article
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>

                {/* Visual Element */}
                <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="mb-6"
                    >
                      <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        {React.createElement(typeIcons[currentContent.type], { 
                          className: "w-12 h-12 text-white" 
                        })}
                      </div>
                      <h4 className="text-2xl font-bold mb-2">Featured Content</h4>
                      <p className="text-purple-100">
                        {currentContent.type === 'blog' && 'Latest AI Insights'}
                        {currentContent.type === 'case-study' && 'Real Success Stories'}
                        {currentContent.type === 'resource' && 'Implementation Guides'}
                      </p>
                    </motion.div>

                    {/* Success Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                        <div className="text-3xl font-bold">500+</div>
                        <div className="text-sm text-purple-100">Success Stories</div>
                      </div>
                      <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                        <div className="text-3xl font-bold">340%</div>
                        <div className="text-sm text-purple-100">Average ROI</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-purple-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Content Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Explore All Content
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${typeColors[item.type]}`}>
                      {React.createElement(typeIcons[item.type], { className: "w-3 h-3 mr-1" })}
                      {item.type.replace('-', ' ').toUpperCase()}
                    </div>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {item.readingTime}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>

                  {item.metrics && (
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">
                          {item.metrics.roi}
                        </div>
                        <div className="text-xs text-gray-500">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">
                          {item.metrics.savings}
                        </div>
                        <div className="text-xs text-gray-500">Savings</div>
                      </div>
                    </div>
                  )}

                  <Link
                    href={item.url}
                    className="inline-flex items-center text-purple-600 font-semibold text-sm hover:text-purple-800 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Join 500+ companies achieving 340% average ROI with our AI solutions. 
              Get your free AI readiness assessment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Assessment
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}