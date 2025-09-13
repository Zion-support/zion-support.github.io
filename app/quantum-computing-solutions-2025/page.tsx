import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quantum Computing Solutions 2025 - Revolutionary Quantum Technology',
  description: 'Discover breakthrough quantum computing solutions delivering quantum supremacy, error-corrected quantum computers, and quantum-AI fusion with 15,000% ROI.',
  keywords: ['Quantum Computing', 'Quantum Supremacy', 'Error-Corrected Quantum', 'Quantum-AI Fusion', 'Quantum Internet', '15,000% ROI', 'Revolutionary Technology'],
  openGraph: {
    title: 'Quantum Computing Solutions 2025',
    description: 'Revolutionary quantum computing breakthroughs',
    type: 'website',
    images: ['/og-quantum-computing-2025.png']
  }
};

export default function QuantumComputingSolutions2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold mb-6 animate-pulse">
            ⚛️ QUANTUM BREAKTHROUGH
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Quantum Computing Solutions 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Revolutionary quantum computing solutions delivering quantum supremacy, 
            error-corrected quantum computers, and quantum-AI fusion with 15,000% ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#quantum-solutions"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Solutions
            </Link>
            <Link 
              href="/case-studies/ai-2026-quantum-neural-fusion-success"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View 15,000% ROI Success
            </Link>
          </div>
        </div>
      </section>

      {/* Quantum Solutions Grid */}
      <section id="quantum-solutions" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Revolutionary Quantum Computing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Breakthrough quantum computing technologies delivering unprecedented 
              computational power and quantum supremacy for enterprise applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quantum Supremacy */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-indigo-200">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quantum Supremacy
              </h3>
              <p className="text-gray-600 mb-6">
                Achieve quantum supremacy with our revolutionary quantum processors 
                delivering exponential computational power beyond classical limits.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Exponential Processing Power
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Beyond Classical Limits
                </div>
                <div className="flex items-center text-sm text-indigo-600">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Revolutionary Processors
                </div>
              </div>
              <Link 
                href="/blog/quantum-supremacy-breakthrough-2025"
                className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Error-Corrected Quantum */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Error-Corrected Quantum
              </h3>
              <p className="text-gray-600 mb-6">
                Revolutionary error-corrected quantum computers with fault-tolerant 
                operations and 99.9% reliability for enterprise applications.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  99.9% Reliability
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Fault-Tolerant Operations
                </div>
                <div className="flex items-center text-sm text-purple-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Enterprise Ready
                </div>
              </div>
              <Link 
                href="/blog/error-corrected-quantum-breakthrough"
                className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                Explore Technology
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Quantum-AI Fusion */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-cyan-200">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quantum-AI Fusion
              </h3>
              <p className="text-gray-600 mb-6">
                Revolutionary fusion of quantum computing and artificial intelligence 
                delivering 15,000% ROI through enhanced machine learning capabilities.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  15,000% ROI Achieved
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Enhanced Machine Learning
                </div>
                <div className="flex items-center text-sm text-cyan-600">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                  Revolutionary Fusion
                </div>
              </div>
              <Link 
                href="/ai-2026-quantum-neural-fusion-breakthrough"
                className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
              >
                Discover Fusion
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Quantum Internet */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-emerald-200">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quantum Internet
              </h3>
              <p className="text-gray-600 mb-6">
                Revolutionary quantum internet infrastructure enabling ultra-secure 
                communication and quantum entanglement networks for global connectivity.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Ultra-Secure Communication
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Quantum Entanglement Networks
                </div>
                <div className="flex items-center text-sm text-emerald-600">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Global Connectivity
                </div>
              </div>
              <Link 
                href="/blog/quantum-internet-breakthrough-2025"
                className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
              >
                Explore Network
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Quantum Machine Learning */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-orange-200">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quantum Machine Learning
              </h3>
              <p className="text-gray-600 mb-6">
                Advanced quantum machine learning algorithms delivering exponential 
                speedup and enhanced pattern recognition capabilities.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Exponential Speedup
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Enhanced Pattern Recognition
                </div>
                <div className="flex items-center text-sm text-orange-600">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Advanced Algorithms
                </div>
              </div>
              <Link 
                href="/blog/ai-2025-quantum-machine-learning-breakthrough"
                className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
              >
                Learn Algorithms
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Quantum Security */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-red-200">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quantum Security
              </h3>
              <p className="text-gray-600 mb-6">
                Unbreakable quantum security protocols and cryptographic systems 
                providing absolute protection against cyber threats.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Unbreakable Security
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Cryptographic Systems
                </div>
                <div className="flex items-center text-sm text-red-600">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Absolute Protection
                </div>
              </div>
              <Link 
                href="/blog/quantum-security-breakthrough-2025"
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
              >
                Secure Your Data
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Capabilities */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Revolutionary Quantum Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced quantum computing capabilities delivering unprecedented 
              computational power and revolutionary problem-solving abilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl">⚛️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Quantum Processing Power</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Revolutionary quantum processing capabilities delivering exponential 
                  computational power for complex optimization and simulation problems.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing Speed:</span>
                    <span className="font-semibold text-indigo-600">∞ Times Faster</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Problem Size:</span>
                    <span className="font-semibold text-indigo-600">Exponential</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl">🧠</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Quantum Machine Learning</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Advanced quantum machine learning algorithms with exponential 
                  speedup and enhanced pattern recognition capabilities.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Speedup:</span>
                    <span className="font-semibold text-purple-600">Exponential</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Accuracy:</span>
                    <span className="font-semibold text-purple-600">99.9%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl">🌐</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Quantum Networks</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Revolutionary quantum networking infrastructure enabling 
                  ultra-secure communication and quantum entanglement distribution.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Security Level:</span>
                    <span className="font-semibold text-cyan-600">Unbreakable</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Global Reach:</span>
                    <span className="font-semibold text-cyan-600">Worldwide</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl">🔒</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Quantum Cryptography</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Unbreakable quantum cryptographic systems providing absolute 
                  security against classical and quantum cyber attacks.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Protection Level:</span>
                    <span className="font-semibold text-emerald-600">Absolute</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Attack Resistance:</span>
                    <span className="font-semibold text-emerald-600">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Quantum Computing Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world quantum computing implementations delivering unprecedented 
              ROI and revolutionary business transformation results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  15,000% ROI Achievement
                </h3>
                <p className="text-gray-600">
                  Quantum-Neural Fusion Breakthrough
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Industry:</span>
                  <span className="font-semibold">Manufacturing</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">ROI:</span>
                  <span className="font-bold text-green-600 text-xl">15,000%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Efficiency:</span>
                  <span className="font-bold text-blue-600 text-xl">10,000x</span>
                </div>
              </div>
              <Link 
                href="/case-studies/ai-2026-quantum-neural-fusion-success"
                className="w-full mt-6 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
              >
                View Full Case Study
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Quantum Supremacy
                </h3>
                <p className="text-gray-600">
                  Exponential Processing Power
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Processing Speed:</span>
                  <span className="font-semibold">∞ Times Faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Problem Complexity:</span>
                  <span className="font-bold text-green-600 text-xl">Universal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Accuracy:</span>
                  <span className="font-bold text-blue-600 text-xl">99.9%</span>
                </div>
              </div>
              <Link 
                href="/case-studies/quantum-supremacy-breakthrough"
                className="w-full mt-6 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                View Breakthrough
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Unbreakable Security
                </h3>
                <p className="text-gray-600">
                  Quantum Cryptographic Systems
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Security Level:</span>
                  <span className="font-semibold">Unbreakable</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Protection:</span>
                  <span className="font-bold text-green-600 text-xl">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Global Deployment:</span>
                  <span className="font-bold text-blue-600 text-xl">Worldwide</span>
                </div>
              </div>
              <Link 
                href="/case-studies/quantum-security-implementation"
                className="w-full mt-6 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
              >
                View Implementation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Quantum Revolution?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join the quantum computing revolution and achieve unprecedented ROI 
            with revolutionary quantum technologies that are reshaping the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Quantum Journey
            </Link>
            <Link 
              href="/tools/quantum-readiness-assessment"
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Quantum Readiness Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}