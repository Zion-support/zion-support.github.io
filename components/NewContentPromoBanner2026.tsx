'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContentPromoBanner2026 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems = [
    {
      id: 1,
      title: "AI 2026: Revolutionary Trends",
      description: "Discover the groundbreaking AI trends that will reshape industries in 2026",
      type: "Blog Post",
      link: "/blog/ai-2026-revolutionary-trends",
      color: "from-blue-600 to-purple-600",
      icon: "🚀"
    },
    {
      id: 2,
      title: "Global Logistics AI Transformation",
      description: "40% cost reduction, 60% efficiency gain - see how we did it",
      type: "Case Study",
      link: "/case-studies/ai-transformation-global-logistics-2026",
      color: "from-green-600 to-blue-600",
      icon: "📊"
    },
    {
      id: 3,
      title: "AI Implementation Checklist 2026",
      description: "Complete guide to successful AI implementation with step-by-step checklist",
      type: "Resource",
      link: "/resources/ai-implementation-checklist-2026",
      color: "from-purple-600 to-pink-600",
      icon: "📋"
    },
    {
      id: 4,
      title: "AI 2026 Masterclass",
      description: "Join our exclusive live webinar on February 15th - Transform your business with next-gen AI",
      type: "Webinar",
      link: "/webinars/ai-2026-masterclass",
      color: "from-orange-600 to-red-600",
      icon: "🎓"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentItems.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const currentItem = contentItems[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <div className="flex items-center space-x-2">
            <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
              NEW
            </span>
            <span className="text-sm font-medium">
              {currentItem.type}
            </span>
          </div>
          
          <div className="flex-1 min-w-0">
            <Link 
              href={currentItem.link}
              className="block hover:opacity-90 transition-opacity"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{currentItem.icon}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-sm truncate">
                    {currentItem.title}
                  </h3>
                  <p className="text-xs text-gray-300 truncate">
                    {currentItem.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex space-x-1">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <Link
            href={currentItem.link}
            className="bg-white text-gray-900 px-4 py-1 rounded text-xs font-semibold hover:bg-gray-100 transition-colors"
          >
            View Now
          </Link>
          
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close banner"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromoBanner2026;