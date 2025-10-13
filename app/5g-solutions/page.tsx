import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Next-generation 5G technology solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            5G Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Leverage 5G technology for enhanced connectivity and performance.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">High Speed</h3>
              <p className="text-gray-600">
                Ultra-fast 5G connectivity for your business.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Low Latency</h3>
              <p className="text-gray-600">
                Minimal latency for real-time applications.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Reliability</h3>
              <p className="text-gray-600">
                Reliable 5G network infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
