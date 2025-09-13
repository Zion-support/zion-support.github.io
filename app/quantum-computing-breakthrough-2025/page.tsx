import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CpuChipIcon, BoltIcon, ShieldCheckIcon, GlobeAltIcon, RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Quantum Computing Breakthrough 2025 - Revolutionary Quantum AI Solutions',
  description: 'Experience the quantum revolution with breakthrough quantum computing solutions. Achieve quantum supremacy, solve complex problems in seconds, and unlock unprecedented computational power.',
  keywords: ['Quantum Computing', 'Quantum AI', 'Quantum Supremacy', 'Quantum Breakthrough', 'Quantum Solutions 2025'],
};

export default function QuantumComputingBreakthrough2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/20 to-transparent animate-pulse" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Quantum Computing
              </span>
              <br />
              <span className="text-white">Breakthrough 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Witness the quantum revolution with breakthrough computing solutions that achieve 
              quantum supremacy and solve problems in seconds that would take classical computers millennia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quantum-computing-breakthrough-2025/quantum-supremacy"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Experience Quantum Supremacy
                <CpuChipIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/quantum-computing-breakthrough-2025/quantum-ai"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Quantum AI Solutions
                <SparklesIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Capabilities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quantum Capabilities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unleash the power of quantum computing with unprecedented capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Quantum Supremacy */}
          <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-600 rounded-lg">
                <CpuChipIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white ml-4">Quantum Supremacy</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Achieve computational supremacy over classical computers. Solve complex optimization problems in seconds.
            </p>
            <div className="text-3xl font-bold text-purple-400">10^18 Operations/Second</div>
          </div>

          {/* Quantum Entanglement */}
          <div className="bg-gradient-to-br from-pink-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-pink-600 rounded-lg">
                <BoltIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white ml-4">Quantum Entanglement</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Instantaneous communication across any distance. Break the speed of light barrier for information transfer.
            </p>
            <div className="text-3xl font-bold text-pink-400">∞ Speed</div>
          </div>

          {/* Quantum Error Correction */}
          <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-indigo-600 rounded-lg">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white ml-4">Error Correction</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Advanced quantum error correction algorithms ensure perfect computation reliability.
            </p>
            <div className="text-3xl font-bold text-indigo-400">99.99% Accuracy</div>
          </div>
        </div>
      </div>

      {/* Quantum Applications */}
      <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform industries with quantum-powered solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Drug Discovery */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <GlobeAltIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Drug Discovery</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Accelerate pharmaceutical research by simulating molecular interactions at quantum scale. 
                Discover new treatments 1000x faster than traditional methods.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                  Molecular Simulation
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                  Protein Folding
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                  Drug Interaction Analysis
                </li>
              </ul>
              <div className="text-2xl font-bold text-purple-400">1000x Faster Discovery</div>
            </div>

            {/* Financial Modeling */}
            <div className="bg-gradient-to-br from-pink-900/50 to-indigo-900/50 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-pink-600 rounded-lg">
                  <RocketLaunchIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Financial Modeling</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Revolutionize financial markets with quantum algorithms for risk analysis, 
                portfolio optimization, and fraud detection in real-time.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                  Risk Analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                  Portfolio Optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                  Fraud Detection
                </li>
              </ul>
              <div className="text-2xl font-bold text-pink-400">Real-time Processing</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Performance Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quantum Performance
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unprecedented computational power and capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="text-5xl font-bold text-purple-400 mb-2">10^18</div>
            <div className="text-gray-300 mb-2">Operations/Second</div>
            <div className="text-sm text-purple-300">Quantum Processing Speed</div>
          </div>
          <div className="bg-gradient-to-br from-pink-800/30 to-indigo-800/30 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20">
            <div className="text-5xl font-bold text-pink-400 mb-2">∞</div>
            <div className="text-gray-300 mb-2">Communication Speed</div>
            <div className="text-sm text-pink-300">Quantum Entanglement</div>
          </div>
          <div className="bg-gradient-to-br from-indigo-800/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20">
            <div className="text-5xl font-bold text-indigo-400 mb-2">99.99%</div>
            <div className="text-gray-300 mb-2">Error Correction</div>
            <div className="text-sm text-indigo-300">Perfect Reliability</div>
          </div>
          <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="text-5xl font-bold text-purple-400 mb-2">1000x</div>
            <div className="text-gray-300 mb-2">Problem Solving</div>
            <div className="text-sm text-purple-300">vs Classical Computers</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for the Quantum Revolution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the quantum computing revolution and unlock unprecedented computational power. 
            Transform your business with quantum-powered solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Quantum Journey
              <CpuChipIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/quantum-computing-breakthrough-2025/demo"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Request Demo
              <SparklesIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}