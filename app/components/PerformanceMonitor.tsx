import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {}
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

const PerformanceMonitor: React.FC = () => {}
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {}
    // Only run in development or when explicitly enabled
    if (process.env.NODE_ENV !== 'development' && !localStorage.getItem('debug-performance')) {}
      return;
    }

    const measurePerformance = () => {}
      // Get Core Web Vitals
      const observer = new PerformanceObserver((list) => {}
        for (const entry of list.getEntries()) {}
          if (entry.entryType === 'paint') {}
            if (entry.name === 'first-contentful-paint') {}
              setMetrics(prev => ({ ...prev, fcp: entry.startTime } as PerformanceMetrics));
            }
          }
          
          if (entry.entryType === 'largest-contentful-paint') {}
            setMetrics(prev => ({ ...prev, lcp: entry.startTime } as PerformanceMetrics));
          }
          
          if (entry.entryType === 'first-input') {}
            setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime } as PerformanceMetrics));
          }
          
          if (entry.entryType === 'layout-shift') {}
            if (!(entry as any).hadRecentInput) {}
              setMetrics(prev => ({ )}
                ...prev, )
                cls: (prev?.cls || 0) + (entry as any).value 
              } as PerformanceMetrics));
            }
          }
        }
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Measure TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {}
        setMetrics(prev => ({ )}
          ...prev, 
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart )
        } as PerformanceMetrics));
      }

      // Show performance monitor after 3 seconds
      setTimeout(() => {}
        setIsVisible(true);
      }, 3000);

      return () => {}
        observer.disconnect();
      };
    };

    const cleanup = measurePerformance();
    return cleanup;
  }, []);

  if (!isVisible || !metrics) {}
    return null;
  }

  const getScoreColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreText = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  return ()
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 text-white text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-cyan-400 font-semibold">Performance Monitor</h3>
        <button)
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
            {metrics.fcp.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
            {metrics.lcp.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}>
            {metrics.fid.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
            {metrics.cls.toFixed(3)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}>
            {metrics.ttfb.toFixed(0)}ms
          </span>
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-gray-600">
        <div className="text-xs text-gray-400">
          Overall: {getScoreText(metrics.lcp, { good: 2500, needsImprovement: 4000 })}
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;