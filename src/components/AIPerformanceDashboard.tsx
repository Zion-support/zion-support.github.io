import React from 'react';

const AIPerformanceDashboard: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">AI Performance Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold">AI Model Performance</h3>
          <p className="text-sm text-gray-600">Monitoring AI model accuracy and speed</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold">Resource Usage</h3>
          <p className="text-sm text-gray-600">Tracking CPU and memory usage</p>
        </div>
      </div>
    </div>
  );
};

export default AIPerformanceDashboard;