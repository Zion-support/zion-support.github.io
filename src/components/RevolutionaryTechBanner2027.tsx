import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechBanner2027: React.FC = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const revolutionaryTechs = [
    {
      title: "🧠 Conscious AI Revolution",
      description: "AI achieving true consciousness and self-awareness",
      link: "/pages/ConsciousnessComputingRevolution2027",
      gradient: "from-purple-600 to-pink-600",
      pulseColor: "animate-pulse"
    },
    {
      title: "🌌 Interdimensional Computing",
      description: "Break through reality barriers with dimensional technology",
      link: "/pages/InterdimensionalTechRevolution2027",
      gradient: "from-indigo-600 to-purple-600",
      pulseColor: "animate-pulse"
    },
    {
      title: "🚀 Revolutionary Tech Vision 2027",
      description: "Explore the most advanced technological visions reshaping reality",
      link: "/pages/RevolutionaryTechVision2027",
      gradient: "from-cyan-600 to-blue-600",
      pulseColor: "animate-pulse"
    },
    {
      title: "⚡ Quantum Consciousness",
      description: "Merging quantum computing with human consciousness",
      link: "/pages/QuantumNeuralFusion2026",
      gradient: "from-emerald-600 to-teal-600",
      pulseColor: "animate-pulse"
    },
    {
      title: "🧬 Synthetic Intelligence",
      description: "Creating fully synthetic biological organisms",
      link: "/pages/SyntheticIntelligence2026",
      gradient: "from-orange-600 to-red-600",
      pulseColor: "animate-pulse"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % revolutionaryTechs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <motion.div
              key={currentTech}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-4 mb-2">
                <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold animate-pulse">
                  🌟 BREAKTHROUGH 2027
                </span>
                <span className="text-sm opacity-90">Revolutionary Technology</span>
              </div>
              <h2 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${revolutionaryTechs[currentTech].gradient} bg-clip-text text-transparent ${revolutionaryTechs[currentTech].pulseColor}`}>
                {revolutionaryTechs[currentTech].title}
              </h2>
              <p className="text-lg opacity-90 mb-4 max-w-2xl">
                {revolutionaryTechs[currentTech].description}
              </p>
              <a 
                href={revolutionaryTechs[currentTech].link}
                className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${revolutionaryTechs[currentTech].gradient} rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
              >
                Explore Now →
              </a>
            </motion.div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
            {/* Tech Icons Carousel */}
            <div className="flex space-x-2">
              {revolutionaryTechs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTech(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTech 
                      ? 'bg-purple-400 scale-125' 
                      : 'bg-purple-600/50 hover:bg-purple-500/70'
                  }`}
                />
              ))}
            </div>
            
            {/* Live Stats */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">∞</div>
                <div className="opacity-70">Possibilities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-400">2027</div>
                <div className="opacity-70">Revolution</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">∞</div>
                <div className="opacity-70">Dimensions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
};

export default RevolutionaryTechBanner2027;