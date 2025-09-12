import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2026PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const featuredContent = [
    {
      title: "AI 2026: Revolutionary Breakthroughs",
      description: "Discover the groundbreaking AI innovations that will transform everything",
      link: "/blog/ai-2026-revolutionary-breakthroughs",
      badge: "NEW",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "500% ROI Enterprise Transformation",
      description: "How a Fortune 500 company achieved unprecedented success with AI",
      link: "/case-studies/ai-2026-global-enterprise-transformation-success",
      badge: "CASE STUDY",
      color: "from-green-500 to-blue-600"
    },
    {
      title: "Complete Implementation Master Guide",
      description: "The definitive blueprint for AI 2026 implementation success",
      link: "/resources/ai-2026-complete-implementation-master-guide",
      badge: "GUIDE",
      color: "from-purple-500 to-pink-600"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const current = featuredContent[currentContent];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left side - Content info */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  {current.badge}
                </span>
                <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  AI 2026
                </span>
                <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  JUST RELEASED
                </span>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold mb-2 leading-tight">
                {current.title}
              </h2>
              
              <p className="text-lg text-blue-100 mb-4 max-w-2xl">
                {current.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link 
                  href={current.link}
                  className={`bg-gradient-to-r ${current.color} hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg`}
                >
                  Read Now →
                </Link>
                <Link 
                  href="/mega-content-showcase-2026"
                  className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm border border-white/30"
                >
                  View All Content
                </Link>
              </div>
            </div>

            {/* Right side - Visual elements */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Rotating content indicators */}
                <div className="flex space-x-2 mb-4 justify-center lg:justify-end">
                  {featuredContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentContent(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentContent 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to content ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Animated icons */}
                <div className="flex items-center space-x-4 text-4xl">
                  <div className="animate-bounce">🚀</div>
                  <div className="animate-pulse">⚡</div>
                  <div className="animate-bounce delay-100">🧠</div>
                  <div className="animate-pulse delay-200">⚛️</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
      </div>

      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        aria-label="Close banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default NewContent2026PromotionBanner;