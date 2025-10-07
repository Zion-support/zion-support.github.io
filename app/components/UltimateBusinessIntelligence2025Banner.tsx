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
        success: '99.8%',
        timeline: '18 months',
        adoption: '100%'
      },
      readingTime: '45 min read',
      featured: true
    },
    {
      id: 'ultimate-business-intelligence-guide',
      title: 'Ultimate Business Intelligence Implementation Guide',
      description:
        'Complete step-by-step guide to implementing business intelligence solutions that deliver measurable results.',
      url: '/guides/ultimate-business-intelligence-implementation-guide',
      type: 'Guide',
      metrics: {
        roi: '25,000%',
        savings: '$500B+',
        accuracy: '99.95%',
        speed: '3,000% faster'
      },
      readingTime: '60 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [content.length]);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

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

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className='absolute top-4 right-4 z-20 text-white/70 hover:text-white transition-colors'
        aria-label='Close banner'
      >
        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
        </svg>
      </button>

      {/* Main Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center gap-2 mb-6'>
            <span className='text-3xl'>🚀</span>
            <span className='text-yellow-400 font-bold text-xl'>
              ULTIMATE BREAKTHROUGH: BUSINESS INTELLIGENCE REVOLUTION 2025
            </span>
            <span className='text-3xl'>⚡</span>
          </div>

          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            {currentContent.title}
          </h1>
          
          <p className='text-xl text-gray-300 mb-8 max-w-4xl mx-auto'>
            {currentContent.description}
          </p>

          {/* Metrics */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto'>
            {Object.entries(currentContent.metrics).map(([key, value]) => (
              <div key={key} className='bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20'>
                <div className='text-2xl font-bold text-yellow-400'>{value}</div>
                <div className='text-sm text-gray-300 capitalize'>{key.replace(/([A-Z])/g, ' $1').trim()}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
            <Link
              href={currentContent.url}
              className='bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105'
            >
              Read {currentContent.type} ({currentContent.readingTime})
            </Link>
            <Link
              href='/contact'
              className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300'
            >
              Get Implementation Help
            </Link>
          </div>

          {/* Slide Indicators */}
          <div className='flex justify-center space-x-2'>
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateBusinessIntelligence2025Banner;