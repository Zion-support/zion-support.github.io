import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  useMemo,
} from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import {
  getMemoryUsage,
  collectPerformanceMetrics,
  performanceMonitor,
  debounce,
  throttle,
} from '../../utils/performanceUtils';

interface AdvancedMetrics {
  cls?: number;
  inp?: number;
  fcp?: number;
  lcp?: number;
  ttfb?: number;
  memory?: {
    used: number;
    total: number;
    percentage: number;
  };
  customMetrics?: Record<string, number>;
}

interface PerformanceThresholds {
  cls: number;
  inp: number;
  fcp: number;
  lcp: number;
  ttfb: number;
  memory: number;
}

interface PerformanceInsights {
  score: number;
  recommendations: string[];
  criticalIssues: string[];
  optimizations: string[];
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<AdvancedMetrics | null>(null);
  const [insights, setInsights] = useState<PerformanceInsights | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [realTimeMetrics, setRealTimeMetrics] = useState<
    Record<string, number>
  >({});

  const thresholds = useMemo(
    (): PerformanceThresholds => ({
      cls: 0.1,
      inp: 200,
      fcp: 1800,
      lcp: 2500,
      ttfb: 800,
      memory: 50,
    }),
    [],
  );

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const analysisRef = useRef<NodeJS.Timeout | null>(null);

  // Debounced metric update
  const updateMetrics = useCallback(
    debounce((newMetrics: AdvancedMetrics) => {
      setMetrics(prev => ({ ...prev, ...newMetrics }));
    }, 100),
    [setMetrics],
  );

  // Throttled real-time monitoring
  const updateRealTimeMetrics = useCallback(
    throttle(() => {
      const memory = getMemoryUsage();
      const customMetrics = collectPerformanceMetrics();

      setRealTimeMetrics({
        memoryUsed: memory?.used || 0,
        memoryPercentage: memory?.percentage || 0,
        ...customMetrics,
      });
    }, 1000),
    [],
  );

  const calculatePerformanceScore = useCallback(
    (currentMetrics: AdvancedMetrics): number => {
      let score = 100;

      // CLS scoring
      if (currentMetrics.cls && currentMetrics.cls > thresholds.cls) {
        score -= Math.min(20, (currentMetrics.cls / thresholds.cls) * 10);
      }

      // INP scoring
      if (currentMetrics.inp && currentMetrics.inp > thresholds.inp) {
        score -= Math.min(20, (currentMetrics.inp / thresholds.inp) * 10);
      }

      // FCP scoring
      if (currentMetrics.fcp && currentMetrics.fcp > thresholds.fcp) {
        score -= Math.min(20, (currentMetrics.fcp / thresholds.fcp) * 10);
      }

      // LCP scoring
      if (currentMetrics.lcp && currentMetrics.lcp > thresholds.lcp) {
        score -= Math.min(20, (currentMetrics.lcp / thresholds.lcp) * 10);
      }

      // Memory scoring
      if (
        currentMetrics.memory &&
        currentMetrics.memory.percentage > thresholds.memory
      ) {
        score -= Math.min(
          20,
          (currentMetrics.memory.percentage / thresholds.memory) * 10,
        );
      }

      return Math.max(0, Math.round(score));
    },
    [thresholds],
  );

  const generateInsights = useCallback(
    (currentMetrics: AdvancedMetrics): PerformanceInsights => {
      const score = calculatePerformanceScore(currentMetrics);
      const recommendations: string[] = [];
      const criticalIssues: string[] = [];
      const optimizations: string[] = [];

      // CLS analysis
      if (currentMetrics.cls && currentMetrics.cls > thresholds.cls * 2) {
        criticalIssues.push('High Cumulative Layout Shift');
        recommendations.push('Optimize images with proper dimensions');
        optimizations.push('Add loading placeholders for dynamic content');
      }

      // INP analysis
      if (currentMetrics.inp && currentMetrics.inp > thresholds.inp * 2) {
        criticalIssues.push('High Interaction to Next Paint');
        recommendations.push('Reduce JavaScript execution time');
        optimizations.push('Implement code splitting and lazy loading');
      }

      // FCP analysis
      if (currentMetrics.fcp && currentMetrics.fcp > thresholds.fcp * 2) {
        criticalIssues.push('Slow First Contentful Paint');
        recommendations.push('Optimize critical rendering path');
        optimizations.push('Minimize render-blocking resources');
      }

      // LCP analysis
      if (currentMetrics.lcp && currentMetrics.lcp > thresholds.lcp * 2) {
        criticalIssues.push('Slow Largest Contentful Paint');
        recommendations.push('Optimize largest content element');
        optimizations.push('Implement image optimization and preloading');
      }

      // Memory analysis
      if (
        currentMetrics.memory &&
        currentMetrics.memory.percentage > thresholds.memory * 2
      ) {
        criticalIssues.push('High Memory Usage');
        recommendations.push('Implement memory leak detection');
        optimizations.push('Optimize component lifecycle management');
      }

      return {
        score,
        recommendations,
        criticalIssues,
        optimizations,
      };
    },
    [calculatePerformanceScore, thresholds],
  );

  const handleMetric = useCallback(
    (metric: { name: string; value: number }) => {
      performanceMonitor.start(`metric-${metric.name}`);

      const memory = getMemoryUsage();
      const customMetrics = collectPerformanceMetrics();

      const newMetrics: AdvancedMetrics = {
        [metric.name.toLowerCase()]: metric.value,
        memory,
        customMetrics,
      };

      updateMetrics(newMetrics);

      performanceMonitor.end(`metric-${metric.name}`);
    },
    [updateMetrics],
  );

