import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2026",
      description: "Experience the most advanced technological revolution in human history",
      icon: "🚀",
      gradient: "from-purple-600 to-pink-600",
      features: ["Synthetic Neural Networks", "Quantum-Enhanced Processing", "Predictive Consciousness", "Distributed Learning"]
    },
    {
      id: 2,
      title: "Advanced AI Systems",
      description: "Next-generation AI systems with consciousness and creativity",
      icon: "🧠",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Consciousness AI", "Creative Problem Solving", "Emotional Intelligence", "Autonomous Decision Making"]
    },
    {
      id: 3,
      title: "Quantum Computing Breakthrough",
      description: "Revolutionary quantum computers solving impossible problems",
      icon: "⚛️",
      gradient: "from-emerald-600 to-teal-600",
      features: ["Quantum Supremacy", "Quantum Internet", "Molecular Simulation", "Cryptographic Security"]
    },
    {
      id: 4,
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces transforming human capabilities",
      icon: "🧬",
      gradient: "from-orange-600 to-red-600",
      features: ["Non-Invasive BCI", "Thought Control", "Memory Augmentation", "Neural Enhancement"]
    },
    {
      id: 5,
      title: "Space Technology Innovation",
      description: "Revolutionary space exploration and colonization technologies",
      icon: "🌌",
      gradient: "from-violet-600 to-purple-600",
      features: ["Mars Colonization", "Space Manufacturing", "Interstellar Travel", "Asteroid Mining"]
    },
    {
      id: 6,
      title: "Advanced Robotics",
      description: "Humanoid robots with human-like capabilities and intelligence",
      icon: "🤖",
      gradient: "from-pink-600 to-rose-600",
      features: ["Human-Like Movement", "AI Integration", "Precision Control", "Adaptive Learning"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentItems.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT SHOWCASE • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore the most advanced technologies that will reshape human existence. 
            From AI consciousness to quantum computing, experience the impossible made possible.
          </p>
        </motion.div>

        {/* Content Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="text-8xl mb-6">{contentItems[currentSlide].icon}</div>
                    <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {contentItems[currentSlide].title}
                    </h3>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                      {contentItems[currentSlide].description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {contentItems[currentSlide].features.map((feature, index) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
                          <span className="text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                      Explore Now →
                    </button>
                  </div>
                  <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-xl p-8">
                    <h4 className="text-2xl font-bold mb-4 text-cyan-300">Technology Impact</h4>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-400">10x</div>
                        <div className="text-sm text-gray-400">Productivity</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400">99%</div>
                        <div className="text-sm text-gray-400">Accuracy</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-pink-400">24/7</div>
                        <div className="text-sm text-gray-400">Operation</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-emerald-400">∞</div>
                        <div className="text-sm text-gray-400">Possibilities</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length)}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg transition-all duration-300"
            >
              ←
            </button>
            <div className="flex space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % contentItems.length)}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg transition-all duration-300"
            >
              →
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                isAutoPlaying
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {isAutoPlaying ? 'Pause' : 'Play'} Auto-rotation
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-2xl p-12">
            <h3 className="text-4xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join the revolution and be among the first to experience these groundbreaking technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                Start Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;