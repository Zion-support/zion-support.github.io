import React from 'react';
import Link from 'next/link';

export default function NewContent2026RevolutionaryBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-8 md:p-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300 mb-6">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
              Revolutionary AI Content 2026
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Discover the Future of
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Autonomous Enterprise</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Explore cutting-edge AI innovations that are revolutionizing enterprise operations. 
              From autonomous architecture to quantum-enhanced analytics, discover the technologies 
              shaping tomorrow's businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/blog/ai-2026-autonomous-enterprise-architecture"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center"
              >
                Explore Autonomous Architecture
              </Link>
              <Link 
                href="/blog/ai-2026-quantum-enhanced-analytics"
                className="px-8 py-4 border border-purple-500 text-purple-400 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300 text-center"
              >
                Discover Quantum Analytics
              </Link>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="flex-1 grid grid-cols-1 gap-4">
            <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Self-Healing Systems</h3>
              </div>
              <p className="text-gray-300 text-sm">
                AI-powered infrastructure that automatically detects and resolves issues
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-800/30 to-indigo-800/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Quantum Processing</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Process massive datasets in seconds with quantum-enhanced algorithms
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-800/30 to-purple-800/30 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Predictive Intelligence</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Anticipate market changes and optimize operations proactively
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-xl"></div>
    </div>
  );
}