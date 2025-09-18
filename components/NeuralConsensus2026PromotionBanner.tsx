"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
BrainZapTrendingUpUsersArrowRightXCheckCircleStar
import Link from 'next/link';

const NeuralConsensus2026PromotionBanner: React.FC = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('neural-consensus-banner-dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => setIsVisible(true)2000);
      return () => clearTimeout(timer);
    }
  }[]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('neural-consensus-banner-'dismissed', 'true');
  };

  const handleLearnMore = () => {
    // Track banner interaction
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag(', 'event', 'neural_consensus_banner_click'{
        event_category: 'engagement',
        event_label: 'learn_more_clicked'
      });
    }
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white shadow-2xl"
        >
          <div className="relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-16 w-6 h-6 bg-purple-400 rounded-full animate-pulse delay-300"></div>
              <div className="absolute bottom-4 left-1/3 w-4 h-4 bg-indigo-400 rounded-full animate-pulse delay-700"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Icon with animation */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20repeat: Infinityease: "linear" }}
                    className="flex-shrink-0"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>

                  {/* Main content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                        <Star className="w-3 h-3 mr-1" />
                        BREAKTHROUGH 2026
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-green-400 to-emerald-500 text-white">
                        <Zap className="w-3 h-3 mr-1" />
                        NEW RELEASE
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-1">
                      🧠 Neural Consensus Revolution: $15B ROI Achieved!
                    </h3>
                    
                    <p className="text-sm text-blue-100 mb-2">
                      Discover how Fortune 100 companies are using collective AI intelligence to achieve unprecedented business results. 
                      <span className="font-semibold text-yellow-300"> 99.9% decision accuracy</span> and 
                      <span className="font-semibold text-green-300"> 400% average ROI</span>.
                    </p>

                    {/* Key benefits */}
                    <div className="flex items-center space-x-4 text-xs text-blue-200">
                      <div className="flex items-center">
                        <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                        <span>99.9% Accuracy</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1 text-yellow-400" />
                        <span>$15B ROI</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1 text-purple-400" />
                        <span>Fortune 100</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center space-x-3">
                  <Link href="/src/pages/blog/ai-2026-neural-consensus-revolution" onClick={handleLearnMore}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Read Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </Link>

                  <Link href="/src/pages/case-studies/global-enterprise-neural-consensus-transformation-2026-15-billion-roi" onClick={handleLearnMore}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      View ROI Results
                      <TrendingUp className="w-4 h-4 ml-2" />
                    </motion.button>
                  </Link>

                  <button
                    onClick={handleDismiss}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                    aria-label="Dismiss banner"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 30ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NeuralConsensus2026PromotionBanner;