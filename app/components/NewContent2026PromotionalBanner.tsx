import React from 'react';
import Link from 'next/link';

export default function NewContent2026PromotionalBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            New 2026 Content Available
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI Breakthroughs & Enterprise Transformation
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Discover the latest AI innovations, transformation strategies, and success stories 
            that are reshaping industries in 2026. Get exclusive insights and proven frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-2026-revolutionary-breakthroughs" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                AI 2026 Revolutionary Breakthroughs
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Discover quantum AI, autonomous systems, and edge computing breakthroughs 
                that are transforming industries in 2026.
              </p>
              <div className="flex items-center text-cyan-300 font-semibold text-sm">
                Read Article →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-enterprise-transformation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <div>
                  <span className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Featured Guide
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors">
                AI Enterprise Transformation 2026
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Complete implementation guide with proven strategies, ROI frameworks, 
                and step-by-step roadmaps for 300% ROI.
              </p>
              <div className="flex items-center text-green-300 font-semibold text-sm">
                Read Guide →
              </div>
            </div>
          </Link>

          <Link href="/case-studies/global-manufacturer-ai-transformation" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏭</span>
                </div>
                <div>
                  <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-300 transition-colors">
                Global Manufacturer: 90% Efficiency & $12M Savings
              </h3>
              <p className="text-sm opacity-90 mb-4">
                See how a Fortune 500 manufacturer achieved remarkable results through 
                comprehensive AI transformation.
              </p>
              <div className="flex items-center text-orange-300 font-semibold text-sm">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              View All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Browse Case Studies
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join 10,000+ professionals staying ahead with AI insights
          </p>
        </div>
      </div>
    </section>
  );
}