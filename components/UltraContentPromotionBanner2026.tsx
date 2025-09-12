import React from 'react';
import Link from 'next/link';

export default function UltraContentPromotionBanner2026() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main announcement */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-3 mb-6">
            <span className="text-sm font-bold">🚀 MEGA CONTENT DROP - JANUARY 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            🎯 50+ New AI Resources
            <br />
            <span className="text-yellow-300">Just Released!</span>
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-5xl mx-auto leading-relaxed">
            Discover our biggest content update yet: <strong>Enterprise AI Transformation</strong>, 
            <strong> Automation Revolution</strong>, <strong>Implementation Master Checklist</strong>, 
            and comprehensive guides that will transform your business in 2025.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/content-showcase"
              className="group bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <span className="flex items-center justify-center">
                🎯 Explore All New Content
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            
            <Link
              href="/resources/ai-implementation-master-checklist-2025"
              className="group border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                📚 Download Master Checklist
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
            </Link>
          </div>
          
          {/* Featured Content Grid */}
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link href="/blog/ai-2025-enterprise-transformation-mastery" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform group-hover:scale-105">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-lg font-bold mb-2">Enterprise AI Transformation</h3>
                <p className="text-sm opacity-90 mb-3">Complete mastery guide with proven frameworks</p>
                <div className="flex items-center text-xs font-semibold text-yellow-300">
                  <span>NEW</span>
                  <span className="ml-2">15 min read</span>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/ai-2025-automation-revolution" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform group-hover:scale-105">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-lg font-bold mb-2">AI Automation Revolution</h3>
                <p className="text-sm opacity-90 mb-3">Transform your business with intelligent automation</p>
                <div className="flex items-center text-xs font-semibold text-yellow-300">
                  <span>NEW</span>
                  <span className="ml-2">12 min read</span>
                </div>
              </div>
            </Link>
            
            <Link href="/resources/ai-implementation-master-checklist-2025" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform group-hover:scale-105">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-bold mb-2">Master Checklist</h3>
                <p className="text-sm opacity-90 mb-3">200+ actionable items for guaranteed success</p>
                <div className="flex items-center text-xs font-semibold text-yellow-300">
                  <span>NEW</span>
                  <span className="ml-2">Download</span>
                </div>
              </div>
            </Link>
            
            <Link href="/content-showcase" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform group-hover:scale-105">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-bold mb-2">Content Library</h3>
                <p className="text-sm opacity-90 mb-3">50+ resources, guides, and tools</p>
                <div className="flex items-center text-xs font-semibold text-yellow-300">
                  <span>UPDATED</span>
                  <span className="ml-2">Explore All</span>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">50+</div>
              <div className="text-sm opacity-90">New Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">95%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">340%</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
              <div className="text-sm opacity-90">Organizations Helped</div>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm opacity-75 mb-4">Trusted by leading organizations worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-sm font-semibold">Fortune 500 Companies</div>
              <div className="text-sm font-semibold">•</div>
              <div className="text-sm font-semibold">Startups</div>
              <div className="text-sm font-semibold">•</div>
              <div className="text-sm font-semibold">Government Agencies</div>
              <div className="text-sm font-semibold">•</div>
              <div className="text-sm font-semibold">Non-Profits</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}