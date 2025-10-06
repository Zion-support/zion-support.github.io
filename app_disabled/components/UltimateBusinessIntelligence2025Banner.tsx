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
<<<<<<< HEAD
        speed: '5,000% faster'
=======
        speed: '5,000% faster',
>>>>>>> 97e2d060e1d7 (Fix merge conflicts and resolve errors in codebase)
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
<<<<<<< HEAD
        timeline: '18 months'
=======
        timeline: '18 months',
>>>>>>> 97e2d060e1d7 (Fix merge conflicts and resolve errors in codebase)
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
<<<<<<< HEAD
        adoption: '100%'
      },
      readingTime: '45 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
=======
        adoption: '100%',
      },
      readingTime: '45 min read',
      featured: true,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % content.length);
>>>>>>> 97e2d060e1d7 (Fix merge conflicts and resolve errors in codebase)
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

<<<<<<< HEAD
  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-lg font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              ULTIMATE BREAKTHROUGH: BUSINESS INTELLIGENCE REVOLUTION 2025
            </span>
            <span className="text-2xl">⚡</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              AI-Powered Business Intelligence
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              That Delivers 30,000% ROI
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented insights, 
            competitive advantage, and <span className="text-yellow-400 font-bold">30,000% ROI</span> for Fortune 500 companies.
          </p>
        </div>

        {/* Featured Content Carousel */}
        <div className="relative mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl">📊</div>
                <div>
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold rounded-full">
                    {currentContent.type}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">🔥 ULTIMATE</span>
                <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">BREAKTHROUGH</span>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {currentContent.title}
            </h3>

            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">{value}</div>
                  <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>⏱️ {currentContent.readingTime}</span>
                <span>📅 September 2025</span>
              </div>
              
              <Link
                href={currentContent.url}
                className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <span>Read {currentContent.type}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
=======
>>>>>>> 97e2d060e1d7 (Fix merge conflicts and resolve errors in codebase)
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

<<<<<<< HEAD
        {/* Call-to-Action Section */}
        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-3xl">🎯</span>
            <h3 className="text-3xl font-bold">
              Ready to Achieve 30,000% ROI?
            </h3>
            <span className="text-3xl">🚀</span>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join Fortune 500 companies achieving unprecedented business intelligence transformation. 
            Get expert guidance from Zion Tech Group's AI specialists.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="text-xl">📞</span>
              <span>Get Expert Consultation</span>
            </Link>
            
            <Link
              href="/blog"
              className="group flex items-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10"
            >
              <span>Explore All Content</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Fortune 500 Clients' },
            { value: '30,000%', label: 'Average ROI' },
            { value: '99.99%', label: 'Accuracy Rate' },
            { value: '24/7', label: 'Expert Support' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
=======
>>>>>>> 97e2d060e1d7 (Fix merge conflicts and resolve errors in codebase)
        </div>
      </div>
    </div>
  );
};

export default UltimateBusinessIntelligence2025Banner;