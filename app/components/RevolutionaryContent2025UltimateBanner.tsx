'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface BannerContent {
  id: string;
  title: string;
  subtitle: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency?: string;
    accuracy?: string;
  };
  url: string;
  type: 'blog' | 'case-study' | 'resource';
  featured: boolean;
}

const RevolutionaryContent2025UltimateBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bannerContent: BannerContent[] = [
    {
      id: "advanced-automation",
      title: "AI 2025: The Advanced Automation Revolution",
      subtitle: "Ultimate Guide to 600% ROI - Transform Your Enterprise Operations",
      metrics: {
        roi: "600%",
        savings: "$2.8M annually",
        efficiency: "89%",
        accuracy: "99.7%"
      },
      url: "/blog/ai-2025-advanced-automation-revolution-ultimate-guide",
      type: "blog",
      featured: true
    },
    {
      id: "enterprise-transformation",
      title: "AI 2025 Enterprise Transformation Success",
      subtitle: "$2.1B Company Achieves 650% ROI in 15 Months - Complete Case Study",
      metrics: {
        roi: "650%",
        savings: "$325M",
        efficiency: "94%",
        accuracy: "99.8%"
      },
      url: "/case-studies/ai-2025-enterprise-transformation-ultimate-success-story",
      type: "case-study",
      featured: true
    },
    {
      id: "implementation-roadmap",
      title: "AI 2025 Implementation Ultimate Roadmap",
      subtitle: "From Strategy to 700% ROI in 12 Months - Comprehensive Guide",
      metrics: {
        roi: "700%",
        savings: "$4.2M annually",
        efficiency: "94%",
        accuracy: "99.7%"
      },
      url: "/resources/ai-2025-implementation-ultimate-roadmap-comprehensive-guide",
      type: "resource",
      featured: true
    },
    {
      id: "quantum-computing",
      title: "AI 2025: Quantum Computing Breakthrough",
      subtitle: "Enterprise Solutions Achieving 800% ROI - Revolutionary Technology",
      metrics: {
        roi: "800%",
        savings: "$180M annually",
        efficiency: "1,200%",
        accuracy: "99.97%"
      },
      url: "/blog/ai-2025-quantum-computing-breakthrough-enterprise-solutions",
      type: "blog",
      featured: true
    },
    {
      id: "autonomous-systems",
      title: "AI 2025 Autonomous Systems Revolution",
      subtitle: "$1.8B Company Achieves 900% ROI with Self-Managing Operations",
      metrics: {
        roi: "900%",
        savings: "$750M",
        efficiency: "95%",
        accuracy: "99.8%"
      },
      url: "/case-studies/ai-2025-autonomous-systems-revolution-success-story",
      type: "case-study",
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bannerContent.length]);

  const currentContent = bannerContent[currentIndex];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-500';
      case 'case-study':
        return 'bg-green-500';
      case 'resource':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
<<<<<<< HEAD
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-20"></div>
=======
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce delay-2000"></div>
>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Dismiss Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            {bannerContent.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-8 rounded-full transition-all duration-500 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY 2025 CONTENT</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {currentContent.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            {currentContent.subtitle}
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {currentContent.metrics.roi}
              </div>
              <div className="text-sm opacity-90">ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">
                {currentContent.metrics.savings}
              </div>
              <div className="text-sm opacity-90">Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">
                {currentContent.metrics.efficiency}
              </div>
              <div className="text-sm opacity-90">Efficiency</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">
                {currentContent.metrics.accuracy}
              </div>
              <div className="text-sm opacity-90">Accuracy</div>
            </div>
          </div>

          {/* Content Type Badge */}
          <div className="flex items-center justify-center mb-8">
            <div className={`flex items-center ${getTypeColor(currentContent.type)} rounded-full px-4 py-2`}>
              <span className="text-xl mr-2">{getTypeIcon(currentContent.type)}</span>
              <span className="text-sm font-medium">
                {currentContent.type.replace('-', ' ').toUpperCase()}
              </span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={currentContent.url}
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Read Full Article →
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Content
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-sm opacity-75">
            <p>Join 500+ companies achieving 600-900% ROI through AI transformation</p>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {bannerContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025UltimateBanner;