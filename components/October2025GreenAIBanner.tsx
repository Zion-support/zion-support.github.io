import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Zap, TrendingDown, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function October2025GreenAIBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-green-950 via-lime-950 to-slate-950 border-y-4 border-green-500">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,197,94,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      </div>

      {/* Floating Icons Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <Leaf className="absolute top-20 left-10 w-12 h-12 text-green-400/20 animate-float" />
        <Zap className="absolute top-40 right-20 w-16 h-16 text-lime-400/20 animate-float-delayed" />
        <TrendingDown className="absolute bottom-20 left-1/4 w-14 h-14 text-emerald-400/20 animate-float" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Breaking News Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/20 border border-green-400/50 rounded-full backdrop-blur-sm animate-pulse-subtle">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-bold text-green-300 uppercase tracking-wider">
              🌱 Just Published: October 1, 2025 🌱
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 mb-4 leading-tight">
            Green AI & Sustainable Computing
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Carbon-Neutral AI Revolution
          </h3>
          <p className="text-xl text-green-200 max-w-4xl mx-auto leading-relaxed">
            Achieve <span className="text-green-300 font-bold">89% energy reduction</span>, 
            {' '}<span className="text-green-300 font-bold">carbon-neutral operations</span>, and 
            {' '}<span className="text-green-300 font-bold">$3.7B cost savings</span> with sustainable AI
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-6xl mx-auto">
          {[
            { label: 'Energy Reduction', value: '89%', color: 'green' },
            { label: 'Carbon Status', value: 'Neutral', color: 'lime' },
            { label: 'Cost Savings', value: '$3.7B', color: 'emerald' },
            { label: 'CO2 Avoided', value: '2.4M tons', color: 'teal' }
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
          <div className="bg-gradient-to-br from-green-900/40 to-lime-900/40 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 hover:border-green-400 transition-all duration-300">
            <Leaf className="w-12 h-12 text-green-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Algorithm Efficiency
            </h4>
            <ul className="space-y-2">
              {[
                '94% fewer parameters',
                'Sparse neural networks',
                '75% compute reduction',
                'Knowledge distillation'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-green-200">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-lime-900/40 to-emerald-900/40 backdrop-blur-sm border border-lime-500/30 rounded-2xl p-6 hover:border-lime-400 transition-all duration-300">
            <Zap className="w-12 h-12 text-lime-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Hardware Innovation
            </h4>
            <ul className="space-y-2">
              {[
                '10x energy-efficient chips',
                'Neuromorphic computing',
                '67% cooling reduction',
                'Dynamic power scaling'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-lime-200">
                  <CheckCircle2 className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-400 transition-all duration-300">
            <TrendingDown className="w-12 h-12 text-emerald-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Renewable Integration
            </h4>
            <ul className="space-y-2">
              {[
                '100% renewable power',
                'Smart workload scheduling',
                'Grid optimization',
                'Battery storage systems'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-emerald-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/blog/ai-2025-october-green-ai-sustainable-computing-revolution"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-500 hover:to-lime-500 text-white text-xl font-bold rounded-2xl shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300"
          >
            <span>Discover Green AI →</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="text-green-300 text-sm mt-4 font-semibold">
            Join 3,247 enterprises going carbon-neutral with AI
          </p>
        </div>
      </div>
    </div>
  );
}
