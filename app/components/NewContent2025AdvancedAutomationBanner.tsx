import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2025AdvancedAutomationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      title: "AI 2025: Advanced Automation Revolution",
      subtitle: "Ultimate Enterprise Guide",
      metrics: "600% ROI • $2.8M Savings • 340% Productivity",
      description: "Transform your business with next-generation AI automation solutions",
      link: "/blog/ai-2025-advanced-automation-revolution-ultimate-guide",
      type: "blog",
      readingTime: "18 min read"
    },
    {
      title: "Fortune 500 AI Automation Success",
      subtitle: "$3.2B Annual Savings with 600% ROI",
      metrics: "600% ROI • $3.2B Savings • 98% Success Rate",
      description: "How a global manufacturing giant transformed operations with AI automation",
      link: "/case-studies/ai-automation-fortune-500-success-600-roi",
      type: "case-study",
      readingTime: "12 min read"
    },
    {
      title: "AI Automation Implementation Master Guide",
      subtitle: "From Strategy to 600% ROI",
      metrics: "98% Success Rate • 3.2 Month Payback • 500+ Implementations",
      description: "The complete blueprint for enterprise AI automation success",
      link: "/resources/ai-automation-implementation-master-guide-2025",
      type: "resource",
      readingTime: "25 min read"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform rotate-12 scale-150"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-indigo-600 to-purple-600 transform -rotate-12 scale-150"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400 opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400 opacity-15 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-indigo-400 opacity-20 rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="flex-1 pr-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
            </div>

            {/* Main Content */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {currentContent.title}
              </h2>
              
              <p className="text-xl text-blue-200 font-semibold">
                {currentContent.subtitle}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full font-medium">
                  {currentContent.metrics}
                </span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full font-medium">
                  {currentContent.readingTime}
                </span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full font-medium">
                  {currentContent.type.toUpperCase()}
                </span>
              </div>

              <p className="text-lg text-gray-200 max-w-2xl">
                {currentContent.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href={currentContent.link}
                  className="inline-flex items-center bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Read Now
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
                >
                  Get Free Assessment
                </Link>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="relative">
              {/* AI Automation Visualization */}
              <div className="w-80 h-64 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl backdrop-blur-sm border border-white/20 p-6">
                <div className="space-y-4">
                  {/* Process Flow */}
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Process Automation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <span className="text-sm font-medium">AI Decision Making</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <span className="text-sm font-medium">Predictive Analytics</span>
                  </div>
                  
                  {/* ROI Chart */}
                  <div className="mt-6">
                    <div className="text-xs text-gray-300 mb-2">ROI Progress</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full animate-pulse" style={{ width: '600%', maxWidth: '100%' }}></div>
                    </div>
                    <div className="text-xs text-green-400 mt-1">600% ROI Achieved</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContent2025AdvancedAutomationBanner;