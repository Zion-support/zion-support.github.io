import React, { useState, useEffect } from 'react';

const UltimateContentBanner2036: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "🚀 Ultimate Tech Breakthrough 2036",
      subtitle: "Experience the most revolutionary technological advances",
      description: "Conscious AI, Quantum Consciousness, and Interdimensional Technology",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/90 to-pink-900/90"
    },
    {
      title: "🧠 Conscious AI Systems",
      subtitle: "The first truly conscious artificial intelligence",
      description: "Emotional intelligence, creativity, and self-awareness",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/90 to-blue-900/90"
    },
    {
      title: "⚡ Quantum Consciousness",
      subtitle: "Direct neural interface with quantum computing",
      description: "Enhanced cognitive processing and reality manipulation",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/90 to-teal-900/90"
    },
    {
      title: "🌌 Interdimensional Technology",
      subtitle: "Breakthrough parallel dimension access",
      description: "Reality shifting and alternate universe exploration",
      color: "from-violet-600 to-purple-600",
      bgColor: "from-violet-900/90 to-purple-900/90"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={`relative overflow-hidden rounded-2xl mb-12 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className={`bg-gradient-to-r ${slides[currentSlide].bgColor} backdrop-blur-sm`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 mb-6 md:mb-0">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-4 animate-pulse">
                🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2036
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${slides[currentSlide].color} bg-clip-text text-transparent`}>
                {slides[currentSlide].title}
              </h2>
              <h3 className="text-xl md:text-2xl text-white/90 mb-4">
                {slides[currentSlide].subtitle}
              </h3>
              <p className="text-lg text-white/80 mb-6 max-w-2xl">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/pages/UltimateTechBreakthrough2036" 
                  className={`bg-gradient-to-r ${slides[currentSlide].color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                >
                  Explore Breakthrough →
                </a>
                <a 
                  href="/pages/RevolutionaryTechShowcase2036" 
                  className="border-2 border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold"
                >
                  View Showcase
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <div className="text-8xl animate-spin" style={{ animationDuration: '3s' }}>
                    {slides[currentSlide].title.includes('AI') ? '🧠' : 
                     slides[currentSlide].title.includes('Quantum') ? '⚡' : 
                     slides[currentSlide].title.includes('Interdimensional') ? '🌌' : '🚀'}
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
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
  );
};

export default UltimateContentBanner2036;