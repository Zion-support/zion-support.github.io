import React from 'react';
import Link from 'next/link';

export default function LatestContent2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/30 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-500/30 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              ✨ LATEST 2026 CONTENT
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              JUST PUBLISHED
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Breakthroughs & Success Stories
            </span>
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the latest AI innovations, enterprise transformation guides, and real-world success stories 
            that are reshaping businesses in 2026.
          </p>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Article */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">🤖</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Autonomous AI Systems 2026</h3>
                <p className="text-blue-200 text-sm">Self-Evolving Intelligence Architecture</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 text-sm leading-relaxed">
              Master self-evolving AI systems with 99% automation efficiency and $10M+ ROI through advanced self-learning architectures. 
              Learn how to build systems that continuously improve and optimize themselves.
            </p>
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">99%</div>
                  <div className="text-xs text-blue-200">Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">$10M+</div>
                  <div className="text-xs text-blue-200">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">95%</div>
                  <div className="text-xs text-blue-200">Self-Learning</div>
                </div>
              </div>
            </div>
            <Link
              href="/blog/ai-autonomous-ai-systems-2026"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all hover:scale-105"
            >
              Read Complete Guide →
            </Link>
          </div>

          {/* Featured Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">🏆</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">$12M Success Story</h3>
                <p className="text-blue-200 text-sm">Fortune 500 Cognitive AI Transformation</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 text-sm leading-relaxed">
              See how a Fortune 500 manufacturing company achieved $12M ROI through comprehensive cognitive AI transformation, 
              improving accuracy by 98% and automating 95% of business processes.
            </p>
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">$12M</div>
                  <div className="text-xs text-blue-200">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">98%</div>
                  <div className="text-xs text-blue-200">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">95%</div>
                  <div className="text-xs text-blue-200">Automation</div>
                </div>
              </div>
            </div>
            <Link
              href="/case-studies/ai-cognitive-enterprise-transformation-2026"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all hover:scale-105"
            >
              View Success Story →
            </Link>
          </div>
        </div>

        {/* Additional Content Preview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link href="/blog/ai-cognitive-computing-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🧠</span>
                <span className="text-sm font-semibold text-cyan-400">Cognitive Computing</span>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                AI Cognitive Computing 2026
              </h4>
              <p className="text-blue-200 text-sm mb-4">
                Next-generation intelligence systems with 98% accuracy and $8M+ ROI.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">25 min read</div>
                <div className="text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-agent-orchestration-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">⚡</span>
                <span className="text-sm font-semibold text-purple-400">Agent Orchestration</span>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                AI Agent Orchestration 2026
              </h4>
              <p className="text-blue-200 text-sm mb-4">
                Multi-agent systems with 95% automation efficiency and $5M+ ROI.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">22 min read</div>
                <div className="text-purple-400 font-semibold text-sm group-hover:text-purple-300 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-autonomous-enterprise-success-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🚀</span>
                <span className="text-sm font-semibold text-green-400">Success Story</span>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-green-300 transition-colors mb-2">
                $25M Autonomous Success
              </h4>
              <p className="text-blue-200 text-sm mb-4">
                Fortune 500 case study with 99.9% uptime and 90% cost reduction.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">30 min read</div>
                <div className="text-green-400 font-semibold text-sm group-hover:text-green-300 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              📚 Explore All Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all hover:scale-105"
            >
              💬 Get Expert Consultation
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            Stay ahead with the latest AI innovations and transformation strategies
          </p>
        </div>
      </div>
    </section>
  );
}