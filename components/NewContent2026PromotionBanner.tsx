import React from 'react';
import Link from 'next/link';

export default function NewContent2026PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold">🚀 NEW CONTENT 2026</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content for 2026
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover cutting-edge AI insights, implementation guides, and success stories that will transform your business in 2026
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-2xl mb-3">🧠</div>
            <h3 className="text-lg font-semibold mb-2">Advanced Autonomous Systems</h3>
            <p className="text-blue-100 text-sm mb-4">
              Explore the latest breakthroughs in AI-powered autonomous systems revolutionizing industries worldwide.
            </p>
            <Link 
              href="/blog/ai-2026-advanced-autonomous-systems"
              className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors"
            >
              Read More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-2xl mb-3">📚</div>
            <h3 className="text-lg font-semibold mb-2">Enterprise Implementation Guide</h3>
            <p className="text-blue-100 text-sm mb-4">
              Complete master guide for implementing AI solutions in enterprise environments with proven strategies.
            </p>
            <Link 
              href="/resources/ai-2026-enterprise-implementation-master-guide"
              className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Guide →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-2xl mb-3">🏆</div>
            <h3 className="text-lg font-semibold mb-2">Global Retail Success Story</h3>
            <p className="text-blue-100 text-sm mb-4">
              Learn how a global retail giant achieved 60% revenue growth through comprehensive AI transformation.
            </p>
            <Link 
              href="/case-studies/ai-2026-global-retail-transformation-success"
              className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors"
            >
              View Case Study →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-wrap gap-4 justify-center">
            <Link 
              href="/mega-content-showcase-2026"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore All 2026 Content
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}