'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function NewContent2026ShowcaseBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentPieces = [
    {
      title: "AI 2026 Mega Trends",
      description: "The Next Frontier of Enterprise Transformation",
      link: "/blog/ai-2026-mega-trends-predictions",
      icon: "🚀",
      color: "from-blue-500 to-purple-600",
      textColor: "text-blue-100",
      bgColor: "bg-blue-600"
    },
    {
      title: "Enterprise AI Transformation",
      description: "Fortune 500 Company Achieves 300% ROI",
      link: "/case-studies/enterprise-ai-transformation-success-2026",
      icon: "💰",
      color: "from-green-500 to-emerald-600",
      textColor: "text-green-100",
      bgColor: "bg-green-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className="relative overflow-hidden">
      <div className={`bg-gradient-to-r ${currentContent.color} transition-all duration-500`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-3xl animate-pulse">{currentContent.icon}</div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white">
                    NEW CONTENT
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white">
                    2026
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">
                  {currentContent.title}
                </h3>
                <p className="text-sm text-white/90 mt-1">
                  {currentContent.description}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                href={currentContent.link}
                className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                Read Now
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/80 hover:text-white transition-colors duration-200"
                aria-label="Close banner"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Slide indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {contentPieces.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Export individual banners for backward compatibility
export function AI2026MegaTrendsBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl">🚀</div>
            <div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white mb-2">
                NEW BLOG POST
              </span>
              <h3 className="text-lg font-bold text-white">
                AI 2026 Mega Trends: The Next Frontier
              </h3>
              <p className="text-sm text-blue-100">
                Explore revolutionary AI trends shaping enterprise transformation
              </p>
            </div>
          </div>
          <Link
            href="/blog/ai-2026-mega-trends-predictions"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200"
          >
            Read Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export function EnterpriseAITransformationBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl">💰</div>
            <div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white mb-2">
                NEW CASE STUDY
              </span>
              <h3 className="text-lg font-bold text-white">
                Enterprise AI Transformation: 300% ROI Success
              </h3>
              <p className="text-sm text-green-100">
                How a Fortune 500 company achieved $50M in annual savings
              </p>
            </div>
          </div>
          <Link
            href="/case-studies/enterprise-ai-transformation-success-2026"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-600 bg-white hover:bg-green-50 transition-colors duration-200"
          >
            Read Case Study
          </Link>
        </div>
      </div>
    </div>
  );
}