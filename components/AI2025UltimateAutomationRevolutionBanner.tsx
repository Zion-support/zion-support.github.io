"use client";
import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateAutomationRevolutionBanner: React.FC = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentSlidesetCurrentSlide] = useState(0);
  const [isDismissedsetIsDismissed] = useState(false);

  const content = [
    {
      title: "AI 2025 Ultimate Automation Revolution",
      subtitle: "500% ROI • $200M Savings • 99.8% Satisfaction",
      description: "Transform your business with the most advanced AI automation platform. Join Fortune 500 companies achieving unprecedented results.",
      cta: "Start Your Revolution",
      link: "/ai-2025-ultimate-automation-revolution",
      metrics: {
        roi: "500%",
        savings: "$200M",
        satisfaction: "99.8%",
        timeline: "12 months"
      }
    },
    {
      title: "Quantum AI 2026 Business Breakthrough",
      subtitle: "400-600% ROI • 1,200% Speed • 99.97% Accuracy",
      description: "Experience the future with Quantum AI. $100B market transformation delivering revolutionary business results.",
      cta: "Explore Quantum AI",
      link: "/quantum-ai-2026-business-breakthrough",
      metrics: {
        roi: "400-600%",
        speed: "1,200%",
        accuracy: "99.97%",
        market: "$100B"
      }
    },
    {
      title: "Enterprise AI Transformation Success",
      subtitle: "567% ROI • $2.8B Savings • 156% Efficiency",
      description: "Join hundreds of companies revolutionizing operations with AI. Complete implementation guides and success stories available.",
      cta: "View Success Stories",
      link: "/case-studies/fortune-500-ai-transformation-2025-ultimate-success",
      metrics: {
        roi: "567%",
        savings: "$2.8B",
        efficiency: "156%",
        companies: "500+"
      }
    }
  ];

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('ai2025-automation-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Auto-rotate content every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }5000);

    return () => clearInterval(interval);
  }[content.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ai2025-automation-banner-dismissed'true');
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  if (!isVisible || isDismissed) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <span className="text-sm font-medium">🚀 NEW CONTENT</span>
                </div>
                <div className="flex space-x-1">
                  {content.map((_index) => (
                    <button
                      key={index}
                      onClick={() => handleSlideChange(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {currentContent.title}
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-3">
                {currentContent.subtitle}
              </p>
              <p className="text-base md:text-lg opacity-80 mb-6 max-w-2xl">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {Object.entries(currentContent.metrics).map(([keyvalue]) => (
                  <div key={key} className="bg-white bg-opacity-10 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold">{value}</div>
                    <div className="text-xs opacity-80 capitalize">
                      {key.replace(/([A-Z])/g' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.link}
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  {currentContent.cta}
                </Link>
                <Link
                  href="/resources/ai-automation-implementation-guide-2025"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
                >
                  Download Guide
                </Link>
              </div>
            </div>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="ml-4 text-white hover:text-gray-200 transition-colors"
              aria-label="Dismiss banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20">
        <div 
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / content.length) * 100}%` 
          }}
        />
      </div>
    </div>
  );
};

export default AI2025UltimateAutomationRevolutionBanner;