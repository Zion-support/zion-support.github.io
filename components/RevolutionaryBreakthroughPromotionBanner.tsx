'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RevolutionaryBreakthroughPromotionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { value: '2000%', label: 'ROI Achieved', icon: '🏆' },
    { value: '95%', label: 'Success Rate', icon: '✅' },
    { value: '500+', label: 'Implementations', icon: '🚀' },
    { value: '6 Months', label: 'Avg. Deployment', icon: '⚡' }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Main Announcement */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl animate-pulse">🚀</span>
                <div className="hidden sm:block">
                  <span className="font-bold text-lg">BREAKTHROUGH ANNOUNCEMENT:</span>
                  <span className="ml-2 text-sm opacity-90">
                    AI 2025 Revolutionary Breakthrough - {stats[currentStat].icon} {stats[currentStat].value} {stats[currentStat].label}
                  </span>
                </div>
                <div className="block sm:hidden">
                  <span className="font-bold">AI 2025 BREAKTHROUGH</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Link 
                href="/blog/ai-2025-revolutionary-breakthrough-announcement"
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/30"
              >
                📖 Learn More
              </Link>
              <Link 
                href="/case-studies/ai-2025-revolutionary-breakthrough-success"
                className="bg-white text-red-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105"
              >
                🏆 See 2000% ROI
              </Link>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-white/80 hover:text-white p-1 transition-colors"
                aria-label="Close banner"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Mobile Stats Carousel */}
          <div className="lg:hidden mt-3 pt-3 border-t border-white/20">
            <div className="flex justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold">{stats[currentStat].icon} {stats[currentStat].value}</div>
                <div className="text-sm opacity-90">{stats[currentStat].label}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="h-1 bg-white/20">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-3000 ease-linear"
            style={{ 
              width: `${((currentStat + 1) / stats.length) * 100}%`,
              animation: 'progress 3s linear infinite'
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}