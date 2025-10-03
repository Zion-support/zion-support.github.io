import { Link } from 'react-router-dom';
import { Sparkles, Network, Database, Layers, TrendingUp } from 'lucide-react';

export default function October2025NewContentLaunchBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-16 sm:py-24">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 animate-pulse"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
            <span className="text-yellow-400 text-sm font-bold tracking-wider uppercase animate-pulse">
              🚀 BREAKING: NEW CONTENT JUST PUBLISHED - OCTOBER 1, 2025 🚀
            </span>
            <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Three Game-Changing AI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technologies for Enterprise 2025!
            </span>
          </h2>
          
          <p className="mt-6 text-xl leading-8 text-gray-300">
            💎 <strong>$19.2B Combined Value Creation</strong> • 🚀 <strong>327% Performance Improvement</strong> • ⚡ <strong>99.7% Success Rate</strong>
          </p>
        </div>

        {/* Three breakthrough cards */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          
          {/* Card 1: Agent Mesh Networks */}
          <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-purple-800/80 to-indigo-900/80 backdrop-blur-sm border-2 border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            <div className="flex flex-1 flex-col p-8">
              <div className="flex items-center gap-x-3 mb-4">
                <div className="rounded-full bg-purple-500/20 p-3 ring-2 ring-purple-400">
                  <Network className="h-7 w-7 text-purple-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
                    #1 Revolutionary Technology
                  </span>
                  <span className="text-xs text-purple-400">
                    Published Today
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                AI Agent Mesh Networks
              </h3>
              
              <p className="text-sm text-gray-300 mb-4 flex-grow">
                Discover <strong>distributed AI agent coordination</strong> delivering <strong>$8.7B value</strong> 
                with <strong>99.97% uptime</strong> and <strong>2.4B decisions daily</strong>.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-lg bg-purple-950/50 p-3 border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-300">$8.7B</div>
                  <div className="text-xs text-gray-400">Operational Value</div>
                </div>
                <div className="rounded-lg bg-purple-950/50 p-3 border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-300">47K+</div>
                  <div className="text-xs text-gray-400">AI Agents Deployed</div>
                </div>
                <div className="rounded-lg bg-purple-950/50 p-3 border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-300">99.97%</div>
                  <div className="text-xs text-gray-400">Accuracy Rate</div>
                </div>
                <div className="rounded-lg bg-purple-950/50 p-3 border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-300">2.4B</div>
                  <div className="text-xs text-gray-400">Daily Decisions</div>
                </div>
              </div>

              <Link
                to="/blog/ai-agent-mesh-networks-enterprise-2025"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-purple-500 hover:to-indigo-500 transition-all duration-200 hover:scale-105"
              >
                <span>Read Full Guide</span>
                <TrendingUp className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Synthetic Data Generation */}
          <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-green-800/80 to-blue-900/80 backdrop-blur-sm border-2 border-green-500/30 hover:border-green-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50">
            <div className="flex flex-1 flex-col p-8">
              <div className="flex items-center gap-x-3 mb-4">
                <div className="rounded-full bg-green-500/20 p-3 ring-2 ring-green-400">
                  <Database className="h-7 w-7 text-green-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-green-300 uppercase tracking-wider">
                    #2 Privacy Innovation
                  </span>
                  <span className="text-xs text-green-400">
                    Published Today
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                Synthetic Data Generation
              </h3>
              
              <p className="text-sm text-gray-300 mb-4 flex-grow">
                Unlock <strong>privacy-preserving ML</strong> with <strong>99.7% fidelity</strong>, 
                <strong>$4.3B value creation</strong>, and <strong>100% GDPR compliance</strong>.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-lg bg-green-950/50 p-3 border border-green-500/20">
                  <div className="text-2xl font-bold text-green-300">$4.3B</div>
                  <div className="text-xs text-gray-400">Value Generated</div>
                </div>
                <div className="rounded-lg bg-green-950/50 p-3 border border-green-500/20">
                  <div className="text-2xl font-bold text-green-300">847B</div>
                  <div className="text-xs text-gray-400">Synthetic Records</div>
                </div>
                <div className="rounded-lg bg-green-950/50 p-3 border border-green-500/20">
                  <div className="text-2xl font-bold text-green-300">99.7%</div>
                  <div className="text-xs text-gray-400">Data Fidelity</div>
                </div>
                <div className="rounded-lg bg-green-950/50 p-3 border border-green-500/20">
                  <div className="text-2xl font-bold text-green-300">100%</div>
                  <div className="text-xs text-gray-400">Privacy Safe</div>
                </div>
              </div>

              <Link
                to="/blog/ai-synthetic-data-generation-2025"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-green-500 hover:to-blue-500 transition-all duration-200 hover:scale-105"
              >
                <span>Explore Technology</span>
                <TrendingUp className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Card 3: Multimodal Fusion */}
          <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-pink-800/80 to-orange-900/80 backdrop-blur-sm border-2 border-pink-500/30 hover:border-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50">
            <div className="flex flex-1 flex-col p-8">
              <div className="flex items-center gap-x-3 mb-4">
                <div className="rounded-full bg-pink-500/20 p-3 ring-2 ring-pink-400">
                  <Layers className="h-7 w-7 text-pink-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-pink-300 uppercase tracking-wider">
                    #3 Unified Intelligence
                  </span>
                  <span className="text-xs text-pink-400">
                    Published Today
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
                Multimodal AI Fusion
              </h3>
              
              <p className="text-sm text-gray-300 mb-4 flex-grow">
                Achieve <strong>unified intelligence</strong> across data types with <strong>327% performance gain</strong>, 
                <strong>$6.2B value</strong>, and <strong>94.7% accuracy</strong>.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-lg bg-pink-950/50 p-3 border border-pink-500/20">
                  <div className="text-2xl font-bold text-pink-300">$6.2B</div>
                  <div className="text-xs text-gray-400">Operational Value</div>
                </div>
                <div className="rounded-lg bg-pink-950/50 p-3 border border-pink-500/20">
                  <div className="text-2xl font-bold text-pink-300">1.7T</div>
                  <div className="text-xs text-gray-400">Monthly Interactions</div>
                </div>
                <div className="rounded-lg bg-pink-950/50 p-3 border border-pink-500/20">
                  <div className="text-2xl font-bold text-pink-300">327%</div>
                  <div className="text-xs text-gray-400">Performance Gain</div>
                </div>
                <div className="rounded-lg bg-pink-950/50 p-3 border border-pink-500/20">
                  <div className="text-2xl font-bold text-pink-300">94.7%</div>
                  <div className="text-xs text-gray-400">Accuracy Rate</div>
                </div>
              </div>

              <Link
                to="/blog/ai-multimodal-fusion-systems-2025"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-pink-600 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-pink-500 hover:to-orange-500 transition-all duration-200 hover:scale-105"
              >
                <span>Learn More</span>
                <TrendingUp className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-200 hover:scale-110"
            >
              <Sparkles className="h-5 w-5" />
              <span>Deploy These Technologies Now</span>
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white border-2 border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-105"
            >
              <span>View All Insights</span>
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Join 847+ enterprises already leveraging these breakthrough technologies 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
