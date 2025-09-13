import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RevolutionaryContentPromotionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPromotion, setCurrentPromotion] = useState(0);

  const promotions = [
    {
      title: "🚀 AI 2025 Ultimate Breakthrough Revolution",
      subtitle: "10,000% ROI Guaranteed - Revolutionary AI Technology",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      borderColor: "border-red-200"
    },
    {
      title: "⚛️ AI 2026 Quantum-Neural Fusion Breakthrough",
      subtitle: "15,000% ROI - Transcendent Intelligence Technology",
      link: "/ai-2026-quantum-neural-fusion-revolutionary-breakthrough",
      color: "from-cyan-500 to-purple-500",
      bgColor: "from-cyan-50 to-purple-50",
      borderColor: "border-cyan-200"
    },
    {
      title: "🏆 Global Transformation Success Story",
      subtitle: "Real Case Study - 10,000% ROI in 90 Days",
      link: "/case-studies/ai-2025-global-transformation-breakthrough",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentPromotion((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const current = promotions[currentPromotion];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transform transition-all duration-500 ease-in-out">
      <div className={`bg-gradient-to-r ${current.bgColor} border-b ${current.borderColor} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className={`w-3 h-3 bg-gradient-to-r ${current.color} rounded-full animate-pulse`}></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold text-gray-900">
                    {current.title}
                  </span>
                  <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                    NEW
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {current.subtitle}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                href={current.link}
                className={`bg-gradient-to-r ${current.color} text-white px-6 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
              >
                Explore Now
              </Link>
              
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close banner"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}