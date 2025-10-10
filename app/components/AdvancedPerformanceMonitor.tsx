import React, { useEffect, useState, useCallback } from 'react';
const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
  const measureWebVitals = useCallback(() => {
    const observers: PerformanceObserver[] = [];
    const fcpEntries = performance.getEntriesByName('first-contentful-paint') || [];
    const fcp = fcpEntries.length > 0 ? fcpEntries[0].startTime : null;
        const lcpObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
        const fidObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
              const fidEntry = entry as PerformanceEventTiming;
        const clsObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
              const clsEntry = entry as LayoutShift;
      const navigationEntries = performance.getEntriesByType?.('navigation') || [];
      const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry
      const memory =
  const measureResourceTiming = useCallback(() => {
    const resources = performance.getEntriesByType('resource');
    const slowResources = resources.filter(
  const measureCoreWebVitals = useCallback(() => {
          const { onCLS, onFCP, onLCP, onTTFB } = webVitals;
    const cleanup = measureWebVitals();
    const interval = setInterval(() => {
  const getPerformanceRecommendations = useCallback(() => {
    const recommendations: string[] = [];
  const _recommendations = getPerformanceRecommendations();
export default AdvancedPerformanceMonitor;