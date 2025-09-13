import React from 'react';
import Link from 'next/link';

export default function NewContent2025ShowcaseBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">
            🚀 New Content Alert: 2025 AI Revolution
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover cutting-edge insights, proven strategies, and real-world success stories that will transform your AI journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Blog Post */}
          <Link href="/blog/ai-2025-next-generation-automation-trends" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-center">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-bold mb-2">Next-Gen Automation Trends</h3>
              <p className="text-sm opacity-80 mb-4">
                Explore the revolutionary automation trends that will define 2025 and beyond
              </p>
              <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold group-hover:bg-blue-400 transition-colors">
                Read Article
              </div>
            </div>
          </Link>

          {/* Tutorial */}
          <Link href="/tutorials/ai-implementation-mastery-2025" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-center">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="text-lg font-bold mb-2">AI Implementation Mastery</h3>
              <p className="text-sm opacity-80 mb-4">
                Complete guide to successful AI implementation and enterprise transformation
              </p>
              <div className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold group-hover:bg-purple-400 transition-colors">
                Start Learning
              </div>
            </div>
          </Link>

          {/* Case Study */}
          <Link href="/case-studies/ai-2025-global-enterprise-transformation-50000-roi" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-center">
              <div className="text-3xl mb-3">💎</div>
              <h3 className="text-lg font-bold mb-2">$50K ROI Success Story</h3>
              <p className="text-sm opacity-80 mb-4">
                How a Fortune 500 company achieved unprecedented ROI through AI transformation
              </p>
              <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold group-hover:bg-green-400 transition-colors">
                View Case Study
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Fresh Content Added</span>
            </div>
            <div className="text-sm opacity-80">Updated Today</div>
          </div>
        </div>
      </div>
    </div>
  );
}