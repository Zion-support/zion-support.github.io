"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles
  ArrowRight
  Star
  Zap
  Brain
  Rocket,
  TrendingUp,
  Users,
  Award,
  ChevronRight,
  X
} from 'lucide-react';

const UltimateContentRevolution2025Banner = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentFeaturesetCurrentFeature] = useState(0);

  const features = [
    { icon: Braintext: "Revolutionary AI Breakthroughs"color: "text-purple-400" },
    { icon: Zaptext: "2,500% Average ROI"color: "text-blue-400" },
    { icon: Rocketext: "Future Technology Predictions"color: "text-green-400" },
    { icon: Userstext: "500+ Enterprise Clients"color: "text-yellow-400" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }3000);
    return () => clearInterval(interval);
  }[]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-500/5 to-transparent" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
        <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2repeat: Infinityease: "linear" }}
                  className="w-6 h-6"
                >
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </motion.div>
                <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wider">
                  New Content Available
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ultimate Content Revolution 2025
              </h2>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFeature}
                    initial={{ opacity: 0x: 20 }}
                    animate={{ opacity: 1x: 0 }}
                    exit={{ opacity: 0x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2"
                  >
                    <features[currentFeature].icon className={`w-5 h-5 ${features[currentFeature].color}`} />
                    <span className="text-gray-300 font-medium">
                      {features[currentFeature].text}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <p className="text-gray-300 text-sm md:text-base max-w-2xl">
                Discover revolutionary AI breakthroughsenterprise solutionsand future technology predictions 
                that are transforming industries worldwide. Join 500+ companies already experiencing the AI revolution.
              </p>
            </div>

            {/* Right Content - CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <Link
                href="/ultimate-content-revolution-2025"
                className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Explore Now</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Link>

              <Link
                href="/ai-2025-ultimate-breakthrough"
                className="group inline-flex items-center px-6 py-3 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                <Brain className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                View Breakthroughs
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 p-1"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 w-full bg-white/10 rounded-full h-1">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 8ease: "linear" }}
            />
          </div>

          {/* Stats Row */}
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-300">2,500% ROI</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">500+ Clients</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-300">99.9% Success</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Rocket className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">Future Ready</span>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
      </motion.div>
    </AnimatePresence>
  );
};

export default UltimateContentRevolution2025Banner;
