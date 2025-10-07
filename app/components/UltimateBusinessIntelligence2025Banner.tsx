'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligence2025Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'ultimate-business-intelligence-revolution',
      title: 'AI 2025: The Ultimate Business Intelligence Revolution',
      description: 'Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented insights and competitive advantage.',
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution',
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
      description: 'How a $15.2B manufacturing giant achieved unprecedented business intelligence transformation with AI-powered analytics.',
      url: '/case-studies/fortune-500-ultimate-business-intelligence-success',
      type: 'Case Study',
      metrics: {
        roi: '30,000%',
        savings: '$750B',
        company: '$15.2B',
        timeline: '18 months'
      },
      readingTime: '25 min read',
      featured: true,
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
        adoption: '100%'
      },
      readingTime: '45 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [content.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-business-intelligence-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-business-intelligence-2025-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

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
            Transform Your Enterprise with
            <span className='block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
              AI-Powered Intelligence
            </span>
          </h2>

          <p className='text-xl text-gray-300 mb-8 max-w-4xl mx-auto'>
            Discover the revolutionary AI technologies that are reshaping business intelligence and delivering unprecedented ROI for Fortune 500 companies.
          </p>
        </div>

        {/* Content Carousel */}
        <div className='max-w-6xl mx-auto mb-16'>
          <div className='bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20'>
            <div className='text-center mb-8'>
              <span className='bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold'>
                {content[currentSlide].type}
              </span>
              <span className='ml-3 text-yellow-400 text-sm font-semibold'>
                {content[currentSlide].readingTime}
              </span>
            </div>

            <h3 className='text-3xl md:text-4xl font-bold text-white mb-6 text-center'>
              {content[currentSlide].title}
            </h3>

            <p className='text-lg text-gray-300 mb-8 text-center max-w-4xl mx-auto'>
              {content[currentSlide].description}
            </p>

            {/* Metrics Grid */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-8'>
              {Object.entries(content[currentSlide].metrics).map(([key, value]) => (
                <div key={key} className='text-center'>
                  <div className='text-2xl md:text-3xl font-bold text-cyan-400 mb-2'>
                    {value}
                  </div>
                  <div className='text-sm text-gray-400 capitalize'>
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href={content[currentSlide].url}
                className='bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'
              >
                Read Full {content[currentSlide].type}
              </Link>
              <Link
                href='/contact'
                className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300'
              >
                Get Custom AI Solutions
              </Link>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className='flex justify-center mt-8 space-x-2'>
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

        {/* Dismiss Button */}
        <div className='text-center'>
          <button
            onClick={handleDismiss}
            className='text-gray-400 hover:text-white transition-colors text-sm'
          >
            Dismiss this banner
          </button>
        </div>
      </div>
    </section>
  );
};

export default UltimateBusinessIntelligence2025Banner;