'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Star, TrendingUp, Users, Zap } from 'lucide-react';

const UltimateContent2025Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentPieces = [
    {
      id: 'advanced-automation-guide',
      title: 'AI 2025: The Advanced Automation Revolution - Ultimate Enterprise Guide',
      type: 'Blog Post',
      url: '/blog/ai-2025-advanced-automation-revolution-ultimate-guide',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        accuracy: '99.8%',
        efficiency: '340%'
      },
      description: 'Discover how advanced AI automation is transforming enterprises with 500% ROI, 99.8% accuracy, and $2.8B in annual savings.'
    },
    {
      id: 'ultimate-success-story',
      title: 'AI Transformation 2025: $3.2B Company Achieves 750% ROI - Ultimate Success Story',
      type: 'Case Study',
      url: '/case-studies/ai-transformation-2025-ultimate-success-story',
      metrics: {
        roi: '750%',
        savings: '$2.8B',
        accuracy: '99.8%',
        efficiency: '340%'
      },
      description: 'Learn how a Fortune 500 manufacturing company achieved 750% ROI, $2.8B in annual savings, and 99.8% process accuracy.'
    },
    {
      id: 'implementation-guide',
      title: 'AI Implementation Ultimate Guide 2025: Complete Roadmap to 500% ROI',
      type: 'Resource',
      url: '/resources/ai-implementation-ultimate-guide-2025-complete',
      metrics: {
        roi: '500%',
        success: '94%',
        timeline: '18 months',
        projects: '500+'
      },
      description: 'The definitive guide to AI implementation in 2025. Complete roadmap to achieve 500% ROI and $2.8B in savings.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentPieces.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-content-2025-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-white/20 rounded-full px-3 py-1">
              <Star className="w-4 h-4 text-yellow-300 mr-1" />
              <span className="text-sm font-medium">NEW CONTENT 2025</span>
            </div>
            <div className="flex items-center bg-green-500/20 rounded-full px-3 py-1">
              <TrendingUp className="w-4 h-4 text-green-300 mr-1" />
              <span className="text-sm font-medium">FEATURED</span>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Revolutionary AI Content Collection 2025
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Discover the ultimate collection of AI implementation guides, success stories, and breakthrough case studies that are transforming enterprises worldwide.
              </p>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-300">500%+</div>
                <div className="text-sm text-white/80">Average ROI</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-300">$2.8B</div>
                <div className="text-sm text-white/80">Annual Savings</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-300">99.8%</div>
                <div className="text-sm text-white/80">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-300">340%</div>
                <div className="text-sm text-white/80">Efficiency Gain</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/resources"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                Explore All Resources
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center"
              >
                Get Free Consultation
                <Users className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Featured Content Card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white/90">LIVE NOW</span>
                </div>
                <div className="flex space-x-1">
                  {contentPieces.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs font-medium">
                    {currentContent.type}
                  </span>
                  <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-medium">
                    NEW
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white leading-tight">
                  {currentContent.title}
                </h3>

                <p className="text-white/80 text-sm leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(currentContent.metrics).map(([key, value]) => (
                    <div key={key} className="bg-white/5 rounded-lg p-3">
                      <div className="text-lg font-bold text-white">{value}</div>
                      <div className="text-xs text-white/70 capitalize">
                        {key.replace('_', ' ')}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={currentContent.url}
                  className="inline-flex items-center text-white font-semibold hover:text-yellow-300 transition-colors group"
                >
                  Read Full Article
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
              <Zap className="w-4 h-4 text-yellow-800" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Additional Content Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {contentPieces.map((content, index) => (
            <Link
              key={content.id}
              href={content.url}
              className={`bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-all duration-300 ${
                index === currentSlide ? 'ring-2 ring-white/30' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-white/70">{content.type}</span>
                <span className="text-xs text-green-300">NEW</span>
              </div>
              <h4 className="text-sm font-semibold text-white leading-tight mb-2">
                {content.title}
              </h4>
              <div className="flex items-center text-xs text-white/60">
                <TrendingUp className="w-3 h-3 mr-1" />
                {Object.values(content.metrics)[0]} ROI
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025Banner;