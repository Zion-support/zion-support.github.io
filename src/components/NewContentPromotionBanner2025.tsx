import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NewContentPromotionBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotionalContent = [
    {
      id: 1,
      title: "🌟 NEW: Revolutionary Tech Showcase 2025",
      description: "Experience the most advanced technology content featuring conscious AI, quantum computing, and interdimensional technology",
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      id: 2,
      title: "🤖 NEW: AI Solutions Comprehensive 2025",
      description: "Discover our complete suite of revolutionary AI solutions designed to transform your business",
      link: "/pages/AISolutionsComprehensive2025",
      color: "from-blue-600 to-cyan-600",
      icon: "🧠"
    },
    {
      id: 3,
      title: "⚡ BREAKTHROUGH: Quantum Computing Revolution",
      description: "Experience the future of computing with quantum technology that solves impossible problems",
      link: "/pages/QuantumComputingRevolution2025",
      color: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      id: 4,
      title: "🧬 REVOLUTIONARY: Neural Interface Technology",
      description: "Bridge the gap between mind and machine with direct neural interfaces",
      link: "/pages/NeuralInterfaceRevolution2025",
      color: "from-emerald-600 to-teal-600",
      icon: "🧬"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleClick = (link: string) => {
    window.location.href = link;
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="relative overflow-hidden"
    >
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${promotionalContent[currentSlide].color} text-white py-4 px-6 relative`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-3xl animate-pulse">
              {promotionalContent[currentSlide].icon}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">
                {promotionalContent[currentSlide].title}
              </h3>
              <p className="text-sm opacity-90">
                {promotionalContent[currentSlide].description}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleClick(promotionalContent[currentSlide].link)}
              className="bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-sm"
            >
              Explore Now →
            </button>
            <button
              onClick={handleClose}
              className="text-white hover:text-gray-200 transition-colors text-xl"
            >
              ×
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="bg-gray-900 py-2">
        <div className="container mx-auto flex justify-center space-x-2">
          {promotionalContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => handleClick(promotionalContent[currentSlide].link)}
          className={`bg-gradient-to-r ${promotionalContent[currentSlide].color} text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce`}
        >
          <span className="text-2xl">{promotionalContent[currentSlide].icon}</span>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default NewContentPromotionBanner2025;