// import React from 'react';
import { ArrowRight, Calendar, Star, TrendingUp } from 'lucide-react';

export default function December2025April2026NewContentShowcaseBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M80 0c44.183 0 80 35.817 80 80s-35.817 80-80 80S0 124.183 0 80 35.817 0 80 0zm0 20c-33.137 0-60 26.863-60 60s26.863 60 60 60 60-26.863 60-60-26.863-60-60-60zm0 20c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 20c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Header Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">🆕 NEW CONTENT SHOWCASE: DECEMBER 2025 - APRIL 2026</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary AI Breakthroughs
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            5 Groundbreaking AI Technologies That Are Transforming Enterprise Operations
          </p>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Autonomous Code Generation */}
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Autonomous Code Generation</h3>
                  <p className="text-sm text-blue-300">Dec 2025</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                AI that writes, tests, and deploys production-ready code with 94% accuracy and 10x faster development.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-blue-400 font-semibold">$2.7B Savings</div>
                <a href="/blog/ai-2025-december-autonomous-code-generation-revolution" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quantum AI Security */}
            <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🔐</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Quantum AI Security</h3>
                  <p className="text-sm text-purple-300">Jan 2026</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Unbreakable enterprise protection with 99.99% threat prevention against quantum-powered attacks.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-purple-400 font-semibold">$847B Protected</div>
                <a href="/blog/ai-2026-january-quantum-ai-security-breakthrough" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Autonomous Business Intelligence */}
            <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30 hover:border-green-400/60 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Autonomous BI</h3>
                  <p className="text-sm text-green-300">Feb 2026</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Self-evolving analytics that generate insights 50x faster with 97% prediction accuracy.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-green-400 font-semibold">$3.2B Value</div>
                <a href="/blog/ai-2026-february-autonomous-business-intelligence" className="text-green-400 hover:text-green-300 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Edge AI Revolution */}
            <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/30 hover:border-orange-400/60 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Edge AI Revolution</h3>
                  <p className="text-sm text-orange-300">Mar 2026</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Sub-millisecond intelligence at scale across 10,000+ devices with 99.99% uptime.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-orange-400 font-semibold">$1.8B Value</div>
                <a href="/blog/ai-2026-march-edge-ai-revolution" className="text-orange-400 hover:text-orange-300 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Sustainable AI */}
            <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Sustainable AI</h3>
                  <p className="text-sm text-emerald-300">Apr 2026</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Carbon-neutral intelligence with 94% emission reduction and 3.5x better performance.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-emerald-400 font-semibold">$67M Savings</div>
                <a href="/blog/ai-2026-april-sustainable-ai-transformation" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="bg-gradient-to-br from-gray-800/50 to-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-400/30 hover:border-gray-400/60 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">More Coming Soon</h3>
                  <p className="text-sm text-gray-300">May 2026+</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Stay tuned for more revolutionary AI breakthroughs and enterprise transformation guides.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-gray-400 font-semibold">Stay Updated</div>
                <a href="/contact" className="text-gray-400 hover:text-gray-300 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Combined Impact */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-400/30 mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Combined Revolutionary Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">$6.8B+</div>
                <div className="text-sm text-gray-300">Total Value Creation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">94%</div>
                <div className="text-sm text-gray-300">Average Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">10x</div>
                <div className="text-sm text-gray-300">Performance Gains</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
                <div className="text-sm text-gray-300">Enterprise Deployments</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Explore All Content
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/30 transition-all duration-200 backdrop-blur-sm"
            >
              Get Expert Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}