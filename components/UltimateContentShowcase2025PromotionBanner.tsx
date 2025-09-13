'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  ArrowRight, 
  X, 
  Zap, 
  Brain, 
  Globe,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const UltimateContentShowcase2025PromotionBanner = () => {
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
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
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
              className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"
            />
            <motion.div
              animate={{ 
                x: [0, -100, 0],
                y: [0, 50, 0],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-white opacity-10 rounded-full"
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center justify-center lg:justify-start gap-2 mb-3"
                >
                  <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-medium">NEW 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-2xl lg:text-3xl font-bold mb-2"
                >
                  🚀 Ultimate Content Showcase 2025
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-blue-100 text-lg mb-4"
                >
                  Discover Revolutionary AI Solutions, Intelligent Automation & Cloud Infrastructure
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm"
                >
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>10,000+ AI Models</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>99.9% Uptime</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>98% Satisfaction</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Content - Icons and CTA */}
              <div className="flex flex-col lg:flex-row items-center gap-6">
                {/* Feature Icons */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium">AI Solutions</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium">Automation</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium">Cloud</span>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Explore Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                    Learn More
                  </button>
                </motion.div>

                {/* Dismiss Button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  onClick={handleDismiss}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors duration-300"
                  aria-label="Dismiss banner"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UltimateContentShowcase2025PromotionBanner;