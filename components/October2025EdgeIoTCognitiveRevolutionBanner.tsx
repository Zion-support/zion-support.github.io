// import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Zap, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function October2025EdgeIoTCognitiveRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 border-y-4 border-indigo-500">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      </div>

      {/* Floating Icons Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <Cpu className="absolute top-20 left-10 w-12 h-12 text-indigo-400/20 animate-float" />
        <Zap className="absolute top-40 right-20 w-16 h-16 text-purple-400/20 animate-float-delayed" />
        <TrendingUp className="absolute bottom-20 left-1/4 w-14 h-14 text-blue-400/20 animate-float" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Breaking News Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-500/20 border border-indigo-400/50 rounded-full backdrop-blur-sm animate-pulse-subtle">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
            </span>
            <span className="text-sm font-bold text-indigo-300 uppercase tracking-wider">
              🔥 Just Published: October 1, 2025 🔥
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-4 leading-tight">
            Edge IoT Cognitive AI
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Revolution at the Edge
          </h3>
          <p className="text-xl text-indigo-200 max-w-4xl mx-auto leading-relaxed">
            Deploy cognitive AI at the edge of your IoT network. Achieve <span className="text-indigo-300 font-bold">&lt;10ms latency</span>, 
            {' '}<span className="text-indigo-300 font-bold">99.97% uptime</span>, and 
            {' '}<span className="text-indigo-300 font-bold">$4.2B operational savings</span>
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-6xl mx-auto">
          {[
            { label: 'Inference Latency', value: '<10ms', color: 'indigo' },
            { label: 'System Uptime', value: '99.97%', color: 'purple' },
            { label: 'Value Created', value: '$4.2B', color: 'pink' },
            { label: 'ROI', value: '2,840%', color: 'blue' }
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
          <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-6 hover:border-indigo-400 transition-all duration-300">
            <Cpu className="w-12 h-12 text-indigo-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Real-Time Intelligence
            </h4>
            <ul className="space-y-2">
              {[
                'Sub-10ms inference at edge',
                '50,000+ devices deployed',
                '94% accuracy at scale',
                'Autonomous operations'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-indigo-200">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400 transition-all duration-300">
            <Zap className="w-12 h-12 text-purple-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Complete Platform
            </h4>
            <ul className="space-y-2">
              {[
                'Edge AI runtime environment',
                'Cognitive decision engine',
                'Federated learning',
                'Enterprise integration'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-purple-200">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-pink-900/40 to-blue-900/40 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-6 hover:border-pink-400 transition-all duration-300">
            <TrendingUp className="w-12 h-12 text-pink-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Proven Success
            </h4>
            <ul className="space-y-2">
              {[
                'Fortune 500 deployment',
                '450 facilities, 12 countries',
                '87% downtime reduction',
                '2,840% ROI achieved'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-pink-200">
                  <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/content/blog/ai-2025-oct-01-edge-iot-cognitive-revolution"
            className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 text-lg"
          >
            Read Complete Guide
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            to="/content/services/edge-iot-cognitive-ai-platform"
            className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-indigo-400 hover:border-indigo-300 text-white font-bold rounded-xl transition-all duration-300 flex items-center gap-3 text-lg"
          >
            View Platform Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/content/case-studies/ai-2025-oct-global-manufacturing-edge-iot-4-2-billion-success"
            className="group px-8 py-4 bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 text-lg"
          >
            $4.2B Success Story
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bottom Tag Line */}
        <div className="text-center mt-8">
          <p className="text-sm text-indigo-300 font-medium">
            ⚡ Transform Your IoT Infrastructure with Cognitive Edge Intelligence ⚡
          </p>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </div>
  );
}
