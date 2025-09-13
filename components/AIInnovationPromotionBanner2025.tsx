"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ArrowRight, 
  Star, 
  Brain, 
  Zap, 
  TrendingUp, 
  Users,
  Clock,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

const AIInnovationPromotionBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      id: 'quantum-breakthrough',
      title: '🚀 Quantum-AI Fusion Breakthrough',
      description: 'Revolutionary technology delivering 1000x faster processing',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      href: '/innovations/quantum-ai-fusion',
      stats: '500+ Companies Using'
    },
    {
      id: 'neural-interface',
      title: '🧠 Advanced Neural Interface',
      description: 'Direct brain-computer interface for seamless AI collaboration',
      icon: Zap,
      color: 'from-cyan-500 to-blue-600',
      href: '/innovations/neural-interface-platform',
      stats: '99.7% Accuracy Rate'
    },
    {
      id: 'autonomous-systems',
      title: '🤖 Fully Autonomous AI Systems',
      description: 'Self-evolving AI that learns and adapts independently',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-600',
      href: '/innovations/autonomous-ai-systems',
      stats: '300% Average ROI'
    }
  ];

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ai-innovation-banner-dismissed', 'true');
  };

  if (isDismissed || !isVisible) return null;

  const currentSlideData = slides[currentSlide];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Left Content */}
            <div className="flex items-center space-x-4 flex-1">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
                <span className="font-bold text-sm bg-yellow-300 text-purple-900 px-3 py-1 rounded-full">
                  NEW
                </span>
              </div>
              
              {/* Animated Content */}
              <div className="flex-1 min-w-0">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center space-x-4"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${currentSlideData.color} bg-opacity-20`}>
                    <currentSlideData.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-sm sm:text-base truncate">
                      {currentSlideData.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-100 truncate">
                      {currentSlideData.description}
                    </p>
                  </div>
                  <div className="hidden sm:block text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                    {currentSlideData.stats}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-3 ml-4">
              <Link
                href={currentSlideData.href}
                className="hidden sm:flex items-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-all duration-200 group"
              >
                <span className="text-sm font-semibold">Explore Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/innovations"
                className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
              >
                View All
              </Link>
              
              <button
                onClick={handleDismiss}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
                aria-label="Dismiss banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="sm:hidden pb-4">
            <Link
              href={currentSlideData.href}
              className="flex items-center justify-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-all duration-200 w-full"
            >
              <span className="text-sm font-semibold">Explore {currentSlideData.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-white bg-opacity-20">
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-300 to-orange-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear" }}
            key={currentSlide}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AIInnovationPromotionBanner2025;