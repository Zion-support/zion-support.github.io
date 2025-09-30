import React from 'react';
import Link from 'next/link';

export default function EnterpriseAISecurityBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🛡️ Security Focus
              </span>
              <span className="text-red-200 text-sm">Enterprise Protection</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Enterprise AI Security: 99.7% Threat Detection
            </h2>
            <p className="text-xl text-red-100 mb-6 leading-relaxed">
              Secure your AI implementations with enterprise-grade security. Achieve 99.7% threat detection accuracy and autonomous incident response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-cybersecurity-2025"
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Security Guide
              </Link>
              <Link
                href="/services/ai-cybersecurity"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors text-center"
              >
                Secure Your AI
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">Security Features</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span>99.7% threat detection</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🤖</span>
                <span>Autonomous incident response</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔒</span>
                <span>Zero-trust architecture</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📋</span>
                <span>Compliance & governance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}