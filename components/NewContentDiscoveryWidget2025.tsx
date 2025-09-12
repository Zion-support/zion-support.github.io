import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NewContentDiscoveryWidget2025() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const featuredContent = [
    {
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "Experience revolutionary AI breakthroughs delivering 2000%+ ROI across industries",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      image: "🚀",
      category: "BREAKTHROUGH",
      stats: "2000%+ ROI • 99.7% Success",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50"
    },
    {
      title: "AI 2026-2030 Future Predictions",
      description: "Discover revolutionary AI technologies that will reshape humanity by 2030",
      link: "/ai-2026-2030-future-predictions-showcase",
      image: "🔮",
      category: "FUTURE",
      stats: "95% Accuracy • ∞ ROI Potential",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      title: "Advanced Quantum Computing Solutions",
      description: "Revolutionary quantum computing delivering 15,000% ROI with breakthrough algorithms",
      link: "/quantum-computing-solutions-advanced",
      image: "⚛️",
      category: "QUANTUM",
      stats: "15,000% ROI • 99.9% Accuracy",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50"
    }
  ];

  const quickLinks = [
    { title: "AI 2025 Revolution", link: "/ai-2025-ultimate-breakthrough-revolution", icon: "🚀" },
    { title: "Future Predictions", link: "/ai-2026-2030-future-predictions-showcase", icon: "🔮" },
    { title: "Quantum Solutions", link: "/quantum-computing-solutions-advanced", icon: "⚛️" },
    { title: "All Content", link: "/content-showcase", icon: "📚" }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">New Content Discovery</h3>
              <p className="text-sm opacity-90">Revolutionary AI breakthroughs</p>
            </div>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close widget"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Featured Content Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredContent.map((content, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${content.bgGradient} p-6`}>
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{content.image}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`bg-gradient-to-r ${content.gradient} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                            {content.category}
                          </span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">
                          {content.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {content.description}
                        </p>
                        <div className="text-xs text-gray-500 mb-3">
                          {content.stats}
                        </div>
                        <Link 
                          href={content.link}
                          className={`inline-flex items-center bg-gradient-to-r ${content.gradient} text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
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

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 p-4">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="p-4 bg-gray-50">
          <h4 className="font-semibold text-gray-900 mb-3">Quick Access</h4>
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className="flex items-center space-x-2 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <span className="text-lg">{link.icon}</span>
                <span className="text-sm font-medium text-gray-700">{link.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-100 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Powered by Zion Tech Group</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live Updates</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}