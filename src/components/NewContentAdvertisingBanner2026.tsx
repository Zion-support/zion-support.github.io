import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Clock, Users, Zap } from 'lucide-react';

const NewContentAdvertisingBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const newContentHighlights = [
    {
      id: 1,
      title: "Revolutionary AI Healthcare Breakthroughs",
      description: "Discover how AI is transforming healthcare with personalized medicine and real-time diagnostics",
      category: "Healthcare AI",
      readTime: "11 min read",
      featured: true,
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Quantum Computing Business Revolution",
      description: "Quantum computing is transforming how businesses solve complex problems and process massive datasets",
      category: "Quantum Computing",
      readTime: "9 min read",
      featured: true,
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Autonomous AI Systems Future",
      description: "Self-managing AI systems revolutionizing business operations with unprecedented efficiency",
      category: "Autonomous Systems",
      readTime: "10 min read",
      featured: true,
      icon: <Users className="w-6 h-6 text-purple-500" />,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces enabling unprecedented human-computer interaction",
      category: "Neural Interfaces",
      readTime: "12 min read",
      featured: true,
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContentHighlights.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentHighlight = newContentHighlights[currentSlide];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium mb-4"
          >
            <Star className="w-4 h-4 mr-2" />
            NEW CONTENT ALERT
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Just Published
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Discover the latest breakthroughs in AI, quantum computing, neural interfaces, and autonomous systems
          </motion.p>
        </div>

        {/* Featured content carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${currentHighlight.gradient} flex items-center justify-center text-white`}>
                    {currentHighlight.icon}
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                      {currentHighlight.category}
                    </span>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {currentHighlight.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {currentHighlight.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg mb-4">
                    {currentHighlight.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <a href="/pages/AutonomousAgentsInProduction2025" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                      Read Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="/blog" className="px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-all duration-300">
                      Explore All Content
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {newContentHighlights.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">7+</div>
            <div className="text-gray-300 text-sm">New Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">5</div>
            <div className="text-gray-300 text-sm">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">50K+</div>
            <div className="text-gray-300 text-sm">Words</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-gray-300 text-sm">Featured</div>
          </div>
        </motion.div>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewContentAdvertisingBanner2026;