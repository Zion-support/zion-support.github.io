import React from 'react';
import Link from 'next/link';

export default function NewContent2025PromotionalBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🚀 NEW CONTENT ALERT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI Content for 2025
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover cutting-edge AI strategies, implementation guides, and success stories that are transforming businesses worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Featured Article 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
                FEATURED
              </span>
              <span className="text-sm opacity-75">15 min read</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              AI Mega Trends 2025: Complete Business Transformation Guide
            </h3>
            <p className="text-white/90 mb-6">
              Discover the revolutionary AI trends reshaping business operations, driving 300% ROI improvements and creating unprecedented competitive advantages.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 text-sm">
                <span>300% ROI</span>
                <span>•</span>
                <span>90% Efficiency</span>
                <span>•</span>
                <span>$50M+ Savings</span>
              </div>
            </div>
            <Link
              href="/blog/ai-2025-mega-trends"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Full Guide →
            </Link>
          </div>

          {/* Featured Article 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-400 text-green-900 px-2 py-1 rounded-full text-xs font-semibold">
                NEW
              </span>
              <span className="text-sm opacity-75">18 min read</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              AI Business Automation 2025: Complete Implementation Guide
            </h3>
            <p className="text-white/90 mb-6">
              Transform your business with AI automation achieving 95% process automation, 80% cost reduction, and $2M+ annual savings.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 text-sm">
                <span>95% Automation</span>
                <span>•</span>
                <span>80% Cost Reduction</span>
                <span>•</span>
                <span>$2M+ Savings</span>
              </div>
            </div>
            <Link
              href="/blog/ai-business-automation-2025"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Full Guide →
            </Link>
          </div>
        </div>

        {/* Additional Content Highlights */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-center">More Revolutionary Content</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold mb-2">AI Edge Computing</h4>
              <p className="text-sm opacity-90">Sub-50ms response times</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🛡️</div>
              <h4 className="font-bold mb-2">AI Cybersecurity</h4>
              <p className="text-sm opacity-90">99.7% threat detection</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💰</div>
              <h4 className="font-bold mb-2">Finance Automation</h4>
              <p className="text-sm opacity-90">$3M+ annual savings</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-lg mb-6 opacity-90">
            Ready to transform your business with AI? Get expert guidance and implementation support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore All Content
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}