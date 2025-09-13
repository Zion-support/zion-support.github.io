import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RevolutionaryContentPromotionBanner() {
  const [currentContent, setCurrentContent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 1,
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "Discover the revolutionary AI breakthrough delivering 10,000% ROI with 99.9% accuracy",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      badge: "BREAKTHROUGH",
      badgeColor: "from-red-500 to-pink-500",
      bgColor: "from-purple-900 to-blue-900",
      icon: "🚀"
    },
    {
      id: 2,
      title: "Global Transformation Success Story",
      description: "Fortune 500 company achieves 10,000% ROI through AI 2025 implementation",
      link: "/case-studies/ai-2025-global-transformation-breakthrough",
      badge: "SUCCESS STORY",
      badgeColor: "from-green-500 to-emerald-500",
      bgColor: "from-green-900 to-emerald-900",
      icon: "🏆"
    },
    {
      id: 3,
      title: "Revolutionary Trends & Predictions",
      description: "Explore the AI trends and predictions that will reshape the future of technology",
      link: "/blog/ai-2025-revolutionary-trends-predictions",
      badge: "PREDICTIONS",
      badgeColor: "from-purple-500 to-pink-500",
      bgColor: "from-indigo-900 to-purple-900",
      icon: "🔮"
    },
    {
      id: 4,
      title: "Revolutionary Implementation Guide",
      description: "Complete step-by-step guide to implementing AI 2025 breakthrough for maximum ROI",
      link: "/resources/ai-2025-revolutionary-implementation-guide",
      badge: "IMPLEMENTATION",
      badgeColor: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-900 to-indigo-900",
      icon: "📚"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const current = featuredContent[currentContent];

  return (
    <div className="relative overflow-hidden">
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${current.bgColor} text-white py-8 px-4`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl">{current.icon}</span>
                <div>
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${current.badgeColor} text-white text-sm font-bold mb-2 animate-pulse`}>
                    {current.badge}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    {current.title}
                  </h2>
                </div>
              </div>
              <p className="text-lg text-gray-200 mb-6 max-w-2xl">
                {current.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href={current.link}
                  className="bg-gradient-to-r from-yellow-500 to-orange-600 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  Explore Now
                </Link>
                <Link 
                  href="/content-showcase"
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  View All Content
                </Link>
              </div>
            </div>
            <div className="hidden lg:block ml-8">
              <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-6xl">{current.icon}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Indicators */}
      <div className="bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              {featuredContent.map((content, index) => (
                <button
                  key={content.id}
                  onClick={() => setCurrentContent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentContent 
                      ? 'bg-yellow-400 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to ${content.title}`}
                />
              ))}
            </div>
            <div className="text-sm text-gray-400">
              {currentContent + 1} of {featuredContent.length}
            </div>
          </div>
        </div>
      </div>

      {/* Close Button */}
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
}