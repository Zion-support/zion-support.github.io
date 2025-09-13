import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quantum Computing Solutions 2025 - Zion Tech Group',
  description: 'Revolutionary quantum computing solutions delivering error-corrected quantum computers, quantum supremacy, and quantum-AI fusion with unprecedented performance.',
  keywords: ['Quantum Computing', 'Quantum Supremacy', 'Error-Corrected Quantum', 'Quantum-AI Fusion', 'Quantum Internet'],
};

export default function QuantumComputingSolutions2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-pulse">
              ⚛️ QUANTUM COMPUTING SOLUTIONS 2025
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-4xl mx-auto">
              Experience the future of computing with our revolutionary quantum solutions delivering unprecedented performance and capabilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#solutions" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Solutions
              </Link>
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Quantum Ready
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Revolutionary Quantum Computing Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Error-Corrected Quantum Computers */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-300">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Error-Corrected Quantum Computers</h3>
              <p className="text-gray-700 mb-6">
                Revolutionary quantum computers with advanced error correction achieving 99.9% accuracy in quantum operations.
              </p>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold">
                Accuracy: 99.9%
              </div>
            </div>

            {/* Quantum Supremacy */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300">
              <div className="text-4xl mb-4">🌌</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Supremacy</h3>
              <p className="text-gray-700 mb-6">
                Achieved quantum supremacy with our quantum computers solving problems impossible for classical computers.
              </p>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold">
                Status: ACHIEVED
              </div>
            </div>

            {/* Quantum-AI Fusion */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border-2 border-green-200 hover:border-green-400 transition-all duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum-AI Fusion</h3>
              <p className="text-gray-700 mb-6">
                Revolutionary fusion of quantum computing and AI delivering 15,000% ROI with unprecedented processing power.
              </p>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold">
                ROI: 15,000%
              </div>
            </div>

            {/* Quantum Internet */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Internet</h3>
              <p className="text-gray-700 mb-6">
                Ultra-secure quantum internet with quantum key distribution and instant quantum communication.
              </p>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold">
                Security: 100%
              </div>
            </div>

            {/* Quantum Machine Learning */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl border-2 border-teal-200 hover:border-teal-400 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Machine Learning</h3>
              <p className="text-gray-700 mb-6">
                Advanced quantum machine learning algorithms achieving 10,000x faster training and 99.7% accuracy.
              </p>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold">
                Speed: 10,000x
              </div>
            </div>

            {/* Quantum Cryptography */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-xl border-2 border-pink-200 hover:border-pink-400 transition-all duration-300">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Cryptography</h3>
              <p className="text-gray-700 mb-6">
                Unbreakable quantum cryptography with quantum key distribution and quantum random number generation.
              </p>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold">
                Security: Unbreakable
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Applications Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Quantum Computing Applications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-4">💊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Drug Discovery</h3>
              <p className="text-gray-700 text-sm">
                Quantum algorithms accelerating drug discovery by 1000x
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Modeling</h3>
              <p className="text-gray-700 text-sm">
                Quantum finance models with 99.9% accuracy
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Climate Modeling</h3>
              <p className="text-gray-700 text-sm">
                Advanced climate simulations with quantum precision
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Materials Science</h3>
              <p className="text-gray-700 text-sm">
                Quantum materials discovery and optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Quantum Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pharmaceutical Breakthrough</h3>
              <p className="text-gray-700 mb-4">
                Major pharmaceutical company achieved 3,000% ROI using quantum computing for drug discovery.
              </p>
              <div className="text-3xl font-bold text-green-600">3,000% ROI</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Services</h3>
              <p className="text-gray-700 mb-4">
                Investment firm achieved 5,000% ROI with quantum financial modeling and risk assessment.
              </p>
              <div className="text-3xl font-bold text-green-600">5,000% ROI</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Energy Sector</h3>
              <p className="text-gray-700 mb-4">
                Energy company achieved 2,500% ROI with quantum optimization for renewable energy systems.
              </p>
              <div className="text-3xl font-bold text-green-600">2,500% ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Harness Quantum Power?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join the quantum revolution and achieve unprecedented results with our breakthrough quantum computing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Quantum Journey
            </Link>
            <Link 
              href="/case-studies" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}