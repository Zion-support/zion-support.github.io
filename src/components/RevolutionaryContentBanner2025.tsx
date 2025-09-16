import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
      title: "🚀 NEW: Revolutionary Tech Showcase 2025",
      subtitle: "Experience the most advanced technologies reshaping our world",
      cta: "Explore Now",
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/20 to-pink-900/20"
    },
    {
      title: "🧠 AI Consciousness Revolution",
      subtitle: "Discover self-aware AI systems that think and feel",
      cta: "Learn More",
      link: "/pages/AIConsciousness2025",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/20 to-blue-900/20"
    },
    {
      title: "⚡ Quantum Computing Breakthrough",
      subtitle: "Unlock infinite processing power with quantum technology",
      cta: "Go Quantum",
      link: "/pages/QuantumBreakthrough2025",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/20 to-teal-900/20"
    },
    {
      title: "🌌 Interdimensional Computing",
      subtitle: "Process data across multiple dimensions for unlimited capacity",
      cta: "Enter Dimensions",
      link: "/pages/InterdimensionalComputing2025",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-900/20 to-purple-900/20"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden mb-8"
    >
      {/* Background with animated gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgColor} backdrop-blur-sm`}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -right-10 w-32 h-32 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/4 w-16 h-16 bg-cyan-500/20 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center">
          {/* Main content */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-full text-sm font-bold mb-4 animate-bounce">
              ⭐ BREAKTHROUGH TECHNOLOGY
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${slides[currentSlide].color} bg-clip-text text-transparent`}>
              {slides[currentSlide].title}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={slides[currentSlide].link}
                className={`inline-block bg-gradient-to-r ${slides[currentSlide].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg transform hover:scale-105`}
              >
                {slides[currentSlide].cta} →
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Slide indicators */}
          <div className="flex justify-center space-x-2 mb-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🧠</div>
              <div className="text-sm font-semibold">Conscious AI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-sm font-semibold">Quantum Power</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🌌</div>
              <div className="text-sm font-semibold">Multi-Dimensional</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🌟</div>
              <div className="text-sm font-semibold">Revolutionary</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated border */}
      <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-lg animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg m-0.5"></div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;