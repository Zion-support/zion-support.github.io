"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const PostHumanBusinessOperationsPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentContent, setCurrentContent] = useState(0);

  const postHumanContent = [
    {
      id: 'post-human-operations',
      title: 'AI 2025: Post-Human Business Operations',
      description: 'Revolution - Ultimate Guide to 75,000% ROI',
      type: 'blog',
      url: '/blog/ai-2025-post-human-business-operations-revolution',
      metrics: {
        roi: '75,000%',
        savings: '$1.8T',
        autonomy: '99%',
        intelligence: '1000x'
      },
      badge: 'REVOLUTIONARY'
    },
    {
      id: 'transcendent-ai',
      title: 'Transcendent AI Business Systems',
      description: 'Operations Beyond Human Capability',
      type: 'blog',
      url: '/blog/ai-2025-post-human-business-operations-revolution',
      metrics: {
        roi: '75,000%',
        efficiency: '99.99%',
        innovation: '10,000x',
        autonomy: '99%'
      },
      badge: 'TRANSCENDENT'
    },
    {
      id: 'autonomous-ecosystem',
      title: 'Autonomous Business Ecosystem',
      description: 'Complete Business Autonomy Achievement',
      type: 'blog',
      url: '/blog/ai-2025-post-human-business-operations-revolution',
      metrics: {
        roi: '75,000%',
        autonomy: '99%',
        value: 'Exponential',
        future: 'Creating'
      },
      badge: 'AUTONOMOUS'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % postHumanContent.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('post-human-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('post-human-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentItem = postHumanContent[currentContent];

  return (
    <div className="relative bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-600/30 to-cyan-600/30 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl animate-spin"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-400 text-emerald-900 mr-3 animate-pulse">
                🤖 {currentItem.badge}
              </span>
              <span className="text-sm text-emerald-200">
                POST-HUMAN AI • BREAKTHROUGH
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
              {currentItem.title}
            </h2>
            
            <p className="text-lg text-emerald-100 mb-4">
              {currentItem.description}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                <span className="text-green-400 font-bold text-lg mr-2">💰</span>
                <span className="text-sm text-emerald-200">ROI:</span>
                <span className="text-green-400 font-bold ml-1">{currentItem.metrics.roi}</span>
              </div>
              
              {currentItem.metrics.savings && (
                <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-emerald-400 font-bold text-lg mr-2">💵</span>
                  <span className="text-sm text-emerald-200">Savings:</span>
                  <span className="text-emerald-400 font-bold ml-1">{currentItem.metrics.savings}</span>
                </div>
              )}
              
              {currentItem.metrics.autonomy && (
                <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-cyan-400 font-bold text-lg mr-2">🤖</span>
                  <span className="text-sm text-emerald-200">Autonomy:</span>
                  <span className="text-cyan-400 font-bold ml-1">{currentItem.metrics.autonomy}</span>
                </div>
              )}
              
              {currentItem.metrics.intelligence && (
                <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-teal-400 font-bold text-lg mr-2">🧠</span>
                  <span className="text-sm text-emerald-200">Intelligence:</span>
                  <span className="text-teal-400 font-bold ml-1">{currentItem.metrics.intelligence}</span>
                </div>
              )}
              
              {currentItem.metrics.efficiency && (
                <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-green-400 font-bold text-lg mr-2">⚡</span>
                  <span className="text-sm text-emerald-200">Efficiency:</span>
                  <span className="text-green-400 font-bold ml-1">{currentItem.metrics.efficiency}</span>
                </div>
              )}
              
              {currentItem.metrics.innovation && (
                <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-emerald-400 font-bold text-lg mr-2">💡</span>
                  <span className="text-sm text-emerald-200">Innovation:</span>
                  <span className="text-emerald-400 font-bold ml-1">{currentItem.metrics.innovation}</span>
                </div>
              )}
              
              {currentItem.metrics.value && (
                <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-cyan-400 font-bold text-lg mr-2">📈</span>
                  <span className="text-sm text-emerald-200">Value:</span>
                  <span className="text-cyan-400 font-bold ml-1">{currentItem.metrics.value}</span>
                </div>
              )}
              
              {currentItem.metrics.future && (
                <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-teal-400 font-bold text-lg mr-2">🔮</span>
                  <span className="text-sm text-emerald-200">Future:</span>
                  <span className="text-teal-400 font-bold ml-1">{currentItem.metrics.future}</span>
                </div>
              )}
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center space-x-2 mb-4">
              {postHumanContent.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-8 rounded-full transition-all duration-300 ${
                    index === currentContent ? 'bg-green-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={currentItem.url}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-emerald-900 font-bold rounded-lg hover:from-green-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
              >
                <span className="mr-2">🚀</span>
                Explore Post-Human Operations
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300"
              >
                <span className="mr-2">🤖</span>
                Start Post-Human Journey
              </Link>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="flex flex-wrap items-center justify-between text-sm text-emerald-200">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Post-Human Operations
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                75,000% ROI Achieved
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                Beyond Human Capability
              </span>
            </div>
            
            <div className="text-emerald-300">
              🎯 <strong>Revolutionary AI Operations</strong> • 45+ min reading time
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHumanBusinessOperationsPromotionBanner;