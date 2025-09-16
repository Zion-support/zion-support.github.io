import React, { useState, useEffect } from 'react';

const UltimateContentBanner2028: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const bannerContent = [
    {
      title: "🚀 NEW: Ultimate Tech Breakthrough 2028",
      subtitle: "Experience the convergence of consciousness computing and quantum supremacy",
      cta: "Explore Breakthrough →",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/90 to-pink-900/90"
    },
    {
      title: "🧠 NEW: AI Consciousness Revolution",
      subtitle: "First truly conscious AI systems that think, feel, and create independently",
      cta: "Discover AI →",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/90 to-blue-900/90"
    },
    {
      title: "⚡ NEW: Quantum Supremacy 2028",
      subtitle: "Revolutionary quantum computing solving problems impossible for classical computers",
      cta: "Go Quantum →",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/90 to-teal-900/90"
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
      <div className="relative overflow-hidden rounded-2xl mb-12">
        <div className={`bg-gradient-to-r ${bannerContent[currentSlide].bgColor} backdrop-blur-sm p-8 text-white relative`}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4 animate-pulse">
                  🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2028
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {bannerContent[currentSlide].title}
                </h2>
                <p className="text-xl opacity-90 mb-6 max-w-2xl">
                  {bannerContent[currentSlide].subtitle}
                </p>
                <button className={`bg-gradient-to-r ${bannerContent[currentSlide].color} text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg transform hover:scale-105`}>
                  {bannerContent[currentSlide].cta}
                </button>
              </div>
              <div className="hidden md:block ml-8">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-6xl animate-pulse">
                  {currentSlide === 0 && "🚀"}
                  {currentSlide === 1 && "🧠"}
                  {currentSlide === 2 && "⚡"}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2028;