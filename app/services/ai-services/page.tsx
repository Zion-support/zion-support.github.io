import React from 'react';

export const metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'Professional AI services for your business needs.',
  keywords: 'ai-services, services, business, technology'
};

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Services
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive artificial intelligence solutions for your business
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Complete AI Solutions
          </h2>
          <p className="text-gray-600">
            Our comprehensive AI services portfolio includes machine learning, natural language processing, computer vision, and automation solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </div>
  );
}