'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const StatusPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group</title>
        <meta name="description" content="Check the current status of our systems and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              System Status
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check the current status of our systems and services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">All Systems Operational</h3>
              <p className="text-gray-600">All services are running normally.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">API Services</h3>
              <p className="text-gray-600">API endpoints are responding normally.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Database</h3>
              <p className="text-gray-600">Database services are operating at full capacity.</p>
            </div>
          </div>ursor/fix-errors-and-merge-to-main-b63b
        </div>
      </div>
    </>
  );
};

export default StatusPage;