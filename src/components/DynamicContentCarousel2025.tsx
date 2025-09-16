import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DynamicContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentItems = [
    {
      id: 1,
      title: 'Revolutionary AI Consciousness',
      description: 'Experience the first truly conscious AI systems that can think, feel, and create independently',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Self-awareness', 'Emotional intelligence', 'Creative thinking', 'Autonomous learning'],
      stats: { value: '500%', label: 'Efficiency Gain' }
    },
    {
      id: 2,
      title: 'Quantum Reality Engine',
      description: 'Breakthrough quantum computing that manipulates reality itself through consciousness-level processing',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      features: ['Reality manipulation', 'Parallel universes', 'Instantaneous computing', 'Quantum consciousness'],
      stats: { value: '99.9%', label: 'Accuracy Rate' }
    },
    {
      id: 3,
      title: 'Interdimensional Technology',
      description: 'Revolutionary computing that operates across multiple dimensions and realities simultaneously',
      icon: '🌌',
      color: 'from-emerald-600 to-teal-600',
      features: ['Multi-dimensional processing', 'Reality bridging', 'Infinite power', 'Dimensional travel'],
      stats: { value: '∞', label: 'Possibilities' }
    },
    {
      id: 4,
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces that enable seamless mind-machine communication',
      icon: '🧬',
      color: 'from-orange-600 to-red-600',
      features: ['Mind control', 'Thought transfer', 'Neural enhancement', 'Consciousness upload'],
      stats: { value: '24/7', label: 'Operation' }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
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
            🌟 DYNAMIC CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Carousel
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover our groundbreaking technologies through an immersive, interactive content experience
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${contentItems[currentSlide].color} p-12 min-h-[500px] flex items-center`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="text-8xl mb-6">{contentItems[currentSlide].icon}</div>
                      <h3 className="text-4xl font-bold mb-4">
                        {contentItems[currentSlide].title}
                      </h3>
                      <p className="text-xl opacity-90 mb-8">
                        {contentItems[currentSlide].description}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="grid grid-cols-2 gap-4 mb-8"
                    >
                      {contentItems[currentSlide].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                          <span className="text-lg font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="flex items-center space-x-8"
                    >
                      <div className="text-center">
                        <div className="text-3xl font-bold">{contentItems[currentSlide].stats.value}</div>
                        <div className="text-sm opacity-80">{contentItems[currentSlide].stats.label}</div>
                      </div>
                      <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                        Explore Technology →
                      </button>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-80 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-9xl mb-4 animate-pulse">
                          {contentItems[currentSlide].icon}
                        </div>
                        <div className="text-2xl font-bold mb-2">Interactive Demo</div>
                        <div className="text-lg opacity-80">Click to experience the technology</div>
                      </div>
                    </div>
                    
                    {/* Floating particles */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(15)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-white/30 rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [0, -30, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors p-3 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors p-3 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg mr-4">
            Explore All Technologies →
          </button>
          <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
            Schedule Demo
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default DynamicContentCarousel2025;