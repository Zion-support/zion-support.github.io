import React from 'react';
import Link from 'next/link';

export default function LatestAIInnovations2026Banner() {
  return (
    <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            ⚡ Latest AI Innovations: January 2026
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Stay ahead of the curve with cutting-edge AI technologies that are transforming 
            industries and creating unprecedented opportunities for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Link 
            href="/blog/ai-next-generation-autonomous-systems-2026" 
            className="group bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/25 transition-all duration-300 border border-white/30"
          >
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
              Autonomous Systems
            </h3>
            <p className="text-sm opacity-90 mb-3">
              99.9% reliability with self-evolving intelligence
            </p>
            <div className="text-xs opacity-75">
              New 2026 • 25 min read
            </div>
          </Link>

          <Link 
            href="/blog/ai-cognitive-computing-2026" 
            className="group bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/25 transition-all duration-300 border border-white/30"
          >
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
              Cognitive AI
            </h3>
            <p className="text-sm opacity-90 mb-3">
              400% faster decision-making with human-like reasoning
            </p>
            <div className="text-xs opacity-75">
              Revolutionary • 22 min read
            </div>
          </Link>

          <Link 
            href="/blog/ai-quantum-machine-learning-2026" 
            className="group bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/25 transition-all duration-300 border border-white/30"
          >
            <div className="text-3xl mb-3">⚛️</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
              Quantum ML
            </h3>
            <p className="text-sm opacity-90 mb-3">
              1000x faster optimization with quantum algorithms
            </p>
            <div className="text-xs opacity-75">
              Breakthrough • 28 min read
            </div>
          </Link>

          <Link 
            href="/case-studies" 
            className="group bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/25 transition-all duration-300 border border-white/30"
          >
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
              Success Stories
            </h3>
            <p className="text-sm opacity-90 mb-3">
              Real-world implementations and ROI results
            </p>
            <div className="text-xs opacity-75">
              Case Studies • Fortune 500
            </div>
          </Link>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/blog" 
              className="bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Read All Articles
            </Link>
            <div className="text-sm opacity-75">
              Join 10,000+ AI professionals staying ahead of the curve
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-6 text-sm opacity-75">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              <span>Live Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
              <span>Expert Authored</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              <span>Industry Validated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}