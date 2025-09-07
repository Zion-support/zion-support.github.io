import React from 'react';

export const metadata = {
  title: 'Smart Invoice Generator | Zion Tech Group',
  description: 'Professional smart invoice generator services for your business needs.',
  keywords: 'smart-invoice-generator, services, business, technology'
};

export default function SmartInvoiceGeneratorPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Smart Invoice Generator
          </h1>
          <p className="text-xl text-gray-600">
            Professional smart invoice generator services for your business needs
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Expert Solutions
          </h2>
          <p className="text-gray-600">
            Our smart invoice generator services provide comprehensive solutions tailored to your specific business requirements and industry standards.
          </p>
        </div>
      </div>
    </div>
  );
}