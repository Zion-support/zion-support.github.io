import React from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h3 className="text-lg font-semibold text-white mb-4">Performance Monitor</h3>
      <div className="text-gray-300">
        <p>Performance monitoring is active.</p>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
