import React from 'react';
import Link from 'next/link';

export default function LatestAIInnovations2026Banner() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">LATEST INNOVATIONS 2026</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Technologies
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Transforming Enterprise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the breakthrough AI innovations that are reshaping industries and creating 
            unprecedented opportunities for business transformation in 2026.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">Autonomous AI Systems</h3>
                  <p className="text-sm text-gray-300">Self-managing intelligent operations</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                AI systems that can operate independently, make decisions, and optimize themselves 
                without human intervention, achieving 99.9% uptime and 85% process automation.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-cyan-400 font-semibold">Available Now</span>
                <Link href="/services/autonomous-ai-systems" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-pink-300">Quantum-Enhanced AI</h3>
                  <p className="text-sm text-gray-300">1000x faster processing power</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Revolutionary quantum computing integration that solves complex optimization problems 
                1000x faster than classical methods, enabling real-time decision making.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-pink-400 font-semibold">Breakthrough Technology</span>
                <Link href="/blog/quantum-ai-revolution-2026" className="text-pink-400 hover:text-pink-300 font-semibold">
                  Read Article →
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-teal-300">Predictive Intelligence</h3>
                  <p className="text-sm text-gray-300">Anticipate and prevent issues</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Advanced predictive analytics that can forecast business needs, identify opportunities, 
                and prevent problems before they occur with 95% accuracy.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-teal-400 font-semibold">Proven Results</span>
                <Link href="/case-studies/fortune-500-ai-transformation-success" className="text-teal-400 hover:text-teal-300 font-semibold">
                  View Success →
                </Link>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-center mb-8 text-white">AI Innovation Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Average ROI</span>
                  <span className="text-3xl font-bold text-green-400">400%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Process Automation</span>
                  <span className="text-3xl font-bold text-blue-400">85%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Cost Reduction</span>
                  <span className="text-3xl font-bold text-purple-400">70%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Efficiency Gains</span>
                  <span className="text-3xl font-bold text-cyan-400">90%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Join 500+ enterprises already transforming with AI
          </p>
        </div>
      </div>
    </section>
  );
}