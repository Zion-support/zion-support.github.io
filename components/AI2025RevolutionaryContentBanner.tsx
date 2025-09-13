import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AI2025RevolutionaryContentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const contentItems = [
    {
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "Discover revolutionary AI technologies delivering 10,000% ROI",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      badge: "BREAKTHROUGH",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Global Transformation Case Study",
      description: "Fortune 500 company achieves 10,000% ROI success story",
      link: "/case-studies/ai-2025-global-transformation-breakthrough",
      badge: "SUCCESS STORY",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI 2025 Revolutionary Trends & Predictions",
      description: "Comprehensive guide to the future of AI technology",
      link: "/blog/ai-2025-revolutionary-trends-predictions",
      badge: "FUTURE PREDICTIONS",
      color: "from-purple-500 to-blue-500"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-500 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className={`bg-gradient-to-r ${contentItems[currentContent].color} text-white shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🚀</span>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-semibold">
                      {contentItems[currentContent].badge}
                    </span>
                    <span className="text-sm font-medium">NEW CONTENT</span>
                  </div>
                  <h3 className="text-lg font-bold">{contentItems[currentContent].title}</h3>
                  <p className="text-sm opacity-90">{contentItems[currentContent].description}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                href={contentItems[currentContent].link}
                className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Explore Now
              </Link>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close banner"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content indicators */}
      <div className="flex justify-center space-x-2 py-2 bg-gray-900/10">
        {contentItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentContent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentContent ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to content ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}