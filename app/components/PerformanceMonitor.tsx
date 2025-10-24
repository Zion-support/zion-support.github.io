<<<<<<< HEAD
import React from 'react';

interface PerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default PerformanceMonitor;
=======
'use client'

import React, { useEffect, useState } from 'react'

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<any>(null)

  useEffect(() => {
    // Performance monitoring logic
    console.log('Performance monitor initialized')
  }, [])

  return null
}

export default PerformanceMonitor
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
