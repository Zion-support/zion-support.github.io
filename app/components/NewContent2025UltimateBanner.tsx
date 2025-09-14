'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, TrendingUp, Clock, Users, Award } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  roi: string;
  savings: string;
  readingTime: string;
  featured: boolean;
}

const NewContent2025UltimateBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const newContent: ContentItem[] = [
    {
      id: 'advanced-analytics-revolution',
      title: 'AI 2025: The Advanced Analytics Revolution - Ultimate Guide to 750% ROI',
      type: 'blog',
      url: '/blog/ai-2025-advanced-analytics-revolution-ultimate-guide',
      roi: '750%',
      savings: '$50M+',
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'manufacturing-transformation-900-roi',
      title: 'AI 2025 Manufacturing Transformation: $3.2B Company Achieves 900% ROI in 15 Months',
      type: 'case-study',
      url: '/case-studies/ai-2025-manufacturing-transformation-900-roi-success',
      roi: '900%',
      savings: '$280M annually',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'implementation-ultimate-roadmap-comprehensive',
      title: 'AI 2025 Implementation Ultimate Roadmap: From Strategy to 1,000% ROI in 18 Months',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-roadmap-comprehensive',
      roi: '1,000%',
      savings: '$4.2M annually',
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'customer-experience-revolution',
      title: 'AI 2025: The Customer Experience Revolution - Ultimate Guide to 650% ROI',
      type: 'blog',
      url: '/blog/ai-2025-customer-experience-revolution-ultimate-guide',
      roi: '650%',
      savings: '78% cost reduction',
      readingTime: '20 min read',
      featured: true
    },
    {
      id: 'logistics-transformation-800-roi',
      title: 'AI 2025 Logistics Transformation: $1.8B Company Achieves 800% ROI in 12 Months',
      type: 'case-study',
      url: '/case-studies/ai-2025-logistics-transformation-800-roi-success',
      roi: '800%',
      savings: '$180M annually',
      readingTime: '16 min read',
      featured: true
    }
  ];

  useEffect(() => {
    if (!isVisible) return;

    const savedVisibility = localStorage.getItem('newContent2025BannerVisible');
    if (savedVisibility === 'false') {
      setIsVisible(false);
      return;
    }

    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % newContent.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isVisible, newContent.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025BannerVisible', 'false');
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? newContent.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newContent.length);
    setIsAutoPlaying(false);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <TrendingUp className="w-4 h-4" />;
      case 'case-study':
        return <Users className="w-4 h-4" />;
      case 'resource':
        return <Award className="w-4 h-4" />;
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

  const currentContent = newContent[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-b border-gray-200 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -right-8 w-32 h-32 bg-indigo-200 rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-4 left-1/3 w-20 h-20 bg-purple-200 rounded-full opacity-25 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-3 mb-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-700">NEW CONTENT 2025</span>
              </div>
              <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(currentContent.type)}`}>
                {getTypeIcon(currentContent.type)}
                <span className="ml-1 capitalize">{currentContent.type.replace('-', ' ')}</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {currentContent.title}
            </h3>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="font-medium text-green-700">{currentContent.roi} ROI</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-blue-700">{currentContent.savings}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>{currentContent.readingTime}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4 ml-6">
            <Link
              href={currentContent.url}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Read Now
            </Link>
            
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            {newContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrevious}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateBanner;