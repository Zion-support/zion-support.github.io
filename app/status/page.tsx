'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const StatusPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group</title>
        <meta name="description" content="Check the current status of our services and systems." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">System Status</h1>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                <span className="text-lg font-semibold text-green-600">All Systems Operational</span>
              </div>
              <p className="text-gray-600">All services are running normally.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusPage;