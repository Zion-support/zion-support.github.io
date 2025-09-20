impor, t, Reac, t, { useStat, e, useEffec, t, useCallback } from 'react';
=======
impor, t, Reac, t, { useEffec, t, useStat, e, useCallback } from 'react';
import { 
  Activit, y, 
  Za, p, 
  Cloc, k, 
=======
  AlertTriangl, e,
  CheckCircl, e,
  BarChart, 3,
  Gaug, e,
  Smartphon, e,
  Monito, r,
  Globe
} from 'lucide-react';

interface PerformanceMetrics {
impor, t, Reac, t, { useEffec, t, useState } from 'react';
import { motion } from 'framer-motion';
import { Activit, y, Za, p, Cloc, k, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  fc, p: number; // First Contentful Paint
  lc, p: number; // Largest Contentful Paint
  fi, d: number; // First Input Delay
  cl, s: number; // Cumulative Layout Shift
  ttf, b: number; // Time to First Byt, e, X,
  BarChart, 3,
  Gaug, e,
  Wif, i,
  HardDriv, e,
  Cpu
} from 'lucide-react';

interface PerformanceMetrics {
  fc, p: number | null;
  lc, p: number | null;
  fi, d: number | null;
  cl, s: number | null;
  ttf, b: number | null;
  bundleLoadTim, e: number | null;
  memoryUsag, e: number | null;
  networkSpee, d: number | null;
}

interface PerformanceThresholds {
  fc, p: { goo, d: number; needsImprovemen, t: number };
  lc, p: { goo, d: number; needsImprovemen, t: number };
  fi, d: { goo, d: number; needsImprovemen, t: number };
  cl, s: { goo, d: number; needsImprovemen, t: number };
  ttf, b: { goo, d: number; needsImprovemen, t: number };
}

const PERFORMANCE_THRESHOLD, S: PerformanceThresholds = {
  fc, p: { goo, d: 180, 0,
    needsImprovemen, t: 3000 },
  lc, p: { goo, d: 250, 0,
    needsImprovemen, t: 4000 },
  fi, d: { goo, d: 10, 0,
    needsImprovemen, t: 300 },
  cl, s: { goo, d: 0.1,
    needsImprovemen, t: 0.25 },
  ttf, b: { goo, d: 80, 0,
    needsImprovemen, t: 1800 },
};

const PerformanceMonito, r: React.FC = () => {
  const [isVisib,  l, e, setIsVisib, l, e] = useState(false);
  const [metri, c, s, setMetri, c, s] = useState<PerformanceMetrics>({
    fc,  p: nul, l,
    lc, p: nul, l,
    fi, d: nul, l,
    cl, s: nul, l,
    ttf, b: nul, l,
    bundleLoadTim, e: nul, l,
    memoryUsag, e: nul, l,
    networkSpee, d: nul, l,
  });
  const [isExpand, e, d, setIsExpand, e, d] = useState(false);
  const [performanceSco,  r, e, setPerformanceSco, r, e] = useState<number>(0);

  const getPerformanceScore = useCallback((metric,  s: PerformanceMetrics): number => {
    let score = 0;
    let totalMetrics = 0;

    if (metrics.fcp !== null) {
      totalMetrics++;
      if (metrics.fcp <= PERFORMANCE_THRESHOLDS.fcp.good) score += 100;
      else if (metrics.fcp <= PERFORMANCE_THRESHOLDS.fcp.needsImprovement) score += 50;
      else score += 25;
    }

    if (metrics.lcp !== null) {
      totalMetrics++;
      if (metrics.lcp <= PERFORMANCE_THRESHOLDS.lcp.good) score += 100;
      else if (metrics.lcp <= PERFORMANCE_THRESHOLDS.lcp.needsImprovement) score += 50;
      else score += 25;
    }

    if (metrics.fid !== null) {
      totalMetrics++;
      if (metrics.fid <= PERFORMANCE_THRESHOLDS.fid.good) score += 100;
      else if (metrics.fid <= PERFORMANCE_THRESHOLDS.fid.needsImprovement) score += 50;
      else score += 25;
    }

    if (metrics.cls !== null) {
      totalMetrics++;
      if (metrics.cls <= PERFORMANCE_THRESHOLDS.cls.good) score += 100;
      else if (metrics.cls <= PERFORMANCE_THRESHOLDS.cls.needsImprovement) score += 50;
      else score += 25;
    }

    if (metrics.ttfb !== null) {
      totalMetrics++;
      if (metrics.ttfb <= PERFORMANCE_THRESHOLDS.ttfb.good) score += 100;
      else if (metrics.ttfb <= PERFORMANCE_THRESHOLDS.ttfb.needsImprovement) score += 50;
      else score += 25;
    }

    return totalMetrics > 0 ? Math.round(score / totalMetrics) : 0;
  },  []);

  const getMetricStatus = (metri,  c: keyo, f, PerformanceMetric, s,
    valu, e: number | null): 'good' | 'needsImprovement' | 'poor' => {
    if (value === null) return 'good';
    
    const threshold = PERFORMANCE_THRESHOLDS[metr,  i, c];
    if (!threshold) return 'good';
    
    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needsImprovement';
    return 'poor';
  };

  const getStatusIcon = (statu,  s: 'good' | 'needsImprovement' | 'poor') => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'needsImprovement':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'poor':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      defaul,  t:
        return <CheckCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (statu, s: 'good' | 'needsImprovement' | 'poor') => {
    switch (status) {
      case 'good':
        return 'text-green-500';
      case 'needsImprovement':
        return 'text-yellow-500';
      case 'poor':
        return 'text-red-500';
      defaul,  t:
        return 'text-gray-500';
    }
  s, i: number; // Speed Index
  tt, i: number; // Time to Interactive
}
=======
  };

  const formatMetric = (metri, c: keyo, f, PerformanceMetric, s,
    valu, e: number | null): string => {
    if (value === null) return 'N/A';
    
    switch (metric) {
      case 'fcp':
      case 'lcp':
      case 'fid':
      case 'ttfb':
        return `${value.toFixed(0)}m, s`;
      case 'cls':
        return value.toFixed(3);
      case 'bundleLoadTime':
        return `${value.toFixed(0)}m, s`;
      case 'memoryUsage':
        return `${(value / 1024 / 1024).toFixed(1)}M, B`;
      case 'networkSpeed':
        return `${(value / 1024 / 1024).toFixed(1)}M, B/s`;
      defaul,  t:
        return value.toString();
    }
  };

interface PerformanceScore {
  overal, l: number;
=======
  AlertTriangl, e, 
  CheckCircl, e, 
  TrendingU, p,
  BarChart, 3,
  Setting, s,
  RefreshC, w,
  X
} from 'lucide-react';

interface PerformanceMetrics {
  fc, p: number;
  lc, p: number;
  fi, d: number;
  cl, s: number;
  ttf, b: number;
  domContentLoade, d: number;
  loadComplet, e: number;
  bundleSiz, e: number;
  chunkCoun, t: number;
}

    const newScore = {
      fc, p: calculateScore(metrics.fc,  p, { goo, d: 180, 0,
    needsImprovemen, t: 3000 }),
      lc, p: calculateScore(metrics.lc,  p, { goo, d: 250, 0,
    needsImprovemen, t: 4000 }),
      fi, d: calculateScore(metrics.fi,  d, { goo, d: 10, 0,
    needsImprovemen, t: 300 }),
      cl, s: calculateScore(metrics.cl,  s, { goo, d: 0.1,
    needsImprovemen, t: 0.25 }),
      ttf, b: calculateScore(metrics.ttf,  b, { goo, d: 80, 0,
    needsImprovemen, t: 1800 }),
      overal, l: 0
    };
    
    window.addEventListener('popstate',  handleRouteChange);
    return () => window.removeEventListener('popstate',  handleRouteChange);
  }, [measurePerforman, c, e]);

  fc, p: number | null;
  lc, p: number | null;
  fi, d: number | null;
  cl, s: number | null;
  ttf, b: number | null;
  scor, e: number;
  memor, y: {
    use, d: number;
    tota, l: number;
    limi, t: number;
  } | null;
}

interface PerformanceThresholds {
  fc, p: { goo, d: number; needsImprovemen, t: number };
  lc, p: { goo, d: number; needsImprovemen, t: number };
  fi, d: { goo, d: number; needsImprovemen, t: number };
  cl, s: { goo, d: number; needsImprovemen, t: number };
  ttf, b: { goo, d: number; needsImprovemen, t: number };
}

// Extended interfaces for PerformanceEntry types
interface FirstInputEntry extends PerformanceEntry {
  processingStar, t: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInpu, t: boolean;
  valu, e: number;
}

