'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Zap, 
  Brain,
  Rocket,
  Sparkles,
  Award,
  CheckCircle,
  Play,
  Users,
  Globe
} from 'lucide-react';

const UltimateContentShowcase2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "AI Solutions 2025",
      subtitle: "Revolutionary AI Platform",
      description: "Transform your business with cutting-edge AI automation",
      icon: Brain,
      color: "from-purple-600 to-blue-600",
      stats: "50K+ Users"
    },
    {
      title: "Quantum Computing",
      subtitle: "Quantum Supremacy Platform",
      description: "Achieve unprecedented processing power",
      icon: Zap,
      color: "from-blue-600 to-cyan-600",
      stats: "1000+ Qubits"
    },
    {
      title: "Future Technologies",
      subtitle: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces",
      icon: Rocket,
      color: "from-green-600 to-emerald-600",
      stats: "10K+ Users"
    }
  ];

  const features = [
    "99.9% Accuracy",
    "10x Efficiency",
    "Real-time Processing",
    "Enterprise Ready"
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center opacity-20" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
        
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-300 text-sm font-medium">2025 Ultimate Showcase</span>
              <TrendingUp className="w-4 h-4 text-green-400 ml-2" />
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Revolutionary <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Technology</span> Showcase
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Discover the most advanced AI, quantum computing, and future technology solutions that are reshaping the world in 2025 and beyond.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/ultimate-content-showcase-2025"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group"
              >
                <Award className="w-5 h-5 mr-2" />
                Explore Showcase
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-all duration-300 group"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-400">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10x</div>
                <div className="text-sm text-gray-400">Efficiency Gain</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Carousel Container */}
            <div className="relative h-96 overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              {slides.map((slide, index) => {
                const Icon = slide.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                      opacity: currentSlide === index ? 1 : 0,
                      x: currentSlide === index ? 0 : 100,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 p-8 flex flex-col justify-center items-center text-center ${
                      currentSlide === index ? 'block' : 'hidden'
                    }`}
                  >
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${slide.color} flex items-center justify-center mb-6`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-2">{slide.title}</h3>
                    <h4 className="text-lg text-purple-300 mb-4">{slide.subtitle}</h4>
                    <p className="text-gray-300 mb-6 max-w-sm">{slide.description}</p>
                    
                    {/* Stats */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10">
                      <Users className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-white font-medium">{slide.stats}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-purple-500 w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center"
            >
              <Star className="w-8 h-8 text-purple-400" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center"
            >
              <Globe className="w-6 h-6 text-blue-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025PromotionBanner;