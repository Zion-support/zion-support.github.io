'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Target, TrendingUp, Users, Star, Clock } from 'lucide-react';

const RevolutionaryContentBanner2025 = () => {
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
      title: "🚀 AI 2025 Breakthrough Revolution",
      subtitle: "Discover the future of artificial intelligence",
      description: "Explore cutting-edge AI innovations that are reshaping industries and transforming how we work, live, and create.",
      cta: "Explore Breakthroughs",
      href: "/ai-2025-breakthroughs",
      gradient: "from-blue-600 via-purple-600 to-indigo-600",
      icon: "🧠"
    },
    {
      title: "⚡ Quantum-Neural Fusion",
      subtitle: "The next frontier in computing",
      description: "Witness the convergence of quantum computing and neural networks, creating unprecedented computational power.",
      cta: "Learn More",
      href: "/quantum-neural-fusion",
      gradient: "from-purple-600 via-pink-600 to-rose-600",
      icon: "⚛️"
    },
    {
      title: "🏆 Enterprise AI Success Stories",
      subtitle: "Real results from real companies",
      description: "See how Fortune 500 companies achieved $50M+ savings and 300% ROI through strategic AI implementation.",
      cta: "View Case Studies",
      href: "/case-studies",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: "💼"
    }
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Active Users" },
    { icon: TrendingUp, value: "300%", label: "Average ROI" },
    { icon: Star, value: "4.9/5", label: "User Rating" },
    { icon: Clock, value: "24/7", label: "Support" }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8">
            <Sparkles className="w-6 h-6 text-purple-400 mr-3" />
            <span className="text-purple-200 font-semibold text-lg">Revolutionary Content 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the most advanced AI solutions, breakthrough innovations, and proven strategies 
            that are revolutionizing industries worldwide. Join the future today.
          </p>
        </motion.div>

        {/* Main Content Slider */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-r ${slides[currentSlide].gradient} p-12 md:p-16`}
              >
                <div className="max-w-4xl mx-auto text-center">
                  <div className="text-6xl mb-6">{slides[currentSlide].icon}</div>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {slides[currentSlide].title}
                  </h2>
                  <h3 className="text-2xl md:text-3xl text-white/90 mb-6">
                    {slides[currentSlide].subtitle}
                  </h3>
                  <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                    {slides[currentSlide].description}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={slides[currentSlide].href}
                      className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
                    >
                      {slides[currentSlide].cta}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
            <p className="text-gray-300">
              Experience blazing-fast AI processing with our optimized infrastructure and cutting-edge algorithms.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Precision Focused</h3>
            <p className="text-gray-300">
              Our AI solutions are designed with surgical precision to deliver exactly what your business needs.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Innovation First</h3>
            <p className="text-gray-300">
              Stay ahead of the curve with our constantly evolving AI technology and breakthrough innovations.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-12 border border-purple-500/30">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join the Revolution?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't miss out on the most exciting developments in AI and technology. 
              Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
                >
                  <Target className="w-5 h-5 mr-3" />
                  Get Started Now
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/resources"
                  className="inline-flex items-center border-2 border-purple-500 text-purple-300 px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  <Zap className="w-5 h-5 mr-3" />
                  Download Resources
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;