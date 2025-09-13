import React from 'react';
import Link from 'next/link';

export default function NewContent2025RevolutionaryBanner() {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-green-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-blue-400 rounded-full animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 JUST RELEASED - REVOLUTIONARY CONTENT 2025
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            AI 2025 Revolutionary Breakthrough
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Discover the most comprehensive AI transformation content ever created. 
            Get access to <span className="text-yellow-400 font-bold">15,000% ROI case studies</span>, 
            <span className="text-green-400 font-bold">ultimate implementation guides</span>, and 
            <span className="text-pink-400 font-bold">revolutionary automation breakthroughs</span>.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Revolutionary Automation Blog Post */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold mr-3">
                NEW BLOG
              </span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                BREAKTHROUGH
              </span>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-yellow-400">
              AI 2025 Revolutionary Automation Breakthrough
            </h3>
            
            <p className="text-gray-300 mb-4">
              The future is here! Discover how 99.7% accuracy and 10,000x faster processing 
              are transforming business operations worldwide.
            </p>
            
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-400">
                <span className="text-green-400 font-bold">99.7%</span> Accuracy
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-blue-400 font-bold">10,000x</span> Faster
              </div>
            </div>
            
            <Link 
              href="/blog/ai-2025-revolutionary-automation-breakthrough"
              className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Read Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Enterprise Transformation Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold mr-3">
                CASE STUDY
              </span>
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                15,000% ROI
              </span>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-green-400">
              Enterprise AI Transformation Mega Success
            </h3>
            
            <p className="text-gray-300 mb-4">
              Fortune 500 company achieves unprecedented 15,000% ROI with comprehensive 
              AI transformation. Learn their complete strategy and results.
            </p>
            
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-400">
                <span className="text-green-400 font-bold">15,000%</span> ROI
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-blue-400 font-bold">$15.775B</span> Returns
              </div>
            </div>
            
            <Link 
              href="/case-studies/enterprise-ai-transformation-2025-mega-success"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105"
            >
              View Case Study
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Ultimate Implementation Guide */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold mr-3">
                GUIDE
              </span>
              <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                ULTIMATE
              </span>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-blue-400">
              AI 2025 Ultimate Implementation Guide
            </h3>
            
            <p className="text-gray-300 mb-4">
              Complete roadmap to AI transformation success. Everything you need to know 
              from assessment to optimization with proven methodologies.
            </p>
            
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-400">
                <span className="text-purple-400 font-bold">95%</span> Success Rate
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-yellow-400 font-bold">2,500%</span> Avg ROI
              </div>
            </div>
            
            <Link 
              href="/resources/ai-2025-ultimate-implementation-guide"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Download Guide
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full inline-block font-bold text-lg mb-6">
            🎯 LIMITED TIME: Get All Content + Implementation Support
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Expert Consultation
            </Link>
            
            <Link 
              href="/tools/ai-2025-roi-calculator"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Calculate Your ROI
            </Link>
          </div>
          
          <p className="text-gray-300 mt-6 text-sm">
            Join 10,000+ businesses already transforming with our AI solutions
          </p>
        </div>
      </div>
    </div>
  );
}