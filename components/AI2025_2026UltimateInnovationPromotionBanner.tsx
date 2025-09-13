'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Star, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket,
  Award,
  TrendingUp,
  X
} from 'lucide-react';

const AI2025_2026UltimateInnovationPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-4 left-4 w-8 h-8 bg-yellow-400/20 rounded-full"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-8 right-8 w-6 h-6 bg-pink-400/20 rounded-full"
        />
        <motion.div
          animate={{ 
            x: [0, 120, 0],
            y: [0, -30, 0],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-4 left-1/4 w-4 h-4 bg-purple-400/20 rounded-full"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-semibold text-white">NEW</span>
                <Star className="w-4 h-4 text-yellow-400" />
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-white/80 ml-2">4.9/5 Rating</span>
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              🚀 AI 2025-2026 Innovation Showcase
            </h2>
            
            <p className="text-white/90 text-lg mb-4 max-w-2xl">
              Discover <span className="font-semibold text-yellow-400">breakthrough AI innovations</span>, 
              cutting-edge tools, and future predictions that will transform your business.
            </p>

            {/* Feature Highlights */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80 mb-4">
              <div className="flex items-center gap-1">
                <Brain className="w-4 h-4 text-blue-400" />
                <span>Neural Quantum Computing</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Conscious AI Systems</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span>95% Prediction Accuracy</span>
              </div>
            </div>
          </div>

          {/* Right Content - CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="#ai-innovation-showcase"
              className="group bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              <Rocket className="w-5 h-5" />
              <span>Explore Innovations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/ai-solutions"
              className="group border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Award className="w-5 h-5" />
              <span>Get Started</span>
            </Link>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 8, ease: "linear" }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"
        />
      </div>
    </motion.div>
  );
};

export default AI2025_2026UltimateInnovationPromotionBanner;