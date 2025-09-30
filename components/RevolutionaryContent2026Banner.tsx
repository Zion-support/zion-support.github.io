import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContent2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">NEW 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI Content 2026
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Discover groundbreaking AI insights, breakthrough technologies, and success stories 
            that are reshaping the future of enterprise automation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-enterprise-automation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg group-hover:text-blue-300 transition-colors">
                    AI Enterprise Automation 2026
                  </h3>
                  <p className="text-sm opacity-80">Complete Business Transformation Guide</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Learn how AI enterprise automation is revolutionizing business operations 
                with 300% ROI and 70% cost reduction.
              </p>
              <div className="flex items-center text-blue-300 font-semibold text-sm">
                Read Full Guide →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-quantum-computing-breakthrough-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🔮</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg group-hover:text-purple-300 transition-colors">
                    Quantum AI Breakthrough 2026
                  </h3>
                  <p className="text-sm opacity-80">Revolutionary Processing Power</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Explore the groundbreaking quantum AI breakthrough achieving 1000x 
                processing speed improvements.
              </p>
              <div className="flex items-center text-purple-300 font-semibold text-sm">
                Discover Breakthrough →
              </div>
            </div>
          </Link>

          <Link href="/case-studies/fortune-500-ai-transformation-success" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🏆</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg group-hover:text-green-300 transition-colors">
                    Fortune 500 Success Story
                  </h3>
                  <p className="text-sm opacity-80">300% ROI in 8 Months</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                See how a Fortune 500 company achieved 300% ROI and $12M annual savings 
                through AI transformation.
              </p>
              <div className="flex items-center text-green-300 font-semibold text-sm">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <span className="text-sm font-semibold">More Revolutionary Content Coming Soon</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}