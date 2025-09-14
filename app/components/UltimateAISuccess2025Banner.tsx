'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { ChevronRightIcon, XMarkIcon, StarIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const UltimateAISuccess2025Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
=======
import { ChevronRightIcon, XMarkIcon, StarIcon, ChartBarIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';

const UltimateAISuccess2025Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
>>>>>>> cursor/create-and-deploy-new-content-6a2f
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('ultimate-ai-success-2025-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
=======
    const dismissed = localStorage.getItem('ultimate-ai-success-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
>>>>>>> cursor/create-and-deploy-new-content-6a2f
    }
  }, []);

  useEffect(() => {
<<<<<<< HEAD
    if (isVisible) {
=======
    if (!isDismissed) {
>>>>>>> cursor/create-and-deploy-new-content-6a2f
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
<<<<<<< HEAD
  }, [isVisible]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('ultimate-ai-success-2025-banner-dismissed', 'true');
  };

  const featuredContent = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      description: 'Master advanced AI automation with our comprehensive guide. Achieve 1,200% ROI, 99.8% efficiency, and transform your business operations.',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      type: 'Blog Post',
      metrics: {
        roi: '1,200%',
        efficiency: '99.8%',
        savings: '$2.8B',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      isNew: true
    },
    {
      id: 'ai-transformation-1200-roi',
      title: 'AI Transformation Success Story: $5B Company Achieves 1,200% ROI',
      description: 'Discover how a Fortune 500 company achieved extraordinary results with advanced AI automation, saving $2.8B annually.',
      url: '/case-studies/ai-transformation-1200-percent-roi-ultimate-success-story',
      type: 'Case Study',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '18 months',
        efficiency: '99.8%'
      },
      readingTime: '15 min read',
      isNew: true
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework',
      description: 'Complete guide to achieving 1,200% ROI with our proven implementation framework. Transform your business with advanced AI.',
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      type: 'Resource',
      metrics: {
        roi: '1,200%',
        success: '94%',
        timeline: '18 months',
        projects: '500+'
      },
      readingTime: '30 min read',
      isNew: true
    }
  ];

  if (!isVisible || isDismissed) return null;

=======
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('ultimate-ai-success-2025-banner-dismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  const featuredContent = [
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - Ultimate Success Guide',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '99.8%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      badge: 'Ultimate Guide',
      description: 'Master enterprise automation with AI in 2025. Achieve 1,200% ROI, $2.8B savings, and 99.8% efficiency with our comprehensive implementation guide.'
    },
    {
      id: 'fortune-100-transformation',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,500% ROI in 24 Months',
      type: 'case-study',
      url: '/case-studies/fortune-100-ai-transformation-ultimate-success-story',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        efficiency: '99.8%',
        timeline: '24 months'
      },
      readingTime: '18 min read',
      badge: 'Success Story',
      description: 'Discover how a Fortune 100 manufacturing giant transformed their operations with AI automation, achieving $2.8B in annual savings and 1,500% ROI in just 24 months.'
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework: Complete Roadmap to 1,000%+ ROI',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      metrics: {
        roi: '1,000%+',
        savings: '$500M+',
        success: '99%',
        timeline: '18 months'
      },
      readingTime: '30 min read',
      badge: 'Framework',
      description: 'Master AI implementation with our comprehensive framework. Achieve 1,000%+ ROI, $500M+ savings, and 99% success rate with our proven methodology.'
    }
  ];

>>>>>>> cursor/create-and-deploy-new-content-6a2f
  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
