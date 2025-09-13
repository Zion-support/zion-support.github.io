import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const contentItems = [
  {
    id: 1,
    title: "AI 2025 Breakthrough Content Showcase",
    description: "Discover the most comprehensive collection of AI 2025 breakthrough content, case studies, and implementation guides.",
    href: "/ai-2025-breakthrough-content-showcase",
    badge: "BREAKTHROUGH",
    badgeColor: "from-red-500 to-pink-500",
    icon: "🚀",
    metrics: "20,000% ROI"
  },
  {
    id: 2,
    title: "Global Tech Transformation Case Study",
    description: "Learn how a Fortune 500 company achieved 900% ROI through revolutionary AI 2025 implementation strategies.",
    href: "/case-studies/ai-2025-global-tech-transformation-breakthrough",
    badge: "SUCCESS STORY",
    badgeColor: "from-green-500 to-emerald-500",
    icon: "🏆",
    metrics: "900% ROI"
  },
  {
    id: 3,
    title: "AI 2025 Ultimate Trends & Predictions",
    description: "Comprehensive analysis of the most revolutionary AI trends and predictions for 2025 with breakthrough insights.",
    href: "/blog/ai-2025-ultimate-trends-predictions",
    badge: "ANALYSIS",
    badgeColor: "from-purple-500 to-pink-500",
    icon: "🔮",
    metrics: "99.7% Accuracy"
  },
  {
    id: 4,
    title: "Comprehensive Implementation Master Guide",
    description: "The most comprehensive AI 2025 implementation guide with step-by-step instructions and proven strategies.",
    href: "/resources/ai-2025-comprehensive-implementation-master-guide",
    badge: "MASTER GUIDE",
    badgeColor: "from-blue-500 to-indigo-500",
    icon: "📚",
    metrics: "500+ Pages"
  }
];

export default function NewContent2025Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contentItems.length) % contentItems.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            New AI 2025 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Breakthrough Content</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest revolutionary AI 2025 content, case studies, and implementation guides 
            that are transforming businesses worldwide.
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {contentItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="bg-white p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="text-4xl">{item.icon}</span>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                          {item.title}
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                          {item.description}
                        </p>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="bg-gray-100 px-4 py-2 rounded-lg">
                            <span className="text-sm font-semibold text-gray-700">{item.metrics}</span>
                          </div>
                          <div className="text-sm text-gray-500">
                            Featured Content
                          </div>
                        </div>
                        <Link 
                          href={item.href}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                        >
                          Explore Content
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-blue-600">20,000%</div>
                            <div className="text-sm text-gray-600">Max ROI</div>
                          </div>
                          <div className="bg-white p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-green-600">500+</div>
                            <div className="text-sm text-gray-600">Case Studies</div>
                          </div>
                          <div className="bg-white p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-purple-600">99.7%</div>
                            <div className="text-sm text-gray-600">Success Rate</div>
                          </div>
                          <div className="bg-white p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-orange-600">6M</div>
                            <div className="text-sm text-gray-600">Implementation</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Quick Access to All Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <span className="text-sm font-semibold text-blue-600">{item.metrics}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}