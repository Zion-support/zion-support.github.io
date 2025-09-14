'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Zap, TrendingUp, Target, ArrowRight, Star, CheckCircle, Clock, Users, Award } from 'lucide-react';

const RevolutionaryContent2026Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const contentPieces = [
    {
      id: 'quantum-computing-breakthrough',
      title: 'AI 2025: The Quantum Computing Breakthrough That\'s Revolutionizing Enterprise AI',
      description: 'Discover how quantum computing is transforming AI capabilities, delivering 1000% ROI improvements and solving previously impossible business challenges.',
      url: '/blog/ai-2025-quantum-computing-breakthrough',
      type: 'blog',
      metrics: {
        roi: '1000%',
        accuracy: '99.9%',
        speed: '67% Faster',
        market: '$2.8B'
      },
      featured: true,
      isNew: true,
      readingTime: '18 min read'
    },
    {
      id: 'quantum-ai-success-story',
      title: 'AI Transformation Success: $5B Company Achieves 1000% ROI with Quantum AI Implementation',
      description: 'How a Fortune 500 company transformed their operations with quantum AI, achieving unprecedented ROI and market dominance.',
      url: '/case-studies/ai-transformation-1000-roi-quantum-success',
      type: 'case-study',
      metrics: {
        roi: '1000%',
        savings: '$4.0B',
        satisfaction: '99.2%',
        timeline: '18 months'
      },
      featured: true,
      isNew: true,
      readingTime: '20 min read'
    },
    {
      id: 'quantum-ai-implementation-guide',
      title: 'Quantum AI Implementation Guide 2025: From Strategy to 1000% ROI',
      description: 'Complete guide to implementing quantum AI in your enterprise, with proven strategies for achieving 1000% ROI and market dominance.',
      url: '/resources/quantum-ai-implementation-guide-2025',
      type: 'resource',
      metrics: {
        roi: '1000%',
        success: '98%',
        timeline: '12-18 months',
        projects: '500+'
      },
      featured: true,
      isNew: true,
      readingTime: '35 min read'
    }
  ];

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('revolutionary-content-2026-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Auto-rotate content every 10 seconds
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentPieces.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [contentPieces.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2026-banner-dismissed', 'true');
  };

  const handleContentClick = (url: string) => {
    // Track click for analytics
    if (typeof window !== 'undefined') {
      window.gtag?.('event', 'click', {
        event_category: 'revolutionary-content-2026-banner',
        event_label: 'content-click',
        value: url
      });
    }
  };

  if (!isVisible || isDismissed) return null;

  const currentPiece = contentPieces[currentContent];

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/30 animate-pulse"></div>
        <div className="absolute top-6 left-6 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-12 right-12 w-2 h-2 bg-green-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-6 left-1/3 w-2.5 h-2.5 bg-pink-400 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-12 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-orange-400 rounded-full animate-ping delay-4000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                  <Zap className="w-5 h-5" />
                  <span>REVOLUTIONARY CONTENT 2026</span>
                </div>
                <div className="flex items-center space-x-1 text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  BREAKTHROUGH
                </div>
              </div>

              {/* Content showcase */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {currentPiece.title}
                </h2>
                <p className="text-xl text-gray-200 mb-6 max-w-4xl leading-relaxed">
                  {currentPiece.description}
                </p>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {Object.entries(currentPiece.metrics).map(([key, value], index) => (
                    <div key={key} className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                      <div className="text-2xl font-bold text-yellow-400 mb-1">{value}</div>
                      <div className="text-sm text-gray-300 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Content details */}
                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">
                      {currentPiece.type === 'blog' ? 'Blog Post' : 
                       currentPiece.type === 'case-study' ? 'Case Study' : 'Resource Guide'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-300">Featured Content</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-300">{currentPiece.readingTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-gray-300">500+ Success Stories</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href={currentPiece.url}
                  onClick={() => handleContentClick(currentPiece.url)}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-300 transition-all transform hover:scale-105"
                >
                  <span>Explore {currentPiece.type === 'blog' ? 'Article' : 
                           currentPiece.type === 'case-study' ? 'Case Study' : 'Guide'}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services/quantum-ai-readiness"
                  className="inline-flex items-center space-x-3 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-900 transition-all transform hover:scale-105"
                >
                  <Target className="w-5 h-5" />
                  <span>Get Quantum AI Assessment</span>
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center space-x-3 border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-xl font-semibold hover:bg-purple-400 hover:text-white transition-all transform hover:scale-105"
                >
                  <Award className="w-5 h-5" />
                  <span>View All Case Studies</span>
                </Link>
              </div>

              {/* Success highlights */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-bold mb-4 text-yellow-400">Why This Content is Revolutionary</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-gray-200">1000% ROI Proven Results</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm text-gray-200">Fortune 500 Success Stories</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-gray-200">Quantum AI Breakthrough</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="ml-6 p-3 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress indicator */}
          <div className="mt-8 flex justify-center space-x-3">
            {contentPieces.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentContent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentContent 
                    ? 'bg-yellow-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to content ${index + 1}`}
              />
            ))}
          </div>

          {/* Additional content preview */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {contentPieces.map((piece, index) => (
              <div
                key={piece.id}
                className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
                  index === currentContent
                    ? 'border-yellow-400 bg-yellow-400/10'
                    : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                }`}
                onClick={() => setCurrentContent(index)}
              >
                <div className="flex items-center justify-between mb-3">
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
                <h3 className="text-sm font-bold mb-3 line-clamp-2">
                  {piece.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-300">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-3 h-3" />
                    <span>ROI: {piece.metrics.roi}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{piece.readingTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2026Banner;