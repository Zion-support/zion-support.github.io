const fs = require('fs');
const path = require('path');

// List of problematic files to fix
const problematicFiles = [
  'app/components/AdvancedPerformanceEnhancer.tsx',
  'app/components/EnhancedAccessibilityManager.tsx',
  'app/components/PerformanceMonitor.tsx',
  'app/components/PerformanceMonitoring.tsx',
  'app/components/PerformanceOptimizations.tsx'
];

problematicFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  
  // Create simple, working versions of these components
  let content = '';
  
  if (file.includes('AdvancedPerformanceEnhancer')) {
    content = `'use client';

import React, { memo, useCallback, useEffect, useState } from 'react';

interface AdvancedPerformanceEnhancerProps {
  enableMonitoring?: boolean;
  enableOptimizations?: boolean;
  children?: React.ReactNode;
}

const AdvancedPerformanceEnhancer: React.FC<AdvancedPerformanceEnhancerProps> = memo(({ 
  enableMonitoring = true, 
  enableOptimizations = true,
  children 
}) => {
  const [metrics, setMetrics] = useState({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  });

  const monitorPerformance = useCallback(() => {
    if (typeof window === 'undefined' || !enableMonitoring) return;

    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          } else if (entry.entryType === 'first-input') {
            const fidEntry = entry as PerformanceEventTiming;
            const fid = fidEntry.processingStart - fidEntry.startTime;
            setMetrics(prev => ({ ...prev, fid }));
          } else if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as LayoutShift;
            if (!clsEntry.hadRecentInput) {
              setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + clsEntry.value }));
            }
          } else if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          } else if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint', 'navigation'] });
    } catch (error) {
      console.warn('Performance monitoring error:', error);
    }
  }, [enableMonitoring]);

  const applyOptimizations = useCallback(() => {
    if (typeof window === 'undefined' || !enableOptimizations) return;

    // Add loading="lazy" to images
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }, [enableOptimizations]);

  useEffect(() => {
    monitorPerformance();
    applyOptimizations();
  }, [monitorPerformance, applyOptimizations]);

  return (
    <div className="advanced-performance-enhancer">
      {children}
    </div>
  );
});

AdvancedPerformanceEnhancer.displayName = 'AdvancedPerformanceEnhancer';

export default AdvancedPerformanceEnhancer;`;
  } else if (file.includes('EnhancedAccessibilityManager')) {
    content = `'use client';

import React, { memo, useCallback, useEffect } from 'react';

interface EnhancedAccessibilityManagerProps {
  enableAutoDetection?: boolean;
  enableKeyboardShortcuts?: boolean;
  children?: React.ReactNode;
}

const EnhancedAccessibilityManager: React.FC<EnhancedAccessibilityManagerProps> = memo(({ 
  enableAutoDetection = true, 
  enableKeyboardShortcuts = true,
  children 
}) => {
  const detectAccessibilityIssues = useCallback(() => {
    if (typeof window === 'undefined' || !enableAutoDetection) return;

    // Check for missing alt attributes
    const images = document.querySelectorAll('img');
    images.forEach((img, imgIndex) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        console.warn(\`Image \${imgIndex + 1} missing alt attribute:\`, img.src);
      }
    });

    // Check for missing form labels
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        console.warn(\`Form input \${index + 1} missing label:\`, input);
      }
    });
  }, [enableAutoDetection]);

  const addKeyboardShortcuts = useCallback(() => {
    if (typeof window === 'undefined' || !enableKeyboardShortcuts) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Add keyboard shortcuts here
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        // Focus search
        const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardShortcuts]);

  useEffect(() => {
    detectAccessibilityIssues();
    const cleanup = addKeyboardShortcuts();
    return cleanup;
  }, [detectAccessibilityIssues, addKeyboardShortcuts]);

  return (
    <div className="enhanced-accessibility-manager">
      {children}
    </div>
  );
});

EnhancedAccessibilityManager.displayName = 'EnhancedAccessibilityManager';

export default EnhancedAccessibilityManager;`;
  } else if (file.includes('PerformanceMonitor')) {
    content = `'use client';

import React, { memo, useCallback, useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
}

const PerformanceMonitor: React.FC = memo(() => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  });

  const monitorPerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          } else if (entry.entryType === 'first-input') {
            const fidEntry = entry as PerformanceEventTiming;
            const fid = fidEntry.processingStart - fidEntry.startTime;
            setMetrics(prev => ({ ...prev, fid }));
          } else if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as LayoutShift;
            if (!clsEntry.hadRecentInput) {
              setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + clsEntry.value }));
            }
          } else if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });
      
      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }
  }, []);

  useEffect(() => {
    const cleanup = monitorPerformance();
    return cleanup;
  }, [monitorPerformance]);

  return null;
});

PerformanceMonitor.displayName = 'PerformanceMonitor';

export default PerformanceMonitor;`;
  } else if (file.includes('PerformanceMonitoring')) {
    content = `'use client';

import React, { memo, useCallback, useEffect } from 'react';

const PerformanceMonitoring: React.FC = memo(() => {
  const monitorWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        const fidEntry = entry as PerformanceEventTiming;
        const fid = fidEntry.processingStart - fidEntry.startTime;
        console.log('FID:', fid);
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'FID',
            value: Math.round(fid),
            event_category: 'Web Vitals'
          });
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        const clsEntry = entry as LayoutShift;
        if (!clsEntry.hadRecentInput) {
          clsValue += clsEntry.value;
          console.log('CLS:', clsValue);
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              name: 'CLS',
              value: Math.round(clsValue * 1000),
              event_category: 'Web Vitals'
            });
          }
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    return () => {
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const cleanup = monitorWebVitals();
    return cleanup;
  }, [monitorWebVitals]);

  return null;
});

PerformanceMonitoring.displayName = 'PerformanceMonitoring';

export default PerformanceMonitoring;`;
  } else if (file.includes('PerformanceOptimizations')) {
    content = `'use client';

import React, { memo, useCallback, useEffect } from 'react';

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
    if (typeof window === 'undefined' || !enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  }, [enableImageOptimization]);

  const preloadCriticalResources = useCallback(() => {
    if (typeof window === 'undefined' || !enablePreloading) return;

    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach((resource) => {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.href = resource;
      preloadLink.as = resource.endsWith('.woff2') ? 'font' : 'style';
      if (resource.endsWith('.woff2')) {
        preloadLink.setAttribute('crossorigin', 'anonymous');
      }
      document.head.appendChild(preloadLink);
    });
  }, [enablePreloading]);

  const addResourceHints = useCallback(() => {
    if (typeof window === 'undefined' || !enableResourceHints) return;

    const domains = ['fonts.googleapis.com', 'fonts.gstatic.com'];
    domains.forEach((domain) => {
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = \`https://\${domain}\`;
      preconnect.setAttribute('crossorigin', 'anonymous');
      document.head.appendChild(preconnect);
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

export default PerformanceOptimizations;`;
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed ' + file);
});

console.log('Problematic components fixed');