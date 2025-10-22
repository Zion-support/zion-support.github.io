'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
const IoTEdgeComputingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IoT & Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Connect and process data at the edge with IoT solutions and edge computing infrastructure for real-time insights." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              IoT & Edge Computing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect and process data at the edge with IoT solutions and edge computing infrastructure for real-time insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Device Management</h3>
              <p className="text-gray-600">Comprehensive IoT device management and monitoring.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Edge Analytics</h3>
              <p className="text-gray-600">Real-time data processing and analytics at the edge.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Connectivity Solutions</h3>
              <p className="text-gray-600">Secure and reliable connectivity for IoT devices.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IoTEdgeComputingPage;