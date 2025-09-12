import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quantum Computing Revolution 2025 - Next-Gen Computing Solutions',
  description: 'Experience the quantum computing revolution with Zion Tech Group. Breakthrough quantum processors, quantum algorithms, and quantum-enhanced AI systems transforming industries.',
  keywords: ['Quantum Computing', 'Quantum AI', 'Quantum Processors', 'Quantum Algorithms', 'Quantum Revolution 2025'],
  openGraph: {
    title: 'Quantum Computing Revolution 2025 - Next-Gen Computing Solutions',
    description: 'Breakthrough quantum processors and quantum-enhanced AI systems transforming industries.',
    images: ['/og-quantum-computing-2025.png'],
  },
};

export default function QuantumComputingRevolution2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold mb-6 animate-pulse">
            ⚛️ QUANTUM REVOLUTION 2025
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Quantum Computing
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Revolution 2025
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Experience the future of computing with our breakthrough quantum processors, 
            quantum algorithms, and quantum-enhanced AI systems that are solving problems 
            previously impossible with classical computers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#quantum-demos" 
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Quantum Demos
            </Link>
            <Link 
              href="#quantum-solutions" 
              className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              View Quantum Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Quantum Technology Showcase */}
      <section id="quantum-demos" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quantum Technology Breakthroughs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary quantum technologies that are reshaping the future of computing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quantum Processor Demo */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Processor</h3>
              <p className="text-gray-600 mb-6">
                Our 1000-qubit quantum processor delivers exponential computational power for complex optimization problems.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="h-32 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Quantum Processor Demo</span>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Processing Power:</span>
                  <span className="font-semibold text-indigo-600">1000 Qubits</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Coherence Time:</span>
                  <span className="font-semibold text-purple-600">500μs</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Error Rate:</span>
                  <span className="font-semibold text-green-600">0.001%</span>
                </div>
              </div>
              <Link 
                href="/demos/quantum-processor" 
                className="inline-block w-full text-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Try Quantum Demo
              </Link>
            </div>

            {/* Quantum AI Demo */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum AI</h3>
              <p className="text-gray-600 mb-6">
                Quantum-enhanced machine learning algorithms that process data at unprecedented speeds.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Quantum AI Demo</span>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Speed Improvement:</span>
                  <span className="font-semibold text-purple-600">1000x Faster</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Accuracy:</span>
                  <span className="font-semibold text-green-600">99.9%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Energy Efficiency:</span>
                  <span className="font-semibold text-blue-600">95% Less</span>
                </div>
              </div>
              <Link 
                href="/demos/quantum-ai" 
                className="inline-block w-full text-center px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Try Quantum AI
              </Link>
            </div>

            {/* Quantum Cryptography Demo */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Cryptography</h3>
              <p className="text-gray-600 mb-6">
                Unbreakable encryption using quantum key distribution and quantum random number generation.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="h-32 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Quantum Crypto Demo</span>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Security Level:</span>
                  <span className="font-semibold text-blue-600">Unbreakable</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Key Length:</span>
                  <span className="font-semibold text-cyan-600">256-bit</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Detection:</span>
                  <span className="font-semibold text-green-600">100%</span>
                </div>
              </div>
              <Link 
                href="/demos/quantum-cryptography" 
                className="inline-block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Try Quantum Crypto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Solutions */}
      <section id="quantum-solutions" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quantum Solutions for Every Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with quantum computing solutions tailored to your industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Financial Services */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">💰</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Financial Services</h3>
                  <p className="text-gray-600">Quantum Trading & Risk Analysis</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 mb-6">
                <div className="text-3xl font-bold text-green-600">12,000% ROI</div>
                <div className="text-green-700">in trading algorithms</div>
              </div>
              <p className="text-gray-600 mb-6">
                Quantum algorithms for high-frequency trading, portfolio optimization, and risk assessment 
                that process millions of variables in real-time.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Portfolio Optimization</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Risk Analysis</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Trading Algorithms</span>
              </div>
              <Link 
                href="/solutions/quantum-finance" 
                className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Explore Quantum Finance
              </Link>
            </div>

            {/* Healthcare */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">🏥</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Healthcare & Pharma</h3>
                  <p className="text-gray-600">Quantum Drug Discovery</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-4 mb-6">
                <div className="text-3xl font-bold text-blue-600">50x Faster</div>
                <div className="text-blue-700">drug discovery process</div>
              </div>
              <p className="text-gray-600 mb-6">
                Quantum simulations for molecular modeling and drug discovery that can identify 
                potential treatments in days instead of years.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Molecular Simulation</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Drug Discovery</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Protein Folding</span>
              </div>
              <Link 
                href="/solutions/quantum-healthcare" 
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Explore Quantum Healthcare
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Capabilities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quantum Computing Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unprecedented computational power for the most complex challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '⚛️', title: 'Quantum Supremacy', desc: 'Exponential speed advantage over classical computers' },
              { icon: '🔮', title: 'Quantum Simulation', desc: 'Accurate modeling of quantum systems' },
              { icon: '🎯', title: 'Quantum Optimization', desc: 'Solving complex optimization problems' },
              { icon: '🔐', title: 'Quantum Security', desc: 'Unbreakable encryption and secure communication' },
            ].map((capability, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600">{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for the Quantum Revolution?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the quantum computing revolution and transform your business with unprecedented computational power
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Quantum Journey
            </Link>
            <Link 
              href="/quantum-implementation-guide-2025" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Download Quantum Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}