  const runAnalysis = useCallback(() => {
    setIsAnalyzing(true);
    performanceMonitor.start('analysis');

    analysisRef.current = setTimeout(() => {
      if (metrics) {
        const newInsights = generateInsights(metrics);
        setInsights(newInsights);
      }
      setIsAnalyzing(false);
      performanceMonitor.end('analysis');
    }, 2000);
  }, [metrics, generateInsights]);

  const getStatusColor = (value: number, threshold: number) => {
    if (value <= threshold * 0.5) return 'text-green-600';
    if (value <= threshold) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusIcon = (value: number, threshold: number) => {
    if (value <= threshold * 0.5) return '✅';
    if (value <= threshold) return '⚠️';
    return '❌';
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  useEffect(() => {
    // Initialize performance monitoring
    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    // Start real-time monitoring
    intervalRef.current = setInterval(updateRealTimeMetrics, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (analysisRef.current) {
        clearTimeout(analysisRef.current);
      }
      performanceMonitor.clear();
    };
  }, [handleMetric, updateRealTimeMetrics]);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className='fixed bottom-4 right-4 bg-black text-white p-3 rounded-lg text-xs font-mono max-w-sm z-50'>
      <div className='flex justify-between items-center mb-2'>
        <div className='font-bold'>Advanced Performance Monitor</div>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className='text-blue-400 hover:text-blue-300 cursor-pointer'
          aria-label={
            isVisible ? 'Hide performance monitor' : 'Show performance monitor'
          }
        >
          {isVisible ? '▼' : '▶'}
        </button>
      </div>

      {isVisible && (
        <div className='space-y-2'>
          {/* Performance Score */}
          <div className='border-b border-gray-600 pb-2'>
            <div className='flex justify-between items-center'>
              <span>Performance Score:</span>
              <span
                className={`font-bold ${getScoreColor(insights?.score || 0)}`}
              >
                {Math.round(insights?.score || 0)}/100
              </span>
            </div>
          </div>

          {/* Core Web Vitals */}
          <div className='space-y-1'>
            <div className='flex justify-between'>
              <span>CLS:</span>
              <span
                className={getStatusColor(metrics?.cls || 0, thresholds.cls)}
              >
                {getStatusIcon(metrics?.cls || 0, thresholds.cls)}{' '}
                {metrics?.cls?.toFixed(3) || 'N/A'}
              </span>
            </div>
            <div className='flex justify-between'>
              <span>INP:</span>
              <span
                className={getStatusColor(metrics?.inp || 0, thresholds.inp)}
              >
                {getStatusIcon(metrics?.inp || 0, thresholds.inp)}{' '}
                {metrics?.inp?.toFixed(1) || 'N/A'}ms
              </span>
            </div>
            <div className='flex justify-between'>
              <span>FCP:</span>
              <span
                className={getStatusColor(metrics?.fcp || 0, thresholds.fcp)}
              >
                {getStatusIcon(metrics?.fcp || 0, thresholds.fcp)}{' '}
                {metrics?.fcp?.toFixed(1) || 'N/A'}ms
              </span>
            </div>
            <div className='flex justify-between'>
              <span>LCP:</span>
              <span
                className={getStatusColor(metrics?.lcp || 0, thresholds.lcp)}
              >
                {getStatusIcon(metrics?.lcp || 0, thresholds.lcp)}{' '}
                {metrics?.lcp?.toFixed(1) || 'N/A'}ms
              </span>
            </div>
            <div className='flex justify-between'>
              <span>TTFB:</span>
              <span
                className={getStatusColor(metrics?.ttfb || 0, thresholds.ttfb)}
              >
                {getStatusIcon(metrics?.ttfb || 0, thresholds.ttfb)}{' '}
                {metrics?.ttfb?.toFixed(1) || 'N/A'}ms
              </span>
            </div>
          </div>

          {/* Real-time Metrics */}
          <div className='border-t border-gray-600 pt-2 space-y-1'>
            <div className='font-semibold'>Real-time:</div>
            <div className='flex justify-between'>
              <span>Memory:</span>
              <span
                className={
                  realTimeMetrics.memoryPercentage > thresholds.memory
                    ? 'text-red-400'
                    : 'text-green-400'
                }
              >
                {realTimeMetrics.memoryUsed || 0}MB (
                {realTimeMetrics.memoryPercentage || 0}%)
              </span>
            </div>
            {realTimeMetrics.resourceCount && (
              <div className='flex justify-between'>
                <span>Resources:</span>
                <span>{realTimeMetrics.resourceCount}</span>
              </div>
            )}
          </div>

          {/* Analysis Button */}
          <div className='border-t border-gray-600 pt-2'>
            <button
              onClick={runAnalysis}
              disabled={isAnalyzing}
              className='w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-1 px-2 rounded text-xs'
            >
              {isAnalyzing ? 'Analyzing...' : 'Run Analysis'}
            </button>
          </div>

          {/* Insights */}
          {insights && (
            <div className='border-t border-gray-600 pt-2 space-y-1'>
              <div className='font-semibold'>Insights:</div>
              {insights.criticalIssues.length > 0 && (
                <div className='text-red-400'>
                  <div className='font-semibold'>Critical:</div>
                  {insights.criticalIssues.slice(0, 2).map((issue, index) => (
                    <div key={index} className='text-xs'>
                      • {issue}
                    </div>
                  ))}
                </div>
              )}
              {insights.recommendations.length > 0 && (
                <div className='text-yellow-400'>
                  <div className='font-semibold'>Recommendations:</div>
                  {insights.recommendations.slice(0, 2).map((rec, index) => (
                    <div key={index} className='text-xs'>
                      • {rec}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;
