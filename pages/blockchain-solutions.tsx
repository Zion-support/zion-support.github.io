import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layout';

const BlockchainSolutions: NextPage = () => {
  const useCases = [
    {
      title: 'Supply Chain Transparency',
      description: 'Track products from origin to consumer with immutable records.',
      icon: '🔗'
    },
    {
      title: 'Smart Contracts',
      description: 'Automate business processes with self-executing contracts.',
      icon: '📋'
    },
    {
      title: 'Digital Identity',
      description: 'Secure, decentralized identity management solutions.',
      icon: '🆔'
    }
  ];

  return (
    <Layout
      title="Blockchain Solutions - Zion Tech Group"
      description="Explore our comprehensive blockchain solutions for secure, transparent, and decentralized business operations."
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Blockchain Solutions
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlockchainSolutions;