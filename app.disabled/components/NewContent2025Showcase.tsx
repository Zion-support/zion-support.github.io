'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'blog' | 'case-study' | 'resource';
  metrics: {
    roi?: string;
    savings?: string;
    improvement?: string;
    satisfaction?: string;
  };
  isNew: boolean;
  featured: boolean;
}

const NewContent2025Showcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const newContent: ContentItem[] = [
    {
      id: 'cybersecurity-revolution',
      title: 'AI 2025: The Cybersecurity Revolution',
      description: 'Discover how AI-powered cybersecurity solutions are reducing threats by 95% and saving companies $2.3M on average.',
      url: '/blog/ai-2025-cybersecurity-revolution',
      type: 'blog',
      metrics: {
        improvement: '95% threat reduction',
        savings: '$2.3M average savings',
        satisfaction: '89% false positive reduction'
      },
      isNew: true,
      featured: true
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation: 450% ROI Success',
      description: 'How a regional hospital system achieved 450% ROI, $12.8M savings, and 60% reduction in patient wait times.',
      url: '/case-studies/healthcare-ai-transformation-2025',
      type: 'case-study',
      metrics: {
        roi: '450% ROI',
        savings: '$12.8M annually',
        improvement: '60% wait time reduction'
      },
      isNew: true,
      featured: true
    },
    {
      id: 'implementation-checklist',
      title: 'AI Implementation Checklist 2025',
      description: 'Complete step-by-step guide for successful AI deployment with 95% success rate and 340% average ROI.',
      url: '/resources/ai-implementation-checklist-2025',
      type: 'resource',
      metrics: {
        improvement: '95% success rate',
        roi: '340% average ROI',
        satisfaction: '89% user adoption'
      },
      isNew: true,
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [newContent.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025Showcase_dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025Showcase_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = newContent[currentIndex];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📋';
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

  return (
    <div className="relative bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-b border-indigo-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-semibold">✨ NEW CONTENT 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest AI Insights & Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our newest content featuring real-world AI transformations, 
            implementation guides, and success stories with proven ROI.
          </p>
        </div>

        {/* Main Content Showcase */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            {/* Content Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{getTypeIcon(currentContent.type)}</span>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(currentContent.type)}`}>
                      {currentContent.type === 'case-study' ? 'Case Study' : 
                       currentContent.type === 'resource' ? 'Resource Guide' : 'Blog Post'}
                    </span>
                    {currentContent.isNew && (
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {currentContent.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={handleDismiss}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Dismiss showcase"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content Description */}
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {Object.entries(currentContent.metrics).map(([key, value], index) => (
                <div key={key} className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">{value}</div>
                  <div className="text-sm text-gray-600 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Read Full Article
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/content"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200"
              >
                View All Content
              </Link>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="bg-gray-50 px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {newContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex 
                        ? 'bg-indigo-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to content ${index + 1}`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500">
                {currentIndex + 1} of {newContent.length}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content Preview */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {newContent.map((content, index) => (
            <div
              key={content.id}
              className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-200 hover:shadow-xl ${
                index === currentIndex ? 'ring-2 ring-indigo-500' : 'hover:ring-1 hover:ring-indigo-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">{getTypeIcon(content.type)}</span>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(content.type)}`}>
                    {content.type === 'case-study' ? 'Case Study' : 
                     content.type === 'resource' ? 'Resource' : 'Blog'}
                  </span>
                  {content.isNew && (
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                      NEW
                    </span>
                  )}
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                {content.title}
              </h4>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {content.description}
              </p>
              <div className="text-xs text-indigo-600 font-medium">
                Read More →
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Stay updated with the latest AI insights and success stories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/newsletter"
              className="inline-flex items-center px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200"
            >
              Subscribe to Newsletter
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
            >
              Get AI Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025Showcase;