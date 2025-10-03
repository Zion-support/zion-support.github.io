import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {/* content */}
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;
}

export const AdvancedPerformanceMonitor: React.FC = () => {/* content */}
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {/* content */}
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return;

    const observer = new PerformanceObserver((list) => {/* content */}
      const entries = list.getEntries();
      entries.forEach((entry) => {/* content */}
        if (entry.entryType === 'largest-contentful-paint') {/* content */}
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {/* content */}
          setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {/* content */}
          setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }));
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyPress = (e: KeyboardEvent) => {/* content */}
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {/* content */}
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {/* content */}
      observer.disconnect();
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  if (!isVisible) return null;

  return (
  <div></div>
    <div style={{/* content */}
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999,
      fontFamily: 'monospace',
    }}></div>
      <h4>Performance Metrics</h4>
      <div>LCP: {metrics.lcp ? metrics.lcp.toFixed(2) + 'ms' : 'N/A'}</div>
      <div>FID: {metrics.fid ? metrics.fid.toFixed(2) + 'ms' : 'N/A'}</div>
      <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
      <div style={{ marginTop: '10px', fontSize: '10px' }}></div>
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;