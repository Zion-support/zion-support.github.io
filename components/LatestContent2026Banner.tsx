import React from 'react';
import Link from 'next/link';

export default function LatestContent2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <span className="w-5 h-5 mr-2">🔥</span>
            <span className="font-semibold text-lg">LATEST 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* AI Mega Trends */}
          <Link href="/blog/ai-2026-mega-trends" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔮</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">AI Mega Trends 2026</h3>
                  <p className="text-sm opacity-75">Complete Enterprise Guide</p>
                </div>
              </div>
              <p className="opacity-90 mb-6">
                Discover the 15 mega trends reshaping enterprise AI. From autonomous operations to quantum computing, 
                learn how to capitalize on $50B+ market opportunities.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm opacity-75">45 min read</div>
                <div className="flex items-center text-white font-semibold group-hover:text-yellow-200 transition-colors">
                  Read Mega Trends →
                </div>
              </div>
            </div>
          </Link>

          {/* AI Enterprise Automation */}
          <Link href="/blog/ai-enterprise-automation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">AI Enterprise Automation</h3>
                  <p className="text-sm opacity-75">Complete Transformation Guide</p>
                </div>
              </div>
              <p className="opacity-90 mb-6">
                Transform your enterprise with AI automation. 95% process efficiency, $5M+ savings, 
                and zero-touch operations with comprehensive implementation strategies.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm opacity-75">18 min read</div>
                <div className="flex items-center text-white font-semibold group-hover:text-yellow-200 transition-colors">
                  Read Guide →
                </div>
              </div>
            </div>
          </Link>

          {/* Fortune 500 Success Story */}
          <Link href="/case-studies/ai-autonomous-enterprise-success-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">$25M Success Story</h3>
                  <p className="text-sm opacity-75">Fortune 500 Case Study</p>
                </div>
              </div>
              <p className="opacity-90 mb-6">
                See how a Fortune 500 company achieved $25M ROI with comprehensive AI transformation. 
                99.9% uptime, 90% cost reduction, and complete business revolution.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm opacity-75">30 min read</div>
                <div className="flex items-center text-white font-semibold group-hover:text-yellow-200 transition-colors">
                  View Success Story →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">$50B+</div>
            <div className="text-sm opacity-75">Market Opportunity</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
            <div className="text-sm opacity-75">Automation Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">$25M+</div>
            <div className="text-sm opacity-75">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
            <div className="text-sm opacity-75">System Uptime</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
          >
            Explore All AI Content
          </Link>
          <Link
            href="/case-studies"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all"
          >
            View All Success Stories
          </Link>
          <a
            href="tel:+13024640950"
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-all"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}