'use client';
import { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;


export const usePerformanceMonitor = () => {
  const reportMetric = useCallback((name: string, value: number) => {
    // Report to analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value,
        event_category: 'Performance'

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}: ${value}ms`);

  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => reportMetric('CLS', metric.value));
        getFID((metric) => reportMetric('FID', metric.value));
        getFCP((metric) => reportMetric('FCP', metric.value));
        getLCP((metric) => reportMetric('LCP', metric.value));
        getTTFB((metric) => reportMetric('TTFB', metric.value));

    // Monitor page load time
    const handleLoad = () => {
      const loadTime = performance.now();
      reportMetric('PageLoad', loadTime);

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);

  // Monitor resource loading performance
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          const loadTime = resourceEntry.responseEnd - resourceEntry.requestStart;
          
          // Only report slow resources (>1s)
          if (loadTime > 1000) {
            reportMetric(`ResourceLoad_${resourceEntry.name.split('/').pop()}`, loadTime);

    observer.observe({ entryTypes: ['resource'] });
    return () => observer.disconnect();

  // Monitor navigation timing
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const metrics = {
          DNS: navigation.domainLookupEnd - navigation.domainLookupStart,
          TCP: navigation.connectEnd - navigation.connectStart,
          Request: navigation.responseStart - navigation.requestStart,
          Response: navigation.responseEnd - navigation.responseStart,
          DOM: navigation.domContentLoadedEventEnd - navigation.responseEnd,
          Load: navigation.loadEventEnd - navigation.loadEventStart

        Object.entries(metrics).forEach(([key, value]) => {
          reportMetric(`Navigation_${key}`, value);
;