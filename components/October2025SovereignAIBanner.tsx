import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function October2025SovereignAIBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-950 border-y-4 border-emerald-500">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      </div>

      {/* Floating Icons Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <Shield className="absolute top-20 left-10 w-12 h-12 text-emerald-400/20 animate-float" />
        <Lock className="absolute top-40 right-20 w-16 h-16 text-teal-400/20 animate-float-delayed" />
        <TrendingUp className="absolute bottom-20 left-1/4 w-14 h-14 text-green-400/20 animate-float" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Breaking News Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/20 border border-emerald-400/50 rounded-full backdrop-blur-sm animate-pulse-subtle">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-bold text-emerald-300 uppercase tracking-wider">
              🏛️ Just Published: October 1, 2025 🏛️
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 mb-4 leading-tight">
            Sovereign AI Infrastructure
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            National AI Autonomy Revolution
          </h3>
          <p className="text-xl text-emerald-200 max-w-4xl mx-auto leading-relaxed">
            Build sovereign AI infrastructure achieving <span className="text-emerald-300 font-bold">99.95% data sovereignty</span>, 
            {' '}<span className="text-emerald-300 font-bold">100% regulatory compliance</span>, and 
            {' '}<span className="text-emerald-300 font-bold">$2.4B cost savings</span>
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-6xl mx-auto">
          {[
            { label: 'Data Sovereignty', value: '99.95%', color: 'emerald' },
            { label: 'Compliance', value: '100%', color: 'teal' },
            { label: 'Cost Savings', value: '$2.4B', color: 'green' },
            { label: 'Deployments', value: '1,847', color: 'lime' }
          ].map((metric, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:scale-105 transition-transform duration-300">
              <div className={`text-3xl font-black text-${metric.color}-400 mb-1`}>
                {metric.value}
              </div>
              <div className="text-sm text-gray-300 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-400 transition-all duration-300">
            <Shield className="w-12 h-12 text-emerald-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Complete Sovereignty
            </h4>
            <ul className="space-y-2">
              {[
                'On-premises deployment',
                'Air-gapped operations',
                'Military-grade encryption',
                'Sovereign model training'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-emerald-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-teal-900/40 to-green-900/40 backdrop-blur-sm border border-teal-500/30 rounded-2xl p-6 hover:border-teal-400 transition-all duration-300">
            <Lock className="w-12 h-12 text-teal-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Regulatory Excellence
            </h4>
            <ul className="space-y-2">
              {[
                '100% GDPR compliance',
                'ISO 27001 certified',
                'Complete audit trails',
                'Explainable AI built-in'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-teal-200">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-900/40 to-lime-900/40 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 hover:border-green-400 transition-all duration-300">
            <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Independence & Value
            </h4>
            <ul className="space-y-2">
              {[
                '73% less foreign dependency',
                '$2.4B annual savings',
                'Zero vendor lock-in',
                'Local talent development'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-green-200">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/blog/ai-2025-october-sovereign-ai-infrastructure-revolution"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xl font-bold rounded-2xl shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300"
          >
            <span>Explore Sovereign AI →</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="text-emerald-300 text-sm mt-4 font-semibold">
            Join 1,847 organizations achieving complete AI sovereignty
          </p>
        </div>
      </div>
    </div>
  );
}
