'use client';
<<<<<<< HEAD
import React, {useEffect, useState}from 'react';

interface PerformanceMetrics {lcp?: number;}
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;}const PerformanceMonitor: React.FC = () => {,
  const [metrics, setMetrics] = useState<PerformanceMetrics>({})
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {if (typeof window === 'undefined') return;

    // Only show in development or when performance monitoring is enabled;
    const shouldMonitor = process.env.NODE_ENV === 'development' || 
                         localStorage.getItem('performance-monitoring') === 'true';

    if (!shouldMonitor) return;

    const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {,
      setMetrics(prev => ({ ...prev, ...newMetrics)}));
    }

    // Monitor Core Web Vitals;
    if ('web-vitals' in window) {import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB)}) => {getCLS((metric) => updateMetrics({ cls: metric.value ,)}));
        getFID((metric) => updateMetrics({fid: metric.value ,)}));
        getFCP((metric) => updateMetrics({fcp: metric.value ,)}));
        getLCP((metric) => updateMetrics({lcp: metric.value ,)}));
        getTTFB((metric) => updateMetrics({ttfb: metric.value ,)}));
      })
    }

    // Monitor performance with Performance Observer;
    if ('PerformanceObserver' in window) {const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            updateMetrics({ lcp: entry.startTime ,)})
          }
          if (entry.entryType === 'first-input') {updateMetrics({ fid: entry.processingStart - entry.startTime ,)})
          }
          if (entry.entryType === 'paint') {if (entry.name === 'first-contentful-paint') {
              updateMetrics({ fcp: entry.startTime ,)})
            }
          }
        })
      })

      try {observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'paint'])}})
      } catch (e) {console.warn('Performance Observer not supported:', e);}return () => observer.disconnect();
    }

    // Show performance panel after 3 seconds;
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || Object.keys(metrics).length === 0) {return null;}const getScoreColor = (value: number, thresholds: {good: number; poor: number ,}) => {if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';}const getScoreText = (value: number, thresholds: {good: number; poor: number ,}) => {if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';}return(<div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-xs text-white z-50 max-w-xs">)</div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-cyan-400">Performance</h3>
        <button;
          onClick={() =>setIsVisible(false)</button>}className="text-gray-400 hover: text-white",
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">{metrics.lcp && (</div>
          <div className="flex justify-between">
            <span>LCP: </span>,
            <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 ,)})}>{Math.round(metrics.lcp)</span>}ms({getScoreText(metrics.lcp, { good: 2500, poor: 4000 ,)})})
            </span>
          </div>
        )}
        
        {metrics.fid && (
          <div className="flex justify-between">
            <span>FID: </span>,
            <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 ,)})}>{Math.round(metrics.fid)</span>}ms({getScoreText(metrics.fid, { good: 100, poor: 300 ,)})})
            </span>
          </div>
        )}
        
        {metrics.cls && (
          <div className="flex justify-between">
            <span>CLS: </span>,
            <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 ,)})}>{metrics.cls.toFixed(3)</span>}({getScoreText(metrics.cls, { good: 0.1, poor: 0.25 ,)})})
            </span>
          </div>
        )}
        
        {metrics.fcp && (
          <div className="flex justify-between">
            <span>FCP: </span>,
            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 ,)})}>{Math.round(metrics.fcp)</span>}ms({getScoreText(metrics.fcp, { good: 1800, poor: 3000 ,)})})
            </span>
          </div>
        )}
        
        {metrics.ttfb && (
          <div className="flex justify-between">
            <span>TTFB: </span>,
            <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 ,)})}>{Math.round(metrics.ttfb)</span>}ms({getScoreText(metrics.ttfb, { good: 800, poor: 1800 ,)})})
            </span>
          </div>
        )}
      </div>
    </div>
  );
=======
import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    const sendToAnalytics = (metric: PerformanceMetrics) => {
      // Send to Google Analytics or other analytics service
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
        gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metric:', metric);
      }
    };

    // Measure Core Web Vitals
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);

    // Additional performance monitoring
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            'DNS Lookup': navigation.domainLookupEnd - navigation.domainLookupStart,
            'TCP Connection': navigation.connectEnd - navigation.connectStart,
            'TLS Negotiation': navigation.secureConnectionStart > 0 ? navigation.connectEnd - navigation.secureConnectionStart : 0,
            'Request Response': navigation.responseEnd - navigation.requestStart,
            'DOM Processing': navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            'Total Load Time': navigation.loadEventEnd - navigation.navigationStart,
          };

          Object.entries(metrics).forEach(([name, value]) => {
            if (value > 0) {
              sendToAnalytics({
                name,
                value,
                delta: value,
                id: `perf-${name.toLowerCase().replace(/\s+/g, '-')}`,
                navigationType: 'reload'
              });
            }
          });
        }
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Monitor resource loading performance
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming;
          if (resource.duration > 1000) { // Log resources taking more than 1 second
            console.warn('Slow resource detected:', {
              name: resource.name,
              duration: resource.duration,
              size: resource.transferSize,
              type: resource.initiatorType
            });
          }
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });

    return () => {
      window.removeEventListener('load', measurePerformance);
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
>>>>>>> cursor/analyze-improve-and-deploy-application-e11d
};

export default PerformanceMonitor;