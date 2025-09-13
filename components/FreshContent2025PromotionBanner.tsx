import React from 'react';
import Link from 'next/link';

const FreshContent2025PromotionBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 animate-pulse">
            🚀 NEW CONTENT ALERT - 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fresh <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Enterprise AI</span> Content
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Discover the latest enterprise automation strategies, real-world success stories, and proven implementation frameworks that are transforming Fortune 500 companies in 2025.
          </p>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Blog Post */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold mr-3">
                BLOG POST
              </div>
              <div className="text-green-400 text-sm font-semibold">Just Published</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
              AI 2025: Enterprise Automation Mastery
            </h3>
            <p className="text-gray-300 mb-6">
              Master enterprise automation with comprehensive strategies, proven frameworks, and real-world implementation guides that deliver unprecedented ROI.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs">Enterprise AI</span>
              <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-xs">Automation</span>
              <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs">ROI Strategies</span>
            </div>
            <Link href="/blog/ai-2025-enterprise-automation-mastery" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-all">
              Read Full Article
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Case Study */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold mr-3">
                CASE STUDY
              </div>
              <div className="text-green-400 text-sm font-semibold">Featured Success</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
              Global Enterprise AI Transformation
            </h3>
            <p className="text-gray-300 mb-6">
              How a Fortune 500 company achieved $50M+ in cost savings and 500% efficiency gains through strategic AI automation implementation.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs">$50M+ ROI</span>
              <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs">Fortune 500</span>
              <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-xs">500% Efficiency</span>
            </div>
            <Link href="/case-studies/global-enterprise-ai-transformation-2025" className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold group-hover:translate-x-1 transition-all">
              View Case Study
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Proven ROI</h3>
            <p className="text-blue-100">Real case studies showing 300-500% efficiency gains and millions in cost savings</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Strategic Frameworks</h3>
            <p className="text-blue-100">Comprehensive implementation guides and best practices from industry leaders</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Future-Ready</h3>
            <p className="text-blue-100">Latest 2025 trends and cutting-edge AI automation strategies</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Don't Miss Out on These Insights</h3>
            <p className="text-gray-300 mb-6">Join thousands of enterprise leaders who are transforming their organizations with AI automation.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/blog" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all">
                Explore All Content
              </Link>
              <Link href="/case-studies" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all">
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshContent2025PromotionBanner;