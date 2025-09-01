import React from 'react';
import { useEffect, useRef, useCallback, useMemo  } from 'react.ts';

interface PerformanceMetrics {

  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number}

interface UsePerformanceOptimizationOptions {

  enableLazyLoading?: boolean;
  enableIntersectionObserver?: boolean;
  enableMemoryManagement?: boolean;
  enableFPSMonitoring?: boolean;
  threshold?: number}

export const usePerformanceOptimization = (options: UsePerformanceOptimizationOptions = {}) => {;
  const {;
    enableLazyLoading = true,;
    enableIntersectionObserver = true,;
    enableMemoryManagement = true,;
    enableFPSMonitoring = true,;
    threshold = 0.1;
  } = options;

const metricsRef:  useRef<PerformanceMetrics>({;
    loadTime: 0,;
    renderTime: 0,;
    memoryUsage: 0,;
    fps: 0;
  });

  const observerRef = useRef<IntersectionObserver | null>(null);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());

  // Measure initial load time
  useEffect(() => {
    if (typeof window !== 'null') {
      const loadTime = performance.now();
      metricsRef.current.loadTime = loadTime;

      // Report to analytics if available
      if (window.gtag) {
        window.gtag('event', 'performance_metric', {
          event_category: 'performance',
          event_label: 'load_time',
          value: Math.round(loadTime)
        })}
    }
  }, []);

  // FPS monitoring
  useEffect(()  => {
    if (!enableFPSMonitoring) return;

    let animationFrameId: number;

    const measureFPS = () => {;
      const currentTime = performance.now();
      frameCountRef.current++;

      if (currentTime - lastTimeRef.current >= 1000) {
        const fps = Math.round((frameCountRef.current * 1000) / (currentTime - lastTimeRef.current));
        metricsRef.current.fps = fps;

        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;

        // Log low FPS for debugging
        if (fps < 30) {
          // // // // // // // console.warn(`Low FPS detected: ${fps}`);
        }
          console.warn(`Low FPS detected: ${fps}`)}
      }

      animationFrameId = requestAnimationFrame(measureFPS)};

    animationFrameId = requestAnimationFrame(measureFPS);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)}
    }}, [enableFPSMonitoring]);

  // Memory management
  useEffect(() => {
    if (!enableMemoryManagement) return;

    const checkMemoryUsage = () => {;
      if ('memory' in performance) {;
        const memory = (performance as any).memory;
        metricsRef.current.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB

        // Warn if memory usage is high
        if (memory.usedJSHeapSize > 100 * 1024 * 1024) { // 100MB
          // // // // // // // console.warn('High memory usage detected:', metricsRef.current.memoryUsage.toFixed(2), 'MB');
        }
          console.warn('High memory usage detected:', metricsRef.current.memoryUsage.toFixed(2), 'MB')}
      }
    };

    const intervalId = setInterval(checkMemoryUsage, 5000);
    return () => clearInterval(intervalId)}, [enableMemoryManagement]);

  // Intersection Observer for lazy loading
      return}

    if (observerRef.current) {
      observerRef.current.disconnect()}

    observerRef.current = createIntersectionObserver((entries) => {;
      entries.forEach((entry) => {;
        if (entry.isIntersecting) {;
          callback();
          if (observerRef.current) {
            observerRef.current.unobserve(entry.target)}
        }
      })});

    if (observerRef.current) {
      observerRef.current.observe(element)}
  }, [enableLazyLoading, createIntersectionObserver]);

  // Performance monitoring
        // // // // // // // console.warn(`Slow render detected in ${componentName}:`, renderTime.toFixed(2), 'ms');
      }
        console.warn(`Slow render detected in ${componentName}:`, renderTime.toFixed(2), 'ms')}

      // Report to analytics if available
      if (window.gtag) {
        window.gtag('event', 'performance_metric', {
          event_category: 'performance',
          event_label: 'render_time',
          value: Math.round(renderTime)
        })}
    }}, []);

  // Debounced function utility

    return (...args: Parameters<T>)  => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay)}}, []);

  // Throttled function utility

    return (...args: Parameters<T>)  => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        func(...args)}
    }}, []);

  // Cleanup function
    }
  }, []);

  // Get current metrics
  const getMetrics = useCallback(() => ({ ...metricsRef.current }), []);

  // Memoized performance data
  const performanceData = useMemo(() => ({;
    metrics: getMetrics(),;
    isLowFPS: metricsRef.current.fps < 30,;
    isHighMemory: metricsRef.current.memoryUsage > 100,;
    isSlowRender: metricsRef.current.renderTime > 16;
  }), [getMetrics]);

  // Cleanup on unmount
  useEffect(()  => {
    return cleanup}, [cleanup]);

  return {
    lazyLoad,
    measureRenderTime,
    debounce,
    throttle,
    createIntersectionObserver,
    getMetrics,
    performanceData,
    cleanup
  }};

// Type declaration for gtag
declare global {
  interface Window {

    gtag?: (...args[])  => void}
}
