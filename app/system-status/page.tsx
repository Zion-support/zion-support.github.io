import React from 'react';

const SystemStatusPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">System Status</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 mb-6">
            Monitor the status of our systems and services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SystemStatusPage;
