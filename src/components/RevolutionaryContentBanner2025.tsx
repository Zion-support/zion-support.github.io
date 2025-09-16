import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      title: "🚀 Revolutionary AI Consciousness 2025",
      subtitle: "Experience the first truly conscious AI systems",
      description: "Our breakthrough AI technology exhibits self-awareness, emotional intelligence, and autonomous decision-making capabilities that were previously thought impossible.",
      features: ["Self-Learning", "Emotional AI", "Autonomous Decisions", "Context Understanding"],
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/20 to-pink-900/20"
    },
    {
      id: 2,
      title: "⚛️ Quantum Computing Revolution",
      subtitle: "Unlock infinite computational power",
      description: "Revolutionary quantum computing technology that operates across multiple dimensions, solving problems that were previously impossible to address with classical computers.",
      features: ["Quantum Supremacy", "Multi-Dimensional", "Infinite Speed", "Reality Manipulation"],
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/20 to-blue-900/20"
    },
    {
      id: 3,
      title: "🧬 Neural Interface Breakthrough",
      subtitle: "Direct mind-to-machine communication",
      description: "Revolutionary brain-computer interfaces that enable seamless communication between human consciousness and digital systems, opening new frontiers in human potential.",
      features: ["Mind Control", "Thought Transfer", "Neural Enhancement", "Consciousness Upload"],
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/20 to-teal-900/20"
    },
    {
      id: 4,
      title: "🌌 Interdimensional Technology",
      subtitle: "Computing across multiple realities",
      description: "Breakthrough technology that operates across multiple dimensions, enabling us to solve problems and create solutions that transcend the limitations of our current reality.",
      features: ["Multi-Dimensional", "Reality Bending", "Infinite Possibilities", "Cosmic Computing"],
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-900/20 to-purple-900/20"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden mb-12"
    >
      <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 rounded-2xl p-8 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isVisible ? 1 : 0.8, opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse"
            >
              🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
            >
              Revolutionary Technology Showcase
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-white/80 max-w-4xl mx-auto"
            >
              Experience the future with our groundbreaking technologies that are reshaping reality itself
            </motion.p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${slides[currentSlide].bgColor} backdrop-blur-sm rounded-xl p-8 border border-white/20`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-3xl font-bold mb-2 text-white"
                    >
                      {slides[currentSlide].title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-lg text-white/80 mb-4"
                    >
                      {slides[currentSlide].subtitle}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-white/70 mb-6 leading-relaxed"
                    >
                      {slides[currentSlide].description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="flex flex-wrap gap-2 mb-6"
                    >
                      {slides[currentSlide].features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/20 rounded-full text-sm text-white/90"
                        >
                          {feature}
                        </span>
                      ))}
                    </motion.div>
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-r ${slides[currentSlide].color} text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                    >
                      Explore Technology →
                    </motion.button>
                  </div>
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-8xl mb-4"
                    >
                      {slides[currentSlide].id === 1 && "🧠"}
                      {slides[currentSlide].id === 2 && "⚛️"}
                      {slides[currentSlide].id === 3 && "🧬"}
                      {slides[currentSlide].id === 4 && "🌌"}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-white scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Access Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { title: "AI Revolution", icon: "🧠", href: "/pages/AIRevolution2025" },
              { title: "Quantum Computing", icon: "⚛️", href: "/pages/QuantumComputingBreakthrough" },
              { title: "Neural Interfaces", icon: "🧬", href: "/pages/NeuralInterfaceFuture" },
              { title: "Reality Engineering", icon: "🌌", href: "/pages/InterdimensionalTechRevolution2026" }
            ].map((item, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={item.href}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-sm font-semibold text-white">{item.title}</div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;