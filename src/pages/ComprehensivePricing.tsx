import React from 'react';
import Card from '../components/Card';

const ComprehensivePricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Comprehensive Pricing Guide 2025</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed pricing information for all our services and solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="AI Services" description="Starting from $2,999/month" />
          <Card title="Cybersecurity" description="Starting from $1,999/month" />
          <Card title="Cloud Infrastructure" description="Starting from $999/month" />
        </div>

        <div className="text-center mt-12">
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Custom Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePricing;
