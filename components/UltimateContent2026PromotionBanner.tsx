import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function UltimateContent2026PromotionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const featuredContent = [
    {
      title: "AI 2026: Ultimate Trends & Predictions",
      description: "Discover the revolutionary AI trends and predictions for 2026. From quantum AI breakthroughs to neural interfaces.",
      link: "/blog/ai-2026-ultimate-trends-predictions",
      badge: "BREAKING",
      badgeColor: "bg-red-500",
      icon: "🔮"
    },
    {
      title: "1200% ROI Enterprise Transformation",
      description: "See how a Fortune 500 company achieved unprecedented results through comprehensive AI transformation.",
      link: "/case-studies/ai-2026-global-enterprise-transformation-breakthrough",
      badge: "SUCCESS STORY",
      badgeColor: "bg-green-500",
      icon: "📈"
    },
    {
      title: "Ultimate AI Implementation Toolkit",
      description: "The most comprehensive AI implementation toolkit for 2026. Includes frameworks, templates, and guides.",
      link: "/resources/ai-2026-ultimate-implementation-toolkit",
      badge: "COMPREHENSIVE",
      badgeColor: "bg-blue-500",
      icon: "🛠️"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white/10 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <span className="text-2xl">🚀</span>
              <span className="text-sm font-semibold">NEW CONTENT 2026</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Revolutionary AI Content Just Released
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover the latest AI trends, success stories, and implementation guides 
              that will transform your understanding of artificial intelligence in 2026.
            </p>
          </div>

          {/* Featured Content Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentContent * 100}%)` }}
              >
                {featuredContent.map((content, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="p-8 md:p-12">
                      <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                          <div className="flex-1 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                              <span className="text-4xl">{content.icon}</span>
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white ${content.badgeColor}`}>
                                {content.badge}
                              </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                              {content.title}
                            </h3>
                            <p className="text-lg text-blue-100 mb-6">
                              {content.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                              <Link
                                href={content.link}
                                className="inline-flex items-center px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                              >
                                Explore Now
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                              <Link
                                href="/content-showcase"
                                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
                              >
                                View All Content
                              </Link>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            <div className="w-48 h-48 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center">
                              <span className="text-6xl">{content.icon}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentContent(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentContent ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-sm text-blue-200">New Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">25+</div>
              <div className="text-sm text-blue-200">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-sm text-blue-200">Implementation Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-sm text-blue-200">Templates & Tools</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link
                href="/mega-content-showcase-2026"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                <span className="text-xl mr-2">🎯</span>
                Explore All 2026 Content
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition-all"
              >
                <span className="text-xl mr-2">💬</span>
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}