<<<<<<< HEAD
=======
'use client';

import React, { useState, useEffect } from 'react';
>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import React from 'react';
>>>>>>> 7b9c23595a15b394ecefdbe48e0b75bd32d1a505
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide to 1,000% ROI',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 1,000% ROI through revolutionary AI implementations.',
      metrics: {
        roi: '1,000%',
        savings: '$15.7T',
        accuracy: '99.7%',
        satisfaction: '98%'
      },
      tags: ['AI Revolution', 'Enterprise AI', 'ROI', 'Fortune 500'],
      readingTime: '22 min read',
      isNew: true
    },
    {
      id: 'customer-experience-revolution',
      title: 'AI 2025: The Customer Experience Revolution - Ultimate Guide to 750% ROI',
      type: 'blog',
      url: '/blog/ai-2025-customer-experience-revolution-ultimate-guide',
      description: 'Transform your customer experience with AI-powered solutions that deliver 750% ROI and 340% higher satisfaction.',
      metrics: {
        roi: '750%',
        savings: '$2.8T',
        accuracy: '99.8%',
        satisfaction: '98%'
      },
      tags: ['Customer Experience', 'AI', 'ROI', 'Personalization'],
      readingTime: '20 min read',
      isNew: true
    },
    {
      id: 'manufacturing-transformation',
      title: 'AI 2025 Manufacturing Transformation: $4.2B Company Achieves 1,100% ROI',
      type: 'case-study',
      url: '/case-studies/ai-2025-manufacturing-transformation-ultimate-success-story',
      description: 'Discover how a global manufacturing leader achieved 1,100% ROI through comprehensive AI transformation.',
      metrics: {
        roi: '1,100%',
        savings: '$890M',
        accuracy: '99.8%',
        satisfaction: '99.8%'
      },
      tags: ['Manufacturing', 'AI Transformation', 'ROI', 'Case Study'],
      readingTime: '18 min read',
      isNew: true
    },
    {
      id: 'supply-chain-revolution',
      title: 'AI 2025: The Supply Chain Revolution - Ultimate Guide to 900% ROI',
      type: 'blog',
      url: '/blog/ai-2025-supply-chain-revolution-ultimate-guide',
      description: 'Transform your supply chain with AI-powered solutions that deliver 900% ROI and 340% improvement in efficiency.',
      metrics: {
        roi: '900%',
        savings: '$8.9T',
        accuracy: '94%',
        satisfaction: '156%'
      },
      tags: ['Supply Chain', 'AI', 'ROI', 'Logistics'],
      readingTime: '19 min read',
      isNew: true
    },
    {
      id: 'financial-services-transformation',
      title: 'AI 2025 Financial Services Transformation: $2.1B Bank Achieves 1,300% ROI',
      type: 'case-study',
      url: '/case-studies/ai-2025-financial-services-transformation-ultimate-success',
      description: 'Discover how a major financial institution achieved 1,300% ROI through comprehensive AI transformation.',
      metrics: {
        roi: '1,300%',
        savings: '$450M',
        accuracy: '99.9%',
        satisfaction: '99.8%'
      },
      tags: ['Financial Services', 'AI Transformation', 'ROI', 'Banking'],
      readingTime: '21 min read',
      isNew: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = featuredContent[currentIndex];

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
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ultimate AI Content Showcase 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover our latest AI transformation guides, case studies, and success stories featuring 
            <span className="font-bold text-yellow-300"> 1,000%+ ROI</span> results from Fortune 500 companies.
          </p>
        </div>

        {/* Featured Content Card */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white border-opacity-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {currentContent.type.toUpperCase()}
                </span>
                {currentContent.isNew && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    NEW
                  </span>
                )}
                <span className="text-sm opacity-75">
                  {currentContent.readingTime}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {currentContent.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors text-center"
                >
                  Read Full Article
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-colors text-center"
                >
                  View All Resources
                </Link>
              </div>
            </div>

            {/* Metrics Display */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">
                  {currentContent.metrics.roi}
                </div>
                <div className="text-sm opacity-75">ROI</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">
                  {currentContent.metrics.savings}
                </div>
                <div className="text-sm opacity-75">Savings</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">
                  {currentContent.metrics.accuracy}
                </div>
                <div className="text-sm opacity-75">Accuracy</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-300 mb-2">
                  {currentContent.metrics.satisfaction}
                </div>
                <div className="text-sm opacity-75">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Navigation */}
        <div className="flex justify-center items-center gap-4 mb-8">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-yellow-400 w-8'
                  : 'bg-white bg-opacity-30 hover:bg-opacity-50'
              }`}
            />
          ))}
        </div>

        {/* All Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredContent.map((content, index) => (
            <div
              key={content.id}
              className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all cursor-pointer ${
                index === currentIndex ? 'ring-2 ring-yellow-400' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
                  {content.type.toUpperCase()}
                </span>
                {content.isNew && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    NEW
                  </span>
                )}
              </div>
              
              <h4 className="text-lg font-bold mb-2 line-clamp-2">
                {content.title}
              </h4>
              
              <p className="text-sm opacity-75 mb-4 line-clamp-2">
                {content.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-yellow-300">
                  {content.metrics.roi}
                </div>
                <div className="text-sm opacity-75">
                  {content.readingTime}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all transform hover:scale-105"
          >
            Get Your Custom AI Strategy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;
<<<<<<< HEAD
=======
export default UltimateContentShowcase2025;
>>>>>>> cursor/create-and-deploy-new-content-040d
>>>>>>> 7b9c23595a15b394ecefdbe48e0b75bd32d1a505
>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e
