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
      category: 'AI & Business Intelligence',
      readTime: '12 min read',
      publishDate: 'September 30, 2025',
      featured: true,
      stats: {
        roi: '300%',
        efficiency: '90%',
        costReduction: '70%'
      }
    },
    {
      id: 'advanced-analytics-platform',
      title: 'Advanced Analytics Platform: Real-Time Intelligence',
      description: 'Deploy cutting-edge analytics that process millions of data points in real-time, delivering actionable insights instantly.',
      url: '/solutions/advanced-analytics-platform',
      type: 'Solution',
      category: 'Analytics & Data',
      readTime: '8 min read',
      publishDate: 'September 30, 2025',
      featured: true,
      stats: {
        processingSpeed: '1M+',
        accuracy: '99.9%',
        latency: '<100ms'
      }
    },
    {
      id: 'enterprise-ai-automation',
      title: 'Enterprise AI Automation: The Future is Now',
      description: 'Revolutionize your business processes with intelligent automation that learns, adapts, and optimizes continuously.',
      url: '/solutions/enterprise-ai-automation',
      type: 'Solution',
      category: 'AI & Automation',
      readTime: '15 min read',
      publishDate: 'September 30, 2025',
      featured: true,
      stats: {
        automation: '95%',
        timeSaved: '80%',
        productivity: '200%'
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-3xl">🚀</span>
            <span className="text-yellow-400 font-bold text-xl">
              BREAKING: Revolutionary AI Solutions Just Launched!
            </span>
            <span className="text-3xl">⚡</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Ultimate Business Intelligence 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Transform your enterprise with cutting-edge AI solutions that deliver unprecedented insights, 
            automation, and competitive advantage in the digital age.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-12">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            aria-label="Close banner"
          >
            <span className="text-2xl">×</span>
          </button>

          {/* Content */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold text-sm">LIVE NOW</span>
              <span className="text-gray-400">•</span>
              <span className="text-blue-400 font-semibold text-sm">{currentContent.type}</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {currentContent.title}
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {currentContent.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {Object.entries(currentContent.stats).map(([key, value], index) => (
                <div key={key} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{value}</div>
                  <div className="text-sm text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={currentContent.url}
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Explore {currentContent.type}
                <span className="ml-2">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Get Started
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-cyan-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            {currentContent.readTime} • {currentContent.publishDate} • {currentContent.category}
          </p>
        </div>
      </div>
    </section>
  );
};

export default UltimateBusinessIntelligence2025Banner;