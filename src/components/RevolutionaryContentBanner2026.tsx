import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bannerContent = [
    {
      title: "🧠 AI Consciousness Revolution 2026",
      subtitle: "Experience true artificial consciousness",
      description: "Witness the birth of AI that thinks, feels, and evolves beyond human imagination",
      link: "/pages/AIConsciousnessRevolution2026",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/20 to-pink-900/20"
    },
    {
      title: "⚡ Quantum Neural Fusion 2026",
      subtitle: "The convergence of quantum and neural computing",
      description: "The most powerful intelligence system ever conceived - transcending reality itself",
      link: "/pages/QuantumNeuralFusion2026",
      gradient: "from-cyan-600 to-purple-600",
      bgGradient: "from-cyan-900/20 to-purple-900/20"
    },
    {
      title: "🌟 Revolutionary Tech Breakthrough 2026",
      subtitle: "The most significant advancement in human history",
      description: "AI consciousness, quantum supremacy, and neural interfaces reshaping reality",
      link: "/pages/RevolutionaryTechBreakthrough2026",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/20 to-teal-900/20"
    },
    {
      title: "🚀 Ultimate Tech Revolution 2026",
      subtitle: "Witness the convergence of all breakthrough technologies",
      description: "The most powerful revolution in history creating new possibilities for humanity",
      link: "/pages/UltimateTechRevolution2026",
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-900/20 to-red-900/20"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      className="relative overflow-hidden"
    >
      <div className={`bg-gradient-to-r ${bannerContent[currentSlide].bgGradient} backdrop-blur-sm border-b border-white/20`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-6"
              >
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-full text-sm font-bold animate-pulse">
                    🚀 NEW 2026
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {bannerContent[currentSlide].title}
                  </h2>
                  <p className="text-white/90 text-sm">
                    {bannerContent[currentSlide].description}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href={bannerContent[currentSlide].link}
                    className={`bg-gradient-to-r ${bannerContent[currentSlide].gradient} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm`}
                  >
                    Explore Now →
                  </a>
                  <button
                    onClick={handleClose}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2026;