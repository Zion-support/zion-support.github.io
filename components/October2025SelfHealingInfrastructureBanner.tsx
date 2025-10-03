// import React from 'react';
import { Activity, Shield, Zap, Sparkles, DollarSign, CheckCircle } from 'lucide-react';

export default function October2025SelfHealingInfrastructureBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 py-16 px-6 sm:px-12 lg:px-16">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* NEW Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-black font-bold text-sm animate-bounce shadow-2xl">
            <Sparkles className="w-5 h-5" />
            🔧 BREAKTHROUGH: OCTOBER 1, 2025 - SELF-HEALING INFRASTRUCTURE REVOLUTION! 🔧
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200">
          🔧 Self-Healing Autonomous Infrastructure 🤖
        </h2>

        <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-yellow-300">
          Zero-Touch Enterprise Operations
        </h3>

        {/* Key metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-emerald-800 to-emerald-900 p-6 rounded-2xl border-2 border-emerald-400 shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-8 h-8 text-yellow-300" />
              <div className="text-yellow-300 font-bold text-lg">UPTIME</div>
            </div>
            <div className="text-4xl font-extrabold text-white mb-2">99.999%</div>
            <div className="text-emerald-200 text-sm">Guaranteed SLA</div>
          </div>

          <div className="bg-gradient-to-br from-teal-800 to-teal-900 p-6 rounded-2xl border-2 border-teal-400 shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-8 h-8 text-green-300" />
              <div className="text-green-300 font-bold text-lg">AUTO-HEALING</div>
            </div>
            <div className="text-4xl font-extrabold text-white mb-2">97%</div>
            <div className="text-teal-200 text-sm">Incidents Auto-Resolved</div>
          </div>

          <div className="bg-gradient-to-br from-cyan-800 to-cyan-900 p-6 rounded-2xl border-2 border-cyan-400 shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="w-8 h-8 text-green-400" />
              <div className="text-green-400 font-bold text-lg">SAVINGS</div>
            </div>
            <div className="text-4xl font-extrabold text-white mb-2">$18.4B</div>
            <div className="text-cyan-200 text-sm">Operational Savings</div>
          </div>

          <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-6 rounded-2xl border-2 border-blue-400 shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-8 h-8 text-yellow-300" />
              <div className="text-yellow-300 font-bold text-lg">SPEED</div>
            </div>
            <div className="text-4xl font-extrabold text-white mb-2">3 min</div>
            <div className="text-blue-200 text-sm">Average MTTR</div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-gradient-to-r from-emerald-800/50 to-cyan-800/50 backdrop-blur-sm p-8 rounded-3xl border border-emerald-400/30 mb-10 shadow-2xl">
          <p className="text-xl text-center text-white mb-6 leading-relaxed">
            <strong className="text-yellow-300">Revolutionary AI-powered infrastructure management</strong> that automatically 
            predicts, detects, and resolves issues before they impact your business. Achieve <strong className="text-emerald-300">100% autonomous recovery</strong>, 
            <strong className="text-cyan-300"> 99.999% uptime</strong>, and <strong className="text-green-300">92% cost reduction</strong>. 
            Join Fortune 500 leaders already operating in zero-touch mode.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <Activity className="w-12 h-12 text-emerald-300 mx-auto mb-3" />
              <div className="font-bold text-white mb-2">Predictive Intelligence</div>
              <div className="text-sm text-emerald-200">Predict failures 72 hours in advance</div>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-yellow-300 mx-auto mb-3" />
              <div className="font-bold text-white mb-2">Autonomous Recovery</div>
              <div className="text-sm text-teal-200">Zero-touch healing from 97% of incidents</div>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-cyan-300 mx-auto mb-3" />
              <div className="font-bold text-white mb-2">Continuous Learning</div>
              <div className="text-sm text-cyan-200">Self-improving from every incident</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="/blog/ai-2025-oct-01-self-healing-autonomous-infrastructure"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105"
          >
            <Sparkles className="w-6 h-6" />
            Read the Complete Guide
            <Sparkles className="w-6 h-6" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold text-lg rounded-full hover:from-emerald-500 hover:to-cyan-500 transition-all shadow-2xl border-2 border-white/30"
          >
            <Shield className="w-6 h-6" />
            Start Your Free Assessment
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-12 text-center">
          <p className="text-emerald-200 text-sm mb-4">
            ⭐⭐⭐⭐⭐ Trusted by 50+ Fortune 500 Companies
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-white/60 text-sm">
            <span>☁️ Cloud Infrastructure</span>
            <span>🗄️ Database Operations</span>
            <span>🌐 Network Management</span>
            <span>📦 Application Infrastructure</span>
          </div>
        </div>
      </div>
    </div>
  );
}
