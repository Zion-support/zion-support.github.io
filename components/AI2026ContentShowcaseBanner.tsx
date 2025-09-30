import React from 'react';
import Link from 'next/link';

const AI2026ContentShowcaseBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-sm font-semibold">NEW 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content Showcase 2026
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Discover breakthrough AI innovations, enterprise transformation guides, and cutting-edge 
            technology insights that are reshaping industries in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Brain Architecture</h3>
                <p className="text-sm text-blue-200">Neural Networks 2026</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              Explore next-generation AI brain architectures with 10x processing power and 
              autonomous decision-making capabilities.
            </p>
            <Link
              href="/blog/ai-brain-architecture-2026"
              className="inline-flex items-center text-cyan-300 font-semibold hover:text-cyan-200 transition-colors"
            >
              Read More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Quantum AI Processing</h3>
                <p className="text-sm text-blue-200">Breakthrough Technology</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              Revolutionary quantum AI processing achieving 1000x faster computation 
              and solving previously impossible problems.
            </p>
            <Link
              href="/blog/quantum-ai-processing-2026"
              className="inline-flex items-center text-green-300 font-semibold hover:text-green-200 transition-colors"
            >
              Read More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-pink-400 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Autonomous Enterprise</h3>
                <p className="text-sm text-blue-200">Self-Managing Systems</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              Complete enterprise automation with self-healing systems, autonomous 
              decision-making, and 99.9% uptime guarantees.
            </p>
            <Link
              href="/case-studies/autonomous-enterprise-2026"
              className="inline-flex items-center text-pink-300 font-semibold hover:text-pink-200 transition-colors"
            >
              Read More →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore All 2026 Content
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AI2026ContentShowcaseBanner;