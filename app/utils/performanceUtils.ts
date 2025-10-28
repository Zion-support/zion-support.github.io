'use client';

import { useCallback } from 'react';

// Performance monitoring utilities
export const usePerformanceMonitor = () => {
  const measurePerformance = useCallback((name: string, fn: () => void) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      fn();
      } else {
      fn();
    }
  }, []);

  const measureAsyncPerformance = useCallback(async (name: string, fn: () => Promise<void>) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      await fn();
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
export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    fn();
    } else {
    fn();
  }
};

export const measureAsyncPerformance = async (name: string, fn: () => Promise<void>) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    await fn();
    } else {
    await fn();
  }
};