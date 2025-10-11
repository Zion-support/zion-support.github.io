'use client';

import React from 'react';

const StatusPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">System Status</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            Real-time system status and monitoring information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatusPage;
