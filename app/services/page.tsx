import React from 'react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">AI Solutions</h3>
            <p className="text-gray-600">
              Cutting-edge artificial intelligence solutions to automate and optimize your business processes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">IT Services</h3>
            <p className="text-gray-600">
              Comprehensive IT services including infrastructure, security, and digital transformation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Cloud Solutions</h3>
            <p className="text-gray-600">
              Scalable cloud infrastructure and migration services to modernize your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}