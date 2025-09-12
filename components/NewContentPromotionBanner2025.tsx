'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  url: string;
  category: string;
  icon: string;
  badge?: string;
}

const NewContentPromotionBanner2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const newContentItems: ContentItem[] = [
    {
      title: "AI Future 2025 Showcase",
      description: "Explore revolutionary AI technologies shaping the future",
      url: "/ai-future-2025",
      category: "Technology Showcase",
      icon: "🚀",
      badge: "NEW"
    },
    {
      title: "Healthcare AI Transformation",
      description: "Case study: 40% efficiency gains and $2.3M savings",
      url: "/case-studies/ai-healthcare-transformation-2025",
      category: "Case Study",
      icon: "🏥",
      badge: "HOT"
    },
    {
      title: "Interactive ROI Calculator",
      description: "Calculate your AI investment returns instantly",
      url: "/tools/ai-roi-calculator-2025",
      category: "Tool",
      icon: "📊",
      badge: "FREE"
    },
    {
      title: "AI Implementation Guide 2025",
      description: "Complete roadmap for successful AI transformation",
      url: "/resources/ai-implementation-guide-2025",
      category: "Resource",
      icon: "📚",
      badge: "UPDATED"
    },
    {
      title: "Quantum AI Breakthrough",
      description: "How quantum computing is revolutionizing AI",
      url: "/ai-innovation-hub-2026/quantum-ai",
      category: "Innovation",
      icon: "⚛️",
      badge: "BREAKTHROUGH"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newContentItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [newContentItems.length]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('contentBanner2025_dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('contentBanner2025_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentItem = newContentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 -translate-y-12 animate-bounce"></div>
        <div className="absolute bottom-0 left-1/3 w-16 h-16 bg-white/10 rounded-full translate-y-8 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              {/* Badge */}
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-2xl mr-2">{currentItem.icon}</span>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold">{currentItem.category}</span>
                    {currentItem.badge && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                        {currentItem.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Content details */}
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold mb-1">
                  {currentItem.title}
                </h3>
                <p className="text-sm md:text-base opacity-90">
                  {currentItem.description}
                </p>
              </div>

              {/* CTA Button */}
              <Link
                href={currentItem.url}
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105 duration-300 whitespace-nowrap"
              >
                Explore Now
              </Link>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="hidden md:flex items-center space-x-2 ml-6">
            {newContentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to content ${index + 1}`}
              />
            ))}
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="ml-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
          <div 
            className="h-full bg-white transition-all duration-4000 ease-linear"
            style={{ 
              width: `${((currentIndex + 1) / newContentItems.length) * 100}%` 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2025;