import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';

export default function InteractiveContentShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium mb-6">
            <span className="w-4 h-4 mr-2">🎯</span>
            Interactive Content Hub
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Discover Your Next AI Breakthrough
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our curated collection of cutting-edge AI content, case studies, and implementation guides. 
            Find the insights that will transform your business.
          </p>
        </div>

        {/* Interactive Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Featured Article Spotlight */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
            <div className="relative h-80 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">AI Agent Orchestration</h3>
                  <p className="text-blue-100 text-lg">Multi-Agent System Architecture</p>
                </div>
              </div>
              <div className="absolute top-6 left-6">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  🚀 NEW 2026
                </span>
              </div>
              <div className="absolute top-6 right-6">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  BREAKTHROUGH
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">📝 Featured Article</span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  22 min read
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                AI Agent Orchestration 2026: Multi-Agent System Architecture
              </h4>
              <p className="text-gray-600 mb-6 text-lg">
                Master multi-agent systems with 95% automation efficiency and $5M+ ROI through advanced orchestration patterns. 
                Learn enterprise-grade AI agent coordination strategies that are transforming industries.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">95%</div>
                  <div className="text-xs text-gray-500">Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">$5M+</div>
                  <div className="text-xs text-gray-500">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">99.9%</div>
                  <div className="text-xs text-gray-500">Uptime</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    Trending
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    2.3K views
                  </div>
                </div>
                <Link
                  href="/blog/ai-agent-orchestration-2026"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Read Full Article →
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Case Study Spotlight */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
            <div className="relative h-80 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🌱</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">AI Sustainability</h3>
                  <p className="text-green-100 text-lg">$10M ROI Transformation</p>
                </div>
              </div>
              <div className="absolute top-6 left-6">
                <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  🌟 FEATURED
                </span>
              </div>
              <div className="absolute top-6 right-6">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  CASE STUDY
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium">📊 Featured Case Study</span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  15 min read
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                AI Sustainability Transformation 2026: $10M ROI Case Study
              </h4>
              <p className="text-gray-600 mb-6 text-lg">
                See how a Fortune 500 company achieved complete carbon neutrality and generated $10M in additional ROI 
                through comprehensive AI sustainability transformation and green technology implementation.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">$10M</div>
                  <div className="text-xs text-gray-500">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">100%</div>
                  <div className="text-xs text-gray-500">Carbon Neutral</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">18</div>
                  <div className="text-xs text-gray-500">Months</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Zap className="w-4 h-4 mr-1" />
                    High Impact
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    1.8K views
                  </div>
                </div>
                <Link
                  href="/case-studies/ai-sustainability-transformation-2026"
                  className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/blog/ai-sustainability-green-tech-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  INNOVATION
                </span>
              </div>
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                AI Sustainability & Green Tech
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">80%</div>
                  <div className="text-xs text-gray-500">Energy Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">$2M+</div>
                  <div className="text-xs text-gray-500">Savings</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  18 min read
                </div>
                <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-quantum-optimization-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-purple-200 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  BREAKTHROUGH
                </span>
              </div>
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI Quantum Optimization
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                See how a financial services company achieved 1000x optimization speed and $12M additional returns with quantum-enhanced AI.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">1000x</div>
                  <div className="text-xs text-gray-500">Faster</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">$12M</div>
                  <div className="text-xs text-gray-500">Returns</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  12 min read
                </div>
                <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-quantum-computing-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-indigo-200 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  REVOLUTIONARY
                </span>
              </div>
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                AI Quantum Computing
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-indigo-600">1000x</div>
                  <div className="text-xs text-gray-500">Faster</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-indigo-600">95%</div>
                  <div className="text-xs text-gray-500">Accuracy</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  25 min read
                </div>
                <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-neural-architecture-optimization-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-purple-200 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  BREAKTHROUGH
                </span>
              </div>
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Neural Architecture Optimization
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Master neural architecture optimization with 40% performance gains, 60% cost reduction, and enterprise-grade scalability.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">40%</div>
                  <div className="text-xs text-gray-500">Performance</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">60%</div>
                  <div className="text-xs text-gray-500">Cost Savings</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  28 min read
                </div>
                <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of enterprise leaders who are already leveraging our AI insights and strategies 
              to drive unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105"
              >
                📚 Explore All Content
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors transform hover:scale-105"
              >
                📊 View Case Studies
              </Link>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20">
              <div className="flex justify-center items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>10,000+ Readers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Real ROI Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Implementation Guides</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}