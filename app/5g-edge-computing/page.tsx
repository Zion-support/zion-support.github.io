import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGEdgeComputing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>5G Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Edge computing solutions for 5G by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            5G Edge Computing
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Leverage edge computing with 5G technology.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Low Latency</h3>
              <p className="text-gray-600">
                Ultra-low latency computing at the edge.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Processing</h3>
              <p className="text-gray-600">
                Process data in real-time at the edge.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalability</h3>
              <p className="text-gray-600">
                Scale computing resources as needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
