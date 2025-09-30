import React from 'react';
import Link from 'next/link';

export default function AIBusinessTransformationBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🔄 Transformation
              </span>
              <span className="text-slate-200 text-sm">Business Strategy</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              AI Business Transformation: Complete Strategy Guide
            </h2>
            <p className="text-xl text-slate-100 mb-6 leading-relaxed">
              Transform your business with AI-powered solutions. Learn proven strategies for digital transformation, process automation, and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-business-transformation-2025"
                className="bg-white text-slate-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Strategy Guide
              </Link>
              <Link
                href="/services/ai-business-transformation"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-colors text-center"
              >
                Start Transformation
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">Transformation Areas</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏢</span>
                <span>Business Process Automation</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <span>Data-Driven Decision Making</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span>Customer Experience Enhancement</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>Operational Efficiency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}