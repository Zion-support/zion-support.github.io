
import React from 'react';


const StatusPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">System Status</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
            <span className="text-lg font-semibold text-gray-900">All Systems Operational</span>
          </div>
          <p className="text-gray-600">All services are running normally.</p>
        </div>
      </div>

    </div>
  );
};

export default StatusPage;

