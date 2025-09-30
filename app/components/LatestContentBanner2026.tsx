import React from 'react';
import Link from 'next/link';

export default function LatestContentBanner2026() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="bg-white text-indigo-600 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide animate-pulse">
            🚀 LATEST 2026 CONTENT
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Revolutionary AI Breakthroughs Now Live
        </h2>
        <p className="text-xl text-center text-indigo-50 max-w-3xl mx-auto mb-10">
          Discover the cutting-edge AI innovations that are transforming Fortune 500 companies 
          with unprecedented results: 400% productivity gains, 99.9% accuracy, and $100M+ ROI.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/blog/ai-neural-interfaces-2026" className="group">
            <div className="bg-white text-gray-900 rounded-xl p-6 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                    BREAKTHROUGH
                  </span>
                  <h3 className="text-lg font-bold group-hover:text-purple-600 transition-colors">
                    AI Neural Interfaces 2026
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Direct brain-computer interfaces achieving 99.7% accuracy with real-time neural data processing.
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

          <Link href="/blog/ai-space-tech-2026" className="group">
            <div className="bg-white text-gray-900 rounded-xl p-6 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                    SPACE TECH
                  </span>
                  <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">
                    AI Space Technology 2026
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Autonomous space systems with AI-powered navigation, resource management, and mission control.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>🆕 NEW</span>
                  <span>⏱️ 20 min read</span>
                </div>
                <div className="text-blue-600 font-bold group-hover:text-blue-700">
                  Read Now →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-mega-transformation-success-2026" className="group">
            <div className="bg-white text-gray-900 rounded-xl p-6 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                    SUCCESS STORY
                  </span>
                  <h3 className="text-lg font-bold group-hover:text-green-600 transition-colors">
                    $150M AI Transformation
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Fortune 500 company achieves $150M ROI with AI-powered automation and intelligent systems.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>🆕 NEW</span>
                  <span>💰 $150M ROI</span>
                </div>
                <div className="text-green-600 font-bold group-hover:text-green-700">
                  Read Now →
                </div>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-indigo-50 transition-colors shadow-xl mr-4"
          >
            Explore All Latest Insights →
          </Link>
          <Link
            href="/case-studies"
            className="inline-block border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
          >
            View All Success Stories →
          </Link>
        </div>
      </div>
    </section>
  );
}