import React from 'react';
import Link from 'next/link';

export default function NewContentShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              🆕 New Content
            </span>
            <span className="text-yellow-200 text-sm">Fresh Updates</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Latest Content & Updates
          </h2>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
            Discover our newest articles, case studies, and insights. Stay updated with the latest AI trends, success stories, and implementation guides.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs font-semibold">
                New Article
              </span>
              <span className="text-yellow-200 text-sm">15 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              AI Revolution 2025: Business Transformation Guide
            </h3>
            <p className="text-yellow-100 mb-4">
              Discover how AI is reshaping industries and creating unprecedented opportunities for growth.
            </p>
            <Link
              href="/blog/ai-revolution-2025"
              className="text-blue-300 font-semibold hover:text-blue-200 transition-colors"
            >
              Read Article →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs font-semibold">
                Success Story
              </span>
              <span className="text-yellow-200 text-sm">E-commerce</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              TechCorp: 90% Efficiency Gain with AI
            </h3>
            <p className="text-yellow-100 mb-4">
              See how TechCorp achieved $500K annual savings and 90% efficiency improvement.
            </p>
            <Link
              href="/case-studies/techcorp-ai-transformation"
              className="text-green-300 font-semibold hover:text-green-200 transition-colors"
            >
              View Case Study →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs font-semibold">
                Featured Guide
              </span>
              <span className="text-yellow-200 text-sm">18 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              AI Healthcare Transformation Guide
            </h3>
            <p className="text-yellow-100 mb-4">
              40% better diagnostics, 60% improved outcomes - how AI is revolutionizing patient care.
            </p>
            <Link
              href="/blog/ai-healthcare-transformation-2025"
              className="text-purple-300 font-semibold hover:text-purple-200 transition-colors"
            >
              Read Guide →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Explore All New Content
          </Link>
        </div>
      </div>
    </section>
  );
}