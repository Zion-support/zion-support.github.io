import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NewContentPromotionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPromotion, setCurrentPromotion] = useState(0);

  const promotions = [
    {
      title: "🚀 AI 2025 Ultimate Breakthrough Revolution",
      description: "Experience 10,000% ROI with revolutionary AI technology",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      badge: "BREAKTHROUGH",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "⚛️ Quantum Computing Solutions 2025",
      description: "Revolutionary quantum technology delivering 15,000% ROI",
      link: "/quantum-computing-solutions-2025",
      badge: "REVOLUTIONARY",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "📚 AI 2025 Ultimate Implementation Master Guide",
      description: "Complete transformation blueprint for 10,000% ROI",
      link: "/resources/ai-2025-ultimate-implementation-master-guide",
      badge: "MASTER GUIDE",
      color: "from-yellow-500 to-orange-500"
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
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${current.color} text-white text-sm font-bold animate-pulse`}>
              {current.badge}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white truncate">
              {current.title}
            </h3>
            <p className="text-sm text-gray-300 truncate">
              {current.description}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href={current.link}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-2 rounded-lg text-sm font-bold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
          >
            Discover Now
          </Link>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
        <div 
          className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-5000 ease-linear"
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
}