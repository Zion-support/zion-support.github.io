// import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Zap, TrendingUp, ArrowRight, Wifi, Globe } from 'lucide-react';

const October2025EdgeAI5GRevolutionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* NEW Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 shadow-lg animate-pulse">
            <Zap className="w-5 h-5 mr-2" />
            🔥 JUST PUBLISHED: October 1, 2025 - Revolutionary Technology Breakthrough! 🔥
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Message */}
          <div>
            <h2 className="text-5xl font-extrabold mb-6 leading-tight">
              Edge AI + 5G Integration
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mt-2">
                The 2025 Enterprise Revolution
              </span>
            </h2>

            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              Discover how the convergence of Edge AI and 5G networks is transforming enterprises with <span className="font-bold text-cyan-400">&lt;10ms latency</span>, <span className="font-bold text-cyan-400">99.99% uptime</span>, and <span className="font-bold text-cyan-400">$50M+ annual savings</span>.
            </p>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-sm font-semibold text-gray-300">Latency</span>
                </div>
                <div className="text-3xl font-bold text-white">&lt;10ms</div>
                <div className="text-xs text-gray-400 mt-1">Real-time Intelligence</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-sm font-semibold text-gray-300">ROI</span>
                </div>
                <div className="text-3xl font-bold text-white">2,400%</div>
                <div className="text-xs text-gray-400 mt-1">Over 3 Years</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <Wifi className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-sm font-semibold text-gray-300">Uptime</span>
                </div>
                <div className="text-3xl font-bold text-white">99.99%</div>
                <div className="text-xs text-gray-400 mt-1">Guaranteed SLA</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <Globe className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-sm font-semibold text-gray-300">Savings</span>
                </div>
                <div className="text-3xl font-bold text-white">$50M+</div>
                <div className="text-xs text-gray-400 mt-1">Annual Value</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/blog/ai-2025-october-edge-ai-5g-integration-revolution"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105"
              >
                Read Full Article
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                to="/services/edge-ai-5g-integration-platform-2025"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50"
              >
                Explore Solutions
                <Cpu className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Column - Feature Highlights */}
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">🏭 Manufacturing Excellence</h3>
              <p className="text-gray-200 mb-2">Real-time quality control with 99.8% accuracy, 94% reduction in unplanned downtime, and $36M+ annual savings.</p>
              <ul className="text-sm text-gray-300 space-y-1 ml-4">
                <li>• 2,400 5G-connected AI cameras</li>
                <li>• &lt;8ms defect detection</li>
                <li>• 47% production increase</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-purple-400">🚗 Autonomous Vehicles</h3>
              <p className="text-gray-200 mb-2">Connected vehicle platforms with &lt;5ms V2X communication, 94% safety improvement, and $8.7M fuel savings.</p>
              <ul className="text-sm text-gray-300 space-y-1 ml-4">
                <li>• Real-time V2X communication</li>
                <li>• 97% predictive maintenance accuracy</li>
                <li>• 85% cost reduction</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-green-400">🏥 Healthcare Innovation</h3>
              <p className="text-gray-200 mb-2">Telemedicine 2.0 with &lt;10ms latency for remote surgery, AI-powered diagnostics, and 50,000+ IoT patient monitors.</p>
              <ul className="text-sm text-gray-300 space-y-1 ml-4">
                <li>• Remote robotic surgery capability</li>
                <li>• Real-time diagnostic imaging analysis</li>
                <li>• 4.7x faster emergency response</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-pink-400">🛍️ Retail Transformation</h3>
              <p className="text-gray-200 mb-2">Intelligent store operations with 99.7% inventory accuracy, 94% faster checkout, and $4.2M loss prevention.</p>
              <ul className="text-sm text-gray-300 space-y-1 ml-4">
                <li>• Computer vision inventory tracking</li>
                <li>• Real-time personalization &lt;15ms</li>
                <li>• Zero-wait checkout experiences</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-2xl">
            💎 Market Size: $127B by 2026 | 67% CAGR | 847M+ Global 5G Subscriptions 💎
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025EdgeAI5GRevolutionBanner;
