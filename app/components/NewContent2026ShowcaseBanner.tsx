import React from 'react';
import Link from 'next/link';

export default function NewContent2026ShowcaseBanner() {
  return (
    <div className="w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🚀 EXCLUSIVE 2026 CONTENT
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Just Released
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover the latest breakthroughs in AI technology, enterprise transformation strategies, 
            and real-world success stories that are reshaping industries worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Featured Article 1 */}
          <Link 
            href="/blog/ai-agent-orchestration-2026"
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                NEW 2026
              </span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                BREAKTHROUGH
              </span>
            </div>
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
              AI Agent Orchestration 2026
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Master multi-agent systems with 95% automation efficiency and $5M+ ROI through advanced orchestration patterns.
            </p>
            <div className="flex gap-4 mb-4">
              <div className="text-center">
                <div className="text-lg font-bold text-blue-400">95%</div>
                <div className="text-xs text-gray-400">Automation</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-400">$5M+</div>
                <div className="text-xs text-gray-400">ROI</div>
              </div>
            </div>
            <div className="text-sm text-yellow-300 font-semibold group-hover:text-yellow-200 transition-colors">
              Read Article →
            </div>
          </Link>
          
          {/* Featured Case Study */}
          <Link 
            href="/case-studies/ai-sustainability-transformation-2026"
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                NEW 2026
              </span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                FEATURED
              </span>
            </div>
            <div className="text-3xl mb-3">🌱</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
              AI Sustainability Transformation
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation.
            </p>
            <div className="flex gap-4 mb-4">
              <div className="text-center">
                <div className="text-lg font-bold text-green-400">$10M</div>
                <div className="text-xs text-gray-400">ROI</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-teal-400">100%</div>
                <div className="text-xs text-gray-400">Carbon Neutral</div>
              </div>
            </div>
            <div className="text-sm text-yellow-300 font-semibold group-hover:text-yellow-200 transition-colors">
              View Case Study →
            </div>
          </Link>
          
          {/* Featured Article 2 */}
          <Link 
            href="/blog/ai-sustainability-green-tech-2026"
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                NEW 2026
              </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                INNOVATION
              </span>
            </div>
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
              AI Sustainability & Green Tech
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology.
            </p>
            <div className="flex gap-4 mb-4">
              <div className="text-center">
                <div className="text-lg font-bold text-green-400">80%</div>
                <div className="text-xs text-gray-400">Energy Saved</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-400">$2M+</div>
                <div className="text-xs text-gray-400">Savings</div>
              </div>
            </div>
            <div className="text-sm text-yellow-300 font-semibold group-hover:text-yellow-200 transition-colors">
              Read Article →
            </div>
          </Link>
        </div>
        
        {/* Additional Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Link 
            href="/blog/ai-quantum-computing-2026"
            className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-2xl mb-2">⚛️</div>
            <h3 className="font-bold text-sm mb-1">AI Quantum Computing</h3>
            <p className="text-xs opacity-90">1000x faster optimization</p>
            <div className="text-xs text-purple-300 mt-2 font-semibold group-hover:text-purple-200 transition-colors">NEW</div>
          </Link>
          
          <Link 
            href="/case-studies/ai-quantum-optimization-2026"
            className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-2xl mb-2">🚀</div>
            <h3 className="font-bold text-sm mb-1">Quantum Optimization</h3>
            <p className="text-xs opacity-90">1000x speed improvement</p>
            <div className="text-xs text-orange-300 mt-2 font-semibold group-hover:text-orange-200 transition-colors">CASE STUDY</div>
          </Link>
          
          <Link 
            href="/blog/ai-neural-architecture-optimization-2026"
            className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-2xl mb-2">🧠</div>
            <h3 className="font-bold text-sm mb-1">Neural Architecture</h3>
            <p className="text-xs opacity-90">40% performance gains</p>
            <div className="text-xs text-blue-300 mt-2 font-semibold group-hover:text-blue-200 transition-colors">BREAKTHROUGH</div>
          </Link>
          
          <Link 
            href="/blog/ai-space-tech-2026"
            className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-2xl mb-2">🌌</div>
            <h3 className="font-bold text-sm mb-1">AI Space Technology</h3>
            <p className="text-xs opacity-90">Autonomous space operations</p>
            <div className="text-xs text-cyan-300 mt-2 font-semibold group-hover:text-cyan-200 transition-colors">REVOLUTIONARY</div>
          </Link>
        </div>
        
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Join 10,000+ Enterprise Leaders</h3>
            <p className="text-gray-300 mb-6">
              Get exclusive access to cutting-edge AI insights, implementation strategies, and success stories 
              that are transforming businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all shadow-lg transform hover:scale-105"
              >
                📚 Explore All Content
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-all transform hover:scale-105"
              >
                📊 View Case Studies
              </Link>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20">
              <div className="flex justify-center items-center gap-8 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Exclusive Content</span>
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
    </div>
  );
}