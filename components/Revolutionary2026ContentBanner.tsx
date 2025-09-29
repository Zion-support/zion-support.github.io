import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Leaf, Atom, TrendingUp } from 'lucide-react';

export default function Revolutionary2026ContentBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold mb-6">
            <span className="w-4 h-4 mr-2">🚀</span>
            REVOLUTIONARY 2026 CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Future of AI is Here
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover breakthrough AI technologies that are transforming industries and delivering unprecedented results. 
            From quantum computing to sustainable AI, explore the innovations shaping tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-agent-orchestration-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">NEW 2026</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Agent Orchestration
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Master multi-agent systems with 95% automation efficiency and $5M+ ROI through advanced orchestration patterns.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-300">95%</div>
                    <div className="text-xs text-blue-200">Automation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-300">$5M+</div>
                    <div className="text-xs text-blue-200">ROI</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-sustainability-green-tech-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">NEW 2026</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Sustainability & Green Tech
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-300">80%</div>
                    <div className="text-xs text-blue-200">Energy Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-300">$2M+</div>
                    <div className="text-xs text-blue-200">Savings</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-quantum-computing-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Atom className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">NEW 2026</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Quantum Computing
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-300">1000x</div>
                    <div className="text-xs text-blue-200">Faster</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-300">95%</div>
                    <div className="text-xs text-blue-200">Accuracy</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Link href="/case-studies/ai-sustainability-transformation-2026" className="group">
            <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 hover:from-green-600/30 hover:to-teal-600/30 transition-all duration-300 border border-green-400/30 hover:border-green-400/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">CASE STUDY</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Sustainability Transformation: $10M ROI Case Study
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-300">$10M</div>
                    <div className="text-xs text-blue-200">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-300">100%</div>
                    <div className="text-xs text-blue-200">Carbon Neutral</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-quantum-optimization-2026" className="group">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300 border border-purple-400/30 hover:border-purple-400/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Atom className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">CASE STUDY</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Quantum Optimization: 1000x Speed Improvement
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                See how a financial services company achieved 1000x optimization speed and $12M additional returns with quantum-enhanced AI.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-300">1000x</div>
                    <div className="text-xs text-blue-200">Faster</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-300">$12M</div>
                    <div className="text-xs text-blue-200">Returns</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="w-5 h-5 mr-2">🚀</span>
            Explore All Revolutionary Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}