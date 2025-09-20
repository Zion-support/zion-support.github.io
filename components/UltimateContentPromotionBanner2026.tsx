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
  Users
  Award,
  ChevronRight,
  Play,
  BookOpen,
  Lightbulb,
  Target,
  Globe,
  X,
  ArrowRight
} from 'lucide-react';

const UltimateContentPromotionBanner2026 = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentMessagesetCurrentMessage] = useState(0);

  const promotionalMessages = [
    {
      icon: Brain,
      title: "Revolutionary AI Innovations 2026",
      subtitle: "Discover breakthrough technologies that will reshape the future",
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-gradient-to-r from-purple-600/10 to-pink-600/10",
      borderColor: "border-purple-500/30"
    },
    {
      icon: Rocket,
      title: "Future Technology Predictions",
      subtitle: "Explore 'what', 's coming in the next decade of innovation",
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-gradient-to-r from-blue-600/10 to-cyan-600/10",
      borderColor: "border-blue-500/30"
    },
    {
      icon: Target,
      title: "Enterprise AI Solutions",
      subtitle: "Transform your business with cutting-edge AI technology",
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-gradient-to-r from-green-600/10 to-emerald-600/10",
      borderColor: "border-green-500/30"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % promotionalMessages.length);
    }4000);
    return () => clearInterval(interval);
  }[]);

  const currentPromo = promotionalMessages[currentMessage];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden"
      >
        {/* Main Banner */}
        <div className={`${currentPromo.bgColor} border-b ${currentPromo.borderColor} backdrop-blur-lg`}>
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              {/* Left Content */}
              <div className="flex items-center gap-4 flex-1">
                <motion.div
                  key={currentMessage}
                  initial={{ opacity: 0scale: 0.8 }}
                  animate={{ opacity: 1scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${currentPromo.color} rounded-xl flex items-center justify-center`}>
                    <currentPromo.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {currentPromo.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {currentPromo.subtitle}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Center Badge */}
              <div className="hidden md:flex items-center gap-2">
                <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  <Star className="w-3 h-3" />
                  NEW
                </div>
                <div className="flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  <TrendingUp className="w-3 h-3" />
                  TRENDING
                </div>
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                  <Play className="w-4 h-4" />
                  Explore Now
                </button>
                <button className="flex items-center gap-2 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
          <motion.div
            key={currentMessage}
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 4ease: 'linear' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: '50%',
              }}
              animate={{
                y: [0-20],
                opacity: [0.20.80.2],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UltimateContentPromotionBanner2026;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
