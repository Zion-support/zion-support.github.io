'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const QuantumComputingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Quantum Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Explore the future of computing with quantum solutions for complex problem-solving and optimization." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Quantum Computing Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the future of computing with quantum solutions for complex problem-solving and optimization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Quantum Algorithms</h3>
              <p className="text-gray-600">Develop quantum algorithms for specific business problems.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Optimization</h3>
              <p className="text-gray-600">Solve complex optimization problems using quantum computing.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cryptography</h3>
              <p className="text-gray-600">Implement quantum-resistant cryptographic solutions.</p>
            </div>
          </div>        </div>
      </div>
    </>
  );
};

export default QuantumComputingPage;