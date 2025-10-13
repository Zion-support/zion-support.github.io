import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Database } from 'lucide-react';

export default function QuantumDataEncryptionVault() {
  const features = [
    {
      title: "Quantum-Safe Encryption",
      description: "Advanced quantum-resistant encryption algorithms to protect your data from future quantum threats",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Zero-Knowledge Architecture",
      description: "Your data is encrypted in such a way that even we cannot access it without your keys",
      icon: <Lock className="w-8 h-8" />,
    },
    {
      title: "Distributed Storage",
      description: "Your data is distributed across multiple secure locations for maximum redundancy and security",
      icon: <Database className="w-8 h-8" />,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <Helmet>
        <title>Quantum Data Encryption Vault - Zion Tech Group</title>
        <meta name="description" content="Advanced quantum data encryption vault solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Quantum Data Encryption Vault
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Future-proof your data with quantum-safe encryption technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-purple-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Coming Soon
          </h2>
          <p className="text-gray-600 text-center">
            We're working on bringing you the most advanced quantum-safe encryption technology. 
            Check back soon for updates!
          </p>
        </div>
      </div>
    </div>
  );
}