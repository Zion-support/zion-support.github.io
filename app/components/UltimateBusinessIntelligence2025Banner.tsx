import React, { useState, useEffect } from 'react';
import Link from 'next/link';

<<<<<<< HEAD
const UltimateBusinessIntelligence2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
<<<<<<< HEAD
  
=======
const UltimateBusinessIntelligence2025Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-118c
  const content = [
    {
      id: 'ultimate-business-intelligence-revolution',
      title: 'AI 2025: The Ultimate Business Intelligence Revolution',
      description: 'Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented insights and competitive advantage.',
<<<<<<< HEAD
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough',
=======
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-118c
=======

  const content = [
    {
      id: 'ultimate-business-intelligence-2025',
      title: 'Ultimate Business Intelligence Revolution 2025',
      description: 'Transform your enterprise with AI-powered business intelligence achieving 30,000% ROI, 70% cost reduction, and 90% efficiency gains.',
      url: '/blog/ultimate-business-intelligence-2025',
>>>>>>> 49ee820968f6910db9b3aa56c9254128dde2e192
      type: 'Blog Post',
      metrics: {
<<<<<<< HEAD
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
<<<<<<< HEAD
      url: '/case-studies/fortune-500-ultimate-business-intelligence-30000-roi-success-story',
=======
      url: '/case-studies/fortune-500-ultimate-business-intelligence-success',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-118c
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
      url: '/guides/ai-2025-ultimate-business-intelligence-implementation-guide',
      type: 'Implementation Guide',
      metrics: {
=======
>>>>>>> a592ab53728fe9c95b917d9d019e153fe1af034e
        efficiency: '300%',
        accuracy: '99.7%',
        timeline: '6 months',
        adoption: '95%'
<<<<<<< HEAD
      },
<<<<<<< HEAD
      readingTime: '60 min read',
=======
      readingTime: '45 min read',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-118c
      featured: true
=======
      }
>>>>>>> a592ab53728fe9c95b917d9d019e153fe1af034e
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

<<<<<<< HEAD
  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-business-intelligence-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

=======
>>>>>>> a592ab53728fe9c95b917d9d019e153fe1af034e
  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-business-intelligence-2025-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

<<<<<<< HEAD
  return (
<<<<<<< HEAD
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-118c
          style={{ animationDelay: '1s' }}
        ></div>
=======
<<<<<<< HEAD
  const currentContent = content[currentSlide];

=======
>>>>>>> a592ab53728fe9c95b917d9d019e153fe1af034e
  return (
    <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-bounce" style={{ animationDelay: '1s' }}></div>
>>>>>>> 49ee820968f6910db9b3aa56c9254128dde2e192
      </div>

<<<<<<< HEAD
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-cyan-400 font-bold text-xl">
=======
      <div className='relative z-10 container mx-auto px-4 py-16'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center gap-3 mb-6'>
            <span className='text-2xl'>🚀</span>
            <span className='text-cyan-400 font-bold text-xl'>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-118c
              BREAKING: ULTIMATE BUSINESS INTELLIGENCE REVOLUTION 2025
            </span>
            <span className='text-2xl'>⚡</span>
          </div>
<<<<<<< HEAD
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            {currentContent.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            {currentContent.description}
          </p>
        </div>

        {/* Main Content Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            {/* Content Type Badge */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-200 text-sm font-bold rounded-full border border-cyan-400/50">
                  {currentContent.type}
                </span>
                <span className="text-gray-300 text-sm">⏱️ {currentContent.readingTime}</span>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Dismiss banner"
              >
                ✕
              </button>
=======
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wide">
                New Release
              </span>
>>>>>>> a592ab53728fe9c95b917d9d019e153fe1af034e
            </div>

<<<<<<< HEAD
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{value}</div>
                  <div className="text-gray-300 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
=======

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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-118c
                </div>
              ))}
            </div>

<<<<<<< HEAD
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href={currentContent.url}
                className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="text-xl">📖</span>
                <span>Read {currentContent.type}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10"
              >
                <span className="text-xl">📞</span>
                <span>Call +1 302 464 0950</span>
              </a>
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-118c
=======
<<<<<<< HEAD
            {/* Content Details */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold text-sm uppercase tracking-wide">
                  New Release
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {currentContent.title}
              </h2>
              
              <p className="text-lg text-gray-200 mb-6 max-w-3xl">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{value}</div>
                    <div className="text-gray-300 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Read Full Article
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <button className="inline-flex items-center px-6 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
>>>>>>> 49ee820968f6910db9b3aa56c9254128dde2e192
            </div>
          </div>

          {/* Slide Indicators */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
          {content.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {content.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
=======
            <div className="flex flex-wrap gap-4 mb-6">
              {Object.entries(content[currentSlide].metrics).map(([key, value]) => (
                <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold text-cyan-400">{value}</div>
                  <div className="text-sm text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={content[currentSlide].url}
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Full Article
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <button className="inline-flex items-center px-6 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="ml-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {content.length > 1 && (
>>>>>>> 49ee820968f6910db9b3aa56c9254128dde2e192
          <div className="flex justify-center mt-8 space-x-2">
=======
          <div className='flex justify-center mt-8 space-x-2'>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-118c
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
>>>>>>> a592ab53728fe9c95b917d9d019e153fe1af034e

<<<<<<< HEAD
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Enterprise Clients' },
            { value: '30,000%', label: 'Average ROI' },
            { value: '99.9%', label: 'Success Rate' },
            { value: '5M+', label: 'Data Points Processed' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
=======
        {/* Dismiss Button */}
        <div className='text-center'>
          <button
            onClick={handleDismiss}
            className='text-gray-400 hover:text-white transition-colors text-sm'
          >
            Dismiss this banner
          </button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-118c
        </div>
      </div>
    </div>
  );
};

export default UltimateBusinessIntelligence2025Banner;
