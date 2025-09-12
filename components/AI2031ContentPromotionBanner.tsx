import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2031ContentPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      id: 1,
      title: "🚀 AI 2031 BREAKTHROUGH",
      subtitle: "Revolutionary Technologies with 10,000%+ ROI",
      description: "Discover next-generation AI technologies that will transform your business",
      link: "/ai-2031-breakthrough-showcase",
      badge: "BREAKTHROUGH",
      color: "from-red-500 to-pink-500",
      textColor: "text-red-100"
    },
    {
      id: 2,
      title: "🏆 15,000% ROI SUCCESS",
      subtitle: "Quantum AI Case Study Results",
      description: "See how Fortune 500 companies achieved unprecedented returns",
      link: "/case-studies/ai-2031-quantum-breakthrough-15000-roi",
      badge: "CASE STUDY",
      color: "from-green-500 to-emerald-500",
      textColor: "text-green-100"
    },
    {
      id: 3,
      title: "🔮 AI 2031 PREDICTIONS",
      subtitle: "Future Technology Trends & Insights",
      description: "Explore revolutionary predictions that will shape the next decade",
      link: "/blog/ai-2031-future-predictions-breakthrough",
      badge: "PREDICTIONS",
      color: "from-purple-500 to-indigo-500",
      textColor: "text-purple-100"
    },
    {
      id: 4,
      title: "📚 MASTER IMPLEMENTATION",
      subtitle: "Complete AI 2031 Blueprint",
      description: "Step-by-step guide to achieving 10,000%+ ROI",
      link: "/resources/ai-2031-ultimate-implementation-master-guide",
      badge: "GUIDE",
      color: "from-blue-500 to-cyan-500",
      textColor: "text-blue-100"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const currentPromotion = promotions[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${currentPromotion.color} ${currentPromotion.textColor} animate-pulse`}>
                {currentPromotion.badge}
              </span>
              <span className="text-sm text-gray-300">
                {currentSlide + 1} of {promotions.length}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              {currentPromotion.title}
            </h2>
            <p className="text-lg text-purple-200 mb-3">
              {currentPromotion.subtitle}
            </p>
            <p className="text-gray-300 mb-4 max-w-2xl">
              {currentPromotion.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link 
                href={currentPromotion.link}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore Now →
              </Link>
              <Link 
                href="/ai-2031-breakthrough-showcase"
                className="bg-transparent border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                View All AI 2031
              </Link>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="hidden lg:block ml-8">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full animate-ping"></div>
              <div className="absolute inset-8 bg-gradient-to-r from-purple-700/40 to-blue-700/40 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl animate-bounce">🚀</div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {promotions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-purple-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        aria-label="Close banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default AI2031ContentPromotionBanner;