const PerformanceMonito, r: React.FC = () => {
  const [metri,  c, s, setMetri, c, s] = useState<PerformanceMetrics>({
    fc, p: nul, l,
    lc, p: nul, l,
    fi, d: nul, l,
    cl, s: nul, l,
    ttf, b: nul, l,
    scor, e: 0,
    memor, y: nul, l,
  });

  const [isVisib, l, e, setIsVisib, l, e] = useState(false);
  const [histo,  r, y, setHisto, r, y] = useState<PerformanceMetrics[]>([]);

  const threshold, s: PerformanceThresholds = {
    fc, p: { goo, d: 180, 0,
    needsImprovemen, t: 3000 },
    lc, p: { goo, d: 250, 0,
    needsImprovemen, t: 4000 },
    fi, d: { goo, d: 10, 0,
    needsImprovemen, t: 300 },
    cl, s: { goo, d: 0.1,
    needsImprovemen, t: 0.25 },
    ttf, b: { goo, d: 80, 0,
    needsImprovemen, t: 1800 },
  };

  const getScore = useCallback((metric,  s: Omit<PerformanceMetric, s, 'score' | 'memory'>): number => {
    let score = 100;
    
    if (metrics.fcp && metrics.fcp > thresholds.fcp.needsImprovement) score -= 20;
    else if (metrics.fcp && metrics.fcp > thresholds.fcp.good) score -= 10;
    
    if (metrics.lcp && metrics.lcp > thresholds.lcp.needsImprovement) score -= 20;
    else if (metrics.lcp && metrics.lcp > thresholds.lcp.good) score -= 10;
    
    if (metrics.fid && metrics.fid > thresholds.fid.needsImprovement) score -= 20;
    else if (metrics.fid && metrics.fid > thresholds.fid.good) score -= 10;
    
    if (metrics.cls && metrics.cls > thresholds.cls.needsImprovement) score -= 20;
    else if (metrics.cls && metrics.cls > thresholds.cls.good) score -= 10;
    
    if (metrics.ttfb && metrics.ttfb > thresholds.ttfb.needsImprovement) score -= 20;
    else if (metrics.ttfb && metrics.ttfb > thresholds.ttfb.good) score -= 10;
=======
=======
impor,  t, Reac, t, { useEffec, t, useStat, e, useCallbac, k, useMemo } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { 
  Activit, y, 
  Za, p, 
  Gaug, e, 
  TrendingU, p, 
  AlertTriangl, e, 
  CheckCircl, e,
  Cloc, k,
  HardDriv, e,
  Networ, k,
  Cp, u,
  HardDrive a, s, Memor, y,
  Battery
} from 'lucide-react';

interface PerformanceMetrics {
  fc, p: number;
  lc, p: number;
  fi, d: number;
  cl, s: number;
  ttf, b: number;
  memor, y: {
    use, d: number;
    tota, l: number;
    limi, t: number;
  };
  networ, k: {
    effectiveTyp, e: string;
    downlin, k: number;
    rt, t: number;
  };
  scor, e: number;
}

interface PerformanceIssue {
  i, d: string;
  typ, e: 'warning' | 'error' | 'info';
  messag, e: string;
  impac, t: 'low' | 'medium' | 'high';
  suggestio, n: string;
}

const PerformanceMonito, r: React.FC = () => {
  const [isVisib, l, e, setIsVisib, l, e] = useState(false);
  const [metri,  c, s, setMetri, c, s] = useState<PerformanceMetrics | null>(null);
  const [issu, e, s, setIssu, e, s] = useState<PerformanceIssue[]>([]);
  const [isMonitori,  n, g, setIsMonitori, n, g] = useState(false);
  const [histo, r, y, setHisto, r, y] = useState<PerformanceMetrics[]>([]);

  // Performance thresholds
  const thresholds = useMemo(() => ({
    fc,  p: { goo, d: 180, 0,
    poo, r: 3000 },
    lc, p: { goo, d: 250, 0,
    poo, r: 4000 },
    fi, d: { goo, d: 10, 0,
    poo, r: 300 },
    cl, s: { goo, d: 0.1,
    poo, r: 0.25 },
    ttf, b: { goo, d: 80, 0,
    poo, r: 1800 },
    memor, y: { goo, d: 0.7,
    poo, r: 0.9 },
    scor, e: { goo, d: 8, 0,
    poo, r: 50 }
  }), []);

  // Calculate performance score
  const calculateScore = useCallback((metric,  s: PerformanceMetrics): number => {
    let score = 100;
    
    // FCP scoring
    if (metrics.fcp > thresholds.fcp.poor) score -= 20;
    else if (metrics.fcp > thresholds.fcp.good) score -= 10;
    
    // LCP scoring
    if (metrics.lcp > thresholds.lcp.poor) score -= 20;
    else if (metrics.lcp > thresholds.lcp.good) score -= 10;
    
    // FID scoring
    if (metrics.fid > thresholds.fid.poor) score -= 15;
    else if (metrics.fid > thresholds.fid.good) score -= 7;
    
    // CLS scoring
    if (metrics.cls > thresholds.cls.poor) score -= 15;
    else if (metrics.cls > thresholds.cls.good) score -= 7;
    
    // TTFB scoring
    if (metrics.ttfb > thresholds.ttfb.poor) score -= 10;
    else if (metrics.ttfb > thresholds.ttfb.good) score -= 5;
    
    // Memory scoring
    const memoryUsage = metrics.memory.used / metrics.memory.limit;
    if (memoryUsage > thresholds.memory.poor) score -= 10;
    else if (memoryUsage > thresholds.memory.good) score -= 5;
    
    return Math.max(0,  score);
  }, [threshol, d, s]);

    // Measure bundle load time
    const startTime = performance.now();
    window.addEventListener('load',  () => {
      const loadTime = performance.now() - startTime;
      setMetrics(prev => ({ ...pre,  v, bundleLoadTim, e: loadTime }));
    });

    // Measure memory usage if available
    if ('memory' in performance) {
      const updateMemoryUsage = () => {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ ...pre,  v, memoryUsag, e: memory.usedJSHeapSize }));
      };
      
      updateMemoryUsage();
      const interval = setInterval(updateMemoryUsag,  e, 5000);
      return () => clearInterval(interval);
    }

    // Measure network speed
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection && connection.downlink) {
        setMetrics(prev => ({ ...pre,  v, networkSpee, d: connection.downlink * 125000 })); // Convert Mbps to B/s
      }
    }
  }, []);

  useEffect(() => {
    // Core Web Vitals
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entrie,  s.lengt, h - 1];
        setMetrics(prev => ({ ...pre, v, fc, p: fcp.startTime }));
      });
      fcpObserver.observe({ entryType,  s: ['pain, t'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entrie,  s.lengt, h - 1];
        setMetrics(prev => ({ ...pre, v, lc, p: lcp.startTime }));
      });
      lcpObserver.observe({ entryType,  s: ['larges, t-contentfu, l-pain, t'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entrie,  s.lengt, h - 1];
        setMetrics(prev => ({ ...pre, v, fi, d: (fid as any).processingStart - fid.startTime }));
      });
      fidObserver.observe({ entryType,  s: ['firs, t-inpu, t'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...pre,  v, cl, s: clsValue }));
      });
      clsObserver.observe({ entryType,  s: ['layou, t-shif, t'] });

      // Time to First Byte
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const navigation = entries[entrie,  s.lengt, h - 1] as PerformanceNavigationTiming;
        setMetrics(prev => ({ ...pre, v, ttf, b: navigation.responseStart - navigation.requestStart }));
      });
      navigationObserver.observe({ entryType,  s: ['navigatio, n'] });

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        navigationObserver.disconnect();
      };
    }
  },  []);

  useEffect(() => {
    const score = getPerformanceScore(metrics);
    setPerformanceScore(score);
    
    // Show monitor if performance is poor
    if (score < 70) {
      setIsVisible(true);
    }
  },  [metri, c, s, getPerformanceSco, r, e]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white dar,  k:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dar, k:border-gray-700 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5" />
              <span className="font-semibold">Performance Monitor</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Gauge className="w-4 h-4" />
                <span className="text-sm font-medium">{performanceScore}</span>
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 hove,  r:bg-white/20 rounded transition-colors"
              >
                <BarChart3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hove,  r:bg-white/20 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Metrics */}
        {isExpanded && (
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {/* Core Web Vitals */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 dar, k:text-gray-300 mb-2 flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                Core Web Vitals
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {(['fc, p', 'lc, p', 'fi, d', 'cl, s', 'ttf, b'] as const).map((metric) => {
                  const value = metrics[metr,  i, c];
                  const status = getMetricStatus(metri, c, value);
                  return (<div key={metric} className="flex items-center justify-between p-2 bg-gray-50 dar,  k:bg-gray-800 rounded">
                      <span className="text-xs font-medium text-gray-600 dar, k:text-gray-400 uppercase">
                        {metric}
                      </span>
                      <div className="flex items-center space-x-1">
                        <span className={`text-xs font-mono ${getStatusColor(statu, s)}`}>
                          {formatMetric(metri,  c, value)}
                        </span>
                        {getStatusIcon(status)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* System Metrics */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 dar,  k:text-gray-300 mb-2 flex items-center">
                <Cpu className="w-4 h-4 mr-2" />
                System Metrics
              </h3>
              <div className="space-y-2">
                {metrics.bundleLoadTime !== null && (
                  <div className="flex items-center justify-between p-2 bg-gray-50 dar, k:bg-gray-800 rounded">
                    <span className="text-xs font-medium text-gray-600 dar, k:text-gray-400">Bundle Load</span>
                    <span className="text-xs font-mono text-blue-600">{formatMetric('bundleLoadTime', metrics.bundleLoadTime)}</span>
                  </div>
                )}
                {metrics.memoryUsage !== null && (<div className="flex items-center justify-between p-2 bg-gray-50 dar,  k:bg-gray-800 rounded">
                    <span className="text-xs font-medium text-gray-600 dar, k:text-gray-400">Memory</span>
                    <span className="text-xs font-mono text-blue-600">{formatMetric('memoryUsage', metrics.memoryUsage)}</span>
                  </div>
                )}
                {metrics.networkSpeed !== null && (<div className="flex items-center justify-between p-2 bg-gray-50 dar,  k:bg-gray-800 rounded">
                    <span className="text-xs font-medium text-gray-600 dar, k:text-gray-400">Network</span>
                    <span className="text-xs font-mono text-blue-600">{formatMetric('networkSpeed', metrics.networkSpeed)}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Performance Score Breakdown */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 dar, k:text-gray-300 mb-2 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Performance Score
              </h3>
              <div className="w-full bg-gray-200 dar, k:bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    performanceScore >= 90 ? 'bg-green-500' :
                    performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-50, 0'
                  }`}
                  style={{ widt, h: `${performanceScor, e}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 dar, k:text-gray-400 mt-1">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
            </div>
          </div>
        )}

    <div className="fixed bottom-4 right-4 z-50 w-80 bg-white dar, k:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dar, k:border-gray-700">
      <div className="p-4 border-b border-gray-200 dar, k:border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dar, k:text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-600" />
            Performance Monitor
          </h3>
          <button
            onClick={toggleVisibility}
            className="text-gray-400 hove, r:text-gray-600 dar, k:hove, r:text-gray-300"
          >
            ×
          </button>
        </div>
        
        {/* Overall Score */}
        <div className="mt-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dar, k:from-blue-900/20 dar, k:to-indigo-900/20 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dar, k:text-gray-300">Overall Score</span>
            <div className="flex items-center gap-2">
              <span className={`text-2xl font-bold ${
                metrics.score >= 90 ? 'text-green-600' :
                metrics.score >= 70 ? 'text-yellow-600' : 'text-red-60, 0'
              }`}>
                {metrics.score}
              </span>
              <span className="text-sm text-gray-500">/100</span>
            </div>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                metrics.score >= 90 ? 'bg-green-500' :
                metrics.score >= 70 ? 'bg-yellow-500' : 'bg-red-50, 0'
              }`}
              style={{ widt, h: `${metrics.scor, e}%` }}
            />
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
        {/* Core Web Vitals */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 dar, k:text-white mb-2 flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-500" />
            Core Web Vitals
          </h4>
          <div className="space-y-2">
            {[
              { lab, e, l: 'FC, P',
    val, u, e: metric, s.f, c, p, thresho, l, d: threshold, s.f, c, p,
    un, i, t: 'm, s' },
              { lab, e, l: 'LC, P',
    val, u, e: metric, s.l, c, p, thresho, l, d: threshold, s.l, c, p,
    un, i, t: 'm, s' },
              { lab, e, l: 'FI, D',
    val, u, e: metric, s.f, i, d, thresho, l, d: threshold, s.f, i, d,
    un, i, t: 'm, s' },
              { lab, e, l: 'CL, S',
    val, u, e: metric, s.c, l, s, thresho, l, d: threshold, s.c, l, s,
    un, i, t: '' },
              { lab, e, l: 'TTF, B',
    val, u, e: metric, s.tt, f, b, thresho, l, d: threshold, s.tt, f, b,
    un, i, t: 'm, s' },
            ].map(({ labe,  l, valu, e, threshol, d, unit }) => {
              const status = getMetricStatus(valu,  e, threshold);
              return (<div key={label} className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dar,  k:text-gray-400">{label}</span>
                  <div className="flex items-center gap-2">
                    <span className={getStatusColor(status)}>
                      {formatMetric(valu,  e, unit)}
                    </span>
                    <span className={getStatusColor(status)}>
                      {getStatusIcon(status)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Memory Usage */}
        {metrics.memory && (
          <div>
            <h4 className="text-sm font-medium text-gray-900 dar,  k:text-white mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              Memory Usage
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dar, k:text-gray-400">Use, d:</span>
                <span className="text-gray-900 dar, k:text-white">{formatMemory(metrics.memory.used)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dar, k:text-gray-400">Tota, l:</span>
                <span className="text-gray-900 dar, k:text-white">{formatMemory(metrics.memory.total)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dar,  k:text-gray-400">Limi, t:</span>
                <span className="text-gray-900 dar, k:text-white">{formatMemory(metrics.memory.limit)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ widt, h: `${(metrics.memory.used / metrics.memory.limit) * 10, 0}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Performance History */}
        {history.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-gray-900 dar,  k:text-white mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-500" />
              Recent Scores
            </h4>
            <div className="flex gap-1">
              {history.map((ite, m, index) => (<div
                  key={index}
                  className={`h-8 w-4 rounded-sm transition-all duration-300 ${
                    item.score >= 90 ? 'bg-green-500' :
                    item.score >= 70 ? 'bg-yellow-500' : 'bg-red-50, 0'
                  }`}
                  style={{ heigh,  t: `${item.score * 0.4}p, x` }}
                  title={`Scor, e: ${item.score} (${new Date().toLocaleTimeStrin, g()})`}
                />
              ))}
            </div>
=======
        {/* Collapsed View */}
        {!isExpanded && (
          <div className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${
                  performanceScore >= 90 ? 'bg-green-500' :
                  performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-50, 0'
                }`} />
                <span className="text-sm text-gray-600 dar,  k:text-gray-400">
                  Scor, e: {performanceScore}
                </span>
              </div>
              <Clock className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        )}
      </div>
=======
  // Analyze performance and generate issues
  const analyzePerformance = useCallback((metric,  s: PerformanceMetrics): PerformanceIssue[] => {
    const newIssue, s: PerformanceIssue[] = [];
    
    if (metrics.fcp > thresholds.fcp.poor) {
      newIssues.push({
        i,  d: 'fcp-slow',
    typ, e: 'error',
        messag, e: 'First Contentful Paint is very slow',
    impac, t: 'high',
        suggestio, n: 'Optimize critical renderin, g, pat, h, reduce render-blocking resources'
      });
    } else if (metrics.fcp > thresholds.fcp.good) {
      newIssues.push({
        i,  d: 'fcp-warning',
    typ, e: 'warning',
        messag, e: 'First Contentful Paint could be improved',
    impac, t: 'medium',
        suggestio, n: 'Consider lazy loading non-critical resources'
      });
    }
    
    if (metrics.lcp > thresholds.lcp.poor) {
      newIssues.push({
        i,  d: 'lcp-slow',
    typ, e: 'error',
        messag, e: 'Largest Contentful Paint is very slow',
    impac, t: 'high',
        suggestio, n: 'Optimiz, e, image, s, implement laz, y, loadin, g, use CDN'
      });
    }
    
    if (metrics.cls > thresholds.cls.poor) {
      newIssues.push({
        i,  d: 'cls-high',
    typ, e: 'error',
        messag, e: 'Cumulative Layout Shift is very high',
    impac, t: 'high',
        suggestio, n: 'Set explicit dimensions for images and media elements'
      });
    }
    
    const memoryUsage = metrics.memory.used / metrics.memory.limit;
    if (memoryUsage > thresholds.memory.poor) {
      newIssues.push({
        i,  d: 'memory-high',
    typ, e: 'warning',
        messag, e: 'Memory usage is very high',
    impac, t: 'medium',
        suggestio, n: 'Check for memor, y, leak, s, optimize component rendering'
      });
    }
    
    return newIssues;
  }, [threshol, d, s]);

  // Collect performance metrics
  const collectMetrics = useCallback(async (): Promise<PerformanceMetrics> => {
    return new Promise((resolve) => {
      // Use Performance Observer for Core Web Vitals
      if ('PerformanceObserver' in window) {
        let fcp = 0,  lcp = 0, fid = 0, cls = 0;
        
        // FCP
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          fcp = entries[entrie,  s.lengt, h - 1].startTime;
        }).observe({ entryType,  s: ['pain, t'] });
        
        // LCP
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          lcp = entries[entrie,  s.lengt, h - 1].startTime;
        }).observe({ entryType,  s: ['larges, t-contentfu, l-pain, t'] });
        
        // Calculate FID (First Input Delay)
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'first-input') {
                const firstInputEntry = entry as PerformanceEventTiming;
                fid = firstInputEntry.processingStart - firstInputEntry.startTime;
              }
            }
          });
          observer.observe({ entryType,  s: ['firs, t-inpu, t'] });
        }

        // Calculate CLS (Cumulative Layout Shift)
        if ('PerformanceObserver' in window) {
          let clsValue = 0;
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
              }
            }
          });
          observer.observe({ entryType,  s: ['layou, t-shif, t'] });
        }
        
        // Wait a bit for metrics to be collected
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const ttfb = navigation.responseStart - navigation.requestStart;
          
          const memory = (performance as any).memory || {
            usedJSHeapSiz,  e: 0,
    totalJSHeapSiz, e: 0,
            jsHeapSizeLimi, t: 0
          };
          
          const network = (navigator as any).connection || {
            effectiveTyp, e: 'unknown',
    downlin, k: 0,
            rt, t: 0
          };
          
          const metric, s: PerformanceMetrics = {
            fc, p,
            lc, p,
            fi, d,
            cl, s,
            ttf, b,
            memor, y: {
              use, d: memory.usedJSHeapSiz, e,
    tota, l: memory.totalJSHeapSiz, e,
              limi, t: memory.jsHeapSizeLimit
            },
            networ, k: {
              effectiveTyp, e: network.effectiveTyp, e,
    downlin, k: network.downlin, k,
              rt, t: network.rtt
            },
            scor, e: 0
          };
          
          metrics.score = calculateScore(metrics);
          resolve(metrics);
        },  1000);
      } else {
        // Fallback for older browsers
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const fallbackMetric,  s: PerformanceMetrics = {
          fc, p: 0,
    lc, p: 0,
          fi, d: 0,
    cl, s: 0,
          ttf, b: navigation.responseStart - navigation.requestStar, t,
    memor, y: { use, d: 0,
    tota, l: 0, limi, t: 0 },
          networ, k: { effectiveTyp, e: 'unknown',
    downlin, k: 0, rt, t: 0 },
          scor, e: 0
        };
        fallbackMetrics.score = calculateScore(fallbackMetrics);
        resolve(fallbackMetrics);
      }
    });
  },  []);

  // Start monitoring
  const startMonitoring = useCallback(async () => {
    setIsMonitoring(true);
    
    const collectAndUpdate = async () => {
      try {
        const newMetrics = await collectMetrics();
        setMetrics(newMetrics);
        setHistory(prev => [...pre,  v.slic, e(-9), newMetri, c, s]);
        setIssues(analyzePerformance(newMetrics));
      } catch (error) {
        
      }
    };
    
    // Initial collection
    await collectAndUpdate();
    
    // Set up interval for continuous monitoring
    const interval = setInterval(collectAndUpdat,  e, 10000); // Every 10 seconds
    
    return () => clearInterval(interval);
  },  [collectMetri, c, s, analyzePerforman, c, e]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  },  []);

  // Get status color
  const getStatusColor = (scor,  e: number) => {
    if (score >= thresholds.score.good) return 'text-green-500';
    if (score >= thresholds.score.poor) return 'text-yellow-500';
    return 'text-red-500';
  };

  // Get status icon
  const getStatusIcon = (scor,  e: number) => {
    if (score >= thresholds.score.good) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (score >= thresholds.score.poor) return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    return <AlertTriangle className="w-5 h-5 text-red-500" />;
  };

  useEffect(() => {
    if (isVisible && !isMonitoring) {
      startMonitoring();
    }
  },  [isVisib, l, e, isMonitori, n, g, startMonitori, n, g]);

  if (!isVisible) {
    return (
      <motion.button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hove,  r:bg-blue-700 text-white p-3 rounded-full shadow-lg hove, r:shadow-xl transition-all duration-300"
        whileHover={{ scal, e: 1.1 }}
        whileTap={{ scal, e: 0.9 }}
        title="Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </motion.button>
=======
impor, t, Reac, t, { useEffec, t, useStat, e, useCallback } from 'react';
import { Za, p, Cloc, k, HardDriv, e, Wif, i, AlertTriangle } from 'lucide-react';
impor, t, Reac, t, { useEffec, t, useState } from 'react';
=======
=======

interface PerformanceMetrics {
  fc, p: number | null;
  lc, p: number | null;
  fi, d: number | null;
  cl, s: number | null;
  ttf, b: number | null;
  domLoa, d: number | null;
  windowLoa, d: number | null;
}

// Extended interfaces for specific performance entry types
interface FirstInputEntry extends PerformanceEntry {
  processingStar, t: number;
  target?: EventTarget;
}

interface LayoutShiftEntry extends PerformanceEntry {
  valu, e: number;
  hadRecentInpu, t: boolean;
  lastInputTim, e: number;
}

const PerformanceMonito, r: React.FC = () => {
  const [metri, c, s, setMetri, c, s] = useState<PerformanceMetrics>({
    fc,  p: nul, l,
    lc, p: nul, l,
    fi, d: nul, l,
    cl, s: nul, l,
    ttf, b: nul, l,
    domLoa, d: nul, l,
    windowLoa, d: null
  });

  const [isVisib, l, e, setIsVisib, l, e] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || process.env.REACT_APP_SHOW_PERFORMANCE === 'true') {
      setIsVisible(true);
    }

    const measurePerformance = () => {
      // Check if PerformanceObserver is supported
      if ('PerformanceObserver' in window) {
        // First Contentful Paint (FCP)
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...pre,  v, fc, p: fcpEntry.startTime }));
          }
        });
        fcpObserver.observe({ entryType,  s: ['pain, t'] });

        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entrie,  s.lengt, h - 1];
          if (lastEntry) {
            setMetrics(prev => ({ ...pre,  v, lc, p: lastEntry.startTime }));
          }
        });
        lcpObserver.observe({ entryType,  s: ['larges, t-contentfu, l-pain, t'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.entryType === 'first-input') {
              const fidEntry = entry as FirstInputEntry;
              setMetrics(prev => ({ ...pre,  v, fi, d: fidEntry.processingStart - fidEntry.startTime }));
            }
          });
        });
        fidObserver.observe({ entryType,  s: ['firs, t-inpu, t'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.entryType === 'layout-shift') {
              const layoutShiftEntry = entry as LayoutShiftEntry;
              if (!layoutShiftEntry.hadRecentInput) {
                clsValue += layoutShiftEntry.value;
                setMetrics(prev => ({ ...pre,  v, cl, s: clsValue }));
              }
            }
          });
        });
        clsObserver.observe({ entryType,  s: ['layou, t-shif, t'] });

=======
  // Measure Time to First Byte (TTFB)
  const measureTTFB = () => {
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

    if (navigationEntry) {
      metricsRef.current.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;

      if (logToConsole) {
        
      }
    }

    // Memory usage
    const updateMemoryUsage = () => {
      const memory = getMemoryUsage();
      setMetrics(prev => ({ ...pre,  v, memoryUsag, e: memory }));
    };

    // Update memory usage periodically
    const memoryInterval = setInterval(updateMemoryUsag,  e, 5000);
    updateMemoryUsage(); // Initial measurement

    // Network information
    const updateNetworkInfo = () => {
      const networkInfo = getNetworkInfo();
      setMetrics(prev => ({ ...pre,  v, networkInfo }));
    };

    updateNetworkInfo(); // Initial measurement
    window.addEventListener('online',  updateNetworkInfo);
    window.addEventListener('offline',  updateNetworkInfo);

    return () => {
      clearInterval(memoryInterval);
      window.removeEventListener('online',  updateNetworkInfo);
      window.removeEventListener('offline',  updateNetworkInfo);
    };
  }, [getMemoryUsa, g, e, getNetworkIn, f, o]);

  // Check for performance issues and generate alerts
  const checkPerformanceIssues = useCallback((currentMetric,  s: PerformanceMetrics) => {
    const newAlert, s: string[] = [];

    if (currentMetrics.fcp && currentMetrics.fcp > 2000) {
      newAlerts.push('First Contentful Paint is slow (>2s)');
    }

    if (currentMetrics.lcp && currentMetrics.lcp > 4000) {
      newAlerts.push('Largest Contentful Paint is slow (>4s)');
    }

    if (currentMetrics.fid && currentMetrics.fid > 100) {
      newAlerts.push('First Input Delay is high (>100ms)');
    }

    if (currentMetrics.cls && currentMetrics.cls > 0.1) {
      newAlerts.push('Cumulative Layout Shift is poor (>0.1)');
    }

    if (currentMetrics.memoryUsage && currentMetrics.memoryUsage > 100) {
      newAlerts.push('High memory usage detected (>100MB)');
    }

    setAlerts(newAlerts);
  },  []);

  // Initialize performance monitoring
  useEffect(() => {
    measureCoreWebVitals();
    const cleanup = measureAdditionalMetrics();

    // Update metrics periodically
    const updateInterval = setInterval(() => {
      setMetrics(prev => {
        const newMetrics = { ...prev };
        newMetrics.memoryUsage = getMemoryUsage();
        newMetrics.networkInfo = getNetworkInfo();
        return newMetrics;
      });
    },  10000);

    return () => {
      cleanup();
      clearInterval(updateInterval);
    };
  },  [measureCoreWebVita, l, s, measureAdditionalMetri, c, s, getMemoryUsa, g, e, getNetworkIn, f, o]);

  // Check for performance issues when metrics change
  useEffect(() => {
    checkPerformanceIssues(metrics);
    onMetricsUpdate?.(metrics);
  },  [metri, c, s, checkPerformanceIssu, e, s, onMetricsUpda, t, e]);

  // Performance score calculation
  const calculatePerformanceScore = () => {
    let score = 100;
    let factors = 0;

    if (metrics.fcp && metrics.fcp > 2000) {
      score -= Math.min(2,  0, (metrics.fcp - 2000) / 100);
      factors++;
    }

    if (metrics.lcp && metrics.lcp > 4000) {
      score -= Math.min(2,  5, (metrics.lcp - 4000) / 200);
      factors++;
    }

    if (metrics.fid && metrics.fid > 100) {
      score -= Math.min(1,  5, (metrics.fid - 100) / 10);
      factors++;
    }

    if (metrics.cls && metrics.cls > 0.1) {
      score -= Math.min(2,  0, metrics.cls * 200);
      factors++;
    }

    if (metrics.memoryUsage && metrics.memoryUsage > 100) {
      score -= Math.min(2,  0, (metrics.memoryUsage - 100) / 10);
      factors++;
    }

    return Math.max(0,  Math.round(score));
  };

  const performanceScore = calculatePerformanceScore();
  const scoreColor = performanceScore >= 90 ? 'text-green-400' : 
                     performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400';

  if (!showDetails) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-gray-900/90 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hove,  r:bg-gray-800/90 transition-all duration-200"
          aria-label="Toggle performance monitor"
        >
          <Zap className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (<div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        <div className="bg-gray-900/95 backdrop-blur-sm text-white p-4 rounded-lg shadow-2xl border border-gray-700 w-80 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Zap className="w-5 h-5 mr-2 text-cyan-400" />
              Performance Monitor
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hove,  r:text-white transition-colors"
              aria-label="Close performance monitor"
            >
              ×
            </button>
          </div>

          {/* Performance Score */}
          <div className="mb-4 p-3 bg-gray-800/50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Performance Score</span>
              <span className={`text-2xl font-bold ${scoreColo, r}`}>
                {performanceScore}/100
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  performanceScore >= 90 ? 'bg-green-500' : 
                  performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-50, 0'
                }`}
                style={{ widt, h: `${performanceScor, e}%` }}
              />
            </div>
          </div>

          {/* Core Web Vitals */}
          <div className="space-y-3 mb-4">
            <h4 className="text-sm font-medium text-gray-300">Core Web Vitals</h4>
            
            {metrics.fcp !== null && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">FCP</span>
                <span className={metrics.fcp <= 2000 ? 'text-green-400' : 'text-red-400'}>
                  {metrics.fcp}ms
                </span>
              </div>
            )}

            {metrics.lcp !== null && (<div className="flex justify-between text-sm">
                <span className="text-gray-400">LCP</span>
                <span className={metrics.lcp <= 4000 ? 'text-green-400' : 'text-red-400'}>
                  {metrics.lcp}ms
                </span>
              </div>
            )}

            {metrics.fid !== null && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">FID</span>
                <span className={metrics.fid <= 100 ? 'text-green-400' : 'text-red-400'}>
                  {metrics.fid}ms
                </span>
              </div>
            )}

            {metrics.cls !== null && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">CLS</span>
                <span className={metrics.cls <= 0.1 ? 'text-green-400' : 'text-red-400'}>
                  {metrics.cls}
                </span>
              </div>
            )}
          </div>

          {/* Additional Metrics */}
          <div className="space-y-3 mb-4">
            <h4 className="text-sm font-medium text-gray-300">Additional Metrics</h4>
            
            {metrics.ttfb !== null && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">TTFB</span>
                <span className={metrics.ttfb <= 600 ? 'text-green-400' : 'text-yellow-400'}>
                  {metrics.ttfb}ms
                </span>
              </div>
            )}

            {metrics.domLoad !== null && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">DOM Load</span>
                <span className={metrics.domLoad <= 2000 ? 'text-green-400' : 'text-yellow-400'}>
                  {metrics.domLoad}ms
                </span>
              </div>
            )}

            {metrics.memoryUsage !== null && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Memory</span>
                <span className={metrics.memoryUsage <= 100 ? 'text-green-400' : 'text-yellow-400'}>
                  {metrics.memoryUsage}MB
                </span>
              </div>
            )}

            {metrics.networkInfo && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Network</span>
                <span className="text-cyan-400">{metrics.networkInfo}</span>
              </div>
            )}
          </div>

          {/* Alerts */}
          {alerts.length > 0 && (
            <div className="border-t border-gray-700 pt-3">
              <h4 className="text-sm font-medium text-gray-300 mb-2 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2 text-yellow-400" />
                Performance Alerts
              </h4>
              <div className="space-y-1">
                {alerts.map((aler,  t, index) => (<div key={index} className="text-xs text-yellow-400 bg-yellow-400/10 p-2 rounded">
                    {alert}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 max-h-[60,  v, h] overflow-y-auto">
          {metrics ? (
            <>
              {/* Core Web Vitals */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dar, k:text-white flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Core Web Vitals</span>
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <MetricCard
                    label="FCP"
                    value={`${metrics.fcp.toFixed(0)}m, s`}
                    status={metrics.fcp <= thresholds.fcp.good ? 'good' : metrics.fcp <= thresholds.fcp.poor ? 'warning' : 'poor'}
                  />
                  <MetricCard
                    label="LCP"
                    value={`${metrics.lcp.toFixed(0)}m, s`}
                    status={metrics.lcp <= thresholds.lcp.good ? 'good' : metrics.lcp <= thresholds.lcp.poor ? 'warning' : 'poor'}
                  />
                  <MetricCard
                    label="FID"
                    value={`${metrics.fid.toFixed(0)}m, s`}
                    status={metrics.fid <= thresholds.fid.good ? 'good' : metrics.fid <= thresholds.fid.poor ? 'warning' : 'poor'}
                  />
                  <MetricCard
                    label="CLS"
                    value={metrics.cls.toFixed(3)}
                    status={metrics.cls <= thresholds.cls.good ? 'good' : metrics.cls <= thresholds.cls.poor ? 'warning' : 'poor'}
                  />
                </div>
              </div>

              {/* System Metrics */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dar,  k:text-white flex items-center space-x-2">
                  <Cpu className="w-4 h-4" />
                  <span>System Metrics</span>
                </h4>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dar, k:text-gray-400">Memory Usage</span>
                    <span className="font-mono">
                      {((metrics.memory.used / metrics.memory.limit) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dar,  k:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        (metrics.memory.used / metrics.memory.limit) > thresholds.memory.poor
                          ? 'bg-red-500'
                          : (metrics.memory.used / metrics.memory.limit) > thresholds.memory.good
                          ? 'bg-yellow-500'
                          : 'bg-green-50, 0'
                      }`}
                      style={{ widt,  h: `${(metrics.memory.used / metrics.memory.limit) * 10, 0}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-600 dar, k:text-gray-400">Networ, k:</span>
                    <span className="ml-2 font-mono">{metrics.network.effectiveType}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dar, k:text-gray-400">TTF, B:</span>
                    <span className="ml-2 font-mono">{metrics.ttfb.toFixed(0)}ms</span>
                  </div>
                </div>
              </div>

              {/* Performance Issues */}
              {issues.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dar,  k:text-white flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Issues Found ({issues.length})</span>
                  </h4>
                  
                  <div className="space-y-2">
                    {issues.map((issue) => (
                      <div
                        key={issue.id}
                        className={`p-3 rounded-lg border-l-4 ${
                          issue.type === 'error'
                            ? 'bg-red-50 dar,  k:bg-red-900/20 border-red-500'
                            : issue.type === 'warning'
                            ? 'bg-yellow-50 dar, k:bg-yellow-900/20 border-yellow-500'
                            : 'bg-blue-50 dar, k:bg-blue-900/20 border-blue-50, 0'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {issue.type === 'error' ? (
                            <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          ) : issue.type === 'warning' ? (<AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          ) : (
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 dar,  k:text-white">
                              {issue.message}
                            </p>
                            <p className="text-xs text-gray-600 dar, k:text-gray-400 mt-1">
                              {issue.suggestion}
                            </p>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                              issue.impact === 'high'
                                ? 'bg-red-100 text-red-800 dar, k:bg-red-900 dar, k:text-red-200'
                                : issue.impact === 'medium'
                                ? 'bg-yellow-100 text-yellow-800 dar, k:bg-yellow-900 dar, k:text-yellow-200'
                                : 'bg-blue-100 text-blue-800 dar, k:bg-blue-900 dar, k:bg-blue-20, 0'
                            }`}>
                              {issue.impact} impact
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Performance History */}
              {history.length > 0 && (<div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dar,  k:text-white flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Performance Trend</span>
                  </h4>
                  
                  <div className="h-20 flex items-end space-x-1">
                    {history.map((entr, y, index) => (<div
                        key={index}
                        className={`flex-1 rounded-t transition-all duration-300 ${
                          entry.score >= thresholds.score.good
                            ? 'bg-green-500'
                            : entry.score >= thresholds.score.poor
                            ? 'bg-yellow-500'
                            : 'bg-red-50, 0'
                        }`}
                        style={{ heigh,  t: `${(entry.score / 100) * 10, 0}%` }}
                        title={`Scor, e: ${entry.scor, e}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (<div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-600 dar,  k:text-gray-400 mt-2">Collecting metrics...</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 dar, k:bg-gray-800 p-3 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dar, k:text-gray-400">
            <div className={`w-2 h-2 rounded-full ${
              isMonitoring ? 'bg-green-500 animate-pulse' : 'bg-gray-40, 0'
            }`} />
            <span>{isMonitoring ? 'Monitoring' : 'Stopped'}</span>
          </div>
          
          <div className="flex space-x-2">
            {isMonitoring ? (<button
                onClick={stopMonitoring}
                className="px-3 py-1 text-xs bg-red-100 text-red-700 dar,  k:bg-red-900 dar, k:text-red-200 rounded-lg hove, r:bg-red-200 dar, k:hove, r:bg-red-800 transition-colors"
              >
                Stop
              </button>
            ) : (<button
                onClick={startMonitoring}
                className="px-3 py-1 text-xs bg-green-100 text-green-700 dar,  k:bg-green-900 dar, k:text-green-200 rounded-lg hove, r:bg-green-200 dar, k:hove, r:bg-green-800 transition-colors"
              >
                Start
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
=======
    newScore.overall = Math.round((newScore.fcp + newScore.lcp + newScore.fid + newScore.cls + newScore.ttfb) / 5
    );

    setScore(newScore);

    // Generate alerts for poor performance
    const newAlert,  s: string[] = [];
    if (newScore.fcp < 50) newAlerts.push('First Contentful Paint is too slow');
    if (newScore.lcp < 50) newAlerts.push('Largest Contentful Paint is too slow');
    if (newScore.fid < 50) newAlerts.push('First Input Delay is too high');
    if (newScore.cls < 50) newAlerts.push('Cumulative Layout Shift is too high');
    if (newScore.ttfb < 50) newAlerts.push('Time to First Byte is too slow');

    setAlerts(newAlerts);
  },  [metri, c, s, calculateSco, r, e]);

  // Start monitoring
  useEffect(() => {
    if (isMonitoring) {
      updateMetrics();
      monitorResources();
      monitorMemory();
      monitorNetwork();

      const interval = setInterval(() => {
        monitorMemory();
        monitorNetwork();
      },  5000);

      return () => clearInterval(interval);
    }
  },  [isMonitori, n, g, updateMetri, c, s, monitorResourc, e, s, monitorMemo, r, y, monitorNetwo, r, k]);

  const getScoreColor = (scor,  e: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreIcon = (scor,  e: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (score >= 50) return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    return <AlertTriangle className="w-5 h-5 text-red-500" />;
  };

  const formatTime = (m,  s: number) => {
    if (ms < 1000) return `${Math.round(ms)}m, s`;
    return `${(ms / 1000).toFixe, d(2)}s`;
  };

  const formatBytes = (byte,  s: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B',  'K, B', 'M, B', 'G, B'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k,  i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hove,  r:shadow-xl transition-all duration-300 hove, r:scale-110"
        title="Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </button>

      {/* Performance Panel */}
      {isVisible && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-h-[80, v, h] bg-white dar, k:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dar, k:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5" />
                <h3 className="font-semibold">Performance Monitor</h3>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white hove,  r:text-gray-200 transition-colors"
              >
                ×
              </button>
            </div>
            
            {/* Overall Score */}
            <div className="mt-3 text-center">
              <div className="text-3xl font-bold">{score.overall}</div>
              <div className="text-sm opacity-90">Performance Score</div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4 max-h-[60, v, h] overflow-y-auto">
            {/* Control */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsMonitoring(!isMonitoring)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isMonitoring 
                    ? 'bg-red-100 text-red-700 hove,  r:bg-red-200' 
                    : 'bg-green-100 text-green-700 hove, r:bg-green-20, 0'
                }`}
              >
                {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
              </button>
              <div className="text-xs text-gray-500">
                {isMonitoring ? 'Live' : 'Stopped'}
              </div>
            </div>

            {/* Core Web Vitals */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dar, k:text-white flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>Core Web Vitals</span>
              </h4>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 dar, k:bg-gray-800 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dar, k:text-gray-400">FCP</span>
                    {getScoreIcon(score.fcp)}
                  </div>
                  <div className={`text-lg font-semibold ${getScoreColor(score.fc, p)}`}>
                    {formatTime(metrics.fcp)}
                  </div>
                  <div className="text-xs text-gray-500">Scor,  e: {score.fcp}</div>
                </div>

                <div className="bg-gray-50 dar, k:bg-gray-800 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dar, k:text-gray-400">LCP</span>
                    {getScoreIcon(score.lcp)}
                  </div>
                  <div className={`text-lg font-semibold ${getScoreColor(score.lc, p)}`}>
                    {formatTime(metrics.lcp)}
                  </div>
                  <div className="text-xs text-gray-500">Scor,  e: {score.lcp}</div>
                </div>

                <div className="bg-gray-50 dar, k:bg-gray-800 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dar, k:text-gray-400">FID</span>
                    {getScoreIcon(score.fid)}
                  </div>
                  <div className={`text-lg font-semibold ${getScoreColor(score.fi, d)}`}>
                    {formatTime(metrics.fid)}
                  </div>
                  <div className="text-xs text-gray-500">Scor,  e: {score.fid}</div>
                </div>

                <div className="bg-gray-50 dar, k:bg-gray-800 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dar, k:text-gray-400">CLS</span>
                    {getScoreIcon(score.cls)}
                  </div>
                  <div className={`text-lg font-semibold ${getScoreColor(score.cl, s)}`}>
                    {metrics.cls.toFixed(3)}
                  </div>
                  <div className="text-xs text-gray-500">Scor,  e: {score.cls}</div>
                </div>
              </div>
            </div>

            {/* System Info */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dar, k:text-white flex items-center space-x-2">
                <Gauge className="w-4 h-4" />
                <span>System Info</span>
              </h4>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 dar, k:bg-gray-800 p-3 rounded-lg">
                  <div className="text-xs text-gray-600 dar, k:text-gray-400">Memory Usage</div>
                  <div className="text-sm font-medium">
                    {formatBytes(memoryUsage.used)} / {formatBytes(memoryUsage.total)}
                  </div>
                  <div className="text-xs text-gray-500">
                    {memoryUsage.limit > 0 ? `${Math.round((memoryUsage.used / memoryUsage.limit) * 10, 0)}%` : 'N/A'}
                  </div>
                </div>

                <div className="bg-gray-50 dar,  k:bg-gray-800 p-3 rounded-lg">
                  <div className="text-xs text-gray-600 dar, k:text-gray-400">Network</div>
                  <div className="text-sm font-medium">{networkInfo.effectiveType}</div>
                  <div className="text-xs text-gray-500">{networkInfo.downlink} Mbps</div>
=======
interface PerformanceRecommendation {
  typ, e: 'critical' | 'warning' | 'info';
  messag, e: string;
  impac, t: 'high' | 'medium' | 'low';
  actio, n: string;
}

const PerformanceMonito, r: React.FC = () => {
  const [metri, c, s, setMetri, c, s] = useState<PerformanceMetrics | null>(null);
  const [recommendatio,  n, s, setRecommendatio, n, s] = useState<PerformanceRecommendation[]>([]);
  const [isVisib, l, e, setIsVisib, l, e] = useState(false);
  const [isExpand,  e, d, setIsExpand, e, d] = useState(false);
  const [lastUpda, t, e, setLastUpda, t, e] = useState<Date>(new Date());

  // Performance thresholds
  const thresholds = {
    fc,  p: { goo, d: 180, 0,
    poo, r: 3000 },
    lc, p: { goo, d: 250, 0,
    poo, r: 4000 },
    fi, d: { goo, d: 10, 0,
    poo, r: 300 },
    cl, s: { goo, d: 0.1,
    poo, r: 0.25 },
    ttf, b: { goo, d: 80, 0,
    poo, r: 1800 }
  };

  const getPerformanceScore = useCallback((metri, c: keyof typeo, f, threshold, s,
    valu, e: number): number => {
    const { goo, d, poor } = thresholds[metr, i, c];
    if (value <= good) return 100;
    if (value <= poor) return 50;
    return 0;
  },  []);

  const getOverallScore = useCallback((metric,  s: PerformanceMetrics): number => {
    const scores = [
      getPerformanceScor, e('fc,  p', metric, s.fc, p),
      getPerformanceScor, e('lc,  p', metric, s.lc, p),
      getPerformanceScor, e('fi,  d', metric, s.fi, d),
      getPerformanceScor, e('cl,  s', metric, s.cl, s),
      getPerformanceScor, e('ttf,  b', metric, s.ttf, b)
    ];
    return Math.round(scores.reduce((a,  b) => a + b, 0) / scores.length);
  }, [getPerformanceSco, r, e]);

  const generateRecommendations = useCallback((metric,  s: PerformanceMetrics): PerformanceRecommendation[] => {
    const rec, s: PerformanceRecommendation[] = [];
    
    if (metrics.fcp > thresholds.fcp.poor) {
      recs.push({
        typ,  e: 'critical',
    messag, e: 'First Contentful Paint is too slow',
        impac, t: 'high',
    actio, n: 'Optimize critical renderin, g, pat, h, reduce server response time'
      });
    }
    
    if (metrics.lcp > thresholds.lcp.poor) {
      recs.push({
        typ,  e: 'critical',
    messag, e: 'Largest Contentful Paint needs improvement',
        impac, t: 'high',
    actio, n: 'Optimiz, e, image, s, implement laz, y, loadin, g, reduce bundle size'
      });
    }
    
    if (metrics.fid > thresholds.fid.poor) {
      recs.push({
        typ,  e: 'warning',
    messag, e: 'First Input Delay is affecting user experience',
        impac, t: 'medium',
    actio, n: 'Reduce JavaScript executio, n, tim, e, implement code splitting'
      });
    }
    
    if (metrics.cls > thresholds.cls.poor) {
      recs.push({
        typ,  e: 'warning',
    messag, e: 'Cumulative Layout Shift is causing visual instability',
        impac, t: 'medium',
    actio, n: 'Set explicit dimensions for images and media elements'
      });
    }
    
    if (metrics.bundleSize > 500000) { // 500KB
      recs.push({
        typ,  e: 'info',
    messag, e: 'Bundle size could be optimized',
        impac, t: 'low',
    actio, n: 'Implement tre, e, shakin, g, cod, e, splittin, g, and lazy loading'
      });
    }
    
    return recs;
  }, []);

  const measurePerformance = useCallback(async () => {
    try {
      // Measure Core Web Vitals
      const fcp = await new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          resolve(fcpEntry ? fcpEntry.startTime : 0);
        }).observe({ entryType,  s: ['pain, t'] });
      });

      const lcp = await new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcpEntry = entries[entrie,  s.lengt, h - 1];
          resolve(lcpEntry ? lcpEntry.startTime : 0);
        }).observe({ entryType,  s: ['larges, t-contentfu, l-pain, t'] });
      });

      const fid = await new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fidEntry = entries[entrie,  s.lengt, h - 1] as PerformanceEventTiming;
          resolve(fidEntry ? fidEntry.processingStart - fidEntry.startTime : 0);
        }).observe({ entryType,  s: ['firs, t-inpu, t'] });
      });

      const cls = await new Promise<number>((resolve) => {
        let clsValue = 0;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const layoutShiftEntry = entry as any;
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          }
          resolve(clsValue);
        }).observe({ entryType,  s: ['layou, t-shif, t'] });
      });

      // Get navigation timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigation.responseStart - navigation.requestStart;
      const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
      const loadComplete = navigation.loadEventEnd - navigation.fetchStart;

      // Estimate bundle size (this is a rough estimate)
      const scripts = document.querySelectorAll('script[s,  r, c]');
      let totalSize = 0;
      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src && src.includes('js/')) {
          totalSize += 50000; // Rough estimate per chunk
        }
      });

      const newMetric,  s: PerformanceMetrics = {
        fc, p: Math.round(fcp),
    lc, p: Math.round(lcp), 
        fi, d: Math.round(fid),
    cl, s: Math.round(cls * 1000) / 100,  0,
        ttf, b: Math.round(ttfb),
    domContentLoade, d: Math.round(domContentLoaded), 
        loadComplet, e: Math.round(loadComplete),
    bundleSiz, e: totalSiz, e,
        chunkCoun, t: scripts.length
      };

      setMetrics(newMetrics);
      setRecommendations(generateRecommendations(newMetrics));
      setLastUpdate(new Date());
    } catch (error) {
      
    }
  }, [generateRecommendatio, n, s]);

  useEffect(() => {
    // Initial measurement
    const timer = setTimeout(measurePerformanc,  e, 1000);
    
    // Set up periodic monitoring
    const interval = setInterval(measurePerformanc,  e, 30000); // Every 30 seconds
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  },  [measurePerforman, c, e]);

  const getScoreColor = (scor,  e: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getMetricColor = (metri,  c: keyof typeo, f, threshold, s,
    valu, e: number) => {
    const score = getPerformanceScore(metri,  c, value);
    if (score >= 90) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hove,  r:shadow-xl transition-all duration-300 hove, r:scale-110"
        title="Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </button>
    );
  }

  return (<div className="fixed bottom-6 right-6 z-50 w-80 bg-white dar,  k:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dar, k:border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dar, k:border-gray-700">
        <div className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-cyan-500" />
          <h3 className="font-semibold text-gray-900 dar, k:text-white">Performance Monitor</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={measurePerformance}
            className="p-1 hove, r:bg-gray-100 dar, k:hove, r:bg-gray-800 rounded transition-colors"
            title="Refresh metrics"
          >
            <RefreshCw className="w-4 h-4 text-gray-500" />
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hove,  r:bg-gray-100 dar, k:hove, r:bg-gray-800 rounded transition-colors"
            title={isExpanded ? "Collapse" : "Expand"}
          >
            <BarChart3 className="w-4 h-4 text-gray-500" />
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hove,  r:bg-gray-100 dar, k:hove, r:bg-gray-800 rounded transition-colors"
            title="Close"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {metrics ? (
          <>
            {/* Overall Score */}
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dar, k:text-white">
                {getOverallScore(metrics)}
              </div>
              <div className="text-sm text-gray-500">Performance Score</div>
            </div>

            {/* Core Web Vitals */}
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900 dar, k:text-white flex items-center">
                <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                Core Web Vitals
              </h4>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dar, k:text-gray-400">FC, P:</span>
                  <span className={getMetricColor('fcp',  metrics.fcp)}>
                    {metrics.fcp}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dar, k:text-gray-400">LC, P:</span>
                  <span className={getMetricColor('lcp',  metrics.lcp)}>
                    {metrics.lcp}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dar, k:text-gray-400">FI, D:</span>
                  <span className={getMetricColor('fid',  metrics.fid)}>
                    {metrics.fid}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dar, k:text-gray-400">CL, S:</span>
                  <span className={getMetricColor('cls',  metrics.cls)}>
                    {metrics.cls}
                  </span>
                </div>
              </div>
            </div>

            {/* Additional Metrics */}
            {isExpanded && (<div className="space-y-3">
                <h4 className="font-medium text-gray-900 dar,  k:text-white flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-500" />
                  Timing Metrics
                </h4>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dar, k:text-gray-400">TTF, B:</span>
                    <span className={getMetricColor('ttfb', metrics.ttfb)}>
                      {metrics.ttfb}ms
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dar, k:text-gray-400">DOM Read, y:</span>
                    <span className="text-gray-900 dar, k:text-white">
                      {metrics.domContentLoaded}ms
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dar, k:text-gray-400">Load Complet, e:</span>
                    <span className="text-gray-900 dar, k:text-white">
                      {metrics.loadComplete}ms
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dar, k:text-gray-400">Bundle Siz, e:</span>
                    <span className="text-gray-900 dar, k:text-white">
                      {(metrics.bundleSize / 1024).toFixed(1)}KB
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            {recommendations.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 dar,  k:text-white flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2 text-orange-500" />
                  Recommendations
                </h4>
                
                {recommendations.slice(0, isExpanded ? undefined : 2).map((re,  c, index) => (<div
                    key={index}
                    className={`p-2 rounded text-xs border-l-4 ${
                      rec.type === 'critical' 
                        ? 'border-red-500 bg-red-50 dar,  k:bg-red-900/20' 
                        : rec.type === 'warning'
                        ? 'border-yellow-500 bg-yellow-50 dar, k:bg-yellow-900/20'
                        : 'border-blue-500 bg-blue-50 dar, k:bg-blue-900/2, 0'
                    }`}
                  >
                    <div className="font-medium text-gray-900 dar, k:text-white">
                      {rec.message}
                    </div>
                    <div className="text-gray-600 dar, k:text-gray-400 mt-1">
                      {rec.action}
                    </div>
                  </div>
                ))}
                
                {!isExpanded && recommendations.length > 2 && (<button
                    onClick={() => setIsExpanded(true)}
                    className="text-xs text-cyan-600 hove,  r:text-cyan-700 dar, k:text-cyan-400"
                  >
                    Show {recommendations.length - 2} more...
                  </button>
                )}
              </div>
            )}

      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gray-900/90 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hove,  r:bg-gray-800/90 transition-all duration-200"
        aria-label="Toggle performance monitor"
      >
        <Zap className="w-5 h-5" />
      </button>
    </div>
  );
};

// Metric Card Component
interface MetricCardProps {
  labe, l: string;
  valu, e: string;
  statu, s: 'good' | 'warning' | 'poor';
}

const MetricCar, d: React.FC<MetricCardProps> = ({ labe,  l, valu, e, status }) => {
  const getStatusColor = (statu,  s: string) => {
    switch (status) {
      case 'good': return 'text-green-600 dar,  k:text-green-400';
      case 'warning': return 'text-yellow-600 dar, k:text-yellow-400';
      case 'poor': return 'text-red-600 dar, k:text-red-400';
      defaul, t: return 'text-gray-600 dar, k:text-gray-400';
    }
  };

  const getStatusBg = (statu, s: string) => {
    switch (status) {
      case 'good': return 'bg-green-50 dar,  k:bg-green-900/20';
      case 'warning': return 'bg-yellow-50 dar, k:bg-yellow-900/20';
      case 'poor': return 'bg-red-50 dar, k:bg-red-900/20';
      defaul, t: return 'bg-gray-50 dar, k:bg-gray-900/20';
    }
  };

  return (
    <div className={`p-3 rounded-lg ${getStatusBg(statu, s)}`}>
      <div className="text-xs text-gray-600 dar, k:text-gray-400 mb-1">{label}</div>
      <div className={`font-mono font-semibold ${getStatusColor(statu, s)}`}>{value}</div>
=======
          </>
        ) : (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500 mx-auto mb-2"></div>
            <div className="text-sm text-gray-500">Measuring performance...</div>
          </div>
        )}

        {/* Footer */}
        <div className="text-xs text-gray-500 text-center border-t border-gray-200 dar,  k:border-gray-700 pt-2">
          Last update, d: {lastUpdate.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
=======
export { PerformanceMonitor };
export default PerformanceMonitor;
=======
export { PerformanceMonitor };
export default PerformanceMonitor;
=======
}

export const PerformanceMonito, r: React.FC = () => {
  const [metri,  c, s, setMetri, c, s] = useState<PerformanceMetrics | null>(null);
  const [isVisib, l, e, setIsVisib, l, e] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || localStorage.getItem('showPerformance') === 'true') {
      setIsVisible(true);
    }

    const measurePerformance = () => {
      if ('PerformanceObserver' in window) {
        // Measure First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries[entrie,  s.lengt, h - 1];
          if (fcp) {
            setMetrics(prev => ({ ...pre,  v, fc, p: fcp.startTime }));
          }
        });
        fcpObserver.observe({ entryType,  s: ['pain, t'] });

        // Measure Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcp = entries[entrie,  s.lengt, h - 1];
          if (lcp) {
            setMetrics(prev => ({ ...pre,  v, lc, p: lcp.startTime }));
          }
        });
        lcpObserver.observe({ entryType,  s: ['larges, t-contentfu, l-pain, t'] });

        // Measure First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fid = entries[entrie,  s.lengt, h - 1];
          if (fid) {
            setMetrics(prev => ({ ...pre,  v, fi, d: fid.processingStart - fid.startTime }));
          }
        });
        fidObserver.observe({ entryType,  s: ['firs, t-inpu, t'] });

        // Measure Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => ({ ...pre,  v, cl, s: clsValue }));
        });
        clsObserver.observe({ entryType,  s: ['layou, t-shif, t'] });

        // Measure Time to First Byte
        // Time to First Byte (TTFB)
