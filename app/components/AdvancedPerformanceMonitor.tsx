'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memory: number | null;)
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;)
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps></PerformanceMonitorProps> = ({
  onMetricsUpdate,
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,

  const [isMonitoring, setIsMonitoring] = useState(false);

  const _updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => ({ ...prev, ...newMetrics }));
    if (onMetricsUpdate) {
      onMetricsUpdate({ ...metrics, ...newMetrics });
    }
  }, [metrics, onMetricsUpdate]);

  const _measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    // Measure First Contentful Paint (FCP);
    const _fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {
      updateMetrics({ fcp: fcpEntry.startTime });
    }

    // Measure Largest Contentful Paint (LCP);
  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const _startMonitoring = () => {
      setIsMonitoring(true);
      
      // Initial measurement
      measurePerformance();


  const _getPerformanceScore = (metric: number | null, thresholds: { good: number; poor: number }): _string => {
    if (metric === null) return 'N/A';
    if (metric <= thresholds.good) return 'Good';
    if (metric <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

          </div>
        );
      </div>
