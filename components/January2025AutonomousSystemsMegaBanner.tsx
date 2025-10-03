// import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Settings, Globe, TrendingUp, Award, Star, Zap } from 'lucide-react';

const January2025AutonomousSystemsMegaBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 border border-green-500/30 rounded-2xl p-8 mb-8"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-teal-600/20 animate-pulse"></div>
      <div className="absolute top-4 right-4 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <Bot className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">🤖🤖🤖 BREAKING: JANUARY 2025 AUTONOMOUS SYSTEMS REVOLUTION - ABSOLUTE #1 TOP PRIORITY! 🤖🤖🤖</h2>
              <p className="text-green-300 text-sm">💎💎💎 JUST PUBLISHED: $4.7B Success Story, 99.8% Autonomy, 25x Productivity - AUTONOMOUS BREAKTHROUGH! 💎💎💎</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-yellow-400">
            <Star className="w-5 h-5" />
            <span className="font-semibold">REVOLUTIONARY</span>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left side - Autonomous Features */}
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Bot className="w-5 h-5 text-green-400 mr-2" />
                Autonomous Capabilities
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Self-Healing Systems</span>
                  <span className="text-green-400 font-bold">99.8% Uptime</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Autonomous Decision Making</span>
                  <span className="text-green-400 font-bold">Real-time</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Predictive Maintenance</span>
                  <span className="text-green-400 font-bold">95% Accuracy</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Adaptive Learning</span>
                  <span className="text-green-400 font-bold">Continuous</span>
                </div>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Performance Metrics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-green-400">25x</div>
                  <div className="text-xs text-gray-300">Productivity</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-emerald-400">99.8%</div>
                  <div className="text-xs text-gray-300">Autonomy</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-teal-400">87%</div>
                  <div className="text-xs text-gray-300">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-yellow-400">2.3s</div>
                  <div className="text-xs text-gray-300">Response Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle side - Success Stories */}
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-teal-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Award className="w-5 h-5 text-teal-400 mr-2" />
                Success Stories
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white">Manufacturing Leader</h4>
                  <p className="text-gray-300 text-sm">Autonomous production line with 99.8% efficiency</p>
                  <div className="flex items-center mt-2">
                    <span className="text-green-400 font-bold">$1.2B Savings</span>
                  </div>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-semibold text-white">Logistics Giant</h4>
                  <p className="text-gray-300 text-sm">Autonomous warehouse operations</p>
                  <div className="flex items-center mt-2">
                    <span className="text-emerald-400 font-bold">25x Faster</span>
                  </div>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-white">Healthcare System</h4>
                  <p className="text-gray-300 text-sm">Autonomous patient monitoring</p>
                  <div className="flex items-center mt-2">
                    <span className="text-teal-400 font-bold">95% Accuracy</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <Globe className="w-5 h-5 text-green-400 mr-2" />
                Global Deployment
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-green-400">2,847</div>
                  <div className="text-xs text-gray-300">Systems Deployed</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-emerald-400">127</div>
                  <div className="text-xs text-gray-300">Countries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Technical Specs */}
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Settings className="w-5 h-5 text-emerald-400 mr-2" />
                Technical Specifications
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Processing Power</span>
                  <span className="text-emerald-400 font-bold">1000+ TFLOPS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Memory Capacity</span>
                  <span className="text-emerald-400 font-bold">2TB+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Network Latency</span>
                  <span className="text-emerald-400 font-bold">&lt;1ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Energy Efficiency</span>
                  <span className="text-emerald-400 font-bold">95%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-xl p-6 border border-emerald-500/30">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <TrendingUp className="w-5 h-5 text-emerald-400 mr-2" />
                Business Impact
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">$4.7B</div>
                  <div className="text-sm text-gray-300">Total Value</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">1,847%</div>
                  <div className="text-sm text-gray-300">ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center mx-auto"
          >
            <Bot className="w-5 h-5 mr-2" />
            Deploy Autonomous Systems
          </motion.button>
          <p className="text-gray-400 text-sm mt-3">Transform your operations with autonomous intelligence</p>
        </div>
      </div>
    </motion.div>
  );
};

export default January2025AutonomousSystemsMegaBanner;