import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RevolutionaryContentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const featuredContent = [
    {
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "5,000% ROI Guaranteed",
      href: "/ai-2025-ultimate-breakthrough-revolution",
      badge: "BREAKTHROUGH",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50"
    },
    {
      title: "AI 2026 Quantum-Neural Fusion",
      description: "15,000% ROI Through Quantum Computing",
      href: "/ai-2026-quantum-neural-fusion-breakthrough",
      badge: "QUANTUM",
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-50 to-blue-50"
    },
    {
      title: "Revolutionary Content Showcase 2025",
      description: "Complete AI Content Library",
      href: "/revolutionary-content-showcase-2025",
      badge: "NEW",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-4 px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Left side - Announcement */}
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-yellow-400 to-red-500 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              🚀 NEW CONTENT
            </div>
            <div className="hidden md:block">
              <span className="text-sm text-gray-300">Revolutionary AI Content Now Available:</span>
            </div>
          </div>

          {/* Center - Featured Content */}
          <div className="flex-1 mx-8">
            <div className="text-center">
              <Link 
                href={featuredContent[currentContent].href}
                className={`inline-block bg-gradient-to-r ${featuredContent[currentContent].bgColor} text-gray-900 px-6 py-3 rounded-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg`}
              >
                <div className="flex items-center space-x-2">
                  <span className={`bg-gradient-to-r ${featuredContent[currentContent].color} text-white px-2 py-1 rounded text-xs font-bold`}>
                    {featuredContent[currentContent].badge}
                  </span>
                  <span className="font-bold">{featuredContent[currentContent].title}</span>
                  <span className="text-sm text-gray-600">- {featuredContent[currentContent].description}</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Right side - Action buttons */}
          <div className="flex items-center space-x-2">
            <Link 
              href="/revolutionary-content-showcase-2025"
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              View All Content
            </Link>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-white/70 hover:text-white p-1 transition-colors"
              aria-label="Close banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile version */}
        <div className="md:hidden mt-4 text-center">
          <Link 
            href={featuredContent[currentContent].href}
            className={`inline-block bg-gradient-to-r ${featuredContent[currentContent].bgColor} text-gray-900 px-4 py-2 rounded-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg`}
          >
            <div className="flex flex-col items-center space-y-1">
              <span className={`bg-gradient-to-r ${featuredContent[currentContent].color} text-white px-2 py-1 rounded text-xs font-bold`}>
                {featuredContent[currentContent].badge}
              </span>
              <span className="font-bold text-sm">{featuredContent[currentContent].title}</span>
              <span className="text-xs text-gray-600">{featuredContent[currentContent].description}</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 to-red-500 transition-all duration-5000 ease-linear"
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
}