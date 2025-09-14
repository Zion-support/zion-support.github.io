'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, TrendingUp, Users, Clock, Star, CheckCircle, Zap } from 'lucide-react';

const EnhancedContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "🚀 NEW: AI 2025 Enterprise Automation Guide",
      subtitle: "340% ROI in 90 Days - Real Case Studies",
      cta: "Read Now",
      url: "/blog/ai-2025-enterprise-automation-breakthrough",
      color: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "📊 Fortune 500 Success Story",
      subtitle: "$180M Savings - Complete Case Study",
      cta: "View Case Study",
      url: "/case-studies/fortune-500-ai-transformation-340-percent-roi",
      color: "from-green-600 to-blue-600"
    },
    {
      id: 3,
      title: "📚 ROI Calculator Guide 2025",
      subtitle: "Maximize Your AI Investment Returns",
      cta: "Get Guide",
      url: "/resources/ai-implementation-roi-calculator-guide-2025",
      color: "from-purple-600 to-pink-600"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "340%", label: "Average ROI" },
    { icon: Users, value: "500+", label: "Success Stories" },
    { icon: Clock, value: "90 Days", label: "Implementation" },
    { icon: Star, value: "98%", label: "Client Satisfaction" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('enhanced-content-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('enhanced-content-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentSlideData = slides[currentSlide];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
            <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000" />
            <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-2000" />
            <div className="absolute bottom-8 right-4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-3000" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Left Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-4">
                {/* Main Content */}
                <div className="flex-1">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {currentSlideData.title}
                      </h3>
                      <p className="text-white/90 text-sm mb-2">
                        {currentSlideData.subtitle}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-white/80">
                        {stats.map((stat, index) => (
                          <div key={index} className="flex items-center space-x-1">
                            <stat.icon className="w-3 h-3" />
                            <span className="font-semibold">{stat.value}</span>
                            <span>{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* CTA Button */}
                <div className="flex-shrink-0 ml-4">
                  <Link
                    href={currentSlideData.url}
                    className={`inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 group ${currentSlideData.color}`}
                  >
                    {currentSlideData.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4 ml-6">
              {/* Slide Indicators */}
              <div className="flex space-x-1">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>

              {/* Dismiss Button */}
              <button
                onClick={handleDismiss}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Dismiss banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
          <motion.div
            className="h-full bg-white"
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

export default EnhancedContentPromotionBanner;