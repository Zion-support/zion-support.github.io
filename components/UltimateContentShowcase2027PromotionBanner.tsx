<<<<<<< HEAD
=======
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
  Award,
  Users,
  Clock
} from 'lucide-react';

const UltimateContentShowcase2027PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentFeaturesetCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const features = [
    {
      icon: Brain,
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Quantum AI Processing',
      description: '1000x faster processing speeds',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Rocket,
      title: 'Holographic Interfaces',
      description: '3D immersive experiences',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Award,
      title: '99.8% Success Rate',
      description: 'Proven reliability',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const stats = [
    { value: '2.5M+'label: 'Active Users' },
    { value: '500%'label: 'ROI Increase' },
    { value: '99.8%'label: 'Success Rate' },
    { value: '10M+'label: 'Hours Saved' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }3000);
    return () => clearInterval(interval);
  }[]);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6ease: "easeOut" }}
          className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/30"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 50%rgba(12011980.3) 0%transparent 50%)',
                  'radial-gradient(circle at 80% 20%rgba(25511980.3) 0%transparent 50%)',
                  'radial-gradient(circle at 40% 80%rgba(1202192550.3) 0%transparent 50%)',
                  'radial-gradient(circle at 20% 50%rgba(12011980.3) 0%transparent 50%)',
                ]
              }}
              transition={{ duration: 8repeat: Infinity }}
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-300 text-sm font-medium">NEW 2027</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  🚀 <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Ultimate Content Showcase 2027
                  </span>
                </h2>
                
                <p className="text-gray-300 text-sm lg:text-base mb-4 max-w-2xl">
                  Experience revolutionary AI innovationsautomation masteryand next-generation 
                  solutions transforming businesses worldwide. Join 2.5M+ users achieving 500% ROI increases.
                </p>

                {/* Rotating Features */}
                <div className="flex items-center gap-4 mb-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentFeature}
                      initial={{ opacity: 0x: 20 }}
                      animate={{ opacity: 1x: 0 }}
                      exit={{ opacity: 0x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-2"
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${features[currentFeature].color}`}>
                        <features[currentFeature].icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">
                          {features[currentFeature].title}
                        </div>
                        <div className="text-gray-400 text-xs">
                          {features[currentFeature].description}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-4 text-xs">
                  {stats.map((statindex) => (
                    <div key={index} className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-green-400" />
                      <span className="text-white font-semibold">{stat.value}</span>
                      <span className="text-gray-400">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button className="group px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  <span>Explore Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Join 2.5M+ Users</span>
                </button>
              </div>

              {/* Dismiss Button */}
              <button
                onClick={() => setIsDismissed(true)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4 text-gray-400 hover:text-white" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 animate-pulse" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UltimateContentShowcase2027PromotionBanner;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
