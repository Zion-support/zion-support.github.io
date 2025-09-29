import React from 'react';
import Link from 'next/link';

export default function LatestContentBanner2026() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              🚀 JUST PUBLISHED 2026
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content: The Future is Here
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Discover the latest breakthroughs in cognitive AI, sustainable technology, and enterprise transformation 
            that are reshaping industries worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Cognitive AI Revolution */}
          <Link href="/blog/ai-cognitive-revolution-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-yellow-200 transition-colors">
                    Cognitive AI Revolution
                  </h3>
                  <p className="text-purple-100 text-sm">True Machine Intelligence</p>
                </div>
              </div>
              <p className="text-purple-100 mb-4">
                Explore breakthrough cognitive AI systems achieving 99.7% accuracy and $200M+ ROI potential 
                through human-level reasoning capabilities.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-300">99.7%</div>
                    <div className="text-xs text-purple-200">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-300">$200M+</div>
                    <div className="text-xs text-purple-200">ROI</div>
                  </div>
                </div>
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                  FEATURED
                </span>
              </div>
            </div>
          </Link>

          {/* Sustainable AI Future */}
          <Link href="/blog/ai-sustainable-future-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-yellow-200 transition-colors">
                    Sustainable AI Future
                  </h3>
                  <p className="text-purple-100 text-sm">Green Technology</p>
                </div>
              </div>
              <p className="text-purple-100 mb-4">
                Discover how AI is driving sustainability with 80% carbon reduction, $500B green investment, 
                and eco-friendly solutions for tomorrow.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-300">80%</div>
                    <div className="text-xs text-purple-200">Carbon ↓</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-300">$500B</div>
                    <div className="text-xs text-purple-200">Investment</div>
                  </div>
                </div>
                <span className="bg-green-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                  NEW
                </span>
              </div>
            </div>
          </Link>

          {/* Success Stories */}
          <Link href="/case-studies" className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-yellow-200 transition-colors">
                    Success Stories
                  </h3>
                  <p className="text-purple-100 text-sm">Real Results</p>
                </div>
              </div>
              <p className="text-purple-100 mb-4">
                Explore proven success stories including $200M cognitive AI ROI and $180M sustainable 
                transformation achievements.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-300">$200M</div>
                    <div className="text-xs text-purple-200">Cognitive ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-300">$180M</div>
                    <div className="text-xs text-purple-200">Green ROI</div>
                  </div>
                </div>
                <span className="bg-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                  $380M+ ROI
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/content-hub"
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2"
          >
            Explore All New Content
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}