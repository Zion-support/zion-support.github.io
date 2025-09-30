import React from 'react';

const RealTimePerformanceMonitor: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Real-Time Performance Monitor</h2>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold">CPU Usage</h3>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold">Memory Usage</h3>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold">Network</h3>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '30%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimePerformanceMonitor;