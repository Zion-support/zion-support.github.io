import React from 'react';

interface AdvancedPerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({ className = '', children }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold mb-2">AdvancedPerformanceMonitor</h2>
      <p className="text-gray-600 mb-4">This component is being rebuilt.</p>
      {children}
    </div>
  );
};

export default AdvancedPerformanceMonitor;
