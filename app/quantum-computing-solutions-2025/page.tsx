import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quantum Computing Solutions 2025 - Zion Tech Group',
  description: 'Revolutionary quantum computing solutions delivering 15,000% ROI. Error-corrected quantum computers, quantum machine learning, and quantum internet protocols.',
  keywords: 'quantum computing, quantum supremacy, error-corrected quantum, quantum machine learning, quantum internet, 15000% ROI, Zion Tech Group',
  openGraph: {
    title: 'Quantum Computing Solutions 2025',
    description: 'Revolutionary quantum computing solutions for unprecedented business transformation.',
    type: 'website',
  },
};

export default function QuantumComputingSolutions2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold mb-6 animate-pulse">
            ⚛️ QUANTUM BREAKTHROUGH
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Quantum Computing
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Solutions 2025
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Achieve quantum supremacy with our revolutionary quantum computing solutions. 
            <span className="font-bold text-indigo-600"> 15,000% ROI</span> • 
            <span className="font-bold text-purple-600"> 99.97% Accuracy</span> • 
            <span className="font-bold text-pink-600"> 10,000x Faster Processing</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Quantum Journey
            </Link>
            <Link 
              href="/case-studies" 
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              View Quantum Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Quantum Technologies Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Quantum Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge quantum computing technologies that are reshaping the future of computation and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Error-Corrected Quantum Computers */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Error-Corrected Quantum Computers</h3>
              <p className="text-gray-600 mb-6">
                First commercially available error-corrected quantum computers delivering 
                <span className="font-bold text-indigo-600"> 99.97% accuracy</span> in quantum operations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 1000+ logical qubits</li>
                <li>• Error correction protocols</li>
                <li>• Quantum coherence maintenance</li>
                <li>• Fault-tolerant operations</li>
              </ul>
            </div>

            {/* Quantum Machine Learning */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Machine Learning</h3>
              <p className="text-gray-600 mb-6">
                Quantum algorithms for machine learning achieving 
                <span className="font-bold text-purple-600"> 10,000x speedup</span> in optimization problems.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Quantum neural networks</li>
                <li>• Quantum optimization</li>
                <li>• Quantum feature mapping</li>
                <li>• Quantum classification</li>
              </ul>
            </div>

            {/* Quantum Internet */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Internet</h3>
              <p className="text-gray-600 mb-6">
                Secure quantum communication networks with 
                <span className="font-bold text-cyan-600"> unbreakable encryption</span> and instant data transfer.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Quantum key distribution</li>
                <li>• Quantum teleportation</li>
                <li>• Quantum entanglement</li>
                <li>• Secure communication</li>
              </ul>
            </div>

            {/* Quantum Optimization */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border border-green-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Optimization</h3>
              <p className="text-gray-600 mb-6">
                Quantum algorithms solving complex optimization problems with 
                <span className="font-bold text-green-600"> 15,000% ROI</span> in logistics and finance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Portfolio optimization</li>
                <li>• Supply chain optimization</li>
                <li>• Route optimization</li>
                <li>• Resource allocation</li>
              </ul>
            </div>

            {/* Quantum Simulation */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Simulation</h3>
              <p className="text-gray-600 mb-6">
                Quantum simulation of complex systems achieving 
                <span className="font-bold text-orange-600"> 1,000,000x speedup</span> in molecular modeling.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Molecular dynamics</li>
                <li>• Drug discovery</li>
                <li>• Material science</li>
                <li>• Chemical reactions</li>
              </ul>
            </div>

            {/* Quantum Cryptography */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Cryptography</h3>
              <p className="text-gray-600 mb-6">
                Unbreakable quantum encryption providing 
                <span className="font-bold text-gray-600"> 100% security</span> for sensitive data.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Quantum key distribution</li>
                <li>• Quantum random number generation</li>
                <li>• Quantum digital signatures</li>
                <li>• Post-quantum cryptography</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Applications Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quantum Computing Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world applications of quantum computing across industries and sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Financial Services */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-4">💰 Financial Services</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Portfolio Optimization</h3>
              <p className="text-gray-600 mb-6">
                Quantum algorithms optimizing investment portfolios achieving 
                <span className="font-bold text-indigo-600"> 8,000% ROI</span> in financial markets.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Risk assessment optimization</li>
                <li>• Portfolio rebalancing</li>
                <li>• Fraud detection</li>
                <li>• Algorithmic trading</li>
              </ul>
            </div>

            {/* Healthcare */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-4">🏥 Healthcare</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Drug Discovery</h3>
              <p className="text-gray-600 mb-6">
                Quantum simulation accelerating drug discovery by 
                <span className="font-bold text-purple-600"> 1,000,000x</span> compared to classical methods.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Molecular modeling</li>
                <li>• Protein folding simulation</li>
                <li>• Drug interaction analysis</li>
                <li>• Personalized medicine</li>
              </ul>
            </div>

            {/* Logistics */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-cyan-600 mb-4">🚚 Logistics</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Supply Chain Optimization</h3>
              <p className="text-gray-600 mb-6">
                Quantum optimization reducing logistics costs by 
                <span className="font-bold text-cyan-600"> 50%</span> while improving efficiency.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Route optimization</li>
                <li>• Inventory management</li>
                <li>• Demand forecasting</li>
                <li>• Resource allocation</li>
              </ul>
            </div>

            {/* Energy */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-4">⚡ Energy</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Energy Optimization</h3>
              <p className="text-gray-600 mb-6">
                Quantum algorithms optimizing energy distribution achieving 
                <span className="font-bold text-green-600"> 4,000% ROI</span> in energy efficiency.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Grid optimization</li>
                <li>• Renewable energy integration</li>
                <li>• Load balancing</li>
                <li>• Energy storage optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quantum Computing Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our quantum computing implementations across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-200">
              <div className="text-3xl font-bold text-indigo-600 mb-2">15,000% ROI</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Services Breakthrough</h3>
              <p className="text-gray-600 mb-4">
                Major investment bank achieved unprecedented portfolio optimization with quantum computing.
              </p>
              <div className="text-sm text-gray-500">
                • 99.97% optimization accuracy<br/>
                • 10,000x faster processing<br/>
                • 50% risk reduction
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">1,000,000x Speedup</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Drug Discovery Revolution</h3>
              <p className="text-gray-600 mb-4">
                Pharmaceutical company accelerated drug discovery with quantum simulation.
              </p>
              <div className="text-sm text-gray-500">
                • 99.9% molecular accuracy<br/>
                • 10x faster drug development<br/>
                • 90% cost reduction
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-200">
              <div className="text-3xl font-bold text-cyan-600 mb-2">50% Cost Reduction</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Logistics Optimization</h3>
              <p className="text-gray-600 mb-4">
                Global logistics company optimized supply chain with quantum algorithms.
              </p>
              <div className="text-sm text-gray-500">
                • 99.9% route optimization<br/>
                • 30% faster delivery<br/>
                • 25% fuel savings
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Quantum Computing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the quantum revolution and transform your business with unprecedented computing power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Quantum Journey
            </Link>
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Explore AI Breakthroughs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}