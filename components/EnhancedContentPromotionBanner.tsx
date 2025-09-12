import React from 'react';
import Link from 'next/link';

export default function EnhancedContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🚀 New AI Content Just Released!
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover our latest AI insights, case studies, and implementation guides
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-3">Latest Blog Posts</h3>
            <p className="text-sm opacity-90 mb-4">
              Fresh insights on AI trends, enterprise transformation, and autonomous vehicles
            </p>
            <Link 
              href="/blog/ai-2025-generative-ai-enterprise-revolution" 
              className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Read Now
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">📖</div>
            <h3 className="text-xl font-semibold mb-3">New Resources</h3>
            <p className="text-sm opacity-90 mb-4">
              Comprehensive playbooks and implementation guides for AI success
            </p>
            <Link 
              href="/resources/ai-2025-comprehensive-implementation-playbook" 
              className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Download Free
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">💼</div>
            <h3 className="text-xl font-semibold mb-3">Success Stories</h3>
            <p className="text-sm opacity-90 mb-4">
              Real-world case studies showing 400% ROI and transformation results
            </p>
            <Link 
              href="/case-studies/ai-transformation-global-retail-giant-2025" 
              className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              View Case Study
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="text-sm">🔥 Trending Now:</span>
            <span className="text-sm font-medium">AI 2026 Strategy Playbook</span>
            <span className="text-sm">•</span>
            <span className="text-sm font-medium">Generative AI Enterprise Guide</span>
            <span className="text-sm">•</span>
            <span className="text-sm font-medium">Autonomous Vehicles Revolution</span>
          </div>
        </div>
      </div>
    </div>
  );
}