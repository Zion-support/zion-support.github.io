'use client'

<<<<<<< HEAD
import React, { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  connectionType: string;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      const memory = (performance as any).memory;
      const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;
      
      const connection = (navigator as any).connection;
      const connectionType = connection ? connection.effectiveType : 'unknown'

      setMetrics({
        loadTime,
        memoryUsage,
        connectionType
      });
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  if (!metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded-lg text-xs font-mono">
      <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
      <div>Memory: {metrics.memoryUsage.toFixed(1)}MB</div>
      <div>Connection: {metrics.connectionType}</div>
    </div>
  );
=======
import { useEffect } from 'react'

// Type definitions for performance entries
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  cancelable: boolean;
  target?: EventTarget;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  lastInputTime: number;
  sources: Array<{
    node?: Node;
    previousRect: DOMRectReadOnly;
    currentRect: DOMRectReadOnly;
  }>;
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Performance monitoring logic
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
          }
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as PerformanceEventTiming;
            console.log('FID:', fidEntry.processingStart - fidEntry.startTime)
          }
          if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as LayoutShiftEntry;
            console.log('CLS:', clsEntry.value)
          }
        }
      })

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
      } catch (e) {
        // Performance Observer not supported
      }

      // Cleanup
      return () => {
        observer.disconnect()
      }
    }
  }, [])

  return null
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}