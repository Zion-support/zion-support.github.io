import React from 'react';
import Link from 'next/link';

export default function AIGovernanceBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🛡️ Governance
              </span>
              <span className="text-slate-200 text-sm">Risk Management</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              AI Governance Framework 2025: Enterprise Implementation Guide
            </h2>
            <p className="text-xl text-slate-100 mb-6 leading-relaxed">
              Master AI governance with 70% risk reduction and comprehensive enterprise frameworks. Ensure compliance, security, and ethical AI implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-governance-framework-2025"
                className="bg-white text-slate-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Framework Guide
              </Link>
              <Link
                href="/services/ai-governance"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-colors text-center"
              >
                Implement Governance
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">Governance Benefits</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📉</span>
                <span>70% risk reduction</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📋</span>
                <span>Compliance frameworks</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔒</span>
                <span>Security protocols</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚖️</span>
                <span>Ethical AI practices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}