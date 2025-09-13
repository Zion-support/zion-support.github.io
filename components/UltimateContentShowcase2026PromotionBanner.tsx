'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  Zap, 
  TrendingUp,
  Brain,
  Award,
  Play,
  X
} from 'lucide-react';

const UltimateContentShowcase2026PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isDismissed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -100 
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 border-b border-purple-500/20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10" />
      
      {/* Floating Elements */}
      <div className="absolute top-2 left-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
      <div className="absolute top-4 right-8 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-500" />
      <div className="absolute bottom-2 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-1000" />

      <div className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
              <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                <Sparkles className="w-4 h-4" />
                NEW CONTENT
              </div>
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              🚀 Ultimate Content Showcase 2026
            </h2>
            
            <p className="text-lg text-purple-200 mb-4 max-w-2xl">
              Discover revolutionary AI breakthroughs, success stories, and cutting-edge tools 
              delivering <span className="text-yellow-400 font-bold">50,000% ROI</span> across industries
            </p>

            {/* Feature Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-purple-200">
              <div className="flex items-center gap-1">
                <Brain className="w-4 h-4 text-purple-400" />
                <span>Quantum-Neural Fusion AI</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4 text-purple-400" />
                <span>Fortune 500 Success Stories</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>Advanced AI Tools</span>
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/ultimate-content-showcase-2026"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-3 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105"
            >
              <Play className="w-5 h-5" />
              Explore Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              <TrendingUp className="w-5 h-5" />
              View Success Stories
            </Link>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-pulse" />
    </motion.div>
  );
};

export default UltimateContentShowcase2026PromotionBanner;