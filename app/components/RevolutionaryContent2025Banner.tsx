'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Star, TrendingUp, Users, Zap, Award, Target } from 'lucide-react';

const RevolutionaryContent2025Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentPieces = [
    {
      id: 'advanced-automation-revolution',
      title: 'AI 2025: The Advanced Automation Revolution - Ultimate Enterprise Guide',
      type: 'Blog Post',
      url: '/blog/ai-2025-advanced-automation-revolution-ultimate-guide',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        accuracy: '99.8%',
        efficiency: '340%'
      },
      description: 'Discover how advanced AI automation is transforming enterprises with 500% ROI, 99.8% accuracy, and $2.8B in annual savings.',
      featured: true
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
      description: 'Learn how a Fortune 500 manufacturing company achieved 750% ROI, $2.8B in annual savings, and 99.8% process accuracy.',
      featured: true
    },
    {
      id: 'implementation-ultimate-guide',
      title: 'AI Implementation Ultimate Guide 2025: Complete Roadmap to 500% ROI',
      type: 'Resource',
      url: '/resources/ai-implementation-ultimate-guide-2025-complete',
      metrics: {
        roi: '500%',
        success: '94%',
        timeline: '18 months',
        projects: '500+'
      },
      description: 'The definitive guide to AI implementation in 2025. Complete roadmap to achieve 500% ROI and $2.8B in savings.',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [contentPieces.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2025-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-white mr-2" />
              <span className="text-sm font-bold text-white">REVOLUTIONARY CONTENT 2025</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-green-400 to-emerald-400 rounded-full px-4 py-2">
              <Award className="w-4 h-4 text-white mr-2" />
              <span className="text-sm font-bold text-white">BREAKTHROUGH SUCCESS</span>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Revolutionary AI Content That's Transforming Industries
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Discover the most comprehensive collection of AI implementation guides, breakthrough case studies, and success stories that are revolutionizing how enterprises operate in 2025.
              </p>
            </div>

            {/* Revolutionary Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-xl p-6 text-center border border-yellow-400/30">
                <div className="text-3xl font-bold text-yellow-300 mb-2">500%+</div>
                <div className="text-sm text-white/80 font-medium">Average ROI</div>
                <div className="text-xs text-yellow-200/70 mt-1">Industry Leading</div>
              </div>
              <div className="bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-xl p-6 text-center border border-green-400/30">
                <div className="text-3xl font-bold text-green-300 mb-2">$2.8B</div>
                <div className="text-sm text-white/80 font-medium">Annual Savings</div>
                <div className="text-xs text-green-200/70 mt-1">Per Enterprise</div>
              </div>
              <div className="bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-xl p-6 text-center border border-blue-400/30">
                <div className="text-3xl font-bold text-blue-300 mb-2">99.8%</div>
                <div className="text-sm text-white/80 font-medium">Accuracy Rate</div>
                <div className="text-xs text-blue-200/70 mt-1">Unprecedented</div>
              </div>
              <div className="bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl p-6 text-center border border-purple-400/30">
                <div className="text-3xl font-bold text-purple-300 mb-2">340%</div>
                <div className="text-sm text-white/80 font-medium">Efficiency Gain</div>
                <div className="text-xs text-purple-200/70 mt-1">Revolutionary</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/resources"
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Revolutionary Content
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                Get Free AI Assessment
                <Users className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Featured Content Showcase */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-white/90">FEATURED CONTENT</span>
                </div>
                <div className="flex space-x-2">
                  {contentPieces.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-yellow-400 scale-125' 
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {currentContent.type}
                  </span>
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    BREAKTHROUGH
                  </span>
                  {currentContent.featured && (
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white leading-tight">
                  {currentContent.title}
                </h3>

                <p className="text-white/80 leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Revolutionary Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(currentContent.metrics).map(([key, value]) => (
                    <div key={key} className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-4 border border-white/10">
                      <div className="text-2xl font-bold text-white mb-1">{value}</div>
                      <div className="text-xs text-white/60 capitalize font-medium">
                        {key.replace('_', ' ')}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={currentContent.url}
                  className="inline-flex items-center text-yellow-300 font-bold hover:text-yellow-200 transition-colors group text-lg"
                >
                  Read the Full Story
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Floating Success Indicators */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce shadow-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg"></div>
            <div className="absolute top-1/2 -left-8 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Content Preview Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {contentPieces.map((content, index) => (
            <Link
              key={content.id}
              href={content.url}
              className={`group bg-white/5 hover:bg-white/10 rounded-2xl p-6 transition-all duration-300 border ${
                index === currentSlide 
                  ? 'border-yellow-400/50 ring-2 ring-yellow-400/20' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded text-xs font-bold">
                    {content.type}
                  </span>
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded text-xs font-bold">
                    NEW
                  </span>
                </div>
                {content.featured && (
                  <Star className="w-4 h-4 text-yellow-400" />
                )}
              </div>
              
              <h4 className="text-lg font-bold text-white leading-tight mb-3 group-hover:text-yellow-300 transition-colors">
                {content.title}
              </h4>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-white/60">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {Object.values(content.metrics)[0]} ROI
                </div>
                <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-yellow-300 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025Banner;