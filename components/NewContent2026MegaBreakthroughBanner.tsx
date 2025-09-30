import React from 'react';
import Link from 'next/link';

export default function NewContent2026MegaBreakthroughBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">NEW BREAKTHROUGH CONTENT</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            AI 2026 Revolutionary Breakthroughs:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              The Future is Here
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover the groundbreaking AI innovations transforming enterprises worldwide. 
            Neural superintelligence, quantum AI, and autonomous systems reshaping business forever.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <Link href="/blog/ai-2026-revolutionary-breakthroughs" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                    FEATURED ARTICLE
                  </span>
                  <span className="text-sm opacity-75">25 min read</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                  AI 2026 Revolutionary Breakthroughs: The Future of Enterprise Intelligence
                </h3>
                
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  Explore the groundbreaking AI innovations of 2026 that are reshaping enterprise operations, 
                  achieving unprecedented efficiency gains, and unlocking new possibilities for business transformation.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-300 mb-1">95%</div>
                    <div className="text-xs opacity-75">Decision Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-300 mb-1">1000x</div>
                    <div className="text-xs opacity-75">Processing Speed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-300 mb-1">80%</div>
                    <div className="text-xs opacity-75">Cost Reduction</div>
                  </div>
                </div>
                
                <div className="flex items-center text-yellow-300 font-semibold group-hover:text-yellow-200 transition-colors">
                  Read Full Article →
                </div>
              </div>
            </Link>
          </div>

          {/* Side Content */}
          <div className="space-y-6">
            <Link href="/blog/ai-trends-2026-comprehensive-guide" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-400 text-black px-2 py-1 rounded text-xs font-semibold">
                    COMPREHENSIVE GUIDE
                  </span>
                </div>
                <h4 className="font-bold text-lg mb-2 group-hover:text-blue-300 transition-colors">
                  AI Trends 2026: Complete Enterprise Guide
                </h4>
                <p className="text-sm opacity-90 mb-3">
                  Navigate the rapidly evolving AI landscape with proven strategies and implementation roadmaps.
                </p>
                <div className="flex items-center text-blue-300 font-semibold text-sm">
                  Read Guide →
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-transformation-mega-success-2026" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-400 text-black px-2 py-1 rounded text-xs font-semibold">
                    SUCCESS STORY
                  </span>
                </div>
                <h4 className="font-bold text-lg mb-2 group-hover:text-green-300 transition-colors">
                  $50M ROI in 12 Months: Fortune 500 AI Transformation
                </h4>
                <p className="text-sm opacity-90 mb-3">
                  Discover how a Fortune 500 company achieved unprecedented results through comprehensive AI transformation.
                </p>
                <div className="flex items-center text-green-300 font-semibold text-sm">
                  View Case Study →
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4">
            <Link
              href="/blog"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}