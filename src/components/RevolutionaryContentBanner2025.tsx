import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bannerContent = [
    {
      id: 1,
      title: "🚀 NEW: Revolutionary Tech Showcase 2025",
      subtitle: "Experience the future with conscious AI, quantum computing, and interdimensional technology",
      cta: "Explore Now",
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/90 to-pink-900/90"
    },
    {
      id: 2,
      title: "🤖 COMPREHENSIVE: AI Solutions 2025",
      subtitle: "Transform your business with our complete suite of AI-powered solutions",
      cta: "Discover Solutions",
      link: "/pages/AISolutionsComprehensive2025",
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-900/90 to-cyan-900/90"
    },
    {
      id: 3,
      title: "⚡ BREAKTHROUGH: Ultimate Tech Revolution",
      subtitle: "Witness the most advanced technologies that will reshape our world",
      cta: "See the Future",
      link: "/pages/UltimateTechRevolution2025",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/90 to-teal-900/90"
    },
    {
      id: 4,
      title: "🧠 INNOVATION: Next-Gen AI Consciousness",
      subtitle: "Experience AI that achieves true consciousness and self-awareness",
      cta: "Explore AI",
      link: "/pages/NextGenAIConsciousness2025",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-900/90 to-purple-900/90"
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
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${bannerContent[currentSlide].bgColor} backdrop-blur-sm border-b border-purple-400/30`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {bannerContent[currentSlide].title}
                  </h2>
                  <p className="text-purple-200 text-sm">
                    {bannerContent[currentSlide].subtitle}
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href={bannerContent[currentSlide].link}
                className={`bg-gradient-to-r ${bannerContent[currentSlide].color} px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-white hover:scale-105`}
              >
                {bannerContent[currentSlide].cta} →
              </a>
              <button
                onClick={handleClose}
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-gray-800">
        <motion.div
          className={`h-full bg-gradient-to-r ${bannerContent[currentSlide].color}`}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
        />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;