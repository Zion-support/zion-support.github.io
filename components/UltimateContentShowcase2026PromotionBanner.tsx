'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  Star, 
  TrendingUp, 
  ChevronRight,
  Play,
  BookOpen,
  X,
  ArrowRight,
  Clock,
  Users,
  Award
} from 'lucide-react';

const UltimateContentShowcase2026PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotionalContent = [
    {
      title: "🚀 Revolutionary AI 2026 Content Showcase",
      subtitle: "Discover breakthrough technologies delivering 10,000%+ ROI",
      cta: "Explore Now",
      link: "/ultimate-content-showcase-2026",
      color: "from-purple-600 to-pink-600",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "🧠 Quantum Neural Fusion Technology",
      subtitle: "Breakthrough AI achieving 99.9% accuracy in complex problem solving",
      cta: "Learn More",
      link: "/ai-2026-quantum-neural-fusion",
      color: "from-blue-600 to-cyan-600",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "⚡ Autonomous Business Operations",
      subtitle: "Complete automation with 95% cost reduction and self-healing systems",
      cta: "Get Started",
      link: "/ai-2026-autonomous-operations",
      color: "from-green-600 to-emerald-600",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "🎯 AI 2026-2030 Predictions",
      subtitle: "Exclusive insights into the future of artificial intelligence",
      cta: "View Predictions",
      link: "/ai-2026-2030-future-predictions",
      color: "from-orange-600 to-red-600",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const stats = [
    { label: "ROI Delivered", value: "10,000%+", icon: <TrendingUp className="w-4 h-4" /> },
    { label: "Accuracy Rate", value: "99.9%", icon: <Award className="w-4 h-4" /> },
    { label: "Global Users", value: "50,000+", icon: <Users className="w-4 h-4" /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Main Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <div className="flex items-center gap-2">
                  {promotionalContent[currentSlide].icon}
                  <span className="text-sm font-semibold text-purple-300">
                    NEW CONTENT 2026
                  </span>
                </div>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {promotionalContent[currentSlide].title}
                  </h2>
                  <p className="text-lg text-gray-300 mb-4">
                    {promotionalContent[currentSlide].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="text-purple-400">{stat.icon}</div>
                    <span className="text-white font-semibold">{stat.value}</span>
                    <span className="text-gray-400">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href={promotionalContent[currentSlide].link}
                className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${promotionalContent[currentSlide].color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                {promotionalContent[currentSlide].cta}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                href="/ultimate-content-showcase-2026"
                className="inline-flex items-center px-6 py-3 border-2 border-purple-400 text-purple-300 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                View All Content
              </Link>

              <Link
                href="/ai-2026-2030-future-predictions"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Predictions
              </Link>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-4">
            <div className="flex gap-2">
              {promotionalContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-purple-400 w-8' 
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-4 left-4 text-purple-400 animate-bounce">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute bottom-4 right-4 text-pink-400 animate-pulse">
          <Rocket className="w-6 h-6" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UltimateContentShowcase2026PromotionBanner;