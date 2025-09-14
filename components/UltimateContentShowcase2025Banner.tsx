'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025Banner = () => {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(true);

  const categories = [
    { id: 'all', label: 'All Content', count: 18 },
    { id: 'blog', label: 'Guides', count: 8 },
    { id: 'case-study', label: 'Success Stories', count: 6 },
    { id: 'resource', label: 'Frameworks', count: 4 }
  ];

  const featuredContent = [
    {
      id: 'ultimate-business-automation',
      title: 'AI 2025: The Ultimate Business Automation Revolution - Complete Guide',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-business-automation-revolution-complete-guide',
      description: 'Discover how AI automation is transforming businesses with 1,500% ROI and $5.2B in savings.',
      metrics: { roi: '1,500%', savings: '$5.2B', efficiency: '95%' },
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $5.2B Annual Savings with 1,500% ROI',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-1500-percent-roi-ultimate-success',
      description: 'Ultimate success story: How a Fortune 500 company achieved unprecedented ROI through AI automation.',
      metrics: { roi: '1,500%', savings: '$5.2B', efficiency: '156%' },
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework: Complete Guide to 1,500% ROI',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-success-framework-complete',
      description: 'The definitive guide to implementing AI automation with proven strategies that deliver 1,500% ROI.',
      metrics: { roi: '1,500%', success: '98%', timeline: '18 months' },
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'enterprise-automation-revolution',
      title: 'AI 2025: The Enterprise Automation Revolution - 500% ROI',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      description: 'How enterprise automation is reshaping business operations with 500% ROI and $200M savings.',
      metrics: { roi: '500%', savings: '$200M', satisfaction: '99.8%' },
      readingTime: '35 min read',
      featured: false
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - $100B Market Transformation',
      type: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      description: 'Quantum computing is revolutionizing business with 1,200% ROI and $100B market transformation.',
      metrics: { roi: '1,200%', market: '$100B', accuracy: '99.97%' },
      readingTime: '20 min read',
      featured: false
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation 2025: 450% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/ai-healthcare-transformation-2025-success-story',
      description: 'How a $2.1B health system achieved 450% ROI through comprehensive AI transformation.',
      metrics: { roi: '450%', savings: '$12M annually', satisfaction: '94%' },
      readingTime: '15 min read',
      featured: false
    }
  ];

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-content-2025-banner-dismissed', 'true');
  };

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const filteredContent = currentCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(item => item.type === currentCategory);

  const featuredItems = filteredContent.filter(item => item.featured);
  const regularItems = filteredContent.filter(item => !item.featured);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 bg-opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-48 h-48 bg-purple-500 bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-indigo-500 bg-opacity-10 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-40 right-1/4 w-56 h-56 bg-cyan-500 bg-opacity-10 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-white text-sm font-bold">🎯 ULTIMATE AI 2025 CONTENT COLLECTION</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with AI
            </h1>
            
            <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-4xl mx-auto">
              Discover the complete collection of AI transformation guides, success stories, and implementation frameworks that have delivered over <span className="font-bold text-yellow-300">$5.2B in cost savings</span> and <span className="font-bold text-yellow-300">1,500% ROI</span> for Fortune 500 companies.
            </p>

            {/* Overall Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-white mb-1">1,500%</div>
                <div className="text-white text-sm opacity-90">Average ROI</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-white mb-1">$5.2B</div>
                <div className="text-white text-sm opacity-90">Total Savings</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-white text-sm opacity-90">Success Rate</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-white text-sm opacity-90">Success Stories</div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setCurrentCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  currentCategory === category.id
                    ? 'bg-white text-gray-900 shadow-lg transform scale-105'
                    : 'bg-white bg-opacity-10 text-white hover:bg-opacity-20'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          {/* Featured Content */}
          {featuredItems.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">🌟 Featured Content</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-20"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </span>
                      <span className="text-white text-sm opacity-75">
                        {item.type === 'blog' ? '📖 Guide' : item.type === 'case-study' ? '📊 Case Study' : '🛠️ Framework'}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-white opacity-80 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="text-center">
                        <div className="text-sm font-bold text-yellow-300">{item.metrics.roi}</div>
                        <div className="text-xs text-white opacity-75">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-green-300">
                          {item.metrics.savings || item.metrics.success}
                        </div>
                        <div className="text-xs text-white opacity-75">
                          {item.metrics.savings ? 'Savings' : 'Success'}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-blue-300">
                          {item.metrics.efficiency || item.metrics.timeline}
                        </div>
                        <div className="text-xs text-white opacity-75">
                          {item.metrics.efficiency ? 'Efficiency' : 'Timeline'}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-white text-xs opacity-75">{item.readingTime}</span>
                      <Link
                        href={item.url}
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
                      >
                        Read Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Regular Content */}
          {regularItems.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">📚 Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-10 transition-all duration-300 border border-white border-opacity-10"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white text-sm opacity-75">
                        {item.type === 'blog' ? '📖 Guide' : item.type === 'case-study' ? '📊 Case Study' : '🛠️ Framework'}
                      </span>
                      <span className="text-white text-xs opacity-75">{item.readingTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-white opacity-80 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Quick Metrics */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-yellow-300">{item.metrics.roi}</div>
                        <div className="text-xs text-white opacity-75">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-300">
                          {item.metrics.savings || item.metrics.success}
                        </div>
                        <div className="text-xs text-white opacity-75">
                          {item.metrics.savings ? 'Savings' : 'Success'}
                        </div>
                      </div>
                      <Link
                        href={item.url}
                        className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-30 transition-colors"
                      >
                        Read
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h3>
              <p className="text-white opacity-90 mb-6">
                Join 500+ companies that have achieved 1,500% ROI through our proven AI implementation framework.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Free AI Assessment
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  Explore All Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors z-20"
        aria-label="Dismiss banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default UltimateContentShowcase2025Banner;