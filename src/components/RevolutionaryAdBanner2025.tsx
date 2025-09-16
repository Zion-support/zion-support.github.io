import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryAdBanner2025: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    {
      text: "🚀 NEW: Revolutionary AI Services 2025 - Experience Conscious AI, Quantum Computing & Neural Interfaces",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryAIServices2025"
    },
    {
      text: "🌟 BREAKTHROUGH: Ultimate Tech Showcase 2025 - Discover Interdimensional Computing & Reality Engines",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2025"
    },
    {
      text: "🏆 SUCCESS: Revolutionary Case Studies 2025 - See How 500+ Companies Transformed Their Business",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/RevolutionaryCaseStudies2025"
    },
    {
      text: "⚡ INNOVATION: Next-Gen Technology 2025 - Quantum Neural Networks & Synthetic Consciousness",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/RevolutionaryTechShowcase2025"
    },
    {
      text: "🌌 FUTURE: Transcendent Technology 2025 - Interdimensional Computing & Universal Consciousness",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/RevolutionaryTechShowcase2025"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-purple-900 py-4">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse"></div>
      
      {/* Moving Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo/Brand */}
          <div className="flex items-center space-x-4">
            <div className="text-3xl">🌟</div>
            <div className="text-white font-bold text-lg">Zion Tech Group</div>
          </div>

          {/* Center - Rotating Message */}
          <div className="flex-1 mx-8">
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <a
                href={messages[currentMessage].link}
                className={`inline-block bg-gradient-to-r ${messages[currentMessage].gradient} text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                {messages[currentMessage].text}
              </a>
            </motion.div>
          </div>

          {/* Right Side - CTA */}
          <div className="flex items-center space-x-4">
            <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors font-semibold">
              Learn More
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4, ease: "linear" }}
          key={currentMessage}
        />
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2025;