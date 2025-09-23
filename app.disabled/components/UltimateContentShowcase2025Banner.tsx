"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Star, TrendingUp } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: string;
  url: string;
  metrics: {
    roi: string;
    savings: string;
    satisfaction?: string;
    efficiency?: string;
  };
  readingTime: string;
  featured: boolean;
}

const UltimateContentShowcase2025Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const featuredContent: ContentItem[] = [
    {
      id: 'ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Automation Revolution - Complete Enterprise Guide',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-automation-revolution-complete-guide',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        satisfaction: '98%',
        efficiency: '340%'
      },
      readingTime: '18 min read',
      featured: true
    },
    {
      id: '1000-percent-roi-success',
      title: 'AI Transformation Ultimate Success: $2.8B Company Achieves 1,000% ROI',
      type: 'case-study',
      url: '/case-studies/ai-transformation-1000-percent-roi-ultimate-success-story',
      metrics: {
        roi: '1,000%',
        savings: '$280M',
        satisfaction: '99.8%',
        efficiency: '78%'
      },
      readingTime: '15 min read',
      featured: true
    }
  ];

  if (isDismissed) return null;

  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-lg">
              <Star className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Ultimate Content Showcase 2025</h2>
              <p className="text-blue-200">Featured breakthrough content with proven results</p>
            </div>
          </div>
          <button
            onClick={() => setIsDismissed(true)}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredContent.map((item, index) => (
            <div key={item.id} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {item.type.toUpperCase()}
                </div>
                <div className="flex items-center text-yellow-400">
                  <Star className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">Featured</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 leading-tight">
                {item.title}
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="flex items-center mb-1">
                    <TrendingUp className="h-4 w-4 text-green-400 mr-2" />
                    <span className="text-sm text-gray-300">ROI</span>
                  </div>
                  <div className="text-lg font-bold text-green-400">{item.metrics.roi}</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="flex items-center mb-1">
                    <TrendingUp className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-sm text-gray-300">Savings</span>
                  </div>
                  <div className="text-lg font-bold text-blue-400">{item.metrics.savings}</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">{item.readingTime}</span>
                <Link
                  href={item.url}
                  className="inline-flex items-center text-white bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium"
                >
                  Read Now
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/content"
            className="inline-flex items-center text-white bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-all duration-300 font-medium"
          >
            View All Content
            <ChevronRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025Banner;