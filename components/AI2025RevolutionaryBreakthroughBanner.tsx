'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025RevolutionaryBreakthroughBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const breakthroughContent = [
    {
      title: "AI 2025: The Ultimate Enterprise Transformation Guide",
      subtitle: "500% ROI in 12 Months",
      description: "Complete guide to achieving unprecedented ROI through strategic AI implementation",
      url: "/blog/ai-2025-enterprise-transformation-ultimate-guide",
      metrics: { roi: "500%", savings: "$2.8B", efficiency: "78%" },
      type: "blog",
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "Fortune 500 AI Transformation Success Story",
      subtitle: "1,000% ROI Achievement",
      description: "How a $2.8B company achieved unprecedented 1,000% ROI in just 18 months",
      url: "/case-studies/fortune-500-ai-transformation-1000-percent-roi-success",
      metrics: { roi: "1,000%", savings: "$280M", timeline: "18 months" },
      type: "case-study",
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "AI 2025 Implementation Master Guide",
      subtitle: "Ultimate Success Framework",
      description: "Step-by-step framework for implementing AI solutions that deliver 500%+ ROI",
      url: "/resources/ai-2025-implementation-master-guide-ultimate-success",
      metrics: { successRate: "94%", averageRoi: "340%", projects: "500+" },
      type: "resource",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakthroughContent.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai2025-revolutionary-breakthrough-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-revolutionary-breakthrough-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = breakthroughContent[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-blue-600/10 animate-pulse"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-500/20 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-500/20 rounded-full animate-ping delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🚀 REVOLUTIONARY AI BREAKTHROUGH 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The AI Revolution That's Transforming Business Forever
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover the breakthrough strategies that are delivering 500%+ ROI and transforming Fortune 500 companies worldwide
          </p>
        </div>

        {/* Content Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">Featured Breakthrough Content</h3>
            <div className="flex space-x-2">
              {breakthroughContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Content Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  NEW BREAKTHROUGH
                </span>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  {currentContent.type.toUpperCase()}
                </span>
              </div>

              <h4 className="text-3xl font-bold leading-tight">
                {currentContent.title}
              </h4>

              <div className="text-2xl font-semibold text-yellow-400 mb-4">
                {currentContent.subtitle}
              </div>

              <p className="text-lg opacity-90 leading-relaxed">
                {currentContent.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore Breakthrough →
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
                >
                  Get Expert Consultation
                </Link>
              </div>
            </div>

            {/* Success Metrics Grid */}
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {value}
                  </div>
                  <div className="text-sm opacity-75 capitalize font-medium">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-6 border border-purple-500/30">
            <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-lg font-semibold mb-2">Fortune 500 Companies</div>
            <div className="text-sm opacity-75">Successfully Transformed</div>
          </div>
          <div className="text-center bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl p-6 border border-blue-500/30">
            <div className="text-4xl font-bold text-blue-400 mb-2">$2.8B</div>
            <div className="text-lg font-semibold mb-2">Average Savings</div>
            <div className="text-sm opacity-75">Per Enterprise Implementation</div>
          </div>
          <div className="text-center bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl p-6 border border-indigo-500/30">
            <div className="text-4xl font-bold text-indigo-400 mb-2">98%</div>
            <div className="text-lg font-semibold mb-2">Success Rate</div>
            <div className="text-sm opacity-75">Across All Implementations</div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl p-8 border border-purple-500/30">
          <h3 className="text-3xl font-bold mb-4">Ready to Join the AI Revolution?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Don't let your competitors gain the advantage. Start your AI transformation journey today and achieve the same breakthrough results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Explore All Breakthrough Content
            </Link>
            <Link
              href="/case-studies"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              View Success Stories
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Start Your Transformation
            </Link>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-6 right-6 text-white/75 hover:text-white transition-colors p-2"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AI2025RevolutionaryBreakthroughBanner;