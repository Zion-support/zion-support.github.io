'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Users, Zap } from 'lucide-react';

const NewContent2025UltimateBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const newContent = [
    {
      id: 'generative-ai-revolution',
      title: 'AI 2025: The Generative AI Enterprise Revolution',
      description: 'Discover how Fortune 500 companies are achieving 340% ROI and $180M in annual savings with generative AI.',
      url: '/blog/ai-2025-generative-ai-enterprise-revolution',
      type: 'Blog Post',
      metrics: {
        roi: '340%',
        savings: '$180M',
        accuracy: '99.7%'
      },
      badge: 'New',
      color: 'from-purple-600 to-blue-600'
    },
    {
      id: 'mlops-breakthrough',
      title: 'MLOps Breakthrough: 99.9% Model Reliability',
      description: 'Learn how advanced MLOps practices enable 67% faster deployment and $2.1B in operational savings.',
      url: '/blog/ai-2025-machine-learning-operations-mlops-breakthrough',
      type: 'Blog Post',
      metrics: {
        reliability: '99.9%',
        speed: '67%',
        savings: '$2.1B'
      },
      badge: 'Featured',
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 'retail-transformation',
      title: 'Retail AI Transformation: $500M Company Success',
      description: 'See how a leading retail company achieved 280% ROI and $45M in annual savings with AI.',
      url: '/case-studies/retail-ai-transformation-2025-ultimate-success',
      type: 'Case Study',
      metrics: {
        roi: '280%',
        savings: '$45M',
        satisfaction: '99.2%'
      },
      badge: 'Success Story',
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 'implementation-guide',
      title: 'AI 2025 Implementation Master Guide',
      description: 'Complete guide to achieving 500% ROI in 12 months with strategic AI implementation.',
      url: '/resources/ai-2025-implementation-master-guide',
      type: 'Resource',
      metrics: {
        roi: '500%',
        timeline: '12 months',
        success: '94%'
      },
      badge: 'Ultimate Guide',
      color: 'from-indigo-600 to-purple-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025BannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = newContent[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-semibold">NEW CONTENT 2025</span>
                </div>
                <div className="hidden sm:flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4 text-green-400" />
                    <span>340% ROI</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-blue-400" />
                    <span>500+ Companies</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="h-4 w-4 text-yellow-400" />
                    <span>$2.8B Savings</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleDismiss}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content Showcase */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {currentContent.badge}
                    </span>
                    <span className="text-sm text-gray-300">{currentContent.type}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                    {currentContent.title}
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {currentContent.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(currentContent.metrics).map(([key, value]) => (
                    <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white">{value}</div>
                      <div className="text-sm text-gray-300 capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentContent.url}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 group"
                  >
                    <span>Read Now</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/resources"
                    className="border-2 border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                  >
                    View All Resources
                  </Link>
                </div>
              </div>

              {/* Content Carousel */}
              <div className="relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white mb-4">Latest Content</h3>
                    <div className="space-y-3">
                      {newContent.map((content, index) => (
                        <div
                          key={content.id}
                          className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                            index === currentSlide
                              ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-400/50'
                              : 'bg-white/5 hover:bg-white/10'
                          }`}
                          onClick={() => setCurrentSlide(index)}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${content.color} text-white`}>
                                  {content.badge}
                                </span>
                                <span className="text-xs text-gray-300">{content.type}</span>
                              </div>
                              <h4 className="text-sm font-semibold text-white mb-1 line-clamp-2">
                                {content.title}
                              </h4>
                              <p className="text-xs text-gray-300 line-clamp-2">
                                {content.description}
                              </p>
                            </div>
                            <div className="ml-3">
                              {index === currentSlide && (
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center space-x-2 mt-4">
                  {newContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentSlide ? 'bg-blue-400 w-8' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics Bar */}
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-green-400">500%</div>
                <div className="text-sm text-gray-300">Average ROI</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-blue-400">$2.8B</div>
                <div className="text-sm text-gray-300">Total Savings</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-purple-400">94%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-yellow-400">12</div>
                <div className="text-sm text-gray-300">Months to ROI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateBanner;