'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, TrendingUp, DollarSign, Clock, Users, ArrowRight } from 'lucide-react';

const RevolutionaryDataTransformationBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('data-transformation-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && !isDismissed) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('data-transformation-banner-dismissed', 'true');
  };

  const contentSlides = [
    {
      title: "AI Data Revolution: 800% ROI",
      subtitle: "Fortune 500 companies achieving unprecedented returns",
      metrics: "800% ROI • $4.2M savings • 18 months",
      link: "/blog/ai-2025-enterprise-data-revolution-ultimate-guide",
      type: "Blog Post",
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "Autonomous Operations: 1,200% ROI",
      subtitle: "Transform operations with intelligent automation",
      metrics: "1,200% ROI • $15.8M savings • 24 months",
      link: "/blog/ai-2025-autonomous-operations-revolution",
      type: "Blog Post",
      color: "from-green-600 to-teal-600"
    },
    {
      title: "Fortune 500 Success Story",
      subtitle: "Real case study: $2.8B company transformation",
      metrics: "800% ROI • $19.2M returns • Proven results",
      link: "/case-studies/fortune-500-ai-transformation-800-roi-success",
      type: "Case Study",
      color: "from-orange-600 to-red-600"
    },
    {
      title: "Master Implementation Guide",
      subtitle: "Complete roadmap to data transformation success",
      metrics: "500+ enterprises • 800% average ROI • Step-by-step",
      link: "/resources/ai-data-transformation-master-guide-2025",
      type: "Resource",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  if (!isVisible || isDismissed) return null;

  const currentContent = contentSlides[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-green-600/10 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-6 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-4 right-1/3 w-3 h-3 bg-orange-400 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-4">
                {/* Badge */}
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    🚀 NEW 2025 CONTENT
                  </span>
                </div>

                {/* Main content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-6">
                    {/* Slide content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white truncate">
                        {currentContent.title}
                      </h3>
                      <p className="text-sm text-gray-300 truncate">
                        {currentContent.subtitle}
                      </p>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center space-x-2 text-xs text-gray-400">
                          <TrendingUp className="w-3 h-3" />
                          <span>{currentContent.metrics}</span>
                        </div>
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-white/20 text-white">
                          {currentContent.type}
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex-shrink-0">
                      <Link
                        href={currentContent.link}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
                      >
                        Read Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dismiss button */}
            <div className="flex-shrink-0 ml-4">
              <button
                onClick={handleDismiss}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Dismiss banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {contentSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Success metrics overlay */}
      <div className="absolute top-0 right-0 p-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
          <div className="text-xs text-gray-300 space-y-1">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-3 h-3 text-green-400" />
              <span>800%+ ROI</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-3 h-3 text-blue-400" />
              <span>18-24 months</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-3 h-3 text-purple-400" />
              <span>500+ enterprises</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryDataTransformationBanner2025;