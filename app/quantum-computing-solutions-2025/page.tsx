import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function QuantumComputingSolutions2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <SEO
        title="Quantum Computing Solutions 2025 - Zion Tech Group"
        description="Revolutionary quantum computing solutions that deliver 50,000x performance improvements and breakthrough computational capabilities for enterprise applications."
        keywords="quantum computing, quantum solutions, quantum AI, quantum supremacy, error-corrected quantum, quantum machine learning"
        url="/quantum-computing-solutions-2025"
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              ⚛️ Quantum Computing Solutions 2025
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
              Experience the power of quantum computing with our revolutionary solutions that deliver 50,000x performance improvements and breakthrough computational capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Quantum Access
              </Link>
              <Link
                href="/case-studies/quantum-computing-breakthrough-2025"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                View Quantum Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Features */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Quantum Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of quantum mechanics to solve complex problems that are impossible for classical computers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Error-Corrected Quantum Computers */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-200">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Error-Corrected Quantum Computers</h3>
              <p className="text-gray-600 mb-6">
                Advanced quantum computers with error correction capabilities that maintain quantum coherence for extended periods.
              </p>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold">
                🏆 99.99% Quantum Fidelity
              </div>
            </div>

            {/* Quantum Machine Learning */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-200">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Machine Learning</h3>
              <p className="text-gray-600 mb-6">
                Quantum-enhanced machine learning algorithms that process data exponentially faster than classical methods.
              </p>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg font-semibold">
                ⚡ 50,000x Speed Increase
              </div>
            </div>

            {/* Quantum Internet */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border border-green-200">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Internet</h3>
              <p className="text-gray-600 mb-6">
                Ultra-secure quantum communication networks that enable unhackable data transmission and quantum teleportation.
              </p>
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-semibold">
                🔒 100% Quantum Security
              </div>
            </div>

            {/* Quantum Optimization */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Optimization</h3>
              <p className="text-gray-600 mb-6">
                Quantum algorithms that solve complex optimization problems in logistics, finance, and resource allocation.
              </p>
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg font-semibold">
                🎯 1000x Optimization Speed
              </div>
            </div>

            {/* Quantum Cryptography */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl border border-pink-200">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Cryptography</h3>
              <p className="text-gray-600 mb-6">
                Unbreakable encryption methods based on quantum mechanics that provide absolute security for sensitive data.
              </p>
              <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg font-semibold">
                🛡️ Unbreakable Security
              </div>
            </div>

            {/* Quantum Simulation */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-200">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Simulation</h3>
              <p className="text-gray-600 mb-6">
                Simulate complex quantum systems for drug discovery, materials science, and climate modeling with unprecedented accuracy.
              </p>
              <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg font-semibold">
                🧪 99.9% Simulation Accuracy
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Applications */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quantum Computing Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how quantum computing is revolutionizing industries and solving previously impossible problems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Financial Services */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">💰</div>
                <h3 className="text-2xl font-bold text-gray-900">Financial Services</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Quantum algorithms for portfolio optimization, risk assessment, and fraud detection that process millions of transactions in real-time.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Portfolio optimization 1000x faster
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Real-time fraud detection
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Quantum-secure transactions
                </li>
              </ul>
            </div>

            {/* Healthcare & Drug Discovery */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">🏥</div>
                <h3 className="text-2xl font-bold text-gray-900">Healthcare & Drug Discovery</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Quantum simulation for molecular modeling, drug discovery, and personalized medicine that accelerates research by decades.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Molecular simulation 10,000x faster
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Personalized drug design
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Protein folding prediction
                </li>
              </ul>
            </div>

            {/* Logistics & Supply Chain */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">🚚</div>
                <h3 className="text-2xl font-bold text-gray-900">Logistics & Supply Chain</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Quantum optimization for route planning, inventory management, and supply chain optimization that reduces costs by 60%.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Route optimization 100x faster
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Inventory optimization
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Supply chain resilience
                </li>
              </ul>
            </div>

            {/* Climate & Energy */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">🌍</div>
                <h3 className="text-2xl font-bold text-gray-900">Climate & Energy</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Quantum simulation for climate modeling, renewable energy optimization, and carbon capture technology development.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Climate modeling 1000x faster
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Energy grid optimization
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Carbon capture simulation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Performance Metrics */}
      <div className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Performance Metrics
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              See the incredible performance improvements our quantum computing solutions deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">50,000x</div>
              <div className="text-indigo-100 text-lg">Speed Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">99.99%</div>
              <div className="text-indigo-100 text-lg">Quantum Fidelity</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">1000x</div>
              <div className="text-indigo-100 text-lg">Optimization Speed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">∞</div>
              <div className="text-indigo-100 text-lg">Security Level</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready for Quantum Computing?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the quantum revolution and unlock unprecedented computational power for your business. Get started with our quantum computing solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Quantum Journey
            </Link>
            <Link
              href="/tools/quantum-readiness-assessment"
              className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all duration-300 border border-gray-300"
            >
              Assess Quantum Readiness
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}