import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Star, Zap } from 'lucide-react';

export default function NewContent2026MegaBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full -translate-y-32"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            <span>NEW 2026 CONTENT</span>
            <Star className="w-4 h-4" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              for 2026
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover the future of AI with our comprehensive collection of cutting-edge 
            articles, case studies, and implementation guides that will transform your business.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Mega Trends Article */}
          <Link href="/blog/ai-2026-mega-trends" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-yellow-300">FEATURED ARTICLE</div>
                  <div className="text-xs opacity-75">28 min read</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Mega Trends 2026: The Future of Enterprise Intelligence
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Discover the 10 mega trends shaping AI in 2026. From autonomous systems to quantum computing.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold">$12T</div>
                    <div className="text-xs opacity-75">Market Value</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold">45%</div>
                    <div className="text-xs opacity-75">Productivity</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Mega Success Case Study */}
          <Link href="/case-studies/ai-transformation-mega-success-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-yellow-300">FEATURED CASE STUDY</div>
                  <div className="text-xs opacity-75">Fortune 500</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Transformation Mega Success 2026: $15M ROI in 12 Months
              </h3>
              <p className="text-sm opacity-90 mb-4">
                See how a Fortune 500 company achieved unprecedented success through comprehensive AI transformation.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold">$15M</div>
                    <div className="text-xs opacity-75">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold">95%</div>
                    <div className="text-xs opacity-75">Automation</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* AI Agent Orchestration */}
          <Link href="/blog/ai-agent-orchestration-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-yellow-300">TECHNICAL GUIDE</div>
                  <div className="text-xs opacity-75">22 min read</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Agent Orchestration 2026: Multi-Agent System Architecture
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Master multi-agent systems with 95% automation efficiency and $5M+ ROI through advanced orchestration.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold">95%</div>
                    <div className="text-xs opacity-75">Automation</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold">$5M+</div>
                    <div className="text-xs opacity-75">ROI</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Content Showcase */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Link href="/blog/ai-sustainability-green-tech-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10">
              <div className="text-2xl mb-3">🌱</div>
              <h4 className="font-semibold text-sm mb-2 group-hover:text-yellow-300 transition-colors">
                AI Sustainability & Green Tech 2026
              </h4>
              <p className="text-xs opacity-75 mb-3">80% energy reduction, $2M+ savings</p>
              <div className="text-xs text-yellow-300 font-semibold">Read More →</div>
            </div>
          </Link>

          <Link href="/blog/ai-quantum-computing-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10">
              <div className="text-2xl mb-3">⚛️</div>
              <h4 className="font-semibold text-sm mb-2 group-hover:text-yellow-300 transition-colors">
                AI Quantum Computing 2026
              </h4>
              <p className="text-xs opacity-75 mb-3">1000x faster optimization</p>
              <div className="text-xs text-yellow-300 font-semibold">Read More →</div>
            </div>
          </Link>

          <Link href="/case-studies/ai-sustainability-transformation-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10">
              <div className="text-2xl mb-3">📊</div>
              <h4 className="font-semibold text-sm mb-2 group-hover:text-yellow-300 transition-colors">
                AI Sustainability Transformation
              </h4>
              <p className="text-xs opacity-75 mb-3">$10M ROI, 100% carbon neutral</p>
              <div className="text-xs text-yellow-300 font-semibold">Read More →</div>
            </div>
          </Link>

          <Link href="/case-studies/ai-quantum-optimization-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10">
              <div className="text-2xl mb-3">🚀</div>
              <h4 className="font-semibold text-sm mb-2 group-hover:text-yellow-300 transition-colors">
                AI Quantum Optimization 2026
              </h4>
              <p className="text-xs opacity-75 mb-3">1000x speed improvement</p>
              <div className="text-xs text-yellow-300 font-semibold">Read More →</div>
            </div>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full"></div>
            <span className="text-lg font-semibold">Explore All Content</span>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-full"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span className="w-5 h-5 mr-2">📚</span>
              View All Articles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:scale-105"
            >
              <span className="w-5 h-5 mr-2">📊</span>
              View All Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          <p className="text-sm mt-4 opacity-75">
            Join 10,000+ professionals who trust our AI insights and implementation guides
          </p>
        </div>
      </div>
    </section>
  );
}