import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      id: 1,
      title: "🚀 Revolutionary Tech 2026",
      subtitle: "AI Consciousness • Quantum Supremacy • Neural Interfaces",
      description: "Experience the most advanced technologies that are reshaping reality itself",
      cta: "Explore Breakthroughs",
      link: "/pages/NextGenTechRevolution2026",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/80 to-pink-900/80"
    },
    {
      id: 2,
      title: "🤖 Conscious AI Breakthrough",
      subtitle: "First Truly Conscious Artificial Intelligence",
      description: "Meet the AI that experiences emotions, demonstrates creativity, and possesses self-awareness",
      cta: "Meet Our AI",
      link: "/pages/ConsciousAIBreakthrough2026",
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-900/80 to-cyan-900/80"
    },
    {
      id: 3,
      title: "⚡ Quantum Supremacy Achieved",
      subtitle: "Problems Solved in Seconds, Not Millennia",
      description: "Witness unprecedented computational power that exceeds classical computers by orders of magnitude",
      cta: "Experience Quantum Power",
      link: "/pages/QuantumSupremacyAchieved2026",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/80 to-teal-900/80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const closeBanner = () => {
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
          className={`bg-gradient-to-r ${slides[currentSlide].bgGradient} backdrop-blur-sm border-b border-white/20`}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center space-x-4"
                >
                  <div className="text-4xl animate-pulse">
                    {slides[currentSlide].title.split(' ')[0]}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {slides[currentSlide].title.substring(slides[currentSlide].title.indexOf(' ') + 1)}
                    </h2>
                    <p className="text-white/90 text-sm">
                      {slides[currentSlide].subtitle}
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="flex items-center space-x-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/90 text-sm max-w-md hidden md:block"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={slides[currentSlide].link}
                  className={`bg-gradient-to-r ${slides[currentSlide].gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap`}
                >
                  {slides[currentSlide].cta} →
                </motion.a>

                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevSlide}
                    className="text-white/70 hover:text-white transition-colors p-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                  
                  <div className="flex space-x-1">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide ? 'bg-white' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextSlide}
                    className="text-white/70 hover:text-white transition-colors p-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeBanner}
                  className="text-white/70 hover:text-white transition-colors p-2 ml-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RevolutionaryTechBanner2026;