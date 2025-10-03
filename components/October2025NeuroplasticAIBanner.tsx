import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Sparkles, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function October2025NeuroplasticAIBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-pink-950 to-slate-950 border-y-4 border-purple-500">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      </div>

      {/* Floating Icons Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <Brain className="absolute top-20 left-10 w-12 h-12 text-purple-400/20 animate-float" />
        <Sparkles className="absolute top-40 right-20 w-16 h-16 text-pink-400/20 animate-float-delayed" />
        <TrendingUp className="absolute bottom-20 left-1/4 w-14 h-14 text-fuchsia-400/20 animate-float" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Breaking News Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/20 border border-purple-400/50 rounded-full backdrop-blur-sm animate-pulse-subtle">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span className="text-sm font-bold text-purple-300 uppercase tracking-wider">
              🧠 Just Published: October 1, 2025 🧠
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-400 mb-4 leading-tight">
            Neuroplastic AI Systems
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Self-Adapting Neural Networks
          </h3>
          <p className="text-xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
            Deploy AI achieving <span className="text-purple-300 font-bold">99.2% continuous learning</span>, 
            {' '}<span className="text-purple-300 font-bold">840% faster adaptation</span>, and 
            {' '}<span className="text-purple-300 font-bold">$4.8B value creation</span>
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-6xl mx-auto">
          {[
            { label: 'Learning Accuracy', value: '99.2%', color: 'purple' },
            { label: 'Adaptation Speed', value: '840%', color: 'pink' },
            { label: 'Value Created', value: '$4.8B', color: 'fuchsia' },
            { label: 'Tasks Learned', value: '10,000+', color: 'violet' }
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
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400 transition-all duration-300">
            <Brain className="w-12 h-12 text-purple-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Continuous Learning
            </h4>
            <ul className="space-y-2">
              {[
                'Lifelong learning capability',
                'Real-time adaptation',
                'Meta-learning optimization',
                'Zero catastrophic forgetting'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-purple-200">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-pink-900/40 to-fuchsia-900/40 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-6 hover:border-pink-400 transition-all duration-300">
            <Sparkles className="w-12 h-12 text-pink-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Dynamic Architecture
            </h4>
            <ul className="space-y-2">
              {[
                'Self-modifying networks',
                'Synaptic plasticity',
                'Modular growth',
                'Elastic compute scaling'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-pink-200">
                  <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-fuchsia-900/40 to-violet-900/40 backdrop-blur-sm border border-fuchsia-500/30 rounded-2xl p-6 hover:border-fuchsia-400 transition-all duration-300">
            <TrendingUp className="w-12 h-12 text-fuchsia-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Transfer Excellence
            </h4>
            <ul className="space-y-2">
              {[
                'Cross-domain knowledge',
                'Few-shot adaptation',
                'Zero-shot transfer',
                'Compositional learning'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-fuchsia-200">
                  <CheckCircle2 className="w-5 h-5 text-fuchsia-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/blog/ai-2025-october-neuroplastic-ai-adaptive-learning-systems"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xl font-bold rounded-2xl shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
          >
            <span>Explore Neuroplastic AI →</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="text-purple-300 text-sm mt-4 font-semibold">
            Join 2,940 enterprises deploying self-adapting AI systems
          </p>
        </div>
      </div>
    </div>
  );
}
