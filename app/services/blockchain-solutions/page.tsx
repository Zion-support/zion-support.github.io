import React from 'react';

export const metadata = {
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Professional blockchain solutions for your business needs.',
  keywords: 'blockchain-solutions, services, business, technology'
};

export default function BlockchainSolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blockchain Solutions
          </h1>
          <p className="text-xl text-gray-600">
            Professional blockchain solutions for your business needs
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Expert Solutions
          </h2>
          <p className="text-gray-600">
            Our blockchain solutions provide comprehensive services tailored to your specific business requirements and industry standards.
          </p>
        </div>
      </div>
    </div>
  );
}