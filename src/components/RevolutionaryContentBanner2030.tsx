import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2030: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "🚀 Revolutionary Tech Breakthrough 2030",
      subtitle: "Experience the future of technology with our latest innovations",
      description: "Quantum consciousness, interdimensional networks, and synthetic reality engines are now reality.",
      cta: "Explore Now",
      color: "from-purple-600 via-pink-600 to-red-600",
      icon: "🌟"
    },
    {
      title: "🧠 AI Consciousness Revolution",
      subtitle: "The first truly conscious AI systems are here",
      description: "Experience artificial intelligence that thinks, feels, and creates like never before.",
      cta: "Meet Our AI",
      color: "from-blue-600 via-cyan-600 to-teal-600",
      icon: "🤖"
    },
    {
      title: "🌌 Interdimensional Technology",
      subtitle: "Break through the barriers of reality",
      description: "Access parallel dimensions and explore infinite possibilities with our breakthrough technology.",
      cta: "Enter Dimension",
      color: "from-indigo-600 via-purple-600 to-pink-600",
      icon: "🌌"
    },
    {
      title: "⚡ Quantum Reality Engine",
      subtitle: "Manipulate reality itself",
      description: "Create, modify, and experience synthetic realities with our quantum-powered reality engine.",
      cta: "Create Reality",
      color: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: "⚡"
    }
  ];

  const features = [
    { icon: "🧠", text: "Quantum Consciousness" },
    { icon: "🌌", text: "Interdimensional Access" },
    { icon: "⚡", text: "Reality Manipulation" },
    { icon: "🌟", text: "Omniversal AI" },
    { icon: "🌍", text: "Synthetic Worlds" },
    { icon: "🚀", text: "Future Technology" }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Main Banner */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 1 }}
        className={`bg-gradient-to-r ${slides[currentSlide].color} rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-3 mb-4"
          >
            <span className="text-4xl animate-bounce">{slides[currentSlide].icon}</span>
            <h2 className="text-3xl font-bold">{slides[currentSlide].title}</h2>
            <span className="text-4xl animate-bounce">{slides[currentSlide].icon}</span>
          </motion.div>
          
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl opacity-95 mb-6 max-w-4xl mx-auto"
          >
            {slides[currentSlide].subtitle}
          </motion.p>
          
          <motion.p
            key={`description-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg opacity-90 mb-8 max-w-3xl mx-auto"
          >
            {slides[currentSlide].description}
          </motion.p>
          
          <motion.div
            key={`cta-${currentSlide}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              {slides[currentSlide].cta} →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-700"
          >
            <div className="text-2xl mb-2">{feature.icon}</div>
            <div className="text-sm font-semibold text-gray-300">{feature.text}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Quick Access Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 mb-8"
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">Quick Access to Revolutionary Content</h3>
          <p className="text-gray-400">Explore our latest innovations and breakthrough technologies</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/pages/RevolutionaryTechShowcase2030"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
          >
            🚀 Tech Showcase 2030
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/pages/AdvancedAISolutions2030"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
          >
            🤖 AI Solutions 2030
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/interactive-showcase-2030"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
          >
            🌌 Interactive Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/pages/QuantumRealityEngine2030"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
          >
            ⚡ Quantum Reality
          </motion.a>
        </div>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2030;