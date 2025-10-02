import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025EnterpriseAIExcellenceBanner() {
  return (
    <div className="bg-gradient-to-br from-emerald-950 via-teal-950 to-cyan-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-5 py-2 bg-emerald-500/30 text-emerald-300 font-bold rounded-full border-2 border-emerald-400 text-sm animate-pulse">
              🎉 FRESH CONTENT - OCT 1, 2025
            </span>
            <span className="px-5 py-2 bg-cyan-500/30 text-cyan-300 font-bold rounded-full border-2 border-cyan-400 text-sm">
              🏆 ENTERPRISE-GRADE
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              The Production AI Playbook
            </span>
          </h2>
          
          <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Everything you need to build, deploy, and govern AI systems at scale—based on real implementations 
            from the world's most advanced AI engineering teams
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-emerald-500/40 hover:border-emerald-400 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/30">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 bg-emerald-500/20 rounded-xl">
                <span className="text-4xl">🎯</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-300 mb-2">For ML Engineers</h3>
                <p className="text-white/70">
                  Deep technical guides on observability, autoscaling, and production deployment
                </p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-400 text-xl">→</span>
                <span>Distributed tracing for multi-agent systems</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-400 text-xl">→</span>
                <span>GPU-aware Kubernetes autoscaling patterns</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-400 text-xl">→</span>
                <span>Production-ready Python/TypeScript code</span>
              </li>
            </ul>
            <Link 
              to="/blog/ai-2025-oct-advanced-observability-agentic-systems" 
              className="inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-all"
            >
              Start with Observability →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-cyan-500/40 hover:border-cyan-400 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/30">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 bg-cyan-500/20 rounded-xl">
                <span className="text-4xl">👔</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-300 mb-2">For Engineering Leaders</h3>
                <p className="text-white/70">
                  Strategic frameworks for governance, compliance, and organizational scaling
                </p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-400 text-xl">→</span>
                <span>Automated compliance with 99.7% success rate</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-400 text-xl">→</span>
                <span>ROI analysis with real financial data</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <span className="text-green-400 text-xl">→</span>
                <span>Implementation roadmaps and timelines</span>
              </li>
            </ul>
            <Link 
              to="/blog/ai-2025-oct-responsible-ai-governance-automation" 
              className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-all"
            >
              Explore Governance →
            </Link>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10 border-2 border-teal-400/40 rounded-2xl p-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-emerald-400 mb-2">49 min</div>
              <div className="text-white/70 text-sm">Total Reading Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-teal-400 mb-2">$5.6M</div>
              <div className="text-white/70 text-sm">Combined Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-cyan-400 mb-2">3</div>
              <div className="text-white/70 text-sm">Fortune 500 Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-blue-400 mb-2">100+</div>
              <div className="text-white/70 text-sm">Code Examples</div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-xl text-white/90 mb-6">
              Join 10,000+ engineers who stay ahead of the AI curve
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/blog" 
                className="px-10 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Read All Three Guides →
              </Link>
              <Link 
                to="/contact" 
                className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white text-lg font-bold rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300"
              >
                Get Expert Help →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
