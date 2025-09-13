import React from 'react';
import Link from 'next/link';

const MegaContentDropBanner = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-6 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-2 left-2 w-3 h-3 bg-white/40 rounded-full animate-bounce"></div>
        <div className="absolute top-6 right-6 w-2 h-2 bg-white/50 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-2 left-1/3 w-2.5 h-2.5 bg-white/35 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-4 right-1/4 w-2 h-2 bg-white/45 rounded-full animate-bounce delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="flex items-center mb-4 lg:mb-0">
          <div className="bg-white/20 p-3 rounded-full mr-4 animate-pulse">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-xl lg:text-2xl">🎉 MEGA CONTENT DROP - JANUARY 2025</h3>
            <p className="text-base lg:text-lg opacity-90">30+ New AI Resources, Guides & Case Studies Just Released!</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Link 
            href="/ai-resources-2025" 
            className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/30 flex items-center justify-center"
          >
            <span className="mr-2">📚</span>
            AI Resources 2025
          </Link>
          <Link 
            href="/blog/ai-automation-2025" 
            className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/30 flex items-center justify-center"
          >
            <span className="mr-2">🤖</span>
            AI Automation Guide
          </Link>
          <Link 
            href="/case-studies/enterprise-automation-success" 
            className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/30 flex items-center justify-center"
          >
            <span className="mr-2">💼</span>
            Success Story
          </Link>
          <Link 
            href="/content-showcase" 
            className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center"
          >
            <span className="mr-2">🔍</span>
            Explore All
          </Link>
        </div>
      </div>
      
      {/* Subtle animation overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse"></div>
    </div>
  );
};

export default MegaContentDropBanner;