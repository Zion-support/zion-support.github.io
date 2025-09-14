'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface BannerContent {
  id: string;
  title: string;
  description: string;
  url: string;
  metrics: {
    roi: string;
    savings: string;
    satisfaction: string;
  };
  type: 'blog' | 'case-study' | 'resource';
  isNew?: boolean;
}

const RevolutionaryContent2025Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

<<<<<<< HEAD
  const bannerContent: BannerContent[] = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      description: 'Transform your business with cutting-edge AI automation that delivers 500%+ ROI',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '500%+',
        savings: '$2.8B',
        satisfaction: '98%'
      },
      type: 'blog',
      isNew: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings',
      description: 'How a global manufacturing giant achieved 1,200% ROI with comprehensive AI implementation',
      url: '/case-studies/fortune-500-ai-transformation-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        satisfaction: '96%'
      },
      type: 'case-study',
      isNew: true
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution',
      description: 'How Quantum AI is transforming business with 1,200% ROI and $100B market opportunity',
      url: '/blog/ai-2025-quantum-computing-business-revolution-ultimate-guide',
      metrics: {
        roi: '1,200%',
        savings: '$100B Market',
        satisfaction: '99.97%'
      },
      type: 'blog',
      isNew: true
=======
  // Revolutionary content with breakthrough metrics
  const revolutionaryContent = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      description: 'Master advanced AI automation with our comprehensive guide. Achieve 500% ROI, 85% efficiency gains, and transform your business operations.',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      type: 'Ultimate Guide',
      metrics: {
        roi: '500%',
        efficiency: '85%',
        savings: '$2.8M',
        accuracy: '99.8%'
      },
      featured: true,
      readingTime: '25 min read',
      badge: 'BREAKTHROUGH'
    },
    {
      id: 'fortune-500-success',
      title: 'AI Automation Success Story: Fortune 500 Company Achieves 1,200% ROI',
      description: 'Discover how a Fortune 500 manufacturing company achieved 1,200% ROI, $5.2M annual savings, and 95% process automation.',
      url: '/case-studies/ai-automation-fortune-500-success-story-2025',
      type: 'Success Story',
      metrics: {
        roi: '1,200%',
        savings: '$5.2M',
        automation: '95%',
        satisfaction: '98%'
      },
      featured: true,
      readingTime: '15 min read',
      badge: 'REVOLUTIONARY'
    },
    {
      id: 'implementation-framework',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Guide to 500%+ ROI',
      description: 'Master AI implementation with our proven framework. Achieve 500%+ ROI, 85% efficiency gains, and transform your business.',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      type: 'Success Framework',
      metrics: {
        roi: '500%+',
        efficiency: '85%',
        savings: '$2.8M',
        success: '94%'
      },
      featured: true,
      readingTime: '30 min read',
      badge: 'ULTIMATE'
>>>>>>> main
    }
  ];

  const typeIcons = {
    blog: '📝',
    'case-study': '📊',
    resource: '📚'
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 4000);

<<<<<<< HEAD
    return () => clearInterval(timer);
  }, [bannerContent.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2025-banner-dismissed', 'true');
  };
=======
    return () => clearInterval(interval);
  }, []);
