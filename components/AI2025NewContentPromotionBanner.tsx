import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025NewContentPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const newContent = [
    {
      title: "AI 2025: Advanced Autonomous Systems",
      description: "Discover breakthrough autonomous systems with 2000% ROI potential",
      link: "/blog/ai-2025-advanced-autonomous-systems",
      badge: "BREAKTHROUGH",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Quantum Machine Learning Revolution",
      description: "10,000x speed improvements with quantum AI algorithms",
      link: "/blog/ai-2025-quantum-machine-learning-breakthrough",
      badge: "REVOLUTIONARY",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "2000% ROI Enterprise Success Story",
      description: "Fortune 500 transformation case study with proven results",
      link: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      badge: "SUCCESS STORY",
      color: "from-green-500 to-blue-500"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % newContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20 animate-pulse"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">NEW CONTENT</span>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-center space-x-2">
                <span className="text-sm">Featured:</span>
                <div className="flex space-x-1">
                  {newContent.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentContent ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <Link
                href={newContent[currentContent].link}
                className="block group hover:scale-105 transition-transform duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-left">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${newContent[currentContent].color} text-white`}>
                        {newContent[currentContent].badge}
                      </span>
                      <span className="text-xs text-gray-300">JUST RELEASED</span>
                    </div>
                    <h3 className="text-sm font-semibold group-hover:text-blue-300 transition-colors">
                      {newContent[currentContent].title}
                    </h3>
                    <p className="text-xs text-gray-300 max-w-md">
                      {newContent[currentContent].description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 text-blue-300 group-hover:text-blue-200">
                    <span className="text-sm font-medium">Read More</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

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

        {/* Mobile view */}
        <div className="md:hidden mt-3">
          <Link
            href={newContent[currentContent].link}
            className="block group hover:scale-105 transition-transform duration-200"
          >
            <div className="flex items-center space-x-2 mb-2">
              <span className={`px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${newContent[currentContent].color} text-white`}>
                {newContent[currentContent].badge}
              </span>
              <span className="text-xs text-gray-300">JUST RELEASED</span>
            </div>
            <h3 className="text-sm font-semibold group-hover:text-blue-300 transition-colors mb-1">
              {newContent[currentContent].title}
            </h3>
            <p className="text-xs text-gray-300 mb-2">
              {newContent[currentContent].description}
            </p>
            <div className="flex items-center space-x-1 text-blue-300 group-hover:text-blue-200">
              <span className="text-sm font-medium">Read More</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 animate-pulse"></div>
    </div>
  );
};

export default AI2025NewContentPromotionBanner;