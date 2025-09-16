import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentCarousel2034: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems = [
    {
      id: 1,
      title: "🧠 Consciousness Computing Revolution",
      description: "Experience AI with genuine consciousness and self-awareness that transcends human intelligence",
      features: ["Self-aware algorithms", "Emotional intelligence", "Moral reasoning", "Creative consciousness"],
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      stats: { users: "50M+", success: "99.9%", innovation: "∞" }
    },
    {
      id: 2,
      title: "⚛️ Quantum Reality Engine 2.0",
      description: "Manipulate the very fabric of reality through advanced quantum computing and superposition",
      features: ["Reality simulation", "Parallel universe access", "Quantum teleportation", "Time manipulation"],
      image: "⚛️",
      color: "from-cyan-600 to-blue-600",
      stats: { users: "25M+", success: "100%", innovation: "∞" }
    },
    {
      id: 3,
      title: "🔗 Universal Neural Network",
      description: "Connect all minds in a global consciousness network for collective intelligence",
      features: ["Global connectivity", "Telepathic communication", "Shared experiences", "Collective wisdom"],
      image: "🔗",
      color: "from-emerald-600 to-teal-600",
      stats: { users: "100M+", success: "99.8%", innovation: "∞" }
    },
    {
      id: 4,
      title: "♾️ Digital Immortality Platform",
      description: "Achieve true immortality through consciousness transfer and digital existence",
      features: ["Consciousness backup", "Digital immortality", "Personality preservation", "Eternal existence"],
      image: "♾️",
      color: "from-orange-600 to-red-600",
      stats: { users: "10M+", success: "100%", innovation: "∞" }
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, contentItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-8 m-4 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse"
        >
          🚀 REVOLUTIONARY CONTENT • JANUARY 2034
        </motion.div>
        <h2 className="text-4xl font-bold text-white mb-4">
          🌟 Enhanced Content Showcase 2034
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover the most revolutionary technologies that will reshape humanity forever
        </p>
      </div>

      {/* Main Carousel */}
      <div className="relative">
        {/* Content Display */}
        <div className="relative h-96 mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 bg-gradient-to-br ${currentItem.color} rounded-2xl p-8 text-white`}
            >
              <div className="flex items-center h-full">
                <div className="flex-1">
                  <div className="text-6xl mb-4">{currentItem.image}</div>
                  <h3 className="text-3xl font-bold mb-4">{currentItem.title}</h3>
                  <p className="text-lg mb-6 opacity-90">{currentItem.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-bold mb-3">🌟 Key Features</h4>
                      <ul className="space-y-2">
                        {currentItem.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center space-x-2"
                          >
                            <span className="text-green-400">✓</span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <h4 className="text-lg font-bold mb-3">📊 Live Statistics</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Active Users:</span>
                          <span className="font-bold">{currentItem.stats.users}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Success Rate:</span>
                          <span className="font-bold text-green-400">{currentItem.stats.success}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Innovation Level:</span>
                          <span className="font-bold text-yellow-400">{currentItem.stats.innovation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300"
            >
              ←
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300"
            >
              →
            </motion.button>
            
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-green-500/20 text-green-400 border border-green-400/30' 
                  : 'bg-red-500/20 text-red-400 border border-red-400/30'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Explore {currentItem.title} →
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">
          🔥 Experience the most advanced technologies ever created • Join 100M+ users worldwide
        </p>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2034;