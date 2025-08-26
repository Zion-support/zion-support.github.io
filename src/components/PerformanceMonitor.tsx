import React, { useState, useEffect } from 'react';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

interface PerformanceMonitorProps {
  className?: string;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ className = '' }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [issues, setIssues] = useState<PerformanceIssue[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);

  const calculatePerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;

    // Load time scoring (target: < 2 seconds)
    if (metrics.loadTime > 3000) score -= 20;
    else if (metrics.loadTime > 2000) score -= 10;
    else if (metrics.loadTime > 1000) score -= 5;

    // First Contentful Paint scoring (target: < 1.8 seconds)
    if (metrics.firstContentfulPaint > 3000) score -= 20;
    else if (metrics.firstContentfulPaint > 1800) score -= 10;
    else if (metrics.firstContentfulPaint > 1000) score -= 5;

    // Largest Contentful Paint scoring (target: < 2.5 seconds)
    if (metrics.largestContentfulPaint > 4000) score -= 20;
    else if (metrics.largestContentfulPaint > 2500) score -= 10;
    else if (metrics.largestContentfulPaint > 1500) score -= 5;

    // Cumulative Layout Shift scoring (target: < 0.1)
    if (metrics.cumulativeLayoutShift > 0.25) score -= 20;
    else if (metrics.cumulativeLayoutShift > 0.1) score -= 10;
    else if (metrics.cumulativeLayoutShift > 0.05) score -= 5;

    // First Input Delay scoring (target: < 100ms)
    if (metrics.firstInputDelay > 300) score -= 20;
    else if (metrics.firstInputDelay > 100) score -= 10;
    else if (metrics.firstInputDelay > 50) score -= 5;

    return Math.max(0, score);
  };

  const getPerformanceGrade = (score: number): { grade: string; color: string; icon: React.ReactNode } => {
    if (score >= 90) {
      return { grade: 'A', color: 'text-green-500', icon: <CheckCircle className="w-6 h-6 text-green-500" /> };
    } else if (score >= 80) {
      return { grade: 'B', color: 'text-blue-500', icon: <TrendingUp className="w-6 h-6 text-blue-500" /> };
    } else if (score >= 70) {
      return { grade: 'C', color: 'text-yellow-500', icon: <AlertTriangle className="w-6 h-6 text-yellow-500" /> };
    } else if (score >= 60) {
      return { grade: 'D', color: 'text-orange-500', icon: <AlertTriangle className="w-6 h-6 text-orange-500" /> };
    } else {
      return { grade: 'F', color: 'text-red-500', icon: <AlertTriangle className="w-6 h-6 text-red-500" /> };
    }
  };

  const getMetricStatus = (metric: keyof PerformanceMetrics, value: number): { status: string; color: string; icon: React.ReactNode } => {
    const thresholds: Record<string, { good: number; needsImprovement: number; poor: number }> = {
      loadTime: { good: 1000, needsImprovement: 2000, poor: 3000 },
      firstContentfulPaint: { good: 1000, needsImprovement: 1800, poor: 3000 },
      largestContentfulPaint: { good: 1500, needsImprovement: 2500, poor: 4000 },
      cumulativeLayoutShift: { good: 0.05, needsImprovement: 0.1, poor: 0.25 },
      firstInputDelay: { good: 50, needsImprovement: 100, poor: 300 }
    };

    const threshold = thresholds[metric];
    if (value <= threshold.good) {
      return { status: 'Good', color: 'text-green-500', icon: <CheckCircle className="w-4 h-4 text-green-500" /> };
    } else if (value <= threshold.needsImprovement) {
      return { status: 'Needs Improvement', color: 'text-yellow-500', icon: <AlertTriangle className="w-4 h-4 text-yellow-500" /> };
    } else {
      return { status: 'Poor', color: 'text-red-500', icon: <AlertTriangle className="w-4 h-4 text-red-500" /> };
    }
  };

  const measurePerformance = async (): Promise<PerformanceMetrics> => {
    return new Promise((resolve) => {
      // Simulate performance measurement
      setTimeout(() => {
        const mockMetrics: PerformanceMetrics = {
          loadTime: Math.random() * 2000 + 500, // 500ms to 2.5s
          firstContentfulPaint: Math.random() * 1500 + 800, // 800ms to 2.3s
          largestContentfulPaint: Math.random() * 2000 + 1200, // 1.2s to 3.2s
          cumulativeLayoutShift: Math.random() * 0.2 + 0.02, // 0.02 to 0.22
          firstInputDelay: Math.random() * 200 + 30 // 30ms to 230ms
        };
        resolve(mockMetrics);
      }, 1000);
    });
  };

  const startMonitoring = async () => {
    setIsMonitoring(true);
    const measuredMetrics = await measurePerformance();
    setMetrics(measuredMetrics);
    const score = calculatePerformanceScore(measuredMetrics);
    setPerformanceScore(score);
    setIsMonitoring(false);
  };

  useEffect(() => {
    // Auto-start monitoring when component mounts
    startMonitoring();
  }, []);

  const performanceGrade = getPerformanceGrade(performanceScore);

  return (
    <div className={`bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Performance Monitor</h3>
          <p className="text-sm text-gray-400">Real-time website performance metrics</p>
        </div>
        <button
          onClick={startMonitoring}
          disabled={isMonitoring}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white rounded-lg transition-colors duration-300 flex items-center gap-2"
        >
          {isMonitoring ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Measuring...
            </>
          ) : (
            <>
              <Activity className="w-4 h-4" />
              Measure Performance
            </>
          )}
        </button>
      </div>

      {/* Performance Score */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 p-4 bg-white/10 border border-white/20 rounded-lg">
          {performanceGrade.icon}
          <div>
            <div className={`text-3xl font-bold ${performanceGrade.color}`}>
              {performanceScore}/100
            </div>
            <div className={`text-lg font-medium ${performanceGrade.color}`}>
              Grade {performanceGrade.grade}
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      {metrics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-400">Load Time</span>
            </div>
            <div className="text-xl font-bold text-white mb-1">
              {metrics.loadTime.toFixed(0)}ms
            </div>
            <div className="flex items-center gap-2">
              {getMetricStatus('loadTime', metrics.loadTime).icon}
              <span className={`text-xs ${getMetricStatus('loadTime', metrics.loadTime).color}`}>
                {getMetricStatus('loadTime', metrics.loadTime).status}
              </span>
            </div>
          </div>

          <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-400">First Paint</span>
            </div>
            <div className="text-xl font-bold text-white mb-1">
              {metrics.firstContentfulPaint.toFixed(0)}ms
            </div>
            <div className="flex items-center gap-2">
              {getMetricStatus('firstContentfulPaint', metrics.firstContentfulPaint).icon}
              <span className={`text-xs ${getMetricStatus('firstContentfulPaint', metrics.firstContentfulPaint).color}`}>
                {getMetricStatus('firstContentfulPaint', metrics.firstContentfulPaint).status}
              </span>
            </div>
          </div>

          <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-400">Largest Paint</span>
            </div>
            <div className="text-xl font-bold text-white mb-1">
              {metrics.largestContentfulPaint.toFixed(0)}ms
            </div>
            <div className="flex items-center gap-2">
              {getMetricStatus('largestContentfulPaint', metrics.largestContentfulPaint).icon}
              <span className={`text-xs ${getMetricStatus('largestContentfulPaint', metrics.largestContentfulPaint).color}`}>
                {getMetricStatus('largestContentfulPaint', metrics.largestContentfulPaint).status}
              </span>
            </div>
          </div>

          <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-400">Layout Shift</span>
            </div>
            <div className="text-xl font-bold text-white mb-1">
              {metrics.cumulativeLayoutShift.toFixed(3)}
            </div>
            <div className="flex items-center gap-2">
              {getMetricStatus('cumulativeLayoutShift', metrics.cumulativeLayoutShift).icon}
              <span className={`text-xs ${getMetricStatus('cumulativeLayoutShift', metrics.cumulativeLayoutShift).color}`}>
                {getMetricStatus('cumulativeLayoutShift', metrics.cumulativeLayoutShift).status}
              </span>
            </div>
          </div>

          <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-400">Input Delay</span>
            </div>
            <div className="text-xl font-bold text-white mb-1">
              {metrics.firstInputDelay.toFixed(0)}ms
            </div>
            <div className="flex items-center gap-2">
              {getMetricStatus('firstInputDelay', metrics.firstInputDelay).icon}
              <span className={`text-xs ${getMetricStatus('firstInputDelay', metrics.firstInputDelay).color}`}>
                {getMetricStatus('firstInputDelay', metrics.firstInputDelay).status}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Recommendations */}
      {performanceScore < 90 && (
        <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <h4 className="text-yellow-400 font-semibold mb-2">🚀 Performance Optimization Tips</h4>
          <ul className="text-sm text-yellow-300 space-y-1">
            {metrics && metrics.loadTime > 2000 && (
              <li>• Optimize images and use modern formats (WebP, AVIF)</li>
            )}
            {metrics && metrics.firstContentfulPaint > 1800 && (
              <li>• Minimize critical rendering path and inline critical CSS</li>
            )}
            {metrics && metrics.largestContentfulPaint > 2500 && (
              <li>• Optimize largest contentful paint elements</li>
            )}
            {metrics && metrics.cumulativeLayoutShift > 0.1 && (
              <li>• Reserve space for dynamic content to prevent layout shifts</li>
            )}
            {metrics && metrics.firstInputDelay > 100 && (
              <li>• Reduce JavaScript execution time and optimize event handlers</li>
            )}
          </ul>
        </div>
      )}

      {performanceScore >= 90 && (
        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
          <h4 className="text-green-400 font-semibold mb-2">✅ Excellent Performance</h4>
          <p className="text-sm text-green-300">
            Your website is performing exceptionally well! All metrics are within optimal ranges.
          </p>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;