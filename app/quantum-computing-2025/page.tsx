import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

const QuantumComputing2025Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <SEO
        title="Quantum Computing 2025 - Revolutionary Quantum Solutions"
        description="Explore breakthrough quantum computing technologies and quantum algorithms revolutionizing computation in 2025."
        keywords="quantum computing, quantum algorithms, quantum machine learning, 2025"
      />
      
      <div className="relative overflow-hidden">
        <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white animate-pulse">
                  ⚡ QUANTUM BREAKTHROUGH
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Quantum Computing 2025
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
                Experience the quantum revolution with breakthrough computing technologies that solve problems 
                impossible for classical computers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Access Quantum Platform
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Quantum Technologies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-6">🧠⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4">Quantum Machine Learning</h3>
                <p className="text-gray-300 mb-6">
                  Quantum-enhanced machine learning algorithms that process data exponentially faster.
                </p>
                <Link href="/quantum-ml" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium">
                  Explore Quantum ML
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-6">🔐</div>
                <h3 className="text-2xl font-bold text-white mb-4">Quantum Cryptography</h3>
                <p className="text-gray-300 mb-6">
                  Unbreakable encryption using quantum key distribution protocols.
                </p>
                <Link href="/quantum-crypto" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium">
                  Secure with Quantum
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-4">Quantum Optimization</h3>
                <p className="text-gray-300 mb-6">
                  Quantum algorithms that solve complex optimization problems with exponential speedup.
                </p>
                <Link href="/quantum-optimization" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium">
                  Optimize with Quantum
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuantumComputing2025Page;