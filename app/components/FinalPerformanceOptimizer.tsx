import React, { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface FinalMetrics {
  cls: number;
  inp: number;
  fcp: number;
  lcp: number;
  ttfb: number;
  memory?: number;
  connection?: string;
  devicePixelRatio?: number;
  batteryLevel?: number;
  networkType?: string;
  connectionSpeed?: number;
  timestamp?: number;
  performanceScore?: number;
}

interface PerformanceThresholds {
  cls: number;
  inp: number;
  fcp: number;
  lcp: number;
  ttfb: number;
}

interface PerformanceHistory {
  timestamp: number;
  metrics: FinalMetrics;
}

interface PerformanceInsights {
  score: number;
  recommendations: string[];
  criticalIssues: string[];
  optimizations: string[];
}

const FinalPerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<FinalMetrics | null>(null);
  const [history, setHistory] = useState<PerformanceHistory[]>([]);
  const [insights, setInsights] = useState<PerformanceInsights | null>(null);
  const [thresholds] = useState<PerformanceThresholds>({
    cls: 0.1,
    inp: 200,
    fcp: 1800,
    lcp: 2500,
    ttfb: 800
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const analysisRef = useRef<NodeJS.Timeout | null>(null);

  const getFinalPerformanceInfo = useCallback(() => {
    const memory = (performance as any).memory;
    const connection = (navigator as any).connection;
    const battery = (navigator as any).getBattery;
    
    return {
      memory: memory ? Math.round(memory.usedJSHeapSize / 1048576) : undefined,
      connection: connection ? connection.effectiveType : undefined,
      devicePixelRatio: window.devicePixelRatio,
      batteryLevel: battery ? undefined : undefined,
      networkType: connection ? connection.type : undefined,
      connectionSpeed: connection ? connection.downlink : undefined,
      timestamp: Date.now()
    };
  }, []);

  const calculatePerformanceScore = useCallback((currentMetrics: FinalMetrics): number => {
    let score = 100;
    
    // CLS scoring (0-25 points)
    if (currentMetrics.cls <= 0.1) score -= 0;
    else if (currentMetrics.cls <= 0.25) score -= 5;
    else score -= 15;
    
    // INP scoring (0-25 points)
    if (currentMetrics.inp <= 200) score -= 0;
    else if (currentMetrics.inp <= 500) score -= 5;
    else score -= 15;
    
    // FCP scoring (0-25 points)
    if (currentMetrics.fcp <= 1800) score -= 0;
    else if (currentMetrics.fcp <= 3000) score -= 5;
    else score -= 15;
    
    // LCP scoring (0-25 points)
    if (currentMetrics.lcp <= 2500) score -= 0;
    else if (currentMetrics.lcp <= 4000) score -= 5;
    else score -= 15;
    
    return Math.max(0, score);
  }, []);

  const generateInsights = useCallback((currentMetrics: FinalMetrics): PerformanceInsights => {
    const score = calculatePerformanceScore(currentMetrics);
    const recommendations: string[] = [];
    const criticalIssues: string[] = [];
    const optimizations: string[] = [];

    // CLS analysis
    if (currentMetrics.cls > 0.25) {
      criticalIssues.push('High Cumulative Layout Shift (CLS)');
      recommendations.push('Optimize images with proper dimensions');
      optimizations.push('Add loading placeholders for dynamic content');
    }

    // INP analysis
    if (currentMetrics.inp > 500) {
      criticalIssues.push('High Interaction to Next Paint (INP)');
      recommendations.push('Reduce JavaScript execution time');
      optimizations.push('Implement code splitting and lazy loading');
    }

    // FCP analysis
    if (currentMetrics.fcp > 3000) {
      criticalIssues.push('Slow First Contentful Paint (FCP)');
      recommendations.push('Optimize critical rendering path');
      optimizations.push('Minimize render-blocking resources');
    }

    // LCP analysis
    if (currentMetrics.lcp > 4000) {
      criticalIssues.push('Slow Largest Contentful Paint (LCP)');
      recommendations.push('Optimize largest content element');
      optimizations.push('Implement image optimization and preloading');
    }

    // Memory analysis
    if (currentMetrics.memory && currentMetrics.memory > 50) {
      recommendations.push('High memory usage detected');
      optimizations.push('Implement memory leak detection');
    }

    // Network analysis
    if (currentMetrics.connection === 'slow-2g' || currentMetrics.connection === '2g') {
      recommendations.push('Slow network connection detected');
      optimizations.push('Implement progressive loading');
    }

    return {
      score,
      recommendations,
      criticalIssues,
      optimizations
    };
  }, [calculatePerformanceScore]);

  const handleMetric = useCallback((metric: any) => {
    const additionalInfo = getFinalPerformanceInfo();
    const finalMetrics: FinalMetrics = {
      cls: 0,
      inp: 0,
      fcp: 0,
      lcp: 0,
      ttfb: 0,
      ...additionalInfo,
      [metric.name]: metric.value
    };
    
    const performanceScore = calculatePerformanceScore(finalMetrics);
    finalMetrics.performanceScore = performanceScore;
    
    setMetrics(prev => ({
      ...prev,
      ...finalMetrics
    }));
    
    // Add to history
    setHistory(prev => [
      ...prev.slice(-9), // Keep last 10 entries
      {
        timestamp: Date.now(),
        metrics: finalMetrics
      }
    ]);

    // Generate insights
    const newInsights = generateInsights(finalMetrics);
    setInsights(newInsights);
  }, [getFinalPerformanceInfo, calculatePerformanceScore, generateInsights]);

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

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const runAnalysis = () => {
    setIsAnalyzing(true);
    analysisRef.current = setTimeout(() => {
      setIsAnalyzing(false);
      if (metrics) {
        const newInsights = generateInsights(metrics);
        setInsights(newInsights);
      }
    }, 2000);
  };

  useEffect(() => {
    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    // Enhanced performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          console.log('Navigation timing:', entry);
        }
        if (entry.entryType === 'resource') {
          console.log('Resource timing:', entry);
        }
      }
    });

    observer.observe({ entryTypes: ['navigation', 'resource'] });

    // Periodic monitoring
    intervalRef.current = setInterval(() => {
      const currentMetrics = getFinalPerformanceInfo();
      setMetrics(prev => ({
        ...prev,
        ...currentMetrics
      }));
    }, 5000);

    return () => {
      observer.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (analysisRef.current) {
        clearTimeout(analysisRef.current);
      }
    };
  }, [handleMetric, getFinalPerformanceInfo]);

  if (process.env.NODE_ENV === 'development' && metrics) {
    return (
      <div className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-lg text-xs font-mono max-w-sm">
        <div className="flex justify-between items-center mb-2">
          <div className="font-bold">Final Performance Optimizer</div>
          <button
            onClick={toggleVisibility}
            className="text-blue-400 hover:text-blue-300 cursor-pointer"
          >
            {isVisible ? '▼' : '▶'}
          </button>
        </div>
        
        {isVisible && (
          <div className="space-y-2">
            {/* Performance Score */}
            <div className="border-b border-gray-600 pb-2">
              <div className="flex justify-between items-center">
                <span>Performance Score:</span>
                <span className={`font-bold ${getScoreColor(metrics.performanceScore || 0)}`}>
                  {Math.round(metrics.performanceScore || 0)}/100
                </span>
              </div>
            </div>

            {/* Core Web Vitals */}
            <div className="space-y-1">
              <div className="flex justify-between">
                <span>CLS:</span>
                <span className={getStatusColor(metrics.cls, thresholds.cls)}>
                  {getStatusIcon(metrics.cls, thresholds.cls)} {metrics.cls?.toFixed(3)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>INP:</span>
                <span className={getStatusColor(metrics.inp, thresholds.inp)}>
                  {getStatusIcon(metrics.inp, thresholds.inp)} {metrics.inp?.toFixed(1)}ms
                </span>
              </div>
              <div className="flex justify-between">
                <span>FCP:</span>
                <span className={getStatusColor(metrics.fcp, thresholds.fcp)}>
                  {getStatusIcon(metrics.fcp, thresholds.fcp)} {metrics.fcp?.toFixed(1)}ms
                </span>
              </div>
              <div className="flex justify-between">
                <span>LCP:</span>
                <span className={getStatusColor(metrics.lcp, thresholds.lcp)}>
                  {getStatusIcon(metrics.lcp, thresholds.lcp)} {metrics.lcp?.toFixed(1)}ms
                </span>
              </div>
              <div className="flex justify-between">
                <span>TTFB:</span>
                <span className={getStatusColor(metrics.ttfb, thresholds.ttfb)}>
                  {getStatusIcon(metrics.ttfb, thresholds.ttfb)} {metrics.ttfb?.toFixed(1)}ms
                </span>
              </div>
            </div>

            {/* System Info */}
            <div className="border-t border-gray-600 pt-2 space-y-1">
              {metrics.memory && (
                <div className="flex justify-between">
                  <span>Memory:</span>
                  <span>{metrics.memory}MB</span>
                </div>
              )}
              {metrics.connection && (
                <div className="flex justify-between">
                  <span>Connection:</span>
                  <span>{metrics.connection}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>DPR:</span>
                <span>{metrics.devicePixelRatio}</span>
              </div>
              {metrics.networkType && (
                <div className="flex justify-between">
                  <span>Network:</span>
                  <span>{metrics.networkType}</span>
                </div>
              )}
              {metrics.connectionSpeed && (
                <div className="flex justify-between">
                  <span>Speed:</span>
                  <span>{metrics.connectionSpeed}Mbps</span>
                </div>
              )}
            </div>

            {/* Analysis Button */}
            <div className="border-t border-gray-600 pt-2">
              <button
                onClick={runAnalysis}
                disabled={isAnalyzing}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-1 px-2 rounded text-xs"
              >
                {isAnalyzing ? 'Analyzing...' : 'Run Analysis'}
              </button>
            </div>

            {/* Insights */}
            {insights && (
              <div className="border-t border-gray-600 pt-2 space-y-1">
                <div className="font-semibold">Insights:</div>
                {insights.criticalIssues.length > 0 && (
                  <div className="text-red-400">
                    <div className="font-semibold">Critical:</div>
                    {insights.criticalIssues.map((issue, index) => (
                      <div key={index} className="text-xs">• {issue}</div>
                    ))}
                  </div>
                )}
                {insights.recommendations.length > 0 && (
                  <div className="text-yellow-400">
                    <div className="font-semibold">Recommendations:</div>
                    {insights.recommendations.slice(0, 2).map((rec, index) => (
                      <div key={index} className="text-xs">• {rec}</div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default FinalPerformanceOptimizer;