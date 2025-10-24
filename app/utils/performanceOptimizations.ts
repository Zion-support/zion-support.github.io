import { useCallback, useMemo, useState, useEffect } from 'react'
'use client'
// Performance optimization utilities

// Debounce utility for performance
export const debounce = <T extends (...args: any[]) => any>(
  fun,
  c: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...arg,
  s: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Throttle utility for performance
export const throttle = <T extends (...args: any[]) => any>(
  fun,
  c: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...arg,
  s: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = $2;
export default performanceOptimizations