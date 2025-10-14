import React from 'react';

interface PerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ className = '', children }) => {
  return (
    <div className={`performancemonitor-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">PerformanceMonitor</h3>
          <p className="text-gray-600">This is the PerformanceMonitor component.</p>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;