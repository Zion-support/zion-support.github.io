import { useEffect, useRef } from 'react';

export const usePerformanceMonitor = (name: string) => {
  const startTime = useRef<number>();
  
  useEffect(() => {
    startTime.current = performance.now();
    
    return () => {
      if (startTime.current) {
        const endTime = performance.now();
        const Duration = endTime - startTime.current;
        
        // Performance measurement logged
      }
    };
  }, [name]);
};