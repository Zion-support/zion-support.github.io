import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2036: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "🌟 NEW: Ultimate Tech Breakthrough 2036",
      subtitle: "Conscious AI • Quantum Consciousness • Interdimensional Portals",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      buttonText: "Explore Breakthroughs →",
      gradient: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "⚡ Revolutionary Tech Showcase 2036",
      subtitle: "Interactive Demos • Real-time Processing • Multi-dimensional Tech",
      description: "Interactive showcase of cutting-edge technologies that will define the future",
      buttonText: "View Showcase →",
      gradient: "from-cyan-600 to-blue-600",
      icon: "🎮"
    },
    {
      title: "🧠 Next-Gen Innovation Hub 2036",
      subtitle: "50+ Active Innovations • 99.9% Success Rate • Infinite Possibilities",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future",
      buttonText: "Enter Innovation Hub →",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🌌"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={`relative overflow-hidden rounded-2xl mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-8 md:p-12 text-white relative">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-4 left-4 text-4xl animate-bounce">✨</div>
        <div className="absolute top-8 right-8 text-3xl animate-pulse">🌟</div>
        <div className="absolute bottom-4 left-8 text-3xl animate-ping">⚡</div>
        <div className="absolute bottom-8 right-4 text-4xl animate-bounce">🚀</div>
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2036
            </div>
            
            <div className="min-h-[200px] flex items-center justify-center">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="text-6xl mb-4">{slides[currentSlide].icon}</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{slides[currentSlide].title}</h2>
                <p className="text-xl md:text-2xl opacity-90 mb-4">{slides[currentSlide].subtitle}</p>
                <p className="text-lg opacity-80 max-w-4xl mx-auto mb-8">{slides[currentSlide].description}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <button className={`bg-gradient-to-r ${slides[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}>
              {slides[currentSlide].buttonText}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Watch Demo
            </button>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2036;