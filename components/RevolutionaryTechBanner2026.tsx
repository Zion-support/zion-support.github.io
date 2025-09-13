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
  Award
} from 'lucide-react';

const RevolutionaryTechBanner2026 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const slides = [
    {
      title: "Neural Interface Revolution 2026",
      subtitle: "Direct brain-computer communication is here",
      description: "Experience the future of human-AI interaction with our breakthrough neural interface technology",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      stats: "2.3M+ Users"
    },
    {
      title: "Quantum AI Fusion Platform",
      subtitle: "Revolutionary quantum computing meets AI",
      description: "Unlock unprecedented computational power with our quantum-enhanced artificial intelligence systems",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      stats: "500% Faster"
    },
    {
      title: "Autonomous Business Operations",
      subtitle: "Complete business automation achieved",
      description: "Transform your enterprise with fully autonomous AI systems that run your business 24/7",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
      stats: "99.9% Uptime"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  if (isDismissed) return null;

  const currentSlideData = slides[currentSlide];
  const Icon = currentSlideData.icon;

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

            <div className="relative z-10 container mx-auto px-4 py-8">
              <div className="flex items-center justify-between">
                {/* Left Content */}
                <div className="flex-1 max-w-4xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-6"
                    >
                      {/* Icon */}
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentSlideData.color} shadow-2xl`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Revolutionary Tech 2026
                          </span>
                          <div className="flex items-center gap-1 text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm font-medium">4.9</span>
                          </div>
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {currentSlideData.title}
                        </h2>
                        
                        <p className="text-lg text-purple-200 mb-3">
                          {currentSlideData.subtitle}
                        </p>
                        
                        <p className="text-gray-300 text-sm mb-4 max-w-2xl">
                          {currentSlideData.description}
                        </p>

                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <TrendingUp className="w-4 h-4" />
                            <span>{currentSlideData.stats}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Users className="w-4 h-4" />
                            <span>Global Community</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Award className="w-4 h-4" />
                            <span>Industry Leading</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Slide Indicators */}
                  <div className="flex gap-2 mt-4">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide ? 'bg-purple-400 w-8' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4 ml-8">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2 group">
                    <Play className="w-4 h-4" />
                    Watch Demo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button className="bg-white/10 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsDismissed(true)}
                    className="text-gray-400 hover:text-white transition-colors p-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RevolutionaryTechBanner2026;