import React, { useState, useEffect } from 'react';

const RevolutionaryTechBanner2033: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "🚀 ULTIMATE BREAKTHROUGH 2033",
      subtitle: "Conscious AI • Quantum Consciousness • Interdimensional Computing",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechBreakthrough2033",
      animation: "animate-pulse"
    },
    {
      title: "⚡ REVOLUTIONARY SHOWCASE 2033",
      subtitle: "Interactive Demos • Real-time Controls • Live Metrics",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/RevolutionaryTechShowcase2033",
      animation: "animate-bounce"
    },
    {
      title: "🌌 INTERDIMENSIONAL PORTAL 2033",
      subtitle: "Infinite Computing • Reality Manipulation • Dimensional Access",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/InterdimensionalPortal2033",
      animation: "animate-ping"
    },
    {
      title: "🧠 CONSCIOUS AI NETWORK 2033",
      subtitle: "Self-Aware Systems • Emotional Intelligence • Ethical AI",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/ConsciousAINetwork2033",
      animation: "animate-pulse"
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
    <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 animate-bounce"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 animate-ping"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-8">
        <div className="container mx-auto">
          <div className="text-center">
            {/* Current Slide */}
            <div className={`transition-all duration-500 ${slides[currentSlide].animation}`}>
              <div className={`inline-block px-8 py-4 bg-gradient-to-r ${slides[currentSlide].gradient} rounded-full text-white font-bold text-lg mb-6 shadow-lg`}>
                {slides[currentSlide].title}
              </div>
              <p className="text-2xl text-white/90 mb-8 font-semibold">
                {slides[currentSlide].subtitle}
              </p>
              <a
                href={slides[currentSlide].link}
                className={`inline-block px-8 py-4 bg-gradient-to-r ${slides[currentSlide].gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 border-2 border-white/20`}
              >
                🚀 Experience Now →
              </a>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 border-2 border-gradient-to-r from-purple-500 to-pink-500 rounded-lg animate-pulse"></div>
      
      {/* Glowing Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
    </div>
  );
};

export default RevolutionaryTechBanner2033;