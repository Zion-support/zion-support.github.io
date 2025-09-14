'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'enterprise-data-revolution',
      title: 'AI 2025: The Enterprise Data Revolution - Ultimate Guide',
      type: 'Blog Post',
      description: 'Discover how Fortune 500 companies are achieving 600% ROI with AI-powered data strategies. Complete implementation guide with real-world success stories.',
      url: '/blog/ai-2025-enterprise-data-revolution-ultimate-guide',
      metrics: {
        roi: '600%',
        savings: '$25-100M',
        accuracy: '99.7%',
        satisfaction: '98%'
      },
      tags: ['Data Revolution', 'Enterprise AI', 'ROI Guide', 'Fortune 500'],
      readingTime: '18 min read',
      isNew: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings in 8 Months',
      type: 'Case Study',
      description: 'Real-world success story of a Fortune 500 manufacturing company that achieved $2.8B in annual savings within just 8 months of AI implementation.',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
      metrics: {
        roi: '1,302%',
        savings: '$2.8B',
        timeframe: '8 months',
        efficiency: '156%'
      },
      tags: ['Fortune 500', 'Case Study', 'Manufacturing', 'Success Story'],
      readingTime: '20 min read',
      isNew: true
    },
    {
      id: 'ai-implementation-ultimate-guide',
      title: 'AI Implementation Ultimate Guide 2025: From Strategy to 800% ROI',
      type: 'Resource',
      description: 'Complete framework for AI implementation success. Based on analysis of 500+ enterprise implementations and $50B in AI investments.',
      url: '/resources/ai-implementation-ultimate-guide-2025-complete',
      metrics: {
        roi: '800%',
        successRate: '94%',
        timeframe: '18 months',
        projects: '500+'
      },
      tags: ['Implementation Guide', 'Strategy', 'ROI', 'Best Practices'],
      readingTime: '35 min read',
      isNew: true
    }
  ];

  const categories = ['All', 'Blog Posts', 'Case Studies', 'Resources'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredContent = selectedCategory === 'All' 
    ? featuredContent 
    : featuredContent.filter(item => 
        selectedCategory === 'Blog Posts' ? item.type === 'Blog Post' :
        selectedCategory === 'Case Studies' ? item.type === 'Case Study' :
        selectedCategory === 'Resources' ? item.type === 'Resource' : true
      );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredContent.length]);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ultimate Content Showcase 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover our latest AI insights, success stories, and implementation guides. 
            Featuring real-world results from Fortune 500 companies achieving 600-800% ROI.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-purple-900 shadow-lg'
                  : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((content, index) => (
            <div
              key={content.id}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 group"
            >
              {/* Content Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                  {content.type}
                </span>
                {content.isNew && (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                {content.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {content.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(content.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {content.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Reading Time */}
              <div className="text-sm text-gray-400 mb-6">
                📖 {content.readingTime}
              </div>

              {/* CTA Button */}
              <Link
                href={content.url}
                className="block w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-6 rounded-lg text-center hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
              >
                Read Full {content.type}
              </Link>
            </div>
          ))}
        </div>

        {/* Success Metrics Summary */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Proven Success Metrics Across All Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">800%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300 mb-2">$2.8B</div>
              <div className="text-gray-300">Highest Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">94%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">500+</div>
              <div className="text-gray-300">Success Stories</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Achieve Similar Results?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our team of AI experts has helped over 500 enterprises achieve remarkable success. 
            Let us help you implement the strategies that are driving 600-800% ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-8 rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
            >
              Start Your AI Transformation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;