'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const contentPromotions = [
  {
    id: 1,
    title: "🚀 AI 2026 Breakthrough Showcase",
    description: "Revolutionary quantum-neural fusion with 15,000% ROI",
    link: "/ai-2026-breakthrough-showcase",
    badge: "BREAKTHROUGH",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    id: 2,
    title: "🔮 AI 2027 Future Predictions",
    description: "Neural synthesis and quantum AI fusion technologies",
    link: "/ai-2027-future-predictions",
    badge: "FUTURE",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50"
  },
  {
    id: 3,
    title: "⚛️ Quantum Computing Solutions 2026",
    description: "Breakthrough quantum technologies with 25,000% ROI",
    link: "/quantum-computing-solutions-breakthrough-2026",
    badge: "REVOLUTIONARY",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-50 to-blue-50"
  },
  {
    id: 4,
    title: "🏢 Enterprise AI Transformation",
    description: "Complete enterprise solutions with 5,000% ROI",
    link: "/case-studies/ai-2026-global-enterprise-transformation-breakthrough",
    badge: "SUCCESS",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50"
  },
  {
    id: 5,
    title: "🧠 Neural Interface Revolution",
    description: "95% patient recovery success in healthcare AI",
    link: "/case-studies/ai-2026-neural-interface-healthcare-breakthrough",
    badge: "BREAKTHROUGH",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50"
  }
];

export default function DynamicContentPromotionBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentPromotions.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentPromotion = contentPromotions[currentIndex];

  if (!isVisible) return null;

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r ${currentPromotion.bgGradient} border-b border-gray-200`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${currentPromotion.gradient} text-white rounded-full text-sm font-semibold animate-pulse`}>
                {currentPromotion.badge}
              </div>
              <div className="flex-1">
                <Link 
                  href={currentPromotion.link}
                  className="group block"
                >
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {currentPromotion.title}
                  </h3>
                  <p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                    {currentPromotion.description}
                  </p>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href={currentPromotion.link}
              className="px-4 py-2 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-sm"
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
        
        {/* Progress indicator */}
        <div className="flex space-x-1 mt-3">
          {contentPromotions.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? `bg-gradient-to-r ${currentPromotion.gradient} w-8` 
                  : 'bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}