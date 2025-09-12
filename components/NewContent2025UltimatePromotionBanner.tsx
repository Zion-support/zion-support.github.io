import React from 'react';
import Link from 'next/link';

export default function NewContent2025UltimatePromotionBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 ULTIMATE 2025 CONTENT LAUNCH</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI 2025 Content Just Released!
          </h2>
          
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover our latest breakthrough content: Enterprise Automation Mastery, 1200% ROI Success Stories, 
            and the Ultimate Implementation Toolkit. Everything you need for AI success in 2025.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Link
              href="/blog/ai-2025-enterprise-automation-mastery"
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-30 transition-all"
            >
              <div className="text-2xl mb-2">🏢</div>
              <div className="font-semibold">Enterprise Automation Mastery</div>
              <div className="text-sm opacity-80">Complete 2025 implementation guide with 40% cost reduction</div>
            </Link>
            
            <Link
              href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-30 transition-all"
            >
              <div className="text-2xl mb-2">🏆</div>
              <div className="font-semibold">1200% ROI Success Story</div>
              <div className="text-sm opacity-80">Fortune 500 transformation case study</div>
            </Link>
            
            <Link
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-30 transition-all"
            >
              <div className="text-2xl mb-2">🛠️</div>
              <div className="font-semibold">Ultimate Implementation Toolkit</div>
              <div className="text-sm opacity-80">200+ pages of templates, guides, and frameworks</div>
            </Link>
            
            <Link
              href="/blog"
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-30 transition-all"
            >
              <div className="text-2xl mb-2">📚</div>
              <div className="font-semibold">Complete Content Library</div>
              <div className="text-sm opacity-80">Access all our AI insights and resources</div>
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-2025-enterprise-automation-mastery"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              🔥 Read Enterprise Guide
            </Link>
            <Link
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              📥 Download Free Toolkit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}