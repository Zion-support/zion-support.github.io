'use client';

import React, { useCallback, useMemo } from 'react';

// Performance monitoring utilities
export const usePerformanceMonitor = () => {
  const measurePerformance = useCallback((name: string, fn: () => void) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const start = performance.now();
      fn();
      const end = performance.now();
      console.log(`${name} took ${end - start} milliseconds`);
    } else {
      fn();
    }
  }, []);

  const measureAsyncPerformance = useCallback(async (name: string, fn: () => Promise<void>) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const start = performance.now();
      await fn();
      const end = performance.now();
      console.log(`${name} took ${end - start} milliseconds`);
    } else {
      await fn();
    }
  }, []);

  return { measurePerformance, measureAsyncPerformance };
};

// Memoization utilities
export const useStableCallback = <T extends (...args: unknown[]) => unknown>(callback: T): T => {
  return useCallback(callback, [callback]);
};

export const useStableMemo = <T>(factory: () => T, deps: React.DependencyList): T => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => factory(), deps);
};

// Simple performance utilities
export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  } else {
    fn();
  }
};

export const measureAsyncPerformance = async (name: string, fn: () => Promise<void>) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const start = performance.now();
    await fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  } else {
    await fn();
  }
};