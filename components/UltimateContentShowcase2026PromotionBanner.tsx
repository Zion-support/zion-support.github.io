'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  ArrowRight,
  Star,
  Sparkles,
  Rocket,
  X
} from 'lucide-react';

const UltimateContentShowcase2026PromotionBanner = () => {
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
          className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900 text-white overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20" />
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full opacity-30"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center justify-center lg:justify-start mb-3"
                >
                  <div className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm font-semibold mr-4">
                    <Sparkles className="w-4 h-4 mr-2" />
                    NEW 2026
                  </div>
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-2xl lg:text-3xl font-bold mb-2"
                >
                  🚀 Ultimate Technology Showcase 2026
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-purple-100 mb-4 max-w-2xl"
                >
                  Experience the future with AI Revolution, Quantum Computing, Neural Interfaces, and Autonomous Systems
                </motion.p>

                {/* Technology Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-center justify-center lg:justify-start gap-4 mb-4"
                >
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                    <Brain className="w-5 h-5 text-purple-400 mr-2" />
                    <span className="text-sm font-medium">AI Revolution</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                    <Zap className="w-5 h-5 text-cyan-400 mr-2" />
                    <span className="text-sm font-medium">Quantum Computing</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                    <Globe className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-sm font-medium">Neural Interfaces</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                    <Shield className="w-5 h-5 text-red-400 mr-2" />
                    <span className="text-sm font-medium">Autonomous Systems</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Content - CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <div className="text-center sm:text-right">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">99.9%</div>
                  <div className="text-sm text-purple-200">Success Rate</div>
                </div>
                
                <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 rounded-full font-bold hover:shadow-lg transition-all duration-300 flex items-center group">
                  <Rocket className="w-5 h-5 mr-2" />
                  Explore Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* Dismiss Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                onClick={handleDismiss}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Progress Bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 origin-left"
            style={{ width: '100%' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UltimateContentShowcase2026PromotionBanner;