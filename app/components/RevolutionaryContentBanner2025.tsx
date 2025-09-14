'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  Sparkles,
  Zap,
  Target,
  Award
} from 'lucide-react';

const RevolutionaryContentBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentMetric, setCurrentMetric] = useState(0);

  const metrics = [
    { value: '500%', label: 'Average ROI', icon: TrendingUp, color: 'text-green-400' },
    { value: '$2.8B', label: 'Total Savings', icon: Star, color: 'text-yellow-400' },
    { value: '98%', label: 'Success Rate', icon: CheckCircle, color: 'text-blue-400' },
    { value: '500+', label: 'Companies', icon: Users, color: 'text-purple-400' }
  ];

  const contentHighlights = [
    {
      title: 'Enterprise Automation Revolution',
      description: '500% ROI in 60 Days',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: '$50M Annual Savings Case Study',
      description: 'Fortune 500 Success Story',
      type: 'case-study',
      url: '/case-studies/ai-transformation-2025-ultimate-success',
      icon: Award,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AI Implementation Master Guide',
      description: 'Complete Strategy to ROI',
      type: 'resource',
      url: '/resources/ai-implementation-2025-master-guide',
      icon: Target,
      color: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionaryContentBanner2025_dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionaryContentBanner2025_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-800/30 to-purple-800/30 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-yellow-400" />
                  <span className="font-bold text-sm">REVOLUTIONARY 2025 CONTENT</span>
                </div>
                <div className="hidden sm:flex items-center space-x-4 text-xs">
                  <span className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-400" />
                    <span>Featured</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <TrendingUp className="h-3 w-3 text-green-400" />
                    <span>Proven Results</span>
                  </span>
                </div>
              </div>
              <button
                onClick={handleDismiss}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Dismiss banner"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Hero Content */}
            <div className="lg:col-span-1 space-y-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Transform Your Business with AI
                </h2>
                <p className="text-indigo-100 text-sm mb-4">
                  Discover the latest insights, case studies, and implementation guides that are revolutionizing business operations worldwide.
                </p>
              </div>

              {/* Animated Metric */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${metrics[currentMetric].color.replace('text-', 'from-').replace('-400', '-500')} to-${metrics[currentMetric].color.replace('text-', '').replace('-400', '-600')}`}>
                    <metrics[currentMetric].icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${metrics[currentMetric].color}`}>
                      {metrics[currentMetric].value}
                    </div>
                    <div className="text-xs text-indigo-200">
                      {metrics[currentMetric].label}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 inline-flex items-center justify-center space-x-2"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white/30 text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Right: Content Highlights */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {contentHighlights.map((content, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all duration-200 group"
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${content.color}`}>
                        <content.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium">
                            {content.type.toUpperCase()}
                          </span>
                        </div>
                        <h3 className="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-yellow-300 transition-colors">
                          {content.title}
                        </h3>
                        <p className="text-indigo-200 text-xs mb-3 line-clamp-2">
                          {content.description}
                        </p>
                        <Link
                          href={content.url}
                          className="inline-flex items-center space-x-1 text-yellow-400 hover:text-yellow-300 text-xs font-medium transition-colors"
                        >
                          <span>Read More</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Stats */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`text-lg font-bold ${metric.color}`}>
                      {metric.value}
                    </div>
                    <div className="text-xs text-indigo-200">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-gradient-to-r from-indigo-800/20 to-purple-800/20 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
              <div className="text-center sm:text-left">
                <div className="text-sm font-medium text-white">
                  🚀 New content added weekly • Latest AI insights • Proven business results
                </div>
                <div className="text-xs text-indigo-200">
                  Join 500+ companies transforming their business with AI
                </div>
              </div>
              <div className="flex space-x-6">
                <Link
                  href="/blog"
                  className="text-xs text-indigo-200 hover:text-white transition-colors"
                >
                  Blog Posts
                </Link>
                <Link
                  href="/case-studies"
                  className="text-xs text-indigo-200 hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
                <Link
                  href="/resources"
                  className="text-xs text-indigo-200 hover:text-white transition-colors"
                >
                  Resources
                </Link>
                <Link
                  href="/contact"
                  className="text-xs text-indigo-200 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;