>>>>>>> main

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
<<<<<<< HEAD
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
=======
    <div className="relative bg-gradient-to-r from-red-900 via-purple-900 to-blue-900 text-white py-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🔥 REVOLUTIONARY CONTENT 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Breakthrough AI Success Content
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
            Discover our latest revolutionary content featuring proven strategies for achieving 
            <span className="text-yellow-300 font-bold"> 1,200% ROI</span> and 
            <span className="text-yellow-300 font-bold"> $5.2M+ savings</span> through advanced AI implementation.
          </p>
        </div>

        {/* Featured Content Card */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Content Details */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-3 mb-3">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {currentContent.badge}
                </span>
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {currentContent.type}
                </span>
                <span className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {currentContent.readingTime}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold leading-tight">
                {currentContent.title}
              </h3>

              <p className="text-base opacity-90 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-yellow-300">{value}</div>
                    <div className="text-xs opacity-80 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={currentContent.url}
                  className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors text-center"
                >
                  Read Full Article →
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-6 py-2 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-colors text-center"
                >
                  Get Consultation
                </Link>
              </div>
            </div>

            {/* Content Preview */}
            <div className="lg:col-span-1">
              <div className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold">Content Preview</h4>
                    <div className="flex space-x-1">
                      {revolutionaryContent.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentSlide ? 'bg-yellow-400' : 'bg-white bg-opacity-50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-white bg-opacity-20 rounded-lg p-2">
                      <div className="text-xs font-semibold mb-1">Key Benefits:</div>
                      <ul className="text-xs space-y-1">
                        <li>• Proven ROI strategies</li>
                        <li>• Real-world success stories</li>
                        <li>• Step-by-step guides</li>
                        <li>• Industry best practices</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {revolutionaryContent.map((content, index) => (
            <div
              key={content.id}
              className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 cursor-pointer transition-all duration-300 hover:bg-opacity-20 ${
                index === currentSlide ? 'ring-2 ring-yellow-400' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  {content.badge}
                </span>
                <span className="text-xs opacity-80">{content.readingTime}</span>
              </div>
              
              <h4 className="text-sm font-bold mb-2 line-clamp-2">
                {content.title}
              </h4>
              
              <p className="text-xs opacity-90 mb-3 line-clamp-2">
                {content.description}
              </p>
              
              <div className="grid grid-cols-2 gap-2 mb-3">
                {Object.entries(content.metrics).slice(0, 2).map(([key, value]) => (
                  <div key={key} className="bg-white bg-opacity-20 rounded p-2 text-center">
                    <div className="text-xs font-bold text-yellow-300">{value}</div>
                    <div className="text-xs opacity-80 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
              
              <Link
                href={content.url}
                className="block w-full bg-white bg-opacity-20 text-white text-center py-2 rounded-lg text-xs font-semibold hover:bg-opacity-30 transition-colors"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">
              Ready to Achieve Revolutionary Results?
            </h3>
            <p className="text-base opacity-90 mb-4 max-w-2xl mx-auto">
              Join 500+ companies that have achieved extraordinary results with our proven AI implementation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-6 py-2 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white hover:text-yellow-300 transition-colors"
>>>>>>> main
          aria-label="Dismiss banner"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY 2025 CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover the Ultimate AI Success Stories
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Fortune 500 companies are achieving unprecedented results with our proven AI frameworks
          </p>
        </div>

        {/* Content Showcase */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{typeIcons[bannerContent[currentSlide].type]}</span>
              <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium">
                {bannerContent[currentSlide].type.replace('-', ' ').toUpperCase()}
              </span>
              {bannerContent[currentSlide].isNew && (
                <span className="px-3 py-1 bg-red-500 bg-opacity-80 rounded-full text-sm font-medium">
                  NEW
                </span>
              )}
            </div>
            <div className="flex space-x-2">
              {bannerContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {bannerContent[currentSlide].title}
          </h3>

          <p className="text-lg opacity-90 mb-6">
            {bannerContent[currentSlide].description}
          </p>

          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">{bannerContent[currentSlide].metrics.roi}</div>
              <div className="text-sm opacity-80">ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">{bannerContent[currentSlide].metrics.savings}</div>
              <div className="text-sm opacity-80">Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">{bannerContent[currentSlide].metrics.satisfaction}</div>
              <div className="text-sm opacity-80">Satisfaction</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={bannerContent[currentSlide].url}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Read Full Story →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center">
          <div className="w-64 bg-white bg-opacity-20 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-1000"
              style={{ width: `${((currentSlide + 1) / bannerContent.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Additional Content Preview */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {bannerContent.map((item, index) => (
            <div
              key={item.id}
              className={`p-4 rounded-lg transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white bg-opacity-20' 
                  : 'bg-white bg-opacity-10 hover:bg-opacity-15'
              }`}
            >
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-lg">{typeIcons[item.type]}</span>
                <span className="text-sm opacity-80">{item.type.replace('-', ' ').toUpperCase()}</span>
                {item.isNew && (
                  <span className="px-2 py-1 bg-red-500 bg-opacity-80 rounded-full text-xs">
                    NEW
                  </span>
                )}
              </div>
              <h4 className="font-semibold mb-2 line-clamp-2">{item.title}</h4>
              <div className="text-sm opacity-80">
                ROI: <span className="font-semibold">{item.metrics.roi}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025Banner;