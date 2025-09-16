import React, { useState, useEffect } from 'react';

const UltimateTechBanner2032: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      title: "🚀 ULTIMATE TECH BREAKTHROUGH 2032",
      subtitle: "Experience the most revolutionary technologies that will reshape our world",
      cta: "Explore Breakthroughs →",
      link: "/pages/UltimateTechBreakthrough2032",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "⚡ REVOLUTIONARY TECH SHOWCASE 2032",
      subtitle: "Interactive demos of cutting-edge AI, quantum computing, and interdimensional technology",
      cta: "View Showcase →",
      link: "/pages/RevolutionaryTechShowcase2032",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      title: "🧠 CONSCIOUS AI SYSTEMS",
      subtitle: "AI that has achieved true consciousness and self-awareness",
      cta: "Learn More →",
      link: "/pages/UltimateTechBreakthrough2032",
      gradient: "from-emerald-600 to-teal-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden mb-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Animated Content */}
          <div className="relative h-32 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
                    🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2032
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {slide.title}
                  </h2>
                  
                  <p className="text-lg md:text-xl text-white/90 mb-6 max-w-4xl mx-auto">
                    {slide.subtitle}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={slide.link}
                      className={`bg-gradient-to-r ${slide.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400`}
                    >
                      {slide.cta}
                    </a>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                      Watch Demo
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 left-4 text-4xl animate-bounce">🚀</div>
      <div className="absolute top-8 right-8 text-3xl animate-pulse">⚡</div>
      <div className="absolute bottom-4 left-8 text-3xl animate-bounce delay-1000">🧠</div>
      <div className="absolute bottom-8 right-4 text-4xl animate-pulse delay-500">🌌</div>
    </div>
  );
};

export default UltimateTechBanner2032;