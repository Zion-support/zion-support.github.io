'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, TrendingUp, DollarSign, Zap } from 'lucide-react';

const UltimateDigitalTransformation2025Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const newContent = [
    {
      id: 'ultimate-digital-transformation-revolution',
      title: 'AI 2025: The Ultimate Digital Transformation Revolution',
      description: 'Ultimate Breakthrough Guide to 35,000% ROI',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-digital-transformation-revolution-ultimate-breakthrough',
      metrics: {
        roi: '35,000%',
        savings: '$500B+',
        efficiency: '99.99%',
        speed: '5,000%'
      },
      readingTime: '40 min read',
      featured: true
    },
    {
      id: 'fortune-500-digital-transformation-success',
      title: 'Fortune 500 Ultimate Digital Transformation Success',
      description: '$500B Annual Savings - 35,000% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ultimate-digital-transformation-35000-roi-success-story',
      metrics: {
        roi: '35,000%',
        savings: '$500B',
        timeline: '18 months',
        accuracy: '99.99%'
      },
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'ultimate-digital-transformation-implementation-guide',
      title: 'Ultimate Digital Transformation Implementation Guide 2025',
      description: 'Complete Roadmap to 35,000% ROI',
      type: 'resource',
      url: '/resources/ultimate-digital-transformation-implementation-guide-2025-35000-roi',
      metrics: {
        roi: '35,000%',
        timeline: '18 months',
        success: '99.7%',
        guide: 'Complete roadmap'
      },
      readingTime: '60 min read',
      featured: true
    }
  ];

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('ultimate-digital-transformation-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Auto-rotate content every 8 seconds
    const interval = setInterval(() => {
      setCurrentContentIndex((prevIndex) => 
        prevIndex === newContent.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('ultimate-digital-transformation-banner-dismissed', 'true');
  };

  const currentContent = newContent[currentContentIndex];

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-indigo-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-20"></div>
      </div>

      {/* Progress indicator */}
      <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 transition-all duration-300 ease-out"
           style={{ width: `${((currentContentIndex + 1) / newContent.length) * 100}%` }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <Zap className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-sm font-semibold">ULTIMATE DIGITAL TRANSFORMATION 2025</span>
              </div>
              <div className="flex items-center bg-green-500/20 rounded-full px-3 py-1 backdrop-blur-sm">
                <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
                <span className="text-xs font-medium text-green-400">35,000% ROI</span>
              </div>
            </div>

            {/* Content showcase */}
            <div className="mb-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      currentContent.type === 'blog' ? 'bg-blue-100 text-blue-800' :
                      currentContent.type === 'case-study' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {currentContent.type === 'blog' ? 'Blog Post' :
                       currentContent.type === 'case-study' ? 'Case Study' : 'Implementation Guide'}
                    </span>
                    {currentContent.featured && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 leading-tight">
                    {currentContent.title}
                  </h3>
                  
                  <p className="text-blue-100 mb-4 text-sm">
                    {currentContent.description}
                  </p>

                  {/* Metrics display */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-green-400" />
                        <div>
                          <div className="text-xs text-blue-200">ROI</div>
                          <div className="text-sm font-bold text-green-400">{currentContent.metrics.roi}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-blue-400" />
                        <div>
                          <div className="text-xs text-blue-200">Savings</div>
                          <div className="text-sm font-bold text-blue-400">{currentContent.metrics.savings}</div>
                        </div>
                      </div>
                    </div>
                    
                    {currentContent.metrics.efficiency && (
                      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-purple-400" />
                          <div>
                            <div className="text-xs text-blue-200">Efficiency</div>
                            <div className="text-sm font-bold text-purple-400">{currentContent.metrics.efficiency}</div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                      <div className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-yellow-400" />
                        <div>
                          <div className="text-xs text-blue-200">Timeline</div>
                          <div className="text-sm font-bold text-yellow-400">{currentContent.metrics.timeline || '18 months'}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col space-y-3 ml-6">
                  <Link
                    href={currentContent.url}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-semibold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Read Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  
                  <Link
                    href="/services"
                    className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Reading time and progress dots */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-blue-200">
                    {currentContent.readingTime}
                  </span>
                  <div className="flex space-x-1">
                    {newContent.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentContentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentContentIndex ? 'bg-yellow-400' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="text-xs text-blue-200">
                  {currentContentIndex + 1} of {newContent.length}
                </div>
              </div>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="ml-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
            aria-label="Dismiss banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UltimateDigitalTransformation2025Banner;