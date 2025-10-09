'use client';
import React, { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const PerformanceMonitor = () => {
  useEffect(() => {
    const logMetric = (name, value, delta, id) => {
      console.log(`[Performance] ${name}:`, { value, delta, id });
      
      if (typeof window !== 'undefined' && 'gtag' in window) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: name,
          value: Math.round(name === 'CLS' ? value * 1000 : value)
        });
      }
    };

    getCLS(logMetric);
    getFID(logMetric);
    getFCP(logMetric);
    getLCP(logMetric);
    getTTFB(logMetric);
  }, []);

  return null;
};

export default PerformanceMonitor;