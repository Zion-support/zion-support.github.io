import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateContentHubBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-2 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-2 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold animate-pulse">
              🚀 NEW
            </span>
            <h2 className="text-xl md:text-2xl font-bold">
              AI 2025 Ultimate Content Hub
            </h2>
          </div>
          <p className="text-blue-100 text-sm md:text-base">
            Discover 500+ articles, 100+ case studies, and 50+ tools in our comprehensive AI content library
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Link 
            href="/ai-2025-ultimate-content-hub"
            className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Explore Content Hub
          </Link>
          <Link 
            href="/ai-2025-ultimate-content-hub#featured"
            className="px-6 py-3 border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            View Featured Content
          </Link>
        </div>
      </div>
    </div>
  );
}