import React from 'react';
import Link from 'next/link';

export default function AI2026NewContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-blue-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500 rounded-full opacity-25 animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-pulse">
            🚀 JUST RELEASED - AI 2026 BREAKTHROUGH CONTENT
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Revolutionary AI 2026 Content
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Discover the latest AI 2026 technologies, implementation strategies, and success stories that are transforming businesses worldwide with unprecedented ROI.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Blog Post */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                📝 NEW BLOG POST
              </span>
              <span className="text-yellow-300 text-sm font-semibold">BREAKTHROUGH</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-200 transition-colors">
              AI 2026: Next-Generation Business Automation Revolution
            </h3>
            
            <p className="text-blue-100 mb-6">
              Discover the revolutionary AI automation technologies that will transform businesses in 2026, delivering unprecedented efficiency and ROI.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-purple-500/30 text-purple-200 px-3 py-1 rounded-full text-xs">99.8% Accuracy</span>
              <span className="bg-blue-500/30 text-blue-200 px-3 py-1 rounded-full text-xs">10,000x Faster</span>
              <span className="bg-green-500/30 text-green-200 px-3 py-1 rounded-full text-xs">2,500% ROI</span>
            </div>
            
            <Link 
              href="/blog/ai-2026-next-generation-business-automation"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 group-hover:scale-105"
            >
              Read Full Article
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🏆 SUCCESS STORY
              </span>
              <span className="text-yellow-300 text-sm font-semibold">3,500% ROI</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-200 transition-colors">
              Enterprise AI Transformation 2026: Revolutionary Success Story
            </h3>
            
            <p className="text-blue-100 mb-6">
              How a Fortune 500 company achieved 3,500% ROI through comprehensive AI transformation using revolutionary 2026 technologies.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-orange-500/30 text-orange-200 px-3 py-1 rounded-full text-xs">Fortune 500</span>
              <span className="bg-red-500/30 text-red-200 px-3 py-1 rounded-full text-xs">12 Months</span>
              <span className="bg-green-500/30 text-green-200 px-3 py-1 rounded-full text-xs">$180M Savings</span>
            </div>
            
            <Link 
              href="/case-studies/enterprise-ai-transformation-2026-success-story"
              className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 group-hover:scale-105"
            >
              View Case Study
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Implementation Guide */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                📚 MASTER GUIDE
              </span>
              <span className="text-yellow-300 text-sm font-semibold">ULTIMATE</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-200 transition-colors">
              AI 2026 Ultimate Implementation Master Guide
            </h3>
            
            <p className="text-blue-100 mb-6">
              The definitive guide to implementing AI 2026 technologies in your organization. Complete roadmap for achieving 2,500-5,000% ROI.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-indigo-500/30 text-indigo-200 px-3 py-1 rounded-full text-xs">12 Months</span>
              <span className="bg-purple-500/30 text-purple-200 px-3 py-1 rounded-full text-xs">Step-by-Step</span>
              <span className="bg-blue-500/30 text-blue-200 px-3 py-1 rounded-full text-xs">5,000% ROI</span>
            </div>
            
            <Link 
              href="/resources/ai-2026-ultimate-implementation-master-guide"
              className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 group-hover:scale-105"
            >
              Get Master Guide
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI 2026?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of companies already achieving revolutionary success with our AI 2026 technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Get Started Today
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                href="/webinars/ai-2026-revolutionary-breakthroughs"
                className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 border border-white/30"
              >
                Watch Webinar
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-300 mb-2">3,500%</div>
            <div className="text-blue-200">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-300 mb-2">99.8%</div>
            <div className="text-blue-200">Decision Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-300 mb-2">10,000x</div>
            <div className="text-blue-200">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-300 mb-2">500+</div>
            <div className="text-blue-200">Companies Transformed</div>
          </div>
        </div>
      </div>
    </div>
  );
}