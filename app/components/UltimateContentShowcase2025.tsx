'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'advanced-automation-revolution',
      title: 'AI 2025: The Advanced Automation Revolution - Ultimate Guide to 600% ROI',
      type: 'blog',
      url: '/blog/ai-2025-advanced-automation-revolution-ultimate-guide',
      description: 'Comprehensive guide revealing strategies that Fortune 500 companies use to achieve 600% ROI within 12 months through intelligent automation.',
      metrics: {
        roi: '600%',
        savings: '$4.2M',
        efficiency: '89%',
        success: '94%'
      },
      tags: ['AI Automation', 'ROI', 'Enterprise', 'Strategy'],
      readingTime: '22 min read',
      isNew: true
    },
    {
      id: 'financial-services-transformation',
      title: 'AI 2025 Financial Services Transformation: $850M Company Achieves 520% ROI',
      type: 'case-study',
      url: '/case-studies/ai-2025-financial-services-transformation-ultimate-success',
      description: 'How a leading financial services company achieved 520% ROI and $67M in annual savings through comprehensive AI transformation.',
      metrics: {
        roi: '520%',
        savings: '$67M',
        satisfaction: '99.8%',
        efficiency: '89%'
      },
      tags: ['Financial Services', 'Case Study', 'ROI', 'Transformation'],
      readingTime: '20 min read',
      isNew: true
    },
    {
      id: 'implementation-ultimate-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap: From Strategy to 600% ROI in 12 Months',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-roadmap',
      description: 'Step-by-step roadmap for implementing AI solutions that deliver 600% ROI within 12 months, based on 500+ successful implementations.',
      metrics: {
        roi: '600%',
        success: '89%',
        timeframe: '12 months',
        savings: '$4.2M'
      },
      tags: ['Implementation', 'Roadmap', 'ROI', 'Strategy'],
      readingTime: '35 min read',
      isNew: true
    }
  ];

  const successMetrics = [
    { label: 'Average ROI', value: '600%', icon: '📈' },
    { label: 'Annual Savings', value: '$4.2M', icon: '💰' },
    { label: 'Success Rate', value: '94%', icon: '✅' },
    { label: 'Implementation Time', value: '12 months', icon: '⏱️' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ultimate AI Content Showcase 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover the latest AI strategies, case studies, and implementation guides that are delivering 
            <span className="text-yellow-300 font-bold"> 600% ROI</span> for Fortune 500 companies.
          </p>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {successMetrics.map((metric, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">{metric.icon}</div>
              <div className="text-2xl font-bold text-yellow-300 mb-1">{metric.value}</div>
              <div className="text-sm opacity-80">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Content Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredContent.map((content, index) => (
                <div key={content.id} className="w-full flex-shrink-0">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Content Info */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                            NEW
                          </span>
                          <span className="bg-blue-500 px-3 py-1 rounded-full text-sm font-medium">
                            {content.type.toUpperCase()}
                          </span>
                          <span className="text-sm opacity-80">{content.readingTime}</span>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                          {content.title}
                        </h3>
                        
                        <p className="text-lg opacity-90 mb-6 leading-relaxed">
                          {content.description}
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {Object.entries(content.metrics).map(([key, value]) => (
                            <div key={key} className="bg-white bg-opacity-10 rounded-lg p-3">
                              <div className="text-yellow-300 font-bold text-lg">{value}</div>
                              <div className="text-sm opacity-80 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                            </div>
                          ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {content.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={content.url}
                          className="inline-flex items-center bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                        >
                          Read Full Article →
                        </Link>
                      </div>

                      {/* Visual Element */}
                      <div className="relative">
                        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 text-center">
                          <div className="text-6xl mb-4">🤖</div>
                          <div className="text-3xl font-bold text-black mb-2">600% ROI</div>
                          <div className="text-black opacity-80">Average Success Rate</div>
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 bg-green-400 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                          SUCCESS STORY
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-blue-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                          FORTUNE 500
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
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white bg-opacity-30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve 600% ROI with AI?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join 500+ companies that have transformed their operations with our proven AI strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-colors"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;