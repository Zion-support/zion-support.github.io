import React from 'react';
import Link from 'next/link';

export default function LatestAI2026InnovationsBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-400/30">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            <span className="text-sm font-medium">LATEST AI 2026 INNOVATIONS</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Breakthroughs 2026
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the future of AI with cutting-edge innovations that are transforming industries 
            and creating unprecedented business value in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold mb-2">95% Process Reduction</h3>
              <p className="text-gray-300 text-sm mb-4">AI automation achieving unprecedented efficiency gains</p>
              <div className="text-2xl font-bold text-blue-400">$12M+</div>
              <div className="text-xs text-gray-400">Annual Savings</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔮</span>
              </div>
              <h3 className="text-lg font-bold mb-2">10,000x Speed</h3>
              <p className="text-gray-300 text-sm mb-4">Quantum computing revolutionizing AI performance</p>
              <div className="text-2xl font-bold text-purple-400">∞</div>
              <div className="text-xs text-gray-400">Complexity Limit</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-lg font-bold mb-2">99.9% Uptime</h3>
              <p className="text-gray-300 text-sm mb-4">Autonomous systems with self-healing capabilities</p>
              <div className="text-2xl font-bold text-green-400">24/7</div>
              <div className="text-xs text-gray-400">Operation</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-lg font-bold mb-2">300% ROI</h3>
              <p className="text-gray-300 text-sm mb-4">Proven returns on AI transformation investments</p>
              <div className="text-2xl font-bold text-orange-400">$2B+</div>
              <div className="text-xs text-gray-400">Value Created</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-gray-300 mb-6">
                Join leading enterprises that are already leveraging these revolutionary AI innovations 
                to achieve unprecedented results and competitive advantages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                >
                  Explore AI Services
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-gray-400 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 hover:text-gray-900 transition-all duration-300 text-center"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-green-400">99.9%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-gray-400">Expert Support</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-orange-400">$2M+</div>
                <div className="text-sm text-gray-400">Cost Savings</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>Live updates on AI innovations</span>
            <span className="mx-2">•</span>
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span>Expert insights and analysis</span>
            <span className="mx-2">•</span>
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
            <span>Implementation guidance</span>
          </div>
        </div>
      </div>
    </section>
  );
}