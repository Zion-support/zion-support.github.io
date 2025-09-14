'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateAITransformationBanner2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'enterprise-transformation',
      title: 'AI 2025: The Enterprise AI Transformation Ultimate Guide',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 600% ROI through comprehensive AI transformation strategies.',
      metrics: {
        roi: '600%',
        timeline: '8 months',
        savings: '$2.8B',
        success: '94%'
      },
      url: '/blog/ai-2025-enterprise-ai-transformation-ultimate-guide',
      type: 'Blog Post',
      readingTime: '18 min read'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation Success: $2.8B Annual Savings',
      description: 'Complete case study of a Fortune 500 manufacturing company that achieved 600% ROI and $2.8B in annual savings.',
      metrics: {
        roi: '600%',
        savings: '$2.8B',
        efficiency: '156%',
        uptime: '99.2%'
      },
      url: '/case-studies/fortune-500-ai-transformation-600-roi-success',
      type: 'Case Study',
      readingTime: '12 min read'
    },
    {
      id: 'implementation-guide',
      title: 'AI Transformation Ultimate Implementation Guide 2025',
      description: 'The complete step-by-step guide to AI transformation success. Proven framework for achieving 600% ROI within 8 months.',
      metrics: {
        roi: '600%',
        success: '94%',
        timeline: '8 months',
        projects: '500+'
      },
      url: '/resources/ai-transformation-ultimate-implementation-guide-2025',
      type: 'Implementation Guide',
      readingTime: '25 min read'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-ai-transformation-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-ai-transformation-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-25 animate-ping"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-purple-400 rounded-full opacity-20 animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">🚀 NEW: ULTIMATE AI TRANSFORMATION CONTENT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Achieve 600% ROI in 8 Months
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover the proven frameworks and strategies that Fortune 500 companies use to achieve unprecedented AI transformation success.
            </p>
          </div>

          {/* Content Showcase */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentContent.type}
                  </span>
                  <span className="text-sm opacity-75">{currentContent.readingTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold leading-tight">
                  {currentContent.title}
                </h3>
                
                <p className="text-lg opacity-90 leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Success Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-300">{currentContent.metrics.roi}</div>
                    <div className="text-sm opacity-75">ROI</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-300">{currentContent.metrics.savings}</div>
                    <div className="text-sm opacity-75">Savings</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-300">{currentContent.metrics.efficiency || currentContent.metrics.success}</div>
                    <div className="text-sm opacity-75">{currentContent.metrics.efficiency ? 'Efficiency' : 'Success Rate'}</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-300">{currentContent.metrics.uptime || currentContent.metrics.timeline}</div>
                    <div className="text-sm opacity-75">{currentContent.metrics.uptime ? 'Uptime' : 'Timeline'}</div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentContent.url}
                    className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Read Full {currentContent.type}
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-center"
                  >
                    Get Consultation
                  </Link>
                </div>
              </div>

              {/* Content Preview */}
              <div className="space-y-4">
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h4 className="font-semibold mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      Proven 8-month transformation framework
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      Step-by-step implementation guide
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      Real-world Fortune 500 case studies
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      ROI measurement and validation methods
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      Common pitfalls and solutions
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      Future-proofing strategies
                    </li>
                  </ul>
                </div>

                {/* Additional Resources */}
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Additional Resources:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Implementation Templates</span>
                      <span className="text-green-300">✓ Included</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ROI Calculator</span>
                      <span className="text-green-300">✓ Included</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Checklists & Guides</span>
                      <span className="text-green-300">✓ Included</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expert Consultation</span>
                      <span className="text-blue-300">Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-30'
                }`}
              />
            ))}
          </div>

          {/* Dismiss Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleDismiss}
              className="text-white text-opacity-75 hover:text-opacity-100 transition-opacity text-sm"
            >
              Dismiss this banner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAITransformationBanner2025;