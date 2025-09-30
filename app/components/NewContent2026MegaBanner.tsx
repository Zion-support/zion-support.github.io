import React from 'react';
import Link from 'next/link';

export default function NewContent2026MegaBanner() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            🚀 NEW 2026 CONTENT - REVOLUTIONARY AI BREAKTHROUGHS
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Discover the Future of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              {' '}AI Technology
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
            Explore our latest revolutionary content featuring neural superintelligence, autonomous systems, 
            and quantum AI breakthroughs that are transforming enterprise operations worldwide.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Neural Superintelligence Article */}
          <Link href="/blog/ai-2026-neural-superintelligence" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <div className="text-sm text-green-400 font-semibold">BREAKTHROUGH</div>
                  <div className="text-sm text-white/70">18 min read</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                AI 2026 Neural Superintelligence
              </h3>
              <p className="text-white/80 mb-4">
                Explore revolutionary AI systems that surpass human intelligence, delivering 1000x performance gains and transforming enterprise operations.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-green-400 font-semibold group-hover:text-green-300 transition-colors">
                  Read Article →
                </div>
                <div className="text-sm text-white/60">Jan 20, 2026</div>
              </div>
            </div>
          </Link>

          {/* Autonomous Systems Article */}
          <Link href="/blog/ai-2026-enterprise-autonomous-systems" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <div className="text-sm text-green-400 font-semibold">REVOLUTIONARY</div>
                  <div className="text-sm text-white/70">15 min read</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                AI 2026 Enterprise Autonomous Systems
              </h3>
              <p className="text-white/80 mb-4">
                Discover how autonomous AI systems are revolutionizing enterprise operations with 400% efficiency gains and 70% cost reduction.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-green-400 font-semibold group-hover:text-green-300 transition-colors">
                  Read Article →
                </div>
                <div className="text-sm text-white/60">Jan 20, 2026</div>
              </div>
            </div>
          </Link>

          {/* Success Story Case Study */}
          <Link href="/case-studies/neural-superintelligence-mega-success-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <div className="text-sm text-green-400 font-semibold">SUCCESS STORY</div>
                  <div className="text-sm text-white/70">12 min read</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                $500M Revenue Increase Case Study
              </h3>
              <p className="text-white/80 mb-4">
                See how a Fortune 500 company achieved $500M additional revenue and 1000x performance gains through neural superintelligence.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-green-400 font-semibold group-hover:text-green-300 transition-colors">
                  View Case Study →
                </div>
                <div className="text-sm text-white/60">Jan 20, 2026</div>
              </div>
            </div>
          </Link>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">1000x</div>
            <div className="text-white/80">Performance Gains</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">$500M</div>
            <div className="text-white/80">Revenue Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-white/80">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">400%</div>
            <div className="text-white/80">Efficiency Gains</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
          <p className="text-white/80 text-sm">
            Join 10,000+ professionals staying ahead with the latest AI insights and breakthroughs
          </p>
        </div>
      </div>
    </section>
  );
}