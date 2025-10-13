<<<<<<< HEAD
<<<<<<< HEAD
// usePerformanceMonitor hook
import { useEffect, useRef } from 'react';

export function usePerformanceMonitor() {
  const metricsRef = useRef({});

  useEffect(() => {
    // Performance monitoring logic will be implemented here
    console.log('Performance monitor initialized');
  }, []);
<<<<<<< HEAD
<<<<<<< HEAD

  return {
    metrics: metricsRef.current,
    startMonitoring: () => console.log('Monitoring started'),
    stopMonitoring: () => console.log('Monitoring stopped')
  };
}

export default usePerformanceMonitor;
=======
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(amount);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
// usePerformanceMonitor
export const usePerformanceMonitor = () => {
  // Utility function implementation
  return null;
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
