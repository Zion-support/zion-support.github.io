import React from 'react';
import Link from 'next/link';

export default function NewContent2026ShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold mb-6">
            <span className="w-4 h-4 mr-2">✨</span>
            NEW 2026 CONTENT
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-autonomous-infrastructure-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="text-sm opacity-75">Infrastructure Guide</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-200 transition-colors">
                AI Autonomous Infrastructure 2026
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Master autonomous infrastructure with AI-driven self-healing, predictive scaling, 
                and zero-touch operations. Achieve 99.9% uptime and 90% cost reduction.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold">99.9%</div>
                  <div className="text-xs opacity-75">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">90%</div>
                  <div className="text-xs opacity-75">Cost Reduction</div>
                </div>
              </div>
              <div className="flex items-center text-yellow-200 font-semibold text-sm group-hover:text-yellow-100 transition-colors">
                Read Guide →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-quantum-hybrid-computing-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="text-sm opacity-75">Quantum Computing</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-200 transition-colors">
                AI Quantum Hybrid Computing 2026
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Harness quantum computing for AI breakthroughs with 1000x faster optimization, 
                revolutionary capabilities, and 95% accuracy in complex problem solving.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold">1000x</div>
                  <div className="text-xs opacity-75">Faster</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">95%</div>
                  <div className="text-xs opacity-75">Accuracy</div>
                </div>
              </div>
              <div className="flex items-center text-yellow-200 font-semibold text-sm group-hover:text-yellow-100 transition-colors">
                Read Guide →
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-transformation-mega-success-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="text-sm opacity-75">Case Study</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-200 transition-colors">
                $25M ROI Success Story
              </h3>
              <p className="text-sm opacity-90 mb-4">
                See how a Fortune 500 company achieved $25M ROI with comprehensive AI transformation. 
                99% automation, 90% cost reduction, and complete business revolution.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold">$25M</div>
                  <div className="text-xs opacity-75">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">99%</div>
                  <div className="text-xs opacity-75">Automation</div>
                </div>
              </div>
              <div className="flex items-center text-yellow-200 font-semibold text-sm group-hover:text-yellow-100 transition-colors">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            <span className="w-5 h-5 mr-2">🚀</span>
            Explore All 2026 Content
          </Link>
        </div>
      </div>
    </section>
  );
}