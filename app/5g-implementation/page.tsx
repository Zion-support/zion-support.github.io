import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGImplementation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Complete 5G implementation services by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            5G Implementation
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Deploy 5G networks with our implementation services.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Network Design</h3>
              <p className="text-gray-600">
                Design optimal 5G network architecture.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Deployment</h3>
              <p className="text-gray-600">
                Deploy 5G infrastructure efficiently.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Testing</h3>
              <p className="text-gray-600">
                Comprehensive testing and validation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
