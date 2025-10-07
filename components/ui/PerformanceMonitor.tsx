import React from 'react';

interface PerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceMonitor = React.memo(function PerformanceMonitor({
  className = '',
  children,
}: PerformanceMonitorProps) {
  return <div className={className}>{children}</div>;
});

export default PerformanceMonitor;
