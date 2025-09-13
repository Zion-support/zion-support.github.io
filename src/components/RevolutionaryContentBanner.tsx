import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Sparkles, Rocket, Brain, Zap, Target, TrendingUp, Star, ArrowRight } from 'lucide-react';

export const RevolutionaryContentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotionalContent = [
    {
      title: "🚀 AI 2026 Breakthrough Revolution",
      description: "Quantum-neural fusion delivering 10,000x faster processing",
      link: "/ai-2026-breakthrough-content-showcase",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-600 to-pink-600",
      badge: "BREAKTHROUGH"
    },
    {
      title: "💰 $2.3B Revenue Impact Case Study",
      description: "Fortune 500 transformation with our quantum-AI solutions",
      link: "/case-studies/enterprise-quantum-ai-transformation-2026",
      icon: <Target className="w-6 h-6" />,
      color: "from-emerald-600 to-cyan-600",
      badge: "SUCCESS"
    },
    {
      title: "🤖 Autonomous Business Systems 2026",
      description: "Self-healing AI systems for complete business automation",
      link: "/services/autonomous-business-systems-2026",
      icon: <Zap className="w-6 h-6" />,
      color: "from-orange-600 to-red-600",
      badge: "INNOVATION"
    },
    {
      title: "🧠 Neural Interface Revolution",
      description: "Direct brain-computer interface technology breakthrough",
      link: "/blog/neural-interface-revolution-2026",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-blue-600 to-indigo-600",
      badge: "FUTURE"
    },
    {
      title: "🌍 Global AI Implementation Mastery",
      description: "Complete guide to implementing AI across 50+ countries",
      link: "/guides/global-ai-implementation-mastery-2026",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-violet-600 to-purple-600",
      badge: "COMPREHENSIVE"
    }
  ];

  // Auto-rotate slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [promotionalContent.length]);

  if (!isVisible) return null;

  const currentContent = promotionalContent[currentSlide];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-6 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-cyan-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-2 left-10 w-3 h-3 bg-cyan-400/60 rounded-full animate-pulse"></div>
          <div className="absolute top-4 right-20 w-2 h-2 bg-purple-400/60 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-3 left-1/4 w-2.5 h-2.5 bg-pink-400/60 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-6 right-1/3 w-1.5 h-1.5 bg-emerald-400/60 rounded-full animate-pulse delay-3000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Left side - Main announcement */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-spin">
                  <Sparkles className="w-5 h-5 text-black" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    REVOLUTIONARY CONTENT AVAILABLE!
                  </span>
                  <span className="text-xs text-gray-300">Latest AI breakthroughs & innovations</span>
                </div>
              </div>
              
              {/* Desktop slideshow */}
              <div className="hidden lg:flex items-center space-x-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${currentContent.color} group-hover:scale-110 transition-transform duration-200`}>
                      {currentContent.icon}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-sm">{currentContent.title}</div>
                      <div className="text-xs text-gray-300">{currentContent.description}</div>
                    </div>
                    <div className={`px-2 py-1 text-xs font-bold bg-gradient-to-r ${currentContent.color} rounded-full`}>
                      {currentContent.badge}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right side - Actions */}
            <div className="flex items-center space-x-4">
              <Link
                to="/innovative-content-showcase-2026"
                className="hidden sm:inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 text-sm font-semibold shadow-lg hover:shadow-cyan-500/25 group"
              >
                <Star className="w-4 h-4 mr-2" />
                Explore Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to={currentContent.link}
                className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200 text-sm font-semibold border border-white/20"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Latest
              </Link>
              
              <button
                onClick={() => setIsVisible(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200 group"
                aria-label="Close banner"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Mobile content carousel */}
          <div className="lg:hidden mt-6 pt-6 border-t border-white/20">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${currentContent.color}`}>
                      {currentContent.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg">{currentContent.title}</h3>
                        <span className={`px-2 py-1 text-xs font-bold bg-gradient-to-r ${currentContent.color} rounded-full`}>
                          {currentContent.badge}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">{currentContent.description}</p>
                      <div className="flex gap-3">
                        <Link
                          to={currentContent.link}
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-200"
                        >
                          Explore Content
                        </Link>
                        <Link
                          to="/innovative-content-showcase-2026"
                          className="px-4 py-2 border border-white/30 rounded-lg text-white text-sm font-semibold hover:bg-white/20 transition-all duration-200"
                        >
                          View All
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Slide indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {promotionalContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-cyan-400 w-8' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-4 right-10 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-20 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-500"></div>
      </motion.div>
    </AnimatePresence>
  );
};