import React, { useState, useEffect } from 'react';
import { BarChart3, Zap, Clock, TrendingUp, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  timestamp: number;
}

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);

  useEffect(() => {
    // Only show in development or when debug flag is set
    const isDebug = process.env.NODE_ENV === 'development' || 
                   localStorage.getItem('debug-performance') === 'true';
    
    if (!isDebug) return;

    setIsVisible(true);

    // Listen for performance metrics
    const handlePerformanceData = (event: CustomEvent) => {
      const data = event.detail;
      setMetrics(data);
      calculatePerformanceScore(data);
    };

    window.addEventListener('performance-metrics', handlePerformanceData as EventListener);

    // Get initial metrics
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const latestMetrics = extractMetrics(entries);
        if (latestMetrics) {
          setMetrics(latestMetrics);
          calculatePerformanceScore(latestMetrics);
        }
      });

      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input'] });

      return () => {
        observer.disconnect();
        window.removeEventListener('performance-metrics', handlePerformanceData as EventListener);
      };
    }
  }, []);

  const extractMetrics = (entries: PerformanceEntry[]): PerformanceMetrics | null => {
    const navigation = entries.find(entry => entry.entryType === 'navigation') as PerformanceNavigationTiming;
    const lcp = entries.find(entry => entry.entryType === 'largest-contentful-paint') as PerformanceEntry;
    const fid = entries.find(entry => entry.entryType === 'first-input') as PerformanceEventTiming;
    const paint = entries.filter(entry => entry.entryType === 'paint');

    if (!navigation) return null;

    const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
    const cls = 0; // Would need to be calculated separately

    return {
      lcp: lcp ? lcp.startTime : 0,
      fid: fid ? fid.processingStart - fid.startTime : 0,
      cls,
      fcp: fcp ? fcp.startTime : 0,
      ttfb: navigation.responseStart - navigation.requestStart,
      timestamp: Date.now()
    };
  };

  const calculatePerformanceScore = (metrics: PerformanceMetrics) => {
    let score = 100;

    // LCP scoring (0-2.5s is good)
    if (metrics.lcp > 2500) score -= 30;
    else if (metrics.lcp > 4000) score -= 50;

    // FID scoring (0-100ms is good)
    if (metrics.fid > 100) score -= 20;
    else if (metrics.fid > 300) score -= 40;

    // CLS scoring (0-0.1 is good)
    if (metrics.cls > 0.1) score -= 20;
    else if (metrics.cls > 0.25) score -= 40;

    // FCP scoring (0-1.8s is good)
    if (metrics.fcp > 1800) score -= 15;
    else if (metrics.fcp > 3000) score -= 30;

    // TTFB scoring (0-800ms is good)
    if (metrics.ttfb > 800) score -= 10;
    else if (metrics.ttfb > 1800) score -= 20;

    setPerformanceScore(Math.max(0, score));
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  if (!isVisible || !metrics) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-slate-800/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/10 min-w-[300px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold flex items-center">
          <BarChart3 className="w-4 h-4 mr-2" />
          Performance
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
          aria-label="Close performance dashboard"
        >
          ×
        </button>
      </div>

      {/* Performance Score */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-300">Overall Score</span>
          <span className={`text-lg font-bold ${getScoreColor(performanceScore)}`}>
            {performanceScore}
          </span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              performanceScore >= 90 ? 'bg-green-400' :
              performanceScore >= 70 ? 'bg-yellow-400' : 'bg-red-400'
            }`}
            style={{ width: `${performanceScore}%` }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-1">{getScoreLabel(performanceScore)}</p>
      </div>

      {/* Core Web Vitals */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-cyan-400" />
            <span className="text-sm text-gray-300">LCP</span>
          </div>
          <span className={`text-sm font-mono ${
            metrics.lcp <= 2500 ? 'text-green-400' :
            metrics.lcp <= 4000 ? 'text-yellow-400' : 'text-red-400'
          }`}>
            {metrics.lcp.toFixed(0)}ms
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Zap className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm text-gray-300">FID</span>
          </div>
          <span className={`text-sm font-mono ${
            metrics.fid <= 100 ? 'text-green-400' :
            metrics.fid <= 300 ? 'text-yellow-400' : 'text-red-400'
          }`}>
            {metrics.fid.toFixed(0)}ms
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <TrendingUp className="w-4 h-4 mr-2 text-pink-400" />
            <span className="text-sm text-gray-300">CLS</span>
          </div>
          <span className={`text-sm font-mono ${
            metrics.cls <= 0.1 ? 'text-green-400' :
            metrics.cls <= 0.25 ? 'text-yellow-400' : 'text-red-400'
          }`}>
            {metrics.cls.toFixed(3)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AlertTriangle className="w-4 h-4 mr-2 text-orange-400" />
            <span className="text-sm text-gray-300">FCP</span>
          </div>
          <span className={`text-sm font-mono ${
            metrics.fcp <= 1800 ? 'text-green-400' :
            metrics.fcp <= 3000 ? 'text-yellow-400' : 'text-red-400'
          }`}>
            {metrics.fcp.toFixed(0)}ms
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BarChart3 className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-sm text-gray-300">TTFB</span>
          </div>
          <span className={`text-sm font-mono ${
            metrics.ttfb <= 800 ? 'text-green-400' :
            metrics.ttfb <= 1800 ? 'text-yellow-400' : 'text-red-400'
          }`}>
            {metrics.ttfb.toFixed(0)}ms
          </span>
        </div>
      </div>

      {/* Performance Tips */}
      {performanceScore < 70 && (
        <div className="mt-4 p-3 bg-yellow-400/10 border border-yellow-400/20 rounded">
          <p className="text-xs text-yellow-400">
            💡 Consider optimizing images, reducing JavaScript bundle size, or implementing lazy loading.
          </p>
        </div>
      )}
    </div>
  );
};

export default PerformanceDashboard;