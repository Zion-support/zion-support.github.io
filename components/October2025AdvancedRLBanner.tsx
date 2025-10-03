// import React from 'react';
import { Brain, TrendingUp, Target, Zap } from 'lucide-react';

const October2025AdvancedRLBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 border-y-4 border-purple-500">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse -bottom-48 -right-48 animation-delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Badge */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-2">
            <Zap className="w-5 h-5 text-purple-400 animate-pulse" />
            <span className="text-purple-300 font-bold text-sm tracking-wider">
              🔥 JUST PUBLISHED: OCTOBER 1, 2025 - REINFORCEMENT LEARNING MASTERY 🔥
            </span>
            <Zap className="w-5 h-5 text-purple-400 animate-pulse" />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Advanced Reinforcement Learning for Enterprise
              </h2>
              <p className="text-xl text-purple-200 font-medium">
                Master production-ready RL systems that deliver measurable business value
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-500/10 backdrop-blur-sm border border-purple-400/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-purple-300 mb-1">$2.8B</div>
                <div className="text-sm text-purple-200">Enterprise Value</div>
              </div>
              <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-300 mb-1">89%</div>
                <div className="text-sm text-blue-200">Efficiency Gains</div>
              </div>
              <div className="bg-indigo-500/10 backdrop-blur-sm border border-indigo-400/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-indigo-300 mb-1">94%</div>
                <div className="text-sm text-indigo-200">Decision Accuracy</div>
              </div>
              <div className="bg-purple-500/10 backdrop-blur-sm border border-purple-400/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-purple-300 mb-1">340%</div>
                <div className="text-sm text-purple-200">ROI in 18 Months</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/blog/ai-2025-oct-advanced-reinforcement-learning-enterprise"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/50 group"
              >
                <Brain className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Read Complete Guide
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 group"
              >
                <Target className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Get Expert Consultation
              </a>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-purple-400" />
                What You'll Learn
              </h3>
              <ul className="space-y-3 text-purple-100">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1">✓</span>
                  <span>Production-ready RL architectures (PPO, SAC, MARL)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1">✓</span>
                  <span>Supply chain optimization with 47% cost reduction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1">✓</span>
                  <span>Financial trading systems with 340% ROI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1">✓</span>
                  <span>Manufacturing process control (89% efficiency)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1">✓</span>
                  <span>Energy grid management with 99.99% uptime</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1">✓</span>
                  <span>Complete implementation roadmap (12 months)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">🏆 Fortune 500 Success Story</h3>
              <p className="text-blue-100 text-sm mb-3">
                Global manufacturing leader achieves <span className="text-blue-300 font-bold">$2.8B transformation</span> with multi-agent RL across 180 facilities
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="text-blue-200">• 47 autonomous agents</div>
                <div className="text-blue-200">• 89% efficiency gain</div>
                <div className="text-blue-200">• 94% quality accuracy</div>
                <div className="text-blue-200">• 67% energy savings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 text-purple-200 text-sm">
            <span className="animate-pulse">⚡</span>
            <span className="font-semibold">
              Featured: Advanced RL algorithms • Production deployment guide • Enterprise success stories • ROI calculator
            </span>
            <span className="animate-pulse">⚡</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025AdvancedRLBanner;
