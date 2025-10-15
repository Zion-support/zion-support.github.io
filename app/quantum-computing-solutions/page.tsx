import React from 'react';
import SEOHead from '../components/SEOHead';

const QuantumComputingSolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Quantum Computing Solutions - Zion Tech Group"
        description="Revolutionary quantum computing solutions for complex problem solving, optimization, and advanced computational tasks."
        keywords="quantum computing, quantum algorithms, optimization, cryptography, quantum simulation, advanced computing"
        canonicalUrl="https://ziontechgroup.com/quantum-computing-solutions"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Quantum Computing Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of quantum computing for complex optimization, cryptography, and advanced computational challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quantum Capabilities</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quantum Optimization</h3>
                    <p className="text-gray-600">Solve complex optimization problems exponentially faster than classical computers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quantum Cryptography</h3>
                    <p className="text-gray-600">Ultra-secure communication and data protection using quantum principles.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quantum Simulation</h3>
                    <p className="text-gray-600">Simulate complex molecular and material systems for drug discovery and materials science.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Machine Learning Acceleration</h3>
                    <p className="text-gray-600">Accelerate AI and machine learning algorithms using quantum computing power.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Applications</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900">Financial Services</h3>
                  <p className="text-gray-600">Portfolio optimization, risk analysis, and algorithmic trading</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900">Healthcare</h3>
                  <p className="text-gray-600">Drug discovery, protein folding, and personalized medicine</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900">Logistics</h3>
                  <p className="text-gray-600">Route optimization, supply chain management, and scheduling</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900">Cybersecurity</h3>
                  <p className="text-gray-600">Quantum-resistant encryption and secure communications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuantumComputingSolutionsPage;