import React from 'react';
import Link from 'next/link';

export default function NewContent2026MegaBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 NEW 2026 CONTENT
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
              JUST PUBLISHED
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content Just Released
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover groundbreaking AI insights, quantum computing breakthroughs, and mega success stories 
            that are transforming industries in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* AI Automation Revolution Article */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-purple-500 px-3 py-1 rounded-full text-xs font-semibold">
                Featured Article
              </span>
              <span className="text-white/80 text-sm">25 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              AI 2026 Enterprise Automation Revolution
            </h3>
            <p className="text-white/90 mb-4 text-sm">
              Complete guide to transforming your business with next-generation AI automation. 
              Achieve 400% efficiency gains and complete digital transformation.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4 text-sm">
                <span className="bg-white/20 px-2 py-1 rounded">400% Efficiency</span>
                <span className="bg-white/20 px-2 py-1 rounded">80% Cost Reduction</span>
              </div>
            </div>
            <Link
              href="/blog/ai-2026-enterprise-automation-revolution"
              className="inline-block bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Article →
            </Link>
          </div>

          {/* Quantum Computing Breakthrough */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-indigo-500 px-3 py-1 rounded-full text-xs font-semibold">
                Revolutionary
              </span>
              <span className="text-white/80 text-sm">30 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              AI Quantum Computing Breakthrough 2026
            </h3>
            <p className="text-white/90 mb-4 text-sm">
              The quantum leap that changed everything. Discover how quantum computing achieved 
              1000x processing speeds and unlocked AI capabilities beyond imagination.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4 text-sm">
                <span className="bg-white/20 px-2 py-1 rounded">1000x Faster</span>
                <span className="bg-white/20 px-2 py-1 rounded">99.9% Accuracy</span>
              </div>
            </div>
            <Link
              href="/blog/ai-quantum-computing-breakthrough-2026"
              className="inline-block bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Article →
            </Link>
          </div>

          {/* Manufacturing Success Story */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-500 px-3 py-1 rounded-full text-xs font-semibold">
                Mega Success
              </span>
              <span className="text-white/80 text-sm">Manufacturing</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              AI Autonomous Manufacturing Mega Success
            </h3>
            <p className="text-white/90 mb-4 text-sm">
              How a global manufacturer achieved $50M annual savings, 95% efficiency improvement, 
              and complete autonomous operations through AI transformation.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4 text-sm">
                <span className="bg-white/20 px-2 py-1 rounded">$50M Savings</span>
                <span className="bg-white/20 px-2 py-1 rounded">95% Efficiency</span>
              </div>
            </div>
            <Link
              href="/case-studies/ai-autonomous-manufacturing-mega-success-2026"
              className="inline-block bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Case Study →
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* FinTech Quantum Transformation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-purple-500 px-3 py-1 rounded-full text-xs font-semibold">
                Quantum Success
              </span>
              <span className="text-white/80 text-sm">FinTech</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              AI FinTech Quantum Transformation 2026
            </h3>
            <p className="text-white/90 mb-4 text-sm">
              See how a leading FinTech achieved $100M revenue increase, 99.9% security improvement, 
              and quantum-powered trading capabilities.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4 text-sm">
                <span className="bg-white/20 px-2 py-1 rounded">$100M Revenue</span>
                <span className="bg-white/20 px-2 py-1 rounded">99.9% Security</span>
              </div>
            </div>
            <Link
              href="/case-studies/ai-fintech-quantum-transformation-2026"
              className="inline-block bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Case Study →
            </Link>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">
              🎯 Stay Ahead of the AI Revolution
            </h3>
            <p className="text-white/90 mb-6">
              Get exclusive access to the latest AI breakthroughs, quantum computing insights, 
              and transformation strategies delivered weekly.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-white/80">
                Join 50,000+ AI pioneers. Unsubscribe anytime.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20">
              <div className="flex items-center gap-4 text-sm">
                <span className="text-white/80">📧 Weekly insights</span>
                <span className="text-white/80">🚀 Exclusive content</span>
                <span className="text-white/80">💡 Expert analysis</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Don't let your competitors gain the advantage. Start your AI transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
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