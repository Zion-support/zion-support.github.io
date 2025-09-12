import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025ContentDiscoveryWidget = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const featuredContent = [
    {
      title: "AI 2025: Advanced Autonomous Systems",
      description: "Breakthrough autonomous systems with 2000% ROI potential",
      link: "/blog/ai-2025-advanced-autonomous-systems",
      category: "Breakthrough Technology",
      metrics: "2000% ROI",
      color: "from-blue-500 to-purple-500",
      icon: "🤖"
    },
    {
      title: "Quantum Machine Learning Revolution",
      description: "10,000x speed improvements with quantum AI algorithms",
      link: "/blog/ai-2025-quantum-machine-learning-breakthrough",
      category: "Revolutionary Tech",
      metrics: "10,000x Faster",
      color: "from-purple-500 to-indigo-500",
      icon: "⚛️"
    },
    {
      title: "2000% ROI Enterprise Success",
      description: "Fortune 500 transformation case study with proven results",
      link: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      category: "Success Story",
      metrics: "2000% ROI",
      color: "from-green-500 to-blue-500",
      icon: "🏆"
    },
    {
      title: "AI 2025 Content Showcase",
      description: "Comprehensive collection of breakthrough AI content",
      link: "/ai-2025-content-showcase",
      category: "Content Hub",
      metrics: "50+ Articles",
      color: "from-orange-500 to-red-500",
      icon: "📚"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentIndex];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">DISCOVER NEW CONTENT</span>
          </div>
          <div className="flex space-x-1">
            {featuredContent.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="text-4xl">{currentContent.icon}</div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className={`px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${currentContent.color} text-white`}>
                {currentContent.category}
              </span>
              <span className="text-xs text-gray-500">{currentContent.metrics}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {currentContent.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {currentContent.description}
            </p>
            <Link
              href={currentContent.link}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group"
            >
              <span>Explore Content</span>
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="border-t border-gray-200 p-4 bg-gray-50">
        <div className="grid grid-cols-2 gap-2">
          <Link
            href="/ai-2025-content-showcase"
            className="text-xs text-gray-600 hover:text-blue-600 transition-colors"
          >
            📚 All Content
          </Link>
          <Link
            href="/case-studies"
            className="text-xs text-gray-600 hover:text-blue-600 transition-colors"
          >
            🏆 Case Studies
          </Link>
          <Link
            href="/blog"
            className="text-xs text-gray-600 hover:text-blue-600 transition-colors"
          >
            📝 Blog Posts
          </Link>
          <Link
            href="/resources"
            className="text-xs text-gray-600 hover:text-blue-600 transition-colors"
          >
            🛠️ Resources
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AI2025ContentDiscoveryWidget;