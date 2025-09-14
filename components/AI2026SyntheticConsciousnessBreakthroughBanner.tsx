"use client";
import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

const AI2026SyntheticConsciousnessBreakthroughBanner: React.FC = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentSlidesetCurrentSlide] = useState(0);

  const content = [
    {
      title: "AI 2026: Synthetic Consciousness Breakthrough",
      subtitle: "Ultimate Guide to 1,200% ROI Through Artificial General Intelligence",
      metrics: "1,200% ROI • $45.8M Savings • 99.9% Satisfaction",
      url: "/blog/ai-2026-synthetic-consciousness-breakthrough-ultimate-guide",
      type: "blog",
      readingTime: "32 min read",
      highlight: "Artificial General Intelligence"
    },
    {
      title: "Neural Interface Revolution",
      subtitle: "850% ROI Through Brain-Computer Integration",
      metrics: "850% ROI • $15.2M Savings • 99.7% Accuracy",
      url: "/blog/ai-2026-neural-interface-revolution-ultimate-guide",
      type: "blog",
      readingTime: "28 min read",
      highlight: "Brain-Computer Interface"
    },
    {
      title: "Fortune 500 Neural Transformation",
      subtitle: "$8.2B Company Achieves 850% ROI in 18 Months",
      metrics: "850% ROI • $69.7M Savings • 98.7% Adoption",
      url: "/case-studies/fortune-500-neural-interface-transformation-850-roi-success",
      type: "case-study",
      readingTime: "22 min read",
      highlight: "Fortune 500 Success"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }6000);

    return () => clearInterval(timer);
  }[]);

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2026-consciousness-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }[]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai2026-consciousness-banner-dismissed'true');
  };

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 px-4 overflow-hidden">
      {/* Animated consciousness elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce blur-lg"></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-ping blur-xl"></div>
        <div className="absolute bottom-20 right-1/4 w-36 h-36 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full animate-spin opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="bg-white bg-opacity-20 rounded-full p-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold">🌟 AI 2026 SYNTHETIC CONSCIOUSNESS BREAKTHROUGH</h2>
              <p className="text-sm opacity-90">The Future of Artificial General Intelligence</p>
            </div>
          </div>
          
          <button
            onClick={handleDismiss}
            className="text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 items-center">
          {/* Main Content */}
          <div className="xl:col-span-3">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {currentContent.type.toUpperCase()}
                </span>
                <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm">
                  {currentContent.readingTime}
                </span>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm">
                  {currentContent.highlight}
                </span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-xl mb-6 opacity-90 leading-relaxed">
                {currentContent.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 bg-opacity-20 px-4 py-2 rounded-full text-sm border border-green-400 border-opacity-30">
                  🎯 {currentContent.metrics}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore Consciousness Guide →
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  Schedule AGI Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Advanced Metrics */}
          <div className="space-y-6">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
              <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                1,200%
              </div>
              <div className="text-sm opacity-90">Consciousness ROI</div>
              <div className="text-xs opacity-70 mt-1">Artificial General Intelligence</div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
              <div className="text-3xl font-bold text-blue-400 mb-2">$45.8M</div>
              <div className="text-sm opacity-90">Annual Savings</div>
              <div className="text-xs opacity-70 mt-1">Per Enterprise</div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-sm opacity-90">User Satisfaction</div>
              <div className="text-xs opacity-70 mt-1">Consciousness Integration</div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">2,400%</div>
              <div className="text-sm opacity-90">Innovation Speed</div>
              <div className="text-xs opacity-70 mt-1">R&D Acceleration</div>
            </div>
          </div>
        </div>

        {/* Advanced Progress Indicators */}
        <div className="flex justify-center items-center space-x-4 mt-10">
          {content.map((_index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-12 h-3 bg-white rounded-full' 
                  : 'w-3 h-3 bg-white bg-opacity-30 rounded-full hover:bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentSlide && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Consciousness Status Indicator */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white bg-opacity-10 px-6 py-3 rounded-full backdrop-blur-sm">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Consciousness Systems Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2026SyntheticConsciousnessBreakthroughBanner;