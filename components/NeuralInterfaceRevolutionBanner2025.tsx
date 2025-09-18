"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
XBrainZapTrendingUpArrowRightPlayUsersAward

interface NeuralInterfaceContent {
  id: string;
  title: string;
  type: string;
  url: string;
  metrics: {
    roi: string;
    savings: string;
    timeframe: string;
    accuracy: string;
  };
  description: string;
  featured: boolean;
}

const NeuralInterfaceRevolutionBanner2025: React.FC = () => {
  const [currentIndexsetCurrentIndex] = useState(0);
  const [isVisiblesetIsVisible] = useState(true);
  const [isDismissedsetIsDismissed] = useState(false);

  const neuralInterfaceContent: NeuralInterfaceContent[] = [
    {
      id: 'neural-interface-revolution',
      title: 'AI 2025: The Neural Interface Revolution - Ultimate Guide to 1,500% ROI',
      type: 'blog',
      url: '/blog/ai-2025-neural-interface-revolution-ultimate-guide',
      metrics: {
        roi: '1,500%',
        savings: '$180M',
        timeframe: '24 months',
        accuracy: '99.7%'
      },
      description: 'Transform your business with brain-computer integration technology',
      featured: true
    },
    {
      id: 'neural-interface-case-study',
      title: 'Neural Interface Fortune 500 Success: $4.8B Company Achieves 1,500% ROI',
      type: 'case-study',
      url: '/case-studies/neural-interface-fortune-500-transformation-1500-roi-success',
      metrics: {
        roi: '1,500%',
        savings: '$180M',
        timeframe: '24 months',
        accuracy: '99.7%'
      },
      description: 'Real-world success story of neural interface implementation',
      featured: true
    },
    {
      id: 'neural-interface-guide',
      title: 'Neural Interface Implementation Master Guide 2025: From Strategy to 1,500% ROI',
      type: 'resource',
      url: '/resources/neural-interface-implementation-master-guide-2025',
      metrics: {
        roi: '1,500%',
        savings: '$180M',
        timeframe: '24 months',
        accuracy: '99.7%'
      },
      description: 'Complete implementation framework for neural interface technology',
      featured: true
    }
  ];

  useEffect(() => {
    const savedState = localStorage.getItem('neural-interface-banner-dismissed');
    if (savedState === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }[]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === neuralInterfaceContent.length - 1 ? 0 : prevIndex + 1
      );
    }8000);

    return () => clearInterval(interval);
  }[]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('neural-interface-banner-'dismissed', 'true');
  };

  const handleUndismiss = () => {
    setIsVisible(true);
    setIsDismissed(false);
    localStorage.removeItem('neural-interface-banner-dismissed');
  };

  if (isDismissed) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white p-4 text-center"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-4">
          <Brain className="h-6 w-6" />
          <span className="font-semibold">Neural Interface Revolution Content Available</span>
          <button
            onClick={handleUndismiss}
            className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-sm transition-colors"
          >
            Show Banner
          </button>
        </div>
      </motion.div>
    );
  }

  const currentContent = neuralInterfaceContent[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="relative overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            
            {/* Floating Neural Network Animation */}
            <motion.div
              className="absolute top-10 left-10 w-20 h-20 border border-purple-400/30 rounded-full"
              animate={{
                scale: [1.21],
                opacity: [0.30.60.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-20 right-20 w-16 h-16 border border-blue-400/30 rounded-full"
              animate={{
                scale: [1.21.2],
                opacity: [0.60.30.6],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 left-1/4 w-12 h-12 border border-indigo-400/30 rounded-full"
              animate={{
                scale: [1.31],
                opacity: [0.40.70.4],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="relative z-10 bg-gradient-to-r from-purple-800/95 via-blue-800/95 to-indigo-800/95 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 py-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      🧠 Neural Interface Revolution 2025
                    </h2>
                    <p className="text-purple-200 text-sm">
                      Breakthrough Content: 1,500% ROI Through Brain-Computer Integration
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={handleDismiss}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Dismiss banner"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>

              {/* Main Content */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Content Showcase */}
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-purple-200 text-sm font-medium uppercase tracking-wide">
                        Featured Content
                      </span>
                    </div>
                    
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0x: 20 }}
                        animate={{ opacity: 1x: 0 }}
                        exit={{ opacity: 0x: -20 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                          {currentContent.title}
                        </h3>
                        <p className="text-purple-100 mb-4">
                          {currentContent.description}
                        </p>
                        
                        {/* Success Metrics */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="bg-gradient-to-r from-purple-600/50 to-blue-600/50 rounded-lg p-3">
                            <div className="flex items-center space-x-2">
                              <TrendingUp className="h-4 w-4 text-green-400" />
                              <span className="text-white font-bold">{currentContent.metrics.roi} ROI</span>
                            </div>
                            <p className="text-purple-200 text-xs">24-month achievement</p>
                          </div>
                          <div className="bg-gradient-to-r from-blue-600/50 to-indigo-600/50 rounded-lg p-3">
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4 text-blue-400" />
                              <span className="text-white font-bold">{currentContent.metrics.savings} Savings</span>
                            </div>
                            <p className="text-purple-200 text-xs">Annual benefits</p>
                          </div>
                        </div>

                        <Link
                          href={currentContent.url}
                          className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                          <span>Explore {currentContent.type}</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </motion.div>
                    </AnimatePresence>

                    {/* Progress Indicators */}
                    <div className="flex space-x-2 mt-4">
                      {neuralInterfaceContent.map((_index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex 
                              ? 'bg-white w-8' 
                              : 'bg-white/30 hover:bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Success Metrics Grid */}
                <div className="space-y-4">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Proven Results Across Industries
                    </h3>
                    <p className="text-purple-200">
                      Fortune 500 companies achieving 1,500% ROI with neural interfaces
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-purple-600/50 to-purple-800/50 rounded-xl p-4 border border-purple-400/30">
                      <div className="flex items-center space-x-3 mb-2">
                        <TrendingUp className="h-6 w-6 text-green-400" />
                        <span className="text-white font-bold text-lg">1,500%</span>
                      </div>
                      <p className="text-purple-200 text-sm">Average ROI</p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-600/50 to-blue-800/50 rounded-xl p-4 border border-blue-400/30">
                      <div className="flex items-center space-x-3 mb-2">
                        <Zap className="h-6 w-6 text-yellow-400" />
                        <span className="text-white font-bold text-lg">234%</span>
                      </div>
                      <p className="text-purple-200 text-sm">Productivity Gain</p>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-600/50 to-indigo-800/50 rounded-xl p-4 border border-indigo-400/30">
                      <div className="flex items-center space-x-3 mb-2">
                        <Brain className="h-6 w-6 text-purple-400" />
                        <span className="text-white font-bold text-lg">99.7%</span>
                      </div>
                      <p className="text-purple-200 text-sm">Accuracy Rate</p>
                    </div>

                    <div className="bg-gradient-to-br from-green-600/50 to-green-800/50 rounded-xl p-4 border border-green-400/30">
                      <div className="flex items-center space-x-3 mb-2">
                        <Award className="h-6 w-6 text-yellow-400" />
                        <span className="text-white font-bold text-lg">$180M</span>
                      </div>
                      <p className="text-purple-200 text-sm">Annual Savings</p>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-xl p-6 border border-white/20">
                    <h4 className="text-white font-bold text-lg mb-3">
                      Ready to Achieve 1,500% ROI?
                    </h4>
                    <p className="text-purple-100 text-sm mb-4">
                      Join Fortune 500 companies transforming their operations with neural interface technology
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/contact"
                        className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105"
                      >
                        Get Consultation
                      </Link>
                      <Link
                        href="/resources/neural-interface-implementation-master-guide-2025"
                        className="flex-1 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 border border-white/30"
                      >
                        Download Guide
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Stats */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-purple-200 text-sm">Fortune 500 Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">1,500%</div>
                    <div className="text-purple-200 text-sm">Average ROI</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">99.7%</div>
                    <div className="text-purple-200 text-sm">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">24</div>
                    <div className="text-purple-200 text-sm">Months to ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NeuralInterfaceRevolutionBanner2025;
