'use client';
import React, { useEffect, useState } from 'react';

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  useEffect(() => {
    // Monitor performance metrics
    console.log('Performance monitoring initialized');
  }, []);

  return null;
};

export default PerformanceMonitor;
