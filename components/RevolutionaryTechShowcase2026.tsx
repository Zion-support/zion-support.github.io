import React from 'react';
import Link from 'next/link';

export default function RevolutionaryTechShowcase2026() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium mb-6">
            <span className="w-4 h-4 mr-2">🌟</span>
            REVOLUTIONARY TECHNOLOGY 2026
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Game-Changing AI Technologies Reshaping Industries
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover breakthrough technologies that are revolutionizing business operations, 
            creating new opportunities, and delivering unprecedented competitive advantages
          </p>
        </div>

        {/* Featured Technology Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* AI-Powered Predictive Analytics */}
          <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-3xl">📊</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Predictive Analytics AI</h3>
                <p className="text-blue-300">Future-ready insights</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-lg">
              Advanced predictive analytics powered by AI that forecasts trends, identifies opportunities, 
              and prevents issues before they occur. Achieve 95% prediction accuracy and $3M+ in savings.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">95%</div>
                <div className="text-sm text-gray-400">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">$3M+</div>
                <div className="text-sm text-gray-400">Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-gray-400">Monitoring</div>
              </div>
            </div>
            <Link
              href="/services/predictive-analytics-ai"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
            >
              Explore Predictive AI →
            </Link>
          </div>

          {/* Autonomous Business Intelligence */}
          <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                <span className="text-3xl">🤖</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Autonomous Business Intelligence</h3>
                <p className="text-green-300">Self-evolving insights</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-lg">
              Self-managing business intelligence systems that continuously learn, adapt, and optimize. 
              Deliver real-time insights with 90% automation and zero manual intervention required.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">90%</div>
                <div className="text-sm text-gray-400">Automation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400">Real-time</div>
                <div className="text-sm text-gray-400">Insights</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">Zero</div>
                <div className="text-sm text-gray-400">Manual Work</div>
              </div>
            </div>
            <Link
              href="/services/autonomous-business-intelligence"
              className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
            >
              Discover Autonomous BI →
            </Link>
          </div>
        </div>

        {/* Technology Innovation Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-edge-computing-revolution-2026" className="group">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW TECH
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-blue-400 font-medium">📱 Edge Computing</span>
                <span className="text-sm text-gray-400">Sub-50ms latency</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                AI Edge Computing Revolution 2026
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Revolutionary edge AI computing delivering sub-50ms response times with intelligent 
                processing at the network edge for real-time applications.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400">&lt;50ms</div>
                  <div className="text-xs text-gray-400">Latency</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400">99.9%</div>
                  <div className="text-xs text-gray-400">Reliability</div>
                </div>
              </div>
              <div className="flex items-center text-blue-400 font-semibold text-sm group-hover:text-blue-300 transition-colors">
                Explore Edge AI →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-blockchain-integration-2026" className="group">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW TECH
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-purple-400 font-medium">⛓️ Blockchain AI</span>
                <span className="text-sm text-gray-400">Decentralized intelligence</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                AI-Blockchain Integration 2026
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Revolutionary integration of AI and blockchain technology creating decentralized, 
                secure, and transparent intelligent systems for enterprise applications.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400">100%</div>
                  <div className="text-xs text-gray-400">Secure</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-pink-400">Decentralized</div>
                  <div className="text-xs text-gray-400">Architecture</div>
                </div>
              </div>
              <div className="flex items-center text-purple-400 font-semibold text-sm group-hover:text-purple-300 transition-colors">
                Discover Blockchain AI →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-cybersecurity-advanced-2026" className="group">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/20 hover:border-red-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW TECH
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-red-400 font-medium">🛡️ AI Security</span>
                <span className="text-sm text-gray-400">Advanced protection</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                Advanced AI Cybersecurity 2026
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Next-generation AI-powered cybersecurity with autonomous threat detection, 
                predictive security analytics, and zero-trust architecture.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-red-400">99.9%</div>
                  <div className="text-xs text-gray-400">Threat Detection</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-400">Zero-trust</div>
                  <div className="text-xs text-gray-400">Architecture</div>
                </div>
              </div>
              <div className="flex items-center text-red-400 font-semibold text-sm group-hover:text-red-300 transition-colors">
                Explore AI Security →
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="w-5 h-5 mr-2">🌟</span>
            Explore All Revolutionary Technologies
          </Link>
        </div>
      </div>
    </section>
  );
}