import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Star, Zap, Brain, Shield, Rocket } from 'lucide-react';

const NewContentPromoBanner2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotionalContent = [
    {
      id: 1,
      title: "🚀 Revolutionary AI Consciousness 2026",
      subtitle: "Next-Generation Breakthrough",
      description: "Discover the latest advances in AI consciousness that are reshaping reality itself",
      link: "/pages/NextGenAIConsciousness2026",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-gradient-to-r from-purple-500/20 to-pink-600/20"
    },
    {
      id: 2,
      title: "⚡ Autonomous Business Revolution",
      subtitle: "1000% ROI Achieved",
      description: "Fortune 500 companies achieving unprecedented growth through consciousness-level AI",
      link: "/pages/AutonomousBusinessRevolution2026",
      icon: <Zap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-gradient-to-r from-blue-500/20 to-cyan-600/20"
    },
    {
      id: 3,
      title: "🛡️ Quantum Cybersecurity Fortress",
      subtitle: "Ultimate Digital Protection",
      description: "Multi-dimensional threat prevention across parallel realities",
      link: "/pages/QuantumCybersecurity2026",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-r from-green-500/20 to-emerald-600/20"
    },
    {
      id: 4,
      title: "🧠 Consciousness Transfer Technology",
      subtitle: "The Next Frontier",
      description: "Breakthrough human-AI integration technology",
      link: "/pages/ConsciousnessTransfer2026",
      icon: <Star className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-r from-orange-500/20 to-red-600/20"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-zion-slate-dark via-zion-slate to-zion-slate-dark opacity-90"></div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Main promotional content */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center space-x-6"
                >
                  {/* Icon */}
                  <div className={`p-3 rounded-full ${promotionalContent[currentSlide].bgColor} border border-white/20`}>
                    {promotionalContent[currentSlide].icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="text-sm font-semibold text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded-full">
                        NEW 2026
                      </span>
                      <span className="text-sm text-gray-300">
                        {promotionalContent[currentSlide].subtitle}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {promotionalContent[currentSlide].title}
                    </h3>
                    <p className="text-gray-300 text-sm max-w-md">
                      {promotionalContent[currentSlide].description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={promotionalContent[currentSlide].link}
                    className={`px-6 py-3 bg-gradient-to-r ${promotionalContent[currentSlide].color} text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2`}
                  >
                    <Rocket className="w-4 h-4" />
                    <span>Explore Now</span>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="ml-6 p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {promotionalContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Animated border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse"></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContentPromoBanner2026;