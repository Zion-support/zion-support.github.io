import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2030: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Ultimate Tech Revolution 2030",
      subtitle: "Consciousness Computing • Quantum Reality • Interdimensional Tech",
      icon: "🚀",
      color: "from-purple-600 via-pink-600 to-red-600",
      link: "/pages/UltimateTechRevolution2030"
    },
    {
      title: "Consciousness Computing Revolution 2035",
      subtitle: "Neural-AI Fusion • Digital Immortality • Enhanced Capabilities",
      icon: "🧠",
      color: "from-indigo-600 via-purple-600 to-pink-600",
      link: "/pages/ConsciousnessComputingRevolution2035"
    },
    {
      title: "Interdimensional Tech Revolution 2040",
      subtitle: "Dimensional Portals • Multiverse Access • Reality Manipulation",
      icon: "🌌",
      color: "from-purple-600 via-indigo-600 to-cyan-600",
      link: "/pages/InterdimensionalTechRevolution2040"
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
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${slides[currentSlide].color} rounded-2xl p-8 text-white text-center relative overflow-hidden transition-all duration-1000`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl animate-bounce">{slides[currentSlide].icon}</span>
            <h3 className="text-3xl font-bold">REVOLUTIONARY BREAKTHROUGH CONTENT 2030-2040</h3>
            <span className="text-4xl animate-bounce">{slides[currentSlide].icon}</span>
          </div>
          <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
            Experience the future of technology with our groundbreaking new content featuring 
            {slides[currentSlide].subtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {slides.map((slide, index) => (
              <a
                key={index}
                href={slide.link}
                className={`inline-block backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 ${
                  index === currentSlide ? 'bg-white/30 scale-105' : 'bg-white/20'
                }`}
              >
                <span className="text-2xl mr-2">{slide.icon}</span>
                {slide.title} →
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-purple-600 scale-125' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Additional Content Links */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <a href="/pages/UltimateTechRevolution2030" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
          <div className="text-3xl mb-2">🚀</div>
          <div>Ultimate Tech 2030</div>
        </a>
        <a href="/pages/ConsciousnessComputingRevolution2035" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
          <div className="text-3xl mb-2">🧠</div>
          <div>Consciousness 2035</div>
        </a>
        <a href="/pages/InterdimensionalTechRevolution2040" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
          <div className="text-3xl mb-2">🌌</div>
          <div>Interdimensional 2040</div>
        </a>
        <a href="/revolutionary-showcase-2030" className="bg-gradient-to-r from-pink-600 to-red-600 text-white px-6 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
          <div className="text-3xl mb-2">🌟</div>
          <div>Interactive Demo</div>
        </a>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2030;