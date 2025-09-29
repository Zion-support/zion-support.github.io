import React from 'react';
import Link from 'next/link';

export default function LatestAIInnovations2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold mb-6">
            <span className="w-4 h-4 mr-2">🚀</span>
            LATEST 2026 INNOVATIONS
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Cutting-Edge AI Solutions for 2026
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our latest research, case studies, and technical insights that are shaping the future of AI and technology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-3xl">🤖</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">AI Agent Orchestration</h3>
                <p className="text-emerald-100">Multi-Agent Systems</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
            </div>
            <h4 className="text-xl font-bold mb-3">
              AI Agent Orchestration 2026: Multi-Agent System Architecture
            </h4>
            <p className="text-emerald-100 mb-6">
              Master multi-agent systems with 95% automation efficiency and $5M+ ROI through advanced orchestration patterns. 
              Learn enterprise-grade AI agent coordination strategies.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-xs opacity-75">Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">$5M+</div>
                  <div className="text-xs opacity-75">ROI</div>
                </div>
              </div>
              <Link
                href="/blog/ai-agent-orchestration-2026"
                className="bg-white text-emerald-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-3xl">🌱</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">AI Sustainability</h3>
                <p className="text-emerald-100">Green Technology</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
            </div>
            <h4 className="text-xl font-bold mb-3">
              AI Sustainability Transformation 2026: $10M ROI Case Study
            </h4>
            <p className="text-emerald-100 mb-6">
              See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability 
              transformation and green technology.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">$10M</div>
                  <div className="text-xs opacity-75">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-xs opacity-75">Carbon Neutral</div>
                </div>
              </div>
              <Link
                href="/case-studies/ai-sustainability-transformation-2026"
                className="bg-white text-emerald-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
          >
            <span className="w-5 h-5 mr-2">🚀</span>
            Explore All Innovations
          </Link>
        </div>
      </div>
    </section>
  );
}