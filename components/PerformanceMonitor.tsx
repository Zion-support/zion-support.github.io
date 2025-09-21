import React from 'react';

const PerformanceMonitor: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm">Load Time</span>
            <span className="font-semibold text-green-600">1.2s</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Response Time</span>
            <span className="font-semibold text-green-600">0.8s</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Uptime</span>
            <span className="font-semibold text-green-600">99.9%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;