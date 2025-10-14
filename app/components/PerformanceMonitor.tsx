import React, { useState, useEffect } from 'react';,

interface PerformanceMetrics {,

  loadTime: number | null;,
  fcp: number | null;,
  lcp: number | null;,
  fid: number | null;,
  cls: number | null;,
  ttfb: number | null;}

const PerformanceMonitor: React.FC = () => {const [isVisible, setIsVisible] = useState(false);,
  const [metrics, setMetrics] = useState<PerformanceMetrics>({,

    loadTime: null,
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null});,

  useEffect(() => {,

    // Only show in development or when explicitly enabled,
    const shouldShow = process.env.NODE_ENV === 'development' ||, 
                      localStorage.getItem('show-performance-monitor') === 'true';,
    
    if (!shouldShow) return;,

    setIsVisible(true);,

    // Measure load time,
    const measureLoadTime = () => {

      if (performance.timing) {,

        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;,
        setMetrics(prev => ({ ...prev, loadTime }));,
      }
    };,

    // Measure Core Web Vitals,
    const measureWebVitals = () => {

      // First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {,

        const observer = new PerformanceObserver((list) => {,

          for (const entry of list.getEntries()) {,

            if (entry.name === 'first-contentful-paint') {,

              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));,
            }
          }
        });,
        observer.observe({ entryTypes: ['paint'] });,

        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {,

          const entries = list.getEntries();,
          const lastEntry = entries[entries.length - 1];,
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));,
        });,
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });,

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {,

          for (const entry of list.getEntries()) {,

            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));,
          }
        });,
        fidObserver.observe({ entryTypes: ['first-input'] });,

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;,
        const clsObserver = new PerformanceObserver((list) => {,

          for (const entry of list.getEntries()) {,

            if (!(entry as any).hadRecentInput) {,

              clsValue += (entry as any).value;,
              setMetrics(prev => ({ ...prev, cls: clsValue }));,
            }
          }
        });,
        clsObserver.observe({ entryTypes: ['layout-shift'] });,

        // Time to First Byte (TTFB)
        const ttfb = performance.timing.responseStart - performance.timing.navigationStart;,
        setMetrics(prev => ({ ...prev, ttfb }));,

        return () => {,

          observer.disconnect();,
          lcpObserver.disconnect();,
          fidObserver.disconnect();,
          clsObserver.disconnect();};,
      }
    };,

    // Measure after page load,
    if (document.readyState === 'complete') {,

      measureLoadTime();,
      measureWebVitals();} else {,

      window.addEventListener('load', () => {,

        measureLoadTime();,
        measureWebVitals();});,
    }
  }, []);,

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }) => {,

    if (value <= thresholds.good) return 'text-green-600';,
    if (value <= thresholds.poor) return 'text-yellow-600';,
    return 'text-red-600';};,

  const getCLSColor = (value: number) => {,

    if (value <= 0.1) return 'text-green-600';,
    if (value <= 0.25) return 'text-yellow-600';,
    return 'text-red-600';};,

  if (!isVisible) return null;,

      {isVisible && (

        <div className="absolute bottom-12 left-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-80"></=>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Performance Metrics</h3>
          <div className="space-y-3 text-sm"></div>
    </div>
            <div className="flex justify-between items-center"></div>
    </div>
              <span className="text-gray-600">Load Time: </span>
              <span className={`font-mono ${metrics.loadTime ? getMetricColor(metrics.loadTime, { good: 1000, poor: 3000 }) : 'text-gray-400'}`}></span>
                {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
    </div>
            <div className="flex justify-between items-center"></div>
    </div>
              <span className="text-gray-600">FCP: </span>
              </span>
            </div>
            
    </div>
            <div className="flex justify-between items-center"></div>
    </div>
              <span className="text-gray-600">LCP: </span>
              </span>
            </div>
            
    </div>
            <div className="flex justify-between items-center"></div>
    </div>
              <span className="text-gray-600">FID: </span>
              </span>
            </div>
            
    </div>
            <div className="flex justify-between items-center"></div>
    </div>
              <span className="text-gray-600">CLS: </span>
              </span>
            </div>
            
    </div>
            <div className="flex justify-between items-center"></div>
    </div>
              <span className="text-gray-600">TTFB: </span>);,
};,

export default PerformanceMonitor;,