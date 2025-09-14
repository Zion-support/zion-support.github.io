'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, TrendingUp, Clock, Users, Award } from 'lucide-react';

const UltimateContent2025ShowcaseBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        satisfaction: '98%',
        projects: '500+'
      },
      description: 'Transform your business with cutting-edge AI strategies achieving 500% ROI and $2.8B annual savings.',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings in 18 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        satisfaction: '99.2%',
        timeline: '18 months'
      },
      description: 'Real-world case study of how a $50B manufacturing giant achieved 567% ROI with comprehensive AI implementation.',
      readingTime: '12 min read',
      featured: true
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap: From Strategy to 800% ROI',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-roadmap-comprehensive',
      metrics: {
        roi: '800%',
        savings: '$173.7M',
        success: '99%',
        timeline: '18 months'
      },
      description: 'Complete step-by-step guide to implementing AI in your enterprise, achieving 800% ROI within 18 months.',
      readingTime: '20 min read',
      featured: true
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution',
      type: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      metrics: {
        speed: '1,200%',
        accuracy: '99.97%',
        market: '$100B',
        roi: '400-600%'
      },
      description: 'How Quantum AI is transforming enterprise operations with 1,200% processing speed improvements.',
      readingTime: '15 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimateContent2025BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimateContent2025BannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">🚀 ULTIMATE AI 2025 CONTENT COLLECTION</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              That Drives Results
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover the breakthrough strategies that are transforming Fortune 500 companies with 
            <span className="font-bold text-yellow-400"> 500%+ ROI</span> and 
            <span className="font-bold text-yellow-400"> $2.8B+ annual savings</span>
          </p>
        </div>

        {/* Featured Content Showcase */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-1">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium opacity-80">
                {currentSlide + 1} of {featuredContent.length}
              </span>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white/60 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {currentContent.type.toUpperCase()}
                </span>
                <span className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  FEATURED
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-yellow-400">{value}</div>
                    <div className="text-sm opacity-80 capitalize">{key.replace('_', ' ')}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center text-sm opacity-80">
                  <Clock className="w-4 h-4 mr-2" />
                  {currentContent.readingTime}
                </div>
                <div className="flex items-center text-sm opacity-80">
                  <Users className="w-4 h-4 mr-2" />
                  10,000+ readers
                </div>
                <div className="flex items-center text-sm opacity-80">
                  <Award className="w-4 h-4 mr-2" />
                  Industry Leading
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center"
                >
                  Read Full Article
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-colors flex items-center justify-center"
                >
                  Get AI Consultation
                </Link>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🚀</div>
                <div className="text-4xl font-bold mb-2 text-yellow-400">
                  {currentContent.metrics.roi || currentContent.metrics.speed}
                </div>
                <div className="text-lg opacity-80 mb-4">
                  {currentContent.metrics.roi ? 'ROI Achievement' : 'Speed Improvement'}
                </div>
                <div className="flex justify-center space-x-4 text-sm">
                  <div className="bg-white/20 rounded-lg px-3 py-2">
                    <TrendingUp className="w-4 h-4 inline mr-1" />
                    Proven Results
                  </div>
                  <div className="bg-white/20 rounded-lg px-3 py-2">
                    <Star className="w-4 h-4 inline mr-1" />
                    Industry Leading
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-sm opacity-80">Success Stories</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">$2.8B</div>
            <div className="text-sm opacity-80">Total Savings</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-sm opacity-80">Client Satisfaction</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">800%</div>
            <div className="text-sm opacity-80">Average ROI</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-colors"
            >
              View Success Stories
            </Link>
            <Link
              href="/resources"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 hover:text-black transition-colors"
            >
              Download Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025ShowcaseBanner;