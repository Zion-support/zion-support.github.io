import { useState, useEffect } from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
},;
export default usePerformanceMonitor,;
=======
// Type definitions for performance APIs,
declare global {interface PerformanceEntry {
    name: string,
    entryType: string,
    startTime: number,
    duration: number}

  interface PerformanceNavigationTiming extends PerformanceEntry {loadEventEnd: number,
    loadEventStart: number}

  interface PerformancePaintTiming extends PerformanceEntry {name: string}

  interface PerformanceEventTiming extends PerformanceEntry {processingStart: number}
}

interface PerformanceMetrics {loadTime: number,
  renderTime: number,
  memoryUsage: number,
  fps: number}

export function usePerformanceMonitor(): PerformanceMetrics | null {const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect_(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return}

    const updateMetrics = () => {const navigation = window.performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      const memory = (window.performance as any).memory;

      if (navigation) {
        setMetrics({
          loadTime: navigation.loadEventEnd - navigation.loadEventStart, renderTime:
            navigation.domContentLoadedEventEnd -
            navigation.domContentLoadedEventStart, memoryUsage: memory?.usedJSHeapSize || 0, fps: 60 })
      }
    };

    if (document.readyState === 'complete') {updateMetrics()} else {window.addEventListener('load', updateMetrics)}

    return () => {window.removeEventListener('load', updateMetrics)}
  }, []);

  return metrics
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if Performance Observer is supported
    if (!('PerformanceObserver' in window)) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          setMetrics(prev => ({
            ...prev,
            loadTime: navEntry.loadEventEnd - navEntry.loadEventStart,
          }));
        }
        
        if (entry.entryType === 'paint') {
          const paintEntry = entry as PerformancePaintTiming;
          if (paintEntry.name === 'first-contentful-paint') {
            setMetrics(prev => ({
              ...prev,
              firstContentfulPaint: paintEntry.startTime,
            }));
          }
        }
        
        if (entry.entryType === 'largest-contentful-paint') {
          const lcpEntry = entry as PerformanceEntry;
          setMetrics(prev => ({
            ...prev,
            largestContentfulPaint: lcpEntry.startTime,
          }));
        }
        
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          setMetrics(prev => ({
            ...prev,
            firstInputDelay: fidEntry.processingStart - fidEntry.startTime,
          }));
        }
        
        if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as PerformanceEntry & { value: number };
          setMetrics(prev => ({
            ...prev,
            cumulativeLayoutShift: (prev?.cumulativeLayoutShift || 0) + clsEntry.value,
          }));
        }
      });
    });

    // Observe different performance entry types
    try {
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (error) {
      console.warn('Performance Observer not fully supported:', error);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return { metrics, isSupported };
}
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
