import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RevolutionaryContentPromotionBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotionalContent = [
    {
      id: 1,
      title: "🚀 AI 2025 Ultimate Breakthrough Revolution",
      subtitle: "5,000% ROI Guaranteed - Revolutionary AI Technology",
      description: "Experience the most revolutionary AI breakthrough in history with quantum-enhanced neural networks and transcendent intelligence systems.",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      badge: "BREAKTHROUGH",
      gradient: "from-red-500 to-pink-500",
      textColor: "text-red-400"
    },
    {
      id: 2,
      title: "⚛️ Quantum Computing Breakthrough 2026",
      subtitle: "10,000x Processing Power - Quantum Supremacy Achieved",
      description: "Revolutionary quantum computing breakthrough with error-corrected quantum computers and quantum-AI fusion technology.",
      link: "/quantum-computing-breakthrough-2026",
      badge: "REVOLUTIONARY",
      gradient: "from-cyan-500 to-blue-500",
      textColor: "text-cyan-400"
    },
    {
      id: 3,
      title: "🧠 AI 2026 Quantum-Neural Fusion",
      subtitle: "15,000% ROI - Next-Generation AI Systems",
      description: "Breakthrough quantum-neural fusion technology delivering unprecedented processing power and business transformation.",
      link: "/ai-2026-quantum-neural-fusion-breakthrough",
      badge: "FUTURE",
      gradient: "from-purple-500 to-indigo-500",
      textColor: "text-purple-400"
    },
    {
      id: 4,
      title: "🌌 AI 2030 Transcendent Intelligence",
      subtitle: "∞ ROI - Transcendent AI Consciousness",
      description: "Experience transcendent AI intelligence that transcends human limitations and provides infinite business value.",
      link: "/ai-2030-transcendent-intelligence",
      badge: "TRANSCENDENT",
      gradient: "from-yellow-500 to-orange-500",
      textColor: "text-yellow-400"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentContent = promotionalContent[currentSlide];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-gray-800 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-4">
              <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${currentContent.gradient} text-white text-sm font-bold animate-pulse`}>
                {currentContent.badge}
              </div>
              <h3 className={`text-lg md:text-xl font-bold ${currentContent.textColor} truncate`}>
                {currentContent.title}
              </h3>
            </div>
            <p className="text-sm text-gray-300 mt-1 line-clamp-1">
              {currentContent.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3 ml-4">
            <Link
              href={currentContent.link}
              className={`bg-gradient-to-r ${currentContent.gradient} text-white px-4 py-2 rounded-lg font-semibold text-sm hover:scale-105 transition-transform whitespace-nowrap`}
            >
              Explore Now
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              Get Access
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Close banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex space-x-1 mt-3">
          {promotionalContent.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? `bg-gradient-to-r ${currentContent.gradient} w-8` 
                  : 'bg-gray-600 w-2'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating elements for visual appeal */}
      <div className="absolute top-2 right-4 text-2xl opacity-20 animate-bounce">
        ⚛️
      </div>
      <div className="absolute bottom-2 left-4 text-xl opacity-20 animate-pulse">
        🚀
      </div>
    </div>
  );
}