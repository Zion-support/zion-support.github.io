import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGSmartCitySolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>5G Smart City Solutions - Zion Tech Group</title>
        <meta name="description" content="5G solutions for smart cities by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            5G Smart City Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform cities with 5G smart solutions.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Infrastructure</h3>
              <p className="text-gray-600">
                Build smart city infrastructure with 5G.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">IoT Integration</h3>
              <p className="text-gray-600">
                Integrate IoT devices for smart cities.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Analytics</h3>
              <p className="text-gray-600">
                Analyze city data for better decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
