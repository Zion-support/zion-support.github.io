'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const IoTEdgeComputingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IoT & Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Connect and process data at the edge with IoT and edge computing solutions for real-time insights." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              IoT & Edge Computing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect and process data at the edge with IoT and edge computing solutions for real-time insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">IoT Sensors</h3>
              <p className="text-gray-600">Deploy and manage IoT sensors for data collection.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Edge Processing</h3>
              <p className="text-gray-600">Process data locally at the edge for faster response times.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Real-time Analytics</h3>
              <p className="text-gray-600">Analyze data in real-time for immediate insights and actions.</p>
            </div>
          </div>ursor/fix-errors-and-merge-to-main-b63b
        </div>
      </div>
    </>
  );
};

export default IoTEdgeComputingPage;