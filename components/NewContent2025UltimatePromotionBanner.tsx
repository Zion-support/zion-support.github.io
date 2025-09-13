'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Zap, TrendingUp, Users, Award, X } from 'lucide-react';

const NewContent2025UltimatePromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "🚀 Revolutionary AI Breakthrough",
      subtitle: "Experience the future of automation",
      cta: "Explore Now",
      href: "/ai-2025-ultimate-breakthrough",
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "⚡ 500% ROI Guaranteed",
      subtitle: "Transform your business today",
      cta: "Get Started",
      href: "/contact",
      color: "from-green-600 to-blue-600"
    },
    {
      title: "🏆 Award-Winning Technology",
      subtitle: "Trusted by 10,000+ companies",
      cta: "Learn More",
      href: "/ai-2025-ultimate-breakthrough",
      color: "from-purple-600 to-pink-600"
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
        className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1 flex items-center space-x-4">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium text-white">NEW</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {slides[currentSlide].subtitle}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                href={slides[currentSlide].href}
                className={`inline-flex items-center px-6 py-2 bg-gradient-to-r ${slides[currentSlide].color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
              >
                {slides[currentSlide].cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              
              <button
                onClick={() => setIsVisible(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-2 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-2 left-4 opacity-20">
          <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
        </div>
        <div className="absolute top-2 right-4 opacity-20">
          <TrendingUp className="w-4 h-4 text-green-400 animate-pulse" />
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-20">
          <Users className="w-4 h-4 text-blue-400 animate-pulse" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContent2025UltimatePromotionBanner;