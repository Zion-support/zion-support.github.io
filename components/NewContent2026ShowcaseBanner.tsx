import React from 'react';
import Link from 'next/link';

export default function NewContent2026ShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🚀 Revolutionary AI Content 2026
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Discover breakthrough insights, success stories, and cutting-edge AI technologies 
            that are transforming enterprises worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-enterprise-transformation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold group-hover:text-blue-300 transition-colors">
                    AI Enterprise Transformation 2026
                  </h3>
                  <p className="text-sm opacity-75">Complete Business Revolution Guide</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Learn how to achieve 400% ROI, 85% process automation, and $50M+ annual savings 
                with comprehensive AI transformation strategies.
              </p>
              <div className="flex items-center text-blue-300 font-semibold text-sm">
                Read Full Guide →
              </div>
            </div>
          </Link>

          <Link href="/blog/quantum-ai-revolution-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔮</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold group-hover:text-purple-300 transition-colors">
                    Quantum AI Revolution 2026
                  </h3>
                  <p className="text-sm opacity-75">Next Frontier of Computing</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Explore how quantum computing is revolutionizing AI applications with 1000x speed 
                improvements and breakthrough technologies.
              </p>
              <div className="flex items-center text-purple-300 font-semibold text-sm">
                Explore Quantum AI →
              </div>
            </div>
          </Link>

          <Link href="/case-studies/fortune-500-ai-transformation-success" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold group-hover:text-green-300 transition-colors">
                    Fortune 500 AI Success
                  </h3>
                  <p className="text-sm opacity-75">300% ROI in 8 Months</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                See how a Fortune 500 company achieved 300% ROI and $12M annual savings through 
                comprehensive AI transformation.
              </p>
              <div className="flex items-center text-green-300 font-semibold text-sm">
                View Success Story →
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore All Articles
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}