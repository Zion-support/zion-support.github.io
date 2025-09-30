import React from 'react';
import Link from 'next/link';

export default function NewContent2026ShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            New Content Available
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI 2026 Content
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover breakthrough insights, implementation guides, and success stories that are transforming enterprises worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Automation Revolution</h3>
                <p className="text-sm opacity-80">Complete Implementation Guide</p>
              </div>
            </div>
            <p className="text-gray-200 mb-4">
              Learn how enterprises are achieving 300% ROI and 90% efficiency gains with AI automation strategies.
            </p>
            <Link
              href="/blog/ai-2026-enterprise-automation-revolution"
              className="inline-flex items-center text-blue-300 hover:text-blue-200 font-semibold transition-colors"
            >
              Read Article →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔮</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Quantum AI Breakthrough</h3>
                <p className="text-sm opacity-80">Enterprise Applications</p>
              </div>
            </div>
            <p className="text-gray-200 mb-4">
              Explore how quantum computing is revolutionizing AI with 10,000x faster processing and unbreakable security.
            </p>
            <Link
              href="/blog/ai-2026-quantum-computing-breakthrough"
              className="inline-flex items-center text-purple-300 hover:text-purple-200 font-semibold transition-colors"
            >
              Read Article →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">500% ROI Success Story</h3>
                <p className="text-sm opacity-80">Fortune 500 Case Study</p>
              </div>
            </div>
            <p className="text-gray-200 mb-4">
              See how a Fortune 500 company achieved 500% ROI and 95% efficiency gains through AI transformation.
            </p>
            <Link
              href="/case-studies/ai-2026-enterprise-transformation-success"
              className="inline-flex items-center text-green-300 hover:text-green-200 font-semibold transition-colors"
            >
              View Case Study →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              View All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Browse Case Studies
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join 10,000+ professionals staying ahead with our latest AI insights
          </p>
        </div>
      </div>
    </section>
  );
}