import React from 'react';
import Link from 'next/link';

export default function AIRevolutionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🔮 Revolution
              </span>
              <span className="text-purple-200 text-sm">Business Transformation</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              AI Revolution 2025: Complete Business Transformation Guide
            </h2>
            <p className="text-xl text-purple-100 mb-6 leading-relaxed">
              Discover how AI is reshaping industries and creating unprecedented opportunities for growth in 2025. Learn the strategies that are driving the AI revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-revolution-2025"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Revolution Guide
              </Link>
              <Link
                href="/services/ai-revolution-consulting"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                Join the Revolution
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">Revolution Impact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌍</span>
                <span>Global industry transformation</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💡</span>
                <span>Unprecedented opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <span>Exponential growth potential</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>Competitive advantage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}