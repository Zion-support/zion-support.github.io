import React from 'react';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { Atom, Cpu, Zap, Shield, Brain, Layers, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quantum Computing Revolution 2025 - Breakthrough Quantum Systems',
  description: 'Discover breakthrough quantum systems with 1M+ logical qubits, 99.99% error correction, and infinite quantum supremacy achievement.',
  keywords: 'Quantum Computing, Revolution 2025, Quantum Supremacy, Error Correction, Quantum ML, Quantum Internet, Quantum Security',
};

const QuantumComputingRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-8"
            >
              <Atom className="w-12 h-12 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8"
            >
              Quantum Computing Revolution 2025
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Breakthrough quantum systems with error-corrected qubits, quantum internet infrastructure, 
              and quantum machine learning algorithms that solve previously impossible problems.
            </motion.p>

            {/* Quantum Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-500 rounded-full mb-4 mx-auto">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">1M+</div>
                <div className="text-sm text-gray-300">Logical Qubits</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-full mb-4 mx-auto">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">99.99%</div>
                <div className="text-sm text-gray-300">Error Correction</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center w-12 h-12 bg-pink-500 rounded-full mb-4 mx-auto">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">∞</div>
                <div className="text-sm text-gray-300">Supremacy Achieved</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mb-4 mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">Unbreakable</div>
                <div className="text-sm text-gray-300">Quantum Security</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary quantum technologies transforming industries and solving 
              previously impossible computational challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quantum Machine Learning */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Machine Learning</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary quantum ML algorithms that process exponentially larger datasets 
                and solve optimization problems in seconds instead of years.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Quantum neural networks with exponential speedup</li>
                <li>• Quantum optimization algorithms</li>
                <li>• Quantum data processing and analysis</li>
              </ul>
            </div>

            {/* Quantum Internet */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl mb-6">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Internet</h3>
              <p className="text-gray-300 mb-6">
                Global quantum network infrastructure enabling instant, secure communication 
                and distributed quantum computing across continents.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Quantum entanglement distribution</li>
                <li>• Quantum teleportation networks</li>
                <li>• Distributed quantum computing</li>
              </ul>
            </div>

            {/* Quantum Cryptography */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Security</h3>
              <p className="text-gray-300 mb-6">
                Unbreakable quantum encryption protocols and quantum key distribution 
                systems protecting against all known and future threats.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Quantum key distribution (QKD)</li>
                <li>• Post-quantum cryptography</li>
                <li>• Quantum random number generation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Supremacy Achievements */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum Supremacy Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Historic milestones in quantum computing that mark the beginning of 
              a new era in computational capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Revolutionary Breakthroughs</h3>
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Error-Corrected Quantum Computers</h4>
                  </div>
                  <p className="text-gray-300">
                    First practical quantum computers with logical qubits that maintain 
                    quantum states indefinitely through advanced error correction.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Quantum Internet Launch</h4>
                  </div>
                  <p className="text-gray-300">
                    Global quantum internet infrastructure connecting quantum computers 
                    worldwide for distributed quantum processing.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Quantum Security Standards</h4>
                  </div>
                  <p className="text-gray-300">
                    New cryptographic standards based on quantum principles providing 
                    unbreakable security for all digital communications.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Join the Quantum Revolution</h3>
              <p className="text-white/90 mb-6">
                Be among the first to harness quantum supremacy for your organization 
                and solve problems that were previously impossible.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Quantum Implementation Guide
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingRevolution2025;