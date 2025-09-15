'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Star, TrendingUp, Zap } from 'lucide-react';

const MultimodalIntelligence2025PromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('multimodal-intelligence-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && !isDismissed) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentItems.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('multimodal-intelligence-banner-dismissed', 'true');
  };

  const contentItems = [
    {
      title: "Multimodal Intelligence Revolution",
      subtitle: "15,000% ROI in 18 Months",
      description: "Transform your business with AI that processes text, images, audio, video, and sensor data simultaneously",
      metrics: "2,400% efficiency gains",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Fortune 500 Success Story",
      subtitle: "$45.2B Annual Savings",
      description: "See how TechGlobal Industries achieved unprecedented success with multimodal AI implementation",
      metrics: "99.97% accuracy rate",
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-green-600 to-emerald-600"
    },
    {
      title: "Complete Implementation Guide",
      subtitle: "Step-by-Step Roadmap",
      description: "Everything you need to deploy multimodal AI systems with guaranteed ROI success",
      metrics: "94% success rate",
      icon: <Award className="w-6 h-6" />,
      gradient: "from-orange-600 to-red-600"
    }
  ];

  const currentContent = contentItems[currentSlide];

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            {/* Main Content */}
            <div className="flex-1">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-6"
              >
                {/* Icon */}
                <div className={`p-3 rounded-full bg-gradient-to-r ${currentContent.gradient} shadow-lg`}>
                  {currentContent.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {currentContent.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">NEW</span>
                    </div>
                  </div>
                  
                  <p className="text-lg font-semibold text-blue-200 mb-1">
                    {currentContent.subtitle}
                  </p>
                  
                  <p className="text-gray-200 mb-2 max-w-2xl">
                    {currentContent.description}
                  </p>
                  
                  <div className="flex items-center space-x-6">
                    <span className="text-sm font-medium text-green-300 bg-green-900/30 px-3 py-1 rounded-full">
                      {currentContent.metrics}
                    </span>
                    
                    <Link
                      href="/blog/ai-2025-multimodal-intelligence-revolution-ultimate-guide"
                      className="inline-flex items-center text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Explore Now
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="hidden lg:flex items-center space-x-4 ml-8">
              <Link
                href="/case-studies/fortune-500-multimodal-intelligence-15000-roi-success-story"
                className="text-sm text-blue-200 hover:text-white transition-colors duration-300 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg"
              >
                Case Study
              </Link>
              <Link
                href="/resources/multimodal-intelligence-implementation-guide-2025"
                className="text-sm text-blue-200 hover:text-white transition-colors duration-300 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg"
              >
                Implementation Guide
              </Link>
              <Link
                href="/contact"
                className="text-sm text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-4 py-2 rounded-lg font-medium transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="ml-4 p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex items-center justify-center mt-4 space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* ROI Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            15,000% ROI
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-20 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-2000"></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MultimodalIntelligence2025PromotionBanner;