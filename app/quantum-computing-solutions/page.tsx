import React from 'react';
import { Helmet } from 'react-helmet-async';

const QuantumComputingSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Quantum Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum computing solutions for optimization, cryptography, and complex problem solving. Harness quantum advantage for your business." />
        <meta name="keywords" content="quantum computing, quantum algorithms, quantum optimization, quantum cryptography, quantum advantage" />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-computing-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Quantum Computing Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock the power of quantum computing for your most complex challenges. 
              From optimization to cryptography, experience quantum advantage in real-world applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Quantum Capabilities</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Quantum optimization algorithms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Quantum machine learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Quantum cryptography and security</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Quantum simulation and modeling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Quantum annealing for optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Hybrid classical-quantum workflows</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Applications</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Financial portfolio optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Supply chain and logistics optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Drug discovery and molecular simulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Cryptographic key generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Machine learning acceleration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Climate modeling and simulation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Enter the Quantum Era</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be among the first to leverage quantum computing for competitive advantage in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Explore Quantum
              </a>
              <a
                href="/demo"
                className="bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                See Use Cases
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuantumComputingSolutionsPage;