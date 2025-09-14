'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Clock,
  BookOpen,
  CaseStudy,
  FileText,
  Sparkles
} from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // New content data
  const newContent = [
    {
      id: 'enterprise-automation-revolution',
      type: 'blog',
      title: 'AI 2025: The Enterprise Automation Revolution - 500% ROI in 60 Days',
      description: 'Discover how Fortune 500 companies are achieving unprecedented ROI through AI automation. Real case studies, implementation strategies, and actionable insights.',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      readingTime: '12 min read',
      tags: ['AI', 'Enterprise Automation', 'ROI', 'Business Transformation'],
      metrics: {
        roi: '500%',
        timeframe: '60 Days',
        companies: '500+',
        savings: '$2.8B'
      },
      icon: TrendingUp,
      color: 'from-purple-600 to-blue-600'
    },
    {
      id: 'ai-transformation-ultimate-success',
      type: 'case-study',
      title: 'AI Transformation 2025: $50M Annual Savings in 6 Months - Ultimate Success Story',
      description: 'Complete case study revealing how a Fortune 500 company achieved $50M in annual savings through strategic AI implementation.',
      url: '/case-studies/ai-transformation-2025-ultimate-success',
      readingTime: '15 min read',
      tags: ['Case Study', 'AI Transformation', 'Fortune 500', 'Cost Savings'],
      metrics: {
        savings: '$50M',
        timeframe: '6 Months',
        roi: '1,200%',
        processes: '89%'
      },
      icon: CaseStudy,
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 'ai-implementation-2025-master-guide',
      type: 'resource',
      title: 'AI Implementation Master Guide 2025: From Strategy to 500% ROI',
      description: 'Complete step-by-step guide to implementing AI in your organization. Proven frameworks, technology selection, and ROI optimization strategies.',
      url: '/resources/ai-implementation-2025-master-guide',
      readingTime: '20 min read',
      tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Best Practices'],
      metrics: {
        roi: '500%',
        success: '98%',
        companies: '500+',
        savings: '$2.8B'
      },
      icon: BookOpen,
      color: 'from-orange-600 to-red-600'
    }
  ];

  const stats = [
    { label: 'Total Content Pieces', value: '9', icon: FileText },
    { label: 'Average ROI', value: '340%', icon: TrendingUp },
    { label: 'Client Success Rate', value: '98%', icon: CheckCircle },
    { label: 'Total Client Savings', value: '$2.8B', icon: Star }
  ];

  // Auto-rotate content
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimateContentShowcase2025_dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimateContentShowcase2025_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = newContent[currentSlide];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-800/20 to-blue-800/20 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-6 w-6 text-yellow-400" />
                  <span className="text-lg font-bold">NEW 2025 CONTENT</span>
                </div>
                <div className="hidden sm:flex items-center space-x-4 text-sm">
                  <span className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>Featured Content</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4 text-green-400" />
                    <span>500% ROI Guaranteed</span>
                  </span>
                </div>
              </div>
              <button
                onClick={handleDismiss}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Dismiss banner"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Showcase */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Revolutionary AI Content for 2025
                </h2>
                <p className="text-xl text-blue-100 mb-6">
                  Discover the latest insights, case studies, and implementation guides that are transforming businesses worldwide.
                </p>
              </div>

              {/* Featured Content Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${currentContent.color}`}>
                      <currentContent.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium">
                          {currentContent.type.toUpperCase()}
                        </span>
                        <span className="flex items-center space-x-1 text-sm text-blue-200">
                          <Clock className="h-4 w-4" />
                          <span>{currentContent.readingTime}</span>
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                        {currentContent.title}
                      </h3>
                      <p className="text-blue-100 text-sm mb-4 line-clamp-2">
                        {currentContent.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {currentContent.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-white/10 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <Link
                          href={currentContent.url}
                          className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
                        >
                          <span>Read More</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="text-green-400 font-semibold">
                            {currentContent.metrics.roi} ROI
                          </span>
                          <span className="text-blue-200">
                            {currentContent.metrics.timeframe || currentContent.metrics.savings}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Content Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {newContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + newContent.length) % newContent.length)}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    aria-label="Previous content"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % newContent.length)}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    aria-label="Next content"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Stats and CTA */}
            <div className="space-y-6">
              {/* Success Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20"
                  >
                    <stat.icon className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-yellow-100 mb-4">
                  Get started with our proven AI implementation framework and join 500+ successful companies.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
                  >
                    <span>Get Free Consultation</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
                  >
                    View All Services
                  </Link>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center space-x-4 text-sm text-blue-200">
                  <span className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>98% Success Rate</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-blue-400" />
                    <span>500+ Companies</span>
                  </span>
                </div>
                <div className="text-xs text-blue-300">
                  Trusted by Fortune 500 companies worldwide
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
              <div className="text-center sm:text-left">
                <div className="text-sm font-medium text-white">
                  🚀 New content added weekly • Latest insights • Proven results
                </div>
                <div className="text-xs text-blue-200">
                  Stay ahead with our cutting-edge AI content and case studies
                </div>
              </div>
              <div className="flex space-x-4">
                <Link
                  href="/blog"
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  View All Blog Posts
                </Link>
                <Link
                  href="/case-studies"
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
                <Link
                  href="/resources"
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UltimateContentShowcase2025;