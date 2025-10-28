'use client';

import { useState, useEffect } from 'react';

export const useErrorMonitoring = () => {
  const [errors, setErrors] = useState<ErrorEvent[]>([]);

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      setErrors(prev => [...prev, error]);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  return { errors };
};