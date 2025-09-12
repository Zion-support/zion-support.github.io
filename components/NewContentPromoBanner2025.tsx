import React from 'react';
import Link from 'next/link';

const NewContentPromoBanner2025 = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/35 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-6 right-1/3 w-1 h-1 bg-white/45 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="bg-white/20 p-2 rounded-full mr-3 animate-spin">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg md:text-xl">🚀 NEW: Revolutionary Content & Services</h3>
            <p className="text-sm md:text-base opacity-90">Discover cutting-edge AI automation, quantum computing, and enterprise success stories</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
          <Link 
            href="/blog/ai-automation-2025" 
            className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/30"
          >
            📈 AI Automation 2025
          </Link>
          <Link 
            href="/case-studies/enterprise-automation-success" 
            className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/30"
          >
            💼 Success Story
          </Link>
          <Link 
            href="/services/quantum-ai-consulting-2025" 
            className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/30"
          >
            ⚛️ Quantum AI
          </Link>
          <Link 
            href="/content-showcase" 
            className="bg-white text-purple-600 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
          >
            🔍 Explore All
          </Link>
        </div>
      </div>
      
      {/* Subtle animation overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse"></div>
    </div>
  );
};

export default NewContentPromoBanner2025;