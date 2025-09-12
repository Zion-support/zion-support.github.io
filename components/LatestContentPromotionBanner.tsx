import React from 'react';
import Link from 'next/link';

export default function LatestContentPromotionBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 JUST PUBLISHED - JANUARY 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            🚀 Fresh AI & Business Insights
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            New this week: AI Workforce Transformation, Data Privacy Compliance, Green AI Sustainability, 
            and comprehensive implementation guides. Expert insights to accelerate your growth in 2025.
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

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/blog/ai-workforce-transformation-2025" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👥</div>
              <h3 className="text-lg font-semibold mb-2">AI Workforce Transformation 2025</h3>
              <p className="text-sm opacity-90 mb-3">Reskilling strategies for the AI era</p>
              <div className="flex items-center text-xs opacity-75">
                <span>18 min read</span>
                <span className="mx-2">•</span>
                <span>New</span>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-data-privacy-compliance-2025" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔒</div>
              <h3 className="text-lg font-semibold mb-2">AI Data Privacy & Compliance 2025</h3>
              <p className="text-sm opacity-90 mb-3">Complete guide to AI privacy regulations</p>
              <div className="flex items-center text-xs opacity-75">
                <span>22 min read</span>
                <span className="mx-2">•</span>
                <span>Critical</span>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-sustainability-green-tech-2025" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
              <h3 className="text-lg font-semibold mb-2">AI Sustainability & Green Tech 2025</h3>
              <p className="text-sm opacity-90 mb-3">Building eco-friendly AI systems</p>
              <div className="flex items-center text-xs opacity-75">
                <span>20 min read</span>
                <span className="mx-2">•</span>
                <span>Trending</span>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-sustainability-transformation-2025" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏭</div>
              <h3 className="text-lg font-semibold mb-2">AI Sustainability Success Story</h3>
              <p className="text-sm opacity-90 mb-3">60% energy reduction, carbon neutrality</p>
              <div className="flex items-center text-xs opacity-75">
                <span>Case Study</span>
                <span className="mx-2">•</span>
                <span>New</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <Link href="/blog/ai-customer-support-automation-2025" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎧</div>
              <h3 className="text-lg font-semibold mb-2">AI Support Automation 2025</h3>
              <p className="text-sm opacity-90 mb-3">Resolve faster, cut costs</p>
              <div className="flex items-center text-xs opacity-75">
                <span>9 min read</span>
                <span className="mx-2">•</span>
                <span>New</span>
              </div>
            </div>
          </Link>

          <Link href="/blog/llm-guardrails-in-production-2025" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
              <h3 className="text-lg font-semibold mb-2">LLM Guardrails in Production</h3>
              <p className="text-sm opacity-90 mb-3">Safety without blocking delivery</p>
              <div className="flex items-center text-xs opacity-75">
                <span>8 min read</span>
                <span className="mx-2">•</span>
                <span>Trending</span>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/edge-ai-privacy-by-design-2025" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔐</div>
              <h3 className="text-lg font-semibold mb-2">Edge AI: Privacy by Design</h3>
              <p className="text-sm opacity-90 mb-3">On-device intelligence for instant, compliant CX</p>
              <div className="flex items-center text-xs opacity-75">
                <span>7 min read</span>
                <span className="mx-2">•</span>
                <span>New</span>
              </div>
            </div>
          </Link>

          <Link href="/resources/ai-workforce-transformation-playbook-2025" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
              <h3 className="text-lg font-semibold mb-2">AI Workforce Transformation Playbook</h3>
              <p className="text-sm opacity-90 mb-3">150+ pages of templates, checklists, and strategies</p>
              <div className="flex items-center text-xs opacity-75">
                <span>Free Download</span>
                <span className="mx-2">•</span>
                <span>150+ pages</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-8">
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
            Download Resources
          </Link>
        </div>
      </div>
    </section>
  );
}