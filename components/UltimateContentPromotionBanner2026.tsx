import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function UltimateContentPromotionBanner2026() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems = [
    {
      title: "AI 2026 Enterprise Automation Mastery",
      description: "Complete implementation guide with 600% ROI strategies",
      type: "Blog Post",
      url: "/blog/ai-2026-enterprise-automation-mastery",
      badge: "NEW",
      color: "blue"
    },
    {
      title: "Fortune 500 Transformation Breakthrough",
      description: "Case study: 600% ROI achieved in 18 months",
      type: "Case Study",
      url: "/case-studies/ai-2026-fortune-500-transformation-breakthrough",
      badge: "HOT",
      color: "green"
    },
    {
      title: "AI 2026 Implementation Toolkit Ultimate",
      description: "Complete toolkit with 47 templates and frameworks",
      type: "Resource",
      url: "/resources/ai-2026-implementation-toolkit-ultimate",
      badge: "ULTIMATE",
      color: "purple"
    },
    {
      title: "AI ROI Calculator 2026",
      description: "Calculate your AI investment returns instantly",
      type: "Tool",
      url: "/tools/ai-roi-calculator-2026",
      badge: "INTERACTIVE",
      color: "orange"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentItems.length]);

  const getBadgeColor = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800",
      green: "bg-green-100 text-green-800",
      purple: "bg-purple-100 text-purple-800",
      orange: "bg-orange-100 text-orange-800"
    };
    return colors[color] || "bg-gray-100 text-gray-800";
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      "Blog Post": "📝",
      "Case Study": "📊",
      "Resource": "📚",
      "Tool": "🛠️"
    };
    return icons[type] || "📄";
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-indigo-600/90">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-20"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">
                    NEW: Ultimate AI 2026 Content Collection
                  </h2>
                  <p className="text-blue-100 text-lg">
                    Discover our latest comprehensive resources for enterprise AI transformation
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="flex-shrink-0 ml-4 text-white/80 hover:text-white transition-colors"
              aria-label="Close banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content Carousel */}
          <div className="mt-6">
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {contentItems.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <span className="text-2xl">{getTypeIcon(item.type)}</span>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(item.color)}`}>
                                {item.badge}
                              </span>
                              <span className="text-white/80 text-sm">{item.type}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                              {item.title}
                            </h3>
                            <p className="text-blue-100 mb-4">
                              {item.description}
                            </p>
                            <Link
                              href={item.url}
                              className="inline-flex items-center px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
                            >
                              Explore Now
                              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {contentItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white/40'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Quick access links */}
          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="flex flex-wrap items-center justify-center space-x-6 text-sm">
              <Link href="/mega-content-showcase-2026" className="text-white/90 hover:text-white transition-colors">
                📚 View All Content
              </Link>
              <Link href="/blog" className="text-white/90 hover:text-white transition-colors">
                📝 Latest Blog Posts
              </Link>
              <Link href="/case-studies" className="text-white/90 hover:text-white transition-colors">
                📊 Success Stories
              </Link>
              <Link href="/resources" className="text-white/90 hover:text-white transition-colors">
                🛠️ Implementation Tools
              </Link>
              <Link href="/tools" className="text-white/90 hover:text-white transition-colors">
                🧮 Interactive Calculators
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}