'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Featured content with high ROI metrics
  const featuredContent = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      description: 'Master advanced AI automation with our comprehensive guide. Achieve 500% ROI, 85% efficiency gains, and transform your business operations.',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      type: 'Blog Post',
      metrics: {
        roi: '500%',
        efficiency: '85%',
        savings: '$2.8M',
        accuracy: '99.8%'
      },
      featured: true,
      readingTime: '25 min read'
    },
    {
      id: 'fortune-500-success',
      title: 'AI Automation Success Story: Fortune 500 Company Achieves 1,200% ROI',
      description: 'Discover how a Fortune 500 manufacturing company achieved 1,200% ROI, $5.2M annual savings, and 95% process automation.',
      url: '/case-studies/ai-automation-fortune-500-success-story-2025',
      type: 'Case Study',
      metrics: {
        roi: '1,200%',
        savings: '$5.2M',
        automation: '95%',
        satisfaction: '98%'
      },
      featured: true,
      readingTime: '15 min read'
    },
    {
      id: 'implementation-framework',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Guide to 500%+ ROI',
      description: 'Master AI implementation with our proven framework. Achieve 500%+ ROI, 85% efficiency gains, and transform your business.',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      type: 'Resource Guide',
      metrics: {
        roi: '500%+',
        efficiency: '85%',
        savings: '$2.8M',
        success: '94%'
      },
      featured: true,
      readingTime: '30 min read'
    }
  ];

  // Auto-rotate content every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Check if banner was dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-showcase-2025-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-content-showcase-2025-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ultimate AI Success Content Collection
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our latest high-impact content featuring proven strategies for achieving 
            <span className="text-yellow-300 font-bold"> 500%+ ROI</span> and 
            <span className="text-yellow-300 font-bold"> $2.8M+ savings</span> through AI implementation.
          </p>
        </div>

        {/* Featured Content Showcase */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {currentContent.type}
                </span>
                <span className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {currentContent.readingTime}
                </span>
                <span className="bg-red-400 text-white px-3 py-1 rounded-full text-sm font-bold">
                  FEATURED
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                {currentContent.title}
              </h3>

              <p className="text-lg opacity-90 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-300">{value}</div>
                    <div className="text-sm opacity-80 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors text-center"
                >
                  Read Full Article →
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-colors text-center"
                >
                  Get Consultation
                </Link>
              </div>
            </div>

            {/* Content Preview */}
            <div className="relative">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold">Content Preview</h4>
                    <div className="flex space-x-1">
                      {featuredContent.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentSlide ? 'bg-yellow-400' : 'bg-white bg-opacity-50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <div className="text-sm font-semibold mb-1">Key Benefits:</div>
                      <ul className="text-sm space-y-1">
                        <li>• Proven ROI strategies and frameworks</li>
                        <li>• Real-world success stories and case studies</li>
                        <li>• Step-by-step implementation guides</li>
                        <li>• Industry best practices and insights</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <div className="text-sm font-semibold mb-1">Perfect For:</div>
                      <ul className="text-sm space-y-1">
                        <li>• C-level executives and decision makers</li>
                        <li>• IT directors and technology leaders</li>
                        <li>• Operations managers and process owners</li>
                        <li>• AI implementation teams</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredContent.map((content, index) => (
            <div
              key={content.id}
              className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-opacity-20 ${
                index === currentSlide ? 'ring-2 ring-yellow-400' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {content.type}
                </span>
                <span className="text-sm opacity-80">{content.readingTime}</span>
              </div>
              
              <h4 className="text-lg font-bold mb-3 line-clamp-2">
                {content.title}
              </h4>
              
              <p className="text-sm opacity-90 mb-4 line-clamp-3">
                {content.description}
              </p>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                {Object.entries(content.metrics).slice(0, 2).map(([key, value]) => (
                  <div key={key} className="bg-white bg-opacity-20 rounded p-2 text-center">
                    <div className="text-sm font-bold text-yellow-300">{value}</div>
                    <div className="text-xs opacity-80 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
              
              <Link
                href={content.url}
                className="block w-full bg-white bg-opacity-20 text-white text-center py-2 rounded-lg font-semibold hover:bg-opacity-30 transition-colors"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
              Join 500+ companies that have achieved extraordinary results with our proven AI implementation strategies. 
              Get personalized guidance and transform your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white hover:text-yellow-300 transition-colors"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;