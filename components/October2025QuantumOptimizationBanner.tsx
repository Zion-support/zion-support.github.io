import { Link } from 'react-router-dom';
import { Atom, Zap, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function October2025QuantumOptimizationBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950 border-y-4 border-purple-500">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(147,51,234,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      </div>

      {/* Floating Icons Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <Atom className="absolute top-20 left-10 w-12 h-12 text-purple-400/20 animate-float" />
        <Zap className="absolute top-40 right-20 w-16 h-16 text-blue-400/20 animate-float-delayed" />
        <TrendingUp className="absolute bottom-20 left-1/4 w-14 h-14 text-indigo-400/20 animate-float" />
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
              ⚛️ Just Published: October 1, 2025 ⚛️
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 mb-4 leading-tight">
            Quantum Optimization AI
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            10,000x Faster Enterprise Decisions
          </h3>
          <p className="text-xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
            Harness quantum-inspired AI achieving <span className="text-purple-300 font-bold">10,000x faster optimization</span>, 
            {' '}<span className="text-purple-300 font-bold">97.8% accuracy</span>, and 
            {' '}<span className="text-purple-300 font-bold">$3.8B value creation</span>
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-6xl mx-auto">
          {[
            { label: 'Speed Increase', value: '10,000x', color: 'purple' },
            { label: 'Accuracy', value: '97.8%', color: 'indigo' },
            { label: 'Value Created', value: '$3.8B', color: 'blue' },
            { label: 'Deployments', value: '2,847', color: 'violet' }
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
          <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400 transition-all duration-300">
            <Atom className="w-12 h-12 text-purple-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Quantum Algorithms
            </h4>
            <ul className="space-y-2">
              {[
                'QAOA & VQE optimization',
                'Quantum annealing simulation',
                'Tensor network methods',
                'Hybrid quantum-classical'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-purple-200">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/40 to-blue-900/40 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-6 hover:border-indigo-400 transition-all duration-300">
            <Zap className="w-12 h-12 text-indigo-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Enterprise Applications
            </h4>
            <ul className="space-y-2">
              {[
                'Supply chain optimization',
                'Portfolio management',
                'Resource allocation',
                'Manufacturing scheduling'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-indigo-200">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-900/40 to-violet-900/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400 transition-all duration-300">
            <TrendingUp className="w-12 h-12 text-blue-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Business Impact
            </h4>
            <ul className="space-y-2">
              {[
                '42% cost reduction',
                'Sub-second decisions',
                '847% average ROI',
                'Real-time optimization'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-blue-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/blog/ai-2025-october-quantum-optimization-enterprise-revolution"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-xl font-bold rounded-2xl shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
          >
            <span>Explore Quantum Optimization →</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="text-purple-300 text-sm mt-4 font-semibold">
            Join 2,847 enterprises leveraging quantum-inspired AI for breakthrough optimization
          </p>
        </div>
      </div>
    </div>
  );
}
