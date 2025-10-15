import React from 'react';
import { Helmet } from 'react-helmet-async';

const QuantumComputingSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Quantum Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge quantum computing solutions for optimization, cryptography, and scientific computing. Quantum algorithms, quantum software, and quantum hardware integration." />
        <meta name="keywords" content="quantum computing, quantum algorithms, quantum software, quantum optimization, quantum cryptography" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Quantum Computing Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of quantum computing for optimization, cryptography, 
              and scientific computing. Next-generation solutions for complex problems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Next-Generation Computing
              </h2>
              <p className="text-gray-300 mb-6">
                Our quantum computing solutions leverage quantum mechanics to solve 
                complex problems that are intractable for classical computers. 
                From optimization to cryptography, unlock new possibilities.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Quantum optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Quantum cryptography
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Quantum algorithms
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Quantum simulation
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Capabilities</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">1000+</div>
                    <div className="text-sm text-gray-300">Qubits</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">99.9%</div>
                    <div className="text-sm text-gray-300">Fidelity</div>
                  </div>
                </div>
                <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Explore Quantum
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Optimization</h3>
              <p className="text-gray-300">
                Quantum optimization algorithms for logistics, finance, and resource allocation.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Cryptography</h3>
              <p className="text-gray-300">
                Quantum-resistant cryptography and quantum key distribution systems.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Scientific Computing</h3>
              <p className="text-gray-300">
                Quantum simulation for drug discovery, materials science, and physics research.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Enter the Quantum Era
            </h2>
            <p className="text-gray-300 mb-8">
              Partner with us to explore quantum computing solutions for your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Start Quantum Project
              </button>
              <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                View Research
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuantumComputingSolutionsPage;