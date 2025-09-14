'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Users, Award } from 'lucide-react';

const UltimateContent2025RevolutionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const newContent = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough',
      roi: '600%',
      savings: '$4.2B',
      accuracy: '99.3%',
      satisfaction: '98%',
      readingTime: '22 min read',
      description: 'Discover how Fortune 500 companies are achieving 600% ROI with next-generation AI solutions.'
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings - Ultimate Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      roi: '567%',
      savings: '$2.8B',
      efficiency: '78%',
      satisfaction: '99.2%',
      readingTime: '18 min read',
      description: 'How a $50B manufacturing giant achieved 567% ROI with AI transformation.'
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - $100B Market Transformation',
      type: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      roi: '400-600%',
      savings: '$100B',
      speed: '1,200%',
      accuracy: '99.97%',
      readingTime: '20 min read',
      description: 'Discover how quantum computing is revolutionizing business operations with 1,200% processing speed improvements.'
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap: From Strategy to 800% ROI in 18 Months',
      type: 'resource',
      url: '/resources/ai-2025-implementation-roadmap-ultimate',
      roi: '800%',
      savings: '$173.7M',
      success: '99%',
      timeline: '18 months',
      readingTime: '25 min read',
      description: 'Complete step-by-step guide to AI implementation with proven strategies and frameworks.'
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
    localStorage.setItem('ultimateContent2025RevolutionBanner_dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimateContent2025RevolutionBanner_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = newContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 rounded-full p-2">
              <Award className="h-6 w-6 text-yellow-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">🚀 Ultimate Content 2025 Revolution</h2>
              <p className="text-blue-200 text-sm">New breakthrough content with proven ROI results</p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Content Showcase */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {currentContent.type.toUpperCase()}
                </div>
                <div className="text-blue-200 text-sm">
                  {currentContent.readingTime}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                {currentContent.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-400" />
                    <span className="text-sm font-medium">ROI</span>
                  </div>
                  <div className="text-lg font-bold text-green-400">
                    {currentContent.roi}
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm font-medium">Savings</span>
                  </div>
                  <div className="text-lg font-bold text-yellow-400">
                    {currentContent.savings}
                  </div>
                </div>
              </div>

              <Link
                href={currentContent.url}
                className="inline-flex items-center space-x-2 bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <span>Explore Content</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex space-x-2 justify-center">
              {newContent.map((_, index) => (
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

          {/* Right Side - Statistics */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">Revolutionary Results</h3>
              <p className="text-blue-200">Proven success across Fortune 500 companies</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-green-400 mb-2">800%</div>
                <div className="text-sm text-blue-200">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">$4.2B</div>
                <div className="text-sm text-blue-200">Total Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.3%</div>
                <div className="text-sm text-blue-200">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-sm text-blue-200">Satisfaction</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="font-semibold mb-3 flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-400" />
                <span>Success Stories</span>
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-200">Fortune 500 Companies</span>
                  <span className="font-semibold">50+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Total Projects</span>
                  <span className="font-semibold">500+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Success Rate</span>
                  <span className="font-semibold text-green-400">99%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/resources"
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Resources
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025RevolutionBanner;