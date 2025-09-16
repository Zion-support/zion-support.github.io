"use client";
'use client';

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

interface ContentItem {
  id: string;
  title: string;
  description: string;
  link: string;
  category: string;
  roi?: string;
  badge?: string;
  icon: string;
}

export default function ContentDiscoveryWidget() {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentItemsetCurrentItem] = useState(0);

  const contentItems: ContentItem[] = [
    {
      id: 'breakthrough-revolution',
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI breakthrough delivering 10,000% ROI through quantum-neural fusion and autonomous operations.',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      category: 'Revolutionary Technology',
      roi: '10,000% ROI',
      badge: 'BREAKTHROUGH',
      icon: '🚀'
    },
    {
      id: 'global-transformation',
      title: 'Global Transformation Success Story',
      description: 'See how a Fortune 500 company achieved 10,000% ROI in just 6 months using our AI breakthrough.',
      link: '/case-studies/ai-2025-global-transformation-breakthrough',
      category: 'Success Story',
      roi: '10,000% ROI',
      badge: 'VERIFIED',
      icon: '🏆'
    },
    {
      id: 'roi-calculator',
      title: 'Interactive ROI Calculator',
      description: 'Calculate your potential ROI with our revolutionary AI 2025 breakthrough technology.',
      link: '/tools/ai-2025-roi-calculator',
      category: 'Interactive Tool',
      roi: 'Free Tool',
      badge: 'NEW',
      icon: '🧮'
    },
    {
      id: 'quantum-neural-fusion',
      title: 'Quantum-Neural Fusion Technology',
      description: 'Revolutionary fusion of quantum computing and neural networks delivering 15,000x faster processing.',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      category: 'Technology',
      roi: '15,000x Faster',
      badge: 'REVOLUTIONARY',
      icon: '⚛️'
    },
    {
      id: 'autonomous-operations',
      title: 'Autonomous Operations System',
      description: 'Fully autonomous business operations that run 24/7 without human intervention.',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      category: 'Automation',
      roi: '24/7 Operations',
      badge: 'BREAKTHROUGH',
      icon: '🤖'
    },
    {
      id: 'transcendent-intelligence',
      title: 'Transcendent Intelligence',
      description: 'AI that transcends human limitationsmaking decisions with infinite wisdom and perfect foresight.',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      category: 'Intelligence',
      roi: '99.9% Accuracy',
      badge: 'TRANSCENDENT',
      icon: '🧠'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }2000);

    return () => clearTimeout(timer);
  }[]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % contentItems.length);
    }5000);

    return () => clearInterval(interval);
  }[contentItems.length]);

  if (!isVisible) return null;

  const currentContent = contentItems[currentItem];

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">New Content Available</span>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close widget"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start space-x-3">
            <div className="text-2xl flex-shrink-0">{currentContent.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded">
                  {currentContent.badge}
                </span>
                <span className="text-xs text-gray-500">{currentContent.category}</span>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                {currentContent.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {currentContent.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-green-600">
                  {currentContent.roi}
                </div>
                <a
                  href={currentContent.link}
                  className="text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="h-1 bg-gray-200">
          <div 
            className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-100"
            style={{ width: `${((currentItem + 1) / contentItems.length) * 100}%` }}
          />
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-1 p-2">
          {contentItems.map((_index) => (
            <button
              key={index}
              onClick={() => setCurrentItem(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentItem ? 'bg-purple-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to content ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}