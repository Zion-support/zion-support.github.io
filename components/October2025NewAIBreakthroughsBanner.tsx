// import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Brain, Bot, TrendingUp } from 'lucide-react';

export default function October2025NewAIBreakthroughsBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-16 sm:py-24">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-pulse"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
            <span className="text-yellow-400 text-sm font-bold tracking-wider uppercase animate-pulse">
              🔥 JUST PUBLISHED: OCTOBER 1, 2025 🔥
            </span>
            <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Three Revolutionary AI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Breakthroughs Just Launched!
            </span>
          </h2>
          
          <p className="mt-6 text-xl leading-8 text-gray-300">
            🚀 <strong>$258B Combined Market Value</strong> • 💎 <strong>10,000+ Enterprise Deployments</strong> • ⚡ <strong>94%+ Success Rates</strong>
          </p>
        </div>

        {/* Three breakthrough cards */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          
          {/* Card 1: Neural Architecture Search */}
          <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-purple-800/80 to-indigo-900/80 backdrop-blur-sm border-2 border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            <div className="flex flex-1 flex-col p-8">
              <div className="flex items-center gap-x-3 mb-4">
                <div className="rounded-full bg-purple-500/20 p-3 ring-2 ring-purple-400">
                  <Brain className="h-7 w-7 text-purple-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
                    #1 Breakthrough
                  </span>
                  <span className="text-xs text-purple-400">
                    Published Today
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                Neural Architecture Search
              </h3>
              
              <p className="text-sm text-gray-300 mb-4 flex-grow">
                Automate AI model design with <strong>10x faster development</strong>, <strong>40% better performance</strong>, and <strong>$47M annual savings</strong>.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-lg bg-purple-950/50 p-3 border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-300">$4.2B</div>
                  <div className="text-xs text-gray-400">Market by 2026</div>
                </div>
                <div className="rounded-lg bg-purple-950/50 p-3 border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-300">847+</div>
                  <div className="text-xs text-gray-400">Deployments</div>
                </div>
                <div className="rounded-lg bg-purple-950/50 p-3 border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-300">94%</div>
                  <div className="text-xs text-gray-400">Accuracy Gain</div>
                </div>
                <div className="rounded-lg bg-purple-950/50 p-3 border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-300">1,780%</div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
              </div>

              <Link
                to="/blog/ai-2025-oct-neural-architecture-search-breakthrough"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:from-purple-500 hover:to-indigo-500 transition-all duration-200 hover:shadow-purple-500/50"
              >
                Read Full Guide →
              </Link>
            </div>
          </div>

          {/* Card 2: RL in Robotics */}
          <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-blue-800/80 to-cyan-900/80 backdrop-blur-sm border-2 border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
            <div className="flex flex-1 flex-col p-8">
              <div className="flex items-center gap-x-3 mb-4">
                <div className="rounded-full bg-blue-500/20 p-3 ring-2 ring-blue-400">
                  <Bot className="h-7 w-7 text-blue-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">
                    #2 Breakthrough
                  </span>
                  <span className="text-xs text-blue-400">
                    Published Today
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                RL in Robotics
              </h3>
              
              <p className="text-sm text-gray-300 mb-4 flex-grow">
                Transform industrial automation with <strong>99.7% task success</strong>, <strong>87% less programming</strong>, and <strong>$184M annual savings</strong>.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-lg bg-blue-950/50 p-3 border border-blue-500/20">
                  <div className="text-2xl font-bold text-blue-300">$127B</div>
                  <div className="text-xs text-gray-400">Market by 2028</div>
                </div>
                <div className="rounded-lg bg-blue-950/50 p-3 border border-blue-500/20">
                  <div className="text-2xl font-bold text-blue-300">2,847+</div>
                  <div className="text-xs text-gray-400">Deployments</div>
                </div>
                <div className="rounded-lg bg-blue-950/50 p-3 border border-blue-500/20">
                  <div className="text-2xl font-bold text-blue-300">99.7%</div>
                  <div className="text-xs text-gray-400">Success Rate</div>
                </div>
                <div className="rounded-lg bg-blue-950/50 p-3 border border-blue-500/20">
                  <div className="text-2xl font-bold text-blue-300">6,388%</div>
                  <div className="text-xs text-gray-400">3-Year ROI</div>
                </div>
              </div>

              <Link
                to="/blog/ai-2025-oct-reinforcement-learning-robotics-revolution"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 hover:shadow-blue-500/50"
              >
                Read Full Guide →
              </Link>
            </div>
          </div>

          {/* Card 3: Causal AI */}
          <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-pink-800/80 to-rose-900/80 backdrop-blur-sm border-2 border-pink-500/30 hover:border-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50">
            <div className="flex flex-1 flex-col p-8">
              <div className="flex items-center gap-x-3 mb-4">
                <div className="rounded-full bg-pink-500/20 p-3 ring-2 ring-pink-400">
                  <TrendingUp className="h-7 w-7 text-pink-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-pink-300 uppercase tracking-wider">
                    #3 Breakthrough
                  </span>
                  <span className="text-xs text-pink-400">
                    Published Today
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
                Causal AI Intelligence
              </h3>
              
              <p className="text-sm text-gray-300 mb-4 flex-grow">
                Transform decision-making with <strong>94% better predictions</strong>, <strong>87% improved outcomes</strong>, and <strong>$284M annual revenue</strong>.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-lg bg-pink-950/50 p-3 border border-pink-500/20">
                  <div className="text-2xl font-bold text-pink-300">$84B</div>
                  <div className="text-xs text-gray-400">Market by 2027</div>
                </div>
                <div className="rounded-lg bg-pink-950/50 p-3 border border-pink-500/20">
                  <div className="text-2xl font-bold text-pink-300">1,247+</div>
                  <div className="text-xs text-gray-400">Deployments</div>
                </div>
                <div className="rounded-lg bg-pink-950/50 p-3 border border-pink-500/20">
                  <div className="text-2xl font-bold text-pink-300">94%</div>
                  <div className="text-xs text-gray-400">Accuracy Gain</div>
                </div>
                <div className="rounded-lg bg-pink-950/50 p-3 border border-pink-500/20">
                  <div className="text-2xl font-bold text-pink-300">17,650%</div>
                  <div className="text-xs text-gray-400">3-Year ROI</div>
                </div>
              </div>

              <Link
                to="/blog/ai-2025-oct-causal-ai-enterprise-decision-intelligence"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-pink-600 to-rose-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:from-pink-500 hover:to-rose-500 transition-all duration-200 hover:shadow-pink-500/50"
              >
                Read Full Guide →
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 px-8 py-4 backdrop-blur-sm border border-white/10">
            <Sparkles className="h-6 w-6 text-yellow-400" />
            <p className="text-lg font-semibold text-white">
              💎 <strong>$258B Combined Market Value</strong> • 🚀 <strong>10,000+ Deployments</strong> • ⚡ <strong>All Published October 1, 2025</strong>
            </p>
            <Sparkles className="h-6 w-6 text-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
