"use client"

import { useState, useEffect } from 'react';

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  
  return { values, handleChange };
};

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({});
  
  useEffect(() => {
    // Performance monitoring logic
  }, []);
  
  return { metrics };
};