<<<<<<< HEAD
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-indigo-400/20 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold">NEW 2025 CONTENT</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-500/20 rounded-full px-4 py-2">
              <ChartBarIcon className="w-5 h-5 text-green-400" />
              <span className="text-sm font-semibold">1,200% ROI ACHIEVED</span>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Showcase */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Ultimate AI Success 2025
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Discover the advanced strategies and proven methodologies that are delivering extraordinary results for Fortune 500 companies worldwide.
              </p>
            </div>

            {/* Featured Content Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {currentContent.type}
                  </span>
                  {currentContent.isNew && (
                    <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                </div>
                <span className="text-sm text-blue-200">{currentContent.readingTime}</span>
              </div>

              <h3 className="text-xl font-bold mb-3 leading-tight">
                {currentContent.title}
              </h3>
              <p className="text-blue-100 mb-4 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{value}</div>
                    <div className="text-sm text-blue-200 capitalize">{key.replace('_', ' ')}</div>
                  </div>
                ))}
              </div>

              <Link
                href={currentContent.url}
                className="inline-flex items-center space-x-2 bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <span>Read Full {currentContent.type}</span>
                <ChevronRightIcon className="w-5 h-5" />
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">Proven Success Metrics</h3>
              <p className="text-blue-100 text-lg">
                Our advanced AI implementation framework delivers extraordinary results across all industries.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <CurrencyDollarIcon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-yellow-400 mb-2">1,200%</div>
                <div className="text-sm text-blue-200">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <ChartBarIcon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-400 mb-2">99.8%</div>
                <div className="text-sm text-blue-200">Efficiency</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <CurrencyDollarIcon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-400 mb-2">$2.8B</div>
                <div className="text-sm text-blue-200">Annual Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <StarIcon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-sm text-blue-200">Satisfaction</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <Link
                href="/resources/ai-2025-implementation-ultimate-success-framework"
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
              >
                Get the Complete Implementation Framework
              </Link>
              <Link
                href="/case-studies"
                className="block w-full border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-white hover:text-purple-900 transition-all"
              >
                View All Success Stories
              </Link>
=======
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-bounce delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          aria-label="Dismiss banner"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
            <StarIcon className="h-5 w-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">🚀 ULTIMATE AI SUCCESS 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Business with Revolutionary AI
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join Fortune 500 companies achieving <span className="font-bold text-yellow-400">1,500% ROI</span> and 
            <span className="font-bold text-green-400"> $2.8B in savings</span> with our proven AI implementation framework
          </p>
        </div>

        {/* Featured Content Carousel */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-white/70">
                {currentSlide + 1} of {featuredContent.length}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-white/70">
              <ClockIcon className="h-4 w-4" />
              <span>{currentContent.readingTime}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Info */}
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold mr-3">
                  {currentContent.badge}
                </span>
                <span className="text-sm text-white/70 uppercase tracking-wide">
                  {currentContent.type}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-white/90 mb-6 leading-relaxed">
                {currentContent.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <ChartBarIcon className="h-5 w-5 text-green-400" />
                  <span className="text-sm font-medium">
                    ROI: <span className="text-green-400 font-bold">{currentContent.metrics.roi}</span>
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CurrencyDollarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-medium">
                    Savings: <span className="text-yellow-400 font-bold">{currentContent.metrics.savings}</span>
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <StarIcon className="h-5 w-5 text-blue-400" />
                  <span className="text-sm font-medium">
                    Efficiency: <span className="text-blue-400 font-bold">{currentContent.metrics.efficiency}</span>
                  </span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-300 transition-all transform hover:scale-105 flex items-center"
                >
                  Read Now
                  <ChevronRightIcon className="h-5 w-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all"
                >
                  Get Consultation
                </Link>
              </div>
            </div>

            {/* Success Metrics Display */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {currentContent.metrics.roi}
                </div>
                <div className="text-sm text-white/70">Average ROI</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {currentContent.metrics.savings}
                </div>
                <div className="text-sm text-white/70">Annual Savings</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {currentContent.metrics.efficiency}
                </div>
                <div className="text-sm text-white/70">Efficiency</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {currentContent.metrics.satisfaction || currentContent.metrics.success || '99%'}
                </div>
                <div className="text-sm text-white/70">Success Rate</div>
              </div>
>>>>>>> cursor/create-and-deploy-new-content-6a2f
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Additional Content Links */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold mb-2">Explore More Ultimate AI Success Content</h4>
            <p className="text-blue-100">Discover the complete collection of advanced AI implementation guides and success stories.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredContent.map((content) => (
              <Link
                key={content.id}
                href={content.url}
                className="group bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-all border border-white/10 hover:border-white/30"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-blue-300 uppercase tracking-wide">
                    {content.type}
                  </span>
                  {content.isNew && (
                    <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                </div>
                <h5 className="font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
                  {content.title}
                </h5>
                <p className="text-sm text-blue-200 mb-3 line-clamp-2">
                  {content.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-300">{content.readingTime}</span>
                  <ChevronRightIcon className="w-4 h-4 text-blue-300 group-hover:text-white transition-colors" />
                </div>
              </Link>
            ))}
=======
        {/* Additional Resources */}
        <div className="text-center">
          <p className="text-white/70 mb-4">
            Explore our complete collection of AI success stories, implementation guides, and transformation frameworks
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg font-medium transition-all"
            >
              All Blog Posts
            </Link>
            <Link
              href="/case-studies"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg font-medium transition-all"
            >
              Success Stories
            </Link>
            <Link
              href="/resources"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg font-medium transition-all"
            >
              Implementation Guides
            </Link>
            <Link
              href="/tools"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg font-medium transition-all"
            >
              AI Tools
            </Link>
>>>>>>> cursor/create-and-deploy-new-content-6a2f
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAISuccess2025Banner;