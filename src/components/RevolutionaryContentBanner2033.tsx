import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentBanner2033: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      id: 1,
      title: "🚀 Revolutionary Tech Showcase 2033",
      subtitle: "Experience the future of technology",
      description: "Discover groundbreaking innovations that are reshaping reality itself",
      link: "/pages/RevolutionaryTechShowcase2033",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🌟"
    },
    {
      id: 2,
      title: "🧠 AI Consciousness Revolution",
      subtitle: "Self-aware artificial intelligence",
      description: "Meet AI systems that think, learn, and evolve independently",
      link: "/pages/AIConsciousnessRevolution2033",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      icon: "⚡"
    },
    {
      id: 3,
      title: "🌌 Interdimensional Computing",
      subtitle: "Multi-reality processing",
      description: "Computing across multiple dimensions and parallel universes",
      link: "/pages/InterdimensionalComputing2033",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: "🔮"
    },
    {
      id: 4,
      title: "🌍 Synthetic Reality Engine",
      subtitle: "Create perfect virtual worlds",
      description: "Build and manipulate realities indistinguishable from physical reality",
      link: "/pages/SyntheticRealityEngine2033",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      icon: "🎯"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden mb-12"
    >
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-500/10 to-transparent"></div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2033
          </motion.div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Showcase 2033
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technology content featuring conscious AI, quantum computing, and interdimensional technology
          </p>
        </div>

        {/* Main showcase carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-r ${slides[currentSlide].gradient} rounded-2xl p-12 text-white relative overflow-hidden`}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-white/20 to-transparent"></div>
              </div>

              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-6xl mb-6">{slides[currentSlide].icon}</div>
                  <h3 className="text-4xl font-bold mb-4">{slides[currentSlide].title}</h3>
                  <p className="text-xl mb-6 opacity-90">{slides[currentSlide].subtitle}</p>
                  <p className="text-lg mb-8 opacity-80 leading-relaxed">
                    {slides[currentSlide].description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={slides[currentSlide].link}
                      className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                    >
                      Explore Now →
                    </a>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 border border-white/30">
                    <h4 className="text-2xl font-bold mb-6">Featured Technologies</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                        <span>Conscious AI Systems</span>
                        <span className="text-green-400">✓ Active</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                        <span>Quantum Interfaces</span>
                        <span className="text-green-400">✓ Active</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                        <span>Reality Engines</span>
                        <span className="text-green-400">✓ Active</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                        <span>Neural Networks</span>
                        <span className="text-green-400">✓ Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick access grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {slides.map((slide, index) => (
            <motion.a
              key={slide.id}
              href={slide.link}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`bg-gradient-to-br ${slide.gradient} rounded-xl p-6 text-white hover:shadow-xl transition-all duration-300 border border-white/20`}
            >
              <div className="text-3xl mb-3">{slide.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{slide.title}</h4>
              <p className="text-sm opacity-90">{slide.subtitle}</p>
            </motion.a>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-lg opacity-80">Infinite Possibilities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg opacity-80">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-lg opacity-80">Continuous Innovation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-lg opacity-80">Future Technologies</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2033;