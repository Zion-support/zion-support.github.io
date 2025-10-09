import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
  tbt: number | null;
  si: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) =>void;
  enableReporting?: boolean;
  reportInterval?: number
}

const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableReporting = true,
  reportInterval = 10000,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
    tbt: null,
    si: null,
  });

  const [isVisible, setIsVisible] = useState(false);

  // Web Vitals measurement;
      // First Contentful Paint (FCP)
            }
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint (LCP)
                setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
          }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
                  setMetrics(prev => ({ ...prev, cls: clsValue }));
        }
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte (TTFB)
        if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // First Meaningful Paint (FMP) - approximation;
            }
      }
    });
    fmpObserver.observe({ entryTypes: ['paint'] });

    // Total Blocking Time (TBT) - approximation;
          for (const entry of list.getEntries()) {
        if (entry.entryType === 'longtask') {
          totalBlockingTime += entry.duration - 50; // Tasks over 50ms contribute to TBT;
        }
      }
      setMetrics(prev => ({ ...prev, tbt: totalBlockingTime }));
    });
    tbtObserver.observe({ entryTypes: ['longtask'] });

    // Speed Index (SI) - approximation using LCP;
            }
      }
    });
    siObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fmpObserver.disconnect();
      tbtObserver.disconnect();
      siObserver.disconnect();
    }
  }, []);

  // Resource timing analysis;
              resources.forEach((resource: unknown) => {
      resourceMetrics.totalSize += resource.transferSize || 0;
      if (resource.duration > 1000) resourceMetrics.slowResources++;
      if (resource.transferSize === 0) resourceMetrics.cachedResources++;
    });

    return resourceMetrics;
  }, []);

  // Memory usage monitoring;
          return {
      usedJSHeapSize: memory.usedJSHeapSize,
      totalJSHeapSize: memory.totalJSHeapSize,
      jsHeapSizeLimit: memory.jsHeapSizeLimit,
    }
  }, []);

  // Network information;
          return {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData,
    }
  }, []);

  // Performance score calculation;
      // FCP scoring (0-100)
    if (metrics.fcp !== null) {
      if (metrics.fcp > 3000) score -= 30;
      else if (metrics.fcp > 1800) score -= 20;
      else if (metrics.fcp > 1000) score -= 10;
    }

    // LCP scoring (0-100)
    if (metrics.lcp !== null) {
      if (metrics.lcp > 4000) score -= 30;
      else if (metrics.lcp > 2500) score -= 20;
      else if (metrics.lcp > 1500) score -= 10;
    }

    // FID scoring (0-100)
    if (metrics.fid !== null) {
      if (metrics.fid > 300) score -= 20;
      else if (metrics.fid > 100) score -= 10;
    }

    // CLS scoring (0-100)
    if (metrics.cls !== null) {
      if (metrics.cls > 0.25) score -= 20;
      else if (metrics.cls > 0.1) score -= 10;
    }

    return Math.max(0, score);
  }, []);

  // Report metrics;
                          // Send to analytics (replace with your analytics service)
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metrics', {
        event_category: 'performance',
        event_label: 'web_vitals',
        value: performanceScore,
        custom_map: {
          fcp: metrics.fcp,
          lcp: metrics.lcp,
          fid: metrics.fid,
          cls: metrics.cls,
        },
      });
    }

    // Callback for custom handling;
    onMetricsUpdate?.(metrics);

    console.log('Performance Report:', report);
  }, [metrics, enableReporting, calculatePerformanceScore, analyzeResourceTiming, getMemoryUsage, getNetworkInfo, onMetricsUpdate]);

  useEffect(() => {
        // Report metrics periodically;
        // Report metrics on page unload;
        }
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      cleanup?.();
      clearInterval(interval);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    }
  }, [measureWebVitals, reportMetrics, reportInterval]);

  // Toggle visibility for debugging;
  useEffect(() => {
          }
    }
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isVisible) return null
    return (
    <div>
      <div>
        <h3 className="font-bold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      <div>
        <div>
          <span>Performance Score:</span>
          <span className={performanceScore >80 ? 'text-green-400' : performanceScore > 60 ? 'text-yellow-400' : 'text-red-400'}>
            {performanceScore}/100</span>
        </div>
        {metrics.fcp !== null && (
          <div>
            <span>FCP:</span>
            <span>{metrics.fcp.toFixed(0)}ms</span>
          </div>
        )}
        
        {metrics.lcp !== null && (
          <div>
            <span>LCP:</span>
            <span>{metrics.lcp.toFixed(0)}ms</span>
          </div>
        )}
        
        {metrics.fid !== null && (
          <div>
            <span>FID:</span>
            <span>{metrics.fid.toFixed(0)}ms</span>
          </div>
        )}
        
        {metrics.cls !== null && (
          <div>
            <span>CLS:</span>
            <span>{metrics.cls.toFixed(3)}</span>
          </div>
        )}
        
        {metrics.ttfb !== null && (
          <div>
            <span>TTFB:</span>
            <span>{metrics.ttfb.toFixed(0)}ms</span>
          </div>
        )}
      </div>
      <div>Press Ctrl+Shift+P to toggle</div>
    </div>);
}
export default EnhancedPerformanceMonitor