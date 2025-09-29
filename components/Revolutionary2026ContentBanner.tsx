import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap } from 'lucide-react';

export default function Revolutionary2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 REVOLUTIONARY 2026 CONTENT
            </span>
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
              NEW
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Breakthrough AI Innovations Reshaping Enterprise
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Discover the 15 most revolutionary AI breakthrough innovations of 2026 that are transforming 
            enterprise operations, driving 300% ROI, and creating unprecedented business value.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">300% Average ROI</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">95% Process Automation</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-4 h-4" />
              <span className="text-sm font-semibold">$50M+ Cost Savings</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-2026-breakthrough-innovations" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔮</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">AI Breakthrough Innovations 2026</h3>
                  <p className="text-sm opacity-80">Revolutionary Technologies</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Discover the 15 most revolutionary AI breakthrough innovations transforming enterprise operations with 300% ROI.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs opacity-75">45 min read</span>
                <div className="flex items-center text-yellow-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Read Guide <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-mega-transformation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">$50M ROI Case Study</h3>
                  <p className="text-sm opacity-80">Fortune 500 Success</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                See how a Fortune 500 company achieved $50M ROI with comprehensive AI transformation in 18 months.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs opacity-75">30 min read</span>
                <div className="flex items-center text-yellow-400 font-semibold group-hover:translate-x-1 transition-transform">
                  View Success <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-autonomous-operations-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Autonomous Operations 2026</h3>
                  <p className="text-sm opacity-80">Self-Managing Systems</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Master autonomous AI enterprise operations with zero-touch business management and $8M+ savings.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs opacity-75">35 min read</span>
                <div className="flex items-center text-yellow-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Read Guide <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span className="w-5 h-5 mr-2">🚀</span>
            Explore All 2026 Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}