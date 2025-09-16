'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Brain, Zap, TrendingUp, Award } from 'lucide-react';

const AdvancedNeuralNetworks2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'neural-networks-breakthrough',
      title: 'AI 2025: Advanced Neural Networks Enterprise Breakthrough',
      description: 'Achieve 450% ROI with cutting-edge neural network architectures. Transform your enterprise with quantum-enhanced AI systems.',
      url: '/blog/ai-2025-advanced-neural-networks-enterprise-breakthrough',
      type: 'blog',
      metrics: {
        roi: '450%',
        accuracy: '99.7%',
        savings: '$2.8B',
        speed: '340%'
      },
      icon: Brain,
      gradient: 'from-purple-600 via-blue-600 to-indigo-600'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 Success: $2.8B Annual Savings with Neural Networks',
      description: 'Discover how a Fortune 500 company achieved 567% ROI and $2.8B in annual savings through advanced neural network implementation.',
      url: '/case-studies/ai-2025-advanced-neural-networks-fortune-500-success-story',
      type: 'case-study',
      metrics: {
        savings: '$2.8B',
        roi: '567%',
        efficiency: '340%',
        satisfaction: '99.2%'
      },
      icon: Award,
      gradient: 'from-green-600 via-emerald-600 to-teal-600'
    },
    {
      id: 'implementation-guide',
      title: 'Complete Implementation Guide: Advanced Neural Networks 2025',
      description: 'Master the complete roadmap to neural network success. From strategy to 450% ROI in 18 months.',
      url: '/resources/ai-2025-advanced-neural-networks-implementation-guide',
      type: 'resource',
      metrics: {
        roi: '450%',
        timeline: '18 months',
        success: '98%',
        projects: '500+'
      },
      icon: TrendingUp,
      gradient: 'from-orange-600 via-red-600 to-pink-600'
    },
    {
      id: 'edge-computing-revolution',
      title: 'AI 2025 Edge Computing Revolution: Enterprise Breakthrough',
      description: 'Achieve 340% faster processing with edge AI solutions. 99.9% uptime and $1.8B in cumulative savings.',
      url: '/blog/ai-2025-edge-computing-revolution-enterprise-breakthrough',
      type: 'blog',
      metrics: {
        speed: '340%',
        uptime: '99.9%',
        savings: '$1.8B',
        efficiency: '67%'
      },
      icon: Zap,
      gradient: 'from-cyan-600 via-blue-600 to-purple-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('neural-networks-2025-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('neural-networks-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="relative overflow-hidden"
      >
        <div className={`bg-gradient-to-r ${currentContent.gradient} text-white py-8 px-4 sm:px-6 lg:px-8`}>
          <div className="max-w-7xl mx-auto">
            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* Content */}
              <div className="flex-1 max-w-4xl">
                <div className="flex items-center space-x-3 mb-4">
                  <currentContent.icon className="h-8 w-8 text-white/90" />
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    NEW: Advanced Neural Networks 2025
                  </span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                  {currentContent.title}
                </h2>

                <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {Object.entries(currentContent.metrics).map(([key, value]) => (
                    <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-white">{value}</div>
                      <div className="text-xs text-white/80 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={currentContent.url}
                    className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                  >
                    Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                  >
                    Get Implementation Strategy
                  </Link>
                </div>
              </div>

              {/* Visual Element */}
              <div className="mt-8 lg:mt-0 lg:ml-8">
                <div className="relative">
                  <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <currentContent.icon className="h-16 w-16 mx-auto mb-4 text-white/80" />
                      <div className="text-2xl font-bold text-white mb-2">
                        {currentContent.metrics.roi || currentContent.metrics.savings}
                      </div>
                      <div className="text-sm text-white/80">
                        {currentContent.metrics.roi ? 'Average ROI' : 'Cumulative Savings'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-400 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 -right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {content.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-white/5 rounded-full animate-pulse delay-1500"></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AdvancedNeuralNetworks2025Banner;