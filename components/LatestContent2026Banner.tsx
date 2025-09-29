import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Clock, TrendingUp } from 'lucide-react';

export default function LatestContent2026Banner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
            <span className="w-4 h-4 mr-2">🚀</span>
            NEW 2026 CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI Breakthroughs for 2026
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Discover the latest AI innovations, case studies, and implementation guides that are transforming industries worldwide. 
            Stay ahead with cutting-edge insights from our expert team.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Featured Article 1 */}
          <Link href="/blog/ai-agent-orchestration-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  BREAKTHROUGH
                </span>
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
              </div>
              <div className="flex items-center gap-4 mb-3 text-sm opacity-80">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>22 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>95% Automation</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-200 transition-colors">
                AI Agent Orchestration 2026: Multi-Agent System Architecture
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Master multi-agent systems with 95% automation efficiency and $5M+ ROI through advanced orchestration patterns.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-300">95%</div>
                    <div className="text-xs opacity-75">Automation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-300">$5M+</div>
                    <div className="text-xs opacity-75">ROI</div>
                  </div>
                </div>
                <div className="flex items-center text-yellow-200 font-semibold text-sm group-hover:text-yellow-100 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>

          {/* Featured Article 2 */}
          <Link href="/blog/ai-sustainability-green-tech-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  SUSTAINABLE
                </span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
              </div>
              <div className="flex items-center gap-4 mb-3 text-sm opacity-80">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>18 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>80% Energy Saved</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-green-200 transition-colors">
                AI Sustainability & Green Tech 2026: Carbon-Neutral Operations
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-300">80%</div>
                    <div className="text-xs opacity-75">Energy Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-300">$2M+</div>
                    <div className="text-xs opacity-75">Savings</div>
                  </div>
                </div>
                <div className="flex items-center text-green-200 font-semibold text-sm group-hover:text-green-100 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>

          {/* Featured Case Study */}
          <Link href="/case-studies/ai-sustainability-transformation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  FEATURED
                </span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  CASE STUDY
                </span>
              </div>
              <div className="flex items-center gap-4 mb-3 text-sm opacity-80">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>15 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  <span>Fortune 500</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-200 transition-colors">
                AI Sustainability Transformation: $10M ROI Case Study
              </h3>
              <p className="text-sm opacity-90 mb-4">
                See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-300">$10M</div>
                    <div className="text-xs opacity-75">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-pink-300">100%</div>
                    <div className="text-xs opacity-75">Carbon Neutral</div>
                  </div>
                </div>
                <div className="flex items-center text-purple-200 font-semibold text-sm group-hover:text-purple-100 transition-colors">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Content Preview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Link href="/blog/ai-quantum-computing-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  QUANTUM
                </span>
              </div>
              <h4 className="font-semibold text-sm mb-2 group-hover:text-indigo-200 transition-colors">
                AI Quantum Computing 2026
              </h4>
              <p className="text-xs opacity-80 mb-2">
                1000x faster optimization with quantum-enhanced AI
              </p>
              <div className="flex items-center text-indigo-200 text-xs group-hover:text-indigo-100 transition-colors">
                Read More →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-neural-architecture-optimization-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEURAL
                </span>
              </div>
              <h4 className="font-semibold text-sm mb-2 group-hover:text-purple-200 transition-colors">
                Neural Architecture Optimization
              </h4>
              <p className="text-xs opacity-80 mb-2">
                40% performance gains with 60% cost reduction
              </p>
              <div className="flex items-center text-purple-200 text-xs group-hover:text-purple-100 transition-colors">
                Read More →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-space-tech-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  SPACE
                </span>
              </div>
              <h4 className="font-semibold text-sm mb-2 group-hover:text-blue-200 transition-colors">
                AI Space Technology 2026
              </h4>
              <p className="text-xs opacity-80 mb-2">
                Autonomous space operations with 99.9% reliability
              </p>
              <div className="flex items-center text-blue-200 text-xs group-hover:text-blue-100 transition-colors">
                Read More →
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-quantum-optimization-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  QUANTUM
                </span>
              </div>
              <h4 className="font-semibold text-sm mb-2 group-hover:text-green-200 transition-colors">
                Quantum Optimization Case Study
              </h4>
              <p className="text-xs opacity-80 mb-2">
                1000x speed improvement and $12M returns
              </p>
              <div className="flex items-center text-green-200 text-xs group-hover:text-green-100 transition-colors">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore All Content
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join 10,000+ professionals staying ahead with our latest AI insights
          </p>
        </div>
      </div>
    </div>
  );
}