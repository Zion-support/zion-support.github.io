'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface RevolutionaryContentBannerProps {
  className?: string;
}

export default function RevolutionaryContentBanner({ className = '' }: RevolutionaryContentBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const revolutionaryContent = [
    {
      title: "AI 2025 Ultimate Revolutionary Breakthrough",
      subtitle: "Experience 10,000% ROI with our ultimate AI solutions",
      link: "/ai-2025-ultimate-revolutionary-breakthrough",
      badge: "🚀 BREAKTHROUGH",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "AI 2026 Ultimate Future Predictions",
      subtitle: "Discover revolutionary predictions for the future of AI",
      link: "/blog/ai-2026-ultimate-future-predictions",
      badge: "🔮 PREDICTIONS",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Quantum-AI Fusion Revolution",
      subtitle: "Experience 15,000% ROI with quantum computing integration",
      link: "/quantum-ai-fusion-2026",
      badge: "⚛️ REVOLUTIONARY",
      gradient: "from-indigo-600 to-cyan-600"
    },
    {
      title: "Transcendent Intelligence Systems",
      subtitle: "Achieve infinite ROI with consciousness-level AI",
      link: "/transcendent-intelligence-2026",
      badge: "🧠 TRANSCENDENT",
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % revolutionaryContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [revolutionaryContent.length]);

  const currentItem = revolutionaryContent[currentContent];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Badge */}
          <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${currentItem.gradient} text-white text-lg font-bold mb-6 transform transition-all duration-500 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          } animate-pulse`}>
            <span className="mr-2">{currentItem.badge.split(' ')[0]}</span>
            {currentItem.badge.split(' ').slice(1).join(' ')}
          </div>

          {/* Title */}
          <h2 className={`text-4xl md:text-6xl font-bold text-white mb-6 leading-tight transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {currentItem.title}
            </span>
          </h2>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed transform transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            {currentItem.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <Link 
              href={currentItem.link}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Discover Now
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              href="/revolutionary-content-showcase"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl"
            >
              View All Content
            </Link>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {revolutionaryContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentContent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentContent 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to content ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce">
          ⚛️
        </div>
        <div className="absolute top-20 right-20 text-5xl opacity-20 animate-pulse">
          🧠
        </div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-20 animate-bounce delay-1000">
          🚀
        </div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-pulse delay-500">
          🔮
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}