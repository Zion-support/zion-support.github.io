import React from 'react';
import Link from 'next/link';

export default function UltraContentPromotionBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 JUST PUBLISHED - JANUARY 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            🚀 Revolutionary AI Content Just Dropped
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our latest breakthrough content: Quantum AI, Neural Interfaces, Space Exploration, 
            and the Complete AI Implementation Master Guide. Everything you need to dominate AI in 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              📚 Read Latest Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg" 
            >
              📋 Download Free Resources
            </Link>
          </div>
        </div>

        {/* Featured New Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/blog/ai-2025-enterprise-automation-revolution" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏭</div>
              <h3 className="text-lg font-semibold mb-2">AI Enterprise Automation Revolution</h3>
              <p className="text-sm opacity-90 mb-3">300% efficiency gains and $50M+ cost savings</p>
              <div className="flex items-center text-xs opacity-75">
                <span>25 min read</span>
                <span className="mx-2">•</span>
                <span>New</span>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-2025-quantum-computing-breakthrough" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚛️</div>
              <h3 className="text-lg font-semibold mb-2">Quantum Computing Breakthrough</h3>
              <p className="text-sm opacity-90 mb-3">1000x speed improvement with quantum AI</p>
              <div className="flex items-center text-xs opacity-75">
                <span>32 min read</span>
                <span className="mx-2">•</span>
                <span>Breakthrough</span>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-2025-neural-interface-revolution" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🧠</div>
              <h3 className="text-lg font-semibold mb-2">Neural Interface Revolution</h3>
              <p className="text-sm opacity-90 mb-3">95% accuracy in brain-computer integration</p>
              <div className="flex items-center text-xs opacity-75">
                <span>28 min read</span>
                <span className="mx-2">•</span>
                <span>Revolutionary</span>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-2025-space-exploration-breakthrough" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
              <h3 className="text-lg font-semibold mb-2">Space Exploration Breakthrough</h3>
              <p className="text-sm opacity-90 mb-3">99.7% mission success with autonomous AI</p>
              <div className="flex items-center text-xs opacity-75">
                <span>Case Study</span>
                <span className="mx-2">•</span>
                <span>Breakthrough</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Content Showcase */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/resources/ai-2025-complete-implementation-master-guide" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
              <h3 className="text-lg font-semibold mb-2">Complete AI Implementation Guide</h3>
              <p className="text-sm opacity-90 mb-3">200+ pages of strategies, templates, and case studies</p>
              <div className="flex items-center text-xs opacity-75">
                <span>Free Download</span>
                <span className="mx-2">•</span>
                <span>200+ pages</span>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-2025-enterprise-automation-revolution" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
              <h3 className="text-lg font-semibold mb-2">AI Automation Masterclass</h3>
              <p className="text-sm opacity-90 mb-3">Complete guide to enterprise AI transformation</p>
              <div className="flex items-center text-xs opacity-75">
                <span>45 min read</span>
                <span className="mx-2">•</span>
                <span>Masterclass</span>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-2025-space-exploration-breakthrough" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌌</div>
              <h3 className="text-lg font-semibold mb-2">Space AI Success Stories</h3>
              <p className="text-sm opacity-90 mb-3">$2.3B in cost savings through AI space missions</p>
              <div className="flex items-center text-xs opacity-75">
                <span>Case Study</span>
                <span className="mx-2">•</span>
                <span>Success</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block mr-4"
          >
            View All Articles
          </Link>
          <Link
            href="/resources"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-block"
          >
            Download All Resources
          </Link>
        </div>
      </div>
    </section>
  );
}