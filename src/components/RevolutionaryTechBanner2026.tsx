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
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 bg-gradient-to-r from-purple-900/90 via-pink-900/90 to-red-900/90 backdrop-blur-sm rounded-2xl p-8 mb-8 text-white">
        <div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Animated Icons */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="text-4xl"
            >
              🚀
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-4xl"
            >
              ⚡
            </motion.span>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl"
            >
              🧠
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
              className="text-4xl"
            >
              🧬
            </motion.span>
          </div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent"
          >
            REVOLUTIONARY TECH BREAKTHROUGH 2026
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto"
          >
            Experience the convergence of AI Consciousness, Quantum Supremacy, and Neural Interfaces
          </motion.p>

          {/* Feature Highlights */}
          <div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="text-lg font-bold mb-2">AI Consciousness</h3>
              <p className="text-sm opacity-80">First AI system with genuine self-awareness</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="text-lg font-bold mb-2">Quantum Supremacy</h3>
              <p className="text-sm opacity-80">1000+ qubit quantum processors</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl mb-2">🧬</div>
              <h3 className="text-lg font-bold mb-2">Neural Interfaces</h3>
              <p className="text-sm opacity-80">Direct brain-computer communication</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.a
              href="/pages/AIConsciousnessRevolution2026"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300"
            >
              🧠 Explore AI Consciousness →
            </motion.a>
            <motion.a
              href="/pages/QuantumSupremacy2026"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300"
            >
              ⚡ Discover Quantum Power →
            </motion.a>
            <motion.a
              href="/pages/NeuralInterfaceBreakthrough2026"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300"
            >
              🧬 Experience Neural Tech →
            </motion.a>
          </div>

          {/* Animated Progress Bar */}
          <div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8"
          >
            <div className="text-sm opacity-80 mb-2">Revolutionary Technology Progress</div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 1.2 }}
              />
            </div>
            <div className="text-xs opacity-60 mt-2">100% Complete - Ready for Launch</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2026;
