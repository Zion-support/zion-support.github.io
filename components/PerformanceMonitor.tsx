import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Zap, Clock, TrendingUp, AlertTriangle, 
  CheckCircle, XCircle, Info, BarChart3, Gauge
} from 'lucide-react';

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
  
  const observerRef = useRef<PerformanceObserver | null>(null);
  const metricsRef = useRef<PerformanceMetrics>(metrics);
    
      





    }
    // FID scoring (0-100ms, lower is better)
    if (metrics.fid > threshold.fid) {
      score -= Math.min(25, (metrics.fid - threshold.fid) / 10);
    // CLS scoring (0-0.1, lower is better)
    if (metrics.cls > threshold.cls) {
      score -= Math.min(25, (metrics.cls / threshold.cls) * 25);
    // TTFB scoring (0-800ms, lower is better)
    if (metrics.ttfb > threshold.ttfb) {
      score -= Math.min(20, (metrics.ttfb - threshold.ttfb) / 100);
    return Math.max(0, Math.round(score));
  }, [threshold]);
  // Measure Core Web Vitals
  const measureCoreWebVitals = useCallback(() => {
    if (!window.PerformanceObserver) return;
    try {
      // First Contentful Paint
      observerRef.current = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            const newMetrics = { ...metricsRef.current, fcp: Math.round(entry.startTime) };
            setMetrics(newMetrics);
            setPerformanceIssues(analyzePerformance(newMetrics));
            if (onMetricsUpdate) onMetricsUpdate(newMetrics);
          }
        });
      });
      observerRef.current.observe({ entryTypes: ['paint'] });
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          const newMetrics = { ...metricsRef.current, lcp: Math.round(lastEntry.startTime) };
          setMetrics(newMetrics);
          setPerformanceIssues(analyzePerformance(newMetrics));
          if (onMetricsUpdate) onMetricsUpdate(newMetrics);
        }
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
          // Type assertion for FirstInputEntry
          const fidEntry = entry as PerformanceEntry & { processingStart?: number };
          if (fidEntry.processingStart) {
            const newMetrics = { ...metricsRef.current, fid: Math.round(fidEntry.processingStart - entry.startTime) };
      fidObserver.observe({ entryTypes: ['first-input'] });
      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        entries.forEach((entry: PerformanceEntry & { hadRecentInput?: boolean; value?: number }) => {
          if (!entry.hadRecentInput && entry.value) {
            clsValue += entry.value;
        const newMetrics = { ...metricsRef.current, cls: Math.round(clsValue * 1000) / 1000 };
        setMetrics(newMetrics);
        setPerformanceIssues(analyzePerformance(newMetrics));
        if (onMetricsUpdate) onMetricsUpdate(newMetrics);
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch {
      // Performance monitoring not supported
  }, [analyzePerformance, onMetricsUpdate]);
  // Measure additional performance metrics
  const measureAdditionalMetrics = useCallback(() => {
    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      const ttfb = Math.round(navigationEntry.responseStart - navigationEntry.requestStart);
      const newMetrics = { ...metricsRef.current, ttfb };
      setMetrics(newMetrics);
      setPerformanceIssues(analyzePerformance(newMetrics));
      if (onMetricsUpdate) onMetricsUpdate(newMetrics);
    // DOM Load and Window Load
    if (document.readyState === 'complete') {
      const domLoad = Math.round(performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart);
      const windowLoad = Math.round(performance.timing.loadEventEnd - performance.timing.navigationStart);
      const newMetrics = { ...metricsRef.current, domLoad, windowLoad };
  // Start monitoring
  const startMonitoring = useCallback(() => {
    if (isMonitoring) return;
    setIsMonitoring(true);
    measureCoreWebVitals();
    // Measure additional metrics after page load
      measureAdditionalMetrics();
    } else {
      window.addEventListener('load', measureAdditionalMetrics);
  }, [isMonitoring, measureCoreWebVitals, measureAdditionalMetrics]);
  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    setIsMonitoring(false);
  }, []);
      case 'excellent': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'good': return <CheckCircle className="w-4 h-4 text-yellow-400" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4 text-orange-400" />;
      case 'poor': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default: return <Info className="w-4 h-4 text-gray-400" />;
                <Activity className="w-5 h-5 text-cyan-400" />
                <XCircle className="w-4 h-4" />
                    <AlertTriangle className="w-3 h-3" />
                <RefreshCw className="w-3 h-3 inline mr-1" />
export default PerformanceMonitor;

  return null; // This component doesn't render anything
export default PerformanceMonitor;
