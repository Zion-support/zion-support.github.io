import React from 'react';
import Link from 'next/link';
import { ArrowRight, Settings, TrendingUp, DollarSign, Shield, Zap } from 'lucide-react';

export default function AIOperationalExcellenceBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 NEW 2026
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              OPERATIONAL EXCELLENCE
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            AI Operational Excellence 2026:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-400">
              90% Automation & $8M+ Savings
            </span>
          </h2>
          
          <p className="text-xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
            Transform your operations with AI-driven automation. Achieve 90% process automation, $8M+ annual savings, 
            and intelligent operations that run themselves. Complete implementation guide with proven frameworks.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/blog/ai-operational-excellence-2026"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center group"
            >
              <Settings className="w-6 h-6 mr-3 group-hover:rotate-90 transition-transform" />
              Read Complete Guide
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/case-studies/ai-operational-excellence-success-2026"
              className="border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-xl font-bold text-lg hover:bg-cyan-400 hover:text-indigo-900 transition-all flex items-center justify-center group"
            >
              <TrendingUp className="w-6 h-6 mr-3" />
              View Success Story
            </Link>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 text-center">
            <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-cyan-300 mb-2">90%</div>
            <div className="text-white/80 font-medium">Process Automation</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30 text-center">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-green-300 mb-2">$8M+</div>
            <div className="text-white/80 font-medium">Annual Savings</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-purple-300 mb-2">99.9%</div>
            <div className="text-white/80 font-medium">System Uptime</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30 text-center">
            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-yellow-300 mb-2">300%</div>
            <div className="text-white/80 font-medium">Efficiency Gain</div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Intelligent Automation</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Self-managing systems that automatically optimize processes, predict failures, and adapt to changing conditions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-cyan-300">
                <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                <span className="text-sm">Predictive maintenance</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300">
                <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                <span className="text-sm">Auto-scaling infrastructure</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300">
                <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                <span className="text-sm">Smart resource allocation</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-400/50 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Performance Optimization</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Continuous optimization algorithms that improve performance, reduce costs, and maximize efficiency across all operations.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-green-300">
                <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                <span className="text-sm">Real-time performance tuning</span>
              </div>
              <div className="flex items-center gap-2 text-green-300">
                <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                <span className="text-sm">Cost optimization algorithms</span>
              </div>
              <div className="flex items-center gap-2 text-green-300">
                <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                <span className="text-sm">Workload balancing</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Enterprise Reliability</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Enterprise-grade reliability with 99.9% uptime, advanced monitoring, and comprehensive security measures.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-purple-300">
                <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                <span className="text-sm">Advanced monitoring</span>
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                <span className="text-sm">Automated incident response</span>
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                <span className="text-sm">Compliance automation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Operations?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Join leading enterprises that have achieved 90% automation and $8M+ savings with AI operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-indigo-900 transition-all"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}