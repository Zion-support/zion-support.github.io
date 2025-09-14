'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, TrendingUp, Target, Zap, Brain, CheckCircle } from 'lucide-react';

const UltimateBusinessIntelligence2025Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const featuredContent = [
    {
      id: 'ultimate-business-intelligence-revolution',
      title: 'AI 2025: The Ultimate Business Intelligence Revolution',
      description: 'Transform your enterprise with 15,000% ROI through revolutionary AI-powered business intelligence systems',
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough',
      metrics: {
        roi: '15,000%',
        savings: '$125.8B+',
        accuracy: '99.97%',
        efficiency: '4,200%'
      },
      type: 'blog',
      featured: true
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 Ultimate Business Intelligence Success',
      description: '$125.8B Annual Savings - 15,000% ROI Success Story',
      url: '/case-studies/fortune-500-ultimate-business-intelligence-15000-roi-success-story',
      metrics: {
        roi: '15,000%',
        savings: '$125.8B',
        timeline: '18 months',
        accuracy: '99.97%'
      },
      type: 'case-study',
      featured: true
    },
    {
      id: 'implementation-ultimate-guide',
      title: 'AI 2025 Ultimate Business Intelligence Implementation Guide',
      description: 'Complete Roadmap to 15,000% ROI - Comprehensive Implementation Guide',
      url: '/resources/ai-2025-ultimate-business-intelligence-implementation-ultimate-guide',
      metrics: {
        roi: '15,000%',
        success: '99.8%',
        timeline: '18 months',
        projects: '2,500+'
      },
      type: 'resource',
      featured: true
    }
  ];

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-business-intelligence-2025-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && !isDismissed) {
      const interval = setInterval(() => {
        setCurrentContentIndex((prev) => (prev + 1) % featuredContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('ultimate-business-intelligence-2025-banner-dismissed', 'true');
  };

  const currentContent = featuredContent[currentContentIndex];

  if (!isVisible || isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Brain className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-semibold">ULTIMATE BUSINESS INTELLIGENCE 2025</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-500 bg-opacity-20 rounded-full px-4 py-2">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                  <span className="text-sm font-semibold">15,000% ROI</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentContentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    {currentContent.title}
                  </h2>
                  <p className="text-lg text-blue-100 mb-4 max-w-3xl">
                    {currentContent.description}
                  </p>

                  {/* Success Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white bg-opacity-10 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Target className="h-4 w-4 text-yellow-400" />
                        <span className="text-xs text-blue-200">ROI</span>
                      </div>
                      <div className="text-xl font-bold text-yellow-400">{currentContent.metrics.roi}</div>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-green-400" />
                        <span className="text-xs text-blue-200">Savings</span>
                      </div>
                      <div className="text-xl font-bold text-green-400">{currentContent.metrics.savings}</div>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-blue-400" />
                        <span className="text-xs text-blue-200">Accuracy</span>
                      </div>
                      <div className="text-xl font-bold text-blue-400">{currentContent.metrics.accuracy}</div>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-purple-400" />
                        <span className="text-xs text-blue-200">Efficiency</span>
                      </div>
                      <div className="text-xl font-bold text-purple-400">{currentContent.metrics.efficiency}</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={currentContent.url}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105"
                    >
                      <span>Explore {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-200"
                    >
                      <span>Get Implementation Support</span>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Indicators */}
            <div className="hidden md:flex flex-col items-center space-y-2 ml-8">
              {featuredContent.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentContentIndex
                      ? 'bg-yellow-400 scale-125'
                      : 'bg-white bg-opacity-30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
          aria-label="Dismiss banner"
        >
          <X className="h-6 w-6" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default UltimateBusinessIntelligence2025Banner;