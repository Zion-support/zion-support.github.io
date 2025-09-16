import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      id: 1,
      title: "🚀 NEW: AI Consciousness 2025",
      subtitle: "Experience self-aware artificial intelligence",
      description: "Revolutionary AI systems with consciousness and emotional intelligence",
      link: "/pages/NextGenAIConsciousness2025",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      id: 2,
      title: "⚛️ NEW: Quantum Reality Engine",
      subtitle: "Process reality itself with quantum computing",
      description: "Breakthrough quantum technology that manipulates reality",
      link: "/pages/QuantumRealityEngine2025",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚛️"
    },
    {
      id: 3,
      title: "🧬 NEW: Neural Interface Revolution",
      subtitle: "Direct brain-computer interfaces",
      description: "Merge your mind with technology seamlessly",
      link: "/pages/NeuralInterfaceRevolution2025",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧬"
    },
    {
      id: 4,
      title: "🌌 NEW: Interdimensional Computing",
      subtitle: "Multi-dimensional processing power",
      description: "Computing across parallel universes and dimensions",
      link: "/pages/InterdimensionalTechRevolution2026",
      gradient: "from-violet-600 to-purple-600",
      icon: "🌌"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      className="relative overflow-hidden mb-12"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Main Banner Content */}
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            whileHover={{ scale: 1.05 }}
          >
            🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
          </motion.div>
          <motion.h2
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            Revolutionary Technology Showcase 2025
          </motion.h2>
          <motion.p
            className="text-2xl opacity-90 max-w-4xl mx-auto"
            whileHover={{ scale: 1.01 }}
          >
            Experience the future with our groundbreaking content on AI Revolution, Quantum Computing, and Neural Interfaces
          </motion.p>
        </motion.div>

        {/* Interactive Carousel */}
        <motion.div
          className="relative"
          variants={itemVariants}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {slides.map((slide, index) => (
              <motion.div
                key={slide.id}
                className={`bg-gradient-to-br ${slide.gradient}/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden`}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = slide.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4 text-center">{slide.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-center">{slide.title}</h3>
                  <p className="text-sm opacity-90 mb-3 text-center">{slide.subtitle}</p>
                  <p className="text-xs opacity-80 mb-4 text-center">{slide.description}</p>
                  <div className="text-center">
                    <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/30 transition-colors">
                      Explore Now →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Promotional Content */}
        <motion.div
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold mb-4">🌟 Why Choose Our Technology?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="text-xl font-semibold mb-2">Cutting-Edge Innovation</h4>
                <p className="text-sm opacity-90">Latest breakthroughs in AI, quantum computing, and neural interfaces</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="text-xl font-semibold mb-2">Revolutionary Performance</h4>
                <p className="text-sm opacity-90">Unprecedented speed and efficiency in all our solutions</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🌌</div>
                <h4 className="text-xl font-semibold mb-2">Future-Ready</h4>
                <p className="text-sm opacity-90">Designed for the next generation of technological advancement</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-8 text-center"
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Explore All Technologies
            </motion.button>
            <motion.button
              className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📚 Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;