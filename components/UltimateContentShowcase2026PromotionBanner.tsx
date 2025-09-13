'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Star,
  TrendingUp,
  Users,
  Clock,
  BookOpen,
  Brain,
  Zap,
  Cpu,
  Eye,
  ChevronRight,
  X,
  CheckCircle,
  Rocket,
  Target,
  Lightbulb
} from 'lucide-react';

const UltimateContentShowcase2026PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-advance slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "AI Breakthroughs 2026",
      subtitle: "Quantum-Neural Fusion Technology",
      description: "Revolutionary AI that combines quantum computing with neural networks for unprecedented processing power.",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      stats: "10,000x faster processing",
      cta: "Explore AI Breakthroughs"
    },
    {
      title: "Automation Solutions",
      subtitle: "Autonomous Business Operations",
      description: "Complete business process automation with AI-powered decision making and intelligent optimization.",
      icon: Zap,
      color: "from-blue-600 to-cyan-600",
      stats: "95% efficiency increase",
      cta: "Discover Automation"
    },
    {
      title: "Future Predictions",
      subtitle: "AI Singularity Timeline 2030-2035",
      description: "Comprehensive analysis of when and how AI will achieve technological singularity.",
      icon: Eye,
      color: "from-emerald-600 to-teal-600",
      stats: "Expert predictions",
      cta: "View Predictions"
    }
  ];

  const features = [
    "500+ Expert Articles",
    "Live Webinars Weekly",
    "Interactive Content",
    "AI-Powered Recommendations"
  ];

  if (!isVisible || isDismissed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/400')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-blue-900/30" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          {/* Close Button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Content */}
          <div className="flex-1 pr-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium mb-4"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              NEW: Ultimate Content Showcase 2026
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Revolutionary
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Content Hub
                </span>
              </h2>
              
              <p className="text-lg text-gray-300 mb-6 max-w-2xl">
                Discover the most advanced AI breakthroughs, automation solutions, and future predictions 
                that will shape the next decade of technological innovation.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center text-sm text-gray-300"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/ultimate-content-showcase-2026"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 group"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Explore Content Hub
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/newsletter"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Get Notified
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Carousel */}
          <div className="w-96 h-64 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 p-6"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${slides[currentSlide].color} mr-4`}>
                    <slides[currentSlide].icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{slides[currentSlide].title}</h3>
                    <p className="text-sm text-gray-300">{slides[currentSlide].subtitle}</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                  {slides[currentSlide].description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-purple-300">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {slides[currentSlide].stats}
                  </div>
                  
                  <Link
                    href={`/content/${slides[currentSlide].title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-purple-300 hover:text-purple-200 transition-colors flex items-center"
                  >
                    {slides[currentSlide].cta}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-purple-400 w-6' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 pt-6 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-gray-400">Expert Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">50K+</div>
              <div className="text-sm text-gray-400">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">4.9</div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-400">Content Updates</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UltimateContentShowcase2026PromotionBanner;