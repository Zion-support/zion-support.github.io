'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, TrendingUp, Users, Award, Zap, Clock, X, ArrowRight } from 'lucide-react';

const RevolutionaryContent2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const revolutionaryContent = [
    {
      id: 'ultimate-business-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      subtitle: '1,200% ROI in 6 Months',
      type: 'Blog Post',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '98%'
      },
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      description: 'Discover how Fortune 500 companies are achieving unprecedented results with strategic AI implementation.',
      readingTime: '22 min read',
      isNew: true,
      featured: true,
      color: 'from-purple-600 to-blue-600'
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings',
      subtitle: '567% ROI in 18 Months',
      type: 'Case Study',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '95%'
      },
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      description: 'Learn how a Fortune 500 manufacturing giant achieved transformational results through strategic AI implementation.',
      readingTime: '15 min read',
      isNew: true,
      featured: true,
      color: 'from-blue-600 to-indigo-600'
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap',
      subtitle: 'From Strategy to 800% ROI in 18 Months',
      type: 'Resource',
      metrics: {
        roi: '800%',
        savings: '$4.8M',
        efficiency: '90%',
        satisfaction: '95%'
      },
      url: '/resources/ai-2025-implementation-ultimate-roadmap',
      description: 'Complete step-by-step guide for implementing AI to achieve unprecedented business results.',
      readingTime: '15 min read',
      isNew: true,
      featured: true,
      color: 'from-indigo-600 to-purple-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
    }, 4000);

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

  const currentContent = revolutionaryContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-indigo-600/10"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500/5 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-indigo-500/5 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-400/5 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full px-8 py-3 mb-6">
            <Star className="w-5 h-5 mr-3 text-yellow-400" />
            <span className="text-lg font-bold">REVOLUTIONARY CONTENT 2025</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Transform Your Business with AI
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Discover the latest AI strategies, success stories, and implementation guides that are helping companies achieve unprecedented results and revolutionize their industries.
          </p>
        </div>

        {/* Main Content Showcase */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Preview */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className={`bg-gradient-to-r ${currentContent.color} text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg`}>
                  {currentContent.type}
                </div>
                {currentContent.isNew && (
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">
                    NEW
                  </div>
                )}
                {currentContent.featured && (
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    FEATURED
                  </div>
                )}
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {currentContent.title}
              </h2>
              <p className="text-2xl text-blue-200 font-semibold">
                {currentContent.subtitle}
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                {currentContent.description}
              </p>

              <div className="flex items-center space-x-6 text-blue-200">
                <span className="flex items-center text-lg">
                  <Clock className="w-5 h-5 mr-2" />
                  {currentContent.readingTime}
                </span>
                <span className="flex items-center text-lg">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  High Impact
                </span>
                <span className="flex items-center text-lg">
                  <Award className="w-5 h-5 mr-2" />
                  Expert Guide
                </span>
              </div>

              <div className="flex space-x-4">
                <Link
                  href={currentContent.url}
                  className={`inline-flex items-center bg-gradient-to-r ${currentContent.color} hover:shadow-xl text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}
                >
                  Read Full Article
                  <ChevronRight className="w-6 h-6 ml-3" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center border-2 border-white/30 hover:border-white text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-white/10"
                >
                  Get Consultation
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
              </div>
            </div>

            {/* Metrics Display */}
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(currentContent.metrics).map(([key, value], index) => (
                <div key={key} className={`bg-gradient-to-br ${currentContent.color} rounded-2xl p-6 text-center shadow-xl transform hover:scale-105 transition-all duration-300`}>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {value}
                  </div>
                  <div className="text-sm md:text-base text-white/90 capitalize font-semibold">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-12">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125 shadow-lg'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* All Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {revolutionaryContent.map((content, index) => (
            <div
              key={content.id}
              className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:from-white/20 hover:to-white/10 cursor-pointer border border-white/20 hover:border-white/40 ${
                index === currentSlide ? 'ring-2 ring-white/50 shadow-xl' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`bg-gradient-to-r ${content.color} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                  {content.type}
                </div>
                {content.isNew && (
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    NEW
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                {content.title}
              </h3>
              <p className="text-blue-200 mb-4 line-clamp-2">
                {content.subtitle}
              </p>

              <div className="flex items-center justify-between text-sm text-blue-300">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {content.readingTime}
                </span>
                <span className="font-bold text-lg">
                  {content.metrics.roi} ROI
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that are already achieving unprecedented results with our proven AI strategies and implementation guides.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore All Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              Get AI Consultation
            </Link>
            <Link
              href="/resources"
              className="text-white hover:text-blue-300 font-semibold text-lg transition-colors"
            >
              View Resources →
            </Link>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
          aria-label="Dismiss banner"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025Banner;