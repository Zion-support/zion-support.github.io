import React from 'react';

const SystemStatusPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">System Status</h1>
        <div className="bg-white rounded-lg p-8">
          <p className="text-gray-600 mb-4">
            Check the current status of our services and systems.
          </p>
          <p className="text-gray-600">
            All systems are operational. We maintain 99.9% uptime for our services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SystemStatusPage;

