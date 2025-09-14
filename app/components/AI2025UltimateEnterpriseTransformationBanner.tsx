'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, TrendingUp, DollarSign, Target, Zap } from 'lucide-react';

const AI2025UltimateEnterpriseTransformationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      id: 'ultimate-enterprise-transformation',
      title: 'AI 2025: The Ultimate Enterprise Transformation Revolution',
      subtitle: '20,000% ROI - The Highest Documented ROI in Enterprise AI History',
      description: 'Transform your Fortune 500 company with revolutionary AI systems that have generated $200B+ in annual savings across 1,000+ implementations.',
      metrics: {
        roi: '20,000%',
        savings: '$200B+',
        accuracy: '99.99%',
        efficiency: '5,000%'
      },
      url: '/blog/ai-2025-ultimate-enterprise-transformation-revolution-ultimate-breakthrough',
      type: 'blog',
      featured: true
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 Ultimate Success: $200B Annual Savings',
      subtitle: '20,000% ROI Success Story - Complete Case Study',
      description: 'How a Fortune 50 manufacturing leader achieved the highest ROI in enterprise AI history through revolutionary transformation.',
      metrics: {
        roi: '20,000%',
        savings: '$200B',
        timeline: '18 months',
        satisfaction: '99.8%'
      },
      url: '/case-studies/fortune-500-ultimate-enterprise-transformation-20000-roi-success-story',
      type: 'case-study',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'Complete Implementation Guide: 20,000% ROI Roadmap',
      subtitle: 'The Definitive Guide to Revolutionary AI Transformation',
      description: 'Step-by-step roadmap to implementing AI systems that deliver unprecedented business results and market domination.',
      metrics: {
        success: '99.7%',
        timeline: '18 months',
        projects: '1,000+',
        guide: '60 min read'
      },
      url: '/resources/ai-2025-ultimate-enterprise-transformation-implementation-guide',
      type: 'resource',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai2025-ultimate-enterprise-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-ultimate-enterprise-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1 pr-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-semibold">ULTIMATE BREAKTHROUGH</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-500/20 rounded-full px-4 py-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-semibold">20,000% ROI</span>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h2>
              
              <p className="text-xl text-blue-100 mb-4 font-semibold">
                {currentContent.subtitle}
              </p>
              
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-yellow-400">{value}</div>
                    <div className="text-xs text-gray-300 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span>Explore {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="hidden lg:block flex-shrink-0 ml-8">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <DollarSign className="w-16 h-16 text-yellow-400 mx-auto mb-2" />
                      <div className="text-3xl font-bold text-white">20,000%</div>
                      <div className="text-sm text-gray-300">ROI</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center animate-bounce">
                  <Target className="w-6 h-6 text-green-400" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center animate-bounce delay-1000">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-yellow-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200"
          aria-label="Dismiss banner"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default AI2025UltimateEnterpriseTransformationBanner;