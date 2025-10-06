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
        efficiency: '500%'
      },
      readingTime: '45 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-20">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-yellow-400 font-bold text-xl">
              BREAKING: ULTIMATE BUSINESS INTELLIGENCE REVOLUTION 2025
            </span>
            <span className="text-2xl">⚡</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI 2025: The Ultimate Business Intelligence Revolution
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented insights and competitive advantage.
          </p>

          <div className="flex items-center justify-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📊</span>
              <span>30,000% ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💰</span>
              <span>$750B+ Savings</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span>99.99% Accuracy</span>
            </div>
          </div>
        </div>

        {/* Featured Content Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {content.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold rounded-full">
                            {item.type}
                          </span>
                          <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full">
                            FEATURED
                          </span>
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-6">
                          {item.title}
                        </h3>

                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {Object.entries(item.metrics).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-2xl font-bold text-cyan-400">{value}</div>
                              <div className="text-gray-400 text-sm capitalize">{key}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-4">
                          <Link
                            href={item.url}
                            className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
                          >
                            <span>Read {item.type}</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </Link>
                          <span className="text-gray-400">{item.readingTime}</span>
                        </div>
                      </div>

                      {/* Visual */}
                      <div className="relative">
                        <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 border border-white/20">
                          <div className="text-center">
                            <div className="text-6xl mb-4">📊</div>
                            <h4 className="text-2xl font-bold text-white mb-4">Business Intelligence Dashboard</h4>
                            <div className="space-y-3">
                              <div className="bg-white/10 rounded-lg p-3">
                                <div className="text-cyan-400 font-bold">Real-time Analytics</div>
                                <div className="text-gray-300 text-sm">Live data processing</div>
                              </div>
                              <div className="bg-white/10 rounded-lg p-3">
                                <div className="text-blue-400 font-bold">Predictive Insights</div>
                                <div className="text-gray-300 text-sm">AI-powered forecasting</div>
                              </div>
                              <div className="bg-white/10 rounded-lg p-3">
                                <div className="text-purple-400 font-bold">Automated Reports</div>
                                <div className="text-gray-300 text-sm">Zero-touch intelligence</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
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

        {/* Call-to-Action Section */}
        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Revolutionize Your Business Intelligence?
          </h3>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 500+ enterprises achieving 30,000% ROI with AI-powered business intelligence. 
            Get expert guidance from Zion Tech Group's transformation specialists.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <span>Start Your Transformation</span>
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
      </div>
    </div>
  );
};

export default UltimateBusinessIntelligence2025Banner;