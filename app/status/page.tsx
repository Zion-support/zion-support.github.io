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
          <h1 className="text-4xl font-bold text-center mb-8">System Status</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                All Systems Operational
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