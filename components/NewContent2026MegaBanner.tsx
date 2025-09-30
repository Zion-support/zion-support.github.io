import React from 'react';
import Link from 'next/link';

export default function NewContent2026MegaBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">New Content Available</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Revolutionary AI Content
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                Now Live
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover the latest AI innovations, success stories, and implementation guides 
              that are transforming businesses worldwide in 2026.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Featured Blog Post */}
            <Link href="/blog/ai-2026-revolutionary-automation" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Revolutionary
                  </span>
                  <span className="text-sm text-gray-300">15 min read</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  AI 2026: Revolutionary Automation
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Discover how revolutionary AI automation technologies are reshaping every 
                  industry with 300% ROI and 90% efficiency gains.
                </p>
                <div className="flex items-center text-cyan-400 font-semibold text-sm">
                  Read Article →
                </div>
              </div>
            </Link>

            {/* Implementation Guide */}
            <Link href="/blog/ai-enterprise-transformation-2026" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Implementation Guide
                  </span>
                  <span className="text-sm text-gray-300">25 min read</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  AI Enterprise Transformation 2026
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Master AI enterprise transformation with our comprehensive guide featuring 
                  proven strategies and 300% ROI frameworks.
                </p>
                <div className="flex items-center text-cyan-400 font-semibold text-sm">
                  Read Guide →
                </div>
              </div>
            </Link>

            {/* Success Story */}
            <Link href="/case-studies/ai-automation-mega-success-2026" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-sm text-gray-300">12 min read</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  AI Automation Mega Success
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  See how a Fortune 500 company achieved 400% ROI and 95% efficiency gains 
                  in just 6 months with our AI solutions.
                </p>
                <div className="flex items-center text-cyan-400 font-semibold text-sm">
                  View Case Study →
                </div>
              </div>
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-sm text-gray-300">Efficiency Gains</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-sm text-gray-300">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">$2M+</div>
              <div className="text-sm text-gray-300">Cost Savings</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore All Content
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
            
            <p className="text-gray-300 text-sm">
              Join 10,000+ professionals staying ahead with our latest AI insights and strategies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}