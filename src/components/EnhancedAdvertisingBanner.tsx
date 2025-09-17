import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedAdvertisingBanner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const banners = [
    {
      id: 1,
      title: "🚀 Revolutionary AI Breakthrough 2026",
      subtitle: "Experience the Future of Technology",
      description: "Discover our latest AI innovations that are transforming industries and reshaping human potential",
      cta: "Explore Now",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🧠",
      features: ["Quantum AI", "Neural Interfaces", "Conscious Computing"]
    },
    {
      id: 2,
      title: "⚛️ Quantum Computing Revolution",
      subtitle: "Unlock Exponential Processing Power",
      description: "Harness the power of quantum computing for unprecedented speed and problem-solving capabilities",
      cta: "Go Quantum",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      icon: "⚡",
      features: ["1000x Speed", "Complex Simulation", "Secure Encryption"]
    },
    {
      id: 3,
      title: "🧬 Neural Interface Technology",
      subtitle: "Bridge Mind and Machine",
      description: "Direct neural interfaces that enable thought-based control and enhanced cognitive abilities",
      cta: "Connect Now",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: "🧬",
      features: ["Thought Control", "Memory Enhancement", "Neural Networking"]
    },
    {
      id: 4,
      title: "🌟 Ultimate Tech Showcase 2026",
      subtitle: "The Future is Here",
      description: "Comprehensive showcase of next-generation technologies that will define the next decade",
      cta: "Explore All",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      icon: "🌟",
      features: ["AI Revolution", "Quantum Leap", "Neural Breakthrough"]
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBanner}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`bg-gradient-to-r ${banners[currentBanner].gradient} rounded-2xl p-8 text-white relative overflow-hidden`}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* Content */}
              <div className="flex-1 mb-8 lg:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 animate-pulse"
                >
                  ✨ BREAKTHROUGH TECHNOLOGY • JANUARY 2026
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                >
                  {banners[currentBanner].title}
                </motion.h2>
                
                <motion.h3
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-2xl lg:text-3xl font-semibold mb-4 text-white/90"
                >
                  {banners[currentBanner].subtitle}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-xl text-white/80 mb-6 max-w-2xl"
                >
                  {banners[currentBanner].description}
                </motion.p>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="flex flex-wrap gap-3 mb-8"
                >
                  {banners[currentBanner].features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30"
                    >
                      {feature}
                    </span>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg hover:scale-105">
                    {banners[currentBanner].cta} →
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                    Learn More
                  </button>
                </motion.div>
              </div>

              {/* Visual Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex-shrink-0 ml-8"
              >
                <div className="relative">
                  <div className="text-9xl mb-4 text-center animate-bounce">
                    {banners[currentBanner].icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-xl"></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentBanner
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Action Buttons */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          ⏸️
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          ⏭️
        </motion.button>
      </div>
    </div>
  );
};

export default EnhancedAdvertisingBanner;