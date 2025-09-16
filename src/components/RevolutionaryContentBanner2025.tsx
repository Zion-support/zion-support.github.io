import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      title: "🚀 NEW: Revolutionary AI Solutions 2025",
      subtitle: "Experience the future of artificial intelligence",
      cta: "Explore Now",
      link: "/pages/RevolutionaryAISolutions2025",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 to-pink-900"
    },
    {
      title: "⚡ Quantum Computing Breakthrough",
      subtitle: "Unprecedented processing power for complex problems",
      cta: "Learn More",
      link: "/pages/QuantumComputingBreakthrough",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900 to-blue-900"
    },
    {
      title: "🧠 Neural Interface Technology",
      subtitle: "Direct brain-computer interaction is here",
      cta: "Experience It",
      link: "/pages/NeuralInterfaceFuture",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900 to-teal-900"
    },
    {
      title: "🌟 Interactive Tech Showcase",
      subtitle: "Hands-on demonstrations of cutting-edge tech",
      cta: "Try Demo",
      link: "/pages/InteractiveTechShowcase2025",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-900 to-red-900"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden mb-8">
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgColor} opacity-90`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
            <div className="absolute bottom-10 right-1/3 w-8 h-8 bg-white/10 rounded-full animate-pulse delay-3000"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-sm font-bold rounded-full animate-pulse">
                🔥 HOT
              </div>
              <div className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                NEW CONTENT
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {slides[currentSlide].title}
            </h2>
            
            <p className="text-xl text-white/90 mb-6 max-w-2xl">
              {slides[currentSlide].subtitle}
            </p>
            
            <div className="flex items-center space-x-4">
              <a
                href={slides[currentSlide].link}
                className={`bg-gradient-to-r ${slides[currentSlide].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
              >
                {slides[currentSlide].cta} →
              </a>
              <button className="text-white/80 hover:text-white transition-colors duration-300 underline">
                Learn More
              </button>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="text-white/60 hover:text-white transition-colors duration-300 p-2 hover:bg-white/10 rounded-full"
            aria-label="Close banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white/20 rounded-full animate-ping delay-2000"></div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;