import React from 'react';
import Link from 'next/link';

export default function NewContent2026MegaBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">NEW CONTENT 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI Content & Insights
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Discover our latest AI transformation guides, cost optimization strategies, and success stories that are transforming businesses worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Implementation Guide</h3>
                <p className="text-sm opacity-80">Complete 2026 Guide</p>
              </div>
            </div>
            <p className="text-gray-200 mb-4 text-sm">
              Master AI enterprise implementation with proven strategies, ROI frameworks, and implementation roadmaps for 300% ROI.
            </p>
            <Link
              href="/blog/ai-enterprise-implementation-2026"
              className="inline-flex items-center text-blue-300 hover:text-white font-semibold transition-colors"
            >
              Read Guide →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Cost Optimization</h3>
                <p className="text-sm opacity-80">Cut AI Spend by 70%</p>
              </div>
            </div>
            <p className="text-gray-200 mb-4 text-sm">
              Learn proven strategies to reduce AI infrastructure costs by 70% while maintaining performance and efficiency.
            </p>
            <Link
              href="/blog/ai-cost-optimization-2026"
              className="inline-flex items-center text-green-300 hover:text-white font-semibold transition-colors"
            >
              Learn Strategies →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Success Story</h3>
                <p className="text-sm opacity-80">$50M Revenue Growth</p>
              </div>
            </div>
            <p className="text-gray-200 mb-4 text-sm">
              See how a Fortune 500 company achieved $50M revenue growth and 300% ROI through AI transformation.
            </p>
            <Link
              href="/case-studies/ai-transformation-mega-success-2026"
              className="inline-flex items-center text-purple-300 hover:text-white font-semibold transition-colors"
            >
              View Case Study →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/ai-transformation"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Your AI Transformation
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore All Content
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join 10,000+ professionals who trust our AI expertise
          </p>
        </div>
      </div>
    </section>
  );
}