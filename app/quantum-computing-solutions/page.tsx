import React from 'react';
import SEOHead from '../components/SEOHead';

const QuantumComputingSolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Quantum Computing Solutions - Zion Tech Group"
        description="Advanced quantum computing solutions for optimization, cryptography, drug discovery, and complex problem solving using quantum algorithms."
        keywords="quantum computing, quantum algorithms, quantum optimization, quantum cryptography, quantum simulation, quantum technology"
        canonicalUrl="https://ziontechgroup.com/quantum-computing-solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quantum Computing Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of quantum computing for optimization, cryptography, drug discovery, and solving complex computational problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Quantum Applications</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Optimization problems solving
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Quantum cryptography
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Drug discovery simulation
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Financial modeling
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Machine learning acceleration
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-pink-400">Quantum Services</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Quantum algorithm development
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Quantum simulation services
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Quantum cloud access
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Quantum consulting
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Research collaboration
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Quantum Computing Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Scientific Research</h3>
                <p className="text-gray-300">Quantum simulation for materials science and chemistry.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔐</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-pink-400">Cryptography</h3>
                <p className="text-gray-300">Quantum-resistant encryption and secure communications.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Optimization</h3>
                <p className="text-gray-300">Complex optimization problems in logistics and finance.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/contact?service=quantum-computing-solutions"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Explore Quantum Computing
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuantumComputingSolutionsPage;
