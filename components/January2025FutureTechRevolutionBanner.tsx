import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, Globe, TrendingUp, Award, Star, Cpu, Bot, Shield } from 'lucide-react';

const January2025FutureTechRevolutionBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 border border-emerald-500/30 rounded-2xl p-8 mb-8"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20 animate-pulse"></div>
      <div className="absolute top-4 right-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <Rocket className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">🚀🚀🚀 BREAKING: JANUARY 2025 FUTURE TECH REVOLUTION - ABSOLUTE #1 TOP PRIORITY! 🚀🚀🚀</h2>
              <p className="text-emerald-300 text-sm">💎💎💎 JUST PUBLISHED: $6.8B Success Story, 99.99% Accuracy, 50x Performance - FUTURE REVOLUTION! 💎💎💎</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-yellow-400">
            <Star className="w-5 h-5" />
            <span className="font-semibold">REVOLUTION</span>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left side - Future Tech Features */}
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Rocket className="w-5 h-5 text-emerald-400 mr-2" />
                Future Technology
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Quantum-Classical Hybrid</span>
                  <span className="text-emerald-400 font-bold">99.99%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Neural-Symbolic Fusion</span>
                  <span className="text-emerald-400 font-bold">50x Faster</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Edge-Cloud Continuum</span>
                  <span className="text-emerald-400 font-bold">Seamless</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Autonomous Systems</span>
                  <span className="text-emerald-400 font-bold">100%</span>
                </div>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-teal-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-5 h-5 text-teal-400 mr-2" />
                Security & Performance
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-teal-400">99.99%</div>
                  <div className="text-xs text-gray-300">Security</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-cyan-400">50x</div>
                  <div className="text-xs text-gray-300">Performance</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-emerald-400">0.1ms</div>
                  <div className="text-xs text-gray-300">Latency</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-yellow-400">100%</div>
                  <div className="text-xs text-gray-300">Uptime</div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle side - Success Stories */}
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Award className="w-5 h-5 text-cyan-400 mr-2" />
                Revolutionary Success Stories
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-semibold text-white">Global Enterprise Leader</h4>
                  <p className="text-gray-300 text-sm">Future tech platform with 99.99% accuracy</p>
                  <div className="flex items-center mt-2">
                    <span className="text-emerald-400 font-bold">$2.8B Value</span>
                  </div>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-white">Tech Innovation Giant</h4>
                  <p className="text-gray-300 text-sm">Quantum-classical hybrid processing</p>
                  <div className="flex items-center mt-2">
                    <span className="text-teal-400 font-bold">$2.2B Savings</span>
                  </div>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-white">Digital Transformation Pioneer</h4>
                  <p className="text-gray-300 text-sm">Autonomous systems with 100% uptime</p>
                  <div className="flex items-center mt-2">
                    <span className="text-cyan-400 font-bold">$1.8B Impact</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-xl p-6 border border-emerald-500/30">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <Globe className="w-5 h-5 text-emerald-400 mr-2" />
                Global Reach
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-emerald-400">200+</div>
                  <div className="text-xs text-gray-300">Countries</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-teal-400">5,000+</div>
                  <div className="text-xs text-gray-300">Enterprises</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Technical Specs */}
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-teal-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Cpu className="w-5 h-5 text-teal-400 mr-2" />
                Technical Specifications
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Quantum Processing</span>
                  <span className="text-teal-400 font-bold">1000+ Qubits</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Neural Networks</span>
                  <span className="text-teal-400 font-bold">1B+ Parameters</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Memory Capacity</span>
                  <span className="text-teal-400 font-bold">8TB+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Energy Efficiency</span>
                  <span className="text-teal-400 font-bold">99%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 rounded-xl p-6 border border-teal-500/30">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <TrendingUp className="w-5 h-5 text-teal-400 mr-2" />
                Business Impact
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">$6.8B</div>
                  <div className="text-sm text-gray-300">Total Value</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-400">3,400%</div>
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
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center mx-auto"
          >
            <Rocket className="w-5 h-5 mr-2" />
            Launch Future Tech Revolution
          </motion.button>
          <p className="text-gray-400 text-sm mt-3">Lead the future with revolutionary technology</p>
        </div>
      </div>
    </motion.div>
  );
};

export default January2025FutureTechRevolutionBanner;