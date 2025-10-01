import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025LatestContentShowcaseBanner() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptLTEyIDRjMS42NiAwIDMtMS4zNCAzLTNzLTEuMzQtMy0zLTMtMyAxLjM0LTMgMyAxLjM0IDMgMyAzem0yNCAyNGMtMS42NiAwLTMgMS4zNC0zIDNzMS4zNCAzIDMgMyAzLTEuMzQgMy0zLTEuMzQtMy0zLTN6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-2 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span className="text-purple-300 font-bold text-sm tracking-wider">🎯 JUST PUBLISHED: OCTOBER 2025 🎯</span>
          </div>
          
          {/* Main headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-pink-200 mb-6 leading-tight">
            Enterprise AI Transformation Suite
          </h2>
          
          <p className="text-2xl md:text-3xl text-purple-200 font-semibold mb-8 max-w-4xl mx-auto">
            Advanced Orchestration, Conversational AI, and $847M Success Story
          </p>
          
          {/* Value proposition */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-black text-purple-400 mb-2">$847M</div>
              <div className="text-lg text-white font-medium">Annual Savings</div>
              <div className="text-sm text-purple-200 mt-2">Fortune 100 case study</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-black text-pink-400 mb-2">2,847%</div>
              <div className="text-lg text-white font-medium">ROI Achieved</div>
              <div className="text-sm text-purple-200 mt-2">In 18 months</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-black text-indigo-400 mb-2">97%</div>
              <div className="text-lg text-white font-medium">Customer Satisfaction</div>
              <div className="text-sm text-purple-200 mt-2">With AI interactions</div>
            </div>
          </div>
          
          {/* Content cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            <Link 
              to="/blog/ai-2025-oct-advanced-ai-orchestration-platforms"
              className="group bg-gradient-to-br from-purple-800/50 to-indigo-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:border-purple-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <div className="text-3xl mb-3">🎼</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                AI Orchestration Platforms
              </h3>
              <p className="text-purple-200 text-sm mb-3">
                Coordinate hundreds of AI agents with intelligent workflow management
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">$8.4B Savings</span>
                <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">94% Automation</span>
              </div>
              <div className="flex items-center text-purple-400 text-sm font-semibold">
                Read Complete Guide →
              </div>
            </Link>
            
            <Link 
              to="/blog/ai-2025-oct-next-gen-conversational-ai-systems"
              className="group bg-gradient-to-br from-pink-800/50 to-rose-800/50 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30 hover:border-pink-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50"
            >
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-200 transition-colors">
                Conversational AI Systems
              </h3>
              <p className="text-pink-200 text-sm mb-3">
                Transform customer engagement with human-like interactions
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded-full">$6.7B Savings</span>
                <span className="text-xs bg-rose-500/20 text-rose-300 px-2 py-1 rounded-full">97% Satisfaction</span>
              </div>
              <div className="flex items-center text-pink-400 text-sm font-semibold">
                Read Complete Guide →
              </div>
            </Link>
            
            <Link 
              to="/case-studies/fortune-100-ai-transformation-2025"
              className="group bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 hover:border-indigo-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50"
            >
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                Fortune 100 Success Story
              </h3>
              <p className="text-indigo-200 text-sm mb-3">
                $847M savings and 2,847% ROI with comprehensive AI transformation
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">$847M Saved</span>
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">2,847% ROI</span>
              </div>
              <div className="flex items-center text-indigo-400 text-sm font-semibold">
                Read Full Case Study →
              </div>
            </Link>
          </div>
          
          {/* CTA section */}
          <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-md rounded-2xl p-8 border border-purple-400/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 Complete Enterprise AI Implementation Guides
            </h3>
            <p className="text-purple-200 mb-6">
              Each guide includes detailed architectures, best practices, ROI calculators, 
              and real-world success stories. Transform your organization with proven AI strategies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <span>Explore All Content</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-3 px-8 rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-300"
              >
                <span>Get Started Today</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"></div>
    </div>
  );
}
