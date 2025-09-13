'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  ArrowRight,
  Play,
  Star,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Lightbulb,
  X,
  ChevronRight
} from 'lucide-react';

const UltimateContentPromotionBanner2025 = () => {
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
      title: "Revolutionary AI Solutions 2025",
      subtitle: "Transform your business with cutting-edge AI technology",
      features: ["Advanced Machine Learning", "Natural Language Processing", "Computer Vision"],
      color: "from-purple-600 to-blue-600",
      icon: Brain
    },
    {
      title: "Intelligent Automation Platform",
      subtitle: "Streamline operations with smart automation solutions",
      features: ["Workflow Automation", "Document Processing", "Customer Service Bots"],
      color: "from-green-600 to-teal-600",
      icon: Zap
    },
    {
      title: "Cloud Infrastructure Excellence",
      subtitle: "Scalable, secure, and high-performance cloud solutions",
      features: ["Multi-Cloud Strategy", "Auto-Scaling", "Security & Compliance"],
      color: "from-blue-600 to-indigo-600",
      icon: Rocket
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "500+", icon: CheckCircle },
    { label: "Client Satisfaction", value: "99.8%", icon: Star },
    { label: "Years Experience", value: "10+", icon: Award },
    { label: "Team Members", value: "50+", icon: Users }
  ];

  if (isDismissed || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,white)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
          <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            {/* Close Button */}
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Content */}
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  New Content Available
                </div>
                <div className="flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-medium">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Trending Now
                </div>
              </div>

              <div className="flex items-center space-x-8">
                {/* Slide Content */}
                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center space-x-6"
                    >
                      <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${slides[currentSlide].color} flex items-center justify-center text-white`}>
                        <slides[currentSlide].icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                          {slides[currentSlide].title}
                        </h3>
                        <p className="text-white/80 text-lg mb-3">
                          {slides[currentSlide].subtitle}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {slides[currentSlide].features.map((feature, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 rounded-full bg-white/20 text-white text-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Stats */}
                <div className="hidden lg:flex items-center space-x-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-white/70 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center space-x-4">
                  <button className="px-6 py-3 bg-white text-blue-900 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </button>
                  <button className="px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2" />
                    Explore Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white w-8' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-20 text-white/20"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-32 right-32 text-white/20"
          >
            <Zap className="w-6 h-6" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 3, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-20 left-1/3 text-white/20"
          >
            <Rocket className="w-7 h-7" />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UltimateContentPromotionBanner2025;