'use client';

import React, { useState } from 'react';
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
        efficiency: '300%',
        accuracy: '99.7%',
        timeline: '6 months',
        adoption: '95%'
      }
    },
    {
      id: 'predictive-analytics-breakthrough',
      title: 'Predictive Analytics Breakthrough: 15,000% ROI Achievement',
      description: 'Discover the revolutionary predictive analytics framework that has delivered record-breaking ROI for Fortune 500 companies.',
      url: '/articles/predictive-analytics-breakthrough-15000-roi-achievement',
      type: 'Article',
      metrics: {
        efficiency: '400%',
        accuracy: '98.5%',
        timeline: '4 months',
        adoption: '90%'
      }
    },
    {
      id: 'real-time-intelligence-mastery',
      title: 'Real-Time Intelligence Mastery: The Complete Guide',
      description: 'Master real-time business intelligence with our comprehensive framework that transforms data into actionable insights instantly.',
      url: '/guides/real-time-intelligence-mastery-complete-guide',
      type: 'Guide',
      metrics: {
        efficiency: '250%',
        accuracy: '99.2%',
        timeline: '3 months',
        adoption: '85%'
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % content.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + content.length) % content.length);
  };

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 mb-8">
            <span className="text-indigo-300 text-lg font-semibold">🚀 Ultimate Business Intelligence 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            The Future of
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Business Intelligence
            </span>
            is Here
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Experience unprecedented growth with AI-powered business intelligence solutions that deliver measurable results and competitive advantage.
          </p>

          {/* Carousel */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 text-sm font-semibold rounded-full border border-indigo-400/30">
                  {currentContent.type}
                </span>
                <button
                  onClick={closeBanner}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                {currentContent.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.efficiency}</div>
                  <div className="text-sm text-gray-400">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.accuracy}</div>
                  <div className="text-sm text-gray-400">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.timeline}</div>
                  <div className="text-sm text-gray-400">Timeline</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">{currentContent.metrics.adoption}</div>
                  <div className="text-sm text-gray-400">Adoption</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={currentContent.url}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  Explore Now
                </Link>
                <Link
                  href="/enterprise"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  Enterprise Solutions
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center mt-6 space-x-4">
              <button
                onClick={prevSlide}
                className="p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {content.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-indigo-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-400/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business Intelligence?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the revolution and experience unprecedented growth with our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Get Started Today
              </Link>
              <Link
                href="/blog"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateBusinessIntelligence2025Banner;