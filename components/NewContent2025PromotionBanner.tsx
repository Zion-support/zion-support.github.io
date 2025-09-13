import React from 'react';
import Link from 'next/link';

export default function NewContent2025PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
            🚀 NEW CONTENT RELEASED
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI 2025 Content Now Available
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover breakthrough AI strategies, implementation guides, and success stories that deliver 2,500-5,000% ROI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-2xl mb-3">📚</div>
            <h3 className="text-lg font-bold mb-2">Advanced Automation Mastery</h3>
            <p className="text-blue-100 text-sm mb-4">
              Complete guide to implementing revolutionary AI automation solutions
            </p>
            <Link 
              href="/blog/ai-2025-advanced-automation-mastery"
              className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Guide →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-2xl mb-3">🏆</div>
            <h3 className="text-lg font-bold mb-2">Global Transformation Success</h3>
            <p className="text-blue-100 text-sm mb-4">
              How a Fortune 500 company achieved 10,000% ROI with AI transformation
            </p>
            <Link 
              href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
              className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              View Case Study →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-2xl mb-3">🛠️</div>
            <h3 className="text-lg font-bold mb-2">Ultimate Implementation Guide</h3>
            <p className="text-blue-100 text-sm mb-4">
              Step-by-step framework for AI implementation with proven results
            </p>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-guide"
              className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Guide →
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            href="/content-showcase"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore All New Content
          </Link>
        </div>
      </div>
    </div>
  );
}