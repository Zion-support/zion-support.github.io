import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Zap, 
  Brain, 
  X,
  ChevronRight,
  Sparkles,
  TrendingUp
} from 'lucide-react';
const RevolutionaryTechPromoBanner2026 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);
  const features = [
    "Quantum AI Consciousness",
    "Neural Energy Optimization", 
    "Distributed Intelligence Mesh",
    "Adaptive Security Protocols",
    "Global Consciousness Network",
    "Space-Time Computing"
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev: number) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);
  if (!isVisible) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-2xl"
      >
        <div className="relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          </div>
          {/* Content */}
          <div className="relative z-10 px-4 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Left Side - Main Message */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Brain className="w-6 h-6 text-yellow-300" />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Star className="w-5 h-5 text-yellow-300" />
                  </motion.div>
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-white font-bold text-lg">
                    🚀 Revolutionary Tech 2026:
                  </span>
                  <motion.span
                    key={currentFeature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="text-yellow-300 font-semibold text-lg"
                  >
                    {features[currentFeature]}
                  </motion.span>
                </div>
              </div>
              {/* Right Side - CTA and Close */}
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-lg text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 transition-all duration-300 border border-white/30 hover:border-white/50"
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>Explore Now</span>
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsVisible(false)}
                  className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-400 to-orange-400"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 15, ease: "linear" }}
              onAnimationComplete={() => setIsVisible(false)}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );

};


export default RevolutionaryTechPromoBanner2026;
