import React from 'react';
import Link from 'next/link';

export default function ManufacturingTransformationBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🏭 Success Story
              </span>
              <span className="text-orange-200 text-sm">Manufacturing</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain
            </h2>
            <p className="text-xl text-orange-100 mb-6 leading-relaxed">
              See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually with AI-powered supply chain optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies/ai-supply-chain-optimization-2025"
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                View Case Study
              </Link>
              <Link
                href="/services/ai-supply-chain-optimization"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-center"
              >
                Optimize Your Supply Chain
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">Results Achieved</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📉</span>
                <span>60% cost reduction</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>90% efficiency improvement</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <span>$12M annual savings</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span>Real-time optimization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}