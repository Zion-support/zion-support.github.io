import React from 'react';
import Link from 'next/link';

export default function AIAutonomousSystemsBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🤖 Latest Innovation
              </span>
              <span className="text-emerald-200 text-sm">January 2025</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              AI Autonomous Systems: Enterprise Implementation Guide
            </h2>
            <p className="text-xl text-emerald-100 mb-6 leading-relaxed">
              Deploy autonomous AI agents across your enterprise workflows. Achieve 300% ROI with intelligent automation and smart decision-making systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-autonomous-agents-2025"
                className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Implementation Guide
              </Link>
              <Link
                href="/services/ai-autonomous-systems"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors text-center"
              >
                Start Your Deployment
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">Autonomous Capabilities</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span>Smart decision-making</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>Real-time processing</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔄</span>
                <span>Self-learning systems</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <span>Enterprise-grade security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}