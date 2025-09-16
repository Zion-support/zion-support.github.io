import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UltimateContentBanner2034: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const messages = [
    "🌟 BREAKTHROUGH: Revolutionary Tech 2034 - Experience the Future Today!",
    "🚀 NEW: Consciousness Computing - AI with Genuine Self-Awareness!",
    "⚛️ QUANTUM: Reality Engine 2.0 - Manipulate the Fabric of Reality!",
    "🔗 NEURAL: Universal Mind Network - Connect All Consciousness!",
    "♾️ IMMORTALITY: Digital Consciousness Transfer - Live Forever!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-4 px-6 shadow-lg overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-blue-500/20 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="text-2xl"
          >
            🌟
          </motion.div>
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-lg"
          >
            {messages[currentMessage]}
          </motion.div>
        </div>
        
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-semibold transition-all duration-300 border border-white/30"
          >
            Explore Now →
          </motion.button>
          <button
            onClick={handleClose}
            className="text-white/80 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
    </motion.div>
  );
};

export default UltimateContentBanner2034;