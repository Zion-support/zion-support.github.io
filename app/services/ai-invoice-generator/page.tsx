import React from 'react';

export default function AIInvoiceGeneratorPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Invoice Generator
          </h1>
          <p className="text-xl text-gray-600">
            Automate invoice generation with AI-powered tools
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Smart Invoice Creation
          </h2>
          <p className="text-gray-600">
            Our AI invoice generator automates the creation of professional invoices, tracks payments, and manages billing cycles with intelligent data extraction and formatting.
          </p>
        </div>
      </div>
    </div>
  );
}