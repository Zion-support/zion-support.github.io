<<<<<<< HEAD
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles
  ArrowRight
  Brain
  Zap
  TrendingUp
  X,
  Star,
  Rocket,
  Target
} from 'lucide-react';

const AIInnovationShowcase2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('ai-innovation-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }[]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ai-innovation-banner-'dismissed', 'true');
  };

  if (isDismissed || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 border-b border-blue-400/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Left Content */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    🚀 New AI Innovation Showcase 2025
                  </h3>
                  <p className="text-sm text-blue-200">
                    Discover revolutionary AI breakthroughs and technologies
                  </p>
                </div>
              </div>
            </div>

            {/* Center Features */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 text-white/80">
                <Brain className="w-4 h-4" />
                <span className="text-sm">Quantum-Neural Fusion</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Zap className="w-4 h-4" />
                <span className="text-sm">10,000x Faster</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Target className="w-4 h-4" />
                <span className="text-sm">99.9% Accuracy</span>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <Link
                href="/ai-innovation-showcase-2025"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm"
              >
                <Rocket className="w-4 h-4" />
                Explore Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={handleDismiss}
                className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                aria-label="Dismiss banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Features */}
          <div className="md:hidden pb-4">
            <div className="flex items-center justify-center gap-4 text-white/80">
              <div className="flex items-center gap-1">
                <Brain className="w-3 h-3" />
                <span className="text-xs">Quantum AI</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                <span className="text-xs">2,500% ROI</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                <span className="text-xs">Revolutionary</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0100],
              opacity: [0.30.60.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [0-100],
              opacity: [0.20.50.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
            className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AIInnovationShowcase2025PromotionBanner;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
