import React from 'react';
import Link from 'next/link';
import { CpuChipIcon, SparklesIcon, BoltIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const QuantumComputingBreakthrough2025PromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/20 to-transparent animate-pulse delay-1000" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-transparent via-pink-500/20 to-transparent animate-pulse delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <CpuChipIcon className="h-6 w-6 text-white" />
              </div>
              <span className="text-purple-300 font-semibold text-sm uppercase tracking-wider">
                BREAKTHROUGH: Quantum Computing 2025
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Quantum Computing
              </span>
              <br />
              <span className="text-white">Revolution Begins</span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Experience the quantum revolution with breakthrough computing solutions. 
              Achieve quantum supremacy, solve complex problems in seconds, and unlock 
              unprecedented computational power that transforms entire industries.
            </p>

            {/* Quantum Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-1 bg-purple-500 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-gray-300">Quantum Supremacy</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-1 bg-pink-500 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-gray-300">Instant Communication</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-1 bg-indigo-500 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-gray-300">Error-Free Computing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-1 bg-purple-500 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-gray-300">1000x Faster</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/quantum-computing-breakthrough-2025"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Experience Quantum Power
                <CpuChipIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/quantum-computing-breakthrough-2025/applications"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Applications
                <SparklesIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Content - Quantum Dashboard */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
              {/* Quantum State Visualization */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-spin opacity-60" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full animate-spin opacity-60" style={{ animationDirection: 'reverse' }} />
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Quantum Computing Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                  <span className="text-purple-400 text-sm">Quantum State</span>
                </div>
              </div>

              {/* Quantum Metrics */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-semibold">Quantum Supremacy</span>
                    <BoltIcon className="h-5 w-5 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">10^18</div>
                  <div className="text-sm text-gray-300">Operations per second</div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-full animate-pulse" />
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-semibold">Entanglement Speed</span>
                    <GlobeAltIcon className="h-5 w-5 text-pink-400" />
                  </div>
                  <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
                  <div className="text-sm text-gray-300">Instant communication</div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div className="bg-gradient-to-r from-pink-500 to-indigo-500 h-2 rounded-full w-full animate-pulse delay-500" />
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-semibold">Error Correction</span>
                    <SparklesIcon className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div className="text-3xl font-bold text-indigo-400 mb-2">99.99%</div>
                  <div className="text-sm text-gray-300">Perfect reliability</div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full w-full animate-pulse delay-1000" />
                  </div>
                </div>
              </div>

              {/* Quantum Applications */}
              <div className="mt-6 pt-4 border-t border-white/20">
                <h4 className="text-white font-semibold mb-3">Active Applications</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-purple-500/20 rounded px-3 py-2 text-purple-300">Drug Discovery</div>
                  <div className="bg-pink-500/20 rounded px-3 py-2 text-pink-300">Financial Modeling</div>
                  <div className="bg-indigo-500/20 rounded px-3 py-2 text-indigo-300">Cryptography</div>
                  <div className="bg-purple-500/20 rounded px-3 py-2 text-purple-300">AI Training</div>
                </div>
              </div>

              {/* Performance Indicator */}
              <div className="mt-6 pt-4 border-t border-white/20">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Quantum Advantage</span>
                  <span className="text-white font-bold">1000x vs Classical</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-300 text-sm">Qubits Active</span>
                  <span className="text-white font-bold">10,000+</span>
                </div>
              </div>
            </div>

            {/* Floating Quantum Elements */}
            <div className="absolute -top-8 -right-8 w-12 h-12 border-2 border-purple-500/30 rounded-full animate-spin" />
            <div className="absolute -bottom-6 -left-6 w-8 h-8 border-2 border-pink-500/30 rounded-full animate-spin" style={{ animationDirection: 'reverse' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingBreakthrough2025PromotionBanner;