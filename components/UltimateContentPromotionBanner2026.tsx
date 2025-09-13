'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  ArrowRight, 
  X,
  Play,
  BookOpen,
  Star,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';

const UltimateContentPromotionBanner2026 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotionalContent = [
    {
      title: "🚀 Revolutionary AI Breakthroughs 2026",
      subtitle: "Discover the future of artificial intelligence",
      description: "Neural architecture revolution, quantum AI fusion, and emotional intelligence systems",
      cta: "Explore Now",
      color: "from-purple-600 to-blue-600",
      icon: Brain
    },
    {
      title: "⚡ Quantum Computing Supremacy",
      subtitle: "Next-generation computational power",
      description: "Quantum neural networks, unbreakable cryptography, and global quantum internet",
      cta: "Learn More",
      color: "from-cyan-600 to-teal-600",
      icon: Zap
    },
    {
      title: "🤖 Advanced Automation Solutions",
      subtitle: "Transform your business operations",
      description: "Autonomous workflows, predictive maintenance, and intelligent resource allocation",
      cta: "Get Started",
      color: "from-orange-600 to-red-600",
      icon: Rocket
    },
    {
      title: "🔮 Future Predictions 2026-2030",
      subtitle: "What's coming next in technology",
      description: "AI consciousness, neural interfaces, and fully autonomous systems",
      cta: "View Predictions",
      color: "from-green-600 to-emerald-600",
      icon: Star
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const currentContent = promotionalContent[currentSlide];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        </div>

        <div className="relative z-10">
          {/* Main Banner */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${currentContent.color}`}>
                    <currentContent.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-semibold text-purple-300">New Content Available</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  {currentContent.title}
                </h2>
                
                <h3 className="text-xl md:text-2xl text-purple-200 mb-4">
                  {currentContent.subtitle}
                </h3>

                <p className="text-lg text-gray-300 mb-8 max-w-lg">
                  {currentContent.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className={`bg-gradient-to-r ${currentContent.color} text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2 group`}>
                    {currentContent.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-colors duration-300 flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">500+</div>
                    <div className="text-sm text-gray-400">Innovations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">50K+</div>
                    <div className="text-sm text-gray-400">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">99%</div>
                    <div className="text-sm text-gray-400">Success Rate</div>
                  </div>
                </div>
              </motion.div>

              {/* Visual */}
              <motion.div
                key={`visual-${currentSlide}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${currentContent.color} text-white overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-4 rounded-2xl bg-white/20">
                        <currentContent.icon className="w-12 h-12" />
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                        <Award className="w-4 h-4" />
                        Featured
                      </div>
                    </div>

                    <h4 className="text-2xl font-bold mb-4">Interactive Preview</h4>
                    <p className="text-white/90 mb-6">
                      Experience the future of technology with our interactive demonstrations and real-time simulations.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm">Live Demo Available</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-sm">Real-time Updates</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-sm">Interactive Learning</span>
                      </div>
                    </div>

                    <button className="w-full mt-6 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors duration-300 flex items-center justify-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      Explore Content
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 pb-8">
            {promotionalContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-300 z-20"
        >
          <X className="w-6 h-6" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default UltimateContentPromotionBanner2026;