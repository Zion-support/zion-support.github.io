import React from 'react';
import { Link } from 'react-router-dom';

const AI2026InnovationShowcaseBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M50%2050c0-27.614-22.386-50-50-50v100c27.614%200%2050-22.386%2050-50z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full px-6 py-3 mb-8">
            <span className="text-3xl">🔬</span>
            <span className="text-lg font-bold text-black">AI 2026 INNOVATION SHOWCASE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Revolutionary AI Innovations
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Shaping 2026
            </span>
          </h2>
          <p className="text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Discover the breakthrough AI technologies and innovations that are revolutionizing 
            industries and creating unprecedented opportunities for growth and transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🧠</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Neural Architecture 2.0</h3>
                  <p className="text-blue-200">Next-Gen AI Brain</p>
                </div>
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Revolutionary neural architecture with 10x processing power, autonomous learning capabilities, 
                and human-like reasoning that adapts in real-time to complex scenarios.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">10x</div>
                  <div className="text-sm text-blue-200">Processing Power</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">99.9%</div>
                  <div className="text-sm text-blue-200">Accuracy Rate</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Quantum Edge Computing</h3>
                  <p className="text-purple-200">Ultra-Fast Processing</p>
                </div>
              </div>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Quantum-powered edge computing that delivers sub-millisecond response times 
                and processes massive datasets at the edge of networks.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">&lt;1ms</div>
                  <div className="text-sm text-purple-200">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">1000x</div>
                  <div className="text-sm text-purple-200">Faster Processing</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-500/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🌱</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Autonomous AI Agents</h3>
                  <p className="text-green-200">Self-Managing Systems</p>
                </div>
              </div>
              <p className="text-green-100 mb-6 leading-relaxed">
                Fully autonomous AI agents that can plan, execute, and optimize complex workflows 
                without human intervention, achieving 99.9% uptime.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">99.9%</div>
                  <div className="text-sm text-green-200">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400">24/7</div>
                  <div className="text-sm text-green-200">Autonomous</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🔮</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Predictive Intelligence</h3>
                  <p className="text-orange-200">Future-Ready AI</p>
                </div>
              </div>
              <p className="text-orange-100 mb-6 leading-relaxed">
                Advanced predictive AI that can forecast trends, anticipate needs, and optimize 
                decisions with 95% accuracy across multiple domains.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">95%</div>
                  <div className="text-sm text-orange-200">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">6mo</div>
                  <div className="text-sm text-orange-200">Forecast Range</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-600/30 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">Innovation Impact</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI innovations are transforming industries and creating unprecedented value
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-4">$50B+</div>
              <div className="text-lg font-semibold text-white mb-2">Market Value</div>
              <div className="text-gray-400">Created through AI innovations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-4">1000+</div>
              <div className="text-lg font-semibold text-white mb-2">Patents Filed</div>
              <div className="text-gray-400">AI technology patents</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-4">50+</div>
              <div className="text-lg font-semibold text-white mb-2">Industries</div>
              <div className="text-gray-400">Transformed by our AI</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-4">1M+</div>
              <div className="text-lg font-semibold text-white mb-2">Lives Impacted</div>
              <div className="text-gray-400">Through AI solutions</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/services/ai-innovation-2026"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-6 rounded-lg font-bold text-xl hover:from-cyan-600 hover:to-blue-700 transition-all shadow-2xl hover:shadow-cyan-500/25"
            >
              Explore AI Innovations
            </Link>
            <Link to="/blog/ai-2026-innovations"
              className="border-2 border-cyan-400 text-cyan-400 px-12 py-6 rounded-lg font-bold text-xl hover:bg-cyan-400 hover:text-black transition-all"
            >
              Read Innovation Blog
            </Link>
            <Link to="/contact"
              className="border-2 border-purple-400 text-purple-400 px-12 py-6 rounded-lg font-bold text-xl hover:bg-purple-400 hover:text-black transition-all"
            >
              Schedule Innovation Demo
            </Link>
          </div>
          <p className="text-blue-200 mt-8 text-lg">
            Be among the first to experience the future of AI. Limited early access available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AI2026InnovationShowcaseBanner;