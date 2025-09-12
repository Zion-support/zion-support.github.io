import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltraContentPromotionBanner2026 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems = [
    {
      id: 1,
      title: "AI Implementation Mastery 2026",
      description: "Complete enterprise guide to AI transformation success",
      url: "/ai-implementation-mastery-2026",
      badge: "NEW MASTERY GUIDE",
      color: "from-blue-500 to-purple-500",
      icon: "🎯"
    },
    {
      id: 2,
      title: "AI Tools Showcase 2026",
      description: "Next-generation AI solutions and platforms",
      url: "/ai-tools-showcase-2026",
      badge: "CUTTING-EDGE TOOLS",
      color: "from-indigo-500 to-purple-500",
      icon: "🛠️"
    },
    {
      id: 3,
      title: "Global Retail AI Transformation",
      description: "$2.3B success story with neural interfaces & quantum AI",
      url: "/case-studies/ai-transformation-global-retail-giant-2026",
      badge: "SUCCESS STORY",
      color: "from-green-500 to-blue-500",
      icon: "🏆"
    },
    {
      id: 4,
      title: "AI 2026 Technology Showcase",
      description: "Revolutionary neural interfaces and quantum AI systems",
      url: "/ai-2026-technology-showcase",
      badge: "FUTURE TECH",
      color: "from-purple-500 to-pink-500",
      icon: "🔮"
    },
    {
      id: 5,
      title: "AI Trends 2026 Predictions",
      description: "Comprehensive analysis of AI trends and future predictions",
      url: "/ai-trends-2026-predictions",
      badge: "TREND ANALYSIS",
      color: "from-cyan-500 to-blue-500",
      icon: "📈"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const currentItem = contentItems[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      {/* Content */}
      <div className="relative z-10 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Left side - Content showcase */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-4">
                {/* Icon */}
                <div className="text-3xl animate-pulse">
                  {currentItem.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${currentItem.color} text-white`}>
                      {currentItem.badge}
                    </span>
                    <div className="flex space-x-1">
                      {contentItems.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentSlide ? 'bg-white' : 'bg-white/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-1 truncate">
                    {currentItem.title}
                  </h3>
                  
                  <p className="text-sm text-gray-300 truncate">
                    {currentItem.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - CTA buttons */}
            <div className="flex items-center space-x-3 ml-6">
              <Link
                href={currentItem.url}
                className={`bg-gradient-to-r ${currentItem.color} px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all text-sm whitespace-nowrap shadow-lg`}
              >
                Explore Now
              </Link>
              
              <Link
                href="/content-showcase"
                className="border border-white/30 text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/10 transition-all text-sm whitespace-nowrap"
              >
                View All
              </Link>
              
              <button
                onClick={handleClose}
                className="text-white/60 hover:text-white transition-colors p-1"
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

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-5000 ease-linear"
          style={{ width: `${((currentSlide + 1) / contentItems.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default UltraContentPromotionBanner2026;