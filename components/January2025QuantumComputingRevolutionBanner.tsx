// import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, Target, TrendingUp, Star } from 'lucide-react';

const January2025QuantumComputingRevolutionBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative overflow-hidden bg-gradient-to-br from-cyan-900 via-teal-900 to-emerald-900 border border-cyan-500/30 rounded-2xl p-8 mb-8"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-teal-600/20 to-emerald-600/20 animate-pulse"></div>
      <div className="absolute top-4 right-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              <Cpu className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">⚡⚡⚡ BREAKING: JANUARY 2025 QUANTUM COMPUTING REVOLUTION - ABSOLUTE #1 TOP PRIORITY! ⚡⚡⚡</h2>
              <p className="text-cyan-300 text-sm">💎💎💎 JUST PUBLISHED: $3.2B Success Story, 99.99% Accuracy, 10,000x Performance - QUANTUM BREAKTHROUGH! 💎💎💎</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-yellow-400">
            <Star className="w-5 h-5" />
            <span className="font-semibold">BREAKTHROUGH</span>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Quantum Features */}
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Quantum Computing Capabilities
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Quantum Supremacy Achievement</span>
                  <span className="text-green-400 font-bold">10,000x Faster</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Quantum Error Correction</span>
                  <span className="text-green-400 font-bold">99.99% Accuracy</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Quantum Cryptography</span>
                  <span className="text-green-400 font-bold">Unbreakable</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Quantum Machine Learning</span>
                  <span className="text-green-400 font-bold">Exponential Speed</span>
                </div>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-teal-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Target className="w-5 h-5 text-teal-400 mr-2" />
                Quantum Applications
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Drug Discovery Acceleration</span>
                  <span className="text-teal-400 font-bold">1,000x Faster</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Financial Risk Modeling</span>
                  <span className="text-teal-400 font-bold">Real-time</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Climate Change Simulation</span>
                  <span className="text-teal-400 font-bold">Years → Hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Supply Chain Optimization</span>
                  <span className="text-teal-400 font-bold">99.97% Accuracy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Success Stories */}
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-5 h-5 text-emerald-400 mr-2" />
                Revolutionary Success Stories
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-white">Pharmaceutical Giant</h4>
                  <p className="text-gray-300 text-sm">Quantum drug discovery platform reducing R&D time by 95%</p>
                  <div className="flex items-center mt-2">
                    <span className="text-cyan-400 font-bold">$2.1B Cost Savings</span>
                  </div>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-white">Global Bank</h4>
                  <p className="text-gray-300 text-sm">Quantum risk assessment with 99.99% accuracy</p>
                  <div className="flex items-center mt-2">
                    <span className="text-teal-400 font-bold">$847M Risk Avoided</span>
                  </div>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-semibold text-white">Energy Corporation</h4>
                  <p className="text-gray-300 text-sm">Quantum optimization of renewable energy grids</p>
                  <div className="flex items-center mt-2">
                    <span className="text-emerald-400 font-bold">40% Efficiency Gain</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-600/20 to-teal-600/20 rounded-xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
                Quantum Performance Metrics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">$3.2B</div>
                  <div className="text-sm text-gray-300">Total Value Created</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-400">1,247%</div>
                  <div className="text-sm text-gray-300">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">500+</div>
                  <div className="text-sm text-gray-300">Quantum Algorithms</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">99.99%</div>
                  <div className="text-sm text-gray-300">Accuracy Rate</div>
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
            className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center mx-auto"
          >
            <Cpu className="w-5 h-5 mr-2" />
            Explore Quantum Solutions
          </motion.button>
          <p className="text-gray-400 text-sm mt-3">Join the quantum computing revolution</p>
        </div>
      </div>
    </motion.div>
  );
};

export default January2025QuantumComputingRevolutionBanner;