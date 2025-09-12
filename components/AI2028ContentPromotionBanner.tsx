import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2028ContentPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const contentSlides = [
    {
      title: "AI 2028 Future Predictions",
      description: "Revolutionary Breakthroughs That Will Transform Everything",
      link: "/blog/ai-2028-future-predictions-breakthrough",
      badge: "BREAKTHROUGH",
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "AI 2028 Automotive Success",
      description: "3000% ROI Breakthrough Case Study",
      link: "/case-studies/ai-2028-automotive-transformation-breakthrough",
      badge: "SUCCESS STORY",
      color: "from-green-600 to-blue-600"
    },
    {
      title: "AI 2028 Master Guide",
      description: "Complete Implementation Roadmap",
      link: "/resources/ai-2028-ultimate-implementation-master-guide",
      badge: "MASTER GUIDE",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold animate-pulse">
                    {contentSlides[currentSlide].badge}
                  </span>
                  <span className="text-sm text-gray-300">NEW CONTENT</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {contentSlides[currentSlide].title}
                </h3>
                <p className="text-sm text-gray-300 mb-2">
                  {contentSlides[currentSlide].description}
                </p>
                <div className="flex items-center space-x-4">
                  <Link 
                    href={contentSlides[currentSlide].link}
                    className={`bg-gradient-to-r ${contentSlides[currentSlide].color} text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Explore Now →
                  </Link>
                  <Link 
                    href="/content-showcase"
                    className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                  >
                    View All Content
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-2 ml-6">
            {contentSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white w-8' 
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-3000"></div>
      </div>
    </div>
  );
};

export default AI2028ContentPromotionBanner;