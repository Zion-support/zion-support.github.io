'use client';
import { useState, useEffect } from 'react';

export const useMonitoring = () => {
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    setIsMonitoring(true);
  }, []);

  return isMonitoring;
};
