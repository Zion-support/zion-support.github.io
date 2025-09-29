import React from 'react';
import Link from 'next/link';

export default function NewContent2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold mb-6">
            <span className="w-4 h-4 mr-2">✨</span>
            NEW 2026 CONTENT
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Next-Gen Automation</h3>
                <p className="text-sm opacity-80">99% efficiency</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Revolutionary AI automation guide showing how to achieve 99% process automation 
              with intelligent, self-evolving systems that drive $10M+ savings.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm opacity-75">25 min read</div>
              <Link
                href="/blog/ai-next-generation-automation-2026"
                className="text-white font-semibold hover:text-yellow-200 transition-colors"
              >
                Read Guide →
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💬</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Customer Experience Revolution</h3>
                <p className="text-sm opacity-80">95% satisfaction</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Transform customer service with hyper-personalization, predictive support, 
              and intelligent automation that delivers 95% satisfaction rates.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm opacity-75">20 min read</div>
              <Link
                href="/blog/ai-customer-experience-revolution-2026"
                className="text-white font-semibold hover:text-yellow-200 transition-colors"
              >
                Read Guide →
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">$25M Success Story</h3>
                <p className="text-sm opacity-80">Fortune 500 case study</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              See how a Fortune 500 company achieved $25M ROI with comprehensive AI transformation. 
              99% automation, 90% cost reduction, and complete business revolution.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm opacity-75">30 min read</div>
              <Link
                href="/case-studies/ai-transformation-mega-success-2026"
                className="text-white font-semibold hover:text-yellow-200 transition-colors"
              >
                View Case Study →
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
          >
            Explore All AI Content
          </Link>
        </div>
      </div>
    </section>
  );
}