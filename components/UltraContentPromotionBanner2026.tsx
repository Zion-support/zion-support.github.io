import React from 'react';
import Link from 'next/link';

export default function UltraContentPromotionBanner2026() {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6 text-sm font-bold shadow-lg">
            <span className="animate-pulse mr-2">🚀</span>
            MEGA CONTENT DROP - JANUARY 2026
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary AI Content
            </span>
            <br />
            <span className="text-white">Just Released!</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Discover our most comprehensive AI resources yet: Enterprise Implementation Mastery, 
            Quantum AI Breakthroughs, and cutting-edge case studies that are transforming industries.
          </p>

          {/* Key highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold mb-2">Complete Implementation Guide</h3>
              <p className="text-sm text-blue-100">
                The ultimate 45-minute master guide with templates, checklists, and proven methodologies
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum AI Breakthrough</h3>
              <p className="text-sm text-blue-100">
                Revolutionary case study showing 500% ROI with quantum-enhanced AI in financial services
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="text-lg font-bold mb-2">Enterprise Mastery</h3>
              <p className="text-sm text-blue-100">
                Proven strategies that helped 200+ enterprises achieve 340% average ROI
              </p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/resources/ai-2026-complete-implementation-master-guide"
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center"
            >
              <span className="mr-2">📖</span>
              Access Master Guide
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              href="/case-studies/quantum-ai-financial-optimization-breakthrough-2026"
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center"
            >
              <span className="mr-2">⚛️</span>
              View Case Study
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Additional info */}
          <div className="mt-8 text-sm text-blue-200">
            <p>✨ Free access • Updated daily • Used by 500+ organizations</p>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-8 w-1 h-1 bg-pink-400 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-1/4 left-8 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-2000"></div>
      <div className="absolute bottom-1/3 right-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-500"></div>
    </div>
  );
}