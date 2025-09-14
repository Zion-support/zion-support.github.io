'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi?: string;
    savings?: string;
    accuracy?: string;
    satisfaction?: string;
  };
  featured: boolean;
  isNew: boolean;
}

const UltimateContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      type: 'blog',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        accuracy: '99.7%',
        satisfaction: '98%'
      },
      featured: true,
      isNew: true
    },
    {
      id: 'ai-transformation-1000-roi',
      title: 'AI Transformation Success Story: $2.8B Company Achieves 1,000% ROI in 18 Months',
      type: 'case-study',
      url: '/case-studies/ai-transformation-1000-percent-roi-ultimate-success-story',
      metrics: {
        roi: '1,000%',
        savings: '$280M',
        accuracy: '99.9%',
        satisfaction: '99.2%'
      },
      featured: true,
      isNew: true
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: Ultimate Success Framework',
      type: 'resource',
      url: '/resources/ai-2025-implementation-master-guide-ultimate-success-framework',
      metrics: {
        roi: '500%+',
        savings: '$2.8B',
        accuracy: '94%',
        satisfaction: '98%'
      },
      featured: true,
      isNew: true
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution-ultimate-breakthrough',
      metrics: {
        roi: '1,200%',
        savings: '$100B',
        accuracy: '99.97%',
        satisfaction: '99%'
      },
      featured: true,
      isNew: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentItems.length]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
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

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2026 CONTENT COLLECTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ultimate AI Content Showcase 2026
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover our latest collection of AI transformation content featuring 500%+ ROI success stories, 
            quantum computing breakthroughs, and proven implementation frameworks.
          </p>
        </div>

        {/* Content Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Content Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl">{getTypeIcon(item.type)}</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                            {item.type.replace('-', ' ').toUpperCase()}
                          </span>
                          {item.isNew && (
                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                              NEW
                            </span>
                          )}
                          {item.featured && (
                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                              FEATURED
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                          {item.title}
                        </h3>
                        
                        <p className="text-lg opacity-90 mb-6 leading-relaxed">
                          {item.type === 'blog' && 'Comprehensive guide to advanced AI automation with proven 500%+ ROI strategies and real-world implementation frameworks.'}
                          {item.type === 'case-study' && 'Real success story of a $2.8B company achieving 1,000% ROI through comprehensive AI transformation in just 18 months.'}
                          {item.type === 'resource' && 'Complete implementation framework with step-by-step roadmap to achieve 500%+ ROI with AI automation in your organization.'}
                        </p>

                        <div className="flex flex-wrap gap-4 mb-6">
                          {Object.entries(item.metrics).map(([key, value]) => (
                            <div key={key} className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                              <div className="text-sm opacity-80 capitalize">{key.replace('_', ' ')}</div>
                              <div className="text-lg font-bold">{value}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link
                            href={item.url}
                            className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                          >
                            Read Full {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}
                          </Link>
                          <Link
                            href="/contact"
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-center"
                          >
                            Get Consultation
                          </Link>
                        </div>
                      </div>

                      {/* Visual Element */}
                      <div className="lg:w-80 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-64 h-64 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center">
                            <div className="text-6xl">{getTypeIcon(item.type)}</div>
                          </div>
                          <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold text-yellow-900">✨</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {contentItems.map((_, index) => (
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

        {/* Success Metrics Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center border border-white border-opacity-20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">500%+</div>
            <div className="text-sm opacity-90">Average ROI</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center border border-white border-opacity-20">
            <div className="text-3xl font-bold text-green-400 mb-2">$2.8B</div>
            <div className="text-sm opacity-90">Total Value Created</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center border border-white border-opacity-20">
            <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-sm opacity-90">Client Satisfaction</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center border border-white border-opacity-20">
            <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-sm opacity-90">Success Stories</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join 500+ companies that have achieved 500%+ ROI with our proven AI automation frameworks. 
              Get your personalized assessment and implementation roadmap today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Your ROI Assessment
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
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

export default UltimateContentShowcase2026;