'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Star, TrendingUp, Users, Zap, Clock, Award } from 'lucide-react';

const NewContent2025UltimateShowcaseBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const contentPieces = [
    {
      id: 'ultimate-business-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      subtitle: '1,200% ROI in 6 Months - Complete Guide',
      type: 'blog',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '99.2%'
      },
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      readingTime: '22 min read',
      featured: true,
      category: 'Business Transformation'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings',
      subtitle: 'Ultimate Success Story - 567% ROI in 18 Months',
      type: 'case-study',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        timeline: '18 months',
        satisfaction: '99.2%'
      },
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      readingTime: '15 min read',
      featured: true,
      category: 'Success Story'
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025',
      subtitle: 'From Strategy to 800% ROI in 18 Months',
      type: 'resource',
      metrics: {
        roi: '800%',
        savings: '$173.7M',
        success: '99%',
        timeline: '18 months'
      },
      url: '/resources/ai-implementation-ultimate-roadmap-2025-comprehensive',
      readingTime: '25 min read',
      featured: true,
      category: 'Implementation Guide'
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dismissed = localStorage.getItem('new-content-2025-ultimate-banner-dismissed');
      setIsDismissed(dismissed === 'true');
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [contentPieces.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('new-content-2025-ultimate-banner-dismissed', 'true');
    }
  };

  if (isDismissed) return null;

  const currentContent = contentPieces[currentSlide];

<<<<<<< HEAD
export default function NewContent2025UltimateShowcaseBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm-20-20v20h20c0-11.046-8.954-20-20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white border-opacity-30">
            🆕 NEW CONTENT 2025
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Revolutionary AI Solutions
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Now Available
            </span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Explore our latest breakthrough content featuring quantum AI, autonomous systems, 
            and enterprise transformation strategies that deliver unprecedented results.
          </p>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Quantum AI Content */}
          <Link href="/blog/quantum-ai-2026-business-revolution" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 h-full">
              <div className="flex items-center mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  🔬 Quantum AI
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                Quantum AI Business Revolution
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Discover how quantum computing is revolutionizing business operations with 1,200% ROI potential.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-300 text-sm font-medium">Read More →</span>
                <span className="text-blue-200 text-xs">20 min read</span>
              </div>
            </div>
          </Link>
          
          {/* Autonomous Systems */}
          <Link href="/blog/ai-2025-autonomous-business-revolution-ultimate" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 h-full">
              <div className="flex items-center mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  🤖 Autonomous
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                Autonomous Business Systems
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Learn how to implement fully autonomous business operations for maximum efficiency.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-300 text-sm font-medium">Read More →</span>
                <span className="text-blue-200 text-xs">25 min read</span>
              </div>
            </div>
          </Link>
          
          {/* Enterprise Transformation */}
          <Link href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 h-full">
              <div className="flex items-center mb-4">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  🏢 Enterprise
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                Global Enterprise Success
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Multi-national corporation achieves 450% ROI across 15 countries with AI transformation.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-300 text-sm font-medium">Read More →</span>
                <span className="text-blue-200 text-xs">18 min read</span>
              </div>
            </div>
          </Link>
=======
  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-indigo-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">NEW ULTIMATE CONTENT 2025</span>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Content Preview */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-4">
                    <Star className="w-4 h-4 mr-2 text-yellow-400" />
                    <span className="text-sm font-medium">FEATURED {currentContent.type.toUpperCase()}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    {currentContent.title}
                  </h2>
                  <p className="text-xl text-white/90 mb-6">
                    {currentContent.subtitle}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-white/70">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{currentContent.readingTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>{currentContent.category}</span>
                    </div>
                  </div>
                </div>

                {/* Success Metrics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <span className="text-sm font-medium">ROI</span>
                    </div>
                    <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-5 h-5 text-blue-400" />
                      <span className="text-sm font-medium">SAVINGS</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-5 h-5 text-purple-400" />
                      <span className="text-sm font-medium">SUCCESS</span>
                    </div>
                    <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.success || currentContent.metrics.efficiency}</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-5 h-5 text-pink-400" />
                      <span className="text-sm font-medium">TIMELINE</span>
                    </div>
                    <div className="text-2xl font-bold text-pink-400">{currentContent.metrics.timeline || '6 months'}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentContent.url}
                    className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/resources"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-colors flex items-center justify-center"
                  >
                    View All Resources
                  </Link>
                </div>
              </div>

              {/* Content Showcase */}
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Success Metrics</h3>
                    <span className="text-sm text-white/70">{currentContent.readingTime}</span>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(currentContent.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-white/80 capitalize">{key.replace('_', ' ')}</span>
                        <span className="font-semibold text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Type Indicator */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${
                      currentContent.type === 'blog' ? 'bg-green-400' :
                      currentContent.type === 'case-study' ? 'bg-blue-400' : 'bg-purple-400'
                    }`}></div>
                    <span className="text-sm text-white/80 capitalize">{currentContent.type.replace('-', ' ')}</span>
                  </div>
                  {currentContent.featured && (
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-yellow-400 font-medium">Featured</span>
                    </div>
                  )}
                </div>

                {/* Additional Content Preview */}
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">What You'll Learn</h4>
                  <ul className="text-sm text-white/80 space-y-1">
                    <li>• Proven strategies for 800%+ ROI</li>
                    <li>• Step-by-step implementation guide</li>
                    <li>• Real-world success stories</li>
                    <li>• Technology stack recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 pb-6">
          {contentPieces.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
>>>>>>> origin/cursor/create-and-deploy-new-content-ad66
        </div>
        
        {/* Success Metrics */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Proven Results Across Industries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">$100B+</div>
              <div className="text-blue-100 text-sm">Market Cap Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300 mb-2">500+</div>
              <div className="text-blue-100 text-sm">Enterprises Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">99.7%</div>
              <div className="text-blue-100 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-300 mb-2">25+</div>
              <div className="text-blue-100 text-sm">Countries Served</div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore All Content
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      
      {/* Floating Elements */}
      <div className="absolute top-10 right-20 w-16 h-16 bg-yellow-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-pink-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-ad66
    </div>
  );
}