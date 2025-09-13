import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025NewContentPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const newContent = [
    {
      title: "🚀 AI 2025 Next-Generation Breakthroughs",
      description: "Discover revolutionary AI technologies delivering 5,000-15,000% ROI",
      link: "/blog/ai-2025-next-generation-breakthroughs",
      badge: "BREAKTHROUGH",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "🏆 Global Tech Giant Transformation: 900% ROI",
      description: "Learn how Fortune 500 companies achieve unprecedented success",
      link: "/case-studies/ai-2025-global-tech-giant-transformation",
      badge: "SUCCESS STORY",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "📚 AI 2025 Ultimate Implementation Master Guide",
      description: "Complete step-by-step guide to achieving breakthrough results",
      link: "/resources/ai-2025-ultimate-implementation-master-guide",
      badge: "MASTER GUIDE",
      color: "from-purple-500 to-pink-500"
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

  const current = newContent[currentContent];

  return (
    <div className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">NEW CONTENT</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-gray-400"></div>
              <div className="flex-1 min-w-0">
                <Link 
                  href={current.link}
                  className="group block hover:opacity-90 transition-opacity"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${current.color} text-white`}>
                        {current.badge}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold truncate group-hover:text-blue-300 transition-colors">
                        {current.title}
                      </h3>
                      <p className="text-xs text-gray-300 truncate">
                        {current.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 text-xs text-gray-300">
                <span>Featured Content:</span>
                <div className="flex space-x-1">
                  {newContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentContent(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentContent ? 'bg-white' : 'bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <Link
                href={current.link}
                className="bg-white text-gray-900 px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Now
              </Link>
              
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close banner"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-2 right-8 w-4 h-4 bg-purple-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-2 left-1/4 w-6 h-6 bg-pink-500 rounded-full opacity-25 animate-pulse delay-2000"></div>
      </div>
    </div>
  );
};

export default AI2025NewContentPromotionBanner;