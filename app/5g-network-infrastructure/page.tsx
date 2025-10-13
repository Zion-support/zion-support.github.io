import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGNetworkInfrastructure() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>5G Network Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Robust 5G network infrastructure by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            5G Network Infrastructure
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Build and maintain 5G network infrastructure.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Infrastructure Design</h3>
              <p className="text-gray-600">
                Design robust 5G network infrastructure.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Deployment</h3>
              <p className="text-gray-600">
                Deploy 5G infrastructure efficiently.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Maintenance</h3>
              <p className="text-gray-600">
                Maintain and optimize 5G infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
