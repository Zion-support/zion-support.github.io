import React, { useState, useEffect } from 'react';

const UltimateTechBanner2030: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Ultimate Tech Revolution 2030",
      subtitle: "Experience the convergence of consciousness, quantum computing, and interdimensional technology",
      link: "/pages/UltimateTechRevolution2030",
      color: "from-purple-600 via-pink-600 to-red-600",
      icon: "🚀"
    },
    {
      title: "Consciousness Computing 2031",
      subtitle: "The ultimate fusion of human consciousness and artificial intelligence",
      link: "/pages/ConsciousnessComputingRevolution2031",
      color: "from-indigo-600 via-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "Interdimensional Tech 2032",
      subtitle: "Break through the barriers of reality and explore infinite dimensions",
      link: "/pages/InterdimensionalTechRevolution2032",
      color: "from-cyan-600 via-blue-600 to-purple-600",
      icon: "🌌"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden mb-12">
      <div
        key={currentSlide}
        className={`bg-gradient-to-r ${slides[currentSlide].color} rounded-2xl p-8 text-white text-center relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl animate-bounce">{slides[currentSlide].icon}</span>
            <h3 className="text-3xl font-bold">ULTIMATE BREAKTHROUGH CONTENT 2030-2032</h3>
            <span className="text-4xl animate-bounce">{slides[currentSlide].icon}</span>
          </div>
          <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href={slides[currentSlide].link}
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 text-lg"
            >
              Explore {slides[currentSlide].title.split(' ')[0]} →
            </a>
            <button className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 text-lg">
              Watch Demo
            </button>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
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
    </div>
  );
};

export default UltimateTechBanner2030;