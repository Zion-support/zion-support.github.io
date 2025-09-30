import React from 'react';
import Link from 'next/link';

export default function Ultimate2026ContentShowcaseBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl border border-blue-500/20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-600/10 animate-pulse"></div>
        <div className="absolute top-4 right-4 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-ping"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-purple-500/5 rounded-full blur-xl animate-ping" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-6 left-6 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
      <div className="absolute top-12 right-12 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-8 left-16 w-2.5 h-2.5 bg-indigo-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-6 right-8 w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.7s'}}></div>
      
      <div className="relative p-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Ultimate 2026 Content Showcase
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Revolutionary AI Innovations 
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> That Define 2026</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 max-w-2xl">
              Explore cutting-edge AI breakthroughs including autonomous business intelligence, 
              quantum computing integration, and next-generation machine learning systems that 
              are transforming industries worldwide.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                Autonomous Intelligence
              </span>
              <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                Quantum Computing
              </span>
              <span className="px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-sm border border-indigo-500/30">
                Machine Learning
              </span>
              <span className="px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                Business Intelligence
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/blog"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Content
              </Link>
              <Link 
                href="/blog/ai-2026-autonomous-business-intelligence"
                className="border-2 border-blue-400 text-blue-300 px-6 py-3 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Latest AI Intelligence
              </Link>
            </div>
          </div>
          
          {/* Interactive Visual */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* AI Brain Visualization */}
              <div className="w-64 h-64 bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-2xl border border-blue-500/30 p-6">
                <div className="h-full flex flex-col justify-between">
                  {/* Neural Network Nodes */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-blue-500/30 rounded-lg p-2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="bg-purple-500/30 rounded-lg p-2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <div className="bg-indigo-500/30 rounded-lg p-2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                  
                  {/* Connection Lines */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-full h-px bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 opacity-50"></div>
                  </div>
                  
                  {/* Processing Center */}
                  <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-3">
                    <div className="text-center">
                      <div className="text-blue-300 text-xs font-mono mb-1">AI 2026</div>
                      <div className="flex justify-center space-x-1">
                        <div className="w-1 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="w-1 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-1 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Data Streams */}
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded p-2 text-center">
                      <div className="text-cyan-300 text-xs font-mono">BI</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded p-2 text-center">
                      <div className="text-purple-300 text-xs font-mono">QC</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Performance Indicators */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold animate-bounce">
                Live
              </div>
              <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                Real-time
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature Highlights */}
        <div className="mt-8 pt-6 border-t border-blue-500/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Autonomous Analytics</h3>
              <p className="text-gray-400 text-sm">Self-optimizing business intelligence systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Quantum Processing</h3>
              <p className="text-gray-400 text-sm">Revolutionary quantum computing integration</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">AI Innovation</h3>
              <p className="text-gray-400 text-sm">Next-generation machine learning systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}