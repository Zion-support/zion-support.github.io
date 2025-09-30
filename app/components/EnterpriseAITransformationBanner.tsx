import React from 'react';
import Link from 'next/link';

export default function EnterpriseAITransformationBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🏢 Enterprise Focus
              </span>
              <span className="text-teal-200 text-sm">Large-Scale Implementation</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Enterprise AI Transformation: Scale & Success Framework
            </h2>
            <p className="text-xl text-teal-100 mb-6 leading-relaxed">
              Transform large enterprises with AI at scale. Our proven framework delivers measurable results across departments, processes, and business units.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/enterprise-ai-transformation-2025"
                className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Framework
              </Link>
              <Link
                href="/services/enterprise-ai-transformation"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors text-center"
              >
                Start Enterprise AI
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">Enterprise Benefits</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📈</span>
                <span>300% ROI across departments</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>90% efficiency improvement</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <span>Enterprise-grade security</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔄</span>
                <span>Scalable implementation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}