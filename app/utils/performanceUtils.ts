'use client';
import { useCallback } from 'react';

// Performance monitoring utilities
export const usePerformanceMonitor = () => {
  const measurePerformance = useCallback((_name: string, fn: () => void) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const _start = performance.now();
      fn();
      const _end = performance.now();

    } else {
      fn();
    }
  }, []);

  const measureAsyncPerformance = useCallback(async (_name: string, fn: () => Promise<void>) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const _start = performance.now();
      await fn();
      const _end = performance.now();

    } else {
      await fn();
    }
  }, []);

  return { measurePerformance, measureAsyncPerformance };
};

// Memoization utilities - these are not React hooks, just utility functions
export const createStableCallback = <T extends (...args: unknown[]) => unknown>(callback: T): T => {
  return callback;
};

export const createStableMemo = <T>(factory: () => T): T => {
  return factory();
};

// Simple performance utilities
export const measurePerformance = (_name: string, fn: () => void) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const _start = performance.now();
    fn();
    const _end = performance.now();

  } else {
    fn();
  }
};

export const measureAsyncPerformance = async (_name: string, fn: () => Promise<void>) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const _start = performance.now();
    await fn();
    const _end = performance.now();

  } else {
    await fn();
  }
};