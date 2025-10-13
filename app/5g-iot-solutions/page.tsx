import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGIotSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>5G IoT Solutions - Zion Tech Group</title>
        <meta name="description" content="5G-powered IoT solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            5G IoT Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect IoT devices with 5G technology.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Device Connectivity</h3>
              <p className="text-gray-600">
                Connect millions of IoT devices with 5G.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Management</h3>
              <p className="text-gray-600">
                Manage IoT data efficiently with 5G.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics</h3>
              <p className="text-gray-600">
                Analyze IoT data in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
