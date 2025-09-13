import React from 'react';
import Link from 'next/link';

const NewContentShowcase2026Banner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 py-6 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-8 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-10 right-10 w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-6 left-1/4 w-2 h-2 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-1/4 w-3 h-3 bg-white rounded-full animate-ping"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - New Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-white text-sm font-bold mb-2 animate-pulse">
              🆕 NEW CONTENT - JUST RELEASED
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Revolutionary AI Content 2026
            </h2>
            <p className="text-white text-opacity-90 text-sm md:text-base">
              Discover breakthrough technologies: <strong>Quantum Neural Processing</strong>, <strong>Transcendent Intelligence</strong>, and <strong>Reality Synthesis</strong>
            </p>
          </div>
          
          {/* Right side - CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/ai-2026-revolutionary-breakthrough-announcement"
              className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
            >
              🔥 View New Content
            </Link>
            <Link 
              href="/ai-2030-transcendent-intelligence-showcase"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white hover:text-emerald-600 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Explore Showcase
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

export default NewContentShowcase2026Banner;