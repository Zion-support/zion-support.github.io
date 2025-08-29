import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Zap, TrendingUp, Clock, HardDrive, Wifi, Battery } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
}

interface NetworkInfo {
  effectiveType: string;
  downlink: number;
  rtt: number;
  saveData: boolean;
}

export function PerformanceOptimizer() {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo | null>(null);
  const [batteryInfo, setBatteryInfo] = useState<any>(null);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const performanceObserverRef = useRef<PerformanceObserver | null>(null);

  // Performance monitoring
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      try {
        performanceObserverRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
              setMetrics(prev => prev ? { ...prev, fcp: entry.startTime } : null);
            }
          });
        });
        performanceObserverRef.current.observe({ entryTypes: ['paint'] });
      } catch (e) {
        console.warn('PerformanceObserver not supported');
      }

      // Largest Contentful Paint
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => prev ? { ...prev, lcp: lastEntry.startTime } : null);
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP observer not supported');
      }

      // First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'first-input') {
              setMetrics(prev => prev ? { ...prev, fid: entry.processingStart - entry.startTime } : null);
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID observer not supported');
      }

      // Cumulative Layout Shift
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          setMetrics(prev => prev ? { ...prev, cls: clsValue } : null);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS observer not supported');
      }
    }

    // DOM and Window load times
    const handleLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          ttfb: navigation.responseStart - navigation.requestStart,
          domLoad: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          windowLoad: navigation.loadEventEnd - navigation.loadEventStart
        } as PerformanceMetrics));
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      if (performanceObserverRef.current) {
        performanceObserverRef.current.disconnect();
      }
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // Network information
  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      const updateNetworkInfo = () => {
        setNetworkInfo({
          effectiveType: connection.effectiveType || 'unknown',
          downlink: connection.downlink || 0,
          rtt: connection.rtt || 0,
          saveData: connection.saveData || false
        });
      };

      updateNetworkInfo();
      connection.addEventListener('change', updateNetworkInfo);

      return () => connection.removeEventListener('change', updateNetworkInfo);
    }
  }, []);

  // Battery information
  useEffect(() => {
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        setBatteryInfo(battery);
        
        const updateBatteryInfo = () => {
          setBatteryInfo(battery);
        };

        battery.addEventListener('levelchange', updateBatteryInfo);
        battery.addEventListener('chargingchange', updateBatteryInfo);

        return () => {
          battery.removeEventListener('levelchange', updateBatteryInfo);
          battery.removeEventListener('chargingchange', updateBatteryInfo);
        };
      });
    }
  }, []);

  // Intersection Observer for visibility
  useEffect(() => {
    const target = document.body;
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (target) {
      observerRef.current.observe(target);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Performance optimizations
  useEffect(() => {
    const newOptimizations: string[] = [];

    // Check for performance issues and suggest optimizations
    if (metrics) {
      if (metrics.fcp > 1800) {
        newOptimizations.push('First Contentful Paint is slow. Consider optimizing critical resources.');
      }
      if (metrics.lcp > 2500) {
        newOptimizations.push('Largest Contentful Paint is slow. Optimize images and critical resources.');
      }
      if (metrics.fid > 100) {
        newOptimizations.push('First Input Delay is high. Reduce JavaScript execution time.');
      }
      if (metrics.cls > 0.1) {
        newOptimizations.push('Cumulative Layout Shift is high. Fix layout shifts.');
      }
    }

    if (networkInfo) {
      if (networkInfo.effectiveType === 'slow-2g' || networkInfo.effectiveType === '2g') {
        newOptimizations.push('Network is slow. Enable offline support and optimize bundle size.');
      }
      if (networkInfo.saveData) {
        newOptimizations.push('Data saver is enabled. Minimize data usage.');
      }
    }

    if (batteryInfo && batteryInfo.level < 0.2) {
      newOptimizations.push('Battery is low. Reduce background processing and animations.');
    }

    setOptimizations(newOptimizations);
  }, [metrics, networkInfo, batteryInfo]);

  // Lazy loading optimization
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }, []);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'style';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);

  useEffect(() => {
    if (isVisible) {
      optimizeImages();
      preloadCriticalResources();
    }
  }, [isVisible, optimizeImages, preloadCriticalResources]);

  // Service Worker optimization
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        // Enable background sync for offline support
        if ('sync' in registration) {
          console.log('Background sync available');
        }
      });
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-slate-700/50 max-w-sm">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-5 h-5 text-yellow-400" />
          <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
        </div>

        {metrics && (
          <div className="space-y-2 mb-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300">FCP:</span>
              <span className={`font-mono ${metrics.fcp < 1800 ? 'text-green-400' : 'text-red-400'}`}>
                {Math.round(metrics.fcp)}ms
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300">LCP:</span>
              <span className={`font-mono ${metrics.lcp < 2500 ? 'text-green-400' : 'text-red-400'}`}>
                {Math.round(metrics.lcp)}ms
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300">FID:</span>
              <span className={`font-mono ${metrics.fid < 100 ? 'text-green-400' : 'text-red-400'}`}>
                {Math.round(metrics.fid)}ms
              </span>
            </div>
          </div>
        )}

        {networkInfo && (
          <div className="flex items-center gap-2 mb-3 text-xs text-slate-300">
            <Wifi className="w-4 h-4" />
            <span>{networkInfo.effectiveType.toUpperCase()}</span>
            <span>{Math.round(networkInfo.downlink)}Mbps</span>
          </div>
        )}

        {batteryInfo && (
          <div className="flex items-center gap-2 mb-3 text-xs text-slate-300">
            <Battery className="w-4 h-4" />
            <span>{Math.round(batteryInfo.level * 100)}%</span>
            <span>{batteryInfo.charging ? '⚡' : '🔋'}</span>
          </div>
        )}

        {optimizations.length > 0 && (
          <div className="border-t border-slate-600 pt-3">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-medium text-blue-400">Optimizations</span>
            </div>
            <ul className="space-y-1">
              {optimizations.slice(0, 3).map((opt, index) => (
                <li key={index} className="text-xs text-slate-300 flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{opt}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="text-xs text-slate-500 text-center mt-3">
          <Clock className="w-3 h-3 inline mr-1" />
          {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}
