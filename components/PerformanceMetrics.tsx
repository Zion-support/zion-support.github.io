import React from 'react';

export default function PerformanceMetrics() {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
      <h3 className="text-lg font-semibold mb-4 text-white">Performance Metrics</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">99.9%</div>
          <div className="text-sm opacity-75 text-white">Uptime</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">&lt;100ms</div>
          <div className="text-sm opacity-75 text-white">Response Time</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">10M+</div>
          <div className="text-sm opacity-75 text-white">Requests/Day</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">99.99%</div>
          <div className="text-sm opacity-75 text-white">Reliability</div>
        </div>
      </div>
    </div>
  );
}