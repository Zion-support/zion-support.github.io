'use client';
import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
}

interface PerformanceMonitorProps {
  isVisible?: boolean;
  className?: string;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ isVisible = false, className = '' }) => {
  const [, ] = useState<PerformanceMetrics>({
    loadTime: 0,
    domContentLoaded: 0,
    firstPaint: 0,
    firstContentfulPaint: 0
  });

  useEffect(() => {
    // Performance monitoring logic would go here
  }, []);

  if (!isVisible) return null;

  return (
    <div className={className}>
      <div>Performance Monitor</div>
    </div>
  );
};

export default PerformanceMonitor;