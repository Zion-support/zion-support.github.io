'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  TrendingUp, 
  Shield, 
  Heart, 
  DollarSign, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  X
} from 'lucide-react';

const AI2025BreakthroughBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentMetric, setCurrentMetric] = useState(0);

  const metrics = [
    { value: '$500M+', label: 'Average ROI', icon: DollarSign, color: 'text-green-400' },
    { value: '99.8%', label: 'Success Rate', icon: CheckCircle, color: 'text-blue-400' },
    { value: '340%', label: 'ROI Increase', icon: TrendingUp, color: 'text-purple-400' },
    { value: '500+', label: 'Projects', icon: Award, color: 'text-pink-400' }
  ];

  const contentHighlights = [
    {
      title: 'AI Cybersecurity Revolution',
      description: 'Protecting $50B+ in enterprise assets with 99.7% accuracy',
      url: '/blog/ai-2025-cybersecurity-revolution',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Healthcare AI Transformation',
      description: '$2.1B health system achieves 99.8% patient safety',
      url: '/case-studies/healthcare-ai-transformation-2025',
      icon: Heart,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Enterprise Implementation Guide',
      description: 'Complete framework for $500M+ ROI in 24 months',
      url: '/resources/ai-implementation-enterprise-guide-2025',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsVisible(false)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
            >
              <Zap className="w-5 h-5 mr-2 text-yellow-400" />
              <span className="text-sm font-medium">BREAKTHROUGH 2025</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              AI 2025: The Ultimate
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Business Breakthrough
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl opacity-90 mb-8 leading-relaxed"
            >
              Discover the revolutionary AI strategies that are transforming businesses worldwide. 
              Learn from real success stories and proven implementation frameworks.
            </motion.p>

            {/* Rotating Metrics */}
            <motion.div
              key={currentMetric}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${metrics[currentMetric].color.replace('text-', 'from-').replace('-400', '-500')} to-${metrics[currentMetric].color.replace('text-', '').replace('-400', '-600')}`}>
                  {React.createElement(metrics[currentMetric].icon, { className: "w-6 h-6 text-white" })}
                </div>
                <div>
                  <div className="text-3xl font-bold">{metrics[currentMetric].value}</div>
                  <div className="text-sm opacity-75">{metrics[currentMetric].label}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/blog/ai-2025-cybersecurity-revolution"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore New Content
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Content Highlights */}
          <div className="space-y-4">
            {contentHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Link href={highlight.url} className="block">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${highlight.color}`}>
                      {React.createElement(highlight.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 hover:text-blue-400 transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-sm opacity-90 mb-3">
                        {highlight.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-blue-400">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Stories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">$50B+</div>
            <div className="text-sm opacity-75">Assets Protected</div>
            <div className="text-xs opacity-60 mt-1">Cybersecurity Solutions</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">99.8%</div>
            <div className="text-sm opacity-75">Patient Safety</div>
            <div className="text-xs opacity-60 mt-1">Healthcare AI</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">$500M+</div>
            <div className="text-sm opacity-75">Average ROI</div>
            <div className="text-xs opacity-60 mt-1">Enterprise AI</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AI2025BreakthroughBanner;