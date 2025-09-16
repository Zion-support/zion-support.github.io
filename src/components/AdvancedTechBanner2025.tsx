import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AdvancedTechBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTech, setCurrentTech] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const technologies = [
    {
      title: "Neural Quantum Processing",
      description: "Quantum computing meets neural networks",
      icon: "🧠",
      color: "from-purple-600 to-indigo-600"
    },
    {
      title: "Holographic Data Storage",
      description: "3D storage with infinite capacity",
      icon: "💎",
      color: "from-cyan-600 to-teal-600"
    },
    {
      title: "Bio-Integrated Computing",
      description: "Biology and computing unified",
      icon: "🧬",
      color: "from-emerald-600 to-green-600"
    },
    {
      title: "Temporal Computing",
      description: "Processing across time dimensions",
      icon: "⏰",
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 rounded-2xl p-8 mb-12 text-white"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg font-bold mb-4 animate-pulse"
          >
            🚀 NEW: Advanced Tech Showcase 2025
          </motion.div>
          
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Revolutionary Technologies
          </motion.h2>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Discover the cutting-edge technologies that are reshaping the future of computing, 
            data storage, and human-computer interaction.
          </motion.p>
        </div>

        {/* Rotating Technology Showcase */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTech}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-r ${technologies[currentTech].color} rounded-xl p-6 text-center`}
            >
              <div className="text-6xl mb-4">{technologies[currentTech].icon}</div>
              <h3 className="text-2xl font-bold mb-2">{technologies[currentTech].title}</h3>
              <p className="text-lg opacity-90">{technologies[currentTech].description}</p>
            </motion.div>
          </AnimatePresence>
          
          {/* Technology Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {technologies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTech(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTech ? 'bg-white' : 'bg-white/30'
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
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <a 
            href="/pages/AdvancedTechShowcase2025" 
            className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center"
          >
            🧠 Explore Advanced Tech →
          </a>
          <a 
            href="/pages/UltimateTechBreakthrough2040" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center"
          >
            🌌 Ultimate Breakthrough →
          </a>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid md:grid-cols-4 gap-4 mt-8"
        >
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-2">{tech.icon}</div>
              <h4 className="font-semibold text-sm">{tech.title}</h4>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AdvancedTechBanner2025;