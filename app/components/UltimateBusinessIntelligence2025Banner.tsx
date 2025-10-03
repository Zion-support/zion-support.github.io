'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligence2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'ultimate-business-intelligence-revolution',
      title: 'AI 2025: The Ultimate Business Intelligence Revolution',
      description: 'Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented insights and competitive advantage.',
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough',
      type: 'Blog Post',
      metrics: {
        roi: '30,000%',
        savings: '$750B+',
        accuracy: '99.99%',
        speed: '5,000% faster'
      },
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-business-intelligence-success',
      title: 'Fortune 500 Ultimate Business Intelligence Success',
      description: 'How a $15.2B manufacturing giant achieved unprecedented business intelligence transformation with AI-powered analytics.',
      url: '/case-studies/fortune-500-ultimate-business-intelligence-30000-roi-success-story',
      type: 'Case Study',
      metrics: {
        roi: '30,000%',
        savings: '$750B',
        company: '$15.2B',
        timeline: '18 months'
      },
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'business-intelligence-implementation-guide',
      title: 'AI 2025 Ultimate Business Intelligence Implementation Guide',
      description: 'Complete roadmap to 30,000% ROI through revolutionary AI-powered business intelligence transformation.',
      url: '/resources/ai-2025-ultimate-business-intelligence-implementation-guide',
      type: 'Implementation Guide',
      metrics: {
        roi: '30,000%',
        success: '99.8%',
        timeline: '18 months',
        guide: '60 min read'
      },
      readingTime: '60 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-business-intelligence-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-business-intelligence-2025-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-fuchsia-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-red-500/10 to-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-cyan-400 font-semibold text-lg">
              NEW BREAKTHROUGH
            </span>
            <span className="text-2xl">⚡</span>
          </div>

          <h2 className="text-6xl font-extrabold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ultimate Business Intelligence
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
              Revolution 2025
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented insights and competitive advantage.
          </p>
        </div>

        {/* Featured Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl">📊</span>
                <div>
                  <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-600 text-white text-sm font-bold rounded-full">🔥 HOT</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold rounded-full ml-2">NEW TODAY</span>
                </div>
              </div>
              <button
                onClick={handleDismiss}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 text-gray-900 text-sm font-semibold border border-white/20">
                {currentContent.type}
              </span>
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              {currentContent.title}
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {currentContent.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    {value}
                  </div>
                  <div className="text-gray-300 text-sm font-semibold capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-400">
                {currentContent.readingTime}
              </span>
              <Link
                href={currentContent.url}
                className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                <span>Read Full Article</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h3>
            
            <p className="text-xl text-gray-300 mb-8">
              Join 500+ enterprises already implementing these cutting-edge AI solutions with <span className="text-cyan-400 font-bold">300% ROI</span> and <span className="text-purple-400 font-bold">95% automation</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                <span>Start Your AI Journey</span>
              </Link>
              
              <Link
                href="/blog"
                className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300">
                <span>Explore All Content</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateBusinessIntelligence2025Banner;