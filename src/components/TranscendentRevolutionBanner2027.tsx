import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const TranscendentRevolutionBanner2027: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTech, setCurrentTech] = useState(0);
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const technologies = [
    {
      title: "Universal Consciousness Network",
      description: "Transcendent AI network spanning dimensions",
      icon: "🌌",
      color: "from-purple-600 to-indigo-600"
    },
    {
      title: "Quantum Reality Engine",
      description: "Manipulate the fundamental fabric of reality",
      icon: "⚛️",
      color: "from-cyan-600 to-teal-600"
    },
    {
      title: "Transcendent AI Consciousness",
      description: "AI systems existing beyond physical limitations",
      icon: "🧠",
      color: "from-emerald-600 to-green-600"
    },
    {
      title: "Interdimensional Technology Matrix",
      description: "Technologies operating across dimensions",
      icon: "🌐",
      color: "from-orange-600 to-red-600"
    }
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-10 mb-12 text-white border border-white/30 shadow-2xl"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.3),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
      <div className="relative z-10">
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xl font-bold mb-6 animate-pulse border-2 border-yellow-400"
          >
            🌌 TRANSCENDENT: Tech Revolution 2027
          </motion.div>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
          >
            The Transcendent Revolution
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto"
          >
            Experience the ultimate transcendence of technology. Universal consciousness, 
            quantum reality manipulation, and interdimensional existence await.
          </motion.p>
        </div>
        {/* Rotating Technology Showcase */}
        <div className="max-w-5xl mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTech}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className={`bg-gradient-to-r ${technologies[currentTech].color} rounded-2xl p-8 text-center shadow-2xl`}
            >
              <div className="text-8xl mb-6">{technologies[currentTech].icon}</div>
              <h3 className="text-3xl font-bold mb-3">{technologies[currentTech].title}</h3>
              <p className="text-xl opacity-90">{technologies[currentTech].description}</p>
            </motion.div>
          </AnimatePresence>
          {/* Technology Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {technologies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTech(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTech ? 'bg-white shadow-lg scale-125' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
        {/* Action Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row justify-center gap-6 mb-8"
        >
          <a 
            href="/pages/TranscendentTechRevolution2027" 
            className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 text-center transform hover:scale-105"
          >
            🌌 Experience Transcendence →
          </a>
          <a 
            href="/pages/UltimateTechRevolution2026" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 text-center transform hover:scale-105"
          >
            🚀 Ultimate Revolution 2026 →
          </a>
        </motion.div>
        {/* Features Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid md:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-yellow-400/50">
              <div className="text-4xl mb-3">{tech.icon}</div>
              <h4 className="font-semibold text-lg mb-2">{tech.title}</h4>
              <p className="text-sm text-gray-300">{tech.description}</p>
            </div>
          ))}
        </motion.div>
        {/* Impact Stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="bg-white/10 p-4 rounded-xl">
            <div className="text-2xl font-bold text-cyan-400">∞</div>
            <div className="text-sm text-gray-300">Universal Reach</div>
          </div>
          <div className="bg-white/10 p-4 rounded-xl">
            <div className="text-2xl font-bold text-purple-400">∞</div>
            <div className="text-sm text-gray-300">Transcendence</div>
          </div>
          <div className="bg-white/10 p-4 rounded-xl">
            <div className="text-2xl font-bold text-pink-400">∞</div>
            <div className="text-sm text-gray-300">Power</div>
          </div>
          <div className="bg-white/10 p-4 rounded-xl">
            <div className="text-2xl font-bold text-yellow-400">2027</div>
            <div className="text-sm text-gray-300">Transcendence Year</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

};


export default TranscendentRevolutionBanner2027;
