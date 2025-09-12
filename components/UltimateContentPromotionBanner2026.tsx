import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentPromotionBanner2026 = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      title: "AI 2026: Advanced Automation Revolution",
      description: "Discover how AI automation will transform industries with neural networks, quantum computing, and autonomous systems.",
      link: "/blog/ai-2026-advanced-automation-revolution",
      type: "Blog Post",
      badge: "NEW",
      color: "blue"
    },
    {
      title: "Global Manufacturing Transformation: 600% ROI Success",
      description: "Real-world case study of how a Fortune 500 company achieved unprecedented success through AI automation.",
      link: "/case-studies/ai-2026-global-manufacturing-transformation-success",
      type: "Case Study",
      badge: "HOT",
      color: "green"
    },
    {
      title: "AI 2026 Implementation Toolkit",
      description: "Complete guide with 50+ templates, checklists, and frameworks for successful AI transformation.",
      link: "/resources/ai-2026-implementation-toolkit",
      type: "Resource",
      badge: "FREE",
      color: "purple"
    },
    {
      title: "Neural Interface Breakthrough 2026",
      description: "How brain-computer interfaces are revolutionizing human-AI interaction and productivity.",
      link: "/blog/ai-2026-neural-interface-breakthrough",
      type: "Blog Post",
      badge: "BREAKTHROUGH",
      color: "orange"
    },
    {
      title: "Quantum AI Financial Optimization",
      description: "Revolutionary quantum computing applications in financial services achieving 800% ROI.",
      link: "/case-studies/quantum-ai-financial-optimization-breakthrough-2026",
      type: "Case Study",
      badge: "QUANTUM",
      color: "indigo"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getBadgeColor = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800",
      green: "bg-green-100 text-green-800",
      purple: "bg-purple-100 text-purple-800",
      orange: "bg-orange-100 text-orange-800",
      indigo: "bg-indigo-100 text-indigo-800"
    };
    return colors[color as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const getTypeColor = (color: string) => {
    const colors = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600",
      indigo: "text-indigo-600"
    };
    return colors[color as keyof typeof colors] || "text-gray-600";
  };

  if (!isVisible) return null;

  const current = featuredContent[currentContent];

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  🚀 LATEST CONTENT 2026
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${getBadgeColor(current.color)}`}>
                  {current.badge}
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {current.title}
              </h2>
              
              <p className="text-lg text-white/90 mb-4 max-w-2xl">
                {current.description}
              </p>
              
              <div className="flex items-center space-x-4">
                <Link
                  href={current.link}
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Explore Now →
                </Link>
                <span className={`text-sm font-medium ${getTypeColor(current.color)}`}>
                  {current.type}
                </span>
              </div>
            </div>

            {/* Content carousel indicators */}
            <div className="hidden md:flex flex-col space-y-2 ml-8">
              {featuredContent.map((content, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentContent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentContent 
                      ? 'bg-white scale-125' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`View ${content.title}`}
                />
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 w-full bg-white/20 rounded-full h-1">
            <div 
              className="bg-white h-1 rounded-full transition-all duration-100 ease-linear"
              style={{ width: `${((currentContent + 1) / featuredContent.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          aria-label="Close banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Floating action buttons */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
        <Link
          href="/mega-content-showcase-2026"
          className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-all duration-200 transform hover:scale-105"
        >
          View All Content
        </Link>
        <Link
          href="/contact"
          className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-all duration-200 transform hover:scale-105"
        >
          Get Expert Help
        </Link>
      </div>
    </div>
  );
};

export default UltimateContentPromotionBanner2026;