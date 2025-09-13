import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quantum Computing Solutions 2025 - Zion Tech Group',
  description: 'Revolutionary quantum computing solutions delivering quantum supremacy, error-corrected quantum computers, and quantum-AI fusion with breakthrough performance.',
  keywords: ['Quantum Computing', 'Quantum Supremacy', 'Error-Corrected Quantum', 'Quantum-AI Fusion', 'Quantum Internet', 'Quantum Machine Learning'],
};

export default function QuantumComputingSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold mb-6 animate-pulse">
            ⚛️ QUANTUM BREAKTHROUGH
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Quantum Computing
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Solutions 2025
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the power of quantum supremacy with our revolutionary quantum computing solutions. 
            Achieve <span className="font-bold text-indigo-600">quantum advantage</span> with 
            <span className="font-bold text-purple-600"> error-corrected quantum computers</span> and 
            <span className="font-bold text-cyan-600"> quantum-AI fusion</span> technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="#quantum-features"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Quantum Solutions
            </Link>
            <Link 
              href="/case-studies/quantum-ai-financial-optimization-breakthrough-2026"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300"
            >
              View Quantum Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Quantum Features */}
      <section id="quantum-features" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Quantum Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge quantum computing solutions that solve previously impossible problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quantum Feature 1 */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl border border-indigo-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Supremacy</h3>
              <p className="text-gray-600 mb-6">
                Achieve computational advantage over classical computers with our quantum supremacy solutions.
              </p>
              <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                1000x Faster Than Classical
              </div>
            </div>

            {/* Quantum Feature 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Error-Corrected Quantum</h3>
              <p className="text-gray-600 mb-6">
                Advanced error correction protocols ensuring reliable quantum computation at scale.
              </p>
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                99.99% Accuracy
              </div>
            </div>

            {/* Quantum Feature 3 */}
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl border border-cyan-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum-AI Fusion</h3>
              <p className="text-gray-600 mb-6">
                Revolutionary fusion of quantum computing and artificial intelligence for unprecedented capabilities.
              </p>
              <div className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                15,000% ROI Potential
              </div>
            </div>

            {/* Quantum Feature 4 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Internet</h3>
              <p className="text-gray-600 mb-6">
                Ultra-secure quantum communication networks with unbreakable encryption protocols.
              </p>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                100% Secure Communication
              </div>
            </div>

            {/* Quantum Feature 5 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Machine Learning</h3>
              <p className="text-gray-600 mb-6">
                Quantum algorithms that exponentially accelerate machine learning and pattern recognition.
              </p>
              <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                Exponential Speedup
              </div>
            </div>

            {/* Quantum Feature 6 */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border border-red-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Cryptography</h3>
              <p className="text-gray-600 mb-6">
                Unbreakable quantum encryption that provides absolute security for your data and communications.
              </p>
              <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                Unbreakable Security
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quantum Computing Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how quantum computing is revolutionizing industries across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Application 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Optimization</h3>
              <p className="text-gray-600 mb-6">
                Quantum algorithms for portfolio optimization, risk analysis, and high-frequency trading with unprecedented speed and accuracy.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-green-600">15,000% ROI</div>
                <Link 
                  href="/case-studies/quantum-ai-financial-optimization-breakthrough-2026"
                  className="text-indigo-600 hover:text-indigo-800 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Application 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Drug Discovery</h3>
              <p className="text-gray-600 mb-6">
                Accelerate pharmaceutical research with quantum simulation of molecular interactions and drug design.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-600">1000x Faster</div>
                <Link 
                  href="/case-studies/quantum-drug-discovery-breakthrough"
                  className="text-indigo-600 hover:text-indigo-800 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Application 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Climate Modeling</h3>
              <p className="text-gray-600 mb-6">
                Advanced climate simulation and environmental modeling for accurate weather prediction and climate change analysis.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-cyan-600">95% Accuracy</div>
                <Link 
                  href="/case-studies/quantum-climate-modeling-success"
                  className="text-indigo-600 hover:text-indigo-800 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Application 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-6">
                Quantum-resistant encryption and security protocols protecting against future quantum attacks.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-purple-600">Future-Proof</div>
                <Link 
                  href="/case-studies/quantum-cybersecurity-implementation"
                  className="text-indigo-600 hover:text-indigo-800 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Performance Metrics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quantum Performance Metrics
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            See the incredible performance improvements achieved with our quantum computing solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl border border-indigo-200">
              <div className="text-4xl font-bold text-indigo-600 mb-2">1000x</div>
              <div className="text-gray-600 font-semibold">Speed Improvement</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">99.99%</div>
              <div className="text-gray-600 font-semibold">Accuracy Rate</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl border border-cyan-200">
              <div className="text-4xl font-bold text-cyan-600 mb-2">15,000%</div>
              <div className="text-gray-600 font-semibold">ROI Potential</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600 font-semibold">Security Level</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Quantum Computing?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join the quantum revolution and unlock unprecedented computational power for your business. 
            Experience the future of computing today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Quantum Journey
            </Link>
            <Link 
              href="/webinars/quantum-computing-revolution-2025"
              className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Watch Quantum Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}