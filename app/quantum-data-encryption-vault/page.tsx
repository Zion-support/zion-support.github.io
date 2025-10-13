import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function QuantumDataEncryptionVault() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      <Helmet>
        <title>Quantum Data Encryption Vault - Zion Tech Group</title>
        <meta name="description" content="Quantum-grade data encryption vault solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Quantum Data Encryption Vault
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Protect your most sensitive data with quantum-grade encryption and zero-knowledge architecture. 
            Start your quantum security journey today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}