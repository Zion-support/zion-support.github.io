import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const showcaseItems = [
    {
      id: 1,
      title: "Ultimate Tech Breakthrough 2026",
      description: "Experience the most revolutionary technologies ever created",
      features: ["Quantum Consciousness Computing", "Neural Reality Engine", "Omniversal AI", "Synthetic Biology AI"],
      gradient: "from-purple-600 to-pink-600",
      icon: "🌟",
      link: "/pages/UltimateTechBreakthrough2026"
    },
    {
      id: 2,
      title: "Interdimensional Technology Revolution",
      description: "Break through dimensional barriers and access parallel universe technologies",
      features: ["Dimension Gateway", "Quantum Dimensional AI", "Reality Manipulation Engine", "Parallel Universe Mining"],
      gradient: "from-indigo-600 to-purple-600",
      icon: "🌌",
      link: "/pages/InterdimensionalTechRevolution2026"
    },
    {
      id: 3,
      title: "Consciousness Computing Revolution",
      description: "The first computers that achieve true consciousness and self-awareness",
      features: ["Self-Aware AI", "Quantum Consciousness", "Neural Consciousness Transfer", "Collective Consciousness"],
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧠",
      link: "/pages/ConsciousnessComputingRevolution2026"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, showcaseItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE SHOWCASE 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Experience the most advanced technologies that will reshape our world forever
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Showcase Carousel */}
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="text-8xl mb-6">{showcaseItems[currentSlide].icon}</div>
                    <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {showcaseItems[currentSlide].title}
                    </h3>
                    <p className="text-xl opacity-90 mb-8">
                      {showcaseItems[currentSlide].description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {showcaseItems[currentSlide].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
                          <span className="text-purple-200">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    <a
                      href={showcaseItems[currentSlide].link}
                      className={`inline-block bg-gradient-to-r ${showcaseItems[currentSlide].gradient} px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg`}
                    >
                      Explore Technology →
                    </a>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl"></div>
                    <div className="relative bg-gradient-to-br from-gray-800/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
                      <div className="text-center">
                        <div className="text-6xl mb-4">{showcaseItems[currentSlide].icon}</div>
                        <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                        <p className="text-purple-200 mb-6">
                          Experience this revolutionary technology in action
                        </p>
                        <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                          Launch Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isAutoPlaying
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">Quick Access to All Technologies</h3>
            <p className="text-lg opacity-80">Explore all our revolutionary technologies at once</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`bg-gradient-to-br ${item.gradient}/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:shadow-2xl transition-all duration-300`}
              >
                <div className="text-6xl mb-4 text-center">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-4 text-center">{item.title}</h4>
                <p className="text-center opacity-80 mb-6">{item.description}</p>
                <a
                  href={item.link}
                  className={`block w-full bg-gradient-to-r ${item.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                >
                  Explore Now →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;