"use client";
'use client';

import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

export default function ContentShowcaseBanner() {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentSlidesetCurrentSlide] = useState(0);

  const showcaseItems = [
    {
      title: "🚀 AI 2025 Ultimate Breakthrough Revolution",
      description: "Revolutionary AI systems delivering 2,500-5,000% ROI",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      image: "🎯",
      badge: "BREAKTHROUGH"
    },
    {
      title: "⚛️ Quantum-Neural Fusion Technology",
      description: "15,000% ROI potential with quantum computing integration",
      link: "/blog/ai-2026-quantum-neural-fusion-breakthrough",
      image: "🧠",
      badge: "REVOLUTIONARY"
    },
    {
      title: "🤖 Autonomous Operations Showcase",
      description: "99.9% accuracy with 10,000x faster processing",
      link: "/ai-2025-autonomous-operations-showcase",
      image: "⚡",
      badge: "NEW"
    },
    {
      title: "🏆 Global Enterprise Success Stories",
      description: "Real-world transformations with 10,000% ROI",
      link: "/case-studies/ai-2025-global-transformation-breakthrough",
      image: "💰",
      badge: "SUCCESS"
    },
    {
      title: "🔮 AI 2025 Revolutionary Trends & Predictions",
      description: "Expert insights into future AI breakthroughs",
      link: "/blog/ai-2025-revolutionary-trends-predictions",
      image: "🌟",
      badge: "TRENDS"
    }
  ];

  useEffect(() => {
    // Show banner after 3 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }3000);

    // Auto-rotate slides every 6 seconds
    const rotationTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
    }6000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(rotationTimer);
    };
  }[]);

  if (!isVisible) return null;

  const currentItem = showcaseItems[currentSlide];

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-sm">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-3">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-bold text-sm">🌟 Revolutionary Content</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close banner"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start space-x-3">
            <div className="text-3xl">{currentItem.image}</div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                  {currentItem.badge}
                </span>
              </div>
              <h4 className="font-bold text-gray-900 text-sm leading-tight mb-2">
                {currentItem.title}
              </h4>
              <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                {currentItem.description}
              </p>
              <Link
                href={currentItem.link}
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Now →
              </Link>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="px-4 pb-3">
          <div className="flex space-x-1">
            {showcaseItems.map((_index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-purple-600' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating animation elements */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
    </div>
  );
}