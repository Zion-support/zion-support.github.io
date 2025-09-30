import React from 'react';
import Link from 'next/link';

export default function InteractiveAICalculatorBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🧮 Interactive Tool
              </span>
              <span className="text-cyan-200 text-sm">Free Calculator</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              AI ROI Calculator: Measure Your Potential Returns
            </h2>
            <p className="text-xl text-cyan-100 mb-6 leading-relaxed">
              Calculate your potential AI investment returns with our interactive calculator. Get personalized insights and ROI projections for your specific use case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tools/ai-roi-calculator"
                className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Try Calculator Now
              </Link>
              <Link
                href="/services/ai-consulting"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors text-center"
              >
                Get Expert Analysis
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">What You'll Get</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <span>Personalized ROI projections</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>Implementation timeline</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <span>Cost-benefit analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span>Recommended strategies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}