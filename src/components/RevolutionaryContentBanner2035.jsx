import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2035 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      title: "🌟 ULTIMATE TECH SHOWCASE 2035",
      subtitle: "Experience the future of consciousness computing and interdimensional interfaces",
      cta: "Explore Ultimate Tech →",
      link: "/pages/UltimateTechShowcase2035",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🚀"
    },
    {
      title: "🧠 NEURAL CONSCIOUSNESS REVOLUTION",
      subtitle: "Discover AI consciousness and mind-machine fusion technology",
      cta: "Enter Neural World →",
      link: "/pages/NeuralConsciousnessRevolution2035",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "⚡ INTERACTIVE TECH DEMO 2035",
      subtitle: "Try our revolutionary technologies through interactive demonstrations",
      cta: "Start Demo →",
      link: "/interactive-demo-2035",
      gradient: "from-cyan-600 via-blue-600 to-purple-600",
      icon: "⚡"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  if (!isVisible) return null;

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative overflow-hidden mb-8">
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${currentSlideData.gradient} rounded-2xl p-8 text-white text-center relative overflow-hidden transition-all duration-1000`}>
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
          <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-8 right-16 w-1 h-1 bg-white/50 rounded-full animate-ping"></div>
        </div>

        <div className="relative z-10">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-4xl animate-bounce">{currentSlideData.icon}</span>
            <h3 className="text-3xl md:text-4xl font-bold">{currentSlideData.title}</h3>
            <span className="text-4xl animate-bounce">{currentSlideData.icon}</span>
          </div>

          <p className="text-xl md:text-2xl opacity-95 mb-8 max-w-5xl mx-auto leading-relaxed">
            {currentSlideData.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href={currentSlideData.link}
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg border border-white/30 hover:scale-105 transform"
            >
              {currentSlideData.cta}
            </a>
            <a
              href="/pages/ComprehensiveServices2025"
              className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-lg border border-white/20"
            >
              View All Services →
            </a>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2">
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

      {/* Additional Content Links */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <a
          href="/pages/UltimateTechShowcase2035"
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 border border-purple-400/30"
        >
          <div className="text-2xl mb-2">🌟</div>
          <div className="font-semibold text-white">Ultimate Tech 2035</div>
          <div className="text-sm text-purple-200">Consciousness Computing</div>
        </a>
        <a
          href="/pages/NeuralConsciousnessRevolution2035"
          className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 border border-indigo-400/30"
        >
          <div className="text-2xl mb-2">🧠</div>
          <div className="font-semibold text-white">Neural Revolution</div>
          <div className="text-sm text-indigo-200">Mind-Machine Fusion</div>
        </a>
        <a
          href="/interactive-demo-2035"
          className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 border border-cyan-400/30"
        >
          <div className="text-2xl mb-2">⚡</div>
          <div className="font-semibold text-white">Interactive Demo</div>
          <div className="text-sm text-cyan-200">Try Technology Now</div>
        </a>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2035;