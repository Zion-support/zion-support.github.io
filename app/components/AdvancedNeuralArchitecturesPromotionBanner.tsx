'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, X, Brain, Zap, Target, TrendingUp } from 'lucide-react';

const AdvancedNeuralArchitecturesPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      id: 'neural-architectures',
      title: 'AI 2025: Advanced Neural Architectures - Enterprise Breakthrough',
      description: 'Discover how next-generation neural architectures are revolutionizing enterprise AI with 400% performance improvements and 99.7% accuracy rates.',
      url: '/blog/ai-2025-advanced-neural-architectures-enterprise-breakthrough',
      type: 'blog',
      metrics: {
        performance: '400%',
        accuracy: '99.7%',
        roi: '340%'
      },
      badge: 'NEW',
      readingTime: '18 min read'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 Success: $3.2B Annual Savings with Neural Architectures',
      description: 'How a Fortune 500 technology company achieved 400% performance improvements and $3.2B annual savings using advanced neural architectures.',
      url: '/case-studies/ai-2025-advanced-neural-architectures-fortune-500-success-story',
      type: 'case-study',
      metrics: {
        savings: '$3.2B',
        performance: '400%',
        roi: '340%'
      },
      badge: 'SUCCESS STORY',
      readingTime: '15 min read'
    },
    {
      id: 'implementation-guide',
      title: 'Advanced Neural Architectures Implementation Guide',
      description: 'Complete roadmap for implementing advanced neural architectures delivering 400% performance improvements and 340% ROI in enterprise environments.',
      url: '/resources/ai-2025-advanced-neural-architectures-implementation-guide',
      type: 'resource',
      metrics: {
        performance: '400%',
        roi: '340%',
        accuracy: '99.7%'
      },
      badge: 'GUIDE',
      readingTime: '25 min read'
    },
    {
      id: 'edge-computing',
      title: 'AI 2025: Edge Computing Revolution - Ultimate Guide',
      description: 'Discover how edge computing is revolutionizing AI deployment with 99.9% uptime, 67% cost reduction, and real-time processing capabilities.',
      url: '/blog/ai-2025-edge-computing-revolution-ultimate-guide',
      type: 'blog',
      metrics: {
        uptime: '99.9%',
        costReduction: '67%',
        roi: '450%'
      },
      badge: 'REVOLUTION',
      readingTime: '20 min read'
    }
  ];

  useEffect(() => {
    const dismissed = localStorage.getItem('neural-architectures-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % content.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('neural-architectures-banner-dismissed', 'true');
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <Brain className="w-4 h-4" />;
      case 'case-study':
        return <Target className="w-4 h-4" />;
      case 'resource':
        return <Zap className="w-4 h-4" />;
      default:
        return <TrendingUp className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-4 right-16 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-2">
                {getTypeIcon(currentContent.type)}
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(currentContent.type)}`}>
                  {currentContent.type.toUpperCase()}
                </span>
                <span className="px-2 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold">
                  {currentContent.badge}
                </span>
              </div>
              <span className="text-sm opacity-90">{currentContent.readingTime}</span>
            </div>

            <h3 className="text-xl font-bold mb-2 leading-tight">
              {currentContent.title}
            </h3>
            
            <p className="text-sm opacity-90 mb-4 leading-relaxed">
              {currentContent.description}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-4 mb-4">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium">{value}</span>
                  <span className="text-xs opacity-75 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={currentContent.url}
                className="inline-flex items-center px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Now
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedNeuralArchitecturesPromotionBanner;