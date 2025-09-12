import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NewContentPromotionBanner2025() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const newContent = [
    {
      title: "AI 2025 Breakthrough Content Showcase",
      description: "Interactive demos, case studies, and revolutionary technologies",
      link: "/ai-2025-breakthrough-content-showcase",
      badge: "NEW",
      color: "from-red-500 to-pink-500",
      icon: "🚀"
    },
    {
      title: "15,000% ROI Finance Transformation",
      description: "Revolutionary success story with detailed metrics and implementation",
      link: "/case-studies/ai-2025-global-finance-transformation-breakthrough",
      badge: "BREAKTHROUGH",
      color: "from-green-500 to-blue-500",
      icon: "💰"
    },
    {
      title: "AI 2026 Future Predictions Interactive",
      description: "Explore revolutionary AI breakthroughs with interactive timeline",
      link: "/ai-2026-future-predictions-interactive",
      badge: "FUTURE",
      color: "from-purple-500 to-cyan-500",
      icon: "🔮"
    },
    {
      title: "Quantum Computing Solutions Showcase",
      description: "Interactive demos and revolutionary quantum AI technologies",
      link: "/quantum-computing-solutions-showcase",
      badge: "REVOLUTIONARY",
      color: "from-indigo-500 to-purple-500",
      icon: "⚛️"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % newContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [newContent.length]);

  if (!isVisible) return null;

  const current = newContent[currentContent];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl animate-bounce">{current.icon}</div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${current.color} text-white animate-pulse`}>
                    {current.badge}
                  </span>
                  <span className="text-sm text-blue-200">New Content Available</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {current.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {current.description}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                href={current.link}
                className="px-6 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Now
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
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-100 ease-linear"
          style={{ width: `${((currentContent + 1) / newContent.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}