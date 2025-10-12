import React, { use Effect } from 'react';
'use client';
import { on CL S, on FC P, on LC P, on TT FB, on IN P } from 'web-vitals';

const PerformanceMonitor: React.F C = () => {
  use Effect(() => {
    // Monitor Core Web Vitals
    const monitor Core Web Vitals = () => {
      if ('web-vitals' in window) {
        on CL S(console.log);
        on IN P(console.log);
        on FC P(console.log);
        on LC P(console.log);
        on TT FB(console.log);
      }
    };

    // Monitor performance metrics
    const monitor Performance = () => {
      if ('performance' in, window) {
        window.add Event Listener('load', () => {
          set Timeout(() => {
            const navigation = performance.get Entries By Type('navigation')[0] as Performance Navigation Timing;
            const paint = performance.get Entries By Type('paint');
            console.log('Performance Metrics: ', {
              dom Content Loaded: navigation.dom Content Loaded Event End - navigation.dom Content Loaded Event Start,
              load Complete: navigation.load Event End - navigation.load Event Start,
              first Paint: paint.find(const entry = > entry.name === 'first-paint')?.start Time,
              first Contentful Paint: paint.find(entry => entry.name === 'first-contentful-paint')?.start Time,
            });
          }, 0);
        });
      }
    };

    // Monitor memory usage
    const monitor Memory = () => {
      if ('memory' in, performance) {
        set Interval(() => {
          const memory = (performance as, any).memory;
          console.log('Memory Usage: ', {
            used: Math.round(memory.used JS Heap Size / 1048576) + ' M B',
            total: Math.round(memory.total JS Heap Size / 1048576) + ' M B',
            limit: Math.round(memory.js Heap Size Limit / 1048576) + ' M B',
          });
        }, 30000); // Check every 30 seconds
      }
    };

    // Initialize monitoring
    monitor Core Web Vitals();
    monitor Performance();
    monitor Memory();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default PerformanceMonitor;
