import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function AI2026UltimateInnovationShowcasePromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white py-12">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                🚀 NEW
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                AI 2026
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              AI 2026 Ultimate Innovation Showcase
            </h2>
            <p className="text-lg md:text-xl text-cyan-100 mb-6 max-w-2xl">
              Discover the most advanced AI innovationsbreakthrough technologiesand revolutionary solutions that will define the future of business in 2026
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                ⚛️ Quantum AI Fusion
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                🧠 Neural Interfaces
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                🤖 Autonomous Systems
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                ⚡ Edge AI Computing
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/ai-2026-ultimate-innovation-showcase"
                className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-cyan-50 transition-colors shadow-lg"
              >
                Explore Innovations →
              </a>
              <a 
                href="/contact"
                className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4">Revolutionary Features</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⚛️</span>
                  <span className="text-sm">Quantum AI Fusion - 10,000x faster processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🧠</span>
                  <span className="text-sm">Neural Interface Revolution - Direct brain-AI connection</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🤖</span>
                  <span className="text-sm">Autonomous Business Systems - 100% automated operations</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔮</span>
                  <span className="text-sm">Predictive Analytics 2.0 - 99.9% accuracy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}