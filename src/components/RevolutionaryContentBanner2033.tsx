import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentBanner2033: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      id: 1,
      title: "🚀 Revolutionary Tech 2033",
      subtitle: "Experience the Future of Technology",
      description: "Discover groundbreaking technologies that transcend reality itself",
      cta: "Explore Now →",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/80 to-pink-900/80"
    },
    {
      id: 2,
      title: "🧠 Conscious AI Networks",
      subtitle: "Self-Aware Artificial Intelligence",
      description: "AI systems that think, learn, and evolve independently",
      cta: "Learn More →",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/80 to-blue-900/80"
    },
    {
      id: 3,
      title: "⚛️ Quantum Reality Engine",
      subtitle: "Manipulate Reality Itself",
      description: "Revolutionary quantum computing that can alter the fabric of existence",
      cta: "Discover →",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/80 to-teal-900/80"
    },
    {
      id: 4,
      title: "🌌 Interdimensional Gateway",
      subtitle: "Travel Between Dimensions",
      description: "Technology that allows navigation between realities and dimensions",
      cta: "Enter Gateway →",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-900/80 to-purple-900/80"
    }
  ];

  return (
    <div className="relative overflow-hidden mb-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className={`relative bg-gradient-to-r ${slides[currentSlide].bgColor} backdrop-blur-sm rounded-2xl p-8 md:p-12 text-white`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-white/10 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
          </div>

          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm"
                >
                  ✨ NEW: January 2033
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  {slides[currentSlide].title}
                </motion.h2>
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-xl md:text-2xl font-semibold mb-4 opacity-90"
                >
                  {slides[currentSlide].subtitle}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="text-lg mb-6 opacity-80"
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <button className={`bg-gradient-to-r ${slides[currentSlide].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}>
                    {slides[currentSlide].cta}
                  </button>
                  <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                    Watch Demo
                  </button>
                </motion.div>
              </div>
              
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="relative"
                >
                  <div className="w-full h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4 animate-pulse">
                        {slides[currentSlide].id === 1 && "🚀"}
                        {slides[currentSlide].id === 2 && "🧠"}
                        {slides[currentSlide].id === 3 && "⚛️"}
                        {slides[currentSlide].id === 4 && "🌌"}
                      </div>
                      <div className="text-2xl font-bold mb-2">Interactive Demo</div>
                      <div className="text-sm opacity-70">Click to experience</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
                </motion.div>
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
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2033;