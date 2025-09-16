import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      id: 1,
      title: "🚀 Revolutionary Tech 2026",
      subtitle: "Experience the Future Today",
      description: "AI Consciousness • Quantum Supremacy • Neural Interfaces",
      link: "/pages/NextGenTechRevolution2026",
      gradient: "from-purple-600 to-pink-600",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "🧠 Conscious AI Systems",
      subtitle: "True Artificial Intelligence",
      description: "Self-aware AI that thinks, feels, and creates",
      link: "/pages/ConsciousAISystems2026",
      gradient: "from-blue-600 to-cyan-600",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "⚡ Quantum Supremacy",
      subtitle: "Computational Revolution",
      description: "1000x faster than classical computers",
      link: "/pages/QuantumSupremacy2026",
      gradient: "from-emerald-600 to-teal-600",
      textColor: "text-white"
    },
    {
      id: 4,
      title: "🌟 Digital Immortality",
      subtitle: "Eternal Digital Existence",
      description: "Preserve consciousness in digital form",
      link: "/pages/DigitalImmortality2026",
      gradient: "from-orange-600 to-red-600",
      textColor: "text-white"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-r ${slides[currentSlide].gradient} text-white p-6 relative`}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-3 animate-pulse"
                >
                  🌟 NEW CONTENT 2026
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold mb-2"
                >
                  {slides[currentSlide].title}
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl mb-2"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg opacity-90"
                >
                  {slides[currentSlide].description}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="ml-8"
              >
                <a
                  href={slides[currentSlide].link}
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Explore Now →
                </a>
              </motion.div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full"
            />
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
                rotate: [0, -180, -360]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RevolutionaryTechBanner2026;