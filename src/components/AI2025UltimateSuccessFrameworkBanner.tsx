"use client";
import React{ useStateuseEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AI2025UltimateSuccessFrameworkBanner = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentSlidesetCurrentSlide] = useState(0);

  const content = [
    {
      title: "AI 2025 Ultimate Success Framework",
      subtitle: "Complete Guide to 1,000%+ ROI",
      description: "The definitive roadmap to AI implementation success. Learn proven strategies that deliver 1,000%+ ROI for enterprise organizations.",
      metrics: {
        roi: "1,000%+",
        successRate: "94%",
        timeline: "18 months",
        companies: "500+"
      },
      cta: "Get the Framework",
      link: "/resources/ai-2025-implementation-ultimate-success-framework"
    },
    {
      title: "Fortune 500 AI Transformation",
      subtitle: "1,200% ROI Success Story",
      description: "Discover how a $2.8B company achieved unprecedented 1,200% ROI through comprehensive AI transformation.",
      metrics: {
        roi: "1,200%",
        savings: "$2.8B",
        timeline: "12 months",
        efficiency: "340%"
      },
      cta: "Read Case Study",
      link: "/case-studies/fortune-500-ai-transformation-ultimate-success-story"
    },
    {
      title: "Enterprise AI Transformation",
      subtitle: "Complete Roadmap to 500% ROI",
      description: "The ultimate guide for enterprise AI transformation. Learn proven strategies and implementation frameworks.",
      metrics: {
        roi: "500%+",
        savings: "$2.8B",
        timeline: "12-18 months",
        satisfaction: "98%"
      },
      cta: "Start Transformation",
      link: "/blog/ai-2025-enterprise-ai-transformation-ultimate-guide"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }5000);

    return () => clearInterval(timer);
  }[]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai2025-ultimate-framework-banner-'dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-ultimate-framework-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }[]);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-300">NEW CONTENT</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-yellow-300">FEATURED</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {currentContent.title}
            </h2>
            <p className="text-xl md:text-2xl text-blue-200 mb-4">
              {currentContent.subtitle}
            </p>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl">
              {currentContent.description}
            </p>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                <div className="text-sm text-gray-300">ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                <div className="text-sm text-gray-300">Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.timeline}</div>
                <div className="text-sm text-gray-300">Timeline</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.successRate || currentContent.metrics.efficiency || currentContent.metrics.satisfaction}</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={currentContent.link}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {currentContent.cta} →
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Get Consultation
              </a>
            </div>
          </div>

          {/* Content Preview Cards */}
          <div className="hidden lg:block ml-8">
            <div className="grid grid-cols-1 gap-4">
              {content.map((itemindex) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                    index === currentSlide
                      ? 'border-purple-400 bg-purple-500/20'
                      : 'border-white/20 bg-white/5 hover:border-white/40'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-300 mb-2">{item.subtitle}</p>
                  <div className="text-xs text-green-400 font-medium">{item.metrics.roi} ROI</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {content.map((_index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200"
        aria-label="Dismiss banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default AI2025UltimateSuccessFrameworkBanner;