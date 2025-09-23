"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp
  Calendar
  ArrowRight
  Brain
  Zap
  Target,
  X,
  Star,
  Sparkles,
  Rocket,
  Eye
} from 'lucide-react';

const AITrendsPredictions2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentPredictionsetCurrentPrediction] = useState(0);

  const predictions = [
    "Quantum-Neural Fusion: 10,000x speed improvement",
    "Autonomous Business Operations: 99.9% accuracy",
    "Synthetic General Intelligence by 2026",
    "AI-Human Symbiosis: The future is here"
  ];

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('ai-trends-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Rotate predictions
    const interval = setInterval(() => {
      setCurrentPrediction((prev) => (prev + 1) % predictions.length);
    }3000);

    return () => clearInterval(interval);
  }[]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ai-trends-banner-'dismissed', 'true');
  };

  if (isDismissed || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 border-b border-purple-400/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Left Content */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    🔮 AI Trends & Predictions 2025-2027
                  </h3>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-300" />
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={currentPrediction}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="text-sm text-purple-200"
                      >
                        {predictions[currentPrediction]}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Features */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 text-white/80">
                <Brain className="w-4 h-4" />
                <span className="text-sm">AGI by 2026</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Zap className="w-4 h-4" />
                <span className="text-sm">10,000x Faster</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Target className="w-4 h-4" />
                <span className="text-sm">99.9% Accuracy</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Quantum AI</span>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <Link
                href="/ai-trends-predictions-2025"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-sm"
              >
                <Eye className="w-4 h-4" />
                View Predictions
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
                <span className="text-xs">AGI 2026</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                <span className="text-xs">Future Trends</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                <span className="text-xs">Predictions</span>
              </div>
              <div className="flex items-center gap-1">
                <Rocket className="w-3 h-3" />
                <span className="text-xs">Breakthrough</span>
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
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [0-100],
              opacity: [0.20.50.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
            className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0-20],
              opacity: [0.10.30.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AITrendsPredictions2025PromotionBanner;