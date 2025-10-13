import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {}
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToFirstByte: number;
  totalBlockingTime: number;
}

interface PerformanceMonitorProps {}
  showInProduction?: boolean;
}

const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ )}
  showInProduction = false )
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {}
    if (typeof window === 'undefined') return;

    const measurePerformance = async () => {}
      try {}
        // Measure Core Web Vitals
        const vitals: Partial<PerformanceMetrics> = {};

        // Get FCP
        onFCP((metric: any) => {}
          vitals.firstContentfulPaint = metric.value;
        });

        // Get LCP
        onLCP((metric: any) => {}
          vitals.largestContentfulPaint = metric.value;
        });

        // Get INP (replaces FID)
        onINP((metric: any) => {}
          vitals.firstInputDelay = metric.value;
        });

        // Get CLS
        onCLS((metric: any) => {}
          vitals.cumulativeLayoutShift = metric.value;
        });

        // Get TTFB
        onTTFB((metric: any) => {}
          vitals.timeToFirstByte = metric.value;
        });

        // Measure additional metrics
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        
        // Calculate Total Blocking Time
        const longTasks = performance.getEntriesByType('longtask');
        const totalBlockingTime = longTasks.reduce((total, task) => {}
          return total + (task.duration - 50); // 50ms is the threshold
        }, 0);

        const finalMetrics: PerformanceMetrics = {}
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          firstContentfulPaint: fcp ? fcp.startTime : vitals.firstContentfulPaint || 0,
          largestContentfulPaint: vitals.largestContentfulPaint || 0,
          firstInputDelay: vitals.firstInputDelay || 0,
          cumulativeLayoutShift: vitals.cumulativeLayoutShift || 0,
          timeToFirstByte: vitals.timeToFirstByte || 0,
          totalBlockingTime: totalBlockingTime
        };

        setMetrics(finalMetrics);
        setIsLoading(false);

        // Send metrics to analytics (if available)
        if (typeof window !== 'undefined' && window.gtag) {}
          window.gtag('event', 'web_vitals', {)}
            event_category: 'Performance',
            event_label: 'Core Web Vitals',)
            value: Math.round(finalMetrics.largestContentfulPaint),
            custom_map: {}
              'metric_1': finalMetrics.firstContentfulPaint,
              'metric_2': finalMetrics.largestContentfulPaint,
              'metric_3': finalMetrics.firstInputDelay,
              'metric_4': finalMetrics.cumulativeLayoutShift,
              'metric_5': finalMetrics.timeToFirstByte
            }
          });
        }
      } catch (error) {
        console.error('Error measuring performance:', error);
        setIsLoading(false);
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {}
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {}
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  // Only show in development or if explicitly enabled
  if ((process.env.NODE_ENV !== 'development' && !showInProduction) || !metrics) {}
    return null;
  }

  const getScoreColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.needsImprovement) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreText = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  return ()
    <div className="fixed bottom-4 right-4 z-50">
      <button)
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
      >
        <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`}></div>
        <span>Performance</span>
      </button>
      
      {isVisible && ()}
        <div className="absolute bottom-14 right-0 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-2xl p-6 w-80 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-900 text-lg">Core Web Vitals</h3>
            <button)
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-4 text-sm">
            {/* LCP */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">LCP (Largest Contentful Paint)</span>
                <span className={`font-mono font-bold ${getScoreColor(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}`}>
                  {metrics.largestContentfulPaint.toFixed(0)}ms
                </span>
              </div>
              <div className="text-xs text-gray-500">
                {getScoreText(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}
              </div>
            </div>

            {/* FID */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">FID (First Input Delay)</span>
                <span className={`font-mono font-bold ${getScoreColor(metrics.firstInputDelay, { good: 100, needsImprovement: 300 })}`}>
                  {metrics.firstInputDelay.toFixed(0)}ms
                </span>
              </div>
              <div className="text-xs text-gray-500">
                {getScoreText(metrics.firstInputDelay, { good: 100, needsImprovement: 300 })}
              </div>
            </div>

            {/* CLS */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">CLS (Cumulative Layout Shift)</span>
                <span className={`font-mono font-bold ${getScoreColor(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 })}`}>
                  {metrics.cumulativeLayoutShift.toFixed(3)}
                </span>
              </div>
              <div className="text-xs text-gray-500">
                {getScoreText(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 })}
              </div>
            </div>

            {/* FCP */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">FCP (First Contentful Paint)</span>
                <span className={`font-mono font-bold ${getScoreColor(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}`}>
                  {metrics.firstContentfulPaint.toFixed(0)}ms
                </span>
              </div>
              <div className="text-xs text-gray-500">
                {getScoreText(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}
              </div>
            </div>

            {/* TTFB */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">TTFB (Time to First Byte)</span>
                <span className={`font-mono font-bold ${getScoreColor(metrics.timeToFirstByte, { good: 800, needsImprovement: 1800 })}`}>
                  {metrics.timeToFirstByte.toFixed(0)}ms
                </span>
              </div>
              <div className="text-xs text-gray-500">
                {getScoreText(metrics.timeToFirstByte, { good: 800, needsImprovement: 1800 })}
              </div>
            </div>

            {/* Additional Metrics */}
            <div className="border-t pt-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Load Time:</span>
                <span className="font-mono">{metrics.loadTime.toFixed(0)}ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Blocking Time:</span>
                <span className="font-mono">{metrics.totalBlockingTime.toFixed(0)}ms</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedPerformanceMonitor;