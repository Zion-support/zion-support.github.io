const fs = require('fs');

// Fix AdvancedPerformanceEnhancer
const advancedPerformanceEnhancerContent = `'use client';

import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number | null;
  connectionSpeed: string | null;
}

interface AdvancedPerformanceEnhancerProps {
  children: React.ReactNode;
  enableMonitoring?: boolean;
  enableOptimizations?: boolean;
}

export const AdvancedPerformanceEnhancer: React.FC<AdvancedPerformanceEnhancerProps> = ({
  children,
  enableMonitoring = true,
  enableOptimizations = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: null,
    connectionSpeed: null
  });

  const [isOptimized, setIsOptimized] = useState(false);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !enableMonitoring) return;

    try {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
            } else if (entry.entryType === 'first-input') {
              setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
            } else if (entry.entryType === 'layout-shift') {
              if (!(entry as any).hadRecentInput) {
                setMetrics(prev => ({
                  ...prev,
                  cls: (prev.cls || 0) + (entry as any).value
                }));
              }
            } else if (entry.entryType === 'paint') {
              if (entry.name === 'first-contentful-paint') {
                setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
              }
            } else if (entry.entryType === 'navigation') {
              const navEntry = entry as any;
              setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
            }
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint', 'navigation'] });
      }

      if ('memory' in performance) {
        const memory = (performance as any).memory;
        if (memory) {
          setMetrics(prev => ({
            ...prev,
            memoryUsage: memory.usedJSHeapSize / 1024 / 1024
          }));
        }
      }

      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection) {
          setMetrics(prev => ({
            ...prev,
            connectionSpeed: connection.effectiveType || 'unknown'
          }));
        }
      }
    } catch (error) {
      // console.warn('Performance monitoring error:', error);
    }
  }, [enableMonitoring]);

  const applyOptimizations = useCallback(() => {
    if (typeof window === 'undefined' || !enableOptimizations) return;

    try {
      const criticalResources = [
        { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
        { href: '/images/hero-bg.jpg', as: 'image' },
        { href: '/images/logo.png', as: 'image' }
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        if (resource.type) link.type = resource.type;
        if (resource.crossOrigin) link.crossOrigin = resource.crossOrigin;
        document.head.appendChild(link);
      });

      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });

      const fontLink = document.createElement('link');
      fontLink.rel = 'preconnect';
      fontLink.href = 'https://fonts.googleapis.com';
      document.head.appendChild(fontLink);

      const fontLink2 = document.createElement('link');
      fontLink2.rel = 'preconnect';
      fontLink2.href = 'https://fonts.gstatic.com';
      fontLink2.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink2);

      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(() => {
          // Service worker registration failed
        });
      }

      setIsOptimized(true);
    } catch (error) {
      // console.warn('Performance optimization error:', error);
    }
  }, [enableOptimizations]);

  useEffect(() => {
    applyOptimizations();
  }, [applyOptimizations]);

  useEffect(() => {
    if (enableMonitoring) {
      measurePerformance();
    }
  }, [measurePerformance, enableMonitoring]);

  useEffect(() => {
    if (enableMonitoring && Object.values(metrics).some(value => value !== null)) {
      // console.log('Performance Metrics:', metrics);
    }
  }, [metrics, enableMonitoring]);

  return (
    <div className="performance-enhanced">
      {children}
      {enableMonitoring && (
        <div className="performance-monitor" style={{ display: 'none' }}>
          <div>LCP: {metrics.lcp?.toFixed(2)}ms</div>
          <div>FID: {metrics.fid?.toFixed(2)}ms</div>
          <div>CLS: {metrics.cls?.toFixed(4)}</div>
          <div>FCP: {metrics.fcp?.toFixed(2)}ms</div>
          <div>TTFB: {metrics.ttfb?.toFixed(2)}ms</div>
          <div>Memory: {metrics.memoryUsage?.toFixed(2)}MB</div>
          <div>Connection: {metrics.connectionSpeed}</div>
          <div>Optimized: {isOptimized ? 'Yes' : 'No'}</div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceEnhancer;
`;

// Fix EnhancedAccessibilityManager
const enhancedAccessibilityManagerContent = `'use client';

import React, { useEffect, memo, useState } from 'react';

interface EnhancedAccessibilityManagerProps {
  enableAutoDetection?: boolean;
  enableKeyboardShortcuts?: boolean;
  enableScreenReaderOptimization?: boolean;
  enableHighContrastMode?: boolean;
  enableFocusManagement?: boolean;
  children?: React.ReactNode;
}

const EnhancedAccessibilityManager: React.FC<EnhancedAccessibilityManagerProps> = memo(({
  enableAutoDetection = true,
  enableKeyboardShortcuts = true,
  enableScreenReaderOptimization = true,
  enableHighContrastMode = true,
  enableFocusManagement = true,
  children
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isScreenReaderActive, setIsScreenReaderActive] = useState(false);

  useEffect(() => {
    if (!enableAutoDetection) return;

    const checkScreenReader = () => {
      const isScreenReader = window.speechSynthesis?.speaking || 
                            document.querySelector('[aria-live]') ||
                            window.navigator.userAgent.includes('NVDA') ||
                            window.navigator.userAgent.includes('JAWS');
      setIsScreenReaderActive(!!isScreenReader);
    };

    checkScreenReader();
    window.addEventListener('focus', checkScreenReader);
    return () => window.removeEventListener('focus', checkScreenReader);
  }, [enableAutoDetection]);

  useEffect(() => {
    if (!enableHighContrastMode) return;

    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(mediaQuery.matches);

    const handleChange = (e) => setIsHighContrast(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [enableHighContrastMode]);

  useEffect(() => {
    if (!enableKeyboardShortcuts) return;

    const handleKeyDown = (e) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      switch (e.key) {
        case 'h':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            setIsHighContrast(prev => !prev);
          }
          break;
        case 'k':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            const focusableElements = document.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            firstElement?.focus();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardShortcuts]);

  useEffect(() => {
    if (isHighContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    if (isScreenReaderActive) {
      document.body.classList.add('screen-reader-active');
    } else {
      document.body.classList.remove('screen-reader-active');
    }
  }, [isHighContrast, isScreenReaderActive]);

  return (
    <div className="accessibility-manager">
      {children}
    </div>
  );
});

EnhancedAccessibilityManager.displayName = 'EnhancedAccessibilityManager';

export default EnhancedAccessibilityManager;
`;

// Fix PerformanceMonitor
const performanceMonitorContent = `'use client';

import React, { useEffect, useState, memo } from 'react';

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: Node;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  target?: Node;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: any) => void;
  enableRealTimeMonitoring?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = memo(({
  onMetricsUpdate,
  enableRealTimeMonitoring = true
}) => {
  const [metrics, setMetrics] = useState({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        } else if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as LayoutShift;
          if (!clsEntry.hadRecentInput) {
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + clsEntry.value }));
          }
        } else if (entry.entryType === 'navigation') {
          const navEntry = entry as any;
          setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
        }
      }
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });

    return () => observer.disconnect();
  }, [enableRealTimeMonitoring]);

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  return (
    <div className="performance-monitor">
      <h3>Performance Metrics</h3>
      <div className="metrics">
        <div>FCP: {metrics.fcp?.toFixed(2)}ms</div>
        <div>LCP: {metrics.lcp?.toFixed(2)}ms</div>
        <div>FID: {metrics.fid?.toFixed(2)}ms</div>
        <div>CLS: {metrics.cls?.toFixed(4)}</div>
        <div>TTFB: {metrics.ttfb?.toFixed(2)}ms</div>
      </div>
    </div>
  );
});

PerformanceMonitor.displayName = 'PerformanceMonitor';

export default PerformanceMonitor;
`;

