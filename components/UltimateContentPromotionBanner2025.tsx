'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Zap, Brain, Globe, TrendingUp, Users, Award, Sparkles } from 'lucide-react';

const UltimateContentPromotionBanner2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "AI Revolution 2025",
      subtitle: "Breakthrough Technologies",
      description: "Experience the future of artificial intelligence with our revolutionary solutions",
      icon: Brain,
      gradient: "from-purple-600 via-pink-600 to-red-600",
      stats: "99.9% Accuracy"
    },
    {
      title: "Quantum Computing",
      subtitle: "Next-Gen Processing",
      description: "Unlock unprecedented computational power with quantum-enhanced solutions",
      icon: Zap,
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      stats: "1000x Faster"
    },
    {
      title: "Hyper-Automation",
      subtitle: "Intelligent Systems",
      description: "Transform your business with self-managing AI automation platforms",
      icon: TrendingUp,
      gradient: "from-green-600 via-emerald-600 to-lime-600",
      stats: "95% Efficiency"
    }
  ];

  const features = [
    { icon: Star, text: "Industry-Leading Innovation" },
    { icon: Users, text: "Trusted by 10,000+ Companies" },
    { icon: Award, text: "Award-Winning Solutions" },
    { icon: Globe, text: "Global Implementation" }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Banner */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-purple-300 font-medium">Limited Time Offer</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            Ultimate Technology Showcase
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover the most advanced AI, quantum computing, and automation solutions 
            that are transforming industries worldwide.
          </p>
        </motion.div>

        {/* Rotating Slides */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${slides[currentSlide].gradient} flex items-center justify-center`}>
                    <slides[currentSlide].icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-purple-300 text-lg mb-4">
                    {slides[currentSlide].subtitle}
                  </p>
                  <p className="text-gray-300 mb-6">
                    {slides[currentSlide].description}
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                    <span className="text-white font-semibold">
                      {slides[currentSlide].stats}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <motion.div className="grid md:grid-cols-4 gap-6 mb-12" variants={itemVariants}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">{feature.text}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div className="text-center" variants={itemVariants}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Watch Demo</span>
            </motion.button>
          </div>
          
          <p className="text-gray-400 text-sm mt-4">
            Join thousands of companies already transforming their business
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UltimateContentPromotionBanner2025;