'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RevolutionaryContentBanner2025 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'enterprise-data-revolution',
      title: 'AI 2025: The Enterprise Data Revolution',
      subtitle: '600% ROI Ultimate Guide',
      description: 'Fortune 500 companies achieving unprecedented success with AI-powered data strategies',
      url: '/blog/ai-2025-enterprise-data-revolution-ultimate-guide',
      metrics: {
        roi: '600%',
        savings: '$25-100M',
        accuracy: '99.7%'
      },
      type: 'Blog Post',
      isNew: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation Success',
      subtitle: '$2.8B Annual Savings in 8 Months',
      description: 'Real-world case study of a manufacturing giant achieving remarkable results',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
      metrics: {
        roi: '1,302%',
        savings: '$2.8B',
        timeframe: '8 months'
      },
      type: 'Case Study',
      isNew: true
    },
    {
      id: 'ai-implementation-guide',
      title: 'AI Implementation Ultimate Guide 2025',
      subtitle: 'From Strategy to 800% ROI',
      description: 'Complete framework based on 500+ enterprise implementations',
      url: '/resources/ai-implementation-ultimate-guide-2025-complete',
      metrics: {
        roi: '800%',
        successRate: '94%',
        projects: '500+'
      },
      type: 'Resource',
      isNew: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredContent.length);
    }, 4000);
=======
const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentSlides = [
    {
      title: "AI 2025: Enterprise Automation Mastery",
      subtitle: "The Ultimate Guide to 500% ROI",
      description: "Transform your business with cutting-edge AI automation that delivers unprecedented results. Learn how Fortune 500 companies achieve 500% ROI through strategic implementation.",
      metrics: {
        roi: "500%",
        savings: "$2.8B",
        efficiency: "340%",
        satisfaction: "98%"
      },
      url: "/blog/ai-2025-enterprise-automation-mastery-ultimate-guide",
      type: "blog",
      readingTime: "25 min read"
    },
    {
      title: "AI Automation Success Story",
      subtitle: "Fortune 500 Company Achieves 567% ROI",
      description: "Real-world case study of AI automation transformation delivering extraordinary results. Discover the strategies that led to $2.8 billion in annual savings.",
      metrics: {
        roi: "567%",
        savings: "$2.8B",
        accuracy: "99.7%",
        satisfaction: "99.2%"
      },
      url: "/case-studies/ai-automation-fortune-500-success-story-2025",
      type: "case-study",
      readingTime: "18 min read"
    },
    {
      title: "AI Implementation Roadmap 2025",
      subtitle: "Complete Guide to 500% ROI",
      description: "Step-by-step roadmap for implementing AI automation that delivers extraordinary business results. Based on analysis of 500+ successful implementations.",
      metrics: {
        roi: "500%",
        savings: "$2.8B",
        efficiency: "340%",
        satisfaction: "98%"
      },
      url: "/resources/ai-automation-implementation-roadmap-2025",
      type: "resource",
      readingTime: "35 min read"
    },
    {
      title: "Quantum Computing Business Revolution",
      subtitle: "$100B Market Transformation",
      description: "How quantum computing is revolutionizing business operations and delivering unprecedented competitive advantage with 1,200% faster processing.",
      metrics: {
        roi: "400-600%",
        savings: "$2.8B",
        accuracy: "99.97%",
        efficiency: "1,200%"
      },
      url: "/blog/ai-2025-quantum-computing-business-revolution",
      type: "blog",
      readingTime: "15 min read"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 6000);
>>>>>>> origin/cursor/create-and-deploy-new-content-b2b4

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-bounce delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="flex-1 pr-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium">🚀 REVOLUTIONARY 2025 CONTENT</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {currentContent.title}
            </h2>

            {/* Subtitle */}
            <h3 className="text-xl md:text-2xl text-yellow-300 mb-4">
              {currentContent.subtitle}
            </h3>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-3xl">
              {currentContent.description}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-6 mb-6">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">{value}</div>
                  <div className="text-sm text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors transform hover:scale-105"
              >
                Read Full {currentContent.type}
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get AI Consultation
              </Link>
            </div>
=======
  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-banner-2025-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-banner-2025-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY 2025 CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Business with AI
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the latest AI strategies and success stories that are revolutionizing business operations worldwide
          </p>
        </div>

        {/* Main Content Display */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{getTypeIcon(contentSlides[currentSlide].type)}</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(contentSlides[currentSlide].type)}`}>
                {contentSlides[currentSlide].type.toUpperCase()}
              </span>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                NEW
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                FEATURED
              </span>
            </div>
            <div className="text-sm opacity-75">
              {contentSlides[currentSlide].readingTime}
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {contentSlides[currentSlide].title}
          </h3>
          
          <h4 className="text-xl md:text-2xl font-semibold mb-4 opacity-90">
            {contentSlides[currentSlide].subtitle}
          </h4>

          <p className="text-lg mb-6 opacity-90 leading-relaxed">
            {contentSlides[currentSlide].description}
          </p>

          {/* Metrics Display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {Object.entries(contentSlides[currentSlide].metrics).map(([key, value]) => (
              <div key={key} className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold mb-1">{value}</div>
                <div className="text-sm opacity-75 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={contentSlides[currentSlide].url}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Read Full Article →
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
        <div className="flex justify-center space-x-2 mb-6">
          {contentSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>

        {/* Success Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">500%</div>
            <div className="text-sm opacity-75">Average ROI</div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">$2.8B</div>
            <div className="text-sm opacity-75">Annual Savings</div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">340%</div>
            <div className="text-sm opacity-75">Efficiency Gain</div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <div className="text-2xl font-bold mb-1">98%</div>
            <div className="text-sm opacity-75">Satisfaction Rate</div>
>>>>>>> origin/cursor/create-and-deploy-new-content-b2b4
          </div>

          {/* Content Preview Card */}
          <div className="hidden lg:block w-80 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">📊</div>
              <h4 className="text-lg font-bold">Success Metrics</h4>
            </div>
            
            <div className="space-y-3">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-sm text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <span className="text-lg font-bold text-yellow-300">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white border-opacity-20">
              <div className="text-sm text-gray-300 text-center">
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs mr-2">NEW</span>
                {currentContent.type}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-yellow-400 scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to content ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-rotation Indicator */}
        <div className="text-center mt-4">
          <div className="text-sm text-gray-300">
            Auto-rotating every 4 seconds • {currentIndex + 1} of {featuredContent.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;