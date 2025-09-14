'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const newContent = [
    {
      id: 'enterprise-ai-transformation',
      title: 'AI 2025: Enterprise AI Transformation Ultimate Success Guide - 600% ROI in 8 Months',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-ai-transformation-ultimate-success-guide',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 600% ROI through strategic AI transformation. Complete implementation guide with real case studies.',
      metrics: {
        roi: '600%',
        timeline: '8 months',
        companies: 'Fortune 500',
        savings: '$2.8B'
      },
      tags: ['AI Transformation', 'Enterprise', 'ROI', 'Fortune 500'],
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation Success: $2.8B Company Achieves 600% ROI in 8 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-600-roi-success-story',
      description: 'Complete case study of a Fortune 500 manufacturing company that achieved 600% ROI through comprehensive AI transformation.',
      metrics: {
        roi: '600%',
        company: '$2.8B',
        timeline: '8 months',
        savings: '$340M'
      },
      tags: ['Case Study', 'Fortune 500', 'Manufacturing', 'ROI'],
      featured: true
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Transformation Ultimate Implementation Roadmap 2025: From Strategy to 600% ROI',
      type: 'resource',
      url: '/resources/ai-transformation-ultimate-implementation-roadmap-2025',
      description: 'The complete step-by-step roadmap for achieving 600% ROI through AI transformation. Proven methodologies and frameworks.',
      metrics: {
        roi: '600%',
        success_rate: '94%',
        timeline: '8 months',
        companies: 'Fortune 500'
      },
      tags: ['Implementation Roadmap', 'AI Strategy', 'ROI', 'Best Practices'],
      featured: true
    },
    {
      id: 'autonomous-business-systems',
      title: 'AI 2025: The Autonomous Business Systems Revolution - 700% ROI Through Self-Managing Operations',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-business-systems-revolution',
      description: 'Discover how autonomous AI systems are revolutionizing business operations, delivering 700% ROI through self-managing processes.',
      metrics: {
        roi: '700%',
        automation: '95%',
        efficiency: '89%',
        savings: '$4.2B'
      },
      tags: ['Autonomous AI', 'Business Systems', 'ROI', 'Self-Managing'],
      featured: true
    },
    {
      id: 'financial-services-transformation',
      title: 'AI 2025 Financial Services Transformation: $850M Company Achieves 520% ROI with Intelligent Banking',
      type: 'case-study',
      url: '/case-studies/ai-2025-financial-services-transformation-ultimate-success',
      description: 'How a major financial services company achieved 520% ROI through comprehensive AI transformation and intelligent banking.',
      metrics: {
        roi: '520%',
        company: '$850M',
        satisfaction: '99.8%',
        savings: '$67M'
      },
      tags: ['Case Study', 'Financial Services', 'Banking', 'ROI'],
      featured: true
    }
  ];

  const successMetrics = [
    { label: 'Average ROI', value: '600%', icon: '📈' },
    { label: 'Success Rate', value: '94%', icon: '✅' },
    { label: 'Time to Value', value: '8 months', icon: '⏱️' },
    { label: 'Total Savings', value: '$4.2B', icon: '💰' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [newContent.length]);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ultimate AI Transformation Content Showcase 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover the latest AI transformation strategies, case studies, and implementation guides 
            that are helping Fortune 500 companies achieve unprecedented 600%+ ROI.
          </p>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {successMetrics.map((metric, index) => (
            <div key={index} className="bg-white bg-opacity-10 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">{metric.icon}</div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">{metric.value}</div>
              <div className="text-sm opacity-90">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Content Showcase */}
        <div className="relative">
          {/* Main Content Card */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Content Details */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {newContent[currentSlide].type.toUpperCase()}
                  </span>
                  <span className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    NEW
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  {newContent[currentSlide].title}
                </h3>
                
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  {newContent[currentSlide].description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(newContent[currentSlide].metrics).map(([key, value]) => (
                    <div key={key} className="bg-white bg-opacity-10 rounded-lg p-3">
                      <div className="text-sm opacity-75 capitalize">{key.replace('_', ' ')}</div>
                      <div className="text-lg font-bold text-yellow-400">{value}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {newContent[currentSlide].tags.map((tag, index) => (
                    <span key={index} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={newContent[currentSlide].url}
                    className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-center"
                  >
                    Read Full Article →
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-center"
                  >
                    Get Consultation
                  </Link>
                </div>
              </div>

              {/* Content Preview Cards */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-4">More Featured Content:</h4>
                {newContent.slice(0, 3).map((content, index) => (
                  <div
                    key={content.id}
                    className={`bg-white bg-opacity-10 rounded-lg p-4 cursor-pointer transition-all ${
                      index === currentSlide ? 'ring-2 ring-yellow-400' : 'hover:bg-white hover:bg-opacity-20'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs">
                        {content.type.toUpperCase()}
                      </span>
                      <span className="text-yellow-400 font-semibold text-sm">
                        {content.metrics.roi} ROI
                      </span>
                    </div>
                    <h5 className="font-semibold text-sm leading-tight mb-2">
                      {content.title}
                    </h5>
                    <p className="text-xs opacity-75 line-clamp-2">
                      {content.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {newContent.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white bg-opacity-30'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg mb-6 opacity-90">
            Ready to achieve similar results? Get your custom AI transformation roadmap today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-transformation-ultimate-implementation-roadmap-2025"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-300 transition-all"
            >
              Download Implementation Roadmap
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;