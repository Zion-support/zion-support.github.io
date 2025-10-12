import React from 'react';

export default function ServicesShowcase() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>
            <p className="text-gray-600">Advanced artificial intelligence solutions to automate and optimize your business processes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">IT Services</h3>
            <p className="text-gray-600">Comprehensive IT services including cloud computing, cybersecurity, and system integration.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Consulting</h3>
            <p className="text-gray-600">Expert consulting services to help you make the right technology decisions for your business.</p>
          </div>
        </div>
      </div>
    </div>
  );
}