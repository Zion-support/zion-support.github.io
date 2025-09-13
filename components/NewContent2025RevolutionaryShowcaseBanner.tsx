import React from 'react';
import Link from 'next/link';

export default function NewContent2025RevolutionaryShowcaseBanner() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 via-purple-600/50 to-pink-600/50"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium animate-pulse">🚀 REVOLUTIONARY CONTENT JUST DROPPED</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary Content Showcase 2025
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our latest <span className="font-bold text-yellow-300">breakthrough AI content</span>, 
            case studies with <span className="font-bold text-yellow-300">5,000% ROI</span>, and essential 
            implementation resources. From automation revolution to enterprise transformation success stories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/revolutionary-content-showcase-2025"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🔥 Explore Revolutionary Content
            </Link>
            <Link
              href="/blog/ai-2025-ultimate-automation-revolution"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 text-lg backdrop-blur-sm"
            >
              🚀 AI 2025 Ultimate Automation (5,000% ROI)
            </Link>
          </div>
          
          {/* Featured content preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold mb-2">AI 2025 Ultimate Automation Revolution</h3>
              <p className="text-sm opacity-90 mb-3">Revolutionary AI automation delivering 5,000% ROI</p>
              <div className="flex items-center text-xs opacity-75">
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">BREAKTHROUGH</span>
                <span>18 min read</span>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold mb-2">Global Enterprise Transformation</h3>
              <p className="text-sm opacity-90 mb-3">Fortune 500 achieved 1,200% ROI across 47 countries</p>
              <div className="flex items-center text-xs opacity-75">
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">CASE STUDY</span>
                <span>25 min read</span>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-lg font-semibold mb-2">Ultimate Implementation Toolkit</h3>
              <p className="text-sm opacity-90 mb-3">47 essential resources for AI transformation success</p>
              <div className="flex items-center text-xs opacity-75">
                <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">TOOLKIT</span>
                <span>47 resources</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm opacity-75 mb-4">
              Join 50,000+ professionals getting revolutionary AI insights weekly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="text-white hover:text-yellow-300 transition-colors font-semibold"
              >
                📚 View All Blog Posts →
              </Link>
              <Link
                href="/case-studies"
                className="text-white hover:text-yellow-300 transition-colors font-semibold"
              >
                🏆 View All Case Studies →
              </Link>
              <Link
                href="/resources"
                className="text-white hover:text-yellow-300 transition-colors font-semibold"
              >
                📋 View All Resources →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}