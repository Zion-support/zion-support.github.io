import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, TrendingUp, Award, Star, Brain, Shield, Target } from 'lucide-react';
const January2025HyperIntelligentSystemsBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-rose-900 via-red-900 to-orange-900 border border-rose-500/30 rounded-2xl p-8 mb-8"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 via-red-600/20 to-orange-600/20 animate-pulse"></div>
      <div className="absolute top-4 right-4 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-24 h-24 bg-red-500/10 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-rose-500/20 rounded-lg">
              <Brain className="w-6 h-6 text-rose-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">🔥🔥🔥 BREAKING: JANUARY 2025 HYPER-INTELLIGENT SYSTEMS - ABSOLUTE #1 TOP PRIORITY! 🔥🔥🔥</h2>
              <p className="text-rose-300 text-sm">💎💎💎 JUST PUBLISHED: $8.9B Success Story, 99.999% Accuracy, 100x Performance - HYPER INTELLIGENCE! 💎💎💎</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-yellow-400">
            <Star className="w-5 h-5" />
            <span className="font-semibold">HYPER</span>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left side - Hyper Intelligence Features */}
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-rose-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Brain className="w-5 h-5 text-rose-400 mr-2" />
                Hyper-Intelligent Capabilities
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Meta-Learning Systems</span>
                  <span className="text-rose-400 font-bold">99.999%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Hyper-Scale Processing</span>
                  <span className="text-rose-400 font-bold">100x Faster</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Cognitive Orchestration</span>
                  <span className="text-rose-400 font-bold">Autonomous</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Self-Evolving AI</span>
                  <span className="text-rose-400 font-bold">Continuous</span>
                </div>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-5 h-5 text-red-400 mr-2" />
                Security & Reliability
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-red-400">100%</div>
                  <div className="text-xs text-gray-300">Security</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-orange-400">99.999%</div>
                  <div className="text-xs text-gray-300">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-rose-400">0.01ms</div>
                  <div className="text-xs text-gray-300">Latency</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-yellow-400">100x</div>
                  <div className="text-xs text-gray-300">Performance</div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle side - Success Stories */}
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Award className="w-5 h-5 text-orange-400 mr-2" />
                Hyper-Scale Success Stories
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-rose-500 pl-4">
                  <h4 className="font-semibold text-white">Fortune 50 Tech Leader</h4>
                  <p className="text-gray-300 text-sm">Hyper-intelligent platform with 99.999% accuracy</p>
                  <div className="flex items-center mt-2">
                    <span className="text-rose-400 font-bold">$3.2B Value</span>
                  </div>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-white">Global Financial Institution</h4>
                  <p className="text-gray-300 text-sm">Meta-learning with 100x performance boost</p>
                  <div className="flex items-center mt-2">
                    <span className="text-red-400 font-bold">$2.9B Savings</span>
                  </div>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-white">Healthcare Innovator</h4>
                  <p className="text-gray-300 text-sm">Cognitive orchestration for patient outcomes</p>
                  <div className="flex items-center mt-2">
                    <span className="text-orange-400 font-bold">$2.8B Impact</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-600/20 to-red-600/20 rounded-xl p-6 border border-rose-500/30">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <Globe className="w-5 h-5 text-rose-400 mr-2" />
                Global Deployment
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-rose-400">250+</div>
                  <div className="text-xs text-gray-300">Countries</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-red-400">8,000+</div>
                  <div className="text-xs text-gray-300">Enterprises</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Technical Specs */}
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Cpu className="w-5 h-5 text-red-400 mr-2" />
                Hyper-Scale Architecture
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Neural Processing</span>
                  <span className="text-red-400 font-bold">10T+ Parameters</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Compute Capacity</span>
                  <span className="text-red-400 font-bold">100 Exaflops</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Memory Bandwidth</span>
                  <span className="text-red-400 font-bold">10TB/s</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Energy Efficiency</span>
                  <span className="text-red-400 font-bold">99.5%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-xl p-6 border border-red-500/30">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <TrendingUp className="w-5 h-5 text-red-400 mr-2" />
                Business Impact
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-400">$8.9B</div>
                  <div className="text-sm text-gray-300">Total Value</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">4,700%</div>
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
            className="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center mx-auto"
          >
            <Brain className="w-5 h-5 mr-2" />
            Deploy Hyper-Intelligent Systems
          </motion.button>
          <p className="text-gray-400 text-sm mt-3">Transform with hyper-scale intelligence and 100x performance</p>
        </div>
      </div>
    </motion.div>
  );
};

export default January2025HyperIntelligentSystemsBanner;