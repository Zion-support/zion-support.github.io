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
      description:
        'Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented insights and competitive advantage.',
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough',
      type: 'Blog Post',
      metrics: {
        roi: '30,000%',
        savings: '$750B+',
        accuracy: '99.99%',
        speed: '5,000% faster'
        speed: '5,000% faster',
      },
      readingTime: '35 min read',
      featured: true,
    },
    {
      id: 'fortune-500-business-intelligence-success',
      title: 'Fortune 500 Ultimate Business Intelligence Success',
      description:
        'How a $15.2B manufacturing giant achieved unprecedented business intelligence transformation with AI-powered analytics.',
      url: '/case-studies/fortune-500-ultimate-business-intelligence-30000-roi-success-story',
      type: 'Case Study',
      metrics: {
        roi: '30,000%',
        savings: '$750B',
        company: '$15.2B',
        timeline: '18 months'
        timeline: '18 months',
      },
      readingTime: '25 min read',
      featured: true,
    },
    {
      id: 'business-intelligence-implementation-guide',
      title: 'AI 2025 Ultimate Business Intelligence Implementation Guide',
      description:
        'Complete roadmap to 30,000% ROI through revolutionary AI-powered business intelligence transformation.',
      url: '/resources/ai-2025-ultimate-business-intelligence-implementation-guide',
      type: 'Implementation Guide',
      metrics: {
        roi: '30,000%',
        success: '99.8%',
        timeline: '18 months',
        adoption: '100%'
      },
      readingTime: '45 min read',
      featured: true
    }
        adoption: '100%',
      },
      readingTime: '45 min read',
      featured: true,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
      setCurrentSlide(prev => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [content.length]);

  return (
    <section className='relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden'>
      {/* Animated Background Effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className='absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className='relative z-10 container mx-auto px-4 py-16'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center gap-3 mb-6'>
            <span className='text-2xl'>🚀</span>
            <span className='text-cyan-400 font-bold text-xl'>
              BREAKING: ULTIMATE BUSINESS INTELLIGENCE REVOLUTION 2025
            </span>
            <span className='text-2xl'>⚡</span>
          </div>

          <h2 className='text-4xl md:text-6xl font-extrabold text-white mb-6'>
            <span className='bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
              AI 2025: The Ultimate Business Intelligence Revolution
            </span>
          </h2>

          <p className='text-xl text-gray-300 mb-8 max-w-4xl mx-auto'>
            Transform your enterprise with next-generation AI-powered business
            intelligence that delivers unprecedented insights and competitive
            advantage.
          </p>
        </div>

        {/* Featured Content Carousel */}
        <div className='relative mb-16'>
          <div className='overflow-hidden rounded-3xl'>
            <div
              className='flex transition-transform duration-500 ease-in-out'
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {content.map((item, index) => (
                <div key={item.id} className='w-full flex-shrink-0'>
                  <div className='bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20'>
                    <div className='grid md:grid-cols-2 gap-12 items-center'>
                      {/* Content */}
                      <div>
                        <div className='flex items-center gap-3 mb-6'>
                          <span className='px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold rounded-full'>
                            {item.type}
                          </span>
                          <span className='px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-full'>
                            🔥 FEATURED
                          </span>
                        </div>

                        <h3 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                          {item.title}
                        </h3>

                        <p className='text-xl text-gray-300 mb-8 leading-relaxed'>
                          {item.description}
                        </p>

                        {/* Metrics */}
                        <div className='grid grid-cols-2 gap-4 mb-8'>
                          {Object.entries(item.metrics).map(([key, value]) => (
                            <div key={key} className='text-center'>
                              <div className='text-2xl font-bold text-cyan-400'>
                                {value}
                              </div>
                              <div className='text-gray-400 text-sm capitalize'>
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className='flex items-center gap-6'>
                          <Link
                            href={item.url}
                            className='group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl'
                          >
                            <span>Read Full Article</span>
                            <span className='group-hover:translate-x-1 transition-transform'>
                              →
                            </span>
                          </Link>
                          <span className='text-gray-400'>
                            {item.readingTime}
                          </span>
                        </div>
                      </div>

                      {/* Visual */}
                      <div className='relative'>
                        <div className='bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 border border-white/20'>
                          <div className='text-center'>
                            <div className='text-6xl mb-4'>📊</div>
                            <h4 className='text-2xl font-bold text-white mb-4'>
                              Business Intelligence Dashboard
                            </h4>
                            <div className='space-y-3'>
                              <div className='flex justify-between items-center'>
                                <span className='text-gray-300'>
                                  ROI Improvement
                                </span>
                                <span className='text-cyan-400 font-bold'>
                                  30,000%
                                </span>
                              </div>
                              <div className='flex justify-between items-center'>
                                <span className='text-gray-300'>
                                  Cost Savings
                                </span>
                                <span className='text-green-400 font-bold'>
                                  $750B+
                                </span>
                              </div>
                              <div className='flex justify-between items-center'>
                                <span className='text-gray-300'>Accuracy</span>
                                <span className='text-purple-400 font-bold'>
                                  99.99%
                                </span>
                              </div>
                              <div className='flex justify-between items-center'>
                                <span className='text-gray-300'>
                                  Speed Increase
                                </span>
                                <span className='text-yellow-400 font-bold'>
                                  5,000%
                                </span>
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
          <div className='flex justify-center gap-3 mt-8'>
                  currentSlide === index 
                    ? 'bg-white/20 backdrop-blur-sm border border-white/30' 
                    : 'bg-white/5 hover:bg-white/10 border border-transparent'
                }`}
          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
  if (!isVisible) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-yellow-400 font-bold text-lg">
              ULTIMATE BUSINESS INTELLIGENCE REVOLUTION 2025
            </span>
            <span className="text-2xl">⚡</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Transform Your Enterprise with AI-Powered Intelligence
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how Fortune 500 companies achieve 30,000% ROI with revolutionary AI-powered business intelligence solutions
          </p>
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
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-full">
                            {item.type}
                          </span>
                          <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full">
                            FEATURED
                          </span>
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                          {item.title}
                        </h3>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {Object.entries(item.metrics).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-2xl font-bold text-yellow-400">{value}</div>
                              <div className="text-gray-400 text-sm capitalize">{key}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-4">
                          <Link
                            href={item.url}
                            className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
                          >
                            <span>Read {item.type}</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </Link>
                          <span className="text-gray-400">{item.readingTime}</span>
                        </div>
                      </div>

                      {/* Visual */}
                      <div className="relative">
                        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/20">
                          <div className="text-center">
                            <div className="text-6xl mb-4">📊</div>
                            <h4 className="text-2xl font-bold text-white mb-4">Business Intelligence Dashboard</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-gray-300">ROI Improvement</span>
                                <span className="text-green-400 font-bold">30,000%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-gray-300">Cost Savings</span>
                                <span className="text-blue-400 font-bold">$750B+</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-gray-300">Accuracy</span>
                                <span className="text-yellow-400 font-bold">99.99%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-gray-300">Speed Increase</span>
                                <span className="text-purple-400 font-bold">5,000%</span>
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

          {/* Carousel Controls */}
          <div className="flex justify-center gap-2 mt-6">
            <span className="text-yellow-400 font-bold text-xl">
              ULTIMATE BREAKTHROUGH: AI 2025 BUSINESS INTELLIGENCE REVOLUTION
            </span>
            <span className="text-2xl">⚡</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              The Ultimate Business Intelligence Revolution
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI 2025 Edition
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how Fortune 500 enterprises are achieving 30,000% ROI with revolutionary AI-powered business intelligence that transforms decision-making and drives unprecedented growth.
          </p>

          <div className="flex items-center justify-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📊</span>
              <span className="font-semibold">30,000% ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💰</span>
              <span className="font-semibold">$750B+ Savings</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span className="font-semibold">99.99% Accuracy</span>
            </div>
          </div>
        </div>

        {/* Featured Content Carousel */}
        <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">🔥 ULTIMATE</span>
              <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full">NEW TODAY</span>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              {currentContent.title}
            </h3>
            
            <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
              {currentContent.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">{value}</div>
                  <div className="text-sm text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={currentContent.url}
                className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <span>Read {currentContent.type}</span>
                <span>→</span>
              </Link>
              <div className="text-gray-400 text-sm">
                ⏱️ {currentContent.readingTime}
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e4e
>>>>>>> main
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                  index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Achieve 30,000% ROI with AI Business Intelligence?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join Fortune 500 companies transforming their operations with Zion Tech Group's revolutionary AI-powered business intelligence solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <span>Start Your Transformation</span>
            </Link>
            <Link
              href="/blog"
              className="group flex items-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Explore All Content</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentSlide === index ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className='text-center bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20 mb-16'>
          <h3 className='text-4xl font-bold text-white mb-6'>
            Ready to Transform Your Business Intelligence?
          </h3>
          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
            Join 500+ enterprises achieving unprecedented business intelligence
            transformation with AI-powered analytics and insights.
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
            <a
              href='tel:+13024640950'
              className='group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl'
            >
              <span className='text-xl'>📞</span>
              <span>Call +1 302 464 0950</span>
            </a>
            <a
              href='mailto:kleber@ziontechgroup.com'
              className='group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/30'
            >
              <span className='text-xl'>📧</span>
              <span>Get Expert Consultation</span>
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {[
            { value: '500+', label: 'Enterprise Clients' },
            { value: '30,000%', label: 'Average ROI' },
            { value: '99.99%', label: 'Accuracy Rate' },
            { value: '5,000%', label: 'Speed Increase' },
          ].map((stat, index) => (
            <div key={index} className='text-center'>
              <div className='text-3xl font-bold text-cyan-400 mb-2'>
                {stat.value}
              </div>
              <div className='text-gray-300'>{stat.label}</div>
            </div>
          ))}
=======
        {/* Call-to-Action Section */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Achieve 30,000% ROI with AI Business Intelligence?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join Fortune 500 enterprises achieving unprecedented business intelligence transformation. 
            Get expert guidance from Zion Tech Group's AI specialists.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="text-xl">📞</span>
              <span>Get Expert Consultation</span>
            </Link>
            <Link
              href="/blog"
              className="flex items-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10"
            >
              <span>Explore All Content</span>
              <span>→</span>
            </Link>
          </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e4e
=======
>>>>>>> main
        </div>
      </div>
    </section>
  );
};

export default UltimateBusinessIntelligence2025Banner;
