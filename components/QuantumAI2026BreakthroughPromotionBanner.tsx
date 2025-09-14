import React from 'react';
import Link from 'next/link';
import { BoltIcon, CpuChipIcon, ChartBarIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export default function QuantumAI2026BreakthroughPromotionBanner() {
  return (
    <section className="relative bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Quantum Pattern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/quantum-pattern.svg')] bg-cover opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20"></div>
      </div>
      
      {/* Floating Quantum Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-3 h-3 bg-cyan-400 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-blue-400 rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-indigo-400 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-70 animate-ping"></div>
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-cyan-300 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-3 h-3 bg-blue-300 rounded-full opacity-50 animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Quantum Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg border border-cyan-400/50">
            <BoltIcon className="w-5 h-5 mr-2" />
            BREAKTHROUGH: Quantum AI 2026 Business Revolution
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Quantum AI 2026:
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Business Breakthrough
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the revolutionary convergence of quantum computing and AI. 
            <strong className="text-cyan-400">10,000x faster processing</strong> for complex business problems, 
            enabling unprecedented optimization and intelligence.
          </p>

          {/* Quantum Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <CpuChipIcon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">10,000x Speed</h3>
              <p className="text-gray-300 text-sm">Quantum processing power</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
              <ChartBarIcon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">99.9% Accuracy</h3>
              <p className="text-gray-300 text-sm">Predictive analytics</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30">
              <BoltIcon className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Analysis</h3>
              <p className="text-gray-300 text-sm">Millions of variables</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <RocketLaunchIcon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Global Optimization</h3>
              <p className="text-gray-300 text-sm">Supply chain mastery</p>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">3000%</div>
              <div className="text-gray-300 text-sm">Optimization Speed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">4000%</div>
              <div className="text-gray-300 text-sm">Portfolio Returns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">5000%</div>
              <div className="text-gray-300 text-sm">Discovery Speed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">90%</div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/quantum-ai-2026-business-breakthrough-ultimate-guide"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Explore Quantum AI Guide
              <BoltIcon className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/services/quantum-ai-consulting"
              className="inline-flex items-center border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
            >
              Get Quantum AI Consultation
            </Link>
          </div>

          {/* Technology Partners */}
          <div className="mt-12">
            <p className="text-gray-400 text-sm mb-4">Powered by leading quantum computing platforms:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-semibold">IBM Quantum</div>
              <div className="text-white font-semibold">Google Quantum AI</div>
              <div className="text-white font-semibold">Microsoft Azure Quantum</div>
              <div className="text-white font-semibold">D-Wave</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}