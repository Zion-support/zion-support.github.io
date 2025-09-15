import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryPromoBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotionalContent = [
    {
      id: 1,
      title: "🚀 REVOLUTIONARY BREAKTHROUGH 2026",
      subtitle: "Synthetic Intelligence & Quantum-Neural Fusion",
      description: "Experience the future with our groundbreaking new content on Advanced AI Systems, Quantum Computing, and Neural Interface Technology",
      cta: "Explore Now →",
      link: "/pages/NextGenAIRevolution2026",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      bgGradient: "from-purple-600/50 to-pink-600/50"
    },
    {
      id: 2,
      title: "⚛️ QUANTUM COMPUTING REVOLUTION",
      subtitle: "Beyond Classical Physics",
      description: "Discover quantum computing that operates beyond the limits of classical physics, solving impossible problems and unlocking universe mysteries",
      cta: "Go Quantum →",
      link: "/pages/AdvancedQuantumComputing2026",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      bgGradient: "from-cyan-600/50 to-blue-600/50"
    },
    {
      id: 3,
      title: "🧠 NEURAL INTERFACE REVOLUTION",
      subtitle: "Mind-Machine Integration",
      description: "Breakthrough neural interfaces that connect human consciousness with AI systems, enabling direct thought-to-digital communication",
      cta: "Connect Mind →",
      link: "/pages/NeuralInterfaceRevolution2026",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      bgGradient: "from-emerald-600/50 to-teal-600/50"
    },
    {
      id: 4,
      title: "🌌 SPACE TECHNOLOGY INNOVATION",
      subtitle: "Beyond Earth's Boundaries",
      description: "Revolutionary space technologies including quantum propulsion, asteroid mining, and interplanetary communication systems",
      cta: "Explore Space →",
      link: "/pages/SpaceTechInnovation2026",
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
      bgGradient: "from-violet-600/50 to-purple-600/50"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [promotionalContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promotionalContent.length) % promotionalContent.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentContent = promotionalContent[currentSlide];

  if (!isVisible) return null;

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentContent.bgGradient} opacity-90`} />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/neural-network-pattern.svg')] bg-repeat animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-8">
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <motion.h2 
                className="text-4xl font-bold mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {currentContent.title}
              </motion.h2>
              
              <motion.p 
                className="text-xl font-semibold mb-4 text-white/90"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {currentContent.subtitle}
              </motion.p>
              
              <motion.p 
                className="text-lg mb-8 text-white/80 max-w-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {currentContent.description}
              </motion.p>
              
              <motion.button
                className={`bg-gradient-to-r ${currentContent.gradient} text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentContent.cta}
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {promotionalContent.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default RevolutionaryPromoBanner2026;