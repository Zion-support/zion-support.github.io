import React from 'react';
import Link from 'next/link';

export default function AIEnterpriseAdoptionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                📈 Adoption Guide
              </span>
              <span className="text-green-200 text-sm">Complete Framework</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              AI Enterprise Adoption 2025: Complete Implementation Guide
            </h2>
            <p className="text-xl text-green-100 mb-6 leading-relaxed">
              Master AI enterprise adoption with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI and transform your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-enterprise-adoption-2025"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Complete Guide
              </Link>
              <Link
                href="/services/ai-adoption-consulting"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-center"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">Adoption Framework</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span>Strategic Planning</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <span>ROI Measurement</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚙️</span>
                <span>Implementation Roadmap</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <span>Risk Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}