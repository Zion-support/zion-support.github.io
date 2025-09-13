import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2026UltimateBreakthroughBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "🚀 AI 2026 Ultimate Breakthrough",
      subtitle: "15,000% ROI • 99.8% Accuracy • Revolutionary Results",
      link: "/ai-2026-ultimate-breakthrough-showcase",
      bgColor: "from-purple-500 to-pink-500",
      textColor: "text-white"
    },
    {
      title: "⚛️ Quantum-Neural Fusion Success",
      subtitle: "See How We Achieved 15,000% ROI in Manufacturing",
      link: "/case-studies/ai-2026-quantum-neural-fusion-success",
      bgColor: "from-blue-500 to-cyan-500",
      textColor: "text-white"
    },
    {
      title: "🧠 Revolutionary AI Breakthroughs",
      subtitle: "Discover the Future of AI in 2026",
      link: "/blog/ai-2026-revolutionary-breakthroughs",
      bgColor: "from-green-500 to-emerald-500",
      textColor: "text-white"
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 opacity-90">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
            <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-3000"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Main Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-4 animate-pulse">
                🚀 ULTIMATE BREAKTHROUGH 2026
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {slides[currentSlide].title}
              </h2>
              
              <p className="text-lg md:text-xl text-white/90 mb-6">
                {slides[currentSlide].subtitle}
              </p>

              {/* Key Metrics */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-lg font-bold text-white">15,000% ROI</div>
                  <div className="text-xs text-white/80">Average Success</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-lg font-bold text-white">99.8%</div>
                  <div className="text-xs text-white/80">Accuracy Rate</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-lg font-bold text-white">∞</div>
                  <div className="text-xs text-white/80">Potential</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  href={slides[currentSlide].link}
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Now →
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent text-white px-6 py-3 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-purple-600 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Rotating Icons */}
                <div className="w-32 h-32 relative">
                  <div className="absolute inset-0 animate-spin">
                    <div className="w-full h-full border-4 border-white/20 rounded-full"></div>
                  </div>
                  <div className="absolute inset-2 animate-spin-reverse">
                    <div className="w-full h-full border-4 border-white/30 rounded-full"></div>
                  </div>
                  <div className="absolute inset-4 flex items-center justify-center">
                    <div className="text-4xl">⚛️</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/20 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-white/20 rounded-full animate-bounce delay-2000"></div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center lg:justify-start mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
        aria-label="Close banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default AI2026UltimateBreakthroughBanner;