'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Star, 
  TrendingUp, 
  ArrowRight,
  Play,
  X,
  ChevronRight,
  Globe,
  Users,
  Award,
  Clock,
  BookOpen
} from 'lucide-react';

const NewContentPromotionBanner2026 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer communication",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      stats: "2.3M+ Users"
    },
    {
      title: "Quantum AI Fusion",
      description: "Revolutionary quantum computing meets AI",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      stats: "500% Faster"
    },
    {
      title: "Autonomous Operations",
      description: "Complete business automation achieved",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
      stats: "99.9% Uptime"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

  if (isDismissed) return null;

  const currentFeatureData = features[currentFeature];
  const Icon = currentFeatureData.icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden"
        >
          {/* Main Banner */}
          <div className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20">
            {/* Animated Background */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
              <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-6">
              <div className="flex items-center justify-between">
                {/* Left Content */}
                <div className="flex-1 max-w-4xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentFeature}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-4"
                    >
                      {/* Icon */}
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${currentFeatureData.color} shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                            New Content 2026
                          </span>
                          <div className="flex items-center gap-1 text-yellow-400">
                            <Star className="w-3 h-3 fill-current" />
                            <span className="text-xs font-medium">4.9</span>
                          </div>
                          <div className="flex items-center gap-1 text-green-400">
                            <TrendingUp className="w-3 h-3" />
                            <span className="text-xs font-medium">Trending</span>
                          </div>
                        </div>
                        
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                          {currentFeatureData.title}
                        </h2>
                        
                        <p className="text-sm text-purple-200 mb-2">
                          {currentFeatureData.description}
                        </p>

                        <div className="flex items-center gap-4 text-xs text-gray-300">
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>{currentFeatureData.stats}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Globe className="w-3 h-3" />
                            <span>Global Access</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="w-3 h-3" />
                            <span>Industry Leading</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Feature Indicators */}
                  <div className="flex gap-1 mt-3">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentFeature(index)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          index === currentFeature ? 'bg-purple-400 w-6' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3 ml-6">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2 group text-sm">
                    <Play className="w-3 h-3" />
                    Watch
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button className="bg-white/10 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 flex items-center gap-2 text-sm">
                    Learn More
                    <ChevronRight className="w-3 h-3" />
                  </button>

                  <button
                    onClick={() => setIsDismissed(true)}
                    className="text-gray-400 hover:text-white transition-colors p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewContentPromotionBanner2026;