// Fix PerformanceMonitoring
const performanceMonitoringContent = `'use client';

import React, { useEffect, memo, useCallback, useState } from 'react';

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: Node;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  target?: Node;
}

interface PerformanceMonitoringProps {
  onMetricsUpdate?: (metrics: any) => void;
  enableRealTimeMonitoring?: boolean;
}

const PerformanceMonitoring: React.FC<PerformanceMonitoringProps> = memo(({
  onMetricsUpdate,
  enableRealTimeMonitoring = true
}) => {
  const [metrics, setMetrics] = useState({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        } else if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as LayoutShiftEntry;
          if (!clsEntry.hadRecentInput) {
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + clsEntry.value }));
          }
        } else if (entry.entryType === 'navigation') {
          const navEntry = entry as any;
          setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
        }
      }
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const cleanup = measurePerformance();
    return cleanup;
  }, [measurePerformance, enableRealTimeMonitoring]);

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  return (
    <div className="performance-monitoring">
      <h3>Performance Monitoring</h3>
      <div className="metrics">
        <div>FCP: {metrics.fcp?.toFixed(2)}ms</div>
        <div>LCP: {metrics.lcp?.toFixed(2)}ms</div>
        <div>FID: {metrics.fid?.toFixed(2)}ms</div>
        <div>CLS: {metrics.cls?.toFixed(4)}</div>
        <div>TTFB: {metrics.ttfb?.toFixed(2)}ms</div>
      </div>
    </div>
  );
});

PerformanceMonitoring.displayName = 'PerformanceMonitoring';

export default PerformanceMonitoring;
`;

// Fix PerformanceOptimizations
const performanceOptimizationsContent = `'use client';

import React, { useCallback, useEffect, memo } from 'react';

interface PerformanceOptimizationsProps {
  enableImageOptimization?: boolean;
  enablePreloading?: boolean;
  enableResourceHints?: boolean;
}

const PerformanceOptimizations: React.FC<PerformanceOptimizationsProps> = memo(({
  enableImageOptimization = true,
  enablePreloading = true,
  enableResourceHints = true
}) => {
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
      if (img.getBoundingClientRect().top <= window.innerHeight && !img.hasAttribute('fetchpriority')) {
        img.setAttribute('fetchpriority', 'high');
      }
    });
  }, [enableImageOptimization]);

  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading || typeof window === 'undefined') return;

    const criticalResources = [
      { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { href: '/images/hero-bg.jpg', as: 'image' },
      { href: '/images/logo.png', as: 'image' }
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.crossOrigin) link.crossOrigin = resource.crossOrigin;
      document.head.appendChild(link);
    });
  }, [enablePreloading]);

  const addResourceHints = useCallback(() => {
    if (!enableResourceHints || typeof window === 'undefined') return;

    const hints = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' }
    ];

    hints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossOrigin) link.crossOrigin = hint.crossOrigin;
      document.head.appendChild(link);
    });
  }, [enableResourceHints]);

  useEffect(() => {
    optimizeImages();
    preloadCriticalResources();
    addResourceHints();
  }, [optimizeImages, preloadCriticalResources, addResourceHints]);

  return null;
});

PerformanceOptimizations.displayName = 'PerformanceOptimizations';

export default PerformanceOptimizations;
`;

// Write all files
const files = [
  { path: '/workspace/app/components/AdvancedPerformanceEnhancer.tsx', content: advancedPerformanceEnhancerContent },
  { path: '/workspace/app/components/EnhancedAccessibilityManager.tsx', content: enhancedAccessibilityManagerContent },
  { path: '/workspace/app/components/PerformanceMonitor.tsx', content: performanceMonitorContent },
  { path: '/workspace/app/components/PerformanceMonitoring.tsx', content: performanceMonitoringContent },
  { path: '/workspace/app/components/PerformanceOptimizations.tsx', content: performanceOptimizationsContent }
];

files.forEach(({ path, content }) => {
  fs.writeFileSync(path, content, 'utf8');
  console.log(`Fixed: ${path}`);
});

console.log(`\nFixed ${files.length} files`);