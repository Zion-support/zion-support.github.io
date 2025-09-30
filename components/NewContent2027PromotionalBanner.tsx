import React from 'react';
import Link from 'next/link';

export default function NewContent2027PromotionalBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-white text-purple-600 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide animate-pulse">
              🚀 NEW 2027 CONTENT — JUST RELEASED
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Breakthroughs for 2027
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-10">
            Discover the future of AI with our latest breakthrough content: Quantum Computing Revolution, 
            Autonomous Business Processes, and Fortune 500 Success Stories delivering $1B+ ROI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/blog/ai-2027-quantum-revolution" className="group">
            <div className="bg-white text-gray-900 rounded-xl p-6 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔮</span>
                </div>
                <div>
                  <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                    QUANTUM BREAKTHROUGH
                  </span>
                  <h3 className="text-lg font-bold group-hover:text-purple-600 transition-colors">
                    AI 2027: Quantum Revolution
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Discover how quantum computing will transform AI by 2027, delivering 1000x speed improvements 
                and $500M+ ROI for enterprise implementations.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>🆕 NEW</span>
                  <span>⏱️ 25 min read</span>
                </div>
                <div className="text-purple-600 font-bold group-hover:text-purple-700">
                  Read Now →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-autonomous-business-processes-2027" className="group">
            <div className="bg-white text-gray-900 rounded-xl p-6 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                    AUTONOMOUS SYSTEMS
                  </span>
                  <h3 className="text-lg font-bold group-hover:text-green-600 transition-colors">
                    Autonomous Business Processes 2027
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Transform your business with fully autonomous AI processes achieving 95% automation, 
                80% cost reduction, and 300% productivity gains.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>🆕 NEW</span>
                  <span>⏱️ 22 min read</span>
                </div>
                <div className="text-green-600 font-bold group-hover:text-green-700">
                  Read Now →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/fortune-500-quantum-ai-transformation-2027" className="group">
            <div className="bg-white text-gray-900 rounded-xl p-6 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                    SUCCESS STORY
                  </span>
                  <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">
                    Fortune 500: $1B ROI
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                How a Fortune 500 company achieved $1B ROI through quantum AI transformation with 
                95% cost reduction and 1000x performance gains.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>🆕 NEW</span>
                  <span>💰 $1B ROI</span>
                </div>
                <div className="text-blue-600 font-bold group-hover:text-blue-700">
                  Read Now →
                </div>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-block bg-white text-purple-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors shadow-xl mr-4"
          >
            Explore All 2027 Insights →
          </Link>
          <Link
            href="/case-studies"
            className="inline-block border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
          >
            View All Success Stories →
          </Link>
        </div>
      </div>
    </section>
  );
}