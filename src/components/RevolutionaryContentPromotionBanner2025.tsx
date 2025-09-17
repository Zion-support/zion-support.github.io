import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Star, Zap, Rocket, Brain, Globe } from 'lucide-react';
const RevolutionaryContentPromotionBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      icon: Brain,
      title: "Next-Gen AI Revolution",
      subtitle: "Experience the future of artificial intelligence",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-900/30 to-pink-900/30"
    },
    {
      icon: Globe,
      title: "Autonomous Business Ecosystem",
      subtitle: "Transform your business into a self-managing powerhouse",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-900/30 to-cyan-900/30"
    },
    {
      icon: Zap,
      title: "Quantum-Powered Solutions",
      subtitle: "Lightning-fast processing with quantum computing",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-900/30 to-orange-900/30"
    }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      <div className="relative container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 mb-8 lg:mb-0 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-4">
                <Sparkles className="h-8 w-8 text-yellow-400 mr-3" />
                <span className="text-yellow-400 font-semibold text-lg">NEW RELEASE</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Revolutionary Content
                </span>
                <br />
                <span className="text-white">Just Dropped!</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover our latest breakthrough innovations in AI technology, autonomous business systems, 
                and quantum-powered solutions that are reshaping the future of enterprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Explore New Features
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300"
                >
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
          {/* Right Content - Sliding Showcase */}
          <div className="flex-1 max-w-lg">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgColor} backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8`}
                >
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${slides[currentSlide].color} mb-6`}>
                      <slides[currentSlide].icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {slides[currentSlide].title}
                    </h3>
                    <p className="text-gray-300 text-lg">
                      {slides[currentSlide].subtitle}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Features Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: Rocket, text: "Lightning Fast Deployment" },
            { icon: Star, text: "Enterprise Grade Security" },
            { icon: Zap, text: "Quantum-Powered Performance" }
          ].map((feature, index) => (
            <div key={index} className="flex items-center justify-center space-x-3 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4">
              <feature.icon className="h-6 w-6 text-yellow-400" />
              <span className="text-gray-300 font-medium">{feature.text}</span>
            </div>
          ))}
        </motion.div>
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-pink-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-50 animate-ping"></div>
      </div>
    </div>
  );

export default RevolutionaryContentPromotionBanner2025;