import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RevolutionaryContentPromotionBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const revolutionaryContent = [
    {
      title: "AI 2025 Breakthrough Revolution",
      description: "Discover the most revolutionary AI breakthroughs of 2025",
      link: "/ai-2025-breakthrough-revolution",
      badge: "🚀 BREAKTHROUGH",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      borderColor: "border-red-200"
    },
    {
      title: "AI 2026 Revolutionary Showcase",
      description: "Explore cutting-edge AI technologies of 2026",
      link: "/ai-2026-revolutionary-showcase",
      badge: "🌟 REVOLUTIONARY",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200"
    },
    {
      title: "AI 2027-2030 Future Predictions",
      description: "Peer into the future of AI with comprehensive predictions",
      link: "/ai-2027-2030-future-predictions",
      badge: "🔮 FUTURE",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % revolutionaryContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const current = revolutionaryContent[currentContent];

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 animate-pulse"></div>
      
      {/* Main Banner */}
      <div className={`relative bg-gradient-to-r ${current.bgColor} border-t border-b ${current.borderColor} py-6 px-4`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${current.color} animate-pulse`}>
                  {current.badge}
                </span>
                <span className="text-sm text-gray-600 font-medium">NEW CONTENT</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {current.title}
              </h2>
              
              <p className="text-gray-700 text-lg mb-4 max-w-2xl">
                {current.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link 
                  href={current.link}
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${current.color} hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}
                >
                  Explore Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link 
                  href="/content-showcase"
                  className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View All Content
                </Link>
              </div>
            </div>

            {/* Right Content - Content Carousel */}
            <div className="flex-1 max-w-md">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                  Revolutionary Content Library
                </h3>
                
                <div className="space-y-3">
                  {revolutionaryContent.map((content, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                        index === currentContent 
                          ? `${current.bgColor} ${current.borderColor} border-2` 
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                      }`}
                      onClick={() => setCurrentContent(index)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          index === currentContent ? 'bg-blue-500' : 'bg-gray-300'
                        }`}></div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {content.title}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {content.description}
                          </p>
                        </div>
                        <div className={`text-xs px-2 py-1 rounded-full text-white bg-gradient-to-r ${content.color}`}>
                          {content.badge.split(' ')[0]}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-center">
                  <Link 
                    href="/content-showcase"
                    className="text-sm text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Explore All Revolutionary Content →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center space-x-2 py-2 bg-gray-100">
        {revolutionaryContent.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentContent ? 'bg-blue-500 w-8' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RevolutionaryContentPromotionBanner2025;