import React from 'react';
import Link from 'next/link';

export default function NewContent2025UltimatePromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 mb-6 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white text-sm font-semibold mb-4">
              🚀 NEW CONTENT REVOLUTION
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI 2025 Ultimate Content Strategy
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              Master revolutionary content marketing with quantum intelligence, autonomous content generation, 
              and neural optimization delivering <span className="text-yellow-400 font-bold">5,000% ROI</span>.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-green-400">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                <span className="text-sm font-semibold">Complete Toolkit</span>
              </div>
              <div className="flex items-center text-blue-400">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                <span className="text-sm font-semibold">Case Studies</span>
              </div>
              <div className="flex items-center text-purple-400">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                <span className="text-sm font-semibold">Implementation Guide</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/blog/ai-2025-ultimate-content-strategy"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Strategy
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link 
                href="/case-studies/ai-2025-content-revolution-success"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                View Success Story
              </Link>
            </div>
          </div>
          
          <div className="flex-shrink-0 lg:ml-8">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📈</div>
                  <div className="text-2xl font-bold text-white">5,000%</div>
                  <div className="text-sm text-gray-300">ROI Guaranteed</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-black font-bold">✨</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white text-xs">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}