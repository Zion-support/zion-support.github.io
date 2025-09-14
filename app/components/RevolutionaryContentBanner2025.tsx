'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Users, 
  DollarSign, 
  Star,
  CheckCircle,
  Zap,
  Target,
  Award,
  BookOpen,
  FileText,
  BarChart3,
  Rocket
} from 'lucide-react';

const RevolutionaryContentBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { value: '500%', label: 'Average ROI', icon: TrendingUp, color: 'text-green-400' },
    { value: '$2.8B+', label: 'Total Savings', icon: DollarSign, color: 'text-yellow-400' },
    { value: '98%', label: 'Success Rate', icon: Star, color: 'text-blue-400' },
    { value: '60 Days', label: 'Time to Value', icon: Clock, color: 'text-purple-400' }
  ];

  const contentHighlights = [
    {
      title: 'Enterprise Automation Revolution',
      description: '500% ROI in 60 Days',
      type: 'blog',
      icon: BookOpen,
      url: '/blog/ai-2025-enterprise-automation-revolution',
      featured: true
    },
    {
      title: '$50M Annual Savings Case Study',
      description: 'Fortune 500 Success Story',
      type: 'case-study',
      icon: Award,
      url: '/case-studies/ai-transformation-2025-ultimate-success',
      featured: true
    },
    {
      title: 'AI Implementation Master Guide',
      description: 'Complete Strategy to ROI',
      type: 'resource',
      icon: Target,
      url: '/resources/ai-implementation-2025-master-guide',
      featured: true
    }
  ];

  const dismissBanner = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2025-banner-dismissed', 'true');
  };

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-32 w-24 h-24 bg-indigo-500 rounded-full opacity-25 animate-pulse"></div>
          <div className="absolute bottom-32 right-10 w-12 h-12 bg-purple-400 rounded-full opacity-40 animate-bounce"></div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <span className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm font-medium">
                  🚀 REVOLUTIONARY CONTENT 2025
                </span>
                <span className="text-sm opacity-75">New Content Available</span>
              </div>

              <div className="space-y-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold">
                  AI 2025: The Ultimate Business Transformation
                </h2>
                <p className="text-lg opacity-90">
                  Discover the breakthrough content that's helping companies achieve 500% ROI
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-green-300">
                    ✅ {metrics[currentMetric].value} {metrics[currentMetric].label}
                  </span>
                  <div className="flex space-x-1">
                    {metrics.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentMetric ? 'bg-white' : 'bg-white opacity-30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/blog/ai-2025-enterprise-automation-revolution"
                  className="inline-flex items-center bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <span className="mr-2">📖</span>
                  Explore Content
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
                >
                  Get Expert Consultation
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8 ml-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">500%</div>
                <div className="text-sm opacity-75">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">$2.8B+</div>
                <div className="text-sm opacity-75">Total Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">98%</div>
                <div className="text-sm opacity-75">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dismiss button */}
        <button
          onClick={dismissBanner}
          className="absolute top-4 right-4 text-white opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20">
        <div 
          className="h-full bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-2000 ease-linear"
          style={{ 
            width: `${((currentMetric + 1) / metrics.length) * 100}%` 
          }}
        />
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;