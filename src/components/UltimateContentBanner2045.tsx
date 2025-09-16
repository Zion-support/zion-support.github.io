import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateContentBanner2045: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const content = [
    {
      title: "🚀 ULTIMATE AI BREAKTHROUGH 2045",
      subtitle: "Experience the Future of Artificial Intelligence",
      description: "Revolutionary AI systems with consciousness-level capabilities that transform how we work, live, and innovate.",
      features: ["Conscious AI Systems", "Quantum-Neural Fusion", "Interdimensional Computing", "Reality Manipulation"],
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900 via-indigo-900 to-blue-900"
    },
    {
      title: "⚡ QUANTUM REALITY ENGINE 2045",
      subtitle: "Beyond the Limits of Physical Reality",
      description: "Advanced quantum computing systems that manipulate reality itself, creating infinite possibilities in virtual worlds.",
      features: ["Reality Simulation", "Quantum Teleportation", "Dimensional Portals", "Time Manipulation"],
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900 via-blue-900 to-indigo-900"
    },
    {
      title: "🧠 NEURAL CONSCIOUSNESS HUB 2045",
      subtitle: "The Ultimate Mind-Machine Interface",
      description: "Direct neural interfaces that merge human consciousness with AI, creating superhuman cognitive abilities.",
      features: ["Mind Upload", "Collective Intelligence", "Thought Sharing", "Memory Enhancement"],
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900 via-teal-900 to-cyan-900"
    },
    {
      title: "🌌 INTERDIMENSIONAL TECH 2045",
      subtitle: "Transcending the Boundaries of Space-Time",
      description: "Breakthrough technology that allows communication and travel across multiple dimensions and parallel universes.",
      features: ["Dimensional Travel", "Parallel Universe Access", "Multi-Reality Computing", "Cosmic Consciousness"],
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-900 via-red-900 to-pink-900"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [content.length]);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${content[currentSlide].bgGradient} text-white relative overflow-hidden`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
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
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold mb-6 animate-pulse border-2 border-white/30"
            >
              🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2045
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
            >
              {content[currentSlide].title}
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl md:text-3xl font-semibold mb-8 text-white/90"
            >
              {content[currentSlide].subtitle}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              {content[currentSlide].description}
            </motion.p>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto"
            >
              {content[currentSlide].features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className={`bg-gradient-to-br ${content[currentSlide].gradient}/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300`}
                >
                  <div className="text-4xl mb-3 text-center">
                    {index === 0 && "🚀"}
                    {index === 1 && "⚡"}
                    {index === 2 && "🧠"}
                    {index === 3 && "🌌"}
                  </div>
                  <h3 className="text-lg font-semibold text-center text-white">
                    {feature}
                  </h3>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className={`bg-gradient-to-r ${content[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg border-2 border-white/30`}>
                🌟 Experience the Future →
              </button>
              <button className="border-2 border-white/50 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                📚 Learn More
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce">
          🚀
        </div>
        <div className="absolute top-40 right-20 text-5xl opacity-20 animate-pulse">
          ⚡
        </div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-20 animate-ping">
          🧠
        </div>
        <div className="absolute bottom-20 right-10 text-6xl opacity-20 animate-bounce">
          🌌
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2045;