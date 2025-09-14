import React from 'react';
import Link from 'next/link';

const AI2026RevolutionaryBreakthroughAnnouncementBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-6 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-1/4 w-2 h-2 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-8 right-1/4 w-3 h-3 bg-white rounded-full animate-ping"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - Announcement */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-white text-sm font-bold mb-2 animate-pulse">
              🚨 BREAKING NEWS - JUST ANNOUNCED 🚨
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              AI 2026 Revolutionary Breakthrough
            </h2>
            <p className="text-white text-opacity-90 text-sm md:text-base">
              Experience <strong>10,000x performance</strong><strong>99.99% accuracy</strong>and <strong>$100B market transformation</strong>
            </p>
          </div>
          
          {/* Right side - CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/ai-2026-revolutionary-breakthrough-announcement"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
            >
              🔥 Explore Breakthrough
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-2 right-2 text-white text-2xl animate-bounce">🚀</div>
      <div className="absolute bottom-2 left-2 text-white text-2xl animate-pulse">⚡</div>
    </div>
  );
};

export default AI2026RevolutionaryBreakthroughAnnouncementBanner;