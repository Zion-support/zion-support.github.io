import React from 'react';
import Link from 'next/link';

export default function NewContent2026PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 NEW: AI 2026 Content Collection
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-6">
            Revolutionary AI insights, case studies, and implementation guides for 2026
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">📊 600% ROI Case Study</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">🎯 Master Implementation Guide</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">🏢 Enterprise Automation</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">🛠️ Complete Toolkit</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3">📈 Enterprise Automation Revolution</h3>
            <p className="text-blue-100 mb-4">
              Discover how AI automation is transforming enterprise operations with 340% average ROI and unprecedented efficiency gains.
            </p>
            <Link 
              href="/blog/ai-2026-enterprise-automation-revolution"
              className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Read Article →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3">🏪 Global Retail Success Story</h3>
            <p className="text-blue-100 mb-4">
              Learn how a Fortune 50 retailer achieved 600% ROI through comprehensive AI transformation across 2,500+ stores.
            </p>
            <Link 
              href="/case-studies/ai-2026-global-retail-transformation-success"
              className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Case Study →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3">📚 Implementation Master Guide</h3>
            <p className="text-blue-100 mb-4">
              The complete blueprint for AI implementation in 2026. Everything you need for successful transformation.
            </p>
            <Link 
              href="/resources/ai-2026-implementation-master-guide"
              className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Guide →
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <Link 
              href="/mega-content-showcase-2026"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View All 2026 Content
            </Link>
            <Link 
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Implementation Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}