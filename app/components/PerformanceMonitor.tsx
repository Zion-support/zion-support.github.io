import React from 'react';

interface PerformanceMonitorProps {
  className?: string;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>PerformanceMonitor</h2>
      <p>This is a clean, functional component.</p>
    </div>
  );
};

export default PerformanceMonitor;
