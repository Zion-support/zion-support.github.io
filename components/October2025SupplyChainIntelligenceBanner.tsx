import { Link } from 'react-router-dom';
import { Truck, Network, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function October2025SupplyChainIntelligenceBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-indigo-950 border-y-4 border-cyan-500">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      </div>

      {/* Floating Icons Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <Truck className="absolute top-20 left-10 w-12 h-12 text-cyan-400/20 animate-float" />
        <Network className="absolute top-40 right-20 w-16 h-16 text-blue-400/20 animate-float-delayed" />
        <BarChart3 className="absolute bottom-20 left-1/4 w-14 h-14 text-indigo-400/20 animate-float" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Breaking News Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-500/20 border border-cyan-400/50 rounded-full backdrop-blur-sm animate-pulse-subtle">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-sm font-bold text-cyan-300 uppercase tracking-wider">
              🚚 Just Published: October 1, 2025 🚚
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 mb-4 leading-tight">
            Autonomous Supply Chain
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Multi-Agent Intelligence Revolution
          </h3>
          <p className="text-xl text-cyan-200 max-w-4xl mx-auto leading-relaxed">
            Deploy self-coordinating AI agents achieving <span className="text-cyan-300 font-bold">99.2% on-time delivery</span>, 
            {' '}<span className="text-cyan-300 font-bold">58% cost reduction</span>, and 
            {' '}<span className="text-cyan-300 font-bold">$4.2B value creation</span>
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-6xl mx-auto">
          {[
            { label: 'On-Time Delivery', value: '99.2%', color: 'cyan' },
            { label: 'Cost Reduction', value: '58%', color: 'blue' },
            { label: 'Value Created', value: '$4.2B', color: 'indigo' },
            { label: 'AI Agents', value: '10,000+', color: 'sky' }
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
          <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300">
            <Truck className="w-12 h-12 text-cyan-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Autonomous Operations
            </h4>
            <ul className="space-y-2">
              {[
                'Self-coordinating agents',
                'Real-time optimization',
                '4.7 min disruption response',
                'Zero human intervention'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-cyan-200">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400 transition-all duration-300">
            <Network className="w-12 h-12 text-blue-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Multi-Agent Network
            </h4>
            <ul className="space-y-2">
              {[
                'Demand forecasting agents',
                'Procurement automation',
                'Inventory optimization',
                'Transportation coordination'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-blue-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/40 to-cyan-900/40 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-6 hover:border-indigo-400 transition-all duration-300">
            <BarChart3 className="w-12 h-12 text-indigo-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Business Results
            </h4>
            <ul className="space-y-2">
              {[
                '94% forecast accuracy',
                '47% procurement savings',
                '42% lower inventory',
                '947% average ROI'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-indigo-200">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/blog/ai-2025-october-autonomous-supply-chain-intelligence-revolution"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xl font-bold rounded-2xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300"
          >
            <span>Explore Supply Chain AI →</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="text-cyan-300 text-sm mt-4 font-semibold">
            Join 1,847 enterprises revolutionizing logistics with autonomous multi-agent systems
          </p>
        </div>
      </div>
    </div>
  );
}
