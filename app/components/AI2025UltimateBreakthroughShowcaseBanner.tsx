import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateBreakthroughShowcaseBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const breakthroughItems = [
    {
      title: "AI 2025 Ultimate Automation Platform",
      description: "10,000% ROI through revolutionary business automation",
      href: "/ai-2025-ultimate-automation-platform",
      stats: "10,000% ROI",
      color: "from-purple-500 to-pink-500",
      icon: "🤖"
    },
    {
      title: "Quantum-AI Fusion 2025",
      description: "15,000% ROI through quantum-enhanced intelligence",
      href: "/quantum-ai-fusion-2025",
      stats: "15,000% ROI",
      color: "from-cyan-500 to-purple-500",
      icon: "⚛️"
    },
    {
      title: "Neural Interface Revolution",
      description: "8,500% ROI through brain-computer integration",
      href: "/ai-2025-neural-interface-revolution",
      stats: "8,500% ROI",
      color: "from-green-500 to-blue-500",
      icon: "🧠"
    },
    {
      title: "Transcendent Intelligence Systems",
      description: "20,000% ROI through consciousness-level AI",
      href: "/ai-2025-transcendent-intelligence",
      stats: "20,000% ROI",
      color: "from-orange-500 to-red-500",
      icon: "🌌"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate every 4 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakthroughItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = breakthroughItems[currentIndex];

  return (
    <div className={`fixed top-0 left-0 right-0 z-40 transform transition-all duration-700 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 border-b border-purple-400/50 backdrop-blur-xl shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left side - Announcement */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white font-bold text-sm">AI</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">BREAKTHROUGH ANNOUNCEMENT</div>
                  <div className="text-purple-300 text-xs">Revolutionary AI 2025 Technologies</div>
                </div>
              </div>
            </div>

            {/* Center - Featured Content */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{currentItem.icon}</span>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-semibold">{currentItem.title}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${currentItem.color}`}>
                      {currentItem.stats}
                    </span>
                  </div>
                  <div className="text-gray-300 text-sm max-w-md">
                    {currentItem.description}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Actions */}
            <div className="flex items-center space-x-3">
              <Link 
                href={currentItem.href}
                className={`px-5 py-2 bg-gradient-to-r ${currentItem.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm`}
              >
                Explore Breakthrough
              </Link>
              
              <Link 
                href="/ai-services-2025"
                className="px-4 py-2 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm"
              >
                All Services
              </Link>
              
              <button 
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="Close banner"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden mt-4 pt-4 border-t border-purple-400/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-xl">{currentItem.icon}</span>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-white font-semibold text-sm">{currentItem.title}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${currentItem.color}`}>
                      {currentItem.stats}
                    </span>
                  </div>
                  <div className="text-gray-300 text-xs">
                    {currentItem.description}
                  </div>
                </div>
              </div>
              
              <Link 
                href={currentItem.href}
                className={`px-4 py-2 bg-gradient-to-r ${currentItem.color} text-white font-semibold rounded-lg text-sm`}
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated progress bar */}
      <div className="h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div 
          className="h-full bg-white/80 transition-all duration-4000 ease-linear absolute top-0 left-0"
          style={{ 
            width: '100%',
            transform: `translateX(${-100 + ((Date.now() % 4000) / 4000) * 100}%)`
          }}
        />
      </div>
    </div>
  );
};

export default AI2025UltimateBreakthroughShowcaseBanner;