'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentShowcase {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings?: string;
    satisfaction?: string;
    efficiency?: string;
  };
  description: string;
  featured: boolean;
}

const RevolutionaryContent2025UltimateBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentShowcases: ContentShowcase[] = [
    {
      id: 'ultimate-automation-guide',
      title: 'AI 2025: The Ultimate Automation Revolution - Complete Enterprise Guide',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-automation-revolution-complete-guide',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        satisfaction: '98%',
        efficiency: '340%'
      },
      description: 'Discover how AI automation is transforming enterprises with 500% ROI, $2.8B in savings, and 98% satisfaction rates.',
      featured: true
    },
    {
      id: '1000-percent-roi-case-study',
      title: 'AI Transformation Ultimate Success: $2.8B Company Achieves 1,000% ROI',
      type: 'case-study',
      url: '/case-studies/ai-transformation-1000-percent-roi-ultimate-success-story',
      metrics: {
        roi: '1,000%',
        savings: '$280M',
        satisfaction: '99.8%',
        efficiency: '78%'
      },
      description: 'Learn how a Fortune 500 company achieved unprecedented 1,000% ROI through comprehensive AI transformation.',
      featured: true
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: Ultimate Success Framework',
      type: 'resource',
      url: '/resources/ai-2025-implementation-master-guide-ultimate-success',
      metrics: {
        roi: '340%',
        satisfaction: '98%',
        efficiency: '67%'
      },
      description: 'The complete roadmap to AI implementation success with 94% success rate and 500+ proven implementations.',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentShowcases.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2025-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = contentShowcases[currentIndex];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'from-blue-500 to-cyan-500';
      case 'case-study': return 'from-green-500 to-emerald-500';
      case 'resource': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-400/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-purple-400/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-pink-400/10 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-8 py-3 mb-6">
            <span className="text-lg font-bold">🚀 REVOLUTIONARY AI CONTENT 2025</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Ultimate AI Transformation Collection
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Discover the most comprehensive AI resources with proven results: <span className="text-yellow-400 font-bold">500%+ ROI</span>, 
            <span className="text-yellow-400 font-bold"> $2.8B in savings</span>, and <span className="text-yellow-400 font-bold">98% satisfaction</span>
          </p>
        </div>

        {/* Main Showcase */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Details */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <span className="text-4xl">{getTypeIcon(currentContent.type)}</span>
                <div className="flex items-center space-x-3">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${getTypeColor(currentContent.type)} text-white`}>
                    {currentContent.type.toUpperCase()}
                  </span>
                  <span className="text-sm text-blue-200 bg-white/10 px-3 py-1 rounded-full">
                    FEATURED
                  </span>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {currentContent.title}
              </h2>
              
              <p className="text-lg text-blue-100 leading-relaxed">
                {currentContent.description}
              </p>
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-6">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-gradient-to-br from-white/20 to-white/10 rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-yellow-400 mb-1">{value}</div>
                    <div className="text-sm text-blue-200 capitalize font-medium">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Read This Content →
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 text-center"
                >
                  View All Resources
                </Link>
              </div>
            </div>

            {/* Success Statistics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90 font-medium">Successful Projects</div>
                <div className="text-xs opacity-75 mt-1">Proven Results</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold mb-2">340%</div>
                <div className="text-sm opacity-90 font-medium">Average ROI</div>
                <div className="text-xs opacity-75 mt-1">Industry Leading</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold mb-2">$2.8B</div>
                <div className="text-sm opacity-90 font-medium">Total Savings</div>
                <div className="text-xs opacity-75 mt-1">Client Value</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-sm opacity-90 font-medium">Satisfaction</div>
                <div className="text-xs opacity-75 mt-1">Client Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Navigation */}
        <div className="flex justify-center space-x-3 mb-8">
          {contentShowcases.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-yellow-400 scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Content Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contentShowcases.map((content, index) => (
            <div
              key={content.id}
              className={`bg-white/5 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:bg-white/10 border ${
                index === currentIndex ? 'border-yellow-400 bg-white/10' : 'border-white/20'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">{getTypeIcon(content.type)}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getTypeColor(content.type)} text-white`}>
                  {content.type.toUpperCase()}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-3 line-clamp-2">
                {content.title}
              </h3>
              <p className="text-sm text-blue-200 mb-4 line-clamp-3">
                {content.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm font-bold text-yellow-400">
                  {content.metrics.roi} ROI
                </div>
                <div className="text-xs text-blue-300">
                  Click to view
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 500+ companies achieving 340% ROI with our proven AI implementation framework
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-xl font-bold text-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free AI Consultation
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-xl hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Explore All Content
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-6">
            Free consultation • No commitment • Proven results
          </p>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
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

export default RevolutionaryContent2025UltimateBanner;