import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Rocket, Target, TrendingUp } from 'lucide-react';

export default function Revolutionary2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 REVOLUTIONARY 2026
            </span>
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              BREAKTHROUGH CONTENT
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              That Changes Everything
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI innovations, autonomous enterprise solutions, and quantum computing breakthroughs 
            that are reshaping industries and creating unprecedented opportunities for growth.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Autonomous Enterprise */}
          <Link href="/blog/ai-autonomous-enterprise-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">NEW 2026</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Autonomous Enterprise 2026
              </h3>
              <p className="text-white/80 mb-4 text-sm">
                Complete business transformation with 95% automation, $15M+ ROI, and zero-touch operations.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-yellow-300">95%</div>
                    <div className="text-xs text-white/70">Automation</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-300">$15M+</div>
                    <div className="text-xs text-white/70">ROI</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Space Missions */}
          <Link href="/blog/ai-space-missions-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">REVOLUTIONARY</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Space Missions 2026
              </h3>
              <p className="text-white/80 mb-4 text-sm">
                Autonomous space operations with 99.9% reliability and $500M+ cost savings.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-yellow-300">99.9%</div>
                    <div className="text-xs text-white/70">Reliability</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-300">$500M+</div>
                    <div className="text-xs text-white/70">Savings</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Quantum Optimization */}
          <Link href="/case-studies/ai-quantum-optimization-breakthrough-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">BREAKTHROUGH</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                Quantum Optimization 2026
              </h3>
              <p className="text-white/80 mb-4 text-sm">
                1000x speed improvement and $12M additional returns with quantum AI.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-yellow-300">1000x</div>
                    <div className="text-xs text-white/70">Faster</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-300">$12M</div>
                    <div className="text-xs text-white/70">Returns</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Content Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-4">Latest AI Innovations</h3>
            <div className="space-y-3">
              <Link href="/blog/ai-neural-architecture-optimization-2026" className="flex items-center justify-between group">
                <span className="group-hover:text-yellow-300 transition-colors">Neural Architecture Optimization</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/blog/ai-sustainability-green-tech-2026" className="flex items-center justify-between group">
                <span className="group-hover:text-yellow-300 transition-colors">AI Sustainability & Green Tech</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/blog/ai-quantum-computing-2026" className="flex items-center justify-between group">
                <span className="group-hover:text-yellow-300 transition-colors">Quantum Computing Revolution</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-4">Success Stories</h3>
            <div className="space-y-3">
              <Link href="/case-studies/ai-sustainability-transformation-2026" className="flex items-center justify-between group">
                <span className="group-hover:text-yellow-300 transition-colors">$10M ROI Sustainability Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/case-studies/ai-space-mission-success-2026" className="flex items-center justify-between group">
                <span className="group-hover:text-yellow-300 transition-colors">$100M Space Mission Success</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/case-studies/ai-autonomous-enterprise-transformation-2026" className="flex items-center justify-between group">
                <span className="group-hover:text-yellow-300 transition-colors">$15M Enterprise Transformation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <TrendingUp className="w-5 h-5" />
              Explore All Content
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Case Studies
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <p className="text-white/80 text-sm">
            Join 10,000+ professionals discovering the future of AI and technology
          </p>
        </div>
      </div>
    </section>
  );
}