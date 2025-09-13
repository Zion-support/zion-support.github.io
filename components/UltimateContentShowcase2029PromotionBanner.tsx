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
  BookOpen,
  Lightbulb,
  X,
  ChevronRight
} from 'lucide-react';

const UltimateContentShowcase2029PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Revolutionary AI Innovations 2029",
      subtitle: "Discover quantum neural networks and conscious AI systems",
      icon: Brain,
      color: "from-purple-600 to-blue-600",
      stats: "2.3M+ Views"
    },
    {
      title: "Business Transformation 2029",
      subtitle: "Autonomous operations and quantum business intelligence",
      icon: TrendingUp,
      color: "from-green-600 to-emerald-600",
      stats: "1.9M+ Views"
    },
    {
      title: "Future Technology 2029",
      subtitle: "Neural interfaces and quantum internet breakthroughs",
      icon: Rocket,
      color: "from-orange-600 to-red-600",
      stats: "2.8M+ Views"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Left Content */}
            <div className="flex items-center gap-6 flex-1">
              {/* Animated Icon */}
              <motion.div
                key={currentSlide}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="relative"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${slides[currentSlide].color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  {React.createElement(slides[currentSlide].icon, { 
                    className: "w-8 h-8 text-white" 
                  })}
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-black" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-1"
                  >
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white">
                        {slides[currentSlide].title}
                      </h3>
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                        NEW
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {slides[currentSlide].subtitle}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Play className="w-3 h-3" />
                        {slides[currentSlide].stats}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Featured Content
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Slide Indicators */}
              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white w-6' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2 group">
                  <BookOpen className="w-4 h-4" />
                  <span>Explore Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="bg-white/10 text-white px-4 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>Learn More</span>
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-white/10 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
          <motion.div
            key={currentSlide}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear" }}
            className="h-full bg-gradient-to-r from-purple-600 to-blue-600"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UltimateContentShowcase2029PromotionBanner;