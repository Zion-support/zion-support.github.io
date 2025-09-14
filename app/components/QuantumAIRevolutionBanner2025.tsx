'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Zap, TrendingUp, Target, ArrowRight, Star, CheckCircle } from 'lucide-react';

const QuantumAIRevolutionBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const contentPieces = [
    {
      id: 'quantum-computing-breakthrough',
      title: 'AI 2025: The Quantum Computing Breakthrough',
      description: 'Discover how quantum computing is revolutionizing enterprise AI with 1000% ROI improvements',
      url: '/blog/ai-2025-quantum-computing-breakthrough',
      type: 'blog',
      metrics: {
        roi: '1000%',
        accuracy: '99.9%',
        speed: '67% Faster',
        market: '$2.8B'
      },
      featured: true,
      isNew: true
    },
    {
      id: 'quantum-ai-success-story',
      title: 'AI Transformation Success: 1000% ROI with Quantum AI',
      description: 'How a $5B company achieved unprecedented ROI with quantum AI implementation',
      url: '/case-studies/ai-transformation-1000-roi-quantum-success',
      type: 'case-study',
      metrics: {
        roi: '1000%',
        savings: '$4.0B',
        satisfaction: '99.2%',
        timeline: '18 months'
      },
      featured: true,
      isNew: true
    },
    {
      id: 'quantum-ai-implementation-guide',
      title: 'Quantum AI Implementation Guide 2025',
      description: 'Complete guide to implementing quantum AI for 1000% ROI and market dominance',
      url: '/resources/quantum-ai-implementation-guide-2025',
      type: 'resource',
      metrics: {
        roi: '1000%',
        success: '98%',
        timeline: '12-18 months',
        projects: '500+'
      },
      featured: true,
      isNew: true
    }
  ];

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('quantum-ai-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Auto-rotate content every 8 seconds
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentPieces.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [contentPieces.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('quantum-ai-banner-dismissed', 'true');
  };

  const handleContentClick = (url: string) => {
    // Track click for analytics
    if (typeof window !== 'undefined') {
      window.gtag?.('event', 'click', {
        event_category: 'quantum-ai-banner',
        event_label: 'content-click',
        value: url
      });
    }
  };

  if (!isVisible || isDismissed) return null;

  const currentPiece = contentPieces[currentContent];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-green-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  <Zap className="w-4 h-4" />
                  <span>QUANTUM AI REVOLUTION 2025</span>
                </div>
                <div className="flex items-center space-x-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <div className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                  NEW
                </div>
              </div>

              {/* Content showcase */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {currentPiece.title}
                </h2>
                <p className="text-lg text-gray-200 mb-4 max-w-3xl">
                  {currentPiece.description}
                </p>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {Object.entries(currentPiece.metrics).map(([key, value], index) => (
                    <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-yellow-400">{value}</div>
                      <div className="text-xs text-gray-300 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Content type indicator */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">
                      {currentPiece.type === 'blog' ? 'Blog Post' : 
                       currentPiece.type === 'case-study' ? 'Case Study' : 'Resource Guide'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-300">Featured Content</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentPiece.url}
                  onClick={() => handleContentClick(currentPiece.url)}
                  className="inline-flex items-center space-x-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                >
                  <span>Explore {currentPiece.type === 'blog' ? 'Article' : 
                           currentPiece.type === 'case-study' ? 'Case Study' : 'Guide'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services/quantum-ai-readiness"
                  className="inline-flex items-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
                >
                  <Target className="w-4 h-4" />
                  <span>Get Quantum AI Assessment</span>
                </Link>
              </div>
            </div>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="ml-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress indicator */}
          <div className="mt-6 flex justify-center space-x-2">
            {contentPieces.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentContent(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentContent ? 'bg-yellow-400' : 'bg-white/30'
                }`}
                aria-label={`Go to content ${index + 1}`}
              />
            ))}
          </div>

          {/* Additional content preview */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {contentPieces.map((piece, index) => (
              <div
                key={piece.id}
                className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  index === currentContent
                    ? 'border-yellow-400 bg-yellow-400/10'
                    : 'border-white/20 bg-white/5 hover:border-white/40'
                }`}
                onClick={() => setCurrentContent(index)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-300 uppercase">
                    {piece.type === 'blog' ? 'Blog' : 
                     piece.type === 'case-study' ? 'Case Study' : 'Resource'}
                  </span>
                  {piece.isNew && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                      NEW
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-bold mb-2 line-clamp-2">
                  {piece.title}
                </h3>
                <div className="flex items-center space-x-2 text-xs text-gray-300">
                  <TrendingUp className="w-3 h-3" />
                  <span>ROI: {piece.metrics.roi}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumAIRevolutionBanner2025;