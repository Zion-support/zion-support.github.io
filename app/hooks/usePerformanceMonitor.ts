'use client';

import { useState, useEffect } from 'react';

export const usePerformanceMonitor = () => {
  const [performanceData, setPerformanceData] = useState({});

  useEffect(() => {
    const monitor = () => {
      setPerformanceData({
        memory: performance.memory,
        timing: performance.timing
      });
    };

    monitor();
  }, []);

  return { performanceData };
};