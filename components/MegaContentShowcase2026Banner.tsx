import React from 'react';
import Link from 'next/link';

export default function MegaContentShowcase2026Banner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-2 left-4 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-5 right-8 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-3 left-1/4 w-2.5 h-2.5 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-5 right-1/3 w-1.5 h-1.5 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-6 w-1 h-1 bg-white/25 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-12 w-2 h-2 bg-white/35 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-12 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold animate-pulse">
              🚀 MEGA
            </span>
            <h2 className="text-xl md:text-2xl font-bold">
              Content Showcase 2026
            </h2>
          </div>
          <p className="text-purple-100 text-sm md:text-base">
            150+ resources, 50+ case studies, 20+ tools - Your ultimate AI 2026 content library
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Link 
            href="/mega-content-showcase-2026"
            className="px-6 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Explore Mega Showcase
          </Link>
          <Link 
            href="/mega-content-showcase-2026#featured"
            className="px-6 py-3 border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            View Featured Content
          </Link>
        </div>
      </div>
    </div>
  );
}