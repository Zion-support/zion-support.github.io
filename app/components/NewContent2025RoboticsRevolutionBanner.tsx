'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, TrendingUp, Zap, Shield, ArrowRight } from 'lucide-react';

const NewContent2025RoboticsRevolutionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const roboticsContent = [
    {
      id: 'robotics-revolution-guide',
      title: 'AI 2025: The Advanced Robotics Revolution - Ultimate Enterprise Guide',
      type: 'Blog Post',
      url: '/blog/ai-2025-advanced-robotics-revolution-ultimate-guide',
      metrics: {
        roi: '800%',
        savings: '$5.2B',
        efficiency: '95%',
        quality: '99.7%'
      },
      description: 'Transform manufacturing, healthcare, and service industries with AI-powered robotics achieving 800% ROI',
      readingTime: '18 min read',
      tags: ['AI Robotics', 'Manufacturing', 'ROI', 'Enterprise']
    },
    {
      id: 'fortune-500-robotics-success',
      title: 'Fortune 500 Robotics Transformation: $5.2B Annual Savings with 800% ROI',
      type: 'Case Study',
      url: '/case-studies/fortune-500-robotics-transformation-800-roi-success',
      metrics: {
        roi: '800%',
        savings: '$5.2B',
        efficiency: '95%',
        quality: '99.7%'
      },
      description: 'How a global manufacturing giant revolutionized operations with AI-powered robotics',
      readingTime: '15 min read',
      tags: ['Case Study', 'Fortune 500', 'Manufacturing', 'Success Story']
    },
    {
      id: 'robotics-implementation-guide',
      title: 'AI Robotics Implementation Master Guide 2025: From Strategy to 800% ROI',
      type: 'Resource',
      url: '/resources/ai-robotics-implementation-master-guide-2025',
      metrics: {
        roi: '800%',
        success: '98%',
        timeline: '18 months',
        projects: '200+'
      },
      description: 'Complete framework for transforming your business with AI-powered robotics',
      readingTime: '35 min read',
      tags: ['Implementation Guide', 'Strategy', 'ROI', 'Framework']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % roboticsContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('robotics-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('robotics-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = roboticsContent[currentSlide];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-semibold">NEW: AI ROBOTICS REVOLUTION 2025</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2 bg-green-500 bg-opacity-20 rounded-full px-3 py-1">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-xs font-medium">800% ROI ACHIEVED</span>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white hover:text-gray-300 transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  The AI Robotics Revolution is Here
                </h2>
                <p className="text-xl text-blue-100 mb-6">
                  Transform your business with AI-powered robotics achieving <span className="text-yellow-400 font-bold">800% ROI</span> and <span className="text-green-400 font-bold">$5.2B in annual savings</span>
                </p>
              </div>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <ArrowRight className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm font-medium">Average ROI</span>
                  </div>
                  <div className="text-2xl font-bold text-yellow-400">800%</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-medium">Annual Savings</span>
                  </div>
                  <div className="text-2xl font-bold text-green-400">$5.2B</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-medium">Efficiency</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">95%</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-5 h-5 text-purple-400" />
                    <span className="text-sm font-medium">Quality</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-400">99.7%</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/blog/ai-2025-advanced-robotics-revolution-ultimate-guide"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Read Ultimate Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/case-studies/fortune-500-robotics-transformation-800-roi-success"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <span>View Success Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Content Showcase */}
            <div className="relative">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-blue-200">Featured Content</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-semibold">
                        {currentContent.type}
                      </span>
                      <span className="text-xs text-blue-200">
                        {currentContent.readingTime}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {currentContent.title}
                    </h3>
                    
                    <p className="text-sm text-blue-100 mb-4">
                      {currentContent.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-white bg-opacity-20 rounded p-2 text-center">
                        <div className="text-xs text-blue-200">ROI</div>
                        <div className="text-sm font-bold text-yellow-400">
                          {currentContent.metrics.roi}
                        </div>
                      </div>
                      <div className="bg-white bg-opacity-20 rounded p-2 text-center">
                        <div className="text-xs text-blue-200">Savings</div>
                        <div className="text-sm font-bold text-green-400">
                          {currentContent.metrics.savings}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {currentContent.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-white bg-opacity-20 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={currentContent.url}
                      className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </motion.div>
                </AnimatePresence>

                {/* Slide Indicators */}
                <div className="flex justify-center space-x-2 mt-4">
                  {roboticsContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-yellow-400' : 'bg-white bg-opacity-30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-8 pt-6 border-t border-white border-opacity-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-400">200+</div>
                <div className="text-sm text-blue-200">Successful Implementations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">$5.2B</div>
                <div className="text-sm text-blue-200">Total Cost Savings</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">95%</div>
                <div className="text-sm text-blue-200">Efficiency Improvement</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">99.7%</div>
                <div className="text-sm text-blue-200">Quality Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContent2025RoboticsRevolutionBanner;