'use client';
import {useEffect}}from 'react';

export const usePerformanceMonitor = const usePerformanceMonitor = () => {;
  useEffect(() => {;
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    const monitorWebVitals = const monitorWebVitals = const monitorWebVitals = () => {;
      // This is a simplified version - in production you'd use the web-vitals library;
      if ('performance' in window) {;

