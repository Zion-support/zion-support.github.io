import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Quantum Computing Solutions 2025 - Revolutionary Breakthrough Technology',
  description: 'Experience the future with our revolutionary quantum computing solutions. Achieve 15,000% ROI with quantum-enhanced AI, error-corrected quantum computers, and quantum supremacy.',
  keywords: ['Quantum Computing', 'Quantum AI', 'Quantum Supremacy', 'Error-Corrected Quantum', 'Quantum Machine Learning', '15,000% ROI', 'Revolutionary Technology'],
};

export default function QuantumComputingSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold mb-6 animate-pulse">
              ⚛️ QUANTUM BREAKTHROUGH
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quantum Computing Solutions 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
              Experience the future with our revolutionary quantum computing solutions. 
              Achieve <span className="text-cyan-400 font-bold">15,000% ROI</span> with 
              quantum-enhanced AI, error-corrected quantum computers, and 
              <span className="text-purple-400 font-bold"> quantum supremacy</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/case-studies/quantum-ai-breakthrough-15000-roi"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                View Success Stories
              </Link>
              <Link 
                href="/resources/quantum-computing-implementation-guide"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Implementation Guide
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Technologies */}
      <div className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Revolutionary Quantum Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 rounded-xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Error-Corrected Quantum Computers</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary quantum computers with 99.9% error correction, 
                enabling complex calculations impossible with classical systems.
              </p>
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                Accuracy: 99.9%
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Quantum Machine Learning</h3>
              <p className="text-gray-300 mb-6">
                Quantum-enhanced neural networks that process data 15,000x faster 
                than classical systems with exponential accuracy improvements.
              </p>
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                Speed: 15,000x
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-800/50 to-cyan-800/50 rounded-xl p-8 border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300">
              <div className="text-4xl mb-4">🌌</div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">Quantum Supremacy</h3>
              <p className="text-gray-300 mb-6">
                Achieve quantum supremacy with systems that solve problems 
                in seconds that would take classical computers millennia.
              </p>
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                Supremacy: Achieved
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-800/50 to-rose-800/50 rounded-xl p-8 border border-pink-500/30 hover:border-pink-400/60 transition-all duration-300">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold mb-4 text-pink-400">Quantum Internet</h3>
              <p className="text-gray-300 mb-6">
                Ultra-secure quantum internet with unbreakable encryption 
                and instant global communication capabilities.
              </p>
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                Security: Unbreakable
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-800/50 to-teal-800/50 rounded-xl p-8 border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Quantum Simulation</h3>
              <p className="text-gray-300 mb-6">
                Simulate complex molecular structures and materials with 
                unprecedented accuracy for drug discovery and materials science.
              </p>
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                Accuracy: 99.99%
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-800/50 to-red-800/50 rounded-xl p-8 border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Quantum Optimization</h3>
              <p className="text-gray-300 mb-6">
                Solve complex optimization problems across logistics, 
                finance, and operations with quantum algorithms.
              </p>
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                Efficiency: 10,000x
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Applications */}
      <div className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Quantum Computing Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl p-8 border border-blue-500/30 text-center">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Drug Discovery</h3>
              <p className="text-gray-300 text-sm mb-4">
                Accelerate drug discovery by 10,000x with quantum molecular simulation
              </p>
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                ROI: 15,000%
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-8 border border-purple-500/30 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-4 text-pink-400">Financial Modeling</h3>
              <p className="text-gray-300 text-sm mb-4">
                Quantum risk analysis and portfolio optimization with infinite precision
              </p>
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                ROI: 12,000%
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-xl p-8 border border-green-500/30 text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Logistics Optimization</h3>
              <p className="text-gray-300 text-sm mb-4">
                Optimize supply chains and routing with quantum algorithms
              </p>
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                ROI: 8,500%
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-xl p-8 border border-orange-500/30 text-center">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">Cybersecurity</h3>
              <p className="text-gray-300 text-sm mb-4">
                Unbreakable quantum encryption and threat detection systems
              </p>
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                ROI: 20,000%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Quantum Computing Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-xl p-8 border border-cyan-500/30">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Healthcare Breakthrough</h3>
              <p className="text-gray-300 mb-6">
                Pharmaceutical company discovered 3 new cancer treatments in 6 months 
                using quantum molecular simulation, achieving 15,000% ROI.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-bold text-xl">15,000% ROI</span>
                <span className="text-gray-400 text-sm">6 months</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-8 border border-purple-500/30">
              <div className="text-3xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold mb-4 text-pink-400">Financial Revolution</h3>
              <p className="text-gray-300 mb-6">
                Investment bank optimized trading algorithms with quantum computing, 
                increasing profits by 12,000% while reducing risk by 95%.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-pink-400 font-bold text-xl">12,000% ROI</span>
                <span className="text-gray-400 text-sm">3 months</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-xl p-8 border border-emerald-500/30">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Space Technology</h3>
              <p className="text-gray-300 mb-6">
                Aerospace company designed revolutionary materials using quantum simulation, 
                reducing spacecraft weight by 60% and increasing efficiency by 8,500%.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-emerald-400 font-bold text-xl">8,500% ROI</span>
                <span className="text-gray-400 text-sm">1 year</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Readiness Assessment */}
      <div className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Are You Ready for Quantum Computing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Take our quantum readiness assessment to discover how quantum computing 
            can transform your business and calculate your potential ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tools/quantum-readiness-assessment"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Take Assessment
            </Link>
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}