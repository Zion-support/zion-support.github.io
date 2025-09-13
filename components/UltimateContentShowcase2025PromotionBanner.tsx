'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Rocket, 
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  X,
  Play,
  Download,
  Share2,
  Heart,
  MessageCircle,
  BookOpen,
  Lightbulb,
  Code,
  Database,
  Cloud,
  Smartphone,
  Laptop,
  Server,
  Cpu,
  Atom
} from 'lucide-react';

const UltimateContentShowcase2025PromotionBanner = () => {
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
      title: "Revolutionary AI Content Hub 2025",
      subtitle: "Discover Breakthrough Technologies",
      description: "Explore the most advanced AI solutions, quantum computing breakthroughs, and neural interface technologies reshaping the future.",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      stats: "2.3M+ Views • 45K+ Likes"
    },
    {
      title: "Ultimate Automation Solutions",
      subtitle: "Transform Your Business Operations",
      description: "Complete automation platform reducing costs by 85% while increasing productivity by 300% with intelligent AI systems.",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      stats: "1.5M+ Views • 32K+ Likes"
    },
    {
      title: "Quantum Neural Fusion",
      subtitle: "Next-Generation Computing",
      description: "First successful integration of quantum computing with neural networks, achieving 1000x processing speed improvements.",
      icon: Atom,
      color: "from-indigo-500 to-purple-500",
      stats: "1.8M+ Views • 38K+ Likes"
    }
  ];

  const features = [
    { icon: Brain, text: "AI Consciousness Evolution" },
    { icon: Zap, text: "Advanced Automation" },
    { icon: Atom, text: "Quantum Computing" },
    { icon: Cpu, text: "Neural Interfaces" },
    { icon: Rocket, text: "Revolutionary Solutions" },
    { icon: Award, text: "Industry Recognition" }
  ];

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              {/* Left Content */}
              <div className="flex-1 pr-8">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  {/* Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-sm font-medium text-white">New Content Available</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {slides[currentSlide].title}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-lg text-purple-200 font-medium">
                    {slides[currentSlide].subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 text-base max-w-2xl">
                    {slides[currentSlide].description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center text-sm text-gray-400">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    <span>{slides[currentSlide].stats}</span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    {features.slice(0, 3).map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div key={index} className="flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm">
                          <Icon className="w-4 h-4 mr-2" />
                          {feature.text}
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center group">
                      <Play className="w-5 h-5 mr-2" />
                      Explore Content
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Download Guide
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Right Content - Visual */}
              <div className="hidden lg:block flex-shrink-0">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-80 h-48"
                >
                  {/* Main Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${slides[currentSlide].color} flex items-center justify-center`}>
                        {React.createElement(slides[currentSlide].icon, { className: "w-6 h-6 text-white" })}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-white font-bold text-lg">Featured Content</h3>
                        <p className="text-gray-300 text-sm">2025 Breakthrough</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-300">
                        <Users className="w-4 h-4 mr-2" />
                        <span>2.3M+ Active Users</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <Award className="w-4 h-4 mr-2" />
                        <span>Industry Leading</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span>99.9% Success Rate</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Content Engagement</span>
                        <span>95%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className={`h-2 rounded-full bg-gradient-to-r ${slides[currentSlide].color} transition-all duration-1000`} 
                             style={{ width: '95%' }} />
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                  >
                    <Star className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center"
                  >
                    <Rocket className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UltimateContentShowcase2025PromotionBanner;