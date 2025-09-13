'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Award,
  CheckCircle,
  Play,
  X,
  ChevronRight
} from 'lucide-react';

const UltimateContentPromotionBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechCorp Inc.",
      role: "CTO",
      content: "Zion Tech Group transformed our entire infrastructure. 300% ROI in just 6 months!",
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "InnovateLabs",
      role: "CEO",
      content: "The AI automation solutions saved us 40 hours per week. Absolutely revolutionary!",
      avatar: "MR"
    },
    {
      name: "Dr. Emily Watson",
      company: "DataFlow Systems",
      role: "Head of Engineering",
      content: "Best technology partner we've ever worked with. Their solutions are game-changing.",
      avatar: "EW"
    }
  ];

  const features = [
    "AI-Powered Automation",
    "Cloud Infrastructure",
    "Micro SaaS Solutions",
    "24/7 Expert Support"
  ];

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              {/* Main Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                  >
                    <Sparkles className="w-5 h-5 text-white" />
                  </motion.div>
                  <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    🚀 NEW: Ultimate Content Showcase 2025
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Discover Revolutionary AI Solutions
                </h2>
                <p className="text-lg opacity-90 mb-4">
                  Transform your business with cutting-edge technology. Join 10,000+ companies already growing with us.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm"
                    >
                      <CheckCircle className="w-4 h-4" />
                      {feature}
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    Explore Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                    <Users className="w-4 h-4" />
                    Schedule Demo
                  </button>
                </div>
              </div>

              {/* Testimonial Carousel */}
              <div className="hidden lg:block ml-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-80">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    <div>
                      <div className="font-bold">{testimonials[currentTestimonial].name}</div>
                      <div className="text-sm opacity-80">{testimonials[currentTestimonial].role}</div>
                      <div className="text-sm opacity-80">{testimonials[currentTestimonial].company}</div>
                    </div>
                  </div>
                  
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentTestimonial}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="text-sm leading-relaxed mb-4"
                    >
                      "{testimonials[currentTestimonial].content}"
                    </motion.p>
                  </AnimatePresence>

                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Animated Elements */}
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-1/2 right-10 w-2 h-2 bg-white/40 rounded-full"
          />
          <motion.div
            animate={{ 
              x: [0, -80, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/3 left-20 w-1 h-1 bg-white/30 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UltimateContentPromotionBanner2025;