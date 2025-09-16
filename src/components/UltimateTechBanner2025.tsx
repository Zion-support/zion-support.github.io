import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateTechBanner2025: React.FC = () => {
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
      title: "🚀 ULTIMATE TECH SHOWCASE 2025",
      subtitle: "Experience Revolutionary Technologies",
      description: "Interactive demos, real-time processing, and cutting-edge innovations",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/90 to-pink-900/90"
    },
    {
      title: "🤖 AI REVOLUTION 2025",
      subtitle: "Autonomous AI Agents",
      description: "99.9% accuracy, real-time processing, predictive analytics",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900/90 to-blue-900/90"
    },
    {
      title: "⚡ QUANTUM BREAKTHROUGH",
      subtitle: "Quantum Computing Power",
      description: "Exponential speed, unbreakable security, molecular simulation",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/90 to-teal-900/90"
    }
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

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative overflow-hidden rounded-2xl mb-12"
    >
      <div className={`bg-gradient-to-r ${slides[currentSlide].bgGradient} backdrop-blur-sm`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 p-8 md:p-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-6 animate-pulse">
                  🌟 NEW: BREAKTHROUGH TECHNOLOGY • JANUARY 2025
                </div>
                
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                  {slides[currentSlide].title}
                </h2>
                
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white/90">
                  {slides[currentSlide].subtitle}
                </h3>
                
                <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
                  {slides[currentSlide].description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${slides[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                  >
                    Explore Now →
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg"
                  >
                    Watch Demo
                  </motion.button>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">
                        {currentSlide === 0 && "🚀"}
                        {currentSlide === 1 && "🤖"}
                        {currentSlide === 2 && "⚡"}
                      </div>
                      <div className="text-2xl font-bold text-white mb-2">
                        Interactive Demo
                      </div>
                      <div className="text-white/80">
                        Click to experience the future
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-2xl"
                  >
                    ⭐
                  </motion.div>
                  
                  <motion.div
                    animate={{ 
                      y: [0, 10, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-xl"
                  >
                    💎
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Auto-advance indicator */}
      <div className="absolute bottom-4 right-4">
        <div className="flex items-center space-x-2 text-white/80 text-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Auto-advancing in 4s</span>
        </div>
      </div>
    </motion.div>
  );
};

export default UltimateTechBanner2025;