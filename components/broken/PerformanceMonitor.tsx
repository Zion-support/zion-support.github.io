import React from 'react';

interface PerformanceMonitorProps {
  className?: string;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PerformanceMonitor</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PerformanceMonitor;