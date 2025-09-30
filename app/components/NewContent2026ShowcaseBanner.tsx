import React from 'react';
import Link from 'next/link';

export default function NewContent2026ShowcaseBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            🚀 New in 2026: Revolutionary AI Content
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the latest AI breakthroughs, success stories, and cutting-edge solutions 
            that are transforming businesses worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-3">Latest AI Trends</h3>
            <p className="text-blue-100 mb-4">
              Explore groundbreaking AI innovations and predictions for 2026 that are 
              reshaping enterprise operations.
            </p>
            <Link 
              href="/blog/ai-2026-revolutionary-breakthroughs"
              className="inline-flex items-center text-white font-semibold hover:text-blue-200 transition-colors"
            >
              Read More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-3">Success Stories</h3>
            <p className="text-blue-100 mb-4">
              Learn how Fortune 500 companies achieved $2.3B in value through 
              comprehensive AI transformation.
            </p>
            <Link 
              href="/case-studies/fortune-500-ai-transformation-2027"
              className="inline-flex items-center text-white font-semibold hover:text-blue-200 transition-colors"
            >
              View Case Study →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-3">Autonomous Systems</h3>
            <p className="text-blue-100 mb-4">
              Discover how autonomous AI enterprise systems can reduce costs by 60% 
              and increase efficiency by 300%.
            </p>
            <Link 
              href="/services/ai-autonomous-enterprise-systems"
              className="inline-flex items-center text-white font-semibold hover:text-blue-200 transition-colors"
            >
              Explore Services →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              View All Content
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Expert Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}