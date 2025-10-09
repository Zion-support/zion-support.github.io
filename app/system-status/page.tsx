import React from 'react';

const SystemStatusPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">System Status</h1>
        <div className="cyber-card p-8">
          <p className="text-gray-300 mb-6">
            This page shows the current status of our systems and services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SystemStatusPage;