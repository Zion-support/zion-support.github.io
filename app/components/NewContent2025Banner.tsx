'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Star, TrendingUp, Users, Award, Zap, Target, CheckCircle, BookOpen, FileText, BarChart3 } from 'lucide-react';

const NewContent2025Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentMetric, setCurrentMetric] = useState(0);

  const contentItems = [
    {
      title: 'Machine Learning Revolution',
      description: '500%+ ROI with AI-powered ML solutions',
      type: 'Blog Post',
      icon: BookOpen,
      url: '/blog/ai-2025-machine-learning-revolution-enterprise-success',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cloud Computing Revolution',
      description: '400%+ ROI with intelligent cloud strategies',
      type: 'Ultimate Guide',
      icon: FileText,
      url: '/blog/ai-2025-cloud-computing-revolution-ultimate-guide',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Enterprise Success Story',
      description: '$2.8B ROI achievement case study',
      type: 'Case Study',
      icon: BarChart3,
      url: '/case-studies/ai-transformation-2025-ultimate-success-story-enterprise',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const metrics = [
    { value: '500%+', label: 'Average ROI', icon: TrendingUp },
    { value: '$2.8B', label: 'Total Savings', icon: Target },
    { value: '500+', label: 'Success Stories', icon: Award },
    { value: '98%', label: 'Client Satisfaction', icon: Star }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [metrics.length]);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4"
            >
              <Zap className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Revolutionary AI Content
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl opacity-90 mb-6 leading-relaxed"
            >
              Discover our latest AI transformation content featuring real success stories, 
              comprehensive guides, and proven strategies delivering 500%+ ROI.
            </motion.p>

            {/* Rotating Metrics */}
            <motion.div
              key={currentMetric}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-6 inline-block"
            >
              <div className="flex items-center">
                <metrics[currentMetric].icon className="w-6 h-6 mr-3 text-yellow-400" />
                <div>
                  <div className="text-2xl font-bold">{metrics[currentMetric].value}</div>
                  <div className="text-sm opacity-80">{metrics[currentMetric].label}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/blog"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Explore All Content
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Content Cards */}
          <div className="space-y-4">
            {contentItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <Link href={item.url} className="block">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mr-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <span className="bg-white/20 px-2 py-1 rounded text-xs font-medium mr-2">
                          {item.type}
                        </span>
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          <span className="text-xs">Featured</span>
                        </div>
                      </div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm opacity-80">{item.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/60" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {metrics.map((metric, index) => (
            <div key={metric.label} className="text-center">
              <div className="text-2xl font-bold mb-1">{metric.value}</div>
              <div className="text-sm opacity-80">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewContent2025Banner;