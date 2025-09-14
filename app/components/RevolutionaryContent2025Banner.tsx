'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Star, TrendingUp, Clock, Users } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency: string;
    reading_time: string;
  };
  tags: string[];
}

const RevolutionaryContent2025Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'advanced-automation-revolution-ultimate-guide',
      title: 'AI 2025: The Advanced Automation Revolution - Ultimate Guide to 1,500% ROI',
      type: 'blog',
      url: '/blog/ai-2025-advanced-automation-revolution-ultimate-guide',
      metrics: {
        roi: '1,500%',
        savings: '$8.2M annually',
        efficiency: '340% improvement',
        reading_time: '28 min read'
      },
      tags: ['Advanced Automation', 'AI', 'ROI', 'Fortune 500']
    },
    {
      id: 'intelligent-automation-breakthrough',
      title: 'AI 2025: The Intelligent Automation Breakthrough - 2,000% ROI Through Smart Systems',
      type: 'blog',
      url: '/blog/ai-2025-intelligent-automation-breakthrough',
      metrics: {
        roi: '2,000%',
        savings: '$15.8M annually',
        efficiency: '450% improvement',
        reading_time: '20 min read'
      },
      tags: ['Intelligent Automation', 'AI', 'ROI', 'Smart Systems']
    },
    {
      id: 'fortune-500-ai-automation-1500-roi-success',
      title: 'Fortune 500 AI Automation Success: $4.2B Company Achieves 1,500% ROI in 8 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-automation-1500-roi-success-story',
      metrics: {
        roi: '1,500%',
        savings: '$8.2M annually',
        efficiency: '340% improvement',
        reading_time: '22 min read'
      },
      tags: ['Case Study', 'Fortune 500', 'AI Automation', 'ROI']
    },
    {
      id: 'ai-intelligent-automation-2000-roi-success',
      title: 'AI Intelligent Automation Success: $3.8B Company Achieves 2,000% ROI in 12 Months',
      type: 'case-study',
      url: '/case-studies/ai-intelligent-automation-2000-roi-success',
      metrics: {
        roi: '2,000%',
        savings: '$15.8M annually',
        efficiency: '450% improvement',
        reading_time: '18 min read'
      },
      tags: ['Case Study', 'Intelligent Automation', 'ROI', 'Logistics']
    },
    {
      id: 'ai-automation-implementation-master-guide-2025',
      title: 'AI Automation Implementation Master Guide 2025: From Strategy to 1,500% ROI',
      type: 'resource',
      url: '/resources/ai-automation-implementation-master-guide-2025',
      metrics: {
        roi: '1,500%',
        savings: '97% success rate',
        efficiency: '6-12 months',
        reading_time: '35 min read'
      },
      tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Best Practices']
    }
  ];

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2025-banner-dismissed', 'true');
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? contentItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
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

  if (!isVisible || isDismissed) {
    return null;
  }

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-semibold">NEW 2025 CONTENT</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm">Up to 2,000% ROI</span>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">{getTypeIcon(currentItem.type)}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(currentItem.type)}`}>
                  {currentItem.type.toUpperCase().replace('-', ' ')}
                </span>
                <div className="flex items-center space-x-1 text-sm text-white/80">
                  <Clock className="w-4 h-4" />
                  <span>{currentItem.metrics.reading_time}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 leading-tight">
                {currentItem.title}
              </h3>
              
              <div className="flex items-center space-x-6 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-semibold">ROI: {currentItem.metrics.roi}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm font-semibold">Savings: {currentItem.metrics.savings}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm font-semibold">Efficiency: {currentItem.metrics.efficiency}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <a
                  href={currentItem.url}
                  className="bg-white text-blue-900 px-6 py-2 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  Read Now
                </a>
                <a
                  href="/resources"
                  className="text-white/80 hover:text-white underline text-sm"
                >
                  View All Resources
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-2 ml-8">
              <button
                onClick={handlePrevious}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex items-center justify-center space-x-2 mt-4">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025Banner;