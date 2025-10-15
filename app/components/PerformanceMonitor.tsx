import { Activity, Zap, Clock, Database } from 'lucide-react';
import React, {  } from 'react';
interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memoryUsage: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memoryUsage: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when debug flag is set
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('debug-performance') === 'true';
    
    if (!shouldShow) return;

    setIsVisible(true);

    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // First Contentful Paint
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          }
        });
        observer.observe({ entryTypes: ['paint'] });
      }

      // Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Cumulative Layout Shift
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }

      // Time to First Byte
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming;
              setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
            }
          }
        });
        observer.observe({ entryTypes: ['navigation'] });
      }
    };

    // Memory usage (if available)
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) 
        }));
      }
    };

    measureWebVitals();
    measureMemory();

    // Update memory usage periodically
    const memoryInterval = setInterval(measureMemory, 5000);

    return () => {
      clearInterval(memoryInterval);
    };
  }, []);

  if (!isVisible) return null;

  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return <Activity className="w-4 h-4" />;
    if (value <= thresholds.good) return <Zap className="w-4 h-4" />;
    if (value <= thresholds.needsImprovement) return <Clock className="w-4 h-4" />;
    return <Database className="w-4 h-4" />;
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 text-white text-sm z-50 max-w-xs">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-300">FCP:</span>
          <div className={`flex items-center ${getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}`}>
            {getScoreIcon(metrics.fcp, { good: 1800, needsImprovement: 3000 })}
            <span className="ml-1">
              {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : '...'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">LCP:</span>
          <div className={`flex items-center ${getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}`}>
            {getScoreIcon(metrics.lcp, { good: 2500, needsImprovement: 4000 })}
            <span className="ml-1">
              {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : '...'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">CLS:</span>
          <div className={`flex items-center ${getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}`}>
            {getScoreIcon(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}
            <span className="ml-1">
              {metrics.cls ? metrics.cls.toFixed(3) : '...'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Memory:</span>
          <div className="flex items-center text-cyan-400">
            <Database className="w-4 h-4" />
            <span className="ml-1">
              {metrics.memoryUsage ? `${metrics.memoryUsage}MB` : '...'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;