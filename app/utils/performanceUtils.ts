'use client';

import { useCallback } from 'react';

// Performance monitoring utilities
export const usePerformanceUtils = () => {
  const measurePerformance = useCallback((fn: () => void, label?: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const start = performance.now();
      fn();
      const end = performance.now();
      console.log(`${label || 'Function'} took ${end - start} milliseconds`);
    } else {
      fn();
    }
  }, []);

  const measureAsyncPerformance = useCallback(async (fn: () => Promise<void>, label?: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const start = performance.now();
      await fn();
      const end = performance.now();
      console.log(`${label || 'Async function'} took ${end - start} milliseconds`);
    } else {
      await fn();
    }
  }, []);

  return { measurePerformance, measureAsyncPerformance };
};

// Memoization utilities - these are not React hooks, just utility functions
export const createMemo = <T>(factory: () => T): T => {
  return factory();
};

export const createStableMemo = <T>(factory: () => T): T => {
  return factory();
};

// Simple performance utilities
export const measureFunction = (fn: () => void, label?: string) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${label || 'Function'} took ${end - start} milliseconds`);
  } else {
    fn();
  }
};

export const measureAsyncFunction = async (fn: () => Promise<void>, label?: string) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const start = performance.now();
    await fn();
    const end = performance.now();
    console.log(`${label || 'Async function'} took ${end - start} milliseconds`);
  } else {
    await fn();
  }
};