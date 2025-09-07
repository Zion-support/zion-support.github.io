import React from 'react';

export const metadata = {
  title: 'Lead  Generation  Tool | Zion Tech Group',
  description: 'Professional lead  generation  tool services for your business needs.',
  keywords: 'lead, generation, tool, services, business, technology'
};

export default function LeadGenerationToolPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Lead  Generation  Tool
          </h1>
          <p className="text-xl text-gray-600">
            Professional lead  generation  tool services for your business needs
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Expert Solutions
          </h2>
          <p className="text-gray-600">
            Our lead  generation  tool services provide comprehensive solutions tailored to your specific business requirements and industry standards.
          </p>
        </div>
      </div>
    </div>
  );
}