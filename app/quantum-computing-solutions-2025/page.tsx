import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quantum Computing Solutions 2025 - Zion Tech Group',
  description: 'Revolutionary quantum computing solutions delivering quantum supremacy, error-corrected quantum computers, and quantum-AI fusion with unprecedented performance.',
  keywords: [
    'quantum computing 2025',
    'quantum supremacy',
    'error-corrected quantum',
    'quantum-AI fusion',
    'quantum machine learning',
    'quantum internet',
    'quantum breakthrough',
    'quantum solutions'
  ],
  openGraph: {
    title: 'Quantum Computing Solutions 2025',
    description: 'Revolutionary quantum computing solutions that redefine the boundaries of computational power.',
    type: 'website',
  },
};

export default function QuantumComputingSolutions2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 mb-8">
              <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wide">
                ⚛️ QUANTUM BREAKTHROUGH
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Quantum Computing
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Solutions 2025
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary quantum computing solutions delivering 
              <span className="text-cyan-400 font-semibold"> quantum supremacy</span>, 
              <span className="text-purple-400 font-semibold"> error-corrected quantum computers</span>, and 
              <span className="text-pink-400 font-semibold"> quantum-AI fusion</span> with unprecedented performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="#quantum-features"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Quantum Features
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/case-studies/quantum-computing-breakthrough-2025"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                View Quantum Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Features Section */}
      <section id="quantum-features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Quantum Computing Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the most advanced quantum computing technology ever created, delivering unprecedented computational power and capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Supremacy</h3>
              <p className="text-gray-600 mb-6">
                Achieve quantum supremacy with our revolutionary quantum computers that outperform classical computers by orders of magnitude.
              </p>
              <div className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                QUANTUM SUPREMACY
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl border border-purple-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Error-Corrected Quantum</h3>
              <p className="text-gray-600 mb-6">
                Revolutionary error-corrected quantum computers that maintain quantum coherence and deliver reliable quantum computations.
              </p>
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                ERROR-CORRECTED
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl border border-pink-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum-AI Fusion</h3>
              <p className="text-gray-600 mb-6">
                Revolutionary fusion of quantum computing and artificial intelligence creating unprecedented computational capabilities.
              </p>
              <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                QUANTUM-AI FUSION
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Internet</h3>
              <p className="text-gray-600 mb-6">
                Revolutionary quantum internet infrastructure enabling secure quantum communication and distributed quantum computing.
              </p>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                QUANTUM INTERNET
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl border border-orange-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Machine Learning</h3>
              <p className="text-gray-600 mb-6">
                Revolutionary quantum machine learning algorithms that leverage quantum computing for unprecedented AI performance.
              </p>
              <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                QUANTUM ML
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Cryptography</h3>
              <p className="text-gray-600 mb-6">
                Unbreakable quantum cryptography solutions providing ultimate security for all digital communications and data.
              </p>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                QUANTUM SECURITY
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Quantum Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our quantum computing solutions are transforming industries and solving previously impossible problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Application 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Drug Discovery Revolution</h3>
              <p className="text-gray-600 mb-6">
                Quantum computing accelerates drug discovery by 10,000x, enabling the development of life-saving medications in days instead of years.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">10,000x Faster</span>
                <span className="text-sm text-gray-500">Drug Discovery</span>
              </div>
            </div>

            {/* Application 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Climate Change Solutions</h3>
              <p className="text-gray-600 mb-6">
                Quantum algorithms optimize renewable energy systems and climate models, providing solutions to combat climate change.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">95% Efficiency</span>
                <span className="text-sm text-gray-500">Energy Optimization</span>
              </div>
            </div>

            {/* Application 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Optimization</h3>
              <p className="text-gray-600 mb-6">
                Quantum computing revolutionizes financial modeling, risk assessment, and portfolio optimization with unprecedented accuracy.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-purple-600">99.9% Accuracy</span>
                <span className="text-sm text-gray-500">Financial Models</span>
              </div>
            </div>

            {/* Application 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Space Exploration</h3>
              <p className="text-gray-600 mb-6">
                Quantum computing enables advanced space mission planning, navigation, and communication for interplanetary exploration.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-indigo-600">1000x Faster</span>
                <span className="text-sm text-gray-500">Mission Planning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Performance Metrics */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Unprecedented Quantum Performance
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Our quantum computing solutions deliver performance metrics that were previously impossible to achieve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Metric 1 */}
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">10,000x</div>
              <div className="text-indigo-200 text-lg">Faster Processing</div>
              <div className="text-indigo-300 text-sm">Than Classical Computers</div>
            </div>

            {/* Metric 2 */}
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-indigo-200 text-lg">Accuracy</div>
              <div className="text-indigo-300 text-sm">Quantum Error Correction</div>
            </div>

            {/* Metric 3 */}
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">1000+</div>
              <div className="text-indigo-200 text-lg">Qubits</div>
              <div className="text-indigo-300 text-sm">Quantum Processing Units</div>
            </div>

            {/* Metric 4 */}
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">∞</div>
              <div className="text-indigo-200 text-lg">Possibilities</div>
              <div className="text-indigo-300 text-sm">Quantum Applications</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Harness Quantum Power?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the quantum revolution and transform your business with the most advanced quantum computing solutions available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Quantum Journey
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/case-studies/quantum-computing-breakthrough-2025"
              className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300"
            >
              View Quantum Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}