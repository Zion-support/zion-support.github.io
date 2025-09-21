import React from 'react';

const Analytics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Analytics Overview</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm">Page Views</span>
            <span className="font-semibold">12,847</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Unique Visitors</span>
            <span className="font-semibold">8,923</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Bounce Rate</span>
            <span className="font-semibold text-green-600">32%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;