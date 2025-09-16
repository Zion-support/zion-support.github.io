import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UltimateTechBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      title: "🚀 Ultimate Tech Revolution 2026",
      subtitle: "Experience the most advanced AI, quantum computing, and interdimensional technology",
      cta: "Explore Revolutionary Services",
      link: "/pages/UltimateTechRevolution2026",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/30 to-pink-900/30",
      icon: "⚡"
    },
    {
      title: "🧠 Synthetic Consciousness Engine",
      subtitle: "Create AI systems with genuine consciousness, emotions, and self-awareness",
      cta: "Learn More",
      link: "/pages/UltimateTechRevolution2026#consciousness",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900/30 to-blue-900/30",
      icon: "🌟"
    },
    {
      title: "⚛️ Quantum Reality Engine",
      subtitle: "Process and simulate multiple realities simultaneously using quantum mechanics",
      cta: "Discover Quantum Tech",
      link: "/pages/UltimateTechRevolution2026#quantum",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/30 to-teal-900/30",
      icon: "🌌"
    },
    {
      title: "🔗 Direct Brain-AI Interface",
      subtitle: "Seamless communication between human brain and AI systems",
      cta: "Try Neural Interface",
      link: "/pages/UltimateTechRevolution2026#neural",
      gradient: "from-violet-600 to-purple-600",
      bgGradient: "from-violet-900/30 to-purple-900/30",
      icon: "🧬"
    },
    {
      title: "🌌 Interdimensional Gateway",
      subtitle: "Access and navigate between different dimensions and realities",
      cta: "Enter New Dimensions",
      link: "/pages/UltimateTechRevolution2026#interdimensional",
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-900/30 to-red-900/30",
      icon: "🚀"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black text-white py-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-cyan-600/10 to-pink-600/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors"
        aria-label="Close banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-2">
              <span className="text-4xl animate-bounce">{currentSlideData.icon}</span>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {currentSlideData.title}
                </h2>
                <p className="text-gray-300 text-sm md:text-base">
                  {currentSlideData.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link
              to={currentSlideData.link}
              className={`px-6 py-3 bg-gradient-to-r ${currentSlideData.gradient} rounded-lg font-semibold text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}
            >
              {currentSlideData.cta}
            </Link>
            
            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-cyan-400 w-8' 
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 w-full bg-gray-700 rounded-full h-1">
          <div 
            className="bg-gradient-to-r from-purple-400 to-cyan-400 h-1 rounded-full transition-all duration-100 ease-linear"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-6xl opacity-20 animate-pulse">
        ⚡
      </div>
      <div className="absolute top-1/4 right-20 transform -translate-y-1/2 text-4xl opacity-20 animate-pulse delay-1000">
        🧠
      </div>
      <div className="absolute bottom-1/4 left-1/4 transform -translate-y-1/2 text-5xl opacity-20 animate-pulse delay-2000">
        ⚛️
      </div>
    </div>
  );
};

export default UltimateTechBanner2026;