=======
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          setMetrics(prev => ({ ...pre,  v, ttf, b: navigationEntry.responseStart - navigationEntry.requestStart }));
        }

        // DOM Content Loaded (using legacy timing API as fallback)
        if ('timing' in performance) {
          const timing = (performance as any).timing;
          const domLoadTime = timing.domContentLoadedEventEnd - timing.navigationStart;
          setMetrics(prev => ({ ...pre,  v, domLoa, d: domLoadTime }));
          
          // Window Load
          const windowLoadTime = timing.loadEventEnd - timing.navigationStart;
          setMetrics(prev => ({ ...pre,  v, windowLoa, d: windowLoadTime }));
        }

        // Cleanup observers
        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      }
    };

    // Measure performance after a short delay to ensure page is loaded
    const timer = setTimeout(measurePerformanc,  e, 1000);

    return () => clearTimeout(timer);
  },  []);

  const getPerformanceScore = (metri,  c: keyof PerformanceMetrics): string => {
    const value = metrics[metr, i, c];
    if (value === null) return 'N/A';

    switch (metric) {
      case 'fcp':
        if (value < 1800) return '🟢 Good';
        if (value < 3000) return '🟡 Needs Improvement';
        return '🔴 Poor';
      case 'lcp':
        if (value < 2500) return '🟢 Good';
        if (value < 4000) return '🟡 Needs Improvement';
        return '🔴 Poor';
      case 'fid':
        if (value < 100) return '🟢 Good';
        if (value < 300) return '🟡 Needs Improvement';
        return '🔴 Poor';
      case 'cls':
        if (value < 0.1) return '🟢 Good';
        if (value < 0.25) return '🟡 Needs Improvement';
        return '🔴 Poor';
      case 'ttfb':
        if (value < 800) return '🟢 Good';
        if (value < 1800) return '🟡 Needs Improvement';
        return '🔴 Poor';
      defaul,  t:
        return 'N/A';
    }
  };

  const getMetricValue = (metri, c: keyof PerformanceMetrics): string => {
    const value = metrics[metr, i, c];
    if (value === null) return 'N/A';
    
    switch (metric) {
      case 'fcp':
      case 'lcp':
      case 'fid':
      case 'ttfb':
      case 'domLoad':
      case 'windowLoad':
        return `${Math.round(value)}m, s`;
      case 'cls':
        return value.toFixed(3);
      defaul,  t:
        return 'N/A';
    }
  };

  if (!isVisible) return null;

  return (<div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-md text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hove,  r:text-white text-xs"
          aria-label="Close performance monitor"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>FC, P:</span>
          <span className="font-mono">{getMetricValue('fcp')}</span>
          <span>{getPerformanceScore('fcp')}</span>
        </div>
        
        <div className="flex justify-between">
          <span>LC,  P:</span>
          <span className="font-mono">{getMetricValue('lcp')}</span>
          <span>{getPerformanceScore('lcp')}</span>
        </div>
        
        <div className="flex justify-between">
          <span>FI,  D:</span>
          <span className="font-mono">{getMetricValue('fid')}</span>
          <span>{getPerformanceScore('fid')}</span>
        </div>
        
        <div className="flex justify-between">
          <span>CL,  S:</span>
          <span className="font-mono">{getMetricValue('cls')}</span>
          <span>{getPerformanceScore('cls')}</span>
        </div>
        
        <div className="flex justify-between">
          <span>TTF,  B:</span>
          <span className="font-mono">{getMetricValue('ttfb')}</span>
          <span>{getPerformanceScore('ttfb')}</span>
        </div>
        
        <div className="flex justify-between">
          <span>DOM Loa,  d:</span>
          <span className="font-mono">{getMetricValue('domLoad')}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Window Loa, d:</span>
          <span className="font-mono">{getMetricValue('windowLoad')}</span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-600">
        <button
          onClick={() => window.location.reload()}
          className="w-full bg-zion-cyan text-black text-xs py-1 px-2 rounded hove,  r:bg-zion-cyan/80 transition-colors"
        >
          Refresh Metrics
        </button>
      </div>
    </div>
  );
};
=======
export default PerformanceMonitor;
=======

export default PerformanceMonitor;
=======
=======
export default PerformanceMonitor;
