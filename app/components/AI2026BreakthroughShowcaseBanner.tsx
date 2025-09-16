import React from 'react';
import Link from 'next/link';

export default function AI2026BreakthroughShowcaseBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-purple-100 text-purple-700 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-semibold">🔥 BREAKTHROUGH CONTENT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI 2026 Breakthrough Showcase
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the latest breakthroughs in AI technology and how they're transforming 
              businesses across industries in 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="font-bold text-gray-900 mb-2">Autonomous Agents</h3>
              <p className="text-sm text-gray-600 mb-3">Self-managing AI systems</p>
              <Link 
                href="/content/ai-2026-autonomous-agents"
                className="text-purple-600 font-semibold text-sm hover:text-purple-800"
              >
                Learn More →
              </Link>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Quantum AI</h3>
              <p className="text-sm text-gray-600 mb-3">Quantum-powered intelligence</p>
              <Link 
                href="/content/ai-2026-quantum-ai-business-revolution"
                className="text-blue-600 font-semibold text-sm hover:text-blue-800"
              >
                Explore →
              </Link>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-2xl mb-2">🔧</div>
              <h3 className="font-bold text-gray-900 mb-2">Hyperautomation</h3>
              <p className="text-sm text-gray-600 mb-3">End-to-end automation</p>
              <Link 
                href="/content/ai-2026-hyperautomation"
                className="text-green-600 font-semibold text-sm hover:text-green-800"
              >
                Discover →
              </Link>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="text-2xl mb-2">🛡️</div>
              <h3 className="font-bold text-gray-900 mb-2">AI Security</h3>
              <p className="text-sm text-gray-600 mb-3">Enterprise-grade protection</p>
              <Link 
                href="/content/ai-2026-security"
                className="text-orange-600 font-semibold text-sm hover:text-orange-800"
              >
                Secure →
              </Link>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-4">
              <Link
                href="/content"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                View All Breakthroughs
              </Link>
              <Link
                href="/contact"
                className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Get Implementation Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}