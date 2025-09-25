import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContentBanner2026() {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 REVOLUTIONARY CONTENT 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🚀 Fresh AI & Business Insights Just Dropped
          </h2>
          
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our latest expert insights, case studies, and resources. From AI enterprise transformation 
            to startup funding strategies, get the knowledge you need to succeed in 2025.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link href="/blog/ai-2025-enterprise-automation-mastery" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏢</div>
              <h3 className="text-lg font-semibold mb-2">AI 2025 Enterprise Automation Mastery</h3>
              <p className="text-sm opacity-90 mb-3">Complete implementation guide with 40% cost reduction and 300% productivity gains</p>
              <div className="flex items-center text-xs opacity-75">
                <span>20 min read</span>
                <span className="mx-2">•</span>
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">NEW</span>
              </div>
            </div>
          </Link>
          
          <Link href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
              <h3 className="text-lg font-semibold mb-2">Global Enterprise Transformation</h3>
              <p className="text-sm opacity-90 mb-3">Fortune 500 case study showing 1200% ROI and $2.4B cost savings</p>
              <div className="flex items-center text-xs opacity-75">
                <span>15 min read</span>
                <span className="mx-2">•</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">BREAKTHROUGH</span>
              </div>
            </div>
          </Link>

          <Link href="/resources/ai-2025-ultimate-implementation-toolkit" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
              <h3 className="text-lg font-semibold mb-2">Ultimate Implementation Toolkit</h3>
              <p className="text-sm opacity-90 mb-3">200+ pages of checklists, templates, and frameworks for AI success</p>
              <div className="flex items-center text-xs opacity-75">
                <span>Free Download</span>
                <span className="mx-2">•</span>
                <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">ESSENTIAL</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block mr-4"
            >
              📚 View All Articles
            </Link>
            <Link
              href="/case-studies"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block mr-4"
            >
              📊 Browse Case Studies
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors inline-block"
            >
              📥 Download Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}