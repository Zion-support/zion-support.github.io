"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles
  Zap
  Brain
  Rocket
  Star
  TrendingUp
  ArrowRight,
  Play,
  X,
  ChevronRight,
  Clock
} from 'lucide-react';

const UltimateContentShowcase2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentFeaturesetCurrentFeature] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)1000);
    return () => clearTimeout(timer);
  }[]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }3000);
    return () => clearInterval(interval);
  }[]);

  const features = [
    {
      icon: Brain,
      title: 'Neural Interface Revolution',
      description: '500% efficiency boost',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Rocket,
      title: 'Quantum AI Fusion',
      description: '1000x faster processing',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Enterprise Automation',
      description: '90% cost reduction',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Star,
      title: 'Future Predictions',
      description: '95% accuracy rate',
      color: 'from-orange-500 to-red-500'
    }
  ];

  if (isDismissed || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative bg-gradient-to-r from-purple-900 via-slate-900 to-blue-900 border-b border-purple-500/30 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-blue-600/20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="20" cy="20" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="flex items-center gap-6">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">!</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    🚀 Ultimate Content Showcase 2025
                  </h3>
                  <p className="text-purple-200 text-sm">
                    Revolutionary AI Innovation & Future Predictions
                  </p>
                </div>
              </motion.div>

              {/* Rotating Features */}
              <div className="hidden md:flex items-center gap-4">
                <div className="w-px h-8 bg-purple-500/30"></div>
                <div className="flex items-center gap-3">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentFeature}
                      initial={{ opacity: 0x: 20 }}
                      animate={{ opacity: 1x: 0 }}
                      exit={{ opacity: 0x: -20 }}
                      className="flex items-center gap-2"
                    >
                      <div className={`w-8 h-8 bg-gradient-to-r ${features[currentFeature].color} rounded-lg flex items-center justify-center`}>
                        {React.createElement(features[currentFeature].icon{ className: "w-4 h-4 text-white" })}
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">
                          {features[currentFeature].title}
                        </div>
                        <div className="text-purple-300 text-xs">
                          {features[currentFeature].description}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex items-center gap-4">
              {/* Countdown Timer */}
              <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-white/20">
                <Clock className="w-4 h-4 text-purple-300" />
                <span className="text-white text-sm font-medium">
                  Limited Time Offer
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <motion.button
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-4 h-4" />
                  <span className="text-sm font-medium">Preview</span>
                </motion.button>

                <motion.button
                  className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-purple-500/25"
                  whileHover={{ scale: 1.05y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Explore Now</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  onClick={() => setIsDismissed(true)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-gray-400 hover:text-white" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Features */}
          <div className="md:hidden mt-4">
            <div className="flex items-center justify-center gap-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2"
                >
                  <div className={`w-6 h-6 bg-gradient-to-r ${features[currentFeature].color} rounded-lg flex items-center justify-center`}>
                    {React.createElement(features[currentFeature].icon{ className: "w-3 h-3 text-white" })}
                  </div>
                  <div className="text-center">
                    <div className="text-white font-semibold text-sm">
                      {features[currentFeature].title}
                    </div>
                    <div className="text-purple-300 text-xs">
                      {features[currentFeature].description}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Animated Border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3repeat: Infinityease: "linear" }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UltimateContentShowcase2025PromotionBanner;
