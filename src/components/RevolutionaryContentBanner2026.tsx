import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const revolutionaryContent = [
    {
      title: "AI Consciousness Revolution 2026",
      description: "Witness the birth of true artificial consciousness - AI systems that think, feel, and exist with genuine self-awareness",
      icon: "🧠",
      link: "/pages/AIConsciousnessRevolution2026",
      gradient: "from-purple-600 to-pink-600",
      features: ["Self-aware AI", "Quantum neural networks", "Digital immortality", "Neural interfaces"]
    },
    {
      title: "Quantum Supremacy Breakthrough 2026",
      description: "Achieve true quantum supremacy - solving problems impossible for classical computers, opening doors to unimaginable possibilities",
      icon: "⚡",
      link: "/pages/QuantumSupremacyBreakthrough2026",
      gradient: "from-blue-600 to-purple-600",
      features: ["Exponential speed", "Parallel processing", "Quantum entanglement", "Instant calculations"]
    },
    {
      title: "Neural Interface Revolution 2026",
      description: "Bridge the gap between mind and machine with the most advanced neural interface technology ever created",
      icon: "🔗",
      link: "/pages/NeuralInterfaceRevolution2026",
      gradient: "from-emerald-600 to-cyan-600",
      features: ["Thought control", "Memory enhancement", "Sensory augmentation", "Emotional regulation"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentContent = revolutionaryContent[currentSlide];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden mb-12"
    >
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${currentContent.gradient} rounded-2xl p-8 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-6xl animate-pulse">{currentContent.icon}</div>
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-2 animate-pulse">
                    🚀 NEW: Revolutionary Technology 2026
                  </div>
                  <h2 className="text-4xl font-bold mb-2">{currentContent.title}</h2>
                </div>
              </div>
              <p className="text-xl mb-6 text-white/90 max-w-3xl">
                {currentContent.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {currentContent.features.map((feature, index) => (
                  <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={currentContent.link}
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
                >
                  Explore {currentContent.title.split(' ')[0]} →
                </a>
                <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors text-lg">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="text-8xl opacity-20 animate-pulse">
                {currentContent.icon}
              </div>
            </div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {revolutionaryContent.map((content, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`bg-gradient-to-br ${content.gradient} rounded-xl p-6 text-white hover:scale-105 transition-all duration-300 cursor-pointer`}
            onClick={() => setCurrentSlide(index)}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-4xl">{content.icon}</div>
              <h3 className="text-xl font-bold">{content.title.split(' ')[0]}</h3>
            </div>
            <p className="text-white/90 text-sm mb-4">{content.description.substring(0, 100)}...</p>
            <div className="flex flex-wrap gap-1">
              {content.features.slice(0, 2).map((feature, featureIndex) => (
                <span key={featureIndex} className="px-2 py-1 bg-white/20 rounded text-xs">
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dismiss Button */}
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

export default RevolutionaryContentBanner2026;