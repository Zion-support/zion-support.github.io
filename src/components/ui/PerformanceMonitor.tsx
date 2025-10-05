import React from 'react';

interface PerformanceMonitorProps {
  className?: string;
}

const PerformanceMonitor = React.memo(function PerformanceMonitor({
  className = '',
}: PerformanceMonitorProps) {
  return (
    <div className={`bg-blue-100 p-4 rounded-lg ${className}`}>
      <h3 className='text-lg font-semibold text-blue-800'>
        PerformanceMonitor
      </h3>
      <p className='text-blue-600'>This component is under development.</p>
    </div>
  );
});

export default PerformanceMonitor;
