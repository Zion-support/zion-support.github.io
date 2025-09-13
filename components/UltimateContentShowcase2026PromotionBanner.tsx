'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Zap, 
  Brain, 
  Target,
  Award,
  Globe,
  Rocket,
  Shield,
  Lightbulb,
  ChevronRight,
  Play,
  Download,
  Share2,
  Bookmark,
  Eye,
  Clock,
  X,
  Sparkles,
  Crown,
  Flame
} from 'lucide-react';

const UltimateContentShowcase2026PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const promotionalSlides = [
    {
      id: 1,
      title: "🚀 NEW: Ultimate Content Showcase 2026",
      subtitle: "Revolutionary AI Content Discovery",
      description: "Explore breakthrough AI technologies, quantum computing innovations, and future predictions delivering 10,000%+ ROI insights.",
      cta: "Explore Now",
      ctaLink: "/ultimate-content-showcase-2026",
      color: "from-blue-600 to-purple-600",
      icon: Sparkles,
      stats: "2.3M+ Views"
    },
    {
      id: 2,
      title: "🧠 AI 2026: Neural Consciousness Revolution",
      subtitle: "Latest Breakthrough Content",
      description: "Discover how AI is evolving beyond traditional computing to achieve true neural consciousness and emotional intelligence.",
      cta: "Read More",
      ctaLink: "/ai-2026-neural-consciousness",
      color: "from-green-600 to-teal-600",
      icon: Brain,
      stats: "45.2K+ Likes"
    },
    {
      id: 3,
      title: "⚡ Quantum Neural Fusion: Next Paradigm",
      subtitle: "Revolutionary Computing",
      description: "Explore how quantum computing and neural interfaces are merging to create the most powerful computational system ever conceived.",
      cta: "Learn More",
      ctaLink: "/quantum-neural-fusion-2026",
      color: "from-orange-600 to-red-600",
      icon: Zap,
      stats: "1.8M+ Views"
    },
    {
      id: 4,
      title: "🎯 Autonomous Systems: 10,000% ROI",
      subtitle: "Proven Business Results",
      description: "Real-world case studies showing how autonomous AI systems are delivering unprecedented returns on investment across industries.",
      cta: "See Results",
      ctaLink: "/autonomous-systems-roi",
      color: "from-purple-600 to-indigo-600",
      icon: Target,
      stats: "67.3K+ Likes"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % promotionalSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, promotionalSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promotionalSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promotionalSlides.length) % promotionalSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentSlideData = promotionalSlides[currentSlide];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative z-10">
          {/* Main Banner Content */}
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Crown className="w-4 h-4 text-yellow-400" />
                    <Flame className="w-4 h-4 text-orange-400" />
                    ULTIMATE CONTENT 2026
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    {currentSlideData.title}
                  </h2>
                  
                  <p className="text-xl text-blue-100 font-semibold">
                    {currentSlideData.subtitle}
                  </p>
                  
                  <p className="text-lg text-gray-200 max-w-2xl">
                    {currentSlideData.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center lg:justify-start gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-blue-300" />
                      <span className="text-blue-200">{currentSlideData.stats}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-200">4.9/5 Rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-300" />
                      <span className="text-green-200">50K+ Readers</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
                    <Link
                      href={currentSlideData.ctaLink}
                      className={`bg-gradient-to-r ${currentSlideData.color} text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                      {currentSlideData.cta}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                      href="/ultimate-content-showcase-2026"
                      className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Play className="w-5 h-5" />
                      View All Content
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Visual Element */}
              <div className="flex-shrink-0">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className={`w-64 h-64 bg-gradient-to-br ${currentSlideData.color} rounded-2xl flex items-center justify-center shadow-2xl`}>
                    <currentSlideData.icon className="w-32 h-32 text-white/80" />
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Star className="w-8 h-8 text-yellow-800" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ 
                      y: [0, 10, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Zap className="w-6 h-6 text-green-800" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 pb-6">
            {promotionalSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
          >
            <ChevronRight className="w-8 h-8 rotate-180" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute bottom-4 right-4 text-white/70 hover:text-white transition-colors text-sm"
          >
            {isAutoPlaying ? 'Pause' : 'Play'} Auto
          </button>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UltimateContentShowcase2026PromotionBanner;