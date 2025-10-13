import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SpecializedServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100">
      <Helmet>
        <title>Specialized Services - Zion Tech Group</title>
        <meta name="description" content="Custom specialized IT services tailored to your business needs." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Specialized Services
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Custom specialized IT services tailored to your business needs.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Development</h3>
              <p className="text-gray-600">
                Bespoke software solutions designed specifically for your business requirements.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">System Integration</h3>
              <p className="text-gray-600">
                Seamlessly integrate existing systems with new technologies.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Consulting</h3>
              <p className="text-gray-600">
                Expert guidance on technology strategy and implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}