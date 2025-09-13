'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Star, 
  ChevronRight, 
  X, 
  Play,
  ArrowRight,
  Sparkles,
  Rocket,
  Globe
} from 'lucide-react';

const UltimateContentShowcase2028PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: Brain,
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Quantum AI Processing',
      description: '1000x faster processing power',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Rocket,
      title: 'Autonomous Systems',
      description: 'Self-managing business operations',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Omniversal Computing',
      description: 'Multi-dimensional processing',
      color: 'from-green-500 to-teal-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-blue-600/10" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000" />
            <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-2000" />
          </div>
        </div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                  </motion.div>
                  <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                    New Release 2028
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Ultimate Content Showcase 2028
                  </span>
                </h2>

                <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl">
                  Discover revolutionary AI innovations, quantum computing breakthroughs, 
                  and future technologies that are reshaping the world of business.
                </p>

                {/* Feature Carousel */}
                <div className="mb-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentFeature}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-r ${features[currentFeature].color} rounded-lg flex items-center justify-center`}>
                        <features[currentFeature].icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{features[currentFeature].title}</div>
                        <div className="text-sm text-gray-400">{features[currentFeature].description}</div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Watch Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border-2 border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Explore Now
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Right Content - Visual Elements */}
              <div className="flex-1 max-w-md lg:max-w-lg">
                <div className="relative">
                  {/* Main Visual */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="relative bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/30"
                  >
                    {/* Floating Elements */}
                    <motion.div
                      animate={{ 
                        y: [0, -15, 0],
                        x: [0, 10, 0]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                      className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                    >
                      <Brain className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      animate={{ 
                        y: [0, 15, 0],
                        x: [0, -10, 0]
                      }}
                      transition={{ 
                        duration: 2.5, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center"
                    >
                      <Zap className="w-6 h-6 text-white" />
                    </motion.div>

                    <motion.div
                      animate={{ 
                        y: [0, -8, 0],
                        x: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 3.5, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 1.5
                      }}
                      className="absolute top-1/2 -right-8 w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center"
                    >
                      <Rocket className="w-5 h-5 text-white" />
                    </motion.div>

                    {/* Center Content */}
                    <div className="text-center">
                      <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                        2028
                      </div>
                      <div className="text-lg text-gray-300 mb-4">
                        Revolutionary Technology Showcase
                      </div>
                      <div className="flex justify-center gap-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-3xl blur-xl -z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-800/50 hover:bg-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
        >
          <X className="w-4 h-4" />
        </motion.button>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 10, ease: "linear" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UltimateContentShowcase2028PromotionBanner;