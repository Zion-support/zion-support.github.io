'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Zap, Brain, Eye, Mic, Video, TrendingUp, CheckCircle } from 'lucide-react';

const MultimodalAI2025RevolutionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Check localStorage for dismissal
  useEffect(() => {
    const dismissed = localStorage.getItem('multimodal-ai-2025-banner-dismissed');
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  // Auto-rotation logic
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % multimodalContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('multimodal-ai-2025-banner-dismissed', 'true');
  };

  const multimodalContent = [
    {
      id: 'multimodal-breakthrough',
      title: 'AI 2025: Multimodal Intelligence Revolution',
      subtitle: '750% ROI Through Unified Text, Image, Audio & Video Processing',
      description: 'Fortune 500 companies achieve unprecedented results with multimodal AI that processes all data types simultaneously.',
      metrics: {
        roi: '750%',
        savings: '$4.2B',
        accuracy: '99.7%',
        speed: '340%'
      },
      link: '/blog/ai-2025-multimodal-intelligence-revolution-ultimate-breakthrough',
      icon: Brain,
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 Success Story',
      subtitle: '$6.8B Company Achieves 750% ROI in 18 Months',
      description: 'TechGlobal Corp transformed operations through multimodal AI, delivering $234M annual savings and 98.7% customer satisfaction.',
      metrics: {
        roi: '750%',
        savings: '$234M',
        satisfaction: '98.7%',
        efficiency: '67%'
      },
      link: '/case-studies/fortune-500-multimodal-ai-transformation-750-roi-success',
      icon: TrendingUp,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'implementation-guide',
      title: 'Complete Implementation Guide',
      subtitle: 'Master Guide: Strategy to 750% ROI in 18 Months',
      description: 'Step-by-step roadmap with technical architecture, ROI frameworks, and real-world success strategies for enterprise transformation.',
      metrics: {
        roi: '750%',
        timeline: '18 months',
        success: '98%',
        phases: '3 phases'
      },
      link: '/resources/ai-2025-multimodal-implementation-master-guide',
      icon: CheckCircle,
      color: 'from-green-600 to-emerald-600'
    }
  ];

  const currentContent = multimodalContent[currentSlide];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-40 left-1/2 w-60 h-60 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors z-20"
                aria-label="Dismiss banner"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left side - Content */}
                  <div className="space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      <Zap className="w-4 h-4 mr-2" />
                      NEW: Multimodal AI Revolution 2025
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                      {currentContent.title}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-xl text-purple-200 font-semibold">
                      {currentContent.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {currentContent.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-white">{currentContent.metrics.roi}</div>
                        <div className="text-sm text-purple-200">ROI</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-white">{currentContent.metrics.savings || currentContent.metrics.timeline}</div>
                        <div className="text-sm text-purple-200">
                          {currentContent.metrics.savings ? 'Savings' : 'Timeline'}
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-white">{currentContent.metrics.accuracy || currentContent.metrics.satisfaction || currentContent.metrics.success}</div>
                        <div className="text-sm text-purple-200">
                          {currentContent.metrics.accuracy ? 'Accuracy' : 
                           currentContent.metrics.satisfaction ? 'Satisfaction' : 'Success Rate'}
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-white">{currentContent.metrics.speed || currentContent.metrics.efficiency || currentContent.metrics.phases}</div>
                        <div className="text-sm text-purple-200">
                          {currentContent.metrics.speed ? 'Speed' : 
                           currentContent.metrics.efficiency ? 'Efficiency' : 'Phases'}
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={currentContent.link}
                        className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
                      >
                        Explore Now
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-200"
                      >
                        Get Implementation Guide
                      </Link>
                    </div>
                  </div>

                  {/* Right side - Visual */}
                  <div className="relative">
                    {/* Multimodal AI Visualization */}
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                      {/* Central Brain Icon */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                          <Brain className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Data Type Icons */}
                      <div className="relative h-64">
                        {/* Text Processing */}
                        <motion.div
                          className="absolute top-4 left-1/2 transform -translate-x-1/2"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">T</span>
                          </div>
                          <div className="text-white text-xs mt-2 text-center">Text</div>
                        </motion.div>

                        {/* Image Processing */}
                        <motion.div
                          className="absolute top-1/2 right-4 transform -translate-y-1/2"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        >
                          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                            <Eye className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-white text-xs mt-2 text-center">Images</div>
                        </motion.div>

                        {/* Audio Processing */}
                        <motion.div
                          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        >
                          <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                            <Mic className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-white text-xs mt-2 text-center">Audio</div>
                        </motion.div>

                        {/* Video Processing */}
                        <motion.div
                          className="absolute top-1/2 left-4 transform -translate-y-1/2"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                        >
                          <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                            <Video className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-white text-xs mt-2 text-center">Video</div>
                        </motion.div>
                      </div>

                      {/* Connection Lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <motion.line
                          x1="50%"
                          y1="20%"
                          x2="50%"
                          y2="50%"
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.line
                          x1="80%"
                          y1="50%"
                          x2="50%"
                          y2="50%"
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                        <motion.line
                          x1="50%"
                          y1="50%"
                          x2="50%"
                          y2="80%"
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        />
                        <motion.line
                          x1="50%"
                          y1="50%"
                          x2="20%"
                          y2="50%"
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8B5CF6" />
                            <stop offset="100%" stopColor="#4F46E5" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {multimodalContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? 'bg-white scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Auto-play toggle */}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                {isAutoPlaying ? 'Pause' : 'Resume'} Auto-rotation
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MultimodalAI2025RevolutionBanner;