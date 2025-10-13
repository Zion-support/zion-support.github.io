import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGMobileApplications() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>5G Mobile Applications - Zion Tech Group</title>
        <meta name="description" content="5G-enabled mobile applications by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            5G Mobile Applications
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Develop mobile apps optimized for 5G networks.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">High Performance</h3>
              <p className="text-gray-600">
                Leverage 5G for high-performance mobile apps.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Features</h3>
              <p className="text-gray-600">
                Implement real-time features with 5G.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Optimization</h3>
              <p className="text-gray-600">
                Optimize apps for 5G network capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
