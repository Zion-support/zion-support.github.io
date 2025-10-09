'use client';
/**
 * System Monitor Component
 * Real-time monitoring dashboard for performance, errors, and system health
 */
import React, { useState, useEffect, useCallback } from 'react';

// Performance metrics interface
interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

// Network connection interface
interface NetworkConnection {
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkConnection;
  mozConnection?: NetworkConnection;
  webkitConnection?: NetworkConnection;
}

interface SystemMetrics {
  performance: PerformanceMetrics;
  errors: {
    total: number;
    jsErrors: number;
    networkErrors: number;
    resourceErrors: number;
  };
  network: {
    effectiveType: string;
    downlink: number;
    rtt: number;
    saveData: boolean;
  };
  memory: {
    used: number;
    total: number;
    limit: number;
  };
  timestamp: number;
}

const SystemMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<SystemMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Get performance metrics
  const getPerformanceMetrics = useCallback((): PerformanceMetrics => {
    if (typeof window === 'undefined' || !window.performance) {
      return {
        loadTime: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        firstInputDelay: 0,
        cumulativeLayoutShift: 0
      };
    }

    const navigation = window.performance.timing;
    const paint = window.performance.getEntriesByType('paint');
    const lcp = window.performance.getEntriesByType('largest-contentful-paint');
    const fid = window.performance.getEntriesByType('first-input');
    const cls = window.performance.getEntriesByType('layout-shift');

    return {
      loadTime: navigation.loadEventEnd - navigation.navigationStart,
      firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
      largestContentfulPaint: lcp[lcp.length - 1]?.startTime || 0,
      firstInputDelay: fid[0]?.processingStart - fid[0]?.startTime || 0,
      cumulativeLayoutShift: cls.reduce((acc, entry) => acc + (entry as any).value, 0)
    };
  }, []);

  // Get network information
  const getNetworkInfo = useCallback(() => {
    if (typeof window === 'undefined') {
      return {
        effectiveType: 'unknown',
        downlink: 0,
        rtt: 0,
        saveData: false
      };
    }

    const nav = window.navigator as NavigatorWithConnection;
    const connection = nav.connection || nav.mozConnection || nav.webkitConnection;

    return {
      effectiveType: connection?.effectiveType || 'unknown',
      downlink: connection?.downlink || 0,
      rtt: connection?.rtt || 0,
      saveData: connection?.saveData || false
    };
  }, []);

  // Get memory information
  const getMemoryInfo = useCallback(() => {
    if (typeof window === 'undefined' || !('memory' in window.performance)) {
      return {
        used: 0,
        total: 0,
        limit: 0
      };
    }

    const memory = (window.performance as any).memory;
    return {
      used: memory.usedJSHeapSize,
      total: memory.totalJSHeapSize,
      limit: memory.jsHeapSizeLimit
    };
  }, []);

  // Calculate performance score
  const calculatePerformanceScore = useCallback((perf: PerformanceMetrics): number => {
    let score = 100;

    // Deduct points for slow load times
    if (perf.loadTime > 3000) score -= 20;
    if (perf.loadTime > 5000) score -= 30;

    // Deduct points for slow paint times
    if (perf.firstContentfulPaint > 2000) score -= 15;
    if (perf.firstContentfulPaint > 3000) score -= 25;

    // Deduct points for poor LCP
    if (perf.largestContentfulPaint > 2500) score -= 10;
    if (perf.largestContentfulPaint > 4000) score -= 20;

    // Deduct points for poor FID
    if (perf.firstInputDelay > 100) score -= 10;
    if (perf.firstInputDelay > 300) score -= 20;

    // Deduct points for poor CLS
    if (perf.cumulativeLayoutShift > 0.1) score -= 10;
    if (perf.cumulativeLayoutShift > 0.25) score -= 20;

    return Math.max(0, score);
  }, []);

  // Update metrics
  const updateMetrics = useCallback(() => {
    const performance = getPerformanceMetrics();
    const network = getNetworkInfo();
    const memory = getMemoryInfo();
    const errors = {
      total: 0,
      jsErrors: 0,
      networkErrors: 0,
      resourceErrors: 0
    };

    const newMetrics: SystemMetrics = {
      performance: {
        ...performance,
        score: calculatePerformanceScore(performance)
      },
      errors,
      network,
      memory,
      timestamp: Date.now()
    };

    setMetrics(newMetrics);
  }, [getPerformanceMetrics, getNetworkInfo, getMemoryInfo, calculatePerformanceScore]);

  // Initialize metrics
  useEffect(() => {
    updateMetrics();
    setIsVisible(true);

    // Update metrics every 5 seconds
    const interval = setInterval(updateMetrics, 5000);

    return () => clearInterval(interval);
  }, [updateMetrics]);

  if (!isVisible || !metrics) {
    return null;
  }

  const { performance, network, memory } = metrics;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg max-w-sm text-xs font-mono">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-bold">System Monitor</h3>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      </div>

      <div className="space-y-2">
        <div>
          <div className="flex justify-between">
            <span>Performance Score:</span>
            <span className={performance.score > 80 ? 'text-green-400' : performance.score > 60 ? 'text-yellow-400' : 'text-red-400'}>
              {performance.score}/100
            </span>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <span>Load Time:</span>
            <span>{performance.loadTime.toFixed(0)}ms</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <span>FCP:</span>
            <span>{performance.firstContentfulPaint.toFixed(0)}ms</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <span>Network:</span>
            <span className="uppercase">{network.effectiveType}</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <span>Memory:</span>
            <span>{(memory.used / 1024 / 1024).toFixed(1)}MB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemMonitor;