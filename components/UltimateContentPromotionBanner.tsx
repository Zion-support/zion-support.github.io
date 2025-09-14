"use client";
'use client';

import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

const UltimateContentPromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentSlidesetCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }4000);
    return () => clearInterval(interval);
  }[]);

  const slides = [
    {
      title: "🚀 AI 2025 Ultimate Breakthrough",
      subtitle: "Revolutionary Automation Solutions",
      description: "Transform your business with 10,000% ROI automation systems",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      bgGradient: "from-purple-50 via-pink-50 to-red-50"
    },
    {
      title: "🔮 AI 2026 Future Predictions",
      subtitle: "Next-Generation Technology",
      description: "Discover the future of AI with 15,000% ROI predictions",
      link: "/ai-2026-future-predictions-breakthrough",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      bgGradient: "from-cyan-50 via-blue-50 to-indigo-50"
    },
    {
      title: "⚡ Quantum Neural Fusion",
      subtitle: "Revolutionary Breakthrough",
      description: "Experience the power of quantum-enhanced AI systems",
      link: "/ai-2026-quantum-neural-fusion-revolution",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      bgGradient: "from-emerald-50 via-teal-50 to-cyan-50"
    }
  ];

  return (
    <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 opacity-20 animate-pulse"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 animate-bounce delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-20 animate-bounce delay-2000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                ULTIMATE CONTENT
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                REVOLUTION 2025-2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
              Experience the most comprehensive collection of AI breakthrough content
              revolutionary automation solutionsand future technology predictions
            </p>
          </div>

          {/* Rotating Content Cards */}
          <div className="relative h-64 mb-12">
            {slides.map((slideindex) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 transform ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0 scale-100'
                    : index < currentSlide
                    ? 'opacity-0 -translate-x-full scale-95'
                    : 'opacity-0 translate-x-full scale-95'
                }`}
              >
                <div className={`bg-gradient-to-br ${slide.bgGradient} rounded-2xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm`}>
                  <h3 className={`text-3xl font-bold bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent mb-4`}>
                    {slide.title}
                  </h3>
                  <p className="text-xl text-gray-700 mb-2">{slide.subtitle}</p>
                  <p className="text-lg text-gray-600 mb-6">{slide.description}</p>
                  <Link
                    href={slide.link}
                    className={`inline-block px-8 py-4 bg-gradient-to-r ${slide.gradient} text-white font-bold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    Explore Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">10,000% ROI</h3>
              <p className="text-gray-600">Proven automation solutions with unprecedented returns</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Future-Ready</h3>
              <p className="text-gray-600">Cutting-edge technology for tomorrow's challenges</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Impact</h3>
              <p className="text-gray-600">Immediate results with our breakthrough solutions</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Start Your AI Journey
            </Link>
            <Link
              href="/ai-2026-future-predictions-breakthrough"
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Explore Future Tech
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}