'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
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
=======
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
>>>>>>> 1d697ac31065686f82b356d103821024e5c0d118
  ];

  const contentHighlights = [
    {
      title: 'Enterprise Automation Revolution',
      description: '500% ROI in 60 Days',
      type: 'blog',
<<<<<<< HEAD
      url: '/blog/ai-2025-enterprise-automation-revolution',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
=======
      icon: BookOpen,
      url: '/blog/ai-2025-enterprise-automation-revolution',
      featured: true
>>>>>>> 1d697ac31065686f82b356d103821024e5c0d118
    },
    {
      title: '$50M Annual Savings Case Study',
      description: 'Fortune 500 Success Story',
      type: 'case-study',
<<<<<<< HEAD
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
=======
      icon: FileText,
      url: '/case-studies/ai-transformation-2025-ultimate-success',
      featured: true
    },
    {
      title: 'AI Implementation Master Guide',
      description: 'From Strategy to 500% ROI',
      type: 'resource',
      icon: BarChart3,
      url: '/resources/ai-implementation-master-guide-2025',
      featured: true
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90" />
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Rocket className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-sm font-medium">REVOLUTIONARY 2025 CONTENT</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Proven AI Strategies
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Discover the exact strategies, technologies, and implementation frameworks 
              that are driving 500% ROI for Fortune 500 companies. Real case studies, 
              step-by-step guides, and actionable insights.
            </p>

            {/* Animated Metrics */}
            <div className="mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMetric}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center space-x-4"
                >
                  <metrics[currentMetric].icon className={`w-8 h-8 ${metrics[currentMetric].color}`} />
                  <div>
                    <div className={`text-3xl font-bold ${metrics[currentMetric].color}`}>
                      {metrics[currentMetric].value}
                    </div>
                    <div className="text-blue-200 text-sm">
                      {metrics[currentMetric].label}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-2025-enterprise-automation-revolution"
                className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Read Latest Article
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Get Free Assessment
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Content Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              Featured Content
            </h3>
            
            {contentHighlights.map((content, index) => (
              <motion.div
                key={content.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                    <content.icon className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-white/20 text-white px-2 py-1 rounded text-xs font-semibold mr-2">
                        {content.type.toUpperCase()}
                      </span>
                      {content.featured && (
                        <span className="bg-green-400 text-black px-2 py-1 rounded text-xs font-semibold">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {content.title}
                    </h4>
                    <p className="text-blue-200 text-sm mb-3">
                      {content.description}
                    </p>
                    <Link
                      href={content.url}
                      className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-yellow-400 mb-1">9</div>
                <div className="text-sm text-blue-200">New Articles</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-green-400 mb-1">15K+</div>
                <div className="text-sm text-blue-200">Words of Content</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-white/20"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 text-blue-200">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span>Real ROI data from actual implementations</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span>Step-by-step implementation guides</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span>Expert insights and best practices</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
>>>>>>> 1d697ac31065686f82b356d103821024e5c0d118
  );
};

export default RevolutionaryContentBanner2025;