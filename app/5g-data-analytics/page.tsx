import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGDataAnalytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced analytics for 5G networks by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            5G Data Analytics
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Analyze 5G network performance with advanced analytics.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Network Performance</h3>
              <p className="text-gray-600">
                Monitor and analyze 5G network performance in real-time.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Insights</h3>
              <p className="text-gray-600">
                Extract valuable insights from 5G network data.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Optimization</h3>
              <p className="text-gray-600">
                Optimize network performance